import React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import ChatbotComponent
import ChatbotComponent from "./Navbar/ChatbotComponent";  // If Navbar is in the same folder
import ScrollToTopButton from "./Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image and video paths using process.env.PUBLIC_URL
// import waveImage from '/Images/wave.png';
// import erpbannerImage from '/Images/Erpbanner.png';

const img = '/Images/wave.webp';
const img2 = "/Images/Erpbanner.webp";
// const img = process.env.PUBLIC_URL + '/Images/wave.png';
// const img2 = process.env.PUBLIC_URL + '/Images/Erpbanner.png';
const img3 =  '/Images/buldSalution.webp';
const img4 = '/Images/technology.webp';
const img5 =  '/Images/Faster_time.webp';
const img6 =  '/Images/Upscale.webp';
const img7 =  '/Images/Power2.webp';
const img8 = '/Images/Cloud1.webp';
const img9 = '/Images/Mobility__1.webp';
const img10 = '/Images/Flexibility__1.webp';
const img11 = '/Images/Integration__1.webp';
const img12 = '/Images/UserInterface.webp';
const img13 = '/Images/In-Memory1.webp';
const img14 = '/Images/Context_Aware__1.webp';
const img15 = '/Images/Scalability1.webp';
const Scrol = '/Images/ERP1.webp';
const Scrol1 = '/Images/ERP2.webp';
const Scrol2 = '/Images/ERP3.webp';
const Scrol3 = '/Images/ERP4.webp';
const Scrol4 = '/Images/ERP5.webp';
const Scrol5 = '/Images/ERP6.webp';
const Banifit = '/Images/ImprovesAccuracyProductivity1.webp';
const Banifit1 =  '/Images/EnterpriseResource.svg';
const Banifit2 = '/Images/IncreasesEfficiency1.webp';
const Banifit3 = '/Images/BoostsCollaboration.jpeg';
const Images = '/Images/contimg.webp';
const video = '/Images/Video.mp4';
const Page1 = () => {
  return (<>
<Helmet>
  <title>Cipher ERP - Best Business Management & ERP Solutions in India</title>
  
  <meta 
    name="description" 
    content="CipherERP provides cloud-based ERP solutions for business management, retail, wholesale, manufacturing, school management, and more. Boost efficiency and automate workflows today!" 
  />

  <meta 
    name="keywords" 
    content="Business Management, ERP Software, Best ERP Solutions, Retail ERP, Wholesale ERP, School Management ERP, Manufacturing ERP, Cloud-based ERP, Small Business ERP, Customizable ERP, ERP for SMEs, Billing Software, Supply Chain ERP, Customer Management, Business Efficiency, Secure ERP Software, Affordable ERP Software" 
  />
</Helmet>

    <div className='Erp-container ' id='head'>
   <div className="row " >
    <div className="col-sm-6 col-md-6 col-xl-6 Erptext" id='homesectionid'>
    <h1> CipherERP - India's Leading ERP Solution for Billing & Business Management </h1>
<a className="nav-sign" href="/SignUp">
      <button className="btn btn-outline-primary text-white bg-primary" type="submit">Get Started</button>
      </a>
      
    </div>
    <div className="col-sm-6 col-md-6 col-xl-6 Erpimg">
      {/* <LazyLoad height={200} offset={100}>
           <picture>
           
           <img   src={img2} className="img-responsive " loading="lazy"  alt="logo img" height={600} width={700}/> 
           <source srcSet={img2} type="image/png" />
           <source srcSet={img2} type="image/jpeg" />
           </picture>
           </LazyLoad> */}
             <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${img2}?w=400&h=343&fit=crop&fm=webp 400w,
        ${img2}?w=700&h=600&fit=crop&fm=webp 700w
      `}
      sizes="(max-width: 600px) 400px, 700px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${img2}?w=400&h=343&fit=crop&fm=png 400w,
        ${img2}?w=700&h=600&fit=crop&fm=png 700w
      `}
      sizes="(max-width: 600px) 400px, 700px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${img2}?w=400&h=343&fit=crop&fm=jpeg 400w,
        ${img2}?w=700&h=600&fit=crop&fm=jpeg 700w
      `}
      sizes="(max-width: 600px) 400px, 700px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img2}?w=700&h=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Logo Image"  
      width={700} 
      height={600}
    />
  </picture>
</LazyLoad>


    </div>
    

  </div>
  <LazyLoad height={200} offset={100}>
           <picture>
           
           <img   src={img} className="img-responsiv waveimg " loading="lazy"  alt="logo img" /> 
           <source srcSet={img} type="image/png" />
           <source srcSet={img} type="image/jpeg" />
           </picture>
           </LazyLoad>
 {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
  
    <source 
      srcSet={`${img}?w=400&h=300&fit=crop&fm=webp 400w,
               ${img}?w=800&h=600&fit=crop&fm=webp 800w`}
      sizes="(max-width: 600px) 400px, 800px"
      type="image/webp"
    />

  
    <source 
      srcSet={`${img}?w=400&h=300&fit=crop&fm=png 400w,
               ${img}?w=800&h=600&fit=crop&fm=png 800w`}
      sizes="(max-width: 600px) 400px, 800px"
      type="image/png"
    />

   
    <source 
      srcSet={`${img}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${img}?w=800&h=600&fit=crop&fm=jpeg 800w`}
      sizes="(max-width: 600px) 400px, 800px"
      type="image/jpeg"
    />

  
    <img 
      src={`${img}?w=800&h=600&fit=crop`} 
      className="img-responsiv waveimg lazy-img" 
      loading="lazy"  
      alt="Logo Image"  
      width={800} 
      height={600}
    />
  </picture>
</LazyLoad> */}


     </div>

     <div className="contain text-center">
  <h2 className="title1 text-center">Why CipherERP is the Best ERP Billing Solution for Secure, Scalable, <br/>and Efficient Business Growth in India</h2>
</div>

<div className='home-section'>
  <div className="row home text-justify text-center">
    <div className="col-sm-3">
      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img src={img3} loading="lazy" alt="Build any ERP solution" />
          <source srcSet={img3} type="image/png" />
          <source srcSet={img3} type="image/jpeg" />
        </picture>
      </LazyLoad> */}
      <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img3}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img3}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img3}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img3}?w=400&h=250&fit=crop&fm=png 400w,
               ${img3}?w=800&h=500&fit=crop&fm=png 800w,
               ${img3}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img3}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img3}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img3}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img3}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Build any ERP solution"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      <h3>Best ERP Solution in India with Advanced AES Encryption</h3>
      <p>Implement an ERP solution with built-in AES encryption for secure data storage and transmission. Enhance user authentication, data integrity, and compliance. Ensure scalability and robust backup solutions in India.</p>
    </div>
    <div className="col-sm-3">
      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img src={img4} loading="lazy" alt="Modern technology in ERP" />
          <source srcSet={img4} type="image/png" />
          <source srcSet={img4} type="image/jpeg" />
        </picture>
      </LazyLoad> */}
      <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Faster Loading */}
    <source 
      srcSet={`${img4}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img4}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img4}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img4}?w=400&h=250&fit=crop&fm=png 400w,
               ${img4}?w=800&h=500&fit=crop&fm=png 800w,
               ${img4}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img4}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img4}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img4}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img4}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Modern technology in ERP"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      <h3>Leverage Modern Technology for Scalable ERP Systems</h3>
      <p>Modern ERP solutions use advanced encryption algorithms like AES and RSA, combined with blockchain and homomorphic encryption for secure, scalable, and tamper-proof data management in India.</p>
    </div>
    <div className="col-sm-3">
      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img src={img5} loading="lazy" alt="Faster time to market with ERP" />
          <source srcSet={img5} type="image/png" />
          <source srcSet={img5} type="image/jpeg" />
        </picture>
      </LazyLoad> */}
      <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img5}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img5}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img5}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img5}?w=400&h=250&fit=crop&fm=png 400w,
               ${img5}?w=800&h=500&fit=crop&fm=png 800w,
               ${img5}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img5}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img5}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img5}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img5}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Faster time to market with ERP"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      <h3>Accelerate Time-to-Market with Efficient ERP Solutions</h3>
      <p>Implement an ERP with strong encryption for secure data. Integrate automation and real-time analytics to streamline operations, reduce costs, and speed up time-to-market for businesses across India.</p>
    </div>
    <div className="col-sm-3">
      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img src={img6} loading="lazy" alt="Scale your business with CipherERP" />
          <source srcSet={img6} type="image/png" />
          <source srcSet={img6} type="image/jpeg" />
        </picture>
      </LazyLoad> */}
      <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img6}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img6}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img6}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img6}?w=400&h=250&fit=crop&fm=png 400w,
               ${img6}?w=800&h=500&fit=crop&fm=png 800w,
               ${img6}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img6}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img6}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img6}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img6}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Scale your business with CipherERP"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      <h3>Scalable ERP for Business Growth and Security in India</h3>
      <p>Leverage a scalable ERP solution with robust encryption for secure data handling. Utilize cloud technology for flexible resources, seamless updates, and efficient business growth in India.</p>
    </div>
  </div>
