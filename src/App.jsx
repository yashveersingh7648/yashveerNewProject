import './App.css';  
import './custom.css';
import { Helmet } from 'react-helmet';
import React, { Suspense, lazy, useEffect,  } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NotFound from './Components/NotFound'; 
import ImageUploader from './Components/ImageUploader';

import MainApp from "./MainApp";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CipherShield Technology",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "J.S. Arcade, Sec - 18",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "telephone": "+91 1204375355",
  "email": "support@ciphererp.com",
  "openingHours": "Mo-Su 09:00-18:00",
  "url": "https://www.ciphererp.com",
  "image": "https://www.ciphererp.com/Images/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/106590909/",
    "https://www.youtube.com/@CipherShieldTechnologies",
    "https://www.facebook.com/profile/61566338267837",
    "https://www.instagram.com/cipher_0shield/"
  ]
};

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://www.ciphererp.com/Images/logo.png",
  "name": "CipherShield Technology Logo",
  "description": "Logo of CipherShield Technology, a leading ERP solutions provider."
};

const Home = lazy(() => import('./Components/Home'));
const AboutUs = lazy(() => import('./Components/Navbar/AboutUs'));
const Footer = lazy(() => import('./Components/Navbar/Footer.jsx'));
const SalesERP = lazy(() => import('./Components/Navbar/SalesERP'));
const Retail = lazy(() => import('./Components/Navbar/Retail'));
const FinanceManagement = lazy(() => import('./Components/Navbar/FinanceManagement'));
const ManufacturingERP = lazy(() => import('./Components/Navbar/ManufacturingERP'));
const SchooleERP = lazy(() => import('./Components/SchooleERP'));
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const School = lazy(() => import('./Components/Navbar/School'));
const Manufacturing = lazy(() => import('./Components/Navbar/Manufacturing'));
const Retailer = lazy(() => import('./Components/Navbar/Retailer'));
const Finances = lazy(() => import('./Components/Navbar/Finances'));
const Sales = lazy(() => import('./Components/Navbar/Sales'));
const Price = lazy(() => import('./Components/Navbar/Pricing'));
const ContactUs = lazy(() => import('./Components/Navbar/ContactUs'));
const LogIn = lazy(() => import('./Components/Navbar/LogIn'));
const SignUp = lazy(() => import('./Components/Navbar/SignUp'));
const Policy = lazy(() => import('./Components/Navbar/Policy'));
const ReturnPolicy = lazy(() => import('./Components/Navbar/ReturnPolicy'));
const BuyForm = lazy(() => import('./Components/Navbar/BuyNow'));
const ViewsPage = lazy(() => import('./Components/Navbar/ViewsPage'));
const BillingManagment = lazy(() => import('./Components/Navbar/BillingManagment'));
const GasAgency = lazy(() => import('./Components/Navbar/GasAgency'));
const ColdDrinkAgency = lazy(() => import('./Components/Navbar/ColdDrinkAgency'));
const DairyManagementFeatures = lazy(() => import('./Components/Navbar/DairyManagementFeatures'));
const AutoFinanceFeatures = lazy(() => import('./Components/Navbar/AutoFinanceFeatures'));
const OurPartners = lazy(() => import('./Components/Navbar/OurPartners'));
const PartnerProgramPage = lazy(() => import('./Components/Navbar/PartnerProgramPage'));
const DeleveryPolocy = lazy(() => import('./Components/Navbar/DeleveryPolocy'));
const CloudinaryImage = lazy(() => import('./Components/CloudinaryImage'));
const ShareButtons = lazy(() => import('./Components/ShareButtons'));
const CareerPage = lazy(() => import('./Components/CareerPage'));

