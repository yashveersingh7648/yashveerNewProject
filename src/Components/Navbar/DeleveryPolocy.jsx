import React from 'react'
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

const DeleveryPolocy = () => {
  return (
    <>
<Helmet>
        <title>Delivery & Refund Policy | CipherERP - Secure & Fast Services</title>
        <meta 
          name="description" 
          content="Read CipherERP's Delivery, Cancellation, and Refund Policy. We ensure fast and secure delivery of ERP solutions with complete customer support." 
        />
        <meta 
          name="keywords" 
          content="ERP solutions, delivery policy, refund policy, data security, business management, ERP software, customer support" 
        />
      </Helmet>


<ScrollToTopButton/>

    <div className='container-fluid'>
      <div className="container mx-auto mt-20 pray">
      <h1 className="text-center font-bold text-4xl underline mb-4 drop-shadow-2xl text-indigo-900">
      Delivery, Refund & Privacy Policy
</h1>

    </div>

    <div className="container mx-auto mt-20 fonts">
        <p>
        We ensure that all purchases made online will be delivered to you within 24 hours. Once the payment is cleared, an email is automatically sent to your email address with download instructions along with invoice. We suggest you to save the invoice you received in your mail box.
        </p>
    </div>


    <div className="container mx-auto mt-20">
        <h2 className=" text-center font-bold f1 text-4xl underline mb-4 drop-shadow-2xl text-indigo-900">Cancellation policy</h2>
    </div>

    <div className="container mx-auto mt-20 fonts">
        <p>
        Cancellation of orders may be considered only in case of purchases made by the customers by mistake. However, the Company may at its sole discretion consider the cancellation in other cases and may refund in part or full.</p>
    </div>


    <div className="container mx-auto mt-20">
        <h2 className=" text-center font-bold f1 text-4xl underline mb-4 drop-shadow-2xl text-indigo-900">Refund policy</h2>
    </div>

    <div className="container mx-auto mt-20 fonts">
        <p>
        Products/Services once ordered cannot be cancelled. Goods/Services once sold shall not be accepted back by the Company. However, the Company may at its sole discretion consider accepting return of a product/service and grant of part or full refund in such circumstances.</p>
    </div>

    <div className="container mx-auto mt-20">
        <h2 className=" text-center font-bold f1 text-4xl underline mb-4 drop-shadow-2xl text-indigo-900">Privacy policy</h2>
    </div>

    <div className="container mx-auto mt-20 fonts">
        <p>Protecting your privacy is very important to us. As part of the normal operation of our services, your basic information (name, address, e-mail and phone numbers) is collected by us for internal record purpose. We do use your contact information to send you products/services based on your orders and your interests and we also use your name and address for raising bills and invoices.. </p>
    </div>

    
    </div>
<ChatbotComponent />

    </>
  )
}

export default DeleveryPolocy;
