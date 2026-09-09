const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const companyRoutes = require('./routes/companyRoutes');
const questionRoutes = require('./routes/questionRoutes');
const codeRoutes = require('./routes/codeRoutes');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/companies', companyRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/code', codeRoutes);

connectDb();

app.listen(PORT, () => {
    console.log(`Sarathi server running on http://localhost:${PORT}`);
});