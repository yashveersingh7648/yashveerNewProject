// src/components/PaymentComponent.js

import React, { useState } from "react";
import axios from "axios";

const PaymentComponent = () => {
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/create_payment_token/",
        {
          amount: amount,
          name: "John Doe", // Example customer name
          email: "johndoe@example.com", // Example email
          phone: "1234567890", // Example phone number
        }
      );

      if (response.data.token) {
        setToken(response.data.token);
        initiateCashfreePayment(response.data.token);
      } else {
        alert("Error creating payment token");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const initiateCashfreePayment = (token) => {
    const orderId = "order_" + Date.now();
    const orderAmount = amount;

    // Initialize Cashfree's Payment Gateway
    const cf = window.CashfreePayment;

    const paymentData = {
      order_id: orderId,
      order_amount: orderAmount,
      order_currency: "INR",
      customer_email: "johndoe@example.com",
      customer_phone: "1234567890",
      payment_token: token,
      app_id: "your_cashfree_app_id",
      secret_key: "your_cashfree_secret_key",
    };

    cf.init(paymentData, function (response) {
      if (response.status === "OK") {
        alert("Payment successful");
      } else {
        alert("Payment failed");
      }
    });
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay with Cashfree</button>
    </div>
  );
};

export default PaymentComponent;
