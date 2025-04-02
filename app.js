const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON (if needed in future)
app.use(express.json());

// Addition Endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: n1 + n2 });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: n1 - n2 });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: n1 * n2 });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    if (n2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    res.json({ result: n1 / n2 });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Calculator service running on port ${port}`);
});