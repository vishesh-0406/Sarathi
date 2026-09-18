// Authentic Vector SVG logos for all 20 Tech Companies (Service & Product)

export function TCSLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#001C3D" />
            {/* Official Tata Twin-Arch Crest */}
            <path d="M36 28c0 10 6 18 14 20 8-2 14-10 14-20" fill="none" stroke="#00A3E0" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="24" x2="50" y2="48" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            {/* Crisp bold TCS typography */}
            <text x="50" y="74" fill="#ffffff" fontSize="24" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="1.5">TCS</text>
            {/* Tata Blue Underline */}
            <rect x="30" y="81" width="40" height="2.5" rx="1.25" fill="#00A3E0" />
        </svg>
    );
}

export function InfosysLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#007CC3" />
            {/* Authentic Infosys Wordmark */}
            <text x="50" y="55" fill="#ffffff" fontSize="23" fontWeight="800" fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" textAnchor="middle" letterSpacing="0.2">Infosys</text>
            {/* Corporate Navigation Accent Line */}
            <rect x="22" y="66" width="56" height="2" rx="1" fill="#ffffff" opacity="0.6" />
            <circle cx="50" cy="67" r="3" fill="#ffffff" />
        </svg>
    );
}

export function AccentureLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#000000" />
            {/* Accenture Iconic Purple Greater-Than Chevron */}
            <path d="M36 22l24 20-24 20 7 7 31-27-31-27-7 7z" fill="#A100FF" />
            {/* Accenture Lowercase Clean Wordmark */}
            <text x="50" y="82" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.5">accenture</text>
        </svg>
    );
}

export function WiproLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#ffffff" stroke="#e4e4e7" strokeWidth="2" />
            {/* Modern Wipro Multi-Ring Connected Brandmark */}
            <g transform="translate(50, 42)">
                <circle cx="-13" cy="-5" r="14" fill="none" stroke="#662D91" strokeWidth="5.5" opacity="0.9" />
                <circle cx="13" cy="-5" r="14" fill="none" stroke="#D81B60" strokeWidth="5.5" opacity="0.9" />
                <circle cx="-7" cy="11" r="14" fill="none" stroke="#FB8C00" strokeWidth="5.5" opacity="0.9" />
                <circle cx="7" cy="11" r="14" fill="none" stroke="#00AEEF" strokeWidth="5.5" opacity="0.9" />
                <circle cx="0" cy="2" r="6" fill="#8DC63F" opacity="0.95" />
            </g>
            {/* Wipro Modern Clean Wordmark */}
            <text x="50" y="82" fill="#1e293b" fontSize="17" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.5">wipro</text>
        </svg>
    );
}

export function CognizantLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#0033A0" />
            {/* Cognizant Stylized Lens 'C' */}
            <path d="M58 24c-15 0-26 11-26 26s11 26 26 26c8 0 16-3.5 21-9.5l-8-6c-3.5 4.5-8 6.5-13 6.5-9.5 0-16.5-7.5-16.5-17s7-17 16.5-17c5 0 9.5 2 13 6.5l8-6c-5-6-13-9.5-21-9.5z" fill="#ffffff" />
            {/* Vibrant Cyan Accent Dot */}
            <circle cx="76" cy="33" r="5" fill="#00B5E2" />
            <text x="50" y="85" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="1">COGNIZANT</text>
        </svg>
    );
}

export function CapgeminiLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#0070AD" />
            {/* Capgemini Iconic Soft Spade Emblem */}
            <path d="M50 16c-3 8-19 21-19 32 0 8 6 15 14 15 5 0 8-2.5 10-5.5 2 3 5 5.5 10 5.5 8 0 14-7 14-15 0-11-16-24-19-32z" fill="#ffffff" />
            <path d="M47 58h6v12h-6z" fill="#ffffff" />
            <path d="M40 70h20v3.5H40z" fill="#ffffff" rx="1.75" />
            <text x="50" y="86" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.8">Capgemini</text>
        </svg>
    );
}

export function HCLTechLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <defs>
                <linearGradient id="hclTechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B1A48" />
                    <stop offset="100%" stopColor="#0052CC" />
                </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill="url(#hclTechGrad)" />
            {/* HCL Bold Interconnected Wordmark */}
            <text x="50" y="52" fill="#ffffff" fontSize="28" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" fontStyle="italic" letterSpacing="0.5">HCL</text>
            {/* Tech in Signature Vibrant Cyan */}
            <text x="50" y="74" fill="#00E5FF" fontSize="14" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="2">Tech</text>
        </svg>
    );
}

export function TechMahindraLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#D71921" />
            {/* Authentic Tech Mahindra Connected Nodes Graphic */}
            <g transform="translate(36, 18)">
                <rect x="0" y="0" width="12" height="12" rx="2.5" fill="#ffffff" />
                <rect x="16" y="0" width="12" height="12" rx="2.5" fill="#ffffff" opacity="0.8" />
                <rect x="0" y="16" width="12" height="12" rx="2.5" fill="#ffffff" opacity="0.8" />
                <rect x="16" y="16" width="12" height="12" rx="2.5" fill="#ffffff" />
            </g>
            <text x="50" y="60" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.5">Tech</text>
            <text x="50" y="80" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.8">Mahindra</text>
        </svg>
    );
}

