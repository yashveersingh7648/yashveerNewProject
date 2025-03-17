import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const manifact ='/Images/maniicon1.webp';
const manifact1= '/Images/production-management-system.webp';
const manifact2 ='/Images/Improved-Efficiency.webp';
const manifact3 ='/Images/Cost_Reduction.webp';
const manifact4 ='/Images/BetterDecision-MakingGirl.webp';
const manifact5 ='/Images/Scalability.webp';
const manifact6 ='/Images/contact.webp';

const Manufacturing = () => {
  return (
    <>
  <Helmet>
  {/* SEO-Optimized Title */}
  <title>Manufacturing ERP Software | Optimize Production & Supply Chain - CipherERP</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Boost manufacturing efficiency with CipherERP's advanced Manufacturing ERP software. Optimize production, inventory management, and supply chain operations with automation and real-time insights." 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Manufacturing ERP, ERP software, production management, inventory control, supply chain automation, manufacturing business solutions, process optimization, real-time analytics"
  />

  {/* Allow indexing for search engines */}
  <meta name="robots" content="index, follow" />
</Helmet>


<ScrollToTopButton/>

    <div className='container-fluid'>
      <div className='manufacturingimg' id='head'>
        <div className='row'>
          <div className='row container d-flex'>
            <div className='col-lg-6 manufttext'>
              <h1>Boost Manufacturing Productivity with CipherERP</h1>
              <p>Artificial Intelligence (AI) into Enterprise Resource Planning (ERP) systems,<br/> manufacturers can achieve smarter automation, better<br/> decision-making, and more efficient processes.</p>
              <a className="nav-sign" href="/SignUp">
                <button className="btn btn-outline-primary text-white bg-primary" type="submit">Get Started</button>
              </a>
            </div>
            <div className='col-lg-6 manuftimg'>
                  {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact} className="img-responsive " loading="lazy"  alt="Manufacturing Icon"   height={300} width={300}/> 
               <source srcSet={manifact} type="image/png" />
               <source srcSet={manifact} type="image/jpeg" />
               </picture>
               </LazyLoad>   */}

<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Manufacturing Icon"
     
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>

              
            </div>
          </div>
        </div>
      </div>
      
      <div className='container'>
        <div className='navigate text-center'>
          <ul className='d-flex'>
            <li><a href='#manifacture'>Overview</a> </li>
            <li><a href='#manifacture1'>Features Product</a></li>
            <li><a href='#manifacture2'>Benefits</a></li>
            <li><a href='#manifacture3'>Contact</a></li>
          </ul>
        </div>
      </div>

      <div className='rapper'>
        <div className='row' id='manifacture'>
          <div className='col-sm-6 manicontent'>
            <div className='manicontent-inner'>
              <h2>Made for Manufacturers, by Manufacturers</h2>
              <p className='text-justify'>
                Ready to Take Your Manufacturing Business to the Next Level? Cipher ERP is here to help you gain a crystal-clear understanding of where your manufacturing business stands today and where it needs to go next. With innovative solutions powered by cognitive ERP, Cipher ERP provides the tools to elevate your business, optimize operations, and make data-driven decisions that set you apart from the competition.
              </p>
            </div>
          </div>
          <div className='col-sm-6 maniimg'>
          {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact1} className="img-responsive " loading="lazy"  alt="Production Management System"   height={300} width={300}/> 
               <source srcSet={manifact1} type="image/png" />
               <source srcSet={manifact1} type="image/jpeg" />
               </picture>
               </LazyLoad>  */}
          <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact1}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact1}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact1}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact1}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Production Management System"
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>


          </div>
        </div>
      </div>

      <div className='section1 text-center' id='manifacture1'>
        <h4>Key Features of CipherERP</h4>
        <div className='container'>
          <div className='row d-flex text-justifye'>
            <div className='col-sm-3'>
              <div className='innerimg'>
                <h5>Production Planning and Scheduling</h5>
                <p className='text-justify'>
                  <b>Forecasting: </b>Uses historical data and market trends to predict demand, ensuring the company produces the right amount of products.<br/>
                  <b>Capacity Planning: </b>Helps allocate resources effectively and ensures that production lines have sufficient capacity to meet demand.<br/>
                </p>
              </div>
            </div>
            <div className='col-sm-3 pb-5'>
              <div className='innerimg'>
                <h5>Inventory and Supply Chain Management</h5>
                <p className='text-justify pb-3'>
                  <b>Inventory Control: </b>Tracks raw materials, work-in-progress, and finished goods, minimizing excess stock and reducing waste.<br/>
                  <b>Procurement Management: </b>Manages supplier relationships, automates the ordering of materials, and ensures timely deliveries.
                </p>
              </div>
            </div>
            <div className='col-sm-3 pb-5 '>
              <div className='innerimg mb-3'>
                <h5>Quality Control and Compliance</h5>
                <p>
                  <b className='text-justify pb-5 '>Inspection and Testing:</b> Monitors the quality of raw materials and finished goods, ensuring compliance with industry standards.<br/>
                  <b>Traceability: </b>Tracks the origin of raw materials, production processes, and final products to maintain transparency and meet regulatory requirements.
                </p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='innerimg'>
                <h5>Production Tracking and Monitoring</h5>
                <p className='text-justify'>
                  <b>Real-time Monitoring: </b>Tracks the status of production lines and machines in real time to identify bottlenecks and optimize throughput.<br/>
                  <b>Equipment Maintenance: </b>Schedules maintenance and tracks machine performance to minimize downtime and extend equipment lifespan.
                </p>
              </div>
            </div>
            <div className='col-sm-3 pb-5 pt-5'>
              <div className='innerimg'>
                <h5>Accounting and Financial Management</h5>
                <p className='text-justify pt-3'>
                  <b>Cost Tracking: </b>Monitors production costs, material costs, labor, and overhead to ensure profitability.<br/>
                  <b>Budgeting and Forecasting: </b>Helps plan financial strategies and provides insight into future cash flow requirements.
                </p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='innerimg'>
                <h5>Sales and Order Management</h5>
                <p className='text-justify'>
                  <b>Order Processing: </b>Automates order entry, tracking, and delivery, ensuring customer demands are met on time.<br/>
                  <b>Customer Relationship Management (CRM):</b> Manages customer data, order history, and communication to improve customer satisfaction and loyalty.
                </p>
              </div>
            </div>
            <div className='col-sm-3 pb-5 '>
              <div className='innerimg mb-5'>
                <h5>Human Resources and Labor Management</h5>
                <p className='text-justify pt-3'>
                  <b>Employee Scheduling: </b>Manages labor allocation to production lines, optimizing workforce efficiency.<br/>
                  <b>Time and Attendance Tracking: </b>Monitors employee hours, overtime, and ensures compliance with labor laws.
                </p>
              </div>
            </div>
            <div className='col-sm-3 pb-5'>
              <div className='innerimg mb-4'>
                <h5>Data Analytics and Reporting</h5>
                <p className='text-justify'>
                  <b>Business Intelligence (BI): </b>Provides detailed analytics on key performance indicators (KPIs), production efficiency, and resource utilization.<br/>
                  <b>Custom Reports: </b>Generates customizable reports to track performance, trends, and production outcomes.
                </p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='innerimg'>
                <h5>Integration and Automation</h5>
                <p className='text-justify'>
                  <b>Integration with Other Systems: </b>ERP systems integrate seamlessly with other business tools, such as CRM, accounting, and supplier management platforms.<br/>
                  <b>Automation: </b>Automates routine tasks, such as order processing, invoicing, and inventory tracking, reducing manual errors and saving time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section2'>
        <div className='container text-center my-5' id='manifacture2'>
          <h5>Benefits of Manufacturing ERP</h5>
          <p>The study highlights the powerful impact of Cipher ERP Kinetic, illustrating how it enabled businesses to adapt quickly to market demands, streamline operations, and scale effectively in an ever-changing industry landscape.</p>
        </div>
        <div className='row banifit d-flex'>
          <div className='col-sm-6 manicontente my-5'>
            <div className='manicontent-inner'>
              <h6>Improved Efficiency</h6>
              <p className='text-justify'>
                <b>Automated Processes: </b>Manufacturing ERP systems streamline and automate critical processes such as production scheduling, inventory management, and order processing. By eliminating manual tasks and reducing redundancies, ERP significantly boosts efficiency across the entire production cycle.<br/>
                <b>Optimized Workflows: </b>ERP helps create seamless workflows by integrating various functions like procurement, sales, finance, and manufacturing. This leads to a smoother operation with fewer disruptions and delays.
              </p>
            </div>
          </div>
        <div className='col-sm-5 inimg my-5'>
        {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact2} className="img-responsive" loading="lazy"  alt="School images"   height={300} width={300}/> 
               <source srcSet={manifact2} type="image/png" />
               <source srcSet={manifact2} type="image/jpeg" />
               </picture>
               </LazyLoad>  */}
     <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact2}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact2}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact2}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact2}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School Images"
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>

        </div>

        <div className='col-sm-6 manicontente my-5'>
    <div className='manicontent-inner '>
        <h6>Cost Reduction</h6>
        <p className='text-justify'>
            <b>Resource Management: </b>By optimizing resource allocation—whether human, machinery, or materials—ERP ensures that companies use their resources efficiently. This reduces waste and prevents overproduction.<br/>
            <b>Production Optimization: </b>ERP provides real-time data that helps in monitoring production cycles, minimizing downtime, and improving overall throughput, ultimately lowering operational costs.
       </p>
        </div>
    </div>
        <div className='col-sm-5 inimg my-5'>
        {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact3} className="img-responsive" loading="lazy"  alt="School images"   height={300} width={300}/> 
               <source srcSet={manifact3} type="image/png" />
               <source srcSet={manifact3} type="image/jpeg" />
               </picture>
               </LazyLoad>  */}
 <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact3}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact3}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact3}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact3}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School Images"
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>

        </div>

        <div className='col-sm-6 manicontente my-5'>
    <div className='manicontent-inner '>
        <h6>Better Decision-Making</h6>
        <p className='text-justify'>
        <b>Real-Time Data & Reporting:</b> Manufacturing ERP systems provide managers with up-to-the-minute information on inventory, production, and supply chain status, allowing them to make more informed and timely decisions.<br/>
        <b>Predictive Insights: </b>ERP tools often incorporate analytics that help predict trends, plan for seasonal demands, and optimize scheduling, giving decision-makers the foresight to take proactive actions.
        </p>
        </div>
    </div>
        <div className='col-sm-5 inimg my-5'>
        {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact4} className="img-responsive" loading="lazy"  alt="School images"   height={300} width={300}/> 
               <source srcSet={manifact4} type="image/png" />
               <source srcSet={manifact4} type="image/jpeg" />
               </picture>
               </LazyLoad>  */}
     <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact4}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact4}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact4}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact4}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School Images"
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>

            
        </div>

        <div className='col-sm-6 manicontente my-5'>
    <div className='manicontent-inner '>
        <h6>Scalability</h6>
        <p className='text-justify'>
        <b>Adapting to Growth:</b> As a company expands, whether by adding new products, entering new markets, or establishing new locations, ERP systems can scale to accommodate increased demands. This ensures that the company can maintain operational efficiency even as it grows.<br/>
        <b>Flexible Integration: </b>ERP systems are designed to integrate with other systems and technologies, making it easy for manufacturers to adopt new tools and features as their needs evolve.
        </p>
        </div>
    </div>
        <div className='col-sm-5 inimg my-5'>
        {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact5} className="img-responsive" loading="lazy"  alt="School images"   height={300} width={300}/> 
               <source srcSet={manifact5} type="image/png" />
               <source srcSet={manifact5} type="image/jpeg" />
               </picture>
               </LazyLoad>  */}
    <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact5}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact5}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact5}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact5}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School Images"
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>

            
        </div>
    </div>
