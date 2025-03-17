import React from 'react';
import { Helmet } from 'react-helmet';

import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";
// Importing images from public folder
const About =  '/Images/AboutUs.webp';
const About1 =  '/Images/FinanceAccounting.webp';
const About2 = '/Images/InventoryManagement.webp';
const About3 = '/Images/ManufacturingProduction.webp';
const About4 = '/Images/HumanResources.webp';
const About5 = '/Images/CustomerRelationshipManagement.webp';

const AboutUs = () => {
  return (
    <>
 <Helmet>
  {/* Optimized Page Title */}
  <title>Best Business Management Software | CipherERP ERP Solutions</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Discover CipherERP, the leading business management software that integrates finance, inventory, HR, and customer relationship management. Optimize operations and drive business growth with our powerful ERP solutions." 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Business Management Software, ERP Solutions, Business Automation, Customer Relationship Management, Inventory Management, HR Systems, Enterprise Software, Workflow Management, Finance Integration, CipherERP" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


<div className='container-fluid'>
  <div className='banner' id='head'>
  {/* <LazyLoad height={200} offset={100}>
  <picture>
    <source 
      srcSet={`${About}?w=1200&h=800&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 1200px)" 
    />
    <source 
      srcSet={`${About}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 600px)" 
    />
    <source 
      srcSet={`${About}?w=400&h=267&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 599px)" 
    />
    
    <img 
      src={`${About}?w=800&h=533&fit=crop`} 
      className="img-responsive" 
      loading="lazy" 
      alt="CipherERP Business Software" 
      width="800" 
      height="533" 
    />
  </picture>
</LazyLoad> */}

    {/* <LazyLoad height={200} offset={100}>
      <picture>
        <img 
          src={About} 
          className="img-responsive" 
          loading="lazy" 
          alt="CipherERP Business Software" 
        />
        <source srcSet={About} type="image/png" />
        <source srcSet={About} type="image/jpeg" />
      </picture>
    </LazyLoad> */}
  </div>

  <div className='container'>
    <h1 className='headingtext text-center'>CipherERP &#45; The Ultimate Business Management System</h1>
    <p className='para text-justify'>
      CipherERP is an innovative and comprehensive Enterprise Resource Planning (ERP) software designed to optimize and streamline business processes. It provides an integrated solution for managing finance, inventory, manufacturing, sales, human resources, and customer relationships, all in one unified platform. CipherERP is scalable and customizable, allowing businesses of all sizes to enhance efficiency and make data-driven decisions.
    </p>
  </div>

  <div className='container-fluid mb-5 mt-5'>
    <div className='container'>
      <h2 className='text-center fs-1 ciphertext'>Key Features of Our Business Management System</h2>
      
      <div className="row text-justify my-5">
        <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
          <h3 className='text-center'>Finance & Accounting Systems</h3>
          <p className='text-justify'>
            CipherERP integrates financial management with automated accounting processes, improving decision-making with real-time data, reducing operational costs, and ensuring accurate reporting for businesses.
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6 keyfeatureimg">
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High-resolution image for large screens */}
    <source 
      srcSet={`${About1}?w=1200&h=800&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 1200px)" 
    />
    {/* Medium resolution image for tablets */}
    <source 
      srcSet={`${About1}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 600px)" 
    />
    {/* Low resolution image for mobile */}
    <source 
      srcSet={`${About1}?w=400&h=267&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag with correct aspect ratio */}
    <img 
      src={`${About1}?w=800&h=533&fit=crop`} 
      className="responsive-img mt-5" 
      loading="lazy" 
      alt="Finance and Accounting in CipherERP" 
      width="800" 
      height="533" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={About1} 
                className="img-responsive mt-5" 
                loading="lazy" 
                alt="Finance and Accounting in CipherERP" 
                height="400" 
                width="550" 
              />
              <source srcSet={About1} type="image/png" />
              <source srcSet={About1} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>

      <div className="row text-justify my-5">
        <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
          <h3 className='text-center'>Efficient Inventory Management</h3>
          <p className='text-justify'>
            CipherERP's inventory management feature ensures optimal stock levels by tracking orders, sales, and deliveries. It helps businesses maintain an efficient inventory system, minimizing waste and stockouts.
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6 text-center keyfeatureimg">
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution image for larger screens */}
    <source 
      srcSet={`${About2}?w=1200&h=800&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 1200px)" 
    />
    {/* Medium resolution image for medium-sized screens */}
    <source 
      srcSet={`${About2}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 600px)" 
    />
    {/* Low resolution image for smaller screens */}
    <source 
      srcSet={`${About2}?w=400&h=267&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag */}
    <img 
      src={`${About2}?w=800&h=533&fit=crop`} 
      className="img-responsive mt-5" 
      loading="lazy" 
      alt="Inventory Management in CipherERP" 
      width="800" 
      height="533" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={About2} 
                className="img-responsive mt-5" 
                loading="lazy" 
                alt="Inventory Management in CipherERP" 
                height="400" 
                width="550" 
              />
              <source srcSet={About2} type="image/png" />
              <source srcSet={About2} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>

      <div className="row text-justify my-5">
        <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
          <h3 className='text-center'>Manufacturing & Production Systems</h3>
          <p className='text-justify'>
            CipherERP helps businesses streamline manufacturing and production processes, improving operational efficiency and product delivery. The system integrates production schedules, resource allocation, and quality control.
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6 text-center keyfeatureimg">
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution image for larger screens */}
    <source 
      srcSet={`${About3}?w=1200&h=800&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution image for medium-sized screens */}
    <source 
      srcSet={`${About3}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution image for smaller screens */}
    <source 
      srcSet={`${About3}?w=400&h=267&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag */}
    <img 
      src={`${About3}?w=800&h=533&fit=crop`} 
      className="img-responsive mt-5" 
      loading="lazy" 
      alt="Manufacturing and Production in CipherERP" 
      width="800" 
      height="533" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={About3} 
                className="img-responsive mt-5" 
                loading="lazy" 
                alt="Manufacturing and Production in CipherERP" 
                height="400" 
                width="550" 
              />
              <source srcSet={About3} type="image/png" />
              <source srcSet={About3} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>
    </div>
  </div>

  <div className='container-fluid mb-5'>
    <div className='container'>
      <div className="row text-justify my-5">
        <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
          <h3 className='text-center'>Comprehensive Human Resource (HR) Systems</h3>
          <p className='text-justify'>
            CipherERP integrates Human Resource management into its ERP system, allowing businesses to automate payroll, recruitment, training, and employee performance tracking, ensuring smooth operations and compliance.
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6 keyfeatureimg">
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution image for larger screens */}
    <source 
      srcSet={`${About4}?w=1200&h=800&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution image for medium-sized screens */}
    <source 
      srcSet={`${About4}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution image for smaller screens */}
    <source 
      srcSet={`${About4}?w=400&h=267&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag */}
    <img 
      src={`${About4}?w=800&h=533&fit=crop`} 
      className="img-responsive mt-5" 
      loading="lazy" 
      alt="HR Management in CipherERP" 
      width="800" 
      height="533" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={About4} 
                className="img-responsive mt-5" 
                loading="lazy" 
                alt="HR Management in CipherERP" 
                height="400" 
                width="550" 
              />
              <source srcSet={About4} type="image/png" />
              <source srcSet={About4} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>

      <div className="row text-justify my-5">
        <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
          <h3 className='text-center'>Customer Relationship Management (CRM)</h3>
          <p className='text-justify'>
            CipherERP integrates CRM to improve customer engagement, sales, and marketing efforts. The CRM functionality helps businesses build stronger customer relationships, enhancing loyalty and satisfaction.
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6 text-center keyfeatureimg">
        <LazyLoad height={200} offset={100}>
  <picture>
    {/* High resolution image for larger screens */}
    <source 
      srcSet={`${About5}?w=1200&h=800&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 1200px)" 
    />
    
    {/* Medium resolution image for medium-sized screens */}
    <source 
      srcSet={`${About5}?w=800&h=533&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 600px)" 
    />
    
    {/* Low resolution image for smaller screens */}
    <source 
      srcSet={`${About5}?w=400&h=267&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 599px)" 
    />
    
    {/* Fallback img tag */}
    <img 
      src={`${About5}?w=800&h=533&fit=crop`} 
      className="img-responsive mt-5 pt-5" 
      loading="lazy" 
      alt="CRM in CipherERP" 
      width="800" 
      height="533" 
    />
  </picture>
</LazyLoad>

          {/* <LazyLoad height={200} offset={100}>
            <picture>
              <img 
                src={About5} 
                className="img-responsive mt-5 pt-5" 
                loading="lazy" 
                alt="CRM in CipherERP" 
                height="500" 
                width="550" 
              />
              <source srcSet={About5} type="image/png" />
              <source srcSet={About5} type="image/jpeg" />
            </picture>
          </LazyLoad> */}
        </div>
      </div>
    </div>
  </div>

  <div className='section1 text-center' id='manifacture1'>
    <h2 className='heading1'>Key Benefits of Our ERP Business Solutions</h2>
    <div className='container'>
      <div className='row d-flex text-justifye'>
        <div className='col-sm-3'>
          <div className='innerimg'>
            <h3>Streamlined Business Operations</h3>
            <p className='text-justify'>
              CipherERP centralizes business processes, improving cross-department communication and automating routine tasks to enhance efficiency.
            </p>
          </div>
        </div>
        <div className='col-sm-3 pb-5'>
          <div className='innerimg mb-5'>
            <h3 className='pt-4'>Real-Time Data Insights</h3>
            <p className='text-justify'>
              CipherERP provides businesses with real-time data and insights to make informed, data-driven decisions quickly.
            </p>
          </div>
        </div>
        <div className='col-sm-3 pb-5'>
          <div className='innerimg mb-5'>
            <h3 className='pt-4'>Flexible & Scalable Solutions</h3>
            <p className='text-justify'>
              The platform is customizable to suit different industries, allowing businesses to tailor features to their specific needs.
            </p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='innerimg'>
            <h3>Scalability</h3>
            <p className='text-justify'>
              CipherERP scales as your business grows, providing additional modules without requiring a complete system overhaul.
            </p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='innerimg'>
            <h3>Enhanced Collaboration</h3>
            <p className='text-justify'>
              CipherERP fosters teamwork by integrating information across departments, ensuring smooth collaboration.
            </p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='innerimg'>
            <h3>Security & Compliance</h3>
            <p className='text-justify'>
              The platform ensures robust data security and compliance with industry regulations, offering secure data storage and audit trails.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ChatbotComponent />
<ScrollToTopButton/>

    </>
  )
}

export default AboutUs;
