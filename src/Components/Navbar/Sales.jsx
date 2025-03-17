import React from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const Marketing = '/Images/Marketing.webp';
const Marketing1 = '/Images/Salesmar.webp';
const Marketing2 = '/Images/SalesProcess.webp';
const Marketing3 = '/Images/SalesTechniques.webp';
const Marketing4 = '/Images/SalesChannels.jpg';
const Marketing5 ='/Images/SalesMetrics.webp';
const Marketing6 = '/Images/MarketingStrategy.webp';
const Marketing7 = '/Images/DigitalMarketing.webp';
const Marketing8 = '/Images/TraditionalMarketing.webp';
const Marketing9 = '/Images/MarketingAnalytics.webp';


const Sales = () => {
  return (
    <>
   <Helmet>
  {/* SEO-optimized Title */}
  <title>Best Sales & Marketing ERP Software | CipherERP</title>

  {/* Meta description optimized for ranking */}
  <meta 
    name="description" 
    content="Discover CipherERP's advanced Sales & Marketing ERP software. Improve business management, customer engagement, and sales automation for higher revenue." 
  />

  {/* SEO-focused meta keywords */}
  <meta 
    name="keywords" 
    content="Sales ERP software, business management system, CipherERP solutions, customer engagement, sales automation, marketing ERP, order management, CRM solutions, business growth"
  />
</Helmet>



<ScrollToTopButton/>

    <div className='container-fluid'>
<div className='Sales_Marketing_banner'>
      {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing} className="img-responsive " loading="lazy"  alt="School images" height={300} width={500}/> 
             <source srcSet={Marketing} type="image/png" />
             <source srcSet={Marketing} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
    <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Marketing}?w=400&fit=crop&fm=webp 400w,
               ${Marketing}?w=800&fit=crop&fm=webp 800w,
               ${Marketing}?w=1200&fit=crop&fm=webp 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp" 
    />
    
    {/* PNG image for browsers that support PNG */}
    <source 
      srcSet={`${Marketing}?w=400&fit=crop&fm=png 400w,
               ${Marketing}?w=800&fit=crop&fm=png 800w,
               ${Marketing}?w=1200&fit=crop&fm=png 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png" 
    />
    
    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Marketing}?w=400&fit=crop&fm=jpeg 400w,
               ${Marketing}?w=800&fit=crop&fm=jpeg 800w,
               ${Marketing}?w=1200&fit=crop&fm=jpeg 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg" 
    />
    
    {/* Default img for browsers that don't support <picture> */}
    <img
      src={`${Marketing}?w=500&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School images"
      height={300}
      width={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>
`



</div>

      <div className='sch_content '>
      <h1 className='text-center'>Best Sales and Marketing Strategies for Business Growth</h1>

        <div className='row d-flex'>
      <div className='col-xl-6 py-5'>
      <p className='text-justify py-5'>Sales and Marketing are closely related business functions, but they have distinct roles in driving a company&#39;s growth and achieving its objectives. Marketing focuses on creating awareness and demand for products or services, while sales involves converting that demand into actual purchases or contracts. Together, these two functions work hand-in-hand to maximize a company's revenue and market presence.
        </p>
      </div>
      <div className='col-xl-6 selsimg'>
      {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing1} className="img-responsive " loading="lazy"  alt="School images" height={400}/> 
             <source srcSet={Marketing1} type="image/png" />
             <source srcSet={Marketing1} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
  <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Marketing1}?w=400&fit=crop&fm=webp 400w,
               ${Marketing1}?w=800&fit=crop&fm=webp 800w,
               ${Marketing1}?w=1200&fit=crop&fm=webp 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp" 
    />
    
    {/* PNG image for browsers that support PNG */}
    <source 
      srcSet={`${Marketing1}?w=400&fit=crop&fm=png 400w,
               ${Marketing1}?w=800&fit=crop&fm=png 800w,
               ${Marketing1}?w=1200&fit=crop&fm=png 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png" 
    />
    
    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Marketing1}?w=400&fit=crop&fm=jpeg 400w,
               ${Marketing1}?w=800&fit=crop&fm=jpeg 800w,
               ${Marketing1}?w=1200&fit=crop&fm=jpeg 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg" 
    />
    
    {/* Default img for browsers that don't support <picture> */}
    <img
      src={`${Marketing1}?w=500&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School images"
      height={400}
      width={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>


      </div>
      
      <div className='container'>
      <h2 className='text-center  pt-5'>Key Aspects of Sales</h2>
      <div className='sale_contant'>
      <h3 className=' text-center'>Sales Process</h3>
      <div className='row'>
      <p className='text-justify'>
        <b>Lead Generation: </b>Identifying potential customers who are interested in the company&#39;s products or services. This can be through inbound or outbound tactics.<br/>
        <b>Qualifying Leads: </b>Determining which leads are most likely to become paying customers by evaluating their needs, budget, and decision-making power.<br/>
        <b>Sales Pitch: </b>Presenting the product or service to the prospect, highlighting its features, benefits, and value proposition.
</p>
<div className='col-xl-5 '>
{/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing2} className="img-responsive " loading="lazy"  alt="School images" height={300} width={400}/> 
             <source srcSet={Marketing2} type="image/png" />
             <source srcSet={Marketing2} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Marketing2}?w=400&fit=crop&fm=webp 400w,
               ${Marketing2}?w=800&fit=crop&fm=webp 800w,
               ${Marketing2}?w=1200&fit=crop&fm=webp 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp" 
    />
    
    {/* PNG image for browsers that support PNG */}
    <source 
      srcSet={`${Marketing2}?w=400&fit=crop&fm=png 400w,
               ${Marketing2}?w=800&fit=crop&fm=png 800w,
               ${Marketing2}?w=1200&fit=crop&fm=png 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png" 
    />
    
    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Marketing2}?w=400&fit=crop&fm=jpeg 400w,
               ${Marketing2}?w=800&fit=crop&fm=jpeg 800w,
               ${Marketing2}?w=1200&fit=crop&fm=jpeg 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg" 
    />
    
    {/* Default img for browsers that don't support <picture> */}
    <img
      src={`${Marketing2}?w=400&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="School images"
      height={300}
      width={400}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>



      </div>
      <div className='col-xl-7 px-5  '>
      <p className='text-justify'><b>Overcoming Objections: </b>Addressing any concerns or questions the prospect may have, whether related to price, product features, or competition.<br/>
      <b>Closing the Sale: </b>Finalizing the transaction and converting the prospect into a paying customer.<br/>
      <b>Post-Sale Follow-Up:</b> Ensuring customer satisfaction, seeking feedback, and encouraging repeat business or referrals.
</p>
      </div>
      
      </div>
      </div>
      </div>
      
      
      <div className='container'>
      <div className='sale_contant'>
      <h3 className=' text-center'>Sales Techniques</h3>
      <div className='row'>
      <p><b>Consultative Selling: </b>Focusing on building a relationship with the customer and acting as a consultant, addressing their needs and pain points rather than simply selling a product.<br/>
      <b>Solution Selling: </b>Positioning a product or service as a solution to a customer's problem or challenge.
      </p>
      
      <div className='col-xl-7 px-4  '>
      <p className='text-justify'><b>Relationship Selling: </b>Building long-term relationships with customers to foster loyalty and repeat business.<br/>
      <b>Upselling and Cross-selling: </b>Encouraging customers to purchase more expensive items (upselling) or additional products/services (cross-selling) that complement their original purchase.
      </p>
      </div>
      <div className='col-xl-5'>
      {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing3} className="img-responsive resimg" loading="lazy"  alt="School images" height={300} width={400}/> 
             <source srcSet={Marketing3} type="image/png" />
             <source srcSet={Marketing3} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Marketing3}?w=400&fit=crop&fm=webp 400w,
               ${Marketing3}?w=800&fit=crop&fm=webp 800w,
               ${Marketing3}?w=1200&fit=crop&fm=webp 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp" 
    />
    
    {/* PNG image for browsers that support PNG */}
    <source 
      srcSet={`${Marketing3}?w=400&fit=crop&fm=png 400w,
               ${Marketing3}?w=800&fit=crop&fm=png 800w,
               ${Marketing3}?w=1200&fit=crop&fm=png 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png" 
    />
    
    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Marketing3}?w=400&fit=crop&fm=jpeg 400w,
               ${Marketing3}?w=800&fit=crop&fm=jpeg 800w,
               ${Marketing3}?w=1200&fit=crop&fm=jpeg 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg" 
    />
    
    {/* Default img for browsers that don't support <picture> */}
    <img
      src={`${Marketing3}?w=400&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Another school image"
      height={300}
      width={400}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

      </div>
      
      </div>
      </div>
      </div>
      
      
      
      <div className='container'>
      <div className='sale_contant'>
      <h3 className=' text-center'>Sales Channels</h3>
      <p><b>Direct Sales: </b>Selling directly to customers, often through sales representatives or personal relationships.<br/>
      <b>Retail Sales: </b>Selling through physical stores or online marketplaces.
      </p>
      
      <div className='row'>
      <div className='col-xl-5'>
      {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing4} className="img-responsive resimg" loading="lazy"  alt="School images" height={300} width={400}/> 
             <source srcSet={Marketing4} type="image/png" />
             <source srcSet={Marketing4} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source 
      srcSet={`${Marketing4}?w=400&fit=crop&fm=webp 400w,
               ${Marketing4}?w=800&fit=crop&fm=webp 800w,
               ${Marketing4}?w=1200&fit=crop&fm=webp 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp" 
    />
    
    {/* PNG image for browsers that support PNG */}
    <source 
      srcSet={`${Marketing4}?w=400&fit=crop&fm=png 400w,
               ${Marketing4}?w=800&fit=crop&fm=png 800w,
               ${Marketing4}?w=1200&fit=crop&fm=png 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png" 
    />
    
    {/* JPEG image for fallback */}
    <source 
      srcSet={`${Marketing4}?w=400&fit=crop&fm=jpeg 400w,
               ${Marketing4}?w=800&fit=crop&fm=jpeg 800w,
               ${Marketing4}?w=1200&fit=crop&fm=jpeg 1200w`} 
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg" 
    />
    
    {/* Default img for browsers that don't support <picture> */}
    <img
      src={`${Marketing4}?w=400&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Another school image"
      height={300}
      width={400}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>


      </div>
      
      <div className='col-xl-7 px-4  '>
      <p className='text-justify'><b>Wholesale Sales: </b>Selling in bulk to other businesses, who then sell to end customers.<br/>
      <b>E-commerce Sales: </b>Selling products or services online via websites, apps, or third-party platforms (e.g., Amazon, Etsy).
      </p>
      </div>
      
      </div>
      </div>
      </div>
      
      
      
      <div className='container'>
      <div className='sale_contant'>
      <h3 className=' text-center'>Sales Metrics</h3>
      <p><b>Sales Revenue: </b>The total income from sales transactions.<br/>
<b>Conversion Rate: </b>The percentage of leads that are converted into customers.<br/>
<b>Average Deal Size: </b>The average value of each closed sale.
</p>
      
      <div className='row'>
      <div className='col-xl-7 px-4 '>
      <p className='text-justify'><b>Sales Cycle Length: </b>The time it takes to close a sale, from the first contact to the final purchase.<br/>
      <b>Customer Acquisition Cost (CAC): </b>The cost associated with acquiring a new customer, including marketing and sales expenses.
      </p>
      </div>
      <div className='col-xl-5'>
      {/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing5} className="img-responsive " loading="lazy"  alt="School images" height={300} width={400}/> 
             <source srcSet={Marketing5} type="image/png" />
             <source srcSet={Marketing5} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Best Optimization */}
    <source 
      srcSet={`${Marketing5}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Marketing5}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Marketing5}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Format Fallback */}
    <source 
      srcSet={`${Marketing5}?w=400&h=250&fit=crop&fm=png 400w,
               ${Marketing5}?w=800&h=500&fit=crop&fm=png 800w,
               ${Marketing5}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Format Fallback */}
    <source 
      srcSet={`${Marketing5}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Marketing5}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Marketing5}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Marketing5}?w=400&h=250&fit=crop`} 
      className="img-responsive py-5" 
      loading="lazy" 
      alt="School images" 
      width={400} 
      height={300}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>


      </div>
      </div>
      </div>
      </div>


      </div>
      </div>


      

      <div className='container text-center'>
      <h3>Key Aspects of Marketing</h3>
      <div className='sale_contant'>
      <h4>Marketing Strategy</h4>
      <p className='text-justify'><b>Market Research: </b>Gathering data about consumer needs, preferences, and behaviors, as well as understanding competitors and market trends. This can be done through surveys, focus groups, and analyzing market data.<br/>
<b>Target Market: </b>Identifying and segmenting the audience based on factors like demographics, geography, psychographics, and behavior.<br/>
<b>Positioning: </b>Defining how a brand is perceived in the marketplace relative to competitors. This includes creating a unique value proposition (UVP) that resonates with the target audience.
</p>
{/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing6} className="img-responsive " loading="lazy"  alt="School images"height={400}/> 
             <source srcSet={Marketing6} type="image/png" />
             <source srcSet={Marketing6} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Best Optimization */}
    <source 
      srcSet={`${Marketing6}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Marketing6}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Marketing6}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Format Fallback */}
    <source 
      srcSet={`${Marketing6}?w=400&h=250&fit=crop&fm=png 400w,
               ${Marketing6}?w=800&h=500&fit=crop&fm=png 800w,
               ${Marketing6}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Format Fallback */}
    <source 
      srcSet={`${Marketing6}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Marketing6}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Marketing6}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Marketing6}?w=800&h=500&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy" 
      alt="School images" 
      width="800" 
      height="500"
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>


      </div>
      </div>
      
      <div className='container text-center'>
      <div className='sale_contant'>
      <h4>Digital Marketing</h4>
      <p className='text-justify'>
      <b>Content Marketing: </b>Creating valuable and relevant content (e.g., blogs, videos, infographics) to attract and engage potential customers.<br/>
<b>Search Engine Optimization (SEO): </b>Optimizing website content to rank higher on search engines like Google, increasing organic traffic.<br/>
<b>Social Media Marketing: </b>Using platforms like Facebook, Instagram, LinkedIn, and TikTok to engage with customers, build brand awareness, and promote products.<br/>
<b>Email Marketing: </b>Sending targeted emails to customers and prospects to nurture relationships, promote offers, and drive conversions.<br/>
<b>Pay-Per-Click (PPC) Advertising: </b>Running paid ads on platforms like Google Ads or social media, where businesses pay each time a user clicks on their ad.<br/>
<b>Influencer Marketing: </b>Partnering with social media influencers to promote products and expand reach to new audiences.
</p>
{/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing7} className="img-responsive " loading="lazy"  alt="School images"height={400}/> 
             <source srcSet={Marketing7} type="image/png" />
             <source srcSet={Marketing7} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Best Optimization */}
    <source 
      srcSet={`${Marketing7}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Marketing7}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Marketing7}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Format Fallback */}
    <source 
      srcSet={`${Marketing7}?w=400&h=250&fit=crop&fm=png 400w,
               ${Marketing7}?w=800&h=500&fit=crop&fm=png 800w,
               ${Marketing7}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Format Fallback */}
    <source 
      srcSet={`${Marketing7}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Marketing7}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Marketing7}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Marketing7}?w=800&h=500&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy" 
      alt="School images" 
      width="800" 
      height="500"
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>



      </div>
      </div>
      
      
      <div className='container text-center'>
      <div className='sale_contant'>
      <h4>Traditional Marketing</h4>
      <p className='text-justify'>
      <b>TV, Radio, and Print Ads: </b>Advertising through traditional channels such as television, radio, and print media (magazines, newspapers).<br/>
