import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";
import { Link as ScrollLink } from "react-scroll";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const price = '/Images/Pricing.webp';
const SubscriptionBasedPricing =  '/Images/SubscriptionBasedPricing.webp';
const price2 ='/Images/One-TimeLicensing.webp';
const price3 = '/Images/CustomDevelopment.webp';
const price4 = '/Images/FreeTrialFreemium.webp';
const Pricing = () => {
  const [activeContent, setActiveContent] = useState("Ezy");
  const handleContentChange = (content) => {
    setActiveContent(content);
  };
  return (
    <>
   <Helmet>
  {/* SEO-Optimized Title */}
  <title>Flexible ERP Pricing Plans | CipherERP - Affordable & Scalable</title>

  {/* Meta Description for SEO Ranking */}
  <meta 
    name="description" 
    content="Compare CipherERP's affordable and scalable ERP pricing plans. Choose the best ERP solution for your business with transparent costs and flexible options." 
  />

  {/* SEO-friendly Meta Keywords */}
  <meta 
    name="keywords" 
    content="ERP pricing, CipherERP pricing plans, affordable ERP solutions, business ERP software, flexible ERP plans, enterprise software pricing, ERP cost comparison"
  />
</Helmet>

<ScrollToTopButton/>

    <div className="container-fluid">
      <div className="price_banner text-center" id="head">
        <h1>Offering cost-effective solutions within budget limits</h1>
        <p>
          Get the best pricing for small and medium businesses. Try it <br />
          free &#45; no credit card required!
        </p>
        {/* <h2>1 Month Free Trial</h2> */}
      </div>

      <div className=" text-center py-5">
        {/* <ul>
    <ul className='d-flex'>
        <li><a href='#manifacture'>Invoice Generation</a> </li>
        <li><a href='#manifacture1'>Recurring Billing</a></li>
        <li><a href='#manifacture2'>Multi-Currency Support</a></li>
        <li><a href='#manifacture3'>Discounts & Taxes</a></li>

        <li><a href='#manifacture'>Payment Reminders</a> </li>
    </ul>
    </ul> */}

        <ul>
          <ul className="d-flex">
           
           
            <li>
              <a
                href="#manifacture2"
                className="tab_btn"
                onClick={() => handleContentChange("Ezy")}
              >
                Billing Managment
              </a>
              <sup> Offline</sup>
            </li>
            <li>
              <a
                href="#manifacture3"
                className="tab_btn"
                onClick={() => handleContentChange("Gas")}
              >
                Gas Agency
              </a>
              <sup> Offline</sup>
            </li>

            <li>
              <a
                href="#manifacture4"
                className="tab_btn"
                onClick={() => handleContentChange("Cold")}
              >
                Cold Drink Agency
              </a>
              <sup> Offline</sup>
            </li>
            {/* <li>
              <a
                href="#manifacture5"
                className="tab_btn"
                onClick={() => handleContentChange("Committee")}
              >
                Committee Managment
              </a>
              <sup> Offline</sup>
            </li> */}
         
            <li>
              <a
                href="#manifactur7"
                className="tab_btn"
                onClick={() => handleContentChange("Dairy")}
              >
                Dairy Managment
              </a>
              <sup> Offline</sup>
            </li>
            <li>
              <a
                href="#manifacture"
                className="tab_btn active"
                onClick={() => handleContentChange("School")}
              >
                School Managment
              </a>
              <sup> Online</sup>
            </li>
            <li>
              <a
                href="#manifacture1"
                className="tab_btn"
                onClick={() => handleContentChange("Sales")}
              >
                Sales Managment
              </a>
              <sup> Online</sup>
            </li>
            <li>
              <a
                href="#manifacture6"
                className="tab_btn"
                onClick={() => handleContentChange("Auto")}
              >
                Auto Finance
              </a>
              <sup> Online</sup>
            </li>
            

          </ul>
        </ul>
      </div>

   

  
      {activeContent === "Ezy" && (
        <div className="container text-center">
          <div className="pricerapper">
            <div className="logocolor2 text-center">
              <h2>Billing Management</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify ">
                  
                  <li>Sales Return</li>
                  <li>Purchase Return</li>
                  <li>Payment Register</li>
                  <li>Reciept Register</li>
                  <li>Purchase Register</li>
                  <li>Estimate Quotation</li>
                  <li>Stock Summary</li>
                  <li>Sales Register</li>
                  <li>GST Invoice</li>
                  <li>Party Ledger</li>
                  <li>Day Book</li>
                  <li>Purchase</li>
                  <li>Reciept</li>
                  <li>Payment</li>
                  <li>Desktop Based</li>

                </ul>
                <div className="ratblue">
                  <h4>
                   
                     <sup> Rs</sup> <sub>6,200</sub> +GST
                   
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 1
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
               
                {/* <Link to="/BuyNow" state={{ amount: 6200 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 
{/* <Link 
        to="/BuyNow" 
        state={{ amount: 6200, product: "Billing Management " }} 
        className="d-block text-center"
        onClick={() => scrollToSection('head')}>
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link> */}
      <Link 
    to="/BuyNow"
    state={{ amount: 6200, product: "Billing Management " }} 
>
    <button className="btn btn-outline-primary text-white bg-primary">
      Buy Now
    </button>
</Link>

    </div>
    
              </div>
              <div className="col-xl-3 text-center">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify ">
                  
                  <li>Sales Return</li>
                  <li>Purchase Return</li>
                  <li>Payment Register</li>
                  <li>Reciept Register</li>
                  <li>Purchase Register</li>
                  <li>Estimate Quotation</li>
                  <li>Stock Summary</li>
                  <li>Sales Register</li>
                  <li>GST Invoice</li>
                  <li>Party Ledger</li>
                  <li>Day Book</li>
                  <li>Purchase</li>
                  <li>Reciept</li>
                  <li>Payment</li>
                  <li>Desktop Based</li>

                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup>Rs </sup><sub>18,600</sub> +GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 18600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


{/* <Link 
        to="/BuyNow" 
        state={{ amount: 18600, product: "Billing Management"  }} 
        className="d-block text-center"
        onClick={() => scrollToSection('head')}>
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link> */}
      <Link 
    to="/BuyNow"
    state={{ amount: 18600, product: "Billing Management"  }} 
    className="d-block text-center"

>
    <button className="btn btn-outline-primary text-white bg-primary">
      Buy Now
    </button>
</Link>

                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
<ul className="text-justify ">
                  
                  <li>Production Planning and Scheduling</li>
                  <li>Inventory and Supply Chain Management</li>
                  <li>Quality Control and Compliance</li>
                  <li>Production Tracking and Monitoring</li>
                  <li>Accounting and Financial Management</li>
                  <li>Sales and Order Management</li>
                  <li>Human Resources and Labor Management</li>
                  {/* <li>Data Analytics and Reporting</li> */}
                  {/* <li>Integration and Automation</li> */}
                
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} 



{/* {activeContent === "Ezy" && (
  <div className="container text-center">
    

    
    <div className="blue-inner">
    <Link to="/BuyForm" state={{ amount: 6200 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link>

    </div>
    ...
    <div className="orange-inner">
    <Link to="/BuyForm" state={{ amount: 18600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link>
    </div>
  </div>
)} */}


      {activeContent === "Gas" && (
        <div className="container text-center">
          <div className="pricerapper">
            <div className="logocolor3 text-center">
              <h2>Gas Agency</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>Dispatch</li>
                  <li>Purchase</li>
                  <li>Empty Receibing</li>
                  <li>Cylinder Filled</li>
                  <li>Manufacturing</li>
                  <li>All Report</li>

                  <li>Floor Stock</li>
                  <li>Dispatch Report</li>
                  <li>Purchase Report</li>
                  <li>Total Stock</li>

                  <li>Defected Stock</li>
                  <li>Leakage Stock</li>
                  <li>Patywise Empty Stock</li>
                  <li>Patywise Cylinder Stock</li>
                  <li>Partywise Stock</li>
                  <li>Desktop Based</li>

                </ul>
                <div className="ratblue">
                  <h4>
                    
                     <sup> Rs </sup><sub>12,800</sub> +GST
                    
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 1
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
                {/* <Link to="/BuyForm" state={{ amount: 12800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 

<Link
        to="/BuyNow" 
        state={{ amount: 12800, product: "Gas Agency"  }} 
        className="d-block text-center"
        >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
   
                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>Dispatch</li>
                  <li>Purchase</li>
                  <li>Empty Receibing</li>
                  <li>Cylinder Filled</li>
                  <li>Manufacturing</li>
                  <li>All Report</li>

                  <li>Floor Stock</li>
                  <li>Dispatch Report</li>
                  <li>Purchase Report</li>
                  <li>Total Stock</li>

                  <li>Defected Stock</li>
                  <li>Leakage Stock</li>
                  <li>Patywise Empty Stock</li>
                  <li>Patywise Cylinder Stock</li>
                  <li>Partywise Stock</li>
                  <li>Desktop Based</li>

                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup><sub>25,600</sub> +GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 25600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 

{/* <a 
        href="/BuyNow" 
        state={{ amount: 25600, product: "Gas Agency"  }} 
        className="d-block text-center"
        onClick={() => scrollToSection('head')}>
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </a> */}
      <Link 
    to="/BuyNow"
    state={{ amount: 25600, product: "Gas Agency" }} 
>
    <button className="btn btn-outline-primary text-white bg-primary">
      Buy Now
    </button>
</Link>
  
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
  <ul className="text-justify">
                  <li>Customized Delivery Schedules</li>
                  <li>Smart Monitoring Systems</li>
                  <li>Eco-Friendly Solutions</li>
                  
                  <li>Customer Loyalty Programs</li>
                  <li>Safety Features</li>
                  <li>Mobile Apps</li>

                  <li>Bulk Discounts</li>
                  <li>24/7 Customer Support</li>
                  
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeContent === "Cold" && (
        <div className="container text-center">
          <div className="pricerapper">
            <div className="logocolor4 text-center">
              <h2>Cold Drink Agency</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>Dispatch</li>
                  <li>Purchase</li>
                  <li>Empty Receving</li>
                  <li>Bottle Filled</li>
                  <li>Manufacturing</li>
                  <li>Report</li>
                  <li>Debit Note</li>
                  <li>Credit Note</li>

                  <li>Defected Stock</li>
                  <li>Floor Stock</li>
                  <li>PartyWise stock</li>
                  <li>Party Bottle Stock</li>
                  <li>Company Bottle Stock</li>
                  <li>Dispatch Report</li>
                  <li>Purchase Report</li>
                  <li>Leakage Stock</li>
                  <li>Total Stock</li>
                  <li>Desktop Based</li>

                </ul>
                <div className="ratblue">
                  <h4>
                  
                      <sup>Rs</sup> <sub>12,800</sub> +GST
                    
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 1
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
               {/* <Link to="/BuyForm" state={{ amount: 12800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link
        to="/BuyNow" 
        state={{ amount: 12800, product: "Cold Drink Agency"  }} 
        className="d-block text-center"
        >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
     
                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>Dispatch</li>
                  <li>Purchase</li>
                  <li>Empty Receving</li>
                  <li>Bottle Filled</li>
                  <li>Manufacturing</li>
                  <li>Report</li>
                  <li>Debit Note</li>
                  <li>Credit Note</li>

                  <li>Defected Stock</li>
                  <li>Floor Stock</li>
                  <li>PartyWise stock</li>
                  <li>Party Bottle Stock</li>
                  <li>Company Bottle Stock</li>
                  <li>Dispatch Report</li>
                  <li>Purchase Report</li>
                  <li>Leakage Stock</li>
                  <li>Total Stock</li>
                  <li>Desktop Based</li>

                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup><sub>26,600</sub> +GST
                    </b>
                  </h4>
                </div>

                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 26600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 

<Link
        to="/BuyNow" 
        state={{ amount: 26600, product: "Cold Drink Agency"  }} 
        className="d-block text-center"
        >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
     
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
 <ul className="text-justify">
                  <li>Flavor Customization</li>
                  <li>Smart Vending Machines</li>
                  <li>Eco-Friendly Packaging</li>
                  <li>Enhanced Quality Control</li>
                  <li>Automated Production Lines</li>
                  <li>Custom Bottling Options</li>
                  <li>Real-Time Analytics</li>
                  <li>Subscription Services</li>

                  <li>Innovative Marketing Campaigns</li>
                  <li>Sustainability Initiatives</li>
        
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeContent === "Committee" && (
        <div className="container text-center">
          <div className="pricerapper">
            <div className="logocolor5 text-center">
              <h2>Committee Managment</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>Add Committee</li>
                  <li>Create Members</li>
                  <li>Open Committee</li>
                  <li>Payment</li>
                  <li>Receipt</li>
                  <li>Add Members to Committee</li>
                  <li>Massage for Recieved Payment</li>

                  <li>Reminder massage for Due Payment</li>

                  <li>MemberLedger Maintain</li>
                  <li>Due or Pending Payment Maintain</li>

                  <li>Send Massege to Members</li>
                  <li>Send Massage For Venue</li>
                  
                </ul>
                <div className="ratblue">
                  <h4>
                  
                      <sup> Rs </sup><sub>12,800</sub> +GST
                
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 1
                    </b>
                  </h4>
                </div>
              
                <div className="blue-inner">
                {/* <Link to="/BuyForm" state={{ amount: 12800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link
        to="/BuyNow" 
        state={{ amount: 12800, product: "Committee Managment "  }} 
        className="d-block text-center"
      >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
     
                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>Add Committee</li>
                  <li>Create Members</li>
                  <li>Open Committee</li>
                  <li>Payment</li>
                  <li>Receipt</li>
                  <li>Add Members to Committee</li>
                  <li>Massage for Recieved Payment</li>

                  <li>Reminder massage for Due Payment</li>

                  <li>MemberLedger Maintain</li>
                  <li>Due or Pending Payment Maintain</li>

                  <li>Send Massege to Members</li>
                  <li>Send Massage For Venue</li>
                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup><sub>25,600</sub> +GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 25600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 

<Link 
        to="/BuyNow" 
        state={{ amount: 25600, product: "Committee Managment"  }} 
        className="d-block text-center"
        >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
   
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div>

                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    {activeContent === "Dairy" && (
        <div className="container text-center">
          <div className="pricerapper">
            <div className="logocolor7 text-center">
              <h2>Dairy Managment</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>Multiple locations</li>
                 
                  <li>Multiple Branch</li>
                  <li>15 gram kat System</li>
                  <li>Fat and SNF System</li>
                  <li>Party Ledger</li>
                  <li>Payment Report</li>
                  <li>Purchase System</li>

                  <li>Sale Fat & SNF</li>
                  <li>Excel Payment Sheet</li>
                  <li>Milk Purchase Report</li>

                  <li>Sundary crediters Party</li>
                  <li>Sundry Debtors Party</li>
                  <li>Accounting Reports</li>
                  <li>Desktop Based</li>
                 
                </ul>
                <div className="ratblue">
                  <h4>
                    
                      <sup> Rs </sup><sub>12,800</sub> +GST
                    
                  </h4>
                </div>

                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 1
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
                {/* <Link to="/BuyForm" state={{ amount: 12800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 

<Link 
        to="/BuyNow" 
        state={{ amount: 12800, product: "Dairy Managment "  }} 
        className="d-block text-center"
         >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>

                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>Multiple locations</li>
                 
                  <li>Multiple Branch</li>
                  <li>15 gram kat System</li>
                  <li>Fat and SNF System</li>
                  <li>Party Ledger</li>
                  <li>Payment Report</li>
                  <li>Purchase System</li>

                  <li>Sale Fat & SNF</li>
                  <li>Excel Payment Sheet</li>
                  <li>Milk Purchase Report</li>

                  <li>Sundary crediters Party</li>
                  <li>Sundry Debtors Party</li>
                  <li>Accounting Reports</li>
                 <li>Desktop Based</li>
                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup><sub>25,600</sub> +GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 25600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}
 

<Link
        to="/BuyNow" 
        state={{ amount: 25600, product: "Dairy Managment"  }} 
        className="d-block text-center"
      >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
     
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
<ul className="text-justify">
                  <li>Automated Milking Systems</li>
                 
                  <li>Nutritional Optimization</li>
                  <li>Milk Quality Monitoring</li>
                  <li>Energy-Efficient Operations</li>
                  <li>Data Analytics</li>
                  <li>Automated Cleaning Systems</li>
                  <li>Traceability Systems</li>

                  <li>Mobile App Integration</li>
                  <li>Sustainability Initiatives</li>
          
                 
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal7"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeContent === "Auto" && (
        <div className="container text-center">
          <div className="pricerapper">
            <div className="logocolor6 text-center">
              <h2>Auto Finance</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>New Customer Profile</li>
                  <li>Interest Calculation</li>
                  <li>Document Management</li>
                  <li>Collection Management</li>
               
                  <li>EMI Due Management</li>
                  <li>Late Fee Management</li>
                  <li>Payment Mode</li>
                  <li>Part Payment</li>

                  <li>Customer Payment Ledger</li>
                  <li>Release Amount Management </li>
                  <li>Daywise Collection Report</li>
                  <li>Daywise EMI Due Report</li>
                  <li>Cloud Based</li>

                </ul>
                <div className="ratblue">
                  <h4>
                   
                      <sup>Rs </sup><sub>10,800</sub> +GST
                    
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 2
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
                {/* <Link to="/BuyForm" state={{ amount: 10800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link 
        to="/BuyNow" 
        state={{ amount: 10800, product: "Auto Finance"  }} 
        className="d-block text-center"
      >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
     
                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>New Customer Profile</li>
                  <li>Interest Calculation</li>
                  <li>Document Management</li>
                  <li>Collection Management</li>
               
                  <li>EMI Due Management</li>
                  <li>Late Fee Management</li>
                  <li>Payment Mode</li>
                  <li>Part Payment</li>

                  <li>Customer Payment Ledger</li>
                  <li>Release Amount Management </li>
                  <li>Daywise Collection Report</li>
                  <li>Daywise EMI Due Report</li>
                  <li>Cloud Based</li>

                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup><sub>21,600</sub> +GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 21600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link 
        to="/BuyNow" 
        state={{ amount: 21600, product: "Auto Finance"  }} 
        className="d-block text-center"
       >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
   
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard <br/> Features
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
<ul className="text-justify">
                  <li>Real-Time Loan Tracking</li>
                  <li>Pre-Approval Services</li>
                  <li>Credit Score Improvement Tools</li>
                  <li>Customizable Loan Terms</li>
               
                  <li>Online Document Submission</li>
                  <li>Insurance Integration</li>
                  <li>Automated Payment Reminders</li>
                  <li>Loyalty Programs</li>

                  <li>Educational Resources</li>
                  <li>Green Vehicle Financing </li>
                
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal6"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{activeContent === "Sales" && (
        <div className="container text-center">
          <div className="pricerapper ">
            <div className="logocolor1 text-center">
              <h2>Sales Managment</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>Daily Meeting Feeding</li>
                  <li>BackDate Feeding Control</li>
                  <li>HQ/Route Wise Feeding</li>
                  <li>Sample Quantity Control</li>
                  <li>No. of Meeting Control</li>
                 
                  <li>View/Edit Daily Meeting</li>
                  <li>Daily Meeting Report</li>
                  <li>Salesman Stock Report</li>
                  <li>Salesman Profile </li>
                  <li>Salesman Login</li>

                  <li>Relevant Salesman</li>
                  <li>Daily Meeting Report Month</li>
                  <li>Salesman</li>
                  <li>Cloud Based</li>

                </ul>
                <div className="ratblue">
                  <h4>
                    
                     <sup> Rs  </sup><sub>10,800</sub> +GST
                    
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 2
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
                {/* <Link to="/BuyForm" state={{ amount: 10800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link
        to="/BuyNow" 
        state={{ amount: 10800, product: "Sales Managment "  }} 
        className="d-block text-center"
         >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
      
                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>Daily Meeting Feeding</li>
                  <li>BackDate Feeding Control</li>
                  <li>HQ/Route Wise Feeding</li>
                  <li>Sample Quantity Control</li>
                  <li>No. of Meeting Control</li>
                 
                  <li>View/Edit Daily Meeting</li>
                  <li>Daily Meeting Report</li>
                  <li>Salesman Stock Report</li>
                  <li>Salesman Profile </li>
                  <li>Salesman Login</li>

                  <li>Relevant Salesman</li>
                  <li>Daily Meeting Report Month</li>
                  <li>Salesman</li>
                  <li>Cloud Based</li>

                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup> <sub>21,600</sub> +GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 21600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link 
        to="/BuyNow" 
        state={{ amount: 21600, product: "Sales Managment "  }} 
        className="d-block text-center"
       >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
     
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features and
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
<ul className="text-justify">
                  <li>Lead Management</li>
                  <li>Customer Relationship Management (CRM)</li>
                  <li>Sales Pipeline Management</li>
                  <li>Campaign Management</li>
                  <li>Sales Analytics & Reporting</li>
                 
                  <li>Pricing & Quotation Management</li>
                  <li>Order Management & Fulfillment</li>
                  <li>Marketing Automation</li>
                  <li>Collaboration Tools </li>
                 
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

   {activeContent === "School" && (
        <div className="container text-center">
          <div className="pricerapper text-center">
            <div className="logocolor text-center">
              <h2 className="text-center">School Managment</h2>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="blue">
                  <h3>Lite </h3>
                </div>
                <ul className="text-justify">
                  <li>Student Management</li>
                  <li>Fee Management</li>
                  <li>Certificate Management</li>
                  <li>Student Registration </li>
                  <li>Reg. Form & Entrance</li>
                  <li>Transfer Certificate</li>

                  <li>Leaving Certificate</li>
                  <li>Student Profile</li>
                  <li>Category Wise Report</li>
                  <li>Document Management</li>
                  <li>Utility Tools</li>
                  <li>Import Tools</li>
                  <li>Drop Out student List</li>

                  <li>Student & Class Wise Fee</li>
                  <li>Transfer Certificate Register</li>
                  <li>Searching Tool</li>
                  <li>For up to 500 student</li>
                  <li>Cloud Based</li>
                </ul>
                <div className="ratblue">
                  <h4>
                    
                      <sup> Rs </sup><sub>10,800</sub>+GST
                    
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      User - 2
                    </b>
                  </h4>
                </div>
                <div className="blue-inner">
                {/* <Link to="/BuyForm" state={{ amount: 10800 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link 
        to="/BuyNow" 
        state={{ amount: 10800, product: "School Managment "  }} 
        className="d-block text-center"
       >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
    
                </div>
              </div>
              <div className="col-xl-3">
                <div className="orange">
                  <h3>Standard</h3>
                </div>
                <ul className="text-justify">
                  <li>Student Management</li>
                  <li>Fee Management</li>
                  <li>Certificate Management</li>
                  <li>Student Registration </li>
                  <li>Reg. Form & Entrance</li>
                  <li>Transfer Certificate</li>

                  <li>Leaving Certificate</li>
                  <li>Student Profile</li>
                  <li>Category Wise Report</li>
                  <li>Document Management</li>
                  <li>Utility Tools</li>
                  <li>Import Tools</li>
                  <li>Drop Out student List</li>

                  <li>Student & Class Wise Fee</li>
                  <li>Transfer Certificate Register</li>
                  <li>Searching Tool</li>
                  <li>For up to 500 student</li>
                  <li>Cloud Based</li>
                </ul>
                <div className="rate">
                  <h4>
                    <b>
                      <sup> Rs </sup><sub>21,600</sub>+GST
                    </b>
                  </h4>
                </div>
                <div className="rateblue1">
                  <h4>
                    <b>
                      user - up to 10
                    </b>
                  </h4>
                </div>
                <div className="orange-inner">
                {/* <Link to="/BuyForm" state={{ amount: 21600 }} smooth>
  <button className="btn btn-outline-primary text-white bg-primary" type="submit">Buy Now</button>
</Link> */}


<Link
        to="/BuyNow" 
        state={{ amount: 21600, product: "School Managment "  }} 
        className="d-block text-center"
       >
        <button className="btn btn-outline-primary text-white bg-primary">
          Buy Now
        </button>
      </Link>
    
                </div>
              </div>
              <div className="col-xl-3">
                <div className="black">
                  <h3>Custom</h3>
                </div>
                {/* <div className="p-rapper">
                  <p className="pt-5">
                    <b>
                      {" "}Includes Standard Features and
                      Any other
                      <br /> queries
                    </b>
                  </p>
                </div> */}
 <ul className="text-justify">
                  <li>Student Enrollment & Admission</li>
                  <li>Attendance Management</li>
                  <li>Timetable & Scheduling</li>
                  <li>Academic Performance Management</li>
                  <li>Payment Tracking</li>
                  <li>Bulk Fee Management</li>

                  <li>Document Creation</li>
                  <li>Storage and Organization</li>
                  <li>Automation and Workflow</li>
                  <li>Version Control</li>
                  <li>Indexing and Metadata</li>
                 <li>For 500+ student</li>
                </ul>
                <div className="black-inner">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                School Managment{" "}
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              {/* <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>  */}
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                Sales Managment
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
              Billing Management
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                Gas Agency
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                Cold Drink Agency
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                Committee Managment
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal6"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                Auto Finance
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal7"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">
                Dairy Managment
              </h2>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter yoye Password'/>
  </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your  Number"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
         {/* <LazyLoad height={200} offset={100}>
         <picture>
         
         <img   src={price} className="img-responsive my-5" loading="lazy"  alt="Finance images"  width={700}/> 
         <source srcSet={price} type="image/png" />
         <source srcSet={price} type="image/jpeg" />
         </picture>
         </LazyLoad> */}
                   <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${price}?w=700&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${price}?w=700&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${price}?w=700&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${price}?w=700&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>

        
      </div>

      <div className="textcontainer">
        <h4 className="text-center">Pricing Model for CipherERP</h4>
        <div className="row d-flex">
          <div className="col-xl-6 pricinginner-img">
          {/* <LazyLoad height={200} offset={100}>
         <picture>
         
         <img   src={SubscriptionBasedPricing} className="img-responsive my-5" loading="lazy"  alt="Finance images"  width={500}/> 
         <source srcSet={SubscriptionBasedPricing} type="image/png" />
         <source srcSet={SubscriptionBasedPricing} type="image/jpeg" />
         </picture>
         </LazyLoad> */}
          <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${SubscriptionBasedPricing}?w=500&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${SubscriptionBasedPricing}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${SubscriptionBasedPricing}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${SubscriptionBasedPricing}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


          </div>
          <div className="col-xl-6 pricinginner-text">
            <h5>Subscription-Based Pricing (Cloud)</h5>
            <p className="text-justify">
              <b>Monthly or Annual Subscription Fees: </b>CipherERP may offer a
              subscription-based model, where businesses pay a recurring fee
              based on the number of users, modules, and features required.
              <br />
              <b>Basic Plan: </b>Includes essential modules (e.g., Accounting,
              HR, Inventory).
              <br />
              <b>Premium/Advanced Plan: </b>Includes advanced features like CRM,
              Business Intelligence, Manufacturing, and more.
              <br />
              <b>Pricing Range: </b>Typically, small businesses might expect
              pricing starting from ₹830 INR  per user per month.
              Larger businesses with more complex needs may see pricing range
              between ₹4,150 INR  per user per month.
              <br />
            </p>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-xl-6 pricinginner-img">
          {/* <LazyLoad height={200} offset={100}>
         <picture>
         
         <img   src={price2} className="img-responsive my-5" loading="lazy"  alt="Finance images"  width={500}/> 
         <source srcSet={price2} type="image/png" />
         <source srcSet={price2} type="image/jpeg" />
         </picture>
         </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* PNG image for browsers */}
    <source srcSet={`${price2}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${price2}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${price2}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


          </div>
          <div className="col-xl-6 pricinginner-text">
            <h5>One-Time Licensing (On-Premise)</h5>
            <p className="text-justify">
              <b>Upfront Licensing Cost: </b>Businesses pay a one-time fee for
              the software, with additional costs for updates, support, and
              maintenance. This option is often suitable for businesses that
              prefer to host the ERP system on their own infrastructure.
              <br />
              <b>Licensing Fee: </b>as par besness required.
              <br />
              <b>Support and Maintenance: </b>Additional annual fees for support
              and software upgrades, often between 15-25% of the initial license
              cost.
            </p>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-xl-6 pricinginner-img">
          {/* <LazyLoad height={200} offset={100}>
         <picture>
         
         <img   src={price3} className="img-responsive my-5" loading="lazy"  alt="Finance images"  width={500}/> 
         <source srcSet={price3} type="image/png" />
         <source srcSet={price3} type="image/jpeg" />
         </picture>
         </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* PNG image for browsers */}
    <source srcSet={`${price3}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${price3}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${price3}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    />
  </picture>
</LazyLoad>


          </div>
          <div className="col-xl-6 pricinginner-text">
            <h5>Custom Development and Implementation</h5>
            <p className="text-justify">
              <b>Setup Fees: </b>If customizations are needed, there could be a
              one-time setup or implementation fee, typically ranging from a few
              thousand to tens of thousands of dollars depending on complexity.
              <br />
              <b>Consulting Fees: </b>CipherERP may offer consulting services to
              tailor the system to your needs, which can cost extra.
              <br />
            </p>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-xl-6 pricinginner-img">
          {/* <LazyLoad height={200} offset={100}>
         <picture>
         
         <img   src={price4} className="img-responsive my-5" loading="lazy"  alt="Finance images"  width={500}/> 
         <source srcSet={price4} type="image/png" />
         <source srcSet={price4} type="image/jpeg" />
         </picture>
         </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* PNG image for browsers */}
    <source srcSet={`${price4}?w=500&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${price4}?w=500&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${price4}?w=500&fit=crop`}
      className="img-responsive my-5"
      loading="lazy"
      alt="Finance images"
    
    />
  </picture>
</LazyLoad>


          </div>
          <div className="col-xl-6 pricinginner-text">
            <h5>Free Trial or Freemium Model</h5>
            <p className="text-justify">
              Some ERP providers offer a free trial or a freemium version of the
              software, allowing small businesses to explore the system before
              committing to a paid plan.
              <br />
              <b>No Credit Card Required: </b>Many businesses, including
              CipherERP, may offer a "no credit card required" trial, which is
              ideal for small businesses to test the system without any upfront
              cost.
            </p>
          </div>
        </div>
      </div>
    </div>
<ChatbotComponent />

    </>
  );
};

export default Pricing;
