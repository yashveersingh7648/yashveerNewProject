import React from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";
import LazyLoad from "react-lazyload";

const img = '/Images/SoftwareDistributionLicensing.webp';
const img2 = "/Images/MarketingSale.webp";
const img3 = "/Images/CustomerSupportCompliance.webp";
const img4 = "/Images/PerformanceReviewGrowth.webp";
const img5 = "/Images/ApplicationOnboarding.jpg";
const img6 = "/Images/TrainingCertification.jpg";

function OurPartners() {
  return (
    <>
     <Helmet>
  {/* SEO-Optimized Title */}
  <title>Trusted ERP Partners & Strategic Alliances | CipherERP</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Explore CipherERP's trusted ERP partners and strategic alliances. Collaborate with top software providers to enhance your business operations and ERP solutions." 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="CipherERP partners, ERP partnerships, strategic alliances, ERP software providers, business collaborations, ERP solutions, partner program, ERP certification"
  />

  {/* Allow indexing for search engines */}
  <meta name="robots" content="index, follow" />
</Helmet>


      <ScrollToTopButton />

      <div className='container-fluid'>
        <div className='Parteners_banner'>
        </div>
        <div className="container">
          <div className='headingh1'>
          <h1 className='text-center font-bold text-4xl underline mb-4 drop-shadow-2xl text-indigo-900'>
    Join Our Partner Program &#45; Grow & Succeed Together
</h1>

          </div>

          {/* Step 1: Application & Onboarding */}
          <section className="step" id="application-onboarding">
            <h2>Step 1: Application & Onboarding</h2>
            <p>
              Potential partners submit an application form. The vendor reviews partner credentials, experience, and market presence. Once approved, a partnership agreement is signed, and partners gain access to partner portal, documentation, and training materials.
            </p>
            {/* <LazyLoad height={200} offset={100}>
              <picture>
                <img src={img5} className="img-responsive" loading="lazy" alt="Partner Onboarding" height={300} width={400} />
                <source srcSet={img5} type="image/png" />
                <source srcSet={img5} type="image/jpeg" />
              </picture>
            </LazyLoad> */}
            <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img5}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img5}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img5}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img5}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Partner Onboarding"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

          </section>

          {/* Step 2: Training & Certification */}
          <section className="step" id="training-certification">
            <h2>Step 2: Training & Certification</h2>
            <p>
              Partners undergo comprehensive training on product features, licensing, and support. Certification may be required to ensure product knowledge. Technical and sales enablement are provided.
            </p>
            {/* <LazyLoad height={200} offset={100}>
              <picture>
                <img src={img6} className="img-responsive" loading="lazy" alt="Partner Training and Certification" height={300} width={400} />
                <source srcSet={img6} type="image/png" />
                <source srcSet={img6} type="image/jpeg" />
              </picture>
            </LazyLoad> */}
            <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img6}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img6}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img6}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img6}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Partner Training and Certification"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

          </section>

          {/* Step 3: Software Distribution & Licensing */}
          <section className="step" id="software-distribution">
            <h2>Step 3: Software Distribution & Licensing</h2>
            <p>
              Partners receive access to software packages, license keys, and API integrations. They either resell, bundle, or implement the software for customers. Vendors may provide various pricing models: wholesale, commission-based, or subscription-based.
            </p>
            {/* <LazyLoad height={200} offset={100}>
              <picture>
                <img src={img} className="img-responsive" loading="lazy" alt="Software Distribution" height={300} width={400} />
                <source srcSet={img} type="image/png" />
                <source srcSet={img} type="image/jpeg" />
              </picture>
            </LazyLoad> */}
            <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Software Distribution"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

          </section>

          {/* Step 4: Marketing & Sales Support */}
          <section className="step" id="marketing-sales">
            <h2>Step 4: Marketing & Sales Support</h2>
            <p>
              Partners gain access to co-marketing funds, sales collateral, and promotional materials. Joint marketing campaigns and lead-sharing mechanisms are implemented. Performance tracking and sales quota evaluations help ensure success.
            </p>
            {/* <LazyLoad height={200} offset={100}>
              <picture>
                <img src={img2} className="img-responsive" loading="lazy" alt="Marketing and Sales Support" height={300} width={400} />
                <source srcSet={img2} type="image/png" />
                <source srcSet={img2} type="image/jpeg" />
              </picture>
            </LazyLoad> */}
            <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img2}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img2}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img2}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img2}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Marketing and Sales Support"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

          </section>

          {/* Step 5: Customer Support & Compliance */}
          <section className="step" id="customer-support-compliance">
            <h2>Step 5: Customer Support & Compliance</h2>
            <p>
              Partners provide first-line customer support, while the vendor assists with advanced issues. Compliance with Service Level Agreements (SLAs) and support response times is essential. Regular audits and reviews ensure quality service delivery.
            </p>
            {/* <LazyLoad height={200} offset={100}>
              <picture>
                <img src={img3} className="img-responsive" loading="lazy" alt="Customer Support and Compliance" height={300} width={400} />
                <source srcSet={img3} type="image/png" />
                <source srcSet={img3} type="image/jpeg" />
              </picture>
            </LazyLoad> */}
            <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img3}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img3}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img3}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img3}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Customer Support and Compliance"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

          </section>

          {/* Step 6: Performance Review & Growth */}
          <section className="step" id="performance-review-growth">
            <h2>Step 6: Performance Review & Growth</h2>
            <p>
              Vendors track partner performance through KPIs (e.g., sales volume, customer satisfaction). High-performing partners receive incentives, discounts, and rewards. Opportunities for scaling up to higher-tier partnerships (e.g., Gold, Platinum) are available.
            </p>
            {/* <LazyLoad height={200} offset={100}>
              <picture>
                <img src={img4} className="img-responsive" loading="lazy" alt="Performance Review and Growth" height={300} width={400} />
                <source srcSet={img4} type="image/png" />
                <source srcSet={img4} type="image/jpeg" />
              </picture>
            </LazyLoad> */}
            <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${img4}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${img4}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${img4}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${img4}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Performance Review and Growth"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

          </section>
        </div>
      </div>

      <ChatbotComponent />
    </>
  );
}

export default OurPartners;