<b>Billboards and Outdoor Advertising: </b>Placing ads on outdoor displays, buses, or billboards to capture attention in high-traffic areas.<br/>
<b>Direct Mail: </b>Sending physical marketing materials like postcards or catalogs to targeted individuals.
</p>
{/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing8} className="img-responsive " loading="lazy"  alt="School images"height={400} width={600}/> 
             <source srcSet={Marketing8} type="image/png" />
             <source srcSet={Marketing8} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट प्राथमिकता दी गई */}
    <source 
      srcSet={`
        ${Marketing8}?w=400&h=267&fit=crop&fm=webp 400w,
        ${Marketing8}?w=800&h=533&fit=crop&fm=webp 800w,
        ${Marketing8}?w=1200&h=800&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${Marketing8}?w=400&h=267&fit=crop&fm=png 400w,
        ${Marketing8}?w=800&h=533&fit=crop&fm=png 800w,
        ${Marketing8}?w=1200&h=800&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${Marketing8}?w=400&h=267&fit=crop&fm=jpeg 400w,
        ${Marketing8}?w=800&h=533&fit=crop&fm=jpeg 800w,
        ${Marketing8}?w=1200&h=800&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Marketing8}?w=800&h=533&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="High-quality image of school environment"  
      width={600} 
      height={400}
    />
  </picture>
</LazyLoad>

      
      </div>
      </div>
      
      
      <div className='container text-center'>
      <div className='sale_contant'>
      <h4>Marketing Analytics</h4>
      <p className='text-justify'>
      <b>Return on Investment (ROI): </b>Measuring the profitability of marketing campaigns to determine which activities are most effective.<br/>
<b>Customer Lifetime Value (CLV): </b>Estimating the total revenue a customer will generate over their relationship with the company.<br/>
<b>Engagement Metrics: </b>Tracking interactions on social media, email campaigns, or websites (e.g., clicks, shares, comments, time spent on page).<br/>
<b>Conversion Rate: </b>The percentage of visitors who take the desired action (e.g., make a purchase, fill out a contact form).
</p>
{/* <LazyLoad height={200} offset={100}>
             <picture>
             
             <img   src={Marketing9} className="img-responsive " loading="lazy"  alt="School images"height={400}/> 
             <source srcSet={Marketing9} type="image/png" />
             <source srcSet={Marketing9} type="image/jpeg" />
             </picture>
             </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (सबसे पहले लोड होगा क्योंकि यह हल्का और फास्ट होता है) */}
    <source 
      srcSet={`
        ${Marketing9}?w=400&h=267&fit=crop&fm=webp 400w,
        ${Marketing9}?w=800&h=533&fit=crop&fm=webp 800w,
        ${Marketing9}?w=1200&h=800&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${Marketing9}?w=400&h=267&fit=crop&fm=png 400w,
        ${Marketing9}?w=800&h=533&fit=crop&fm=png 800w,
        ${Marketing9}?w=1200&h=800&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${Marketing9}?w=400&h=267&fit=crop&fm=jpeg 400w,
        ${Marketing9}?w=800&h=533&fit=crop&fm=jpeg 800w,
        ${Marketing9}?w=1200&h=800&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Marketing9}?w=800&h=533&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="A beautiful school environment"  
      width={800} 
      height={533}
    />
  </picture>
</LazyLoad>

      
      </div>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
    </div>
<ChatbotComponent />

    </>
  )
}

export default Sales