function App() {
  const location = useLocation();
  const canonicalUrl = `https://www.ciphererp.com${location.pathname.split('?')[0]}`;
  


 
  

  // SEO H1 & H2 को रिमूव करने का कोड
  if (process.env.NODE_ENV === 'development') {
    useEffect(() => {
      const seoH1 = document.getElementById("seo-h1");
      if (seoH1) {
        seoH1.remove();
      }
    }, []);
    useEffect(() => {
      const seoH2 = document.getElementById("seo-h2");
      if (seoH2) {
        seoH2.remove();
      }
    }, []);
  }
  


  useEffect(() => {
    // create a link element dynamically
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/App.css';
    // Initially load with media="print"
    link.media = 'print';
    // Once loaded, change media attribute to "all"
    link.onload = () => {
      link.media = 'all';
    };
    // Append the link to the head of the document
    document.head.appendChild(link);

    // Cleanup function to remove the link when component unmounts (optional)
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <>
      {/* SEO-Friendly Headings */}
      <h1 id="seo-h1">AI-Powered ERP Solutions for Business Growth</h1>
      <h2 id="seo-h2">Streamline Your Operations with Innovative Cipher ERP Technology</h2>
      
      {/* SEO Meta Tags and Structured Data */}
      <Helmet>
      <link rel="canonical" href={canonicalUrl} />
  {/* Existing meta tags */}
  <title> CipherERP - India's #1 ERP Billing Software for Retail, Schools & SMEs </title>
  <meta name="description" content="CipherERP - India's Leading ERP Software for Billing & Business Management. Simplify invoicing, inventory, and operations with a secure, scalable ERP solution for Retail, Schools, and SMEs." />
  <meta name="keywords" content="AI ERP Solutions, Business Management ERP, Cloud ERP, Billing Software, Manufacturing ERP, Retail ERP" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="AI ERP Solutions for Business in India | CipherShield" />
  <meta property="og:description" content="Boost your business with secure, cloud-based AI ERP solutions for billing, manufacturing, and retail in India. Get started with CipherShield today!" />
  <meta property="og:image" content="https://www.ciphererp.com/Images/logo.webp" />
  <meta property="og:url" content="https://www.ciphererp.com" />
  <meta property="og:type" content="website" />
  
  {/* Twitter Cards Meta Tags (optional) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ERP Software Solutions in India - CipherShield Technologies" />
  <meta name="twitter:description" content="Explore custom ERP software solutions for businesses in Delhi, Noida, and across India with CipherShield Technologies." />
  <meta name="twitter:image" content="https://www.ciphererp.com/Images/logo.webp" />
  
  {/* Other existing meta tags */}
  <meta name="robots" content="index, follow" />
  <script type="application/ld+json">
    {JSON.stringify(localBusinessData)}
  </script>
  <script type="application/ld+json">
          {JSON.stringify(imageObjectSchema)}
        </script>
  {/* Social media profile links */}
  <link rel="me" href="https://www.linkedin.com/company/106590909/" />
  <link rel="me" href="https://www.youtube.com/@CipherShieldTechnologies" />
  <link rel="me" href="https://www.facebook.com/profile/61566338267837" />
  <link rel="me" href="https://www.instagram.com/cipher_0shield/" />
  
  {/* Security Meta Tags */}
  
  {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://trusted.cdn.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com;" /> */}
  <meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; 
           script-src 'self' 'unsafe-inline' https://sdk.cashfree.com https://www.googletagmanager.com https://code.jquery.com https://cdn.jsdelivr.net; 
           style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; 
           font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com; 
           connect-src 'self' http://localhost:8000 https://api.cashfree.com; 
           frame-src 'self' https://sdk.cashfree.com https://sandbox.cashfree.com https://api.cashfree.com;"
/>

  <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
  {/* <meta httpEquiv="X-Frame-Options" content="DENY" /> */}
  <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
  <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
</Helmet>


    
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/pricing" element={<Price />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
            {/* <Route path="/BuyNow" element={<BuyNow />} /> */}
            <Route path="/BuyNow" element={<BuyForm />} />

            <Route path="/ViewsPage" element={<ViewsPage />} />
            <Route path="/BillingManagment" element={<BillingManagment />} />
            <Route path="/GasAgency" element={<GasAgency />} />
            <Route path="/ColdDrinkAgency" element={<ColdDrinkAgency />} />
            <Route path="/DairyManagementFeatures" element={<DairyManagementFeatures />} />
            <Route path="/AutoFinanceFeatures" element={<AutoFinanceFeatures />} />
            <Route path="/OurPartners" element={<OurPartners />} />
            <Route path="/SchooleERP" element={<SchooleERP />} />
            <Route path="/ManufacturingERP" element={<ManufacturingERP />} />
            <Route path="/FinanceManagement" element={<FinanceManagement />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/SalesERP" element={<SalesERP />} />
            <Route path="/Manufacturing" element={<Manufacturing />} />
            <Route path="/Retailer" element={<Retailer />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/school" element={<School />} />
            <Route path="/PartnerProgramPage" element={<PartnerProgramPage />} />
            <Route path="/ImageUploader" element={<ImageUploader />} />
            <Route path="/DeleveryPolocy" element={<DeleveryPolocy />} />
            <Route path="/CloudinaryImage" element={<CloudinaryImage />} />
            <Route path="/MainApp" element={<MainApp />} />
            <Route path="/ShareButtons" element={<ShareButtons />} />
            <Route path="/CareerPage" element={<CareerPage />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
          
          <Footer />
        </Suspense>
       
    </>
  );
}

export default App;