</div>



<div className="container-fluid">
  <h2 className="mb-4 title text-center">Why Choose ERP Software for Your Business?</h2>
  <div className="row text-justify mx-5">
    <div className="col-lg-3 col-md-6 carde">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img7} className='text-start' loading="lazy" alt="Power of One ERP Solution" />
            <source srcSet={img7} type="image/png" />
            <source srcSet={img7} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img7}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img7}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img7}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img7}?w=400&h=250&fit=crop&fm=png 400w,
               ${img7}?w=800&h=500&fit=crop&fm=png 800w,
               ${img7}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img7}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img7}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img7}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img7}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="Power of One ERP Solution"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>Power of One ERP System</h3>
        <p>Building a custom ERP system with a single codebase streamlines business operations, offering scalability, efficiency, and reduced complexity.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img8} className='text-start' loading="lazy" alt="Cloud ERP Benefits" />
            <source srcSet={img8} type="image/png" />
            <source srcSet={img8} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Faster Loading */}
    <source 
      srcSet={`${img8}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img8}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img8}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img8}?w=400&h=250&fit=crop&fm=png 400w,
               ${img8}?w=800&h=500&fit=crop&fm=png 800w,
               ${img8}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img8}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img8}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img8}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img8}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="Cloud ERP Benefits"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>Cloud ERP Benefits for Businesses</h3>
        <p>Cloud ERP offers zero capital expenditure (CapEx) and a flexible pay-for-use subscription model, allowing businesses to scale efficiently.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img9} className='text-start' loading="lazy" alt="ERP Mobility Features" />
            <source srcSet={img9} type="image/png" />
            <source srcSet={img9} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img9}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img9}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img9}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img9}?w=400&h=250&fit=crop&fm=png 400w,
               ${img9}?w=800&h=500&fit=crop&fm=png 800w,
               ${img9}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img9}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img9}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img9}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img9}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="ERP Mobility Features - Enhance your business flexibility"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>Mobility in ERP Systems</h3>
        <p>Real-time data and mobility features in ERP software allow businesses to stay competitive, streamline operations, and improve decision-making.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img10} className='text-start' loading="lazy" alt="ERP System Flexibility" />
            <source srcSet={img10} type="image/png" />
            <source srcSet={img10} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img10}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img10}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img10}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img10}?w=400&h=250&fit=crop&fm=png 400w,
               ${img10}?w=800&h=500&fit=crop&fm=png 800w,
               ${img10}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img10}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img10}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img10}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img10}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="ERP System Flexibility - Adapt to Business Needs"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>Flexibility in ERP Solutions</h3>
        <p>ERP systems offer flexibility, enhancing customer experience (CX) and helping businesses adapt to changing needs and market demands.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img11} className='text-start' loading="lazy" alt="ERP Integration Capabilities" />
            <source srcSet={img11} type="image/png" />
            <source srcSet={img11} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img11}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img11}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img11}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img11}?w=400&h=250&fit=crop&fm=png 400w,
               ${img11}?w=800&h=500&fit=crop&fm=png 800w,
               ${img11}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img11}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img11}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img11}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img11}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="ERP Integration Capabilities - Enhance Business Efficiency"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>Seamless ERP Integration</h3>
        <p>Integrate all ERP modules effortlessly with a robust enterprise services platform, ensuring business efficiency across all departments.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img12} className='text-start' loading="lazy" alt="User Interface in ERP Systems" />
            <source srcSet={img12} type="image/png" />
            <source srcSet={img12} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${img12}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img12}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img12}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img12}?w=400&h=250&fit=crop&fm=png 400w,
               ${img12}?w=800&h=500&fit=crop&fm=png 800w,
               ${img12}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img12}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img12}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img12}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img12}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="User Interface in ERP Systems - Intuitive and User-Friendly Design"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>User-Friendly ERP Interface</h3>
        <p>As businesses shift towards more intuitive designs, ERP systems focus on zero UI to enhance usability and customer satisfaction.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img13} className='text-start' loading="lazy" alt="In-Memory ERP Solutions" />
            <source srcSet={img13} type="image/png" />
            <source srcSet={img13} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Optimized Performance */}
    <source 
      srcSet={`${img13}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img13}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img13}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img13}?w=400&h=250&fit=crop&fm=png 400w,
               ${img13}?w=800&h=500&fit=crop&fm=png 800w,
               ${img13}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img13}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img13}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img13}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img13}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="In-Memory ERP Solutions - High Performance and Speed"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>In-Memory ERP for Speed</h3>
        <p>ERP solutions that use in-memory computing optimize processes, streamline operations, and drive business growth by minimizing costs.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img14} className='text-start' loading="lazy" alt="Context-Aware ERP Features" />
            <source srcSet={img14} type="image/png" />
            <source srcSet={img14} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Optimized Performance */}
    <source 
      srcSet={`${img14}?w=400&h=250&fit=crop&fm=webp 400w,
               ${img14}?w=800&h=500&fit=crop&fm=webp 800w,
               ${img14}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img14}?w=400&h=250&fit=crop&fm=png 400w,
               ${img14}?w=800&h=500&fit=crop&fm=png 800w,
               ${img14}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img14}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${img14}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${img14}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img14}?w=800&h=500&fit=crop`} 
      className="img-responsive text-start lazy-img" 
      loading="lazy"  
      alt="Context-Aware ERP Features - Intelligent Business Solutions"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

        <h3>Context-Aware ERP Applications</h3>
        <p>Context-aware ERP systems deliver tailored user experiences by providing relevant information based on user roles and security levels.</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 carde mb-5">
      <div className="card-body">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={img15} className='text-start' loading="lazy" alt="Scalable ERP Solutions" height={100} width={150} />
            <source srcSet={img15} type="image/png" />
            <source srcSet={img15} type="image/jpeg" />
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Optimized Performance */}
    <source 
      srcSet={`${img15}?w=150&h=100&fit=crop&fm=webp 150w,
               ${img15}?w=300&h=200&fit=crop&fm=webp 300w`}
      sizes="(max-width: 600px) 150px, 300px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${img15}?w=150&h=100&fit=crop&fm=png 150w,
               ${img15}?w=300&h=200&fit=crop&fm=png 300w`}
      sizes="(max-width: 600px) 150px, 300px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${img15}?w=150&h=100&fit=crop&fm=jpeg 150w,
               ${img15}?w=300&h=200&fit=crop&fm=jpeg 300w`}
      sizes="(max-width: 600px) 150px, 300px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${img15}?w=150&h=100&fit=crop`} 
      className="img-responsiv text-start lazy-img" 
      loading="lazy"  
      alt="Scalable ERP Solutions - Adaptable Business Growth"  
      width={150} 
      height={100}
    />
  </picture>
