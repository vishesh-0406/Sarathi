const express = require('express');

const app = express();

const PORT = 5000;

// Temporary company data
const companies = [
    {
        name: 'TCS',
        type: 'service'
    },
    {
        name: 'Infosys',
        type: 'service'
    },
    {
        name: 'Accenture',
        type: 'service'
    },
    {
        name: 'Amazon',
        type: 'product'
    },
    {
        name: 'Microsoft',
        type: 'product'
    },
    {
        name: 'Google',
        type: 'product'
    }
];

// GET all companies
app.get('/api/companies', (req, res) => {
    res.json(companies);
});

app.listen(PORT, () => {
    console.log(`Sarathi server running on http://localhost:${PORT}`);
});