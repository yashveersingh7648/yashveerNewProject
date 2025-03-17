import React from 'react'
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

const SignUp = () => {
  return (
    <>
  <Helmet>
        <title>Sign Up for CipherERP - Start Your ERP Journey Today</title>
        <meta 
          name="description" 
          content="Sign up for CipherERP's ERP solutions and start automating your business operations. Manage inventory, sales, production, and more with ease. Free trial available, no credit card required." 
        />
        <meta name="keywords" content="Sign up, CipherERP, ERP solutions, automate business, free trial, inventory management, sales management, business operations" />
      </Helmet>
<ScrollToTopButton/>

    <div className='container-fluid'>
      <div className='SignUp_banner' >
        <div className='row'>
            <div className='col-lg-6 Signimg'>
<h1>Automating your business with Cipher ERP</h1>
<ul>
<p>Ready to automate and streamline your business operations? Contact us today to learn more about how our End-to-End ERP solution can transform your business for the better!</p>
<p>
   
        <li>Quick support response — 5&#45;10 minutes</li>
        <li>Smooth onboarding — 1&#45;3 sessions</li>
        <li>End-to-end ERP — manage inventory, production & sales</li>
        <li>Dependable infrastructure — fully-managed and secure cloud-based software</li>
        <li>Flexible solution — unlimited API and seamless integrations with Shopify, Zoho Books, and more</li>
   
</p>
</ul>
            </div>
            <div className='col-lg-6 Signform'>
            <div className="col-sm-8 Signboxex pt-5">
                <h2>Let'S get Started</h2>
                <p>Start your 1 month free trial.
                No credit card required</p>
                  <div className="row">
                      <div className="col-sm-2">
                          <label htmlFor ="companyName" className="pb-2">Company Name:</label>
                      </div>
                      <div className="col-sm-8">
                          <input type="text" onKeyDown="return /[a-z]/i.test(event.key)" className="form-control mt-5" name="name" id="companyName" placeholder="Enter your companyName" required/>
                      </div>
                      <div id="companyNameError" className="error"></div>
                  </div>
                  
                  <div className="row">
                      <div className="col-sm-2">
                          <label htmlFor="email" className="pb-2">Email_ID:</label>
                      </div>
                      <div className="col-sm-8">
                          <input type="email" className="form-control mt-3" name="email" id="email" placeholder="Enter your Email" required/>
                      </div>
                      <div id="emailError" className="error"></div>
                  </div>
          
                  <div className="row">
                      <div className="col-sm-2">
                          <label htmlFor="contact" className="pb-2">Contact:</label>
                      </div>
                      <div className="col-sm-8">
                          <input type="tel" className="form-control mt-3" name="contact" id="contact" placeholder="Enter your Number" required pattern="[0-9]{10}"/>
                      </div>
                      <div id="contactError" className="error"></div>
                  </div>
          
                  <div className="row">
                      <div className="col-sm-2">
                          <label htmlFor="password" className="pb-2">Password:</label>
                      </div>
                      <div className="col-sm-8">
                          <input type="password" className="form-control mt-3" name="subject" id="password" placeholder="Enter your password" required/>
                      </div>
                  </div>
          
                  <div className="row">
                      <div className="col-sm-2 text-center">
                          <label htmlFor="country" className="pb-2">Country:</label>
                      </div>
                      <div className="col-sm-8 pt-3">
                          
                          <select id="country" className="form-control mt-2" name="country" required>
                            <option value="">Select a country</option>
                            <option value="US">United States</option>
                            <option value="IN">India</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                           
                        </select>
                        <div id="countryError" className="error"></div>
                      </div>
                  </div>
          
                  <br />
          
                  <div className="col-md-12 text-center">
                      <button type="button" className="btn btn-success btn-lg " id="btnSubmit">Sign Up</button>
                  </div>
              </div>
          
                </div>
        </div>
      </div>
    </div>
<ChatbotComponent />

    </>
  )
}

export default SignUp;
