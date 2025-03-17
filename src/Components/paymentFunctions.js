import axios from "axios";

export const verifyPayment = async (orderId) => {
  try {
    const res = await axios.post("http://localhost:8000/verify", { orderId });
    if (res.data.success) {
      alert("Payment Verified Successfully!");
    } else {
      alert("Payment Verification Failed!");
    }
  } catch (error) {
    console.error("Payment Verification Failed:", error);
  }
};

export const handleRetryPayment = () => {
  window.location.reload(); // Reload page to reset payment process
};