</div>



<div  className=" signup " id='manifacture3'>
            
            <div  className="row companyForm mt-5">
               
              <div  className="col-sm-7 Signboxex pt-5">
                <h2>Let'S get Started</h2>
                  <div  className="row">
                      <div  className="col-sm-2">
                          <label htmlFor="companyName" className="pb-2">Company Name:</label>
                      </div>
                      <div  className="col-sm-6">
                          <input type="text" onKeyDown="return /[a-z]/i.test(event.key)"  className="form-control mt-5" name="name" id="companyName" placeholder="Enter your companyName" required />
                      </div>
                      <div id="companyNameError"  className="error"></div>
                  </div>
                  
                  <div  className="row">
                      <div  className="col-sm-2">
                          <label htmlFor="email"  className="pb-2">Email_ID:</label>
                      </div>
                      <div  className="col-sm-6">
                          <input type="email"  className="form-control mt-3" name="email" id="email" placeholder="Enter your Email" required />
                      </div>
                      <div id="emailError"  className="error"></div>
                  </div>
                  <div  className="row">
                      <div  className="col-sm-2">
                          <label htmlFor="password"  className="pb-2">Password:</label>
                      </div>
                      <div  className="col-sm-6">
                          <input type="password"  className="form-control mt-3" name="subject" id="password" placeholder="Enter your password" required />
                      </div>
                  </div>
                  <div  className="row">
                      <div  className="col-sm-2">
                          <label htmlFor="contact"  className="pb-2">Contact:</label>
                      </div>
                      <div  className="col-sm-6">
                          <input type="tel"  className="form-control mt-3" name="contact" id="contact" placeholder="Enter your Number" required pattern="[0-9]{10}" />
                      </div>
                      <div id="contactError"  className="error"></div>
                  </div>

                  <div  className="row">
                      <div  className="col-sm-2 text-center">
                          <label htmlFor="country"  className="pb-2">Country:</label>
                      </div>
                      <div  className="col-sm-6">
                          
                          <select id="country"  className="form-control mt-3" name="country" required>
                            <option value="">Select a country</option>
                            <option value="US">United States</option>
                            <option value="IN">India</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                          
                        </select>
                        <div id="countryError"  className="error"></div>
                      </div>
                  </div>
          
                  <br />
          
                  <div className="col-md-12 text-left">
                      <button type="button"  className="btn btn-success btn-lg" id="btnSubmit">Submit</button>
                  </div>
              </div>
          
          
              <div  className="col-sm-4 col-md-4 col-lg-4 Signboxex1">
              {/* <LazyLoad height={200} offset={100}>
               <picture>
               
               <img   src={manifact6} className="img-responsive" loading="lazy"  alt="School images"   height={300} width={300}/> 
               <source srcSet={manifact6} type="image/png" />
               <source srcSet={manifact6} type="image/jpeg" />
               </picture>
               </LazyLoad>  */}
      <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${manifact6}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${manifact6}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${manifact6}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${manifact6}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School Images"
      height={300}
      width={300}
    />
  </picture>
</LazyLoad>


              </div>
  
          </div>
          </div>



    </div>
<ChatbotComponent />

    </>
  )
}

export default Manufacturing