</LazyLoad>

        <h3>Scalable ERP for Growth</h3>
        <p>Scalability is crucial in ERP software as it enables businesses to grow and evolve seamlessly, ensuring future-proof technology adoption.</p>
      </div>
    </div>
  </div>
</div>

  {/* <hr className='my-4'/> */}
  <figure>
    <div className='fixed-wrap'>
    {/* <LazyLoad height={200} offset={100}>
           <picture>
           
           <video id="fixed" autoPlay={true}  muted loop >
          <source src={video} type="video/mp4"  loading="lazy" />
        </video>
           </picture>
           </LazyLoad> */}
 <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <video 
      id="fixed" 
      autoPlay 
      muted 
      loop 
      playsInline 
      className="responsive-video"
      loading="lazy" // Ensure the video is lazily loaded when it's in view
    >
      <source src={video} type="video/mp4" />
      आपका ब्राउज़र इस वीडियो को सपोर्ट नहीं करता।
    </video>
  </picture>
</LazyLoad>



      </div>
  </figure>


  <div className='container-fluid '>
  <div className="text-center">
    <h2 className='titles '>Core Features of ERP Software</h2>
    <div className="row text-justify home-section2">
      
      <div className="col-md-3 pb-5">
        <h3 className='text-center'>Order Management & Returns</h3>
        <p className='text-justify'>Efficiently optimizing order fulfillment, reserving products, and managing returns is key to reducing costs and improving operational efficiency while boosting customer satisfaction.</p>
      </div>

      <div className="col-md-3">
        <h3 className='text-center'>Monitor Key Business Reports</h3>
        <p className='text-justify'>Conducting in-depth analysis of stock levels, sales, profits, WIP (Work in Progress), financials, and accounts receivable/payable provides valuable insights for better decision-making and performance tracking.</p>
      </div>

      <div className="col-md-3 pb-1">
        <h3 className='text-center'>Manage Production Workflows</h3>
        <p className='text-justify pb-5'>Optimizing your Bill of Materials (BOM) and efficiently managing Work-in-Progress (WIP) inventory are vital for manufacturers and assembly-based businesses.</p>
      </div>

      <div className="col-md-3">
        <h3 className='text-center'>Customer Relationship Management (CRM)</h3>
        <p className='text-justify'>Building strong relationships with customers by understanding their preferences and purchasing habits leads to enhanced customer loyalty and increased sales opportunities.</p>
      </div>

      <div className="col-md-3 pb-3">
        <h3 className='text-center'>Streamlined Inventory Management</h3>
        <p>Grouping products into categories helps simplify inventory management, allowing businesses to focus on smaller subsets of inventory and improve tracking and organization.</p>
      </div>

      <div className="col-md-3 ">
        <h3 className='text-center'>Automate Business Workflows</h3>
        <p className='text-justify pb-1'>Leveraging automation technology reduces manual and repetitive tasks, increasing productivity and allowing your team to focus on higher-value activities and strategic decisions.</p>
      </div>

      <div className="col-md-3 ">
        <h3 className='text-center'>Role-based Access Control</h3>
        <p className='text-justify pb-5'>Assigning specific roles, monitoring user actions, and managing access approvals are essential for improving team management, transparency, and accountability in workflows.</p>
      </div>

      <div className="col-md-3">
        <h3 className='text-center'>Real-time Stock Management</h3>
        <p className='text-justify pb-3'>Achieve optimal stock levels with real-time tracking, efficient inventory management, and effective reuse strategies, ensuring you meet customer demand while maximizing efficiency.</p>
      </div>

      <div className="col-md-3 mb-5">
        <h3 className='text-center'>Customizable ERP Solution</h3>
        <p className='text-justify pb-3'>Tailor your ERP system by adding custom fields to product cards, designing personalized print templates, and creating unique labels to better suit your business's specific needs and improve branding.</p>
      </div>

    </div>
  </div>
