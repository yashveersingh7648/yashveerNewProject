
// const cors = require('cors');
// const winston = require('winston');

// const express = require('express');
// const app = express();
// app.use(cors());
// app.use(express.json());

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// app.post('/create_payment_token', (req, res) => {
//   logger.info('Request received:', req.body);
//   const { name, email, phone, amount } = req.body;
//   // Token generation logic
//   const token = generatePaymentToken();  // Hypothetical function
//   if(token) {
//     res.json({ token });
//   } else {
//     logger.error('Token generation failed');
//     res.status(500).json({ error: "Token generation failed" });
//   }
// });

// app.listen(8000, () => {
//   console.log('Server is running on port 8000');
// });
// import express = 'express';
import express from 'express';
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.post('/create_payment_token', (req, res) => {
    // आपकी पेमेंट टोकन लॉजिक यहाँ होगी
    res.send('Payment token created successfully');
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});
