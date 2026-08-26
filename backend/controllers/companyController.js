const Company = require('../models/Company');

const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch companies'
        });
    }
};

const createCompany = async(req,res) => {
    try{
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch(error){
        res.status(400).json({
            message: 'Failed to create company'
        });
    }
};

const updateCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(company);

    } catch (error) {
        res.status(400).json({
            message: 'Failed to update company'
        });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Company deleted successfully',
            company
        });

    } catch (error) {
        res.status(400).json({
            message: 'Failed to delete company'
        });
    }
};

module.exports = {
    getCompanies,
    createCompany,  
    updateCompany,
    deleteCompany
};