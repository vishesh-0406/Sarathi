import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CompanyLogo } from './CompanyLogos';
import { TargetIcon, CalendarIcon, SparklesIcon, CheckIcon, SpinnerIcon } from './Icons';
import './CompanyOnboardingModal.css';

const ALL_COMPANIES = [
    { name: 'Amazon', type: 'Product', role: 'SDE-1 & Cloud', rounds: 4 },
    { name: 'Google', type: 'Product', role: 'Software Engineer', rounds: 5 },
    { name: 'Microsoft', type: 'Product', role: 'Software Development', rounds: 4 },
    { name: 'Adobe', type: 'Product', role: 'Member of Tech Staff', rounds: 4 },
    { name: 'Oracle', type: 'Product', role: 'Software Engineer', rounds: 4 },
    { name: 'Uber', type: 'Product', role: 'Software Engineer (L3)', rounds: 4 },
    { name: 'Salesforce', type: 'Product', role: 'Associate SWE', rounds: 4 },
    { name: 'Zoho', type: 'Product', role: 'Machine Coding SWE', rounds: 5 },
    { name: 'Flipkart', type: 'Product', role: 'SDE-1 Machine Coding', rounds: 3 },
    { name: 'Goldman Sachs', type: 'Product', role: 'Engineering Analyst', rounds: 3 },
    { name: 'TCS', type: 'Service', role: 'Ninja, Digital & Prime', rounds: 3 },
    { name: 'Infosys', type: 'Service', role: 'DSE & Specialist SWE', rounds: 3 },
    { name: 'Accenture', type: 'Service', role: 'ASE & FSE Careers', rounds: 3 },
    { name: 'Wipro', type: 'Service', role: 'Elite & Turbo SWE', rounds: 3 },
    { name: 'Cognizant', type: 'Service', role: 'GenC & GenC Next', rounds: 3 },
    { name: 'Capgemini', type: 'Service', role: 'Senior Analyst / SWE', rounds: 3 },
    { name: 'HCLTech', type: 'Service', role: 'Software Engineer', rounds: 3 },
    { name: 'Tech Mahindra', type: 'Service', role: 'Associate Software Dev', rounds: 3 },
    { name: 'LTIMindtree', type: 'Service', role: 'Edge & YIP Software', rounds: 3 },
    { name: 'Genpact', type: 'Service', role: 'Software Developer', rounds: 3 },
];

