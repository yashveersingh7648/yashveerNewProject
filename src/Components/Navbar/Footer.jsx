import React from 'react';
import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

const Footer = () => {

  return (
    <>
   <Helmet>
  {/* SEO-Optimized Title */}
  <title>Contact CipherERP | Business Solutions & ERP Support</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Need assistance with ERP solutions? Contact CipherERP for expert support, business management solutions, and technical guidance. Get expert assistance today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Contact CipherERP, ERP support, business management solutions, customer service, technical support, enterprise software consultation, ERP solutions, CipherERP customer care" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


<ScrollToTopButton/>

    <div className='footer'>
      <div className='row d-flex'>
        {/* <div className='footerimg'>
          <Link className="navbar-brand" to="/Home">
            <img src={scrol} className='images' alt='logo img' style={{ height: "50px", width: "60px" }} />
          </Link>
        </div> */}
        <div className='col-lg-2 pt-5'>
          <ul>
            
        
              <Link className="nav-link" to="/" onClick={() => scrollToSection('head')} >Home </Link>
       
           
              <Link className="nav-link" to="/">Solution</Link>
        
        
              <Link className="nav-link" to="/">Industries</Link>
            
          
              <Link className="nav-link" to="/Pricing" onClick={() => scrollToSection('head')}>Pricing </Link>
         
        
              <Link className="nav-link" to="/AboutUs" onClick={() => scrollToSection('head')}>About Us </Link>
      
         
              <Link className="nav-link" to="/ContactUs" onClick={() => scrollToSection('head')}>Contact Us </Link>
          
          </ul>
        </div>
        <div className=' col-xl-2 pt-5'>
          <ul>
           
              <Link className="nav-link" to="/SchooleERP" onClick={() => scrollToSection('header2')}>School ERP</Link>
           
          
              <Link className="nav-link" to="/ManufacturingERP" onClick={() => scrollToSection('head')}>Manufacturing ERP</Link>
          
          
              <Link className="nav-link" to="/Retail" onClick={() => scrollToSection('head')}>Retail ERP</Link>
           
            
              <Link className="nav-link" to="/FinanceManagement" onClick={() => scrollToSection('head')}>Finance ERP</Link>
           
           
              <Link className="nav-link" to="/SalesERP" onClick={() => scrollToSection('head')}>Sales/Marketing ERP</Link>
          
          </ul>
        </div>
        <div className=' col-xl-3 pt-5'>
          <ul>
         
              <Link className="nav-link" to="/BillingManagment" onClick={() => scrollToSection('head')}>Billing Management</Link>
          
      
              <Link className="nav-link" to="/GasAgency" onClick={() => scrollToSection('head')}>Gas Agency</Link>
          
              <Link className="nav-link" to="/ColdDrinkAgency" onClick={() => scrollToSection('head')}>Cold Drink Agency</Link>
        
           
              <Link className="nav-link" to="/DairyManagementFeatures" onClick={() => scrollToSection('head')}>Dairy Management</Link>
           
              <Link className="nav-link" to="/AutoFinanceFeatures" onClick={() => scrollToSection('head')}>Auto Finance</Link>
            
         
              <Link className="nav-link" to="/PartnerProgramPage" onClick={() => scrollToSection('head')}>Partner</Link>
         
          </ul>
        </div>
        <div className='footergif d-flex col-sm-3'>
        <a 
  className="nav-link" 
  href="https://www.linkedin.com/company/106590909/admin/dashboard/" 
  target="_blank" 
  rel=" noopener noreferrer"
>
<LazyLoad height={200} offset={100}>
   <picture>
   
   <img   src={'/Images/linkdin.webp'}  loading="lazy"  alt="logo img"  height={70} width={70}/> 
   <source srcSet={'/Images/linkdin.webp'} type="image/png" />
   <source srcSet={'/Images/linkdin.webp'} type="image/gif" />
   </picture>
   </LazyLoad>
      {/* <LazyLoad height={200} offset={100}>  
          
            <img src={'/Images/linkdin.webp'} alt='logo img' loading="lazy" height={70} width={70}/>
               </LazyLoad> */}
            
          </a>
          <a 
  className="nav-link" 
  href="https://www.youtube.com/@CipherShieldTechnologies" 
  target="_blank" 
  rel=" noopener noreferrer"
>
          <LazyLoad height={200} offset={100}>
   <picture>
   
   <img   src={'/Images/_youtube.webp'}  loading="lazy"  alt="logo img"  height={70} width={70}/> 
   <source srcSet={'/Images/_youtube.webp'} type="image/png" />
   <source srcSet={'/Images/_youtube.webp'} type="image/gif" />
   </picture>
   </LazyLoad>
          {/* <LazyLoad height={200} offset={100}>  

  <img src={'/Images/_youtube.webp'} alt='logo img' loading="lazy" height={70} width={70} />
  </LazyLoad> */}

</a>
<a 
  className="nav-link" 
  href="https://www.facebook.com/profile/61566338267837" 
  target="_blank" 
  rel=" noopener noreferrer"
>
          <LazyLoad height={200} offset={100}>
   <picture>
   
   <img   src={'/Images/facebook.webp'}  loading="lazy"  alt="logo img"  height={70} width={70}/> 
   <source srcSet={'/Images/facebook.webp'} type="image/png" />
   <source srcSet={'/Images/facebook.webp'} type="image/gif" />
   </picture>
   </LazyLoad>
          
          {/* <LazyLoad height={200} offset={100}>  

  <img src={'/Images/facebook.webp'} alt='logo img' loading="lazy" height={70} width={70} />
  </LazyLoad> */}

</a>
<a 
  className="nav-link" 
  href="https://www.instagram.com/cipher_0shield/" 
  target="_blank" 
  rel=" noopener noreferrer"
>
          <LazyLoad height={200} offset={100}>
   <picture>
   
   <img   src={'/Images/instag.webp'}  loading="lazy"  alt="logo img"  height={70} width={70}/> 
   <source srcSet={'/Images/instag.webp'} type="image/png" />
   <source srcSet={'/Images/instag.webp'} type="image/gif" />
   </picture>
   </LazyLoad>
          
          {/* <LazyLoad height={200} offset={100}>  

  <img src={'/Images/instag.webp'} alt='Instagram Logo' loading="lazy" height={70} width={70} />
  </LazyLoad> */}

</a>
        </div>
        
      </div>

      <div className="row Policy animate__animated animate__slideInUp d-flex" id="AcceptCokkies">
        <div className="col-lg-12 col-md-12 col-sm-12 tranceparant d-flex">
          <div className="col-lg-6 col-md-6 col-sm-6 lefttermpart d-flex">
            <ul typeof="none" className='d-flex'>
             
                <a className="nav-link" href="/Policy" onClick={() => scrollToSection('head')}>Privacy Policy|</a>
          
          
                <a className="nav-link" href="/ReturnPolicy" onClick={() => scrollToSection('head')}>Return Policy|</a>
           
              <li>Terms Of Use|</li>
              <li>Security|</li>
              <li>Policy|</li>
              <li>Infringement|</li>
            </ul>
          </div>

          <div className="col-sm-3 ModdilePart d-flex">
            <p>© 2024-2025 ciphererp.com</p>
          </div>

          <div className="col-xl-5 righttermpart d-flex">
            <p>Need help? Visit the 
              <Link className="nav-link" to="/ContactUs" onClick={() => scrollToSection('head')}>Help Center </Link>or 
            
              <Link className="nav-link" to="/ContactUs" onClick={() => scrollToSection('head')}>Contact Us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
<ChatbotComponent />

    </>
  );
};

export default Footer;