export function LTIMindtreeLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#0B1938" />
            {/* Bold LTI in white */}
            <text x="50" y="44" fill="#ffffff" fontSize="23" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="1">LTI</text>
            {/* Dynamic Orange & Cyan Wave */}
            <path d="M26 52c8-5 16-5 24 0s16 5 24 0" stroke="#F97316" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M26 56c8-5 16-5 24 0s16 5 24 0" stroke="#00A3E0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Mindtree in crisp font */}
            <text x="50" y="76" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.6">Mindtree</text>
        </svg>
    );
}

export function GenpactLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#FF4F00" />
            {/* Genpact Signature Asterisk / Spark */}
            <g transform="translate(50, 36)">
                <circle cx="0" cy="0" r="5" fill="#ffffff" />
                <line x1="0" y1="-14" x2="0" y2="14" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="-14" y1="0" x2="14" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="-10" y1="-10" x2="10" y2="10" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                <line x1="-10" y1="10" x2="10" y2="-10" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            </g>
            {/* Clean genpact lowercase wordmark */}
            <text x="50" y="75" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.4">genpact</text>
        </svg>
    );
}

export function AmazonLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#131921" />
            {/* Amazon wordmark */}
            <text x="50" y="47" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.2">amazon</text>
            {/* Amazon Smile Curved Arrow */}
            <path d="M25 57c15 9 35 9 50-2" stroke="#FF9900" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <polygon points="73,50 82,56 76,64" fill="#FF9900" />
        </svg>
    );
}

export function GoogleLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#ffffff" stroke="#e4e4e7" strokeWidth="2" />
            <g transform="translate(18, 18) scale(0.64)">
                <path d="M98.05 50.8c0-3.5-.3-6.9-1-10.2H50v19.4h27a23 23 0 0 1-10 15v12.4h16.2c9.5-8.7 14.85-21.6 14.85-36.6z" fill="#4285F4" />
                <path d="M50 100c13.5 0 24.8-4.5 33.1-12.2l-16.2-12.5c-4.5 3-10.2 4.8-16.9 4.8-13 0-24-8.8-28-20.6H5.4v13C13.7 79 30.6 100 50 100z" fill="#34A853" />
                <path d="M22 59.5c-1-3-1.6-6.3-1.6-9.5s.6-6.5 1.6-9.5v-13H5.4A49.8 49.8 0 0 0 0 50c0 8.1 2 15.7 5.4 22.5L22 59.5z" fill="#FBBC05" />
                <path d="M50 20c7.3 0 13.9 2.5 19.1 7.5l14.3-14.3C74.8 4.7 63.5 0 50 0 30.6 0 13.7 12 5.4 28.5L22 41.5c4-11.8 15-20.5 28-20.5z" fill="#EA4335" />
            </g>
        </svg>
    );
}

export function MicrosoftLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#ffffff" stroke="#e4e4e7" strokeWidth="2" />
            <g transform="translate(23, 23)">
                <rect x="0" y="0" width="25" height="25" fill="#F25022" rx="1.5" />
                <rect x="29" y="0" width="25" height="25" fill="#7FBA00" rx="1.5" />
                <rect x="0" y="29" width="25" height="25" fill="#00A4EF" rx="1.5" />
                <rect x="29" y="29" width="25" height="25" fill="#FFB900" rx="1.5" />
            </g>
        </svg>
    );
}

export function AdobeLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#EB1000" />
            {/* Official Adobe 'A' Vector Polygon */}
            <polygon points="62,20 83,78 66,78 57,50" fill="#ffffff" />
            <polygon points="38,20 17,78 34,78 43,50" fill="#ffffff" />
            <polygon points="46,36 54,36 65,65 53,65 50,56 42,56" fill="#ffffff" />
        </svg>
    );
}

export function OracleLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#F80000" />
            {/* Oracle Stadium Oval & Wordmark */}
            <rect x="18" y="24" width="64" height="34" rx="17" fill="none" stroke="#ffffff" strokeWidth="8" />
            <text x="50" y="78" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="2">ORACLE</text>
        </svg>
    );
}

export function SalesforceLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#00A1E0" />
            {/* Salesforce Multi-lobed Cloud */}
            <g transform="translate(14, 22) scale(0.72)">
                <path d="M42 16c5.5-6.5 15-8 22-2.5 3 2 4.5 4.5 5.5 7.5 5-2.5 11.5-2 16 2 5 4 6.5 10 5 16.5 5 1.5 9.5 5.5 11 11.5 1.5 6.5-1.5 13-6.5 16.5-2.5 2-6 2.5-9 2.5H22c-6.5 0-12-4-14-10-2-6.5 0-13 5-16.5 1.5-1 3-2 4.5-2.5-1-4 0-8.5 2-11.5 4-6 10.5-9 17.5-8 2 0 4 0.5 6 1.5z" fill="#ffffff" />
                <text x="50" y="47" fill="#00A1E0" fontSize="26" fontWeight="900" fontStyle="italic" fontFamily="Georgia, serif" textAnchor="middle">f</text>
            </g>
            <text x="50" y="85" fill="#ffffff" fontSize="9" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.8">salesforce</text>
        </svg>
    );
}

