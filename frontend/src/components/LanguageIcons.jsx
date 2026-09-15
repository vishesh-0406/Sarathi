// Authentic official vector SVG logos for Python, Java, JavaScript, and C++

export function PythonIcon({ size = 18, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 128 128"
            className={className}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
            <defs>
                <linearGradient id="pyBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#387eb8" />
                    <stop offset="100%" stopColor="#366994" />
                </linearGradient>
                <linearGradient id="pyYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffe873" />
                    <stop offset="100%" stopColor="#ffc331" />
                </linearGradient>
            </defs>
            <path
                fill="url(#pyBlueGrad)"
                d="M63.02 0c-15.34.02-28.7 6.13-28.7 18.06v13.55h28.7v4.06H19.78C7.86 35.67 0 44.75 0 60.1c0 15.34 8.79 24.42 20.72 24.42h7.32v-11.2c0-11.93 10.37-21.72 22.3-21.72h28.7V31.61c0-11.93-13.36-18.06-28.7-18.06h-7.32V0h12.68zm-14.7 9.17a4.57 4.57 0 1 1 0 9.15 4.57 4.57 0 0 1 0-9.15z"
            />
            <path
                fill="url(#pyYellowGrad)"
                d="M64.98 128c15.34-.02 28.7-6.13 28.7-18.06v-13.55H64.98v-4.06h43.24c11.92 0 19.78-9.08 19.78-24.43 0-15.34-8.79-24.42-20.72-24.42h-7.32v11.2c0 11.93-10.37 21.72-22.3 21.72H49.02v19.99c0 11.93 13.36 18.06 28.7 18.06h7.32V128H64.98zm14.7-9.17a4.57 4.57 0 1 1 0-9.15 4.57 4.57 0 0 1 0 9.15z"
            />
        </svg>
    );
}

export function JavaIcon({ size = 18, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 128 128"
            className={className}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
            <path
                fill="#5382a1"
                d="M46.7 101.9c0 0-7.3 4.2 5.2 5.8 15.2 1.9 23-1.6 39.8-7.3 0 0 4.2 2.7-2.6 4.8-24.5 7.6-54.8 2-42.4-3.3zm-3.8-15.8c0 0-8.2 5.8 4.2 7.4 15.6 2 28.8-1.5 49.6-9 0 0 3.3 2.9-3.7 5.1-26.6 8.5-62.8 3.5-50.1-3.5zm35.8-27.4s11.5 11.8-11.2 21.3c-18.3 7.6-38.4 4.3-51.5 1-1.6-.4 2.1-2.9 3.5-3.2 13.7-3 30.6-2.2 44.8-8.2 10.9-4.7 14.4-10.9 14.4-10.9zm-2.8-17.8s15.9 16.3-15.5 29.5c-25.2 10.6-53 5.9-70.9 1.4-2.2-.6 2.9-4 4.8-4.4 18.9-4.1 42.2-3.1 61.8-11.3 15-6.5 19.8-15.2 19.8-15.2z"
            />
            <path
                fill="#e76f00"
                d="M72.9 23.9s8.1 8.2-7.8 20.8c-12.7 10.1-26.5 9.8-37.4 20-3.3 3.1-6.1 6.6-8.2 10.5 0 0-1.8-4.9 3.6-9.1 11.9-9.1 27.6-11.2 36.3-19.8 10.6-10.4 13.5-22.4 13.5-22.4zm23.9 44.7c-3.5-2.7-8.1-4.2-12.8-4.4 3.7-3.8 6.5-8.4 8.1-13.4 1.7-5.1 2-10.6.9-15.9-1.2-5.3-3.9-10.2-7.7-14.1s-8.7-6.8-14.1-8.3c0 0 3.8 2.2 4.9 5.3 1.1 3.1.9 6.6-.7 9.5s-4.3 5.1-7.5 6.4c-3.2 1.3-6.8 1.4-10.1.4 0 0 6.6 4.9 12.8 5.6 6.2.7 12.5-1.1 17.6-4.9 1.6 3.6 2 7.6 1.1 11.5s-2.8 7.4-5.5 10.1c4.5.3 8.9 1.8 12.9 4.2z"
            />
            <path
                fill="#5382a1"
                d="M103.7 114.7c-33.1 8.4-78.6 6.3-95.2-1.9-4.7-2.3 3.3-6.2 6.7-7 13.8-3.2 27.2-2.5 40.5-2.1 16.9.5 33.7.8 50.3-3.6 4.6-1.2 6.9 2.5 3.7 5.2-1.9 1.8-3.9 3.5-6 4.4z"
            />
        </svg>
    );
}

export function JSIcon({ size = 18, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 128 128"
            className={className}
            style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '3px' }}
        >
            <rect width="128" height="128" rx="14" fill="#F7DF1E" />
            <path
                fill="#000000"
                d="M37.5 98.6c4.6 2.6 10.4 4.5 16.8 4.5 9.4 0 15.3-4.6 15.3-13.3V44h15.8v45.8c0 18.2-10.9 26.2-29.8 26.2-8.9 0-16.7-2.7-21.7-6l3.6-11.4zm54.3-1.6c4.2 2.4 9.6 4.2 15.2 4.2 7.7 0 12.4-3.8 12.4-9.3 0-5.3-3.6-8.2-12.7-12-12.8-5.3-21.3-13.1-21.3-24.8 0-13.8 11.1-24.1 28.5-24.1 7.6 0 14.1 1.9 18.6 4.5l-4 12.1c-3.6-2-8.3-3.5-14.3-3.5-7.3 0-11.6 3.8-11.6 8.5 0 5.1 3.7 7.7 13.5 11.8 13.3 5.7 20.6 13.1 20.6 25.1 0 14.7-11.4 24.8-30.7 24.8-9.1 0-17.6-2.6-22.3-5.7l4.1-12.1z"
            />
        </svg>
    );
}

export function CPPIcon({ size = 18, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 128 128"
            className={className}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
            <polygon fill="#00599C" points="64,2 119.5,34 119.5,94 64,126 8.5,94 8.5,34" />
            <polygon fill="#004482" points="64,126 119.5,94 119.5,34 64,66" />
            <path
                fill="#FFFFFF"
                d="M66.4 51.5c-2.4-4-6.8-6.6-12.4-6.6-8.3 0-14.8 6.4-14.8 15.3s6.5 15.3 14.8 15.3c5.6 0 10-2.6 12.4-6.6l8.8 5.1c-4.8 7.3-12.5 11.5-21.2 11.5-15 0-25.8-11-25.8-25.3 0-14.3 10.8-25.3 25.8-25.3 8.7 0 16.4 4.2 21.2 11.5l-8.8 5.1zM82 66.5h-5.5V61H82v-5.5h5.5V61H93v5.5h-5.5V72H82v-5.5zm18 0h-5.5V61H100v-5.5h5.5V61H111v5.5h-5.5V72H100v-5.5z"
            />
        </svg>
    );
}

export function getLanguageIcon(lang, size = 18, className = "") {
    switch (lang) {
        case 'python':
            return <PythonIcon size={size} className={className} />;
        case 'java':
            return <JavaIcon size={size} className={className} />;
        case 'javascript':
            return <JSIcon size={size} className={className} />;
        case 'cpp':
            return <CPPIcon size={size} className={className} />;
        default:
            return <PythonIcon size={size} className={className} />;
    }
}
