// Master aggregator for all 12 company question banks
const tcsQuestions = require('./tcs');
const infosysQuestions = require('./infosys');
const wiproQuestions = require('./wipro');
const accentureQuestions = require('./accenture');
const cognizantQuestions = require('./cognizant');
const capgeminiQuestions = require('./capgemini');
const amazonQuestions = require('./amazon');
const googleQuestions = require('./google');
const microsoftQuestions = require('./microsoft');
const adobeQuestions = require('./adobe');
const oracleQuestions = require('./oracle');
const salesforceQuestions = require('./salesforce');

function getAll12CompanyQuestions() {
    return [
        ...tcsQuestions,
        ...infosysQuestions,
        ...wiproQuestions,
        ...accentureQuestions,
        ...cognizantQuestions,
        ...capgeminiQuestions,
        ...amazonQuestions,
        ...googleQuestions,
        ...microsoftQuestions,
        ...adobeQuestions,
        ...oracleQuestions,
        ...salesforceQuestions,
    ];
}

module.exports = {
    getAll12CompanyQuestions
};