export function UberLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#000000" />
            <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <text x="50" y="59" fill="#ffffff" fontSize="24" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="2">UBER</text>
        </svg>
    );
}

export function ZohoLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#ffffff" stroke="#e4e4e7" strokeWidth="2" />
            <g transform="translate(18, 18) scale(0.64)">
                <rect x="0" y="0" width="46" height="46" rx="10" fill="#EB2127" />
                <text x="23" y="33" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">Z</text>
                <rect x="52" y="0" width="46" height="46" rx="10" fill="#38B44A" />
                <text x="75" y="33" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">O</text>
                <rect x="0" y="52" width="46" height="46" rx="10" fill="#0093D8" />
                <text x="23" y="85" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">H</text>
                <rect x="52" y="52" width="46" height="46" rx="10" fill="#F7941E" />
                <text x="75" y="85" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">O</text>
            </g>
        </svg>
    );
}

export function FlipkartLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#2874F0" />
            <g transform="translate(22, 14)">
                <path d="M12 20h32l4 38H8l4-38z" fill="#FFE500" rx="4" />
                <path d="M20 20c0-6 4-10 8-10s8 4 8 10" stroke="#FFE500" strokeWidth="4" fill="none" />
                <text x="28" y="48" fill="#2874F0" fontSize="28" fontWeight="900" fontStyle="italic" fontFamily="system-ui, sans-serif" textAnchor="middle">f</text>
            </g>
            <text x="50" y="84" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.8">Flipkart</text>
        </svg>
    );
}

export function GoldmanSachsLogo({ size = 28, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#7399C6" />
            <text x="50" y="44" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif" textAnchor="middle" letterSpacing="0.5">Goldman</text>
            <text x="50" y="66" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="Georgia, 'Times New Roman', serif" textAnchor="middle" letterSpacing="0.5">Sachs</text>
            <rect x="25" y="74" width="50" height="2.5" fill="#ffffff" opacity="0.85" rx="1.25" />
        </svg>
    );
}

export function DefaultCompanyLogo({ name = "", size = 28, className = "" }) {
    const letter = (name || "C").trim().charAt(0).toUpperCase();
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
            <rect width="100" height="100" rx="20" fill="#18181b" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
            <text x="50" y="64" fill="#ffffff" fontSize="42" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">{letter}</text>
        </svg>
    );
}

// Master resolver component for any company name
export function CompanyLogo({ name = "", size = 28, className = "" }) {
    const clean = (name || "").toLowerCase().trim().replace(/[^a-z0-9]/g, "");

    if (clean.includes("tcs") || clean.includes("tata")) return <TCSLogo size={size} className={className} />;
    if (clean.includes("infosys") || clean.includes("infy")) return <InfosysLogo size={size} className={className} />;
    if (clean.includes("accenture")) return <AccentureLogo size={size} className={className} />;
    if (clean.includes("wipro")) return <WiproLogo size={size} className={className} />;
    if (clean.includes("cognizant")) return <CognizantLogo size={size} className={className} />;
    if (clean.includes("capgemini")) return <CapgeminiLogo size={size} className={className} />;
    if (clean.includes("hcl")) return <HCLTechLogo size={size} className={className} />;
    if (clean.includes("mahindra")) return <TechMahindraLogo size={size} className={className} />;
    if (clean.includes("lti") || clean.includes("mindtree")) return <LTIMindtreeLogo size={size} className={className} />;
    if (clean.includes("genpact")) return <GenpactLogo size={size} className={className} />;

    if (clean.includes("amazon")) return <AmazonLogo size={size} className={className} />;
    if (clean.includes("google")) return <GoogleLogo size={size} className={className} />;
    if (clean.includes("microsoft")) return <MicrosoftLogo size={size} className={className} />;
    if (clean.includes("adobe")) return <AdobeLogo size={size} className={className} />;
    if (clean.includes("oracle")) return <OracleLogo size={size} className={className} />;
    if (clean.includes("salesforce")) return <SalesforceLogo size={size} className={className} />;
    if (clean.includes("uber")) return <UberLogo size={size} className={className} />;
    if (clean.includes("zoho")) return <ZohoLogo size={size} className={className} />;
    if (clean.includes("flipkart")) return <FlipkartLogo size={size} className={className} />;
    if (clean.includes("goldman")) return <GoldmanSachsLogo size={size} className={className} />;

    return <DefaultCompanyLogo name={name} size={size} className={className} />;
}

export default CompanyLogo;
