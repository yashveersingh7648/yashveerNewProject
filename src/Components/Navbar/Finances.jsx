import React from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const Finance = '/Images/finance.webp';
const Finance1 = '/Images/Fininner.webp';
const Finance2 = '/Images/FinTech.webp';
const Finance3 = '/Images/BlockchainandCryptocurrencies.webp';
const Finance4 = '/Images/ArtificialIntelligence.jpg';
const Finance5 = '/Images/SustainableFinance.webp';

const Finances = () => {
  return (
    <>
     <Helmet>
  {/* SEO-Optimized Title */}
  <title>Financial Management Software | Optimize Business Finances with CipherERP</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="CipherERP's financial management software helps businesses track expenses, manage accounts, and generate real-time financial reports. Optimize your financial operations today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Financial Management Software, CipherERP, business finance, accounting solutions, expense tracking, financial reporting, ERP software, business management system, financial analytics, cash flow tracking, FinTech, AI financial solutions" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


      <ScrollToTopButton />

      <div className="container-fluid">
        <div className="Finance-section">
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Finance}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />
    
    {/* PNG image for browsers that do not support WebP */}
    <source 
      srcSet={`${Finance}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />
    
    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Finance}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />
    
    {/* img tag for browsers that don't support <picture> */}
    <img 
      src={`${Finance}?w=800&h=533&fit=crop`} 
      className="responsive" 
      loading="lazy"  
      alt="Finance banner"  
      height={400} 
      width={1480}
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={Finance} 
                className="responsive" 
                loading="lazy"  
                alt="Finance banner"  
                height={400} 
                width={1480} 
              /> 
              <source srcSet={Finance} type="image/webp" />
              <source srcSet={Finance} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>

        <div className="container text-center">
          <h1>Financial Management: Optimizing Business Resources and Investments</h1>
          <div className="contents">
            <p className="text-justify">
              Finance refers to the management, creation, and study of money, investments, and other financial instruments. It plays a vital role in the global economy by facilitating the flow of capital to businesses and individuals, enabling them to grow, invest, and manage risk. Finance is divided into several branches, each focusing on different aspects of money and investments.
            </p>
          </div>
        </div>

        <div className="container text-center">
          <h2>Key Aspects of Financial Management</h2>
          <div className="row d-flex context">
            <div className="col-sm-5">
              <div className="fininner">
                <h3>Types of Finance</h3>
                <ul>
                <p className="text-justify">
               
                    <li><b>Personal Finance:</b> Managing individual or household finances, including budgeting, saving, investing, retirement planning, insurance, and tax management.</li>
                    <li><b>Corporate Finance:</b> Deals with the financial activities of businesses, including capital raising, investment decisions, expense management, and risk management.</li>
                    <li><b>Public Finance:</b> Involves the management of a country's revenue, expenditures, and debt load, including tax policy, government spending, and budgeting.</li>
                    <li><b>International Finance:</b> Focuses on the flow of capital across borders, foreign exchange markets, and international investment.</li>
                    <li><b>Behavioral Finance:</b> Studies how psychological factors influence financial decision-making.</li>
           
                </p>
                </ul>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="fininner">
                <h3>Key Concepts in Finance</h3>
                <ul>
                <p className="text-justify">
              
                    <li><b>Time Value of Money (TVM):</b> The concept that money available today is worth more than the same amount in the future due to its potential earning capacity.</li>
                    <li><b>Risk and Return:</b> Investors balance potential returns with risks. Higher returns typically come with higher risk.</li>
                    <li><b>Interest Rates:</b> The cost of borrowing money or the return on investment, crucial for loans, bonds, and savings accounts.</li>
                    <li><b>Capital Budgeting:</b> Companies evaluate potential investments using methods like Net Present Value (NPV) or Internal Rate of Return (IRR).</li>
                    <li><b>Diversification:</b> Spreading investments across various assets to reduce risk, a fundamental principle of modern portfolio theory.</li>
                 
                </p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center my-5">
          <h2>Emerging Trends in Financial Technology</h2>
          <div className="row my-5">
            <div className="col-sm-6">
              <div className="fininner">
                <h3>FinTech</h3>
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={Finance2} className="img-responsive" loading="lazy" alt="FinTech" height={300} width={300} /> 
                    <source srcSet={Finance2} type="image/webp" />
                    <source srcSet={Finance2} type="image/jpeg" />
                  </picture>
                </LazyLoad> */}
                <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Finance2}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />

    {/* PNG image for browsers that do not support WebP */}
    <source 
      srcSet={`${Finance2}?w=800&h=533&fit=crop`} 
      type="image/png" 
    />

    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Finance2}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />

    {/* img tag for browsers that don't support <picture> */}
    <img 
      src={`${Finance2}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy"  
      alt="FinTech"  
      height={300} 
      width={300}
    />
  </picture>
</LazyLoad>

                <p className="text-justify">
                  FinTech (Financial Technology) is revolutionizing finance with innovative solutions in payments, lending, insurance, and more.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="fininner">
                <h3>Blockchain & Cryptocurrencies</h3>
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={Finance3} className="img-responsive" loading="lazy" alt="Blockchain and Cryptocurrencies" height={300} width={300} /> 
                    <source srcSet={Finance3} type="image/webp" />
                    <source srcSet={Finance3} type="image/jpeg" />
                  </picture>
                </LazyLoad> */}
                <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Finance3}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />

    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Finance3}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />

    {/* img tag for browsers that don't support <picture> */}
    <img 
      src={`${Finance3}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy"  
      alt="Blockchain and Cryptocurrencies"  
      height={300} 
      width={300}
    />
  </picture>
</LazyLoad>

                <p className="text-justify">
                  Blockchain technology enhances transparency, security, and efficiency in the financial industry, while cryptocurrencies offer alternative assets.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-sm-6">
              <div className="fininner">
                <h3>Artificial Intelligence (AI)</h3>
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={Finance4} className="img-responsive" loading="lazy" alt="Artificial Intelligence" height={300} width={300} /> 
                    <source srcSet={Finance4} type="image/webp" />
                    <source srcSet={Finance4} type="image/jpeg" />
                  </picture>
                </LazyLoad> */}
                <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Finance4}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />

    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Finance4}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />

    {/* img tag for browsers that don't support <picture> */}
    <img 
      src={`${Finance4}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy"  
      alt="Artificial Intelligence"  
      height={300} 
      width={300}
    />
  </picture>
</LazyLoad>

                <p className="text-justify">
                  AI is reshaping finance with predictive analytics, robo-advisors, fraud detection, and personalized financial services.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="fininner">
                <h3>Sustainable Finance</h3>
                {/* <LazyLoad height={200} offset={100}>
                  <picture>
                    <img src={Finance5} className="img-responsive" loading="lazy" alt="Sustainable Finance" height={300} width={300} /> 
                    <source srcSet={Finance5} type="image/webp" />
                    <source srcSet={Finance5} type="image/jpeg" />
                  </picture>
                </LazyLoad> */}
                <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Finance5}?w=800&h=533&fit=crop`} 
      type="image/webp" 
    />

    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Finance5}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
    />

    {/* img tag for browsers that don't support <picture> */}
    <img 
      src={`${Finance5}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy"  
      alt="Sustainable Finance"  
      height={300} 
      width={300}
    />
  </picture>
</LazyLoad>

                <p className="text-justify">
                  Sustainable finance integrates environmental, social, and governance (ESG) factors into financial decisions to promote long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatbotComponent />
    </>
  );
};

export default Finances;
