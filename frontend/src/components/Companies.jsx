import { useState } from 'react';

const companies = {
    service: [
        {
            name: 'TCS',
            description: 'Explore TCS placement process and preparation.'
        },
        {
            name: 'Infosys',
            description: 'Explore Infosys placement process and preparation.'
        },
        {
            name: 'Accenture',
            description: 'Explore Accenture placement process and preparation.'
        },
        {
            name: 'Wipro',
            description: 'Explore Wipro placement process and preparation.'
        },
        {
            name: 'Cognizant',
            description: 'Explore Cognizant placement process and preparation.'
        },
        {
            name: 'Capgemini',
            description: 'Explore Capgemini placement process and preparation.'
        }
    ],

    product: [
        {
            name: 'Amazon',
            description: 'Explore Amazon placement process and preparation.'
        },
        {
            name: 'Microsoft',
            description: 'Explore Microsoft placement process and preparation.'
        },
        {
            name: 'Google',
            description: 'Explore Google placement process and preparation.'
        },
        {
            name: 'Adobe',
            description: 'Explore Adobe placement process and preparation.'
        },
        {
            name: 'Oracle',
            description: 'Explore Oracle placement process and preparation.'
        },
        {
            name: 'Salesforce',
            description: 'Explore Salesforce placement process and preparation.'
        }
    ]
};

function Companies() {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);

    /* =========================
       COMPANY DETAILS SCREEN
       ========================= */

    if (selectedCompany) {
        return (
            <section id="companies" className="companies-section">

                <button
                    className="back-button"
                    onClick={() => setSelectedCompany(null)}
                >
                    ← Back to Companies
                </button>

                <div className="company-details">

                    <h2>{selectedCompany.name}</h2>

                    <p>
                        {selectedCompany.description}
                    </p>

                    <div className="details-placeholder">

                        <h3>Eligibility</h3>

                        <p>
                            Eligibility information will be provided here.
                        </p>

                        <h3>Selection Process</h3>

                        <p>
                            Hiring rounds and selection process will be
                            provided here.
                        </p>

                        <h3>Preparation</h3>

                        <p>
                            Preparation topics and resources will be
                            provided here.
                        </p>

                    </div>

                </div>

            </section>
        );
    }


    /* =========================
       COMPANY LIST SCREEN
       ========================= */

    if (selectedType) {
        return (
            <section id="companies" className="companies-section">

                <button
                    className="back-button"
                    onClick={() => setSelectedType(null)}
                >
                    ← Back to Categories
                </button>

                <h2>
                    {selectedType === 'service'
                        ? 'Service-Based Companies'
                        : 'Product-Based Companies'}
                </h2>

                <p className="companies-intro">
                    Select a company to explore its placement information
                    and preparation resources.
                </p>

                <div className="company-container">

                    {companies[selectedType].map((company) => (
                        <div
                            className="company-card"
                            key={company.name}
                        >

                            <h3>{company.name}</h3>

                            <p>
                                {company.description}
                            </p>

                            <button
                                onClick={() =>
                                    setSelectedCompany(company)
                                }
                            >
                                View Details
                            </button>

                        </div>
                    ))}

                </div>

            </section>
        );
    }


    /* =========================
       COMPANY CATEGORY SCREEN
       ========================= */

    return (
        <section id="companies" className="companies-section">

            <h2>Explore Companies</h2>

            <p className="companies-intro">
                Choose the type of company you want to explore.
            </p>

            <div className="company-type-container">

                <div
                    className="company-type-card"
                    onClick={() => setSelectedType('service')}
                >

                    <h3>Service-Based</h3>

                    <p>
                        Explore service-based companies and their
                        placement opportunities.
                    </p>

                    <button>
                        Explore
                    </button>

                </div>


                <div
                    className="company-type-card"
                    onClick={() => setSelectedType('product')}
                >

                    <h3>Product-Based</h3>

                    <p>
                        Explore product-based companies and their
                        placement opportunities.
                    </p>

                    <button>
                        Explore
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Companies;