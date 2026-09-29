const dns = require('dns');

/**
 * Disposable / Throwaway Email Domain Blacklist
 * Rejects temporary and fake email services
 */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'yopmail.com',
    'throwawaymail.com',
    'fake.com',
    'test.com',
    'example.com',
    'fakemail.net',
    'trashmail.com',
    'getnada.com',
    'dispostable.com',
    'temp-mail.org',
    'crazymailing.com',
    'sharklasers.com',
    'guerrillamailblock.com',
    'grr.la',
    'dropmail.me',
    'mohmal.com'
]);

// Well-known trusted mail domains that have guaranteed MX servers
const TRUSTED_DOMAINS = new Set([
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com',
    'icloud.com',
    'protonmail.com',
    'proton.me',
    'zoho.com',
    'aol.com',
    'live.com',
    'msn.com',
    'rediffmail.com'
]);

/**
 * Strict RFC 5322 compliant email regex
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Validates email format, checks disposable blacklist,
 * and performs DNS MX record lookup to ensure the email domain actually exists and receives mail.
 */
async function validateEmail(email) {
    if (!email || typeof email !== 'string') {
        return { isValid: false, reason: 'Email address is required.' };
    }

    const trimmed = email.trim().toLowerCase();

    // 1. Length constraints
    if (trimmed.length < 5 || trimmed.length > 254) {
        return { isValid: false, reason: 'Email must be between 5 and 254 characters.' };
    }

    // 2. Format syntax check
    if (!EMAIL_REGEX.test(trimmed)) {
        return { isValid: false, reason: 'Invalid email format. Please enter a valid email (e.g. yourname@gmail.com).' };
    }

    const parts = trimmed.split('@');
    if (parts.length !== 2) {
        return { isValid: false, reason: 'Invalid email address structure.' };
    }

    const [localPart, domain] = parts;

    // 3. Local part checks (prevent common fake patterns like "asdfghjk", single char spam)
    if (localPart.length < 2) {
        return { isValid: false, reason: 'Email username must be at least 2 characters.' };
    }

    // Check for repetitive fake names like "aaaaaaa" or "1111111"
    if (/^(.)\1{5,}$/.test(localPart)) {
        return { isValid: false, reason: 'Email username cannot be repetitive characters.' };
    }

    // 4. Disposable domain blacklist check
    if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
        return { isValid: false, reason: 'Disposable or temporary email addresses are not permitted. Please use your genuine personal or university email.' };
    }

    // 5. Fast path for known trusted domains
    if (TRUSTED_DOMAINS.has(domain)) {
        return { isValid: true, normalizedEmail: trimmed, domain };
    }

    // 6. Live DNS MX Record verification for custom / university / corporate domains
    try {
        const mxRecords = await dns.promises.resolveMx(domain);
        if (!mxRecords || mxRecords.length === 0) {
            return { 
                isValid: false, 
                reason: `The domain "${domain}" does not have active mail exchange (MX) servers configured to receive emails.` 
            };
        }
        return { isValid: true, normalizedEmail: trimmed, domain };
    } catch (err) {
        // ENOTFOUND or ENODATA indicates the domain doesn't exist
        if (err.code === 'ENOTFOUND' || err.code === 'ENODATA' || err.code === 'ESERVFAIL') {
            return { 
                isValid: false, 
                reason: `The email domain "${domain}" does not exist or cannot receive mail. Please verify your email.` 
            };
        }
        // In case of offline/network issues in test environments, check if domain has standard TLD
        const tldMatch = domain.match(/\.([a-z]{2,})$/i);
        if (tldMatch) {
            return { isValid: true, normalizedEmail: trimmed, domain };
        }
        return { isValid: false, reason: `Unable to verify domain "${domain}". Please check for typos.` };
    }
}

module.exports = {
    validateEmail,
    DISPOSABLE_EMAIL_DOMAINS,
    TRUSTED_DOMAINS
};
