import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const Retails = '/Images/RetailCenter.webp';
const Retail1 = '/Images/InvoiceRetail.webp';
const Retail2 = '/Images/RecurringBillingRetail.webp';
const Retail3 = '/Images/MultiCurrencySupport.webp';
const Retail4 = '/Images/Discounts&Taxes.webp';
const Retail5 = '/Images/PaymentReminders.webp';
const Retail6 = '/Images/InvoiceBillingModule.webp';
const Retail7 = '/Images/PaymentGatewayIntegration.webp';
const Retail8 = '/Images/MultiPaymentOptions.webp';
const Retail9 = '/Images/PaymentSecurity.webp';
const Retail11 = '/Images/ProductServiceCatalog.webp';
const Retail10 = '/Images/PaymentProcessingModule.webp';

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



const Retail = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.$ !== "undefined") {
        window.$("#owl-demo").owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            nav: false,
            dots: false,  
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    }
}, []);
  return (
    <>
   <Helmet>
  {/* SEO-Optimized Title */}
  <title>Best Retail ERP Software | CipherERP - Optimize Sales & Inventory</title>

  {/* Meta Description for SEO Ranking */}
  <meta 
    name="description" 
    content="Boost your retail business with CipherERP's best Retail ERP software. Improve inventory control, sales tracking, and customer management for maximum efficiency and growth." 
  />

  {/* SEO-friendly Meta Keywords */}
  <meta 
    name="keywords" 
    content="Retail ERP software, CipherERP, inventory management, sales tracking, customer management, business efficiency, ERP solutions for retail, retail automation, omnichannel sales"
  />
</Helmet>


<ScrollToTopButton/>

    <div container-fluid>
      <div className='row bannerimg' id='head'>
      <div className='col-sm-6 retailtext'>
      <h1 className=" font-bold text-4xl text-indigo-900">
      <b>Retail </b><br/> Resource Planning (ERP) for Smarter Business Management
</h1>

<p>In today&#39;s fast-paced retail environment, staying ahead of rapidly changing consumer trends while maintaining operational <br/>efficiency requires a cohesive strategy that integrates<br/> merchandising and financial management.</p>
      <a className="nav-sign" href="/SignUp">
<button className="btn btn-outline-primary text-white bg-primary" type="submit">Get Started</button>
    </a>
      </div>
      </div>


<div className='Retail-section text-center'>
  <h2>You've done everything to build your business.<br/> We help you take the next big step.</h2>
  <div className='row d-flex'>
    <div className='col-sm-4'>
      <div className='retailinner'>
<h3>Sell better</h3>
<p className='text-justify'>Take your business beyond the confines of your physical store with a robust mobile app designed to keep you open 24/7. With the app, customers can place orders anytime, even when your store is closed, providing a seamless shopping experience at their convenience.</p>
</div>
    </div>
    <div className='col-sm-4'>
    <div className='retailinner'>
      <h3>Manage your entire business</h3>
      <p className='text-justify'>Manage your entire business in one place with a comprehensive platform that integrates inventory, sales and billing, customer management, supplier relationships, credit payments, and more. Streamline your operations, reduce manual errors, and gain real-time insights to make smarter business decisions—all from a single, easy-to-use interface.</p>
    </div>
    </div>
    <div className='col-sm-4'>
    <div className='retailinner'>
      <h3>Join the digital revolution</h3>
      <p className='text-justify'>Cipher ERP empowers your business to undergo a digital transformation, helping you reach your customers wherever they are. With advanced tools and seamless integration, Zakya takes your business online, making it easier to engage, sell, and connect with customers on their preferred platforms.</p>
    </div>
    </div>
  </div>
</div>

<div className='container text-center'>
  <div className='blurimg'>
        {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retails} className="img-responsive my-5" loading="lazy"  alt="Finance images"  width={500}/> 
             <source srcSet={Retails} type="image/png" />
             <source srcSet={Retails} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
 <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retails}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retails}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retails}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retails}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
      width={500}
    />
  </picture>
</LazyLoad>

</div>
</div>



<div className='Retail_feture'>
  <div className='row py-5 '>
    <div className='col-sm-8 py-3'>
<h4>Invoice Generation</h4>
<p>To generate invoices within a Retail ERP (Enterprise Resource Planning) system, the process is typically automated or semi-automated, depending on the ERP software you're using. Retail ERPs manage inventory, sales, and customer data, making it easier to generate accurate and consistent invoices. Here's a general outline of how invoice generation works within a Retail ERP system.</p>
    </div>
    <div className='col-sm-4 retailimg'>
    {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail1} className="img-responsive mx-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail1} type="image/png" />
             <source srcSet={Retail1} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
 <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail1}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail1}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail1}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail1}?w=500&fit=crop`}
      className="img-responsive mx-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


    </div>
  </div>


  <div className='row py-5 '>
  <div className='col-sm-4 retailimg'>
  {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail2} className="img-responsive mx-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail2} type="image/png" />
             <source srcSet={Retail2} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail2}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail2}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail2}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail2}?w=500&fit=crop`}
      className="img-responsive mx-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


      </div>
    <div className='col-sm-8 py-3'>
