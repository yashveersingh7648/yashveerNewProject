import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const billingIcon =  '/Images/billingIcon.webp';
const invoiceIcon =  '/Images/invoiceicon.webp';
const paymentIcon =  '/Images/payment-icon.webp';
const subscriptionIcon =  '/Images/subscribeicon.webp';
const billing_icon = '/Images/billing_icon.webp';

const BillingManagement = () => {
  return (
    <>
 <Helmet>
  {/* Optimized Page Title */}
  <title>Billing & Invoice Management System | CipherERP Business Solutions</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Streamline your business finances with CipherERP’s Billing Management System. Automate invoices, track payments, and manage subscriptions effortlessly. Get started today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Billing Management, Invoice Software, Business Payment Solutions, Payment Tracking, Subscription Management, ERP Solutions, Finance Automation, Automated Billing, Recurring Invoices, Secure Billing Software" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>

<ScrollToTopButton/>

<div className="container-fluid">
  {/* Hero Section - Billing Management */}
  <div className="billing-hero-section" id='head'>
    <div className="row">
      <div className="col-lg-6 billing-text">
        <h1>Efficient Billing Management with CipherERP</h1>
        <p>
          Cipher ERP simplifies billing management with automation, accuracy, and scalability. Streamline invoicing, payment tracking, and subscription management while boosting cash flow.
        </p>
        <a className="nav-sign" href="/SignUp">
          <button className="btn btn-outline-primary text-white bg-primary" type="submit">
            Get Started
          </button>
        </a>
      </div>
    </div>
  </div>

  {/* Billing Features Section */}
  <section id="billing-features" className="my-5">
    <div className="text-center">
      <h2>Key Features of Our Billing System</h2>
      <p>
        Discover the powerful features that Cipher ERP offers for efficient billing, invoicing, and payment management.
      </p>
    </div>
    <div className="row">
      <div className="col-sm-3 feature-box">
      <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${invoiceIcon}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />
    
    {/* Fallback PNG image for browsers that don't support WebP */}
    <source 
      srcSet={`${invoiceIcon}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />
    
    {/* Fallback JPEG image for browsers that don't support WebP */}
    <source 
      srcSet={`${invoiceIcon}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />
    
    {/* Fallback img tag for browsers that do not support <picture> */}
    <img 
      src={`${invoiceIcon}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="Invoice Generation"
    />
  </picture>
</LazyLoad>

        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={invoiceIcon} className="img-responsive" loading="lazy" alt="Invoice Generation" />
            <source srcSet={invoiceIcon} type="image/png" />
            <source srcSet={invoiceIcon} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <h3>Automated Invoice Generation</h3>
        <p>
          Create invoices instantly with automated data integration, customizable templates, and accurate details for a professional touch.
        </p>
      </div>
      <div className="col-sm-3 feature-box">
      <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${paymentIcon}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />
    
    {/* Fallback PNG image for browsers that don't support WebP */}
    <source 
      srcSet={`${paymentIcon}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />
    
    {/* Fallback JPEG image for browsers that don't support WebP */}
    <source 
      srcSet={`${paymentIcon}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />
    
    {/* Fallback img tag for browsers that do not support <picture> */}
    <img 
      src={`${paymentIcon}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="Payment Tracking"
    />
  </picture>
</LazyLoad>

        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={paymentIcon} className="img-responsive" loading="lazy" alt="Payment Tracking" />
            <source srcSet={paymentIcon} type="image/png" />
            <source srcSet={paymentIcon} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <h3>Seamless Payment Tracking</h3>
        <p>
          Easily track payments, view outstanding balances, and send automated payment reminders to customers for seamless transactions.
        </p>
      </div>
      <div className="col-sm-3 feature-box">
      <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${subscriptionIcon}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />
    
    {/* Fallback PNG image for browsers that don't support WebP */}
    <source 
      srcSet={`${subscriptionIcon}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />
    
    {/* Fallback JPEG image for browsers that don't support WebP */}
    <source 
      srcSet={`${subscriptionIcon}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />
    
    {/* Fallback img tag for browsers that do not support <picture> */}
    <img 
      src={`${subscriptionIcon}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="Subscription Management"
    />
  </picture>
</LazyLoad>

        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={subscriptionIcon} className="img-responsive" loading="lazy" alt="Subscription Management" />
            <source srcSet={subscriptionIcon} type="image/png" />
            <source srcSet={subscriptionIcon} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <h3>Subscription Management</h3>
        <p>
          Manage recurring payments, billing cycles, renewals, and handle upgrades/downgrades with ease for a smoother subscription process.
        </p>
      </div>
      <div className="col-sm-3 feature-box">
      <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${billingIcon}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />
    
    {/* Fallback PNG image for browsers that don't support WebP */}
    <source 
      srcSet={`${billingIcon}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />
    
    {/* Fallback JPEG image for browsers that don't support WebP */}
    <source 
      srcSet={`${billingIcon}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />
    
    {/* Fallback img tag for browsers that do not support <picture> */}
    <img 
      src={`${billingIcon}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="Billing Analytics"
    />
  </picture>
</LazyLoad>

        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={billingIcon} className="img-responsive" loading="lazy" alt="Billing Analytics" />
            <source srcSet={billingIcon} type="image/png" />
            <source srcSet={billingIcon} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <h3>Billing Insights & Analytics</h3>
        <p>
          Leverage powerful billing analytics to monitor revenue trends, track customer payment behavior, and optimize your billing strategies.
        </p>
      </div>
    </div>
  </section>

  {/* Billing Benefits Section */}
  <section id="billing-benefits" className="my-5">
    <div className="container text-center">
      <h2>Why Choose Cipher ERP for Billing Management?</h2>
      <p>
        Maximize efficiency, reduce errors, and enhance cash flow management with Cipher ERP's robust billing solutions.
      </p>
    </div>
    <div className="row">
      <div className="col-sm-6 benefit-box">
        <h3>Enhanced Business Efficiency</h3>
        <p>
          Automate routine tasks like invoice generation, payment reminders, and reporting, freeing up valuable time for your business.
        </p>
      </div>
      <div className="col-sm-6 benefit-box">
        <h3>Accurate Payment Records</h3>
        <p>
          Ensure accurate invoicing and payment tracking with real-time data integration, reducing the risk of errors and discrepancies.
        </p>
      </div>
      <div className="col-sm-6 benefit-box">
        <h3>Improved Customer Experience</h3>
        <p>
          Provide a seamless customer experience with clear, timely invoices and transparent payment tracking.
        </p>
      </div>
      <div className="col-sm-6 benefit-box">
        <h3>Better Financial Control</h3>
        <p>
          Optimize your payment processes and gain real-time insights to forecast and manage your cash flow more effectively.
        </p>
      </div>
    </div>
  </section>

  {/* Billing Contact Form Section */}
  <section id="billing-contact" className="my-5">
    <div className="row">
      <div className="col-sm-7 contact-form">
        <h2>Contact Us for Billing Solutions</h2>
        <form>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" className="form-control" id="contact" placeholder="Enter your contact number" pattern="[0-9]{10}" required />
          </div>
          <button type="submit" className="btn btn-success btn-lg">Submit</button>
        </form>
      </div>
      <div className="col-sm-5 px-5 pt-5 text-center billingimg">
      <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${billing_icon}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />
    
    {/* Fallback PNG image for browsers that don't support WebP */}
    <source 
      srcSet={`${billing_icon}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />
    
    {/* Fallback JPEG image for browsers that don't support WebP */}
    <source 
      srcSet={`${billing_icon}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />
    
    {/* Fallback img tag for browsers that do not support <picture> */}
    <img 
      src={`${billing_icon}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="Billing Solutions"
      height={300} 
      width={400} 
    />
  </picture>
</LazyLoad>

        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={billing_icon} className="img-responsive" loading="lazy" alt="Billing Solutions" height={300} width={400} />
            <source srcSet={billing_icon} type="image/png" />
            <source srcSet={billing_icon} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
      </div>
    </div>
  </section>
</div>

<ChatbotComponent />

    </>
  );
};

export default BillingManagement;
