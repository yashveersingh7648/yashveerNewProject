import React from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

const imges = '/Images/partnerprog.webp';
const imges1 = "/Images/Eligibility.webp";
const imges2 = "/Images/PartnerResponsibilities.webp";
const imges3 = "/Images/LicensingUsage.webp";
const imges4 = '/Images/CommissionPayment.webp';
const imges5 = "/Images/MarketingBranding.webp";
const imges6 = "/Images/ConfidentialityDataProtection.webp";
const imges7 = "/Images/ComplianceLegal.webp";
const imges8 = '/Images/TerminationPolicy.webp';
const imges9 = "/Images/AmendmentsUpdates.jpg";
const imges10 = "/Images/ContactInformation.webp";

const PartnerProgramPage = () => {
  return (
    <>
    <Helmet>
  {/* SEO-Optimized Title */}
  <title>Join CipherERP Partner Program | Expand Your Business with ERP Solutions</title>

  {/* Meta Description Optimized for SEO */}
  <meta 
    name="description" 
    content="Become a CipherERP partner and unlock new business growth opportunities. Collaborate with us to offer top-tier ERP solutions and expand your market reach." 
  />

  {/* SEO-friendly Meta Keywords */}
  <meta 
    name="keywords" 
    content="CipherERP Partner Program, ERP business growth, software partnerships, ERP distribution, B2B collaboration, ERP reseller opportunities, ERP solutions"
  />

  {/* Allow indexing & following for SEO */}
  <meta name="robots" content="index, follow" />
</Helmet>

      <ScrollToTopButton />

      <div className="container-fluid">
        <div className="Partener" id='head'></div>
        <div className="partner-program-container">
          <header className="text-center">
            <h1>Partner Program with Ciphershield Technologies Pvt Ltd.</h1>
            <h2>Partner Program Policies, Terms, and Conditions</h2>
          </header>

          <section className="row mb-5">
            <div className="col-md-6 pt-5 leftpart">
              <h3>1. Introduction</h3>
              <p>
                Welcome to the Ciphershield Technologies Pvt Ltd. Partner Program. By joining our program, you agree to comply with the following policies, terms, and conditions. These terms outline the responsibilities, benefits, and expectations for both parties.
              </p>
            </div>
            <div className="col-md-6 partimg1">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges} className="img-responsive" loading="lazy" alt="Introduction to Partner Program" />
                  <source srcSet={imges} type="image/png" />
                  <source srcSet={imges} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Introduction to Partner Program"
    />
  </picture>
</LazyLoad>

            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 leftpartimg">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges1} className="img-responsive" loading="lazy" alt="Eligibility for Partner Program" />
                  <source srcSet={imges1} type="image/png" />
                  <source srcSet={imges1} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges1}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges1}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges1}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges1}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Eligibility for Partner Program"
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-md-6 pt-5">
              <h3>2. Eligibility</h3>
              <ul className="px-5">
                <li>Be a legally registered business or individual with a valid GST Number.</li>
                <li>Have experience in software distribution, digital marketing, or IT services.</li>
                <li>Maintain an active website or business platform relevant to our software.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 pt-5 leftpart">
              <h3>3. Partner Responsibilities</h3>
              <ul>
                <li>Promote and distribute our software in accordance with our branding and marketing guidelines.</li>
                <li>Provide first-level customer support to clients (where applicable).</li>
                <li>Adhere to ethical business practices and avoid misleading promotions.</li>
                <li>Keep all client and business information confidential.</li>
              </ul>
            </div>
            <div className="col-md-6 partimg2">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges2} className="img-responsive" loading="lazy" alt="Partner Responsibilities" />
                  <source srcSet={imges2} type="image/png" />
                  <source srcSet={imges2} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges2}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges2}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges2}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges2}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Partner Responsibilities"
    />
  </picture>
</LazyLoad>

            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 leftpartimg">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges3} className="img-responsive" loading="lazy" alt="Licensing & Usage Rights" />
                  <source srcSet={imges3} type="image/png" />
                  <source srcSet={imges3} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges3}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges3}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges3}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges3}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Licensing & Usage Rights"
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-md-6 pt-5">
              <h3>4. Licensing & Usage Rights</h3>
              <ul className="px-5">
                <li>Partners may resell, distribute, or integrate our software based on the licensing model selected.</li>
                <li>All intellectual property rights remain with Ciphershield Technologies Pvt Ltd.</li>
                <li>Unauthorized modifications or redistribution without consent is prohibited.</li>
              </ul>
            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 pt-5 leftpart">
              <h3>5. Commission & Payment Terms</h3>
              <ul>
                <li>Partners earn commissions based on sales performance and tier levels.</li>
                <li>Payouts are processed monthly, subject to a minimum threshold of [e.g., 1000 INR].</li>
                <li>Any chargebacks or refunds will be deducted from commissions.</li>
                <li>Partners must provide accurate payment details; Ciphershield Technologies Pvt Ltd. is not responsible for failed transactions due to incorrect information.</li>
              </ul>
            </div>
            <div className="col-md-6 partimg3">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges4} className="img-responsive" loading="lazy" alt="Commission & Payment Terms" />
                  <source srcSet={imges4} type="image/png" />
                  <source srcSet={imges4} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges4}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges4}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges4}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges4}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Commission & Payment Terms"
    />
  </picture>
