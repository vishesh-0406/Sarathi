const express = require('express');
const router = express.Router();

const { 
    getCompanies,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/companyController');

const { getCompanyRoadmap } = require('../controllers/roadmapController');

router.get('/', getCompanies);
router.get('/:company/roadmap', getCompanyRoadmap);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;