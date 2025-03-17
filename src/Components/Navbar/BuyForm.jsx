// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// const BuyForm = () => {
//   const location = useLocation();
//   const { amount } = location.state || {};
  
//   const [formData, setFormData] = useState({
//     buyer_name: '',
//     buyer_email: '',
//     buyer_phone: '',
//     amount: amount || '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };  

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:8000/create_payment_token', {
//   //       name: formData.buyer_name,
//   //       email: formData.buyer_email,
//   //       phone: formData.buyer_phone,
//   //       amount: formData.amount,
//   //     });
//   //     if (response.data.token) {
//   //       console.log('Payment Token:', response.data.token);
//   //       navigate('/views', { state: { token: response.data.token } });
//   //     } else {
//   //       console.error('Error:', response.data.error);
//   //     }
//   //   } catch (error) {
//   //     console.error('Request failed:', error);
//   //   }
//   // };
//   const handleSubmit  = async () => {
//     try {
//         const response = await fetch('http://localhost:8000/create_payment_token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ /* आपके पेमेंट डेटा */ }),
//         });
//         const data = await response.json();
//         console.log('Payment token:', data);
//     } catch (error) {
//         console.error('Error creating payment token:', error);
//     }
// };

//   return (
//     <div className='container-fluid'>
//       <div className="Buyrapper" id='buyerform'>
//         <div className="form-container">
//           <h2>Billing Details</h2>
//           <form onSubmit={handleSubmit}>
//             <h3>Buyer Information</h3>
//             <label htmlFor="buyer_name">Name</label>
//             <input type="text" id="buyer_name" name="buyer_name" placeholder="Enter your Name" required onChange={handleChange} />

//             <label htmlFor="buyer_email">Email</label>
//             <input type="email" id="buyer_email" name="buyer_email" placeholder="Enter your Email" required onChange={handleChange} />

//             <label htmlFor="buyer_phone">Phone</label>
//             <input type="text" id="buyer_phone" name="buyer_phone" placeholder="Enter your Phone No." required onChange={handleChange} />

//             <label htmlFor="amount">Amount</label>
//             <input type="text" id="amount" name="amount" placeholder="Enter Amount" required onChange={handleChange} />

//             <button
//               className="btn btn-outline-primary text-white bg-primary"
//               type="submit"
//             >
//               Submit order
//             </button>
//              {/* <Link to="/ViewsPage" smooth>
//         <button
//           className="btn btn-outline-primary text-white bg-primary"
//           type="submit"
//         >
//           submit order
//         </button>
//       </Link> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyForm;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";


const BuyForm = () => {
  const location = useLocation();
  console.log(location.state); // Check if amount is being passed
  const amount = location.state?.amount || ''; // अगर `state` में `amount` नहीं है, तो डिफ़ॉल्ट खाली


  
  return (
    <>
   <Helmet>
  {/* Optimized Page Title */}
  <title>Purchase ERP Software | CipherERP Business Management Solutions</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Easily purchase CipherERP’s advanced ERP software for efficient business management. Streamline your enterprise operations with secure and scalable solutions. Get started today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Purchase ERP Software, CipherERP, Business Management, Enterprise Resource Planning, ERP Solutions, Business Software, ERP for Enterprises, Secure ERP Solutions, Business Systems, ERP Purchase Form" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


<ScrollToTopButton/>

    <div className='container-fluid'>
      <div className="Buyrapper" id='buyerform'>
        <div className="form-container">
          <h1>Billing Details for Seamless Transactions</h1>
          <form>
            <h2>Buyer Information</h2>
            <label htmlFor="buyer_name">Name</label>
             <input type="text" id="buyer_name" name="buyer_name" placeholder="Enter your Name" required  />

             <label htmlFor="buyer_email">Email</label>
            <input type="email" id="buyer_email" name="buyer_email" placeholder="Enter your Email" required  />

             <label htmlFor="buyer_phone">Phone</label>
            <input type="text" id="buyer_phone" name="buyer_phone" placeholder="Enter your Phone No." required  />

             <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            readOnly // यह सुनिश्चित करें कि फील्ड रीड-ओनली है
          /> 
             <button
              className="btn btn-outline-primary text-white bg-primary"
              type="submit"
            >
              Submit order
            </button>
             {/* <Link to="/ViewsPage" smooth>
        <button
          className="btn btn-outline-primary text-white bg-primary"
          type="submit"
        >
          submit order
        </button>
      </Link> */}
          </form>
        </div>
      </div>
    </div>
<ChatbotComponent />

    </>
  );
};

export default BuyForm;




 {/* <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            readOnly // यह सुनिश्चित करें कि फील्ड रीड-ओनली है
          /> */}

           {/* <button type="submit" className="btn btn-primary">Submit</button> */}