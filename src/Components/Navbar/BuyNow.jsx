import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { load } from '@cashfreepayments/cashfree-js';

const BuyForm = () => {
  const location = useLocation();
  const passedState = location.state || JSON.parse(localStorage.getItem("buyNowState")) || {};


  // Initial form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    product: 'Billing Management',
    price: 6200,
    quantity: 1,
    pinCode: '',
    state: '',
    gstin: '',
    noGstin: false,
    agreePolicy: false,
    agreeWhatsApp: false,
    duration: '1 Month',
    licenseType: 'Buy New License',
    serialNo: '',
  });

  // Update form data if passedState contains amount or product
  
  useEffect(() => {
    if (location.state) {
        console.log("Received Passed State:", location.state);
        setFormData((prevData) => ({
            ...prevData,
            price: location.state.amount || prevData.price, 
            product: location.state.product || prevData.product,
            quantity: location.state.quantity || prevData.quantity
        }));
    } else {
        console.error("No state received in BuyNow.jsx");
    }
}, [location.state]);

  // Calculate subtotal, GST, and total
  const subTotal = formData.price * formData.quantity;
  const gst = subTotal * 0.18;
  const total = subTotal + gst;

  // State for errors, Cashfree SDK, order ID, and retry payment
  const [errors, setErrors] = useState({});
  const [cashfree, setCashfree] = useState(null);
  const [orderId, setOrderId] = useState('');
  const [retryPayment, setRetryPayment] = useState(false);

  // Initialize Cashfree SDK
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const cashfreeSDK = await load({ mode: 'production' }); // Production Mode
        console.log('Cashfree SDK initialized:', cashfreeSDK);
        setCashfree(cashfreeSDK);
      } catch (error) {
        console.error('Cashfree SDK failed to load', error);
      }
    };
    initializeSDK();
  }, []);

  // Validate form fields
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
    }
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = 'Valid 10-digit mobile number is required';
    }
    if (!formData.address) tempErrors.address = 'Address is required';
    if (!formData.agreePolicy) tempErrors.agreePolicy = 'You must agree to the policies';
    if (!formData.noGstin && !formData.gstin) tempErrors.gstin = 'GSTIN is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Fetch session ID from the server
  const getSessionId = async () => {
    try {
      const res = await axios.post('http://localhost:8000/payment', {
        name: formData.name,
        email: formData.email,
        amount: total,
        product: formData.product,
        mobile: formData.mobile,
        address: formData.address,
        pinCode: formData.pinCode,
        state: formData.state,
        quantity: formData.quantity,
      });
      if (res.data && res.data.payment_session_id) {
        console.log('Session ID received:', res.data.payment_session_id);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.error('Error fetching session ID:', error);
      setRetryPayment(true);
    }
  };

  // Verify payment status
  const verifyPayment = async () => {
    try {
      const res = await axios.post('http://localhost:8000/verify', { orderId });
      if (res.data.success) {
        alert('Payment Verified Successfully!');
      }
    } catch (error) {
      console.error('Payment Verification Failed:', error);
    }
  };

  // Handle retry payment
  const handleRetryPayment = () => {
    setRetryPayment(false);
    handlePayment(); // Retry payment process
  };

  // Handle payment submission
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const sessionId = await getSessionId();
      if (!sessionId) {
        console.error('Session ID not received');
        return;
      }

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: '_modal',
      };

      if (cashfree) {
        cashfree.checkout(checkoutOptions).then(() => {
          setRetryPayment(false);
          verifyPayment();
        });
      } else {
        console.error('Cashfree SDK not initialized');
        setRetryPayment(true);
      }
    } catch (error) {
      console.error('Error initializing payment:', error);
      setRetryPayment(true);
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle quantity change
  const handleQuantityChange = (delta) => {
    setFormData((prevData) => {
      let newQuantity = prevData.quantity + delta;
      if (newQuantity < 1) newQuantity = 1;
      return { ...prevData, quantity: newQuantity };
    });
  };

  return (
    <div className="container formNow my-4">
      <Helmet>
        <title>Billing and Order Review</title>
        <meta name="description" content="Review your order and billing details before proceeding to payment." />
      </Helmet>
      <h2 className="text-center mb-4">Billing and Order Review</h2>
     <form id="buyForm" onSubmit={handlePayment}>
        <div className="row parentrow">
          <div className="col-md-12 mb-4">
            <h3>Billing Details</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control w-100"
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address:</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control"
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email"
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Area Pin Code:</label>
                  <input 
                    type="text" 
                    name="pinCode" 
                    className="form-control"
                    value={formData.pinCode} 
                    onChange={handleChange} 
                    placeholder="Enter Pin Code"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">State:</label>
                  <input 
                    type="text" 
                    name="state" 
                    className="form-control"
                    value={formData.state} 
                    onChange={handleChange} 
                    placeholder="Enter State"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 rightbox">
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <label className="form-label mb-0">GSTIN No.:</label>
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      name="noGstin" 
                      className="form-check-input" 
                      checked={formData.noGstin} 
                      onChange={handleChange}
                      id="noGstinCheck"
                    />
                    <label className="form-check-label" htmlFor="noGstinCheck">
                      I do not have GSTIN
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <input 
                    type="text" 
                    name="gstin" 
                    className="form-control"
                    value={formData.gstin} 
                    onChange={handleChange} 
                    placeholder="Enter GSTIN No."
                    disabled={formData.noGstin}
                  />
                  {errors.gstin && <small className="text-danger">{errors.gstin}</small>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile No.:</label>
                  <input 
                    type="text" 
                    name="mobile" 
                    className="form-control"
                    value={formData.mobile} 
                    onChange={handleChange} 
                    placeholder="Enter Mobile No."
                  />
                  {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Address:</label>
                  <textarea 
                    name="address" 
                    className="form-control"
                    value={formData.address} 
                    onChange={handleChange} 
                    placeholder="Enter your address"
                    rows={5}
                  ></textarea>
                  {errors.address && <small className="text-danger">{errors.address}</small>}
                </div>
              </div>
            </div>
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                name="agreePolicy" 
                className="form-check-input"
                checked={formData.agreePolicy} 
                onChange={handleChange} 
              />
              <a className="form-check-label" href="/DeleveryPolocy">
                I agree with the Delivery, Cancellation, Refund and Privacy policies.
              </a>
              {errors.agreePolicy && <small className="text-danger d-block">{errors.agreePolicy}</small>}
            </div>
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                name="agreeWhatsApp" 
                className="form-check-input"
                checked={formData.agreeWhatsApp} 
                onChange={handleChange} 
              />
              <label className="form-check-label">
                I agree to receive communications via WhatsApp.
              </label>
            </div>
            <div className="row">
              <div className="col-6">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary w-100" 
                  onClick={() => window.history.back()}
                >
                  Back
                </button>
              </div>
              <div className="col-6">
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                >
                  Payment
                </button>
              </div>
              {orderId && (
        <button className="btn btn-secondary mt-3" onClick={() => verifyPayment(orderId)}>
          Verify Payment
        </button>
      )}

      {retryPayment && (
        <button className="btn btn-danger mt-3" onClick={handleRetryPayment}>
          Retry Payment
        </button>
      )}
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 order-summary">
            <h3>Order Summary</h3>
            <div className="mb-2">
              <p className="paraproduct"><strong>Product:</strong> {formData.product}</p>
              <p className="paraprice">
                <strong>Price:</strong> Rs <b>{formData.price}</b> <br/>(Exclusive of GST)
              </p>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <strong className="me-2">Quantity:</strong>
              <button 
                type="button" 
                className="btn btn-sm btn-secondary me-5" 
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className='mx-2'>{formData.quantity}</span>
              <button 
                type="button" 
                className="btn btn-sm btn-secondary ms-5" 
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <div className="mb-3">
              <p><strong>Duration:</strong> {formData.duration}</p>
              <div className="mb-2">
                <label className="form-label">License Type:</label>
                <select 
                  name="licenseType" 
                  className="form-select"
                  value={formData.licenseType} 
                  onChange={handleChange}
                >
                  <option value="Buy New License">Buy New License</option>
                  <option value="Renew License">Renew License</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="form-label">Enter Serial No.:</label>
                <input 
                  type="text" 
                  name="serialNo" 
                  className="form-control"
                  value={formData.serialNo} 
                  onChange={handleChange} 
                  placeholder="Enter Serial No."
                />
              </div>
            </div>
            <div className="border-top pt-3">
              <h4>Billing Summary</h4>
              <p>Sub Total: Rs {subTotal}</p>
              <p>GST (18%): RS {gst}</p>
              <p><strong>Total: Rs {total}</strong></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;


// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { load } from '@cashfreepayments/cashfree-js';

// import { verifyPayment, handleRetryPayment } from "../paymentFunctions";

// const BuyForm = () => {
//   const location = useLocation();
  
//   // `state` ya `localStorage` se data lena
//   const passedState = location.state || JSON.parse(localStorage.getItem("buyNowState")) || {};

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     address: '',
//     product: passedState.product || 'Billing Management',
//     price: passedState.amount ? passedState.amount : 6200,
//     quantity: passedState.quantity || 1,
//     pinCode: '',
//     state: '',
//     gstin: '',
//     noGstin: false,
//     agreePolicy: false,
//     agreeWhatsApp: false,
//     duration: '1 Month',
//     licenseType: 'Buy New License',
//     serialNo: '',
//   });

//   useEffect(() => {
//     if (location.state) {
//       localStorage.setItem("buyNowState", JSON.stringify(location.state));
//       setFormData({
//         product: location.state.product,
//         price: location.state.amount,
//         quantity: location.state.quantity || 1,
//       });
//     }
//   }, [location.state]);

//   const subTotal = (formData.price || 0) * (formData.quantity || 1) * (formData.duration || 1);
//   const gst = subTotal * 0.18; // 18% GST
//   const total = subTotal + gst;


//   const [errors, setErrors] = useState({});
//   const [cashfree, setCashfree] = useState(null);
//   const [orderId, setOrderId] = useState("");
//   const [retryPayment, setRetryPayment] = useState(false);

//   useEffect(() => {
//     const initializeSDK = async () => {
//       try {
//         const cashfreeSDK = await load({ mode: "sandbox" });
//         setCashfree(cashfreeSDK);
//       } catch (error) {
//         console.error("Cashfree SDK failed to load", error);
//       }
//     };
//     initializeSDK();
//   }, []);

//   const validateForm = () => {
//     let tempErrors = {};
//     if (!formData.name) tempErrors.name = 'Name required';
//     if (!formData.email) tempErrors.email = 'Email required';
//     if (!formData.mobile) tempErrors.mobile = 'Mobile No. required';
//     if (!formData.address) tempErrors.address = 'Address required';
//     if (!formData.agreePolicy) tempErrors.agreePolicy = 'You must agree to the policies';
//     if (!formData.noGstin && !formData.gstin) tempErrors.gstin = 'GSTIN required';
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const getSessionId = async () => {
//     try {
//       const res = await axios.post("http://localhost:8000/payment", {
//         name: formData.name,
//         email: formData.email,
//         amount: total
//       });
//       if (res.data && res.data.payment_session_id) {
//         setOrderId(res.data.order_id);
//         return res.data.payment_session_id;
//       }
//     } catch (error) {
//       console.error("Error fetching session ID:", error);
//       setRetryPayment(true);
//     }
//   };

//   const verifyPayment = async () => {
//     try {
//       const res = await axios.post("http://localhost:8000/verify", { orderId });
//       if (res.data.success) {
//         alert("Payment Verified Successfully!");
//       }
//     } catch (error) {
//       console.error("Payment Verification Failed:", error);
//     }
//     checkPaymentStatus('77843235d8bb'); 
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       let sessionId = await getSessionId();
//       if (!sessionId) {
//         console.error("Session ID not received");
//         return;
//       }
//       let checkoutOptions = {
//         paymentSessionId: sessionId,
//         redirectTarget: "_modal",
//       };
      
//       if (cashfree) {
//         cashfree.checkout(checkoutOptions).then(() => {
//           setRetryPayment(false);
//         });
//       } else {
//         console.error("Cashfree SDK not initialized");
//         setRetryPayment(true);
//       }
//     } catch (error) {
//       console.error("Error initializing payment:", error);
//       setRetryPayment(true);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleQuantityChange = (delta) => {
//     setFormData((prevData) => {
//       let newQuantity = (prevData.quantity || 1) + delta; // Ensure quantity is always a number
//       if (newQuantity < 1) newQuantity = 1; // Minimum quantity should be 1
//       return { ...prevData, quantity: newQuantity };
//     });
//   };

//   return (
//     <div className="container formNow my-4">
//       <Helmet>
//         <title>Billing and Order Review</title>
//         <meta name="description" content="Review your order and billing details before proceeding to payment." />
//       </Helmet>
//       <h2 className="text-center mb-4">Billing and Order Review</h2>
//       <form id="buyForm" onSubmit={handlePayment}>
//         <div className="row parentrow">
//           <div className="col-md-12 mb-4">
//             <h3>Billing Details</h3>
//             <div className="row">
//               <div className="col-12 col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">Name:</label>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     className="form-control w-100"
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     placeholder="Enter your name"
//                   />
//                   {errors.name && <small className="text-danger">{errors.name}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Email address:</label>
//                   <input 
//                     type="email" 
//                     name="email" 
//                     className="form-control"
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     placeholder="Enter your email"
//                   />
//                   {errors.email && <small className="text-danger">{errors.email}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Area Pin Code:</label>
//                   <input 
//                     type="text" 
//                     name="pinCode" 
//                     className="form-control"
//                     value={formData.pinCode} 
//                     onChange={handleChange} 
//                     placeholder="Enter Pin Code"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">State:</label>
//                   <input 
//                     type="text" 
//                     name="state" 
//                     className="form-control"
//                     value={formData.state} 
//                     onChange={handleChange} 
//                     placeholder="Enter State"
//                   />
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 rightbox">
//                 <div className="mb-3 d-flex justify-content-between align-items-center">
//                   <label className="form-label mb-0">GSTIN No.:</label>
//                   <div className="form-check">
//                     <input 
//                       type="checkbox" 
//                       name="noGstin" 
//                       className="form-check-input" 
//                       checked={formData.noGstin} 
//                       onChange={handleChange}
//                       id="noGstinCheck"
//                     />
//                     <label className="form-check-label" htmlFor="noGstinCheck">
//                       I do not have GSTIN
//                     </label>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <input 
//                     type="text" 
//                     name="gstin" 
//                     className="form-control"
//                     value={formData.gstin} 
//                     onChange={handleChange} 
//                     placeholder="Enter GSTIN No."
//                     disabled={formData.noGstin}
//                   />
//                   {errors.gstin && <small className="text-danger">{errors.gstin}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Mobile No.:</label>
//                   <input 
//                     type="text" 
//                     name="mobile" 
//                     className="form-control"
//                     value={formData.mobile} 
//                     onChange={handleChange} 
//                     placeholder="Enter Mobile No."
//                   />
//                   {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Address:</label>
//                   <textarea 
//                     name="address" 
//                     className="form-control"
//                     value={formData.address} 
//                     onChange={handleChange} 
//                     placeholder="Enter your address"
//                     rows={5}
//                   ></textarea>
//                   {errors.address && <small className="text-danger">{errors.address}</small>}
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3 form-check">
//               <input 
//                 type="checkbox" 
//                 name="agreePolicy" 
//                 className="form-check-input"
//                 checked={formData.agreePolicy} 
//                 onChange={handleChange} 
//               />
//               <a className="form-check-label" href="/DeleveryPolocy">
//                 I agree with the Delivery, Cancellation, Refund and Privacy policies.
//               </a>
//               {errors.agreePolicy && <small className="text-danger d-block">{errors.agreePolicy}</small>}
//             </div>
//             <div className="mb-3 form-check">
//               <input 
//                 type="checkbox" 
//                 name="agreeWhatsApp" 
//                 className="form-check-input"
//                 checked={formData.agreeWhatsApp} 
//                 onChange={handleChange} 
//               />
//               <label className="form-check-label">
//                 I agree to receive communications via WhatsApp.
//               </label>
//             </div>
//             <div className="row">
//               <div className="col-6">
//                 <button 
//                   type="button" 
//                   className="btn btn-outline-secondary w-100" 
//                   onClick={() => window.history.back()}
//                 >
//                   Back
//                 </button>
//               </div>
//               <div className="col-6">
//                 <button 
//                   type="submit" 
//                   className="btn btn-primary w-100"
//                 >
//                   Payment
//                 </button>
//               </div>
//               {orderId && (
//         <button className="btn btn-secondary mt-3" onClick={() => verifyPayment(orderId)}>
//           Verify Payment
//         </button>
//       )}

//       {retryPayment && (
//         <button className="btn btn-danger mt-3" onClick={handleRetryPayment}>
//           Retry Payment
//         </button>
//       )}
//             </div>
//           </div>
//           <div className="col-12 col-md-4 mb-4 order-summary">
//             <h3>Order Summary</h3>
//             <div className="mb-2">
//               <p className="paraproduct"><strong>Product:</strong> {formData.product}</p>
//               <p className="paraprice">
//                 <strong>Price:</strong> Rs <b>{formData.price}</b> <br/>(Exclusive of GST)
//               </p>
//             </div>
//             <div className="mb-2 d-flex align-items-center">
//               <strong className="me-2">Quantity:</strong>
//               <button 
//                 type="button" 
//                 className="btn btn-sm btn-secondary me-5" 
//                 onClick={() => handleQuantityChange(-1)}
//               >
//                 -
//               </button>
//               <span className='mx-2'>{formData.quantity}</span>
//               <button 
//                 type="button" 
//                 className="btn btn-sm btn-secondary ms-5" 
//                 onClick={() => handleQuantityChange(1)}
//               >
//                 +
//               </button>
//             </div>
//             <div className="mb-3">
//               <p><strong>Duration:</strong> {formData.duration}</p>
//               <div className="mb-2">
//                 <label className="form-label">License Type:</label>
//                 <select 
//                   name="licenseType" 
//                   className="form-select"
//                   value={formData.licenseType} 
//                   onChange={handleChange}
//                 >
//                   <option value="Buy New License">Buy New License</option>
//                   <option value="Renew License">Renew License</option>
//                 </select>
//               </div>
//               <div className="mb-2">
//                 <label className="form-label">Enter Serial No.:</label>
//                 <input 
//                   type="text" 
//                   name="serialNo" 
//                   className="form-control"
//                   value={formData.serialNo} 
//                   onChange={handleChange} 
//                   placeholder="Enter Serial No."
//                 />
//               </div>
//             </div>
//             <div className="border-top pt-3">
//               <h4>Billing Summary</h4>
//               <p>Sub Total: Rs {subTotal.toFixed(2)}</p>
//               <p>GST (18%): RS {gst.toFixed(2)}</p>
//               <p><strong>Total: Rs {total.toFixed(2)}</strong></p>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BuyForm;