</div>



<div className='section mb-5 pb-5'>
  <div className="row text-justify text-center">
  
    <div className="col-sm-6 col-md-6 col-xl-6">
      <h2 className='text-white'>End-to-End ERP Integrations for Seamless Business Management</h2>
      <p className='text-white'>Integrating popular third-party software platforms like Tally, Busy, Salesforce, Shopify, QuickBooks, and Zoho with your existing enterprise systems can enhance efficiency, improve data accuracy, and streamline decision-making.</p>
    </div>

  
    <div className="col-sm-6 col-md-6 col-xl-6 sectonScrol">
      <div className="scrl">
        <div className="scro">
       
          <LazyLoad height={200} offset={100}>
            <picture>
              <img src={Scrol} className='img-responsive' loading="lazy" alt="Tally integration for business" />
              <source srcSet={Scrol} type="image/png" />
              <source srcSet={Scrol} type="image/jpeg" />
            </picture>
          </LazyLoad>
        {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${Scrol}.webp?w=400&fit=crop 400w, 
               ${Scrol}.webp?w=800&fit=crop 800w, 
               ${Scrol}.webp?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/webp" 
    />

    <source 
      srcSet={`${Scrol}.png?w=400&fit=crop 400w, 
               ${Scrol}.png?w=800&fit=crop 800w, 
               ${Scrol}.png?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/png" 
    />
    
    <source 
      srcSet={`${Scrol}.jpg?w=400&fit=crop 400w, 
               ${Scrol}.jpg?w=800&fit=crop 800w, 
               ${Scrol}.jpg?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/jpeg" 
    />

    <img 
      src={`${Scrol}?w=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy" 
      alt="Tally integration for business"
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad> */}



          <LazyLoad height={200} offset={100}>
            <picture>
              <img src={Scrol1} className='img-responsive' loading="lazy" alt="Salesforce ERP integration" />
              <source srcSet={Scrol1} type="image/png" />
              <source srcSet={Scrol1} type="image/jpeg" />
            </picture>
          </LazyLoad>
     {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${Scrol1}.webp?w=400&fit=crop 400w, 
               ${Scrol1}.webp?w=800&fit=crop 800w, 
               ${Scrol1}.webp?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/webp" 
    />

    <source 
      srcSet={`${Scrol1}.png?w=400&fit=crop 400w, 
               ${Scrol1}.png?w=800&fit=crop 800w, 
               ${Scrol1}.png?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/png" 
    />
    
    <source 
      srcSet={`${Scrol1}.jpg?w=400&fit=crop 400w, 
               ${Scrol1}.jpg?w=800&fit=crop 800w, 
               ${Scrol1}.jpg?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/jpeg" 
    />

    <img 
      src={`${Scrol1}?w=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy" 
      alt="Salesforce ERP integration"
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad> */}


          <LazyLoad height={200} offset={100}>
            <picture>
              <img src={Scrol2} className='img-responsive' loading="lazy" alt="Shopify ERP system integration" />
              <source srcSet={Scrol2} type="image/png" />
              <source srcSet={Scrol2} type="image/jpeg" />
            </picture>
          </LazyLoad>
{/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${Scrol2}.webp?w=400&fit=crop 400w, 
               ${Scrol2}.webp?w=800&fit=crop 800w, 
               ${Scrol2}.webp?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/webp" 
    />

    <source 
      srcSet={`${Scrol2}.png?w=400&fit=crop 400w, 
               ${Scrol2}.png?w=800&fit=crop 800w, 
               ${Scrol2}.png?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/png" 
    />
    
    <source 
      srcSet={`${Scrol2}.jpg?w=400&fit=crop 400w, 
               ${Scrol2}.jpg?w=800&fit=crop 800w, 
               ${Scrol2}.jpg?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/jpeg" 
    />

    <img 
      src={`${Scrol2}?w=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy" 
      alt="Shopify ERP system integration"
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad> */}


          <LazyLoad height={200} offset={100}>
            <picture>
              <img src={Scrol3} className='img-responsive' loading="lazy" alt="QuickBooks and ERP integration" />
              <source srcSet={Scrol3} type="image/png" />
              <source srcSet={Scrol3} type="image/jpeg" />
            </picture>
          </LazyLoad>
{/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${Scrol3}.webp?w=400&fit=crop 400w, 
               ${Scrol3}.webp?w=800&fit=crop 800w, 
               ${Scrol3}.webp?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/webp" 
    />

    <source 
      srcSet={`${Scrol3}.png?w=400&fit=crop 400w, 
               ${Scrol3}.png?w=800&fit=crop 800w, 
               ${Scrol3}.png?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/png" 
    />
    <source 
      srcSet={`${Scrol3}.jpg?w=400&fit=crop 400w, 
               ${Scrol3}.jpg?w=800&fit=crop 800w, 
               ${Scrol3}.jpg?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/jpeg" 
    />

    <img 
      src={`${Scrol3}?w=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy" 
      alt="QuickBooks and ERP integration" 
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad> */}


          <LazyLoad height={200} offset={100}>
            <picture>
              <img src={Scrol4} className='img-responsive' loading="lazy" alt="Zoho ERP integration" />
              <source srcSet={Scrol4} type="image/png" />
              <source srcSet={Scrol4} type="image/jpeg" />
            </picture>
          </LazyLoad>
{/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${Scrol4}.webp?w=400&fit=crop 400w, 
               ${Scrol4}.webp?w=800&fit=crop 800w, 
               ${Scrol4}.webp?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/webp" 
    />

    <source 
      srcSet={`${Scrol4}.png?w=400&fit=crop 400w, 
               ${Scrol4}.png?w=800&fit=crop 800w, 
               ${Scrol4}.png?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/png" 
    />

    <source 
      srcSet={`${Scrol4}.jpg?w=400&fit=crop 400w, 
               ${Scrol4}.jpg?w=800&fit=crop 800w, 
               ${Scrol4}.jpg?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/jpeg" 
    />

    <img 
      src={`${Scrol4}?w=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy" 
      alt="Zoho ERP integration - Streamline your business operations" 
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad> */}


          <LazyLoad height={200} offset={100}>
            <picture>
              <img src={Scrol5} className='img-responsive' loading="lazy" alt="ERP system integration for business growth" />
              <source srcSet={Scrol5} type="image/png" />
              <source srcSet={Scrol5} type="image/jpeg" />
            </picture>
          </LazyLoad>
          
    {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>

    <source 
      srcSet={`${Scrol5}.webp?w=400&fit=crop 400w, 
               ${Scrol5}.webp?w=800&fit=crop 800w, 
               ${Scrol5}.webp?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/webp" 
    />

    <source 
      srcSet={`${Scrol5}.png?w=400&fit=crop 400w, 
               ${Scrol5}.png?w=800&fit=crop 800w, 
               ${Scrol5}.png?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/png" 
    />

   
    <source 
      srcSet={`${Scrol5}.jpg?w=400&fit=crop 400w, 
               ${Scrol5}.jpg?w=800&fit=crop 800w, 
               ${Scrol5}.jpg?w=1200&fit=crop 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
      type="image/jpeg" 
    />

   
    <img 
      src={`${Scrol5}?w=600&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy" 
      alt="ERP system integration for business growth - Enhance efficiency & scalability" 
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad> */}


        </div>
      </div>
    </div>
  </div>
</div>


<div className='container-fluid'>
  <div className='container'>
   
    <h2 className='heading text-center'>Top Benefits of ERP Systems for Businesses</h2>
    <p className='para text-justify'>
      Businesses adopt Enterprise Resource Planning (ERP) systems for various reasons, all aiming at improving overall efficiency, scalability, and decision-making. While specific benefits vary depending on an organization's size, industry, and goals, several key advantages are commonly realized through ERP implementation.
    </p>
  </div>
</div>

<div className='container-fluid mb-5 text-center'>
  <div className='container homesection'>
    <div className="row text-justify homesectiontext my-5 py-5">
     
      <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
        <h3 className='text-center'>Boosts Accuracy and Productivity with ERP</h3>
        <p className='text-justify'>
          Integrating and automating business processes through ERP systems helps eliminate redundancies, improve accuracy, and enhance productivity. By streamlining operations, businesses can achieve significant efficiency gains, reducing manual tasks and minimizing the risk of errors.
        </p>
      </div>
      <div className="col-sm-6 col-md-6 col-xl-6 text-center px-5 textcontent-img-right">
    
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={Banifit} className='img-responsive mb-5 mt-5' loading="lazy" alt="ERP productivity improvement" height="400" width="500"/>
            <source srcSet={Banifit} type="image/png"/>
            <source srcSet={Banifit} type="image/jpeg"/>
          </picture>
        </LazyLoad> */}
        {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${Banifit}.webp?w=400&fit=crop&fm=webp 400w,
               ${Banifit}.webp?w=800&fit=crop&fm=webp 800w,
               ${Banifit}.webp?w=1200&fit=crop&fm=webp 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp" 
    />

    <source 
      srcSet={`${Banifit}.png?w=400&fit=crop&fm=png 400w,
               ${Banifit}.png?w=800&fit=crop&fm=png 800w,
               ${Banifit}.png?w=1200&fit=crop&fm=png 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png" 
    />
    
    <source 
      srcSet={`${Banifit}.jpg?w=400&fit=crop&fm=jpeg 400w,
               ${Banifit}.jpg?w=800&fit=crop&fm=jpeg 800w,
               ${Banifit}.jpg?w=1200&fit=crop&fm=jpeg 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg" 
    />
    
    <img 
      src={`${Banifit}?w=400&fit=crop`} 
      className="img-responsive lazy-img mb-5 mt-5" 
      loading="lazy" 
      alt="ERP Productivity Improvement - Boost Efficiency & Performance" 
      width={500} 
      height={400}
    />
  </picture>
</LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${Banifit}?w=300&h=300&fit=crop&fm=webp 300w,
        ${Banifit}?w=600&h=600&fit=crop&fm=webp 600w
      `}
      sizes="(max-width: 400px) 300px, 600px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${Banifit}?w=300&h=300&fit=crop&fm=png 300w,
        ${Banifit}?w=600&h=600&fit=crop&fm=png 600w
      `}
      sizes="(max-width: 400px) 300px, 600px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${Banifit}?w=300&h=300&fit=crop&fm=jpeg 300w,
        ${Banifit}?w=600&h=600&fit=crop&fm=jpeg 600w
      `}
      sizes="(max-width: 400px) 300px, 600px"
      type="image/jpeg"
    />

    {/* Default image for unsupported browsers */}
    <img 
      src={`${Banifit}?w=600&h=600&fit=crop`} 
      className="responsive-img mx-5 lazy-img" 
      loading="lazy"  
      alt="High-quality school environment"  
      width={300} 
      height={300}
    />
  </picture>
</LazyLoad>
      </div>
    </div>

    <div className="row text-justify my-5 text-center mt-5">
      <div className="col-sm-6 col-md-6 col-xl-6 text-center textcontent-img-left">
      
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={Banifit1} className='img-responsive mt-5' loading="lazy" alt="ERP real-time reporting benefits" height="300" width="500"/>
            <source srcSet={Banifit1} type="image/png"/>
            <source srcSet={Banifit1} type="image/jpeg"/>
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Maximum Optimization */}
    <source 
      srcSet={`${Banifit1}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Banifit1}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Banifit1}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Banifit1}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Banifit1}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Banifit1}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Banifit1}?w=400&h=250&fit=crop&fm=png 400w,
               ${Banifit1}?w=800&h=500&fit=crop&fm=png 800w,
               ${Banifit1}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Banifit1}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Banifit1}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Banifit1}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Banifit1}?w=800&h=500&fit=crop`} 
      className="img-responsive mt-5 lazy-img" 
      loading="lazy"  
      alt="ERP Real-Time Reporting Benefits - Enhance Data Insights & Business Decisions"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>

      </div>
      <div className="col-sm-6 col-md-6 col-xl-6 textcontent mt-5">
        <h3 className='text-center'>Enhanced Reporting with ERP</h3>
        <p className='text-justify'>
          Many businesses benefit from enhanced real-time data reporting provided by ERP systems. With accurate, up-to-date information consolidated in one platform, companies can make more informed decisions at all levels of the organization.
        </p>
      </div>
    </div>

    <div className="row text-justify my-5 text-center">
      <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
        <h3>Increased Efficiency with ERP Automation</h3>
        <p className='text-justify'>
          ERP systems enable businesses to quickly access critical information related to clients, vendors, and business partners, leading to a range of benefits. With real-time data at their fingertips, companies can respond to customer inquiries and address vendor needs more promptly, improving both customer and employee satisfaction.
        </p>
      </div>
      <div className="col-sm-6 col-md-6 col-xl-6 text-center textcontent-img-right">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={Banifit2} className='img-responsive mt-5' loading="lazy" alt="ERP system efficiency gains" height="300" width="500"/>
            <source srcSet={Banifit2} type="image/png"/>
            <source srcSet={Banifit2} type="image/jpeg"/>
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Maximum Optimization */}
    <source 
      srcSet={`${Banifit2}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Banifit2}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Banifit2}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Banifit2}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Banifit2}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Banifit2}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Banifit2}?w=400&h=250&fit=crop&fm=png 400w,
               ${Banifit2}?w=800&h=500&fit=crop&fm=png 800w,
               ${Banifit2}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Banifit2}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Banifit2}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Banifit2}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Banifit2}?w=800&h=500&fit=crop`} 
      className="img-responsive mt-5 lazy-img" 
      loading="lazy"  
      alt="ERP System Efficiency Gains - Improve Performance and Reduce Costs"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>

      </div>
    </div>

    <div className="row text-justify my-5 text-center">
      <div className="col-sm-6 col-md-6 col-xl-6 text-center textcontent-img-left">
        {/* <LazyLoad height={200} offset={100}>
          <picture>
            <img src={Banifit3} className='img-responsive mt-5' loading="lazy" alt="ERP system enhances collaboration" height="300" width="500"/>
            <source srcSet={Banifit3} type="image/png"/>
            <source srcSet={Banifit3} type="image/jpeg"/>
          </picture>
        </LazyLoad> */}
        <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Banifit3}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Banifit3}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Banifit3}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Banifit3}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Banifit3}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Banifit3}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Banifit3}?w=400&h=250&fit=crop&fm=png 400w,
               ${Banifit3}?w=800&h=500&fit=crop&fm=png 800w,
               ${Banifit3}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Banifit3}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Banifit3}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Banifit3}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Banifit3}?w=800&h=500&fit=crop`} 
      className="img-responsive mt-5 lazy-img" 
      loading="lazy"  
      alt="ERP System Enhances Collaboration - Boost Team Efficiency and Communication"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>

      </div>
      <div className="col-sm-6 col-md-6 col-xl-6 textcontent">
        <h3>Boosts Collaboration Across Teams with ERP</h3>
        <p className='text-justify'>
          With the integration provided by ERP systems, departments can collaborate more effectively and share knowledge seamlessly. This newfound synergy across functions leads to a more cohesive workforce, which boosts productivity and employee satisfaction.
        </p>
      </div>
    </div>
  </div>
</div>



<div className='container'>
 
  <h2 className='feture text-center'>Key Features of ERP Solutions</h2>
  
  <div className='row'>
    <div className='col-sm-6 col-md-6 col-xl-6'>
      <ul>
        <li>Financial Management</li>
        <li>Supply Chain Management (SCM)</li>
        <li>Human Resources (HR) Management</li>
        <li>Customer Relationship Management (CRM)</li>
        <li>Manufacturing and Production Management</li>
        <li>Project Management</li>
        <li>Business Intelligence (BI) and Reporting</li>
        <li>Inventory and Warehouse Management</li>
        <li>Data Security and Access Control</li>
        <li>Integration Capabilities</li>
        <li>Mobile Accessibility</li>
        <li>Compliance and Regulatory Management</li>
        <li>Document Management</li>
        <li>Vendor and Supplier Management</li>
      </ul>
    </div>
    
 
    <div className='col-sm-6 col-md-6 col-xl-6'>
    
      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img src={Images} className='img-responsive mt-5 px-5' loading="lazy" alt="ERP solution features overview" height="300" width="500"/>
          <source srcSet={Images} type="image/png"/>
          <source srcSet={Images} type="image/jpeg"/>
        </picture>
      </LazyLoad> */}
      <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Images}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Images}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Images}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Images}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Images}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Images}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Images}?w=400&h=250&fit=crop&fm=png 400w,
               ${Images}?w=800&h=500&fit=crop&fm=png 800w,
               ${Images}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Images}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Images}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Images}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Images}?w=800&h=500&fit=crop`} 
      className="img-responsive mt-5 px-5 lazy-img" 
      loading="lazy"  
      alt="Comprehensive ERP Solution Features - Streamline Your Business Operations"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>

    </div>
  </div>
</div>


<div className='container-fluid'>
  <div className='fotterimg text-center'>
<h3 className='text-center'>Custom ERP Development and Integration Services</h3>
<p  className='text-center'>Custom-tailored ERP solutions with robust integration capabilities are key<br></br> to helping businesses grow and unlock their full potential.</p>
<a className="nav-sign" href="/SignUp">

<button className="btn btn-outline-primary text-white bg-primary" type="submit">Get Started</button>
  </a>
  </div>
</div>


<ChatbotComponent />
<ScrollToTopButton/>
     </>
  )
}

export default Page1;