function CompanyOnboardingModal({ isOpen, onClose, onComplete }) {
    const { user, completeOnboarding } = useAuth();
    const [selectedCompany, setSelectedCompany] = useState(user?.targetCompany || 'Amazon');
    const [selectedDays, setSelectedDays] = useState(45);
    const [customDate, setCustomDate] = useState('');
    const [isCustomDate, setIsCustomDate] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    const handleSelectPresetDays = (days) => {
        setSelectedDays(days);
        setIsCustomDate(false);
        setCustomDate('');
    };

    const handleSelectCustomDate = (val) => {
        setCustomDate(val);
        setIsCustomDate(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            let targetDateISO;
            if (isCustomDate && customDate) {
                targetDateISO = new Date(customDate).toISOString();
            } else {
                const target = new Date();
                target.setDate(target.getDate() + selectedDays);
                targetDateISO = target.toISOString();
            }

            const res = await completeOnboarding(selectedCompany, targetDateISO);
            if (res.success) {
                if (onComplete) onComplete(res.user);
                if (onClose) onClose();
            } else {
                setError(res.error || 'Failed to complete onboarding');
            }
        } catch (err) {
            setError(err.message || 'Error initializing roadmap');
        } finally {
            setSubmitting(false);
        }
    };

    const selectedCompObj = ALL_COMPANIES.find(c => c.name === selectedCompany) || ALL_COMPANIES[0];

    return (
        <div className="onboard-overlay">
            <div className="onboard-modal-card" onClick={e => e.stopPropagation()}>
                {/* Header Bar */}
                <div className="onboard-header">
                    <div className="onboard-badge">
                        <SparklesIcon size={14} />
                        <span>Day 1 AI Roadmap Calibration</span>
                    </div>
                    <h2 className="onboard-title">What company are you preparing for?</h2>
                    <p className="onboard-subtitle">
                        Sarathi structures your daily practice, round milestones, and unlockable mock tests 
                        tailored to your exact target company campus drive.
                    </p>
                </div>

                {error && <div className="onboard-error-banner">{error}</div>}

                {/* Company Selection Grid (20 Authentic Tech Companies) */}
                <div className="onboard-section">
                    <label className="onboard-section-label">
                        <TargetIcon size={15} />
                        <span>1. Choose Your Target Recruiter ({ALL_COMPANIES.length} Available)</span>
                    </label>

                    <div className="onboard-company-grid">
                        {ALL_COMPANIES.map(comp => {
                            const isSelected = selectedCompany === comp.name;
                            return (
                                <button
                                    type="button"
                                    key={comp.name}
                                    className={`onboard-comp-tile ${isSelected ? 'selected' : ''}`}
                                    onClick={() => setSelectedCompany(comp.name)}
                                >
                                    <div className="tile-top-bar">
                                        <CompanyLogo name={comp.name} size={28} />
                                        {isSelected && (
                                            <span className="tile-check-icon">
                                                <CheckIcon size={14} />
                                            </span>
                                        )}
                                    </div>
                                    <span className="tile-comp-name">{comp.name}</span>
                                    <span className="tile-comp-type">{comp.type} • {comp.rounds} Rounds</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Placement Drive Countdown / Target Timeline */}
                <div className="onboard-section">
                    <label className="onboard-section-label">
                        <CalendarIcon size={15} />
                        <span>2. Select Your Placement Target Horizon</span>
                    </label>

                    <div className="timeline-preset-row">
                        {[
                            { days: 30, label: '30 Days', desc: 'Fast Track Blitz' },
                            { days: 45, label: '45 Days', desc: 'Standard (Recommended)' },
                            { days: 60, label: '60 Days', desc: '2 Months Solid' },
                            { days: 90, label: '90 Days', desc: 'Comprehensive Prep' },
                        ].map(item => (
                            <button
                                key={item.days}
                                type="button"
                                className={`timeline-preset-btn ${!isCustomDate && selectedDays === item.days ? 'selected' : ''}`}
                                onClick={() => handleSelectPresetDays(item.days)}
                            >
                                <span className="preset-label">{item.label}</span>
                                <span className="preset-desc">{item.desc}</span>
                            </button>
                        ))}
                    </div>

                    <div className="custom-date-strip">
                        <span className="custom-date-text">Or specify exact campus drive date:</span>
                        <input
                            type="date"
                            className="onboard-date-input"
                            value={customDate}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={e => handleSelectCustomDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Calibration Highlights Summary */}
                <div className="onboard-summary-box">
                    <div className="summary-left">
                        <CompanyLogo name={selectedCompany} size={36} />
                        <div>
                            <h4 className="summary-comp-name">{selectedCompany} Placement Roadmap</h4>
                            <p className="summary-rounds-info">
                                {selectedCompObj.rounds} Official Rounds • {selectedCompObj.role} • 
                                {isCustomDate ? ` Target Date: ${customDate || 'Selected'}` : ` ${selectedDays} Days Timeline`}
                            </p>
                        </div>
                    </div>
                    <div className="summary-perks">
                        <span className="perk-tag">✓ Day 1 Initialized</span>
                        <span className="perk-tag">✓ Per-Round Mock Tests</span>
                        <span className="perk-tag">✓ Live Heatmap Sync</span>
                    </div>
                </div>

                {/* Action Footer */}
                <div className="onboard-footer">
                    {user?.hasCompletedOnboarding && (
                        <button
                            type="button"
                            className="onboard-cancel-btn"
                            onClick={onClose}
                            disabled={submitting}
                        >
                            Keep Current ({user.targetCompany})
                        </button>
                    )}
                    <button
                        type="button"
                        className="onboard-submit-btn"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {submitting ? (
                            <>
                                <SpinnerIcon size={16} />
                                <span>Calibrating Day 1 Roadmap...</span>
                            </>
                        ) : (
                            <>
                                <span>Initialize Day 1 Roadmap for {selectedCompany}</span>
                                <span className="btn-arrow">→</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CompanyOnboardingModal;
