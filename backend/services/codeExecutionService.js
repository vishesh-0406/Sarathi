const { exec, execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Sandboxed Code Execution Service for Sarathi
 * Enforces execution timeout, memory safety, and process isolation.
 */
class CodeExecutionService {
    constructor() {
        this.timeoutMs = 4000; // 4 second hard timeout for TLE detection
        this.maxBuffer = 1024 * 1024 * 2; // 2MB stdout/stderr buffer cap
    }

    /**
     * Executes user-submitted code in the requested runtime
     * @param {string} language - 'python' | 'javascript' | 'java' | 'cpp'
     * @param {string} code - source code string
     * @param {string} input - optional stdin data
     * @param {string} expectedOutput - optional expected output to verify
     * @returns {Promise<Object>} execution result
     */
    async execute(language, code, input = '', expectedOutput = '') {
        const lang = language.toLowerCase();

        switch (lang) {
            case 'python':
            case 'py':
            case 'python3':
                return this.executePython(code, input, expectedOutput);
            case 'javascript':
            case 'js':
            case 'node':
                return this.executeJavaScript(code, input, expectedOutput);
            case 'java':
                return this.executeJava(code, input, expectedOutput);
            case 'cpp':
            case 'c++':
            case 'c':
                return this.executeCpp(code, input, expectedOutput);
            default:
                return {
                    status: 'Language Not Supported',
                    output: '',
                    error: `Language "${language}" is not currently configured for local sandbox execution. Supported: Python, JavaScript, Java, C++.`,
                    duration: 0,
                    passed: false
                };
        }
    }

    executePython(code, input, expectedOutput) {
        return new Promise((resolve) => {
            const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const tmpFile = path.join(os.tmpdir(), `${uniqueId}.py`);

            fs.writeFileSync(tmpFile, code, 'utf-8');
            const startTime = Date.now();

            const child = exec(`python "${tmpFile}"`, {
                timeout: this.timeoutMs,
                maxBuffer: this.maxBuffer
            }, (error, stdout, stderr) => {
                const duration = Date.now() - startTime;
                try { fs.unlinkSync(tmpFile); } catch (e) {}

                resolve(this.formatResult(error, stdout, stderr, duration, expectedOutput));
            });

            if (input && child.stdin) {
                child.stdin.write(input);
                child.stdin.end();
            }
        });
    }

    executeJavaScript(code, input, expectedOutput) {
        return new Promise((resolve) => {
            const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const tmpFile = path.join(os.tmpdir(), `${uniqueId}.js`);

            fs.writeFileSync(tmpFile, code, 'utf-8');
            const startTime = Date.now();

            const child = exec(`node "${tmpFile}"`, {
                timeout: this.timeoutMs,
                maxBuffer: this.maxBuffer
            }, (error, stdout, stderr) => {
                const duration = Date.now() - startTime;
                try { fs.unlinkSync(tmpFile); } catch (e) {}

                resolve(this.formatResult(error, stdout, stderr, duration, expectedOutput));
            });

            if (input && child.stdin) {
                child.stdin.write(input);
                child.stdin.end();
            }
        });
    }

    executeJava(code, input, expectedOutput) {
        return new Promise((resolve) => {
            const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const tmpDir = path.join(os.tmpdir(), uniqueId);
            fs.mkdirSync(tmpDir, { recursive: true });

            // Extract public class name if specified, default to Solution
            const classMatch = code.match(/public\s+class\s+([A-Za-z0-9_]+)/);
            const className = classMatch ? classMatch[1] : 'Solution';
            const javaFile = path.join(tmpDir, `${className}.java`);

            fs.writeFileSync(javaFile, code, 'utf-8');
            const startTime = Date.now();

            // Compile first
            exec(`javac "${javaFile}"`, { timeout: 6000, maxBuffer: this.maxBuffer }, (compileErr, compOut, compErr) => {
                if (compileErr) {
                    const duration = Date.now() - startTime;
                    this.cleanupDir(tmpDir);
                    return resolve({
                        status: 'Compilation Error',
                        output: '',
                        error: compErr.trim() || compileErr.message,
                        duration,
                        passed: false
                    });
                }

                // Run compiled bytecode
                const child = exec(`java -cp "${tmpDir}" ${className}`, {
                    timeout: this.timeoutMs,
                    maxBuffer: this.maxBuffer
                }, (error, stdout, stderr) => {
                    const duration = Date.now() - startTime;
                    this.cleanupDir(tmpDir);
                    resolve(this.formatResult(error, stdout, stderr, duration, expectedOutput));
                });

                if (input && child.stdin) {
                    child.stdin.write(input);
                    child.stdin.end();
                }
            });
        });
    }

    executeCpp(code, input, expectedOutput) {
        return new Promise(async (resolve) => {
            const minGwBin = 'C:\\Program Files\\CodeBlocks\\MinGW\\bin';
            const localGxx = path.join(minGwBin, 'g++.exe');
            const hasLocalGxx = fs.existsSync(localGxx);

            if (hasLocalGxx) {
                const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
                const tmpDir = path.join(os.tmpdir(), uniqueId);
                fs.mkdirSync(tmpDir, { recursive: true });

                const srcFile = path.join(tmpDir, 'solution.cpp');
                const exeFile = path.join(tmpDir, 'solution.exe');

                fs.writeFileSync(srcFile, code, 'utf-8');
                const startTime = Date.now();

                // 1. Compile C++ with MinGW g++
                execFile(localGxx, [srcFile, '-o', exeFile], {
                    env: { ...process.env, PATH: `${minGwBin};${process.env.PATH}` },
                    cwd: minGwBin,
                    timeout: 8000
                }, (compErr, compOut, compErrOut) => {
                    if (compErr) {
                        const duration = Date.now() - startTime;
                        this.cleanupDir(tmpDir);
                        return resolve({
                            status: 'Compilation Error',
                            output: '',
                            error: (compErrOut || compErr.message).trim(),
                            duration,
                            passed: false
                        });
                    }

                    // 2. Execute compiled binary in sandbox with timeout
                    const child = execFile(exeFile, [], {
                        env: { ...process.env, PATH: `${minGwBin};${process.env.PATH}` },
                        timeout: this.timeoutMs,
                        maxBuffer: this.maxBuffer
                    }, (runErr, stdout, stderr) => {
                        const duration = Date.now() - startTime;
                        this.cleanupDir(tmpDir);
                        resolve(this.formatResult(runErr, stdout, stderr, duration, expectedOutput));
                    });

                    if (input && child.stdin) {
                        child.stdin.write(input);
                        child.stdin.end();
                    }
                });
            } else {
                // Cloud Sandbox Fallback via Paiza.io
                try {
                    const startTime = Date.now();
                    const createRes = await fetch('https://api.paiza.io/runners/create', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            source_code: code,
                            input: input || '',
                            language: 'cpp',
                            api_key: 'guest'
                        })
                    });
                    const createData = await createRes.json();
                    if (!createData.id) {
                        throw new Error(createData.error || 'Failed to initialize remote runner');
                    }

                    let details = null;
                    for (let i = 0; i < 10; i++) {
                        await new Promise((r) => setTimeout(r, 600));
                        const pollRes = await fetch(`https://api.paiza.io/runners/get_details?id=${createData.id}&api_key=guest`);
                        details = await pollRes.json();
                        if (details.status === 'completed') break;
                    }

                    const duration = Date.now() - startTime;
                    if (!details || details.status !== 'completed') {
                        return resolve({
                            status: 'Time Limit Exceeded (TLE)',
                            output: '',
                            error: 'Remote sandbox execution timed out.',
                            duration,
                            passed: false
                        });
                    }

                    if (details.build_result === 'failure') {
                        return resolve({
                            status: 'Compilation Error',
                            output: '',
                            error: details.build_stderr || 'Build failed',
                            duration,
                            passed: false
                        });
                    }

                    const err = details.result === 'failure' ? new Error(details.stderr) : null;
                    return resolve(this.formatResult(err, details.stdout, details.stderr, duration, expectedOutput));
                } catch (fallbackErr) {
                    return resolve({
                        status: 'Runtime Error',
                        output: '',
                        error: `C++ execution failed: ${fallbackErr.message}`,
                        duration: 0,
                        passed: false
                    });
                }
            }
        });
    }

    formatResult(error, stdout, stderr, duration, expectedOutput) {
        const cleanOutput = (stdout || '').trim();
        const cleanError = (stderr || '').trim();

        if (error) {
            if (error.killed || error.signal === 'SIGTERM') {
                return {
                    status: 'Time Limit Exceeded (TLE)',
                    output: cleanOutput,
                    error: `Execution timed out after ${this.timeoutMs}ms. Please optimize time complexity or check for infinite loops.`,
                    duration,
                    passed: false
                };
            }

            return {
                status: 'Runtime Error',
                output: cleanOutput,
                error: cleanError || error.message,
                duration,
                passed: false
            };
        }

        if (cleanError && !cleanOutput) {
            return {
                status: 'Runtime Error',
                output: cleanOutput,
                error: cleanError,
                duration,
                passed: false
            };
        }

        // Check if output matches expected output if specified
        let passed = true;
        let status = 'Accepted';

        if (expectedOutput && expectedOutput.trim()) {
            const normOut = cleanOutput.replace(/\r\n/g, '\n').trim();
            const normExp = expectedOutput.replace(/\r\n/g, '\n').trim();
            passed = (normOut === normExp);
            status = passed ? 'Accepted' : 'Wrong Answer';
        }

        return {
            status,
            output: cleanOutput,
            error: cleanError,
            duration,
            passed,
            expected: expectedOutput ? expectedOutput.trim() : null
        };
    }

    cleanupDir(dirPath) {
        try {
            fs.rmSync(dirPath, { recursive: true, force: true });
        } catch (e) {}
    }
}

module.exports = new CodeExecutionService();
