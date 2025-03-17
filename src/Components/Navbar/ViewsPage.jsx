import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewsPage = () => {
  const location = useLocation();
  const { token } = location.state || {};

  return (
    <div className='container'>
      <h1>Payment Confirmation</h1>
      {token ? (
        <div>
          <p>Your payment token is: {token}</p>
          <p>Thank you for your purchase!</p>
        </div>
      ) : (
        <p>No token found. Please try again.</p>
      )}
    </div>
  );
};

export default ViewsPage;
