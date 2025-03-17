import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const leakageIcon = '/Images/leakage-icon1.webp';
const leakageIcons = '/Images/TrackLosses.webp';
const totalStockIcon =  '/Images/Total-StockQuantity.webp';
const totalStockIcons =  '/Images/Stock-Alerts.webp';
const creditNoteIcon =  '/Images/Create-Credit-Note.webp';
const creditNoteIcons =  '/Images/Track-Credit-Usage1.webp';
const debitNoteIcon = '/Images/GenerateDebitNotes.webp';
const debitNoteIcons =  '/Images/Monitor-Payment-Status.webp';

const ColdDrinkAgencyFeatures = () => {
  return (
    <>
     <Helmet>
  {/* SEO-Optimized Title */}
  <title>Cold Drink Business Management | Efficient ERP Solutions - CipherERP</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Streamline your cold drink business operations with CipherERP. Manage inventory, track sales, optimize financial performance, and enhance customer relations with our advanced ERP system. Get started today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Cold Drink Business, Cold Drink Management, Beverage Inventory, Business ERP, Supply Chain Optimization, Sales Tracking, Customer Solutions, Financial Tracking, Cold Drink Distribution, ERP for Beverages" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


      <ScrollToTopButton />

      <div className="container-fluid">

        {/* Hero Section */}
        <div className="hero-section2 text-center" id='head'>
          <div className="row">
            <div className="col-lg-6">
              <h1>Cold Drink Business & Stock Management</h1>
              <p>
                Manage stock, track financial documents, and ensure smooth operations with our comprehensive system.
              </p>
              <a className="nav-sign" href="/SignUp">
                <button className="btn btn-primary">Get Started</button>
              </a>
            </div>
          </div>
        </div>

        {/* Leakage Stock Section (Card Layout) */}
        <section className="my-5">
          <h2 className="text-center">Leakage Stock & Business Loss Management</h2>
          <p className="text-center">Track and manage any stock leakage during the distribution process to ensure proper accounting.</p>
          <div className='container text-center'>
            <div className="row coldrink">
              <div className="col-sm-5">
                <div className="card">
                  {/* <LazyLoad height={200} offset={100}>
                    <picture>
                      <img src={leakageIcon} className="img-responsive card-img-top" loading="lazy" alt="Leakage" />
                    </picture>
                  </LazyLoad> */}
                  <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${leakageIcon}?w=200&h=150&fit=crop&fm=avif 200w,
               ${leakageIcon}?w=400&h=300&fit=crop&fm=avif 400w,
               ${leakageIcon}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${leakageIcon}?w=200&h=150&fit=crop&fm=webp 200w,
               ${leakageIcon}?w=400&h=300&fit=crop&fm=webp 400w,
               ${leakageIcon}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${leakageIcon}?w=200&h=150&fit=crop&fm=png 200w,
               ${leakageIcon}?w=400&h=300&fit=crop&fm=png 400w,
               ${leakageIcon}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${leakageIcon}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${leakageIcon}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${leakageIcon}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${leakageIcon}?w=400&h=300&fit=crop`} 
      className="img-responsive card-img-top lazy-img" 
      loading="lazy"  
      alt="Leakage"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

                  <div className="card-body">
                    <h3 className="card-title">Leakage Reporting</h3>
                    <p className="card-text">Easily report any stock leakage to keep track of lost products and reduce wastage.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="card">
                  {/* <LazyLoad height={200} offset={100}>
                    <picture>
                      <img src={leakageIcons} className="img-responsive card-img-top" loading="lazy" alt="Track Losses" />
                    </picture>
                  </LazyLoad> */}
                  <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${leakageIcons}?w=200&h=150&fit=crop&fm=avif 200w,
               ${leakageIcons}?w=400&h=300&fit=crop&fm=avif 400w,
               ${leakageIcons}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${leakageIcons}?w=200&h=150&fit=crop&fm=webp 200w,
               ${leakageIcons}?w=400&h=300&fit=crop&fm=webp 400w,
               ${leakageIcons}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${leakageIcons}?w=200&h=150&fit=crop&fm=png 200w,
               ${leakageIcons}?w=400&h=300&fit=crop&fm=png 400w,
               ${leakageIcons}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${leakageIcons}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${leakageIcons}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${leakageIcons}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${leakageIcons}?w=400&h=300&fit=crop`} 
      className="img-responsive card-img-top lazy-img" 
      loading="lazy"  
      alt="Track Losses"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

                  <div className="card-body">
                    <h3 className="card-title">Business Loss Tracking</h3>
                    <p className="card-text">Monitor the volume of leaked stock and assess the financial impact on your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Total Stock Section (Grid Layout) */}
        <section className="my-5">
          <h2 className="text-center">Total Stock Management System for Businesses</h2>
          <p className="text-center">Keep a precise track of all your available products, ready for distribution.</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="total-stock-box">
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={totalStockIcon} className="img-responsive img-fluid" loading="lazy" alt="Total Stock" />
                  </picture>
                </LazyLoad> */}
                <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${totalStockIcon}?w=200&h=150&fit=crop&fm=avif 200w,
               ${totalStockIcon}?w=400&h=300&fit=crop&fm=avif 400w,
               ${totalStockIcon}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${totalStockIcon}?w=200&h=150&fit=crop&fm=webp 200w,
               ${totalStockIcon}?w=400&h=300&fit=crop&fm=webp 400w,
               ${totalStockIcon}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${totalStockIcon}?w=200&h=150&fit=crop&fm=png 200w,
               ${totalStockIcon}?w=400&h=300&fit=crop&fm=png 400w,
               ${totalStockIcon}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${totalStockIcon}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${totalStockIcon}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${totalStockIcon}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${totalStockIcon}?w=400&h=300&fit=crop`} 
      className="img-responsive img-fluid lazy-img" 
      loading="lazy"  
      alt="Total Stock"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

                <h3>Efficient Total Stock Monitoring</h3>
                <p>Manage and view the total quantity of cold drinks available at any time.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total-stock-box">
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={totalStockIcons} className="img-responsive img-fluid" loading="lazy" alt="Stock Alerts" />
                  </picture>
                </LazyLoad> */}
                <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${totalStockIcons}?w=200&h=150&fit=crop&fm=avif 200w,
               ${totalStockIcons}?w=400&h=300&fit=crop&fm=avif 400w,
               ${totalStockIcons}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${totalStockIcons}?w=200&h=150&fit=crop&fm=webp 200w,
               ${totalStockIcons}?w=400&h=300&fit=crop&fm=webp 400w,
               ${totalStockIcons}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${totalStockIcons}?w=200&h=150&fit=crop&fm=png 200w,
               ${totalStockIcons}?w=400&h=300&fit=crop&fm=png 400w,
               ${totalStockIcons}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${totalStockIcons}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${totalStockIcons}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${totalStockIcons}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${totalStockIcons}?w=400&h=300&fit=crop`} 
      className="img-responsive img-fluid lazy-img" 
      loading="lazy"  
      alt="Stock Alerts"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

                <h3>Automated Stock Alerts & Notifications</h3>
                <p>Receive notifications for low stock levels, ensuring you never run out of popular items.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Note Section (Card Layout) */}
        <section className="my-5">
          <h2 className="text-center">Credit Note Management for Businesses</h2>
          <p className="text-center">Efficiently handle credit notes for returned items or discounts offered to customers.</p>
          <div className='container text-center'>
            <div className="row coldrink1">
              <div className="col-sm-4">
                <div className="card">
                  {/* <LazyLoad height={200} offset={100}>
                    <picture>
                      <img src={creditNoteIcon} className="img-responsive card-img-top" loading="lazy" alt="Create Credit Note" />
                    </picture>
                  </LazyLoad> */}
     <LazyLoad height={200} offset={100} className="lazyload-container">
            <picture>
              <source 
                srcSet={`${creditNoteIcon}?w=400&h=300&fit=crop&fm=avif`} 
                type="image/avif"
              />
              <source 
                srcSet={`${creditNoteIcon}?w=400&h=300&fit=crop&fm=webp`} 
                type="image/webp"
              />
              <img 
                src={`${creditNoteIcon}?w=400&h=300&fit=crop`} 
                className="img-responsive card-img-top lazy-img" 
                loading="lazy" 
                alt="Create Credit Note - Business Management" 
                width="400" 
                height="300" 
                decoding="async"
                fetchPriority="low"
              />
            </picture>
          </LazyLoad>
                  <div className="card-body">
                    <h3 className="card-title">Create Credit Notes</h3>
                    <p className="card-text">Generate credit notes for returned or damaged items and apply them to future orders.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  {/* <LazyLoad height={200} offset={100}>
                    <picture>
                      <img src={creditNoteIcons} className="img-responsive card-img-top" loading="lazy" alt="Track Credit Usage" />
                    </picture>
                  </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
            <picture>
              <source 
                srcSet={`${creditNoteIcons}?w=400&h=300&fit=crop&fm=avif`} 
                type="image/avif"
              />
              <source 
                srcSet={`${creditNoteIcons}?w=400&h=300&fit=crop&fm=webp`} 
                type="image/webp"
              />
              <img 
                src={`${creditNoteIcons}?w=400&h=300&fit=crop`} 
                className="img-responsive card-img-top lazy-img" 
                loading="lazy" 
                alt="Track Credit Usage - Business Systems" 
                width="400" 
                height="300" 
                decoding="async"
                fetchPriority="low"
              />
            </picture>
          </LazyLoad>

                  <div className="card-body">
                    <h3 className="card-title">Track Credit Usage</h3>
                    <p className="card-text">Track how credit notes are applied to customer accounts, keeping your finances in check.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Debit Note Section (Grid Layout) */}
        <section className="my-5">
          <h2 className="text-center">Debit Note Management for Businesses</h2>
          <p className="text-center">Efficiently manage debit notes to track payments, additional charges, and customer transactions.</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="debit-note-box">
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={debitNoteIcon} className="img-responsive img-fluid" loading="lazy" alt="Generate Debit Notes" />
                  </picture>
                </LazyLoad> */}
      <LazyLoad height={200} offset={100} className="lazyload-container">
          <picture>
            <source srcSet={`${debitNoteIcon}?w=400&h=300&fit=crop&fm=avif`} type="image/avif" />
            <source srcSet={`${debitNoteIcon}?w=400&h=300&fit=crop&fm=webp`} type="image/webp" />
            <img 
              src={`${debitNoteIcon}?w=500&h=400&fit=crop`} 
              className="img-responsive card-img-top lazy-img" 
              loading="lazy" 
              alt="Generate Debit Notes for Business Transactions" 
              width="400" 
              height="300" 
              decoding="async" 
              fetchPriority="low"
            />
          </picture>
        </LazyLoad>
                <h3>Generate Debit Notes</h3>
                <p>Quickly create debit notes for additional charges, interest, or adjustments in your business system.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="debit-note-box">
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={debitNoteIcons} className="img-responsive img-fluid" loading="lazy" alt="Monitor Payment Status" />
                  </picture>
                </LazyLoad> */}
     <LazyLoad height={200} offset={100} className="lazyload-container">
          <picture>
            <source srcSet={`${debitNoteIcons}?w=400&h=300&fit=crop&fm=avif`} type="image/avif" />
            <source srcSet={`${debitNoteIcons}?w=400&h=300&fit=crop&fm=webp`} type="image/webp" />
            <img 
              src={`${debitNoteIcons}?w=400&h=300&fit=crop`} 
              className="img-responsive card-img-top lazy-img" 
              loading="lazy" 
              alt="Monitor Customer Payment Status in Business Systems" 
              width="400" 
              height="300" 
              decoding="async" 
              fetchPriority="low"
            />
          </picture>
        </LazyLoad>
                <h3>Monitor Payment Status</h3>
                <p>Keep track of customer payments and outstanding amounts with efficient debit note management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Section (Step Layout) */}
        <section className="my-5">
          <h2 className="text-center">Audit & Compliance Management</h2>
          <p className="text-center">Track all stock and financial transactions for internal and external audits.</p>
          <div className="row">
            <div className="col-sm-4">
              <div className="audit-step">
                <h3>Step 1: Track Transactions</h3>
                <p>Maintain records of all sales, stock movements, and payments.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="audit-step">
                <h3>Step 2: Periodic Audits</h3>
                <p>Perform periodic audits to ensure stock and financial integrity.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="audit-step">
                <h3>Step 3: Compliance Reports</h3>
                <p>Generate compliance reports for regulatory bodies and stakeholders.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <ChatbotComponent />
    </>
  );
};

export default ColdDrinkAgencyFeatures;
