
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTopButton from "../Navbar/ScrollToTopButton";
import LazyLoad from "react-lazyload";

const img1 = '/Images/logo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
  <Helmet>
  {/* SEO-Optimized Title */}
  <title>Effortless ERP Navigation | CipherERP Navbar for Seamless Access</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Navigate CipherERP seamlessly with our intuitive ERP navigation system. Get quick access to ERP solutions, services, and business management tools for enhanced efficiency." 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="CipherERP Navbar, ERP navigation, business management tools, seamless navigation, ERP solutions, business efficiency, ERP services, intuitive interface"
  />

  {/* Allow indexing for search engines */}
  <meta name="robots" content="index, follow" />
</Helmet>


<ScrollToTopButton/>

    <div>
      
    <nav className={`navbar navbar-expand-lg ${isScrolled ? "fixed-navbar" : "sticky-navbar"}`} id="head">

        <Link className="navbar-brand" to="/">
{/* <LazyLoad height={200} offset={100}>
 <picture>
 
 <img   src={img1} className="img-responsive images" loading="lazy"  alt="logo img"   /> 
 <source srcSet={img1} type="image/png" />
 <source srcSet={img1} type="image/jpeg" />
 </picture>
 </LazyLoad>  */}
       <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img1}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img1}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img1}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img1}?w=800&h=533&fit=crop`}
      className="img-responsive images"
      loading="lazy"
      alt="logo img"
    />
  </picture>
</LazyLoad>

          
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => scrollToSection('head')}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Solution
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item" to="/SchooleERP" onClick={() => scrollToSection('head')}>School ERP</Link>
                <Link className="dropdown-item" to="/ManufacturingERP" onClick={() => scrollToSection('head')}>Manufacturing ERP</Link>
                <Link className="dropdown-item" to="/Retail" onClick={() => scrollToSection('head')}>Retail ERP</Link>
                <Link className="dropdown-item" to="/FinanceManagement" onClick={() => scrollToSection('head')}>Finance ERP</Link>
                <Link className="dropdown-item" to="/SalesERP" onClick={() => scrollToSection('head')}>Sales/Marketing ERP</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Industries
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <Link className="dropdown-item" to="/School" onClick={() => scrollToSection('head')}>School/College</Link>
                <Link className="dropdown-item" to="/Manufacturing" onClick={() => scrollToSection('head')}>Manufacturing</Link>
                <Link className="dropdown-item" to="/Retailer" onClick={() => scrollToSection('head')}>Retail</Link>
                <Link className="dropdown-item" to="/Finances" onClick={() => scrollToSection('head')}>Finance</Link>
                <Link className="dropdown-item" to="/Sales" onClick={() => scrollToSection('head')}>Sales/Marketing</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pricing" onClick={() => scrollToSection('head')}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs" onClick={() => scrollToSection('head')}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurPartners" onClick={() => scrollToSection('head')}>Our Partners</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CareerPage" onClick={() => scrollToSection('head')}>Career</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs" onClick={() => scrollToSection('head')}>Contact Us</Link>
            </li>
          </ul>
          <div className='navbar-nav ms-auto my-auto btn-fixed'>
            <Link className="nav-link" to="/LogIn" onClick={() => scrollToSection('head')}>
              {/* <button className="btn btn-outline-primary text-white bg-primary" type="submit">Log In</button> */}
              <button
                    type="submit"
                    className="btn btn-outline-primary text-white bg-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal6"
                    data-bs-whatever="@mdo"
                  >
                   Log In
                  </button>
            </Link>
            <Link className="nav-link" to="/SignUp" onClick={() => scrollToSection('head')}>
              <button className="btn btn-outline-white my-2 mx-2 my-sm-0" type="submit">Get Started For Free</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
