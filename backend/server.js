require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const companyRoutes = require('./routes/companyRoutes');
const questionRoutes = require('./routes/questionRoutes');
const codeRoutes = require('./routes/codeRoutes');
const authRoutes = require('./routes/authRoutes');
const userProgressRoutes = require('./routes/userProgressRoutes');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[REQ] ${req.method} ${req.url}`);
    next();
});

app.get('/ping', (req, res) => res.send('pong'));

app.use('/api/auth', authRoutes);
app.use('/api/user', userProgressRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/code', codeRoutes);



const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Sarathi server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
};

startServer();
