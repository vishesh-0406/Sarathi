const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;