</LazyLoad>

            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 leftpartimg">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges5} className="img-responsive" loading="lazy" alt="Marketing & Branding Guidelines" />
                  <source srcSet={imges5} type="image/png" />
                  <source srcSet={imges5} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges5}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges5}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges5}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges5}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Marketing & Branding Guidelines"
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-md-6 pt-5">
              <h3>6. Marketing & Branding Guidelines</h3>
              <ul className="px-5">
                <li>Partners must use approved marketing materials.</li>
                <li>Any paid advertising (PPC, social media ads) involving our brand must be pre-approved.</li>
                <li>Unauthorized claims or misrepresentation of our software will result in immediate termination.</li>
              </ul>
            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 pt-5 leftpart">
              <h3>7. Confidentiality & Data Protection</h3>
              <ul>
                <li>Partners must not disclose proprietary or confidential information about Ciphershield Technologies Pvt Ltd. or its clients.</li>
                <li>Compliance with data protection laws such as GDPR, CCPA, or other relevant regulations is mandatory.</li>
                <li>Any misuse or breach of confidentiality may result in legal action.</li>
              </ul>
            </div>
            <div className="col-md-6 partimg4">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges6} className="img-responsive" loading="lazy" alt="Confidentiality & Data Protection" />
                  <source srcSet={imges6} type="image/png" />
                  <source srcSet={imges6} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges6}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges6}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges6}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges6}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Confidentiality & Data Protection"
    />
  </picture>
</LazyLoad>

            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 leftpartimg">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges7} className="img-responsive" loading="lazy" alt="Compliance & Legal Obligations" />
                  <source srcSet={imges7} type="image/png" />
                  <source srcSet={imges7} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges7}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges7}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges7}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges7}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Compliance & Legal Obligations"
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-md-6 pt-5">
              <h3 className="px-5">8. Compliance & Legal Obligations</h3>
              <ul>
                <li>Partners must comply with all relevant local and international business regulations.</li>
                <li>Any violation of legal or ethical standards may result in termination from the program.</li>
                <li>Partners assume full responsibility for their business operations and liabilities.</li>
              </ul>
            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 pt-5 leftpart">
              <h3>9. Termination Policy</h3>
              <ul>
                <li>Either party may terminate this agreement with a 30-day written notice.</li>
                <li>Ciphershield Technologies Pvt Ltd. reserves the right to terminate partnerships immediately for violations of these terms.</li>
                <li>Upon termination, partners must cease using all marketing materials, software access, and branding elements related to our company.</li>
              </ul>
            </div>
            <div className="col-md-6 partimg5">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges8} className="img-responsive" loading="lazy" alt="Termination Policy" />
                  <source srcSet={imges8} type="image/png" />
                  <source srcSet={imges8} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges8}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges8}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges8}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges8}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Termination Policy"
    />
  </picture>
</LazyLoad>

            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 leftpartimg">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges9} className="img-responsive" loading="lazy" alt="Amendments & Updates" />
                  <source srcSet={imges9} type="image/png" />
                  <source srcSet={imges9} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges9}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges9}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges9}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges9}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Amendments & Updates"
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-md-6 pt-5">
              <h3>10. Amendments & Updates</h3>
              <ul className="px-5">
                <li>Ciphershield Technologies Pvt Ltd. reserves the right to modify these terms at any time.</li>
                <li>Partners will be notified of any significant changes via email or partner portal.</li>
                <li>Continued participation in the program constitutes acceptance of updated terms.</li>
              </ul>
            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 pt-5 leftpart">
              <h3>11. Contact Information</h3>
              <p>
                For any questions or clarifications regarding this agreement, please contact:
              </p>
              <p>
                Ciphershield Technologies Pvt Ltd.<br />
                E-Mail: <a href="mailto:support@ciphererp.com">support@ciphererp.com</a><br />
                Support: <a href="tel:+91 1204375355">+91 1204375355</a>
              </p>
            </div>
            <div className="col-md-6 partimg6">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={imges10} className="img-responsive" loading="lazy" alt="Contact Information" />
                  <source srcSet={imges10} type="image/png" />
                  <source srcSet={imges10} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${imges10}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${imges10}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${imges10}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${imges10}?w=800&h=533&fit=crop`}
      className="img-responsive"
      loading="lazy"
      alt="Contact Information"
    />
  </picture>
</LazyLoad>

            </div>
          </section>
        </div>
      </div>
      <ChatbotComponent />
    </>
  );
};

export default PartnerProgramPage;