<h4>Recurring Billing</h4>
<p>Recurring billing is a payment model that allows businesses to charge customers at regular intervals for ongoing services or subscription-based products. It automates the invoicing and payment collection process, ensuring businesses receive consistent revenue while reducing administrative effort.</p>
    </div>
  </div>



  <div className='row py-5'>
    <div className='col-sm-8'>
<h4>Multi-Currency Support</h4>
<p>Multi-currency support is an essential feature for retail businesses that operate internationally or deal with customers from different countries. It allows businesses to handle transactions in multiple currencies, which is especially important for cross-border sales, international e-commerce, and managing a global customer base.</p>
    </div>
    <div className='col-sm-4 retailimg'>
    {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail3} className="img-responsive mx-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail3} type="image/png" />
             <source srcSet={Retail3} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail3}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail3}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail3}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail3}?w=500&fit=crop`}
      className="img-responsive mx-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


    </div>
  </div>


  <div className='row'>
  <div className='col-sm-4 retailimg'>
  {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail4} className="img-responsive mx-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail4} type="image/png" />
             <source srcSet={Retail4} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
 <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail4}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail4}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail4}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail4}?w=500&fit=crop`}
      className="img-responsive mx-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>

      </div>
    <div className='col-sm-8 '>
<h4>Discounts & Taxes</h4>
<p>In a retail ERP system, managing discounts and taxes is crucial for maintaining accurate pricing, compliance, and customer satisfaction. The ability to offer discounts and properly calculate taxes can significantly influence your sales, profitability, and customer experience.

Here&#39;s how discounts and taxes are typically handled in retail ERP systems, along with key features and examples.</p>
    </div>
    
  </div>


  <div className='row'>
    <div className='col-sm-8 py-5'>
<h4>Payment Reminders</h4>
<p>Payment reminders are a critical part of maintaining cash flow and ensuring timely payments from customers. In the context of a Retail ERP system, payment reminders help businesses track outstanding invoices, remind customers about due payments, and automate the follow-up process, reducing the risk of overdue accounts.</p>
    </div>
    <div className='col-sm-4 retailimg'>
    {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail5} className="img-responsive mx-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail5} type="image/png" />
             <source srcSet={Retail5} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
 <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail5}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail5}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail5}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail5}?w=500&fit=crop`}
      className="img-responsive mx-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>

    </div>
  </div>



  <div className='row'>
  <div className='col-sm-4'>
  {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail6} className="img-responsive my-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail6} type="image/png" />
             <source srcSet={Retail6} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail6}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail6}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail6}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail6}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>

      </div>
    <div className='col-sm-8 py-5'>
<h4>Invoice & Billing Module</h4>
<p>The Invoice & Billing Module in a Retail ERP system is a critical component that helps businesses manage their invoicing, billing, and payment processes efficiently. This module automates the creation, management, and tracking of invoices and ensures that the company remains compliant with financial regulations.</p>
    </div>
  </div>


  <div className='row'>
    <div className='col-sm-8 py-5'>
<h4>Payment Gateway Integration</h4>
<p>Payment Gateway Integration is a critical feature in modern Retail ERP systems as it allows businesses to securely process customer payments through various online methods such as credit cards, bank transfers, digital wallets, and more. This integration ensures seamless, fast, and secure payment processing, improving cash flow and customer satisfaction.</p>
    </div>
    <div className='col-sm-4'>
    {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail7} className="img-responsive my-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail7} type="image/png" />
             <source srcSet={Retail7} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail7}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail7}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail7}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail7}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
  
    />
  </picture>
</LazyLoad>


      </div>
  </div>


  <div className='row'>
  <div className='col-sm-4'>
  {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail8} className="img-responsive my-5" loading="lazy"  alt="Finance images" width={300}/> 
             <source srcSet={Retail8} type="image/png" />
             <source srcSet={Retail8} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
 <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail8}?w=300&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail8}?w=300&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail8}?w=300&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail8}?w=300&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


      </div>
    <div className='col-sm-8 py-5'>
<h4>Multi-Payment Options</h4>
<p>In a Retail ERP system, integrating multi-payment options allows businesses to accept different payment types seamlessly, from traditional credit/debit cards to modern digital wallets and bank transfers.In today&#39;s retail environment, offering multiple payment options is essential to meet the diverse preferences of customers and to increase the likelihood of successful transactions.</p>
    </div>
  </div>



  <div className='row'>
    <div className='col-sm-8'>
<h4>Payment Security</h4>
<p>Payment security is a critical concern for businesses, especially in today’s digital age where cyber threats are increasingly sophisticated. Retail ERP systems that handle customer payments must ensure secure transactions to protect both the business and its customers from fraud, data breaches, and financial losses.</p>
    </div>
    <div className='col-sm-4'>
    {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail9} className="img-responsive my-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail9} type="image/png" />
             <source srcSet={Retail9} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail9}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail9}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail9}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail9}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


      </div>
  </div>


  <div className='row'>
  <div className='col-sm-4'>
  {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail10} className="img-responsive my-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail10} type="image/png" />
             <source srcSet={Retail10} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail10}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail10}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail10}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail10}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


      </div>
    <div className='col-sm-8'>
<h4>Payment Processing Module</h4>
<p>A Payment Processing Module in a Retail ERP system is a core component that facilitates the secure, efficient, and seamless handling of financial transactions between a business and its customers. The module manages all aspects of payment transactions, from accepting payments to processing refunds, ensuring compliance with security standards, and integrating with various payment gateways.</p>
    </div>
  </div>


  <div className='row'>
    <div className='col-sm-8'>
<h4>Product/Service Catalog</h4>
<p>A Product/Service Catalog is a crucial component of any Retail ERP (Enterprise Resource Planning) system. It is the central repository where all the details related to the products and services offered by a business are stored and managed. The catalog not only helps organize and display product information but also ensures that this information is consistently available across various touchpoints like sales, inventory, and customer service.</p>
    </div>
    <div className='col-sm-4'>
    {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Retail11} className="img-responsive my-5" loading="lazy"  alt="Finance images" /> 
             <source srcSet={Retail11} type="image/png" />
             <source srcSet={Retail11} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Retail11}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that support PNG */}
    <source srcSet={`${Retail11}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Retail11}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Retail11}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


      </div>
  </div>
