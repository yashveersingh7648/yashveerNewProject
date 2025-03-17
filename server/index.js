const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const crypto = require('crypto');
const { Cashfree } = require('cashfree-pg');
require('dotenv').config();
const compression = require('compression');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware Setup
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173","http://localhost:5173", "http://localhost:5174", "https://your-frontend-domain.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validate Environment Variables
if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('❌ Error: Missing environment variables.');
  process.exit(1);
}

// Cashfree Payment Gateway Configuration
Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION; // Production Mode

// Generate a Unique Order ID
function generateOrderId() {
  return `order_${crypto.randomBytes(6).toString('hex')}`;
}

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello, Fast World!');
});

// Payment Order Creation API
app.options('/payment', cors()); 
app.post('/payment', async (req, res) => {
  try {
    const { name, email, amount, product, mobile, address, pinCode, state, quantity } = req.body;

    if (!name || !email || !amount || !product || !mobile || !address || !pinCode || !state || !quantity) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const order_id = generateOrderId();

    const request = {
      order_amount: amount,
      order_currency: 'INR',
      order_id: order_id,
      customer_details: {
        customer_id: `cust_${crypto.randomBytes(8).toString('hex')}`,
        customer_email: email,
        customer_phone: mobile,
        customer_name: name,
      },
    };

    const response = await Cashfree.PGCreateOrder('2023-08-01', request);
    console.log('✅ Order Created:', response.data);

    // Send Order Confirmation Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Order Confirmation',
      html: `
        <h2>Thank you for your order, ${name}!</h2>
        <p><strong>Order ID:</strong> ${order_id}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Shipping Address:</strong> ${address}, ${state}, ${pinCode}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email Sent Successfully:', email);

    res.json({
      order_id: order_id,
      payment_session_id: response.data.payment_session_id,
    });
  } catch (error) {
    console.error('❌ Payment Creation Error:', error?.response?.data || error);
    res.status(500).json({ error: 'Payment Gateway Error. Contact Support.' });
  }
});

// Payment Verification API
app.post('/verify', async (req, res) => {
  try {
    console.log("🔍 Verifying Payment for Order:", req.body); // Debugging

    const { orderId } = req.body;

    if (!orderId) {
      console.error("❌ Order ID Missing:", req.body);
      return res.status(400).json({ error: 'Order ID is required.' });
    }

    const response = await Cashfree.PGOrderFetchPayments('2023-08-01', orderId);

    console.log("✅ Payment Status Response:", response.data);

    if (response.data.payment_status === 'SUCCESS') {
      return res.json({ success: true, status: 'Payment Successful', data: response.data });
    } else if (response.data.payment_status === 'PENDING') {
      return res.json({ success: false, status: 'Payment Pending. Please try again later.', data: response.data });
    } else {
      return res.json({ success: false, status: 'Payment Failed. Please retry.', data: response.data });
    }
  } catch (error) {
    console.error('❌ Payment Verification Error:', error?.response?.data || error);
    res.status(500).json({ error: 'Payment Verification Failed. Contact Support.' });
  }
});

// React app ki static files serve karein
app.use(express.static(path.join(__dirname, 'build')));

// Saare requests ko React app par redirect karein
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
// Start Server on Port 8000
app.listen(8000, () => {
  console.log('🚀 Server is running on port 8000');
});


// const express = require('express');
// const cors = require('cors');
// const crypto = require('crypto');
// const { Cashfree } = require('cashfree-pg');
// require('dotenv').config();
// const compression = require("compression");

// const app = express();
// app.use(compression()); // Enable Gzip
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Cashfree configuration
// Cashfree.XClientId = process.env.CLIENT_ID;  
// Cashfree.XClientSecret = process.env.CLIENT_SECRET;   
// Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;  

// // Generate a unique order ID
// function generateOrderId(){
//     const uniqueId = crypto.randomBytes(16).toString('hex');
//     const hash = crypto.createHash('sha256');
//     hash.update(uniqueId);
//     const orderId = hash.digest('hex');
//     return orderId.substr(0, 12);
// }

// // Root endpoint
// app.disable("x-powered-by");

// app.get("/", (req, res) => {
//   res.send("Hello, Fast World!");
// });


// // /payment endpoint (using GET or POST as per your front-end)
// // उदाहरण: यदि फ्रंटएंड POST रिक्वेस्ट भेज रहा है, तो इसे POST बनाएं:
// app.post('/payment', async(req, res) => {
//   try {
//       const { amount } = req.body; // dynamic amount from frontend
//       const currentVersion = "2023-08-01";
//       let request = {
//           "order_amount": amount, // यहाँ amount का उपयोग करें
//           "order_currency": "INR",
//           "order_id": generateOrderId(),
//           "customer_details": {
//               "customer_id": "CUST12345",
//               "customer_email": "customer@example.com",
//               "customer_phone": "9999999999",
//               "customer_name": "yashkumar"
//           },
//       };

//       Cashfree.PGCreateOrder(currentVersion, request)
//         .then(response => {
//             console.log("PGCreateOrder Response:", response.data);
//             res.json(response.data);
//         })
//         .catch(error => {
//             console.error("Error in PGCreateOrder:", error.response ? error.response.data : error);
//             res.status(500).json({ error: error.response ? error.response.data.message : 'Internal Server Error' });
//         });
//   } catch(error) {
//       console.error("Unexpected Error:", error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // /verify endpoint
// app.post('/verify', async(req, res) => {
//     try {
//         let { orderId } = req.body;
//         Cashfree.PGOrderFetchPayments("2023-08-01", orderId)
//           .then(response => {
//               if (response.data.payment_status === 'SUCCESS') {
//                   res.json({ success: true, status: "Payment Successful", data: response.data });
//               } else if (response.data.payment_status === 'PENDING') {
//                   res.json({ success: false, status: "Payment Pending. Please try again later.", data: response.data });
//               } else {
//                   res.json({ success: false, status: "Payment Failed. Please retry.", data: response.data });
//               }
//           })
//           .catch(error => {
//               console.error("Error verifying payment:", error.response ? error.response.data.message : error);
//               res.status(500).json({ error: 'Internal Server Error' });
//           });
//     } catch (error) {
//         console.log("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// // Start the server on port 8000
// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });
