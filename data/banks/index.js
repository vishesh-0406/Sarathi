// Master aggregator for all 20 company question banks (10 Service + 10 Product)
const tcsQuestions = require('./tcs');
const infosysQuestions = require('./infosys');
const wiproQuestions = require('./wipro');
const accentureQuestions = require('./accenture');
const cognizantQuestions = require('./cognizant');
const capgeminiQuestions = require('./capgemini');
const hcltechQuestions = require('./hcltech');
const techmahindraQuestions = require('./techmahindra');
const ltimindtreeQuestions = require('./ltimindtree');
const genpactQuestions = require('./genpact');

const amazonQuestions = require('./amazon');
const googleQuestions = require('./google');
const microsoftQuestions = require('./microsoft');
const adobeQuestions = require('./adobe');
const oracleQuestions = require('./oracle');
const salesforceQuestions = require('./salesforce');
const uberQuestions = require('./uber');
const zohoQuestions = require('./zoho');
const flipkartQuestions = require('./flipkart');
const goldmansachsQuestions = require('./goldmansachs');

function getAll20CompanyQuestions() {
    return [
        ...tcsQuestions,
        ...infosysQuestions,
        ...wiproQuestions,
        ...accentureQuestions,
        ...cognizantQuestions,
        ...capgeminiQuestions,
        ...hcltechQuestions,
        ...techmahindraQuestions,
        ...ltimindtreeQuestions,
        ...genpactQuestions,
        ...amazonQuestions,
        ...googleQuestions,
        ...microsoftQuestions,
        ...adobeQuestions,
        ...oracleQuestions,
        ...salesforceQuestions,
        ...uberQuestions,
        ...zohoQuestions,
        ...flipkartQuestions,
        ...goldmansachsQuestions,
    ];
}

// Backward-compatible alias returning all company questions
function getAll12CompanyQuestions() {
    return getAll20CompanyQuestions();
}

module.exports = {
    getAll20CompanyQuestions,
    getAll12CompanyQuestions
};

