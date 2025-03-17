import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const profileImg =  '/Images/Customer-Profile.webp';
const loanImg =  '/Images/Interest-Calculation1.webp';
const documentImg =  '/Images/Document-Management.webp';
const paymentImg = '/Images/Payment-Ledger.webp';
const emiImg =  '/Images/EMI-Management.webp';
const collectionImg =  '/Images/Collection-Tracking.webp';
const reportImg =  '/Images/Daily-Reports.webp';

const AutoFinanceFeatures = () => {
  return (
    <>
     <Helmet>
  {/* Optimized Page Title */}
  <title>Auto Finance & Loan Management System | CipherERP Business Solutions</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Simplify auto finance management with CipherERP. Track vehicle loans, automate EMI payments, manage customer profiles, and generate detailed financial reports. Start optimizing your loan processing today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Auto Finance Management, Vehicle Loan Tracking, EMI Calculation, CipherERP, Loan Payment, Financial Reports, Auto Loan Software, Vehicle Financing, Loan Processing, Financial Automation, Business Finance" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


<div className="auto-finance-container">

  {/* Hero Section */}
  <section className="hero-section" id='head'> 
    <div className="hero-content">
      <h1>Efficiently Managing Vehicle Loans, Payments,<br/> and Related Expenses</h1>
      <p>Manage customer profiles, calculate loan interest, track payments, handle documents, and ensure smooth financial operations.</p>
      <a href="/SignUp" className="cta-btn">
        <button>Get Started</button>
      </a>
    </div>
  </section>

  {/* Features Section */}
  <section className="features">
    <div className="feature-card1">
    <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution image for larger screens */}
    <source 
      srcSet={`${profileImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution image for medium-sized screens */}
    <source 
      srcSet={`${profileImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution image for smaller screens */}
    <source 
      srcSet={`${profileImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag */}
    <img 
      src={`${profileImg}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="AutoFinance Customer Profile" 
    />
  </picture>
</LazyLoad>

      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img 
            src={profileImg} 
            className="img-responsive" 
            loading="lazy" 
            alt="AutoFinance Customer Profile"
          /> 
          <source srcSet={profileImg} type="image/png" />
          <source srcSet={profileImg} type="image/jpeg" />
        </picture>
      </LazyLoad> */}
      <h2>Customer Profile</h2>
      <p>Create and manage customer profiles efficiently.</p>
    </div>

    <div className="feature-card1">
    <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution WebP image for larger screens */}
    <source 
      srcSet={`${loanImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution WebP image for medium-sized screens */}
    <source 
      srcSet={`${loanImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution WebP image for smaller screens */}
    <source 
      srcSet={`${loanImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag for browsers that do not support WebP */}
    <img 
      src={`${loanImg}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy"  
      alt="AutoFinance Loan Interest Calculation"
    />
  </picture>
</LazyLoad>

      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img 
            src={loanImg} 
            className="img-responsive" 
            loading="lazy"  
            alt="AutoFinance Loan Interest Calculation"
          />
          <source srcSet={loanImg} type="image/png" />
          <source srcSet={loanImg} type="image/jpeg" />
        </picture>
      </LazyLoad> */}
      <h2>Interest Calculation</h2>
      <p>Accurately calculate loan interests and repayments.</p>
    </div>

    <div className="feature-card1">
    <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution WebP image for larger screens */}
    <source 
      srcSet={`${documentImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution WebP image for medium-sized screens */}
    <source 
      srcSet={`${documentImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution WebP image for smaller screens */}
    <source 
      srcSet={`${documentImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag for browsers that do not support WebP */}
    <img 
      src={`${documentImg}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy"  
      alt="AutoFinance Document Management"
    />
    
    {/* PNG fallback for WebP unsupported browsers */}
    <source 
      srcSet={`${documentImg}?w=1200&h=800&fit=crop`} 
      type="image/png" 
      media="(min-width: 1200px)" 
    />
    <source 
      srcSet={`${documentImg}?w=800&h=533&fit=crop`} 
      type="image/png" 
      media="(min-width: 600px)" 
    />
    <source 
      srcSet={`${documentImg}?w=400&h=267&fit=crop`} 
      type="image/png" 
      media="(max-width: 599px)" 
    />
  </picture>
</LazyLoad>

      <h2>Document Management</h2>
      <p>Upload and manage customer documents securely.</p>
    </div>
  </section>

  {/* Payment Management Section */}
  <section className="payment-management">
    <div className="section-header">
      <h2>Payment Management</h2>
      <p>Track payments, EMI dues, and more.</p>
    </div>

    <div className='rapper'>
      <div className='row my-5'>
        <div className='col-sm-6 manicontent'>
          <div className='manicontent-inner-img my-5'>
            <h3>Payment Ledger</h3>
            <p className='text-justify'>
              Easily track customer payments and outstanding dues with our system. Efficiently monitor transaction history, overdue balances, and upcoming payments to ensure seamless financial management. Stay organized and informed with our comprehensive and user-friendly ledger.
            </p>
          </div>
        </div>
        <div className='col-sm-6 financeimg1 my-5'>
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution WebP image for larger screens */}
    <source 
      srcSet={`${paymentImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution WebP image for medium-sized screens */}
    <source 
      srcSet={`${paymentImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution WebP image for smaller screens */}
    <source 
      srcSet={`${paymentImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag for browsers that do not support WebP */}
    <img 
      src={`${paymentImg}?w=800&h=533&fit=crop`} 
      className="img-responsive img1" 
      loading="lazy"  
      alt="Payment Ledger"
      height={300} 
      width={300}
    />
    
    {/* PNG fallback for WebP unsupported browsers */}
    <source 
      srcSet={`${paymentImg}?w=1200&h=800&fit=crop`} 
      type="image/png" 
      media="(min-width: 1200px)" 
    />
    <source 
      srcSet={`${paymentImg}?w=800&h=533&fit=crop`} 
      type="image/png" 
      media="(min-width: 600px)" 
    />
    <source 
      srcSet={`${paymentImg}?w=400&h=267&fit=crop`} 
      type="image/png" 
      media="(max-width: 599px)" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={paymentImg} 
                className="img-responsive img1" 
                loading="lazy"  
                alt="Payment Ledger"
                height={300} 
                width={300}
              />
              <source srcSet={paymentImg} type="image/png" />
              <source srcSet={paymentImg} type="image/jpeg" /> 
            </picture>
          </LazyLoad> */}
        </div>
      </div>

      <div className='row my-5'>
        <div className='col-sm-6 financeimg2 my-5'>
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution WebP image for larger screens */}
    <source 
      srcSet={`${emiImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution WebP image for medium-sized screens */}
    <source 
      srcSet={`${emiImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution WebP image for smaller screens */}
    <source 
      srcSet={`${emiImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag for browsers that do not support WebP */}
    <img 
      src={`${emiImg}?w=800&h=533&fit=crop`} 
      className="img-responsive img2" 
      loading="lazy"  
      alt="EMI Management"
      height={300} 
      width={300}
    />
    
    {/* PNG fallback for WebP unsupported browsers */}
    <source 
      srcSet={`${emiImg}?w=1200&h=800&fit=crop`} 
      type="image/png" 
      media="(min-width: 1200px)" 
    />
    <source 
      srcSet={`${emiImg}?w=800&h=533&fit=crop`} 
      type="image/png" 
      media="(min-width: 600px)" 
    />
    <source 
      srcSet={`${emiImg}?w=400&h=267&fit=crop`} 
      type="image/png" 
      media="(max-width: 599px)" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={emiImg} 
                className="img-responsive img2" 
                loading="lazy"  
                alt="EMI Management"
                height={300} 
                width={300}
              />
              <source srcSet={emiImg} type="image/png" />
              <source srcSet={emiImg} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
        <div className='col-sm-6 manicontent my-5'>
          <div className='manicontent-inner-img'>
            <h3>EMI Management</h3>
            <p className='text-justify'>
              Streamline your EMI payments with our tracking system. Easily monitor due dates, outstanding amounts, and payment history to ensure timely repayments. Stay informed and avoid penalties with our intuitive EMI management solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Collection & Reports Section */}
  <section className="collection-reports">
    <div className="section-header">
      <h2>Collection & Reports</h2>
      <p>Manage collections and generate detailed reports.</p>
    </div>

    <div className='rapper'>
      <div className='row my-5'>
        <div className='col-sm-6 manicontent'>
          <div className='manicontent-inner-img'>
            <h3>Collection Tracking</h3>
            <p className='text-justify'>
              Efficiently track payment collections and manage schedules. Monitor incoming payments, follow up on overdue amounts, and streamline your collection process.
            </p>
          </div>
        </div>
        <div className='col-sm-6 financeimg3 my-5'>
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution WebP image for larger screens */}
    <source 
      srcSet={`${collectionImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution WebP image for medium-sized screens */}
    <source 
      srcSet={`${collectionImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution WebP image for smaller screens */}
    <source 
      srcSet={`${collectionImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag for browsers that do not support WebP */}
    <img 
      src={`${collectionImg}?w=800&h=533&fit=crop`} 
      className="img-responsive img3" 
      loading="lazy"  
      alt="Collection Tracking"
      height={300} 
      width={300}
    />
    
    {/* PNG fallback for WebP unsupported browsers */}
    <source 
      srcSet={`${collectionImg}?w=1200&h=800&fit=crop`} 
      type="image/png" 
      media="(min-width: 1200px)" 
    />
    <source 
      srcSet={`${collectionImg}?w=800&h=533&fit=crop`} 
      type="image/png" 
      media="(min-width: 600px)" 
    />
    <source 
      srcSet={`${collectionImg}?w=400&h=267&fit=crop`} 
      type="image/png" 
      media="(max-width: 599px)" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={collectionImg} 
                className="img-responsive img3" 
                loading="lazy"  
                alt="Collection Tracking"
                height={300} 
                width={300}
              />
              <source srcSet={collectionImg} type="image/png" />
              <source srcSet={collectionImg} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>

      <div className='row my-5'>
        <div className='col-sm-6 manicontent'>
          <div className='manicontent-inner-img'>
            <h3>Daily Reports</h3>
            <p className='text-justify'>
              Generate comprehensive reports for daily collections and payments. Track transactions and monitor financial activity for informed decision-making.
            </p>
          </div>
        </div>
        <div className='col-sm-6 financeimg4 my-5'>
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution WebP image for larger screens */}
    <source 
      srcSet={`${reportImg}?w=1200&h=800&fit=crop`} 
      type="image/webp" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution WebP image for medium-sized screens */}
    <source 
      srcSet={`${reportImg}?w=800&h=533&fit=crop`} 
      type="image/webp" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution WebP image for smaller screens */}
    <source 
      srcSet={`${reportImg}?w=400&h=267&fit=crop`} 
      type="image/webp" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag for browsers that do not support WebP */}
    <img 
      src={`${reportImg}?w=800&h=533&fit=crop`} 
      className="img-responsive img4" 
      loading="lazy"  
      alt="Daily Reports"
      height={300} 
      width={300}
    />
    
    {/* PNG fallback for WebP unsupported browsers */}
    <source 
      srcSet={`${reportImg}?w=1200&h=800&fit=crop`} 
      type="image/png" 
      media="(min-width: 1200px)" 
    />
    <source 
      srcSet={`${reportImg}?w=800&h=533&fit=crop`} 
      type="image/png" 
      media="(min-width: 600px)" 
    />
    <source 
      srcSet={`${reportImg}?w=400&h=267&fit=crop`} 
      type="image/png" 
      media="(max-width: 599px)" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={reportImg} 
                className="img-responsive img4" 
                loading="lazy"  
                alt="Daily Reports"
                height={300} 
                width={300}
              />
              <source srcSet={reportImg} type="image/png" />
              <source srcSet={reportImg} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>
    </div>
  </section>

  {/* Additional Features Section */}
  <section className="additional-features">
    <div className="feature-card">
      <h3>Part Payment Management</h3>
      <p>Track and manage part payments from customers.</p>
    </div>
    <div className="feature-card">
      <h3>Payment Mode Flexibility</h3>
      <p>Support various payment methods like cash, cards, and online transfers.</p>
    </div>
  </section>

</div>

<ChatbotComponent />
<ScrollToTopButton/>

    </>
  );
};

export default AutoFinanceFeatures;