</div>


<div className=' Retailslider'>
            <div className=' Retailrow d-flex '>
                <div id="owl-demo" className="owl-carousel owl-theme text-justify">
                    <div className="item "> 
                        <h5>Inventory Alerts</h5>
                        <p>Inventory alerts are automated notifications within an inventory management system (often integrated into ERP software) that inform users about inventory levels, potential shortages, or other key inventory-related events.</p>
                    </div>
                    <div className="item">       
                        <h5> Batch and Expiry Tracking</h5>
                        <p>Batch and Expiry Tracking is a critical component of inventory management, especially for businesses dealing with perishable goods or products with a shelf life (such as pharmaceuticals, food, cosmetics, and chemicals).</p>
                    </div>
                    <div className="item">  
                        <h5>Inventory Management Module</h5>
                        <p>An Inventory Management Module in a Retail ERP (Enterprise Resource Planning) system is designed to streamline and automate the process of tracking and managing stock across various stages, from procurement and storage to sales and delivery.</p>
                    </div>
                    <div className="item"> 
                        <h5>Client Management Module</h5>
                        <p>The Client Management Module in a Retail ERP system is a key feature that enables businesses to efficiently manage their relationships with customers. This module helps organize and track customer data and ultimately build long-lasting customer loyalty.</p>
                    </div>
                    <div className="item">
                        <h5>Expense Tracking Module</h5>
                        <p>The Expense Tracking Module in a Retail ERP (Enterprise Resource Planning) system is designed to help businesses efficiently monitor, manage, and control their expenses. This module plays a crucial role in ensuring  helping businesses stay within their budget.</p>
                    </div>
                    <div className="item"> 
                        <h5>Financial Reports & Analytics Module</h5>
                        <p>The Financial Reports & Analytics Module in a Retail ERP system is designed to help businesses gain real-time insights into their financial performance, track key financial metrics, and make data-driven decisions.</p>
                    </div>
                    <div className="item">
                        <h5>GST & Tax Management Module</h5>
                        <p>The GST & Tax Management Module in a Retail ERP system is designed to automate and streamline the management of Goods and Services Tax (GST) and other tax-related processes, ensuring that businesses comply with tax laws and regulations.</p>
                    </div>
                    <div className="item">
                        <h5>User Access & Permissions Module</h5>
                        <p>The User Access & Permissions Module in a Retail ERP system is crucial for managing who can access specific data, features, and functionalities within the system.</p>
                    </div>
                    <div className="item">
                        <h5> Data Import/Export Module</h5>
                        <p>The Data Import/Export Module in a Retail ERP system is a crucial tool for businesses that need to efficiently move data between their ERP system and other external systems, databases, or applications.</p>
                    </div>
                    <div className="item"> 
                        <h5>Customization & Settings Module</h5>
                        <p>The Customization & Settings Module in a Retail ERP system is a vital component that allows businesses to tailor the ERP system to their specific needs, processes, and industry requirements.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
<ChatbotComponent />

    </>
  )
}

export default Retail;
