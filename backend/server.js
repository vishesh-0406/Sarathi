const express = require('express');
const connectDb = require('./config/db');
const companyRoutes = require('./routes/companyRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();

const PORT = 5000;

app.use(express.json());

app.use('/api/companies', companyRoutes);
app.use('/api/questions', questionRoutes);

connectDb();

app.listen(PORT, () => {
    console.log(`Sarathi server running on http://localhost:${PORT}`);
});