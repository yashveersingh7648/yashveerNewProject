// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import ChatbotComponent from "../Navbar/ChatbotComponent";
// import ScrollToTopButton from "../Navbar/ScrollToTopButton";
// import LazyLoad from "react-lazyload";

// // Define image paths
// const features = [
//  { title: "Notifications", icon: "/Images/Notifications.webp", description: "Set up alerts for stock levels, delivery dates, and more." },
//   { title: "Party Ledger", icon: "/Images/PartyLedger.jpg", description: "Manage and track financial transactions of different parties." },
//   { title: "Payment Report", icon: "/Images/PaymentReport.webp", description: "View detailed payment history and outstanding dues." },
//   { title: "Purchase System", icon: "/Images/PurchaseSystem.webp", description: "Streamline your procurement and supplier management." },
//   { title: "Sale FAT & SNF", icon: "/Images/SaleFATSNF.jpg", description: "Monitor FAT & SNF levels in sales for quality assurance." },
//   { title: "Excel Payment Sheet", icon: "/Images/ExcelPaymentSheet.jpg", description: "Export and manage payment records in Excel format." },
//   { title: "Milk Purchase Report", icon: "/Images/MilkPurchaseReport.png", description: "Get detailed insights into milk purchase trends." },
//   { title: "Accounting Report", icon: "/Images/AccountingReport.jpg", description: "Keep track of financial transactions and summaries." },
//   { title: "15 Gram Kat System", icon: "/Images/GramKatSystem.png", description: "Standardized weight deduction system for accuracy." },
//   { title: "Dairy Stock Management", icon: "/Images/Dairy-Stock-Management.webp", description: "Monitor milk, butter, cheese, and other products in real-time." },
//   { title: "Order Management", icon: "/Images/Order-Management.webp", description: "Efficiently track customer orders and delivery schedules." },
//   { title: "Milk Supply Chain Tracking", icon: "/Images/supply-chain.webp", description: "Ensure the freshness and traceability of every batch." },
//   { title: "Employee Management", icon: "/Images/Employee-Management.webp", description: "Track employee shifts, tasks, and performance." },
//   { title: "Financial Overview", icon: "/Images/Financial-Overview.webp", description: "Monitor your profits, losses, and financial health in real-time." },
//   { title: "Customer Feedback", icon: "/Images/Customer-Feedback.webp", description: "Get valuable insights to improve your products." },
 
//   // { title: "Multiple Locations & Branches", icon: "/multilocation.webp", description: "Manage operations across multiple locations seamlessly." }
// ];

// const DairyManagementFeatures = () => {
//   return (
//     <>
//       <Helmet>
//   {/* SEO-Optimized Title */}
//   <title>Dairy Business Management Software | CipherERP Dairy Solutions</title>

//   {/* Optimized Meta Description */}
//   <meta 
//     name="description" 
//     content="Optimize dairy business operations with CipherERP's Dairy Management software. Track stock, manage orders, generate payment reports, and automate supply chain processes. Enhance dairy business efficiency with automation and real-time insights!" 
//   />

//   {/* SEO-Optimized Keywords */}
//   <meta 
//     name="keywords" 
//     content="Dairy Business Management, CipherERP, stock tracking, order management, dairy software, payment reports, customer billing, FAT SNF tracking, multi-branch management, ERP dairy solutions, inventory tracking, supply chain automation" 
//   />

//   {/* Ensure search engines index and follow links */}
//   <meta name="robots" content="index, follow" />
// </Helmet>


//       <ScrollToTopButton />

//       <div className="container-fluid">
//         <section className="hero-section3 text-center">
//           <h1>Dairy Management System: Streamline Your Dairy Business</h1>
//           <p>Streamline operations with our comprehensive dairy management platform.</p>
//           <Link className="nav-sign" to="/SignUp">
//             <button className="btn btn-primary">Get Started</button>
//           </Link>
//         </section>

//         {features.map((feature, index) => (
//           <section className="feature-section" key={index}>
//             <h2 className="text-center">{feature.title}</h2>
//             <div className="feature-cards text-center">
//               <div className="feature-card">
//                 <LazyLoad height={200} offset={100}>
//                   <picture>
//                     <source srcSet={`${feature.icon}?w=800&h=533&fit=crop`} type="image/webp" />
//                     <source srcSet={`${feature.icon}?w=800&h=533&fit=crop`} type="image/png" />
//                     <source srcSet={`${feature.icon}?w=800&h=533&fit=crop`} type="image/jpeg" />
//                     <img src={`${feature.icon}?w=800&h=533&fit=crop`} className="img-responsive" loading="lazy" alt={feature.title} height={300} width={500} />
//                   </picture>
//                 </LazyLoad>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>

//       <ChatbotComponent />
//     </>
//   );
// };

// export default DairyManagementFeatures;



import React from 'react'

// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";
import LazyLoad from "react-lazyload";


const SubscriptionBasedPricing =  '/Images/Notifications.webp';
const price2 ='/Images/PartyLedger.jpg';
const price3 = '/Images/PaymentReport.webp';
const price4 = '/Images/PurchaseSystem.webp';

const price5 ='/Images/SaleFATSNF.jpg';
const price6 = '/Images/ExcelPaymentSheet.jpeg';
const price7 = '/Images/MilkPurchaseReporting.jpg';


const price8 ='/Images/AccountingReport.jpg';
const price9 = '/Images/GramKatSystem.jpg';
const price10 = '/Images/Dairy-Stock-Management.webp';


const price11 ='/Images/Order-Management.webp';
const price12 = '/Images/supply-chain.webp';
const price13 = '/Images/EfficientEmployeeManagement.jpg';
const price15 = '/Images/CustomerFeedbackDairy.jpg';
const price16 = '/Images/multilocation.webp';

const DairyManagementFeatures = () => {
  return (
    <>
     <Helmet>
   {/* SEO-Optimized Title */} 
     <title>Dairy Business Management Software | CipherERP Dairy Solutions</title>

  {/* Optimized Meta Description */}
 <meta 
    name="description" 
    content="Optimize dairy business operations with CipherERP's Dairy Management software. Track stock, manage orders, generate payment reports, and automate supply chain processes. Enhance dairy business efficiency with automation and real-time insights!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Dairy Business Management, CipherERP, stock tracking, order management, dairy software, payment reports, customer billing, FAT SNF tracking, multi-branch management, ERP dairy solutions, inventory tracking, supply chain automation" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>
<ScrollToTopButton />
<ChatbotComponent />

    <div className="container-fluid">
    <section className="hero-section3 " id='head'>
           <h1>Dairy Management System: Streamline <br/> Your Dairy Business</h1>
          <p>Streamline operations with our comprehensive dairy management <br/>platform.</p>
           <a className="nav-sign" href="/SignUp">
            <button className="btn btn-primary Darybtn">Get Started</button>
          </a>
        </section>
      <div className="textcontain">
              <h2 className="text-center">Efficient Dairy Management with CipherERP</h2>
              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
         
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
                  <h3>Stay Updated with Real-Time Notifications</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Dairy Management System keeps you informed with real-time notifications, ensuring seamless dairy operations. Receive instant alerts for low stock levels, upcoming deliveries, supplier payments, and system updates via email, SMS, or in-app notifications.

For instance, if milk stock drops below a set threshold, the system instantly notifies you, enabling timely restocking. Likewise, automated reminders for payments and deliveries help streamline operations, reducing risks and improving efficiency. Stay ahead in dairy business management with CipherERP&#39;s smart notification system.</p>
                </div>
              </div>
      
              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
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
                  <h3>Simplified Financial Tracking with Party Ledger</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Party Ledger feature streamlines financial management by centralizing all transactions with suppliers, customers, and other stakeholders. Easily track outstanding balances, payment histories, and due dates, ensuring accuracy and transparency in your records.

With real-time updates, monitor cash flow, generate detailed reports, and reconcile accounts seamlessly. Whether managing milk supplier payments or tracking customer invoices, the Party Ledger automates financial tracking, minimizes errors, and enhances business efficiency. Stay financially organized with CipherERP&#39;s smart ledger system. </p>
                </div>
              </div>
      
              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
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
                  <h3>Efficient Payment Tracking with CipherERP&#39;s Payment Report</h3>
                  <p className="text-justify">
                  The Payment Report feature in CipherERP&#39;s Dairy Management System provides a comprehensive view of all financial transactions, including received payments and outstanding dues. It enables dairy businesses to track transactions from vendors, farmers, and customers with real-time accuracy. Payments are categorized by date, party, and transaction mode, ensuring seamless account reconciliation. With automated calculations and export options (Excel/PDF), users can generate detailed reports effortlessly. This feature enhances financial transparency, minimizes errors, and improves cash flow management, helping businesses make informed financial decisions.</p>
                </div>
              </div>
      
              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
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
                  <h3>Streamlined Dairy Procurement with CipherERP&#39;s Purchase System</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Purchase System optimizes dairy procurement by automating supplier transactions and inventory management. It efficiently tracks milk purchases, vendor payments, and stock levels to ensure timely replenishment. Businesses can analyze purchase trends, manage supplier contracts, and generate insightful reports for better financial planning. Integrated with accounting modules, it simplifies expense tracking and cost analysis. Real-time data and automated alerts prevent shortages, reduce manual errors, and enhance overall supply chain efficiency, making dairy operations more seamless and cost-effective. </p>
                </div>
              </div>

              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price5}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price5}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price5}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Accurate FAT & SNF Sale Management with CipherERP</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Sale FAT & SNF system ensures precise tracking of Fat and Solids-Not-Fat (SNF) content in milk sales, enabling fair pricing based on quality. This automated system streamlines calculations, generates detailed reports, and enhances transaction transparency with farmers and buyers. Real-time monitoring supports quality control, regulatory compliance, and customer trust. By optimizing pricing strategies and ensuring standardization, this feature boosts profitability and maintains high-quality dairy product standards, making operations more efficient and reliable. </p>
                </div>
              </div>


              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price6}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price6}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price6}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Efficient Payment Management with Excel Payment Sheet</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Excel Payment Sheet feature streamlines dairy financial management by organizing payment records in a structured format. It enables easy tracking of transactions, outstanding dues, and payment histories with automated calculations for accuracy. Users can generate detailed financial reports for better decision-making while minimizing manual errors. Seamless integration with accounting software ensures transparency and efficiency, helping dairy businesses maintain clear financial records and optimize payment processes effortlessly. </p>
                </div>
              </div>




              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
              
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price7}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price7}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price7}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Streamlined Milk Purchase Reporting for Dairy Businesses</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Milk Purchase Report feature offers comprehensive insights into milk procurement, tracking supplier transactions, quantities, and costs with precision. It records key details like purchase dates, fat and SNF content, and total payments, ensuring transparency and accuracy. Automated data processing minimizes discrepancies, optimizes supplier relationships, and enhances financial record-keeping. By analyzing procurement trends, dairy businesses can make informed purchasing decisions, streamline operations, and improve overall efficiency and profitability.</p>
                </div>
              </div>




              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
                
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price8}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price8}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price8}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Comprehensive Accounting Report for Dairy Businesses</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Accounting Report feature enables dairy businesses to manage financial transactions, income, and expenses with accuracy. It provides detailed records of sales, purchases, payments, and outstanding dues, ensuring transparency in financial management. With automated calculations, businesses can effortlessly generate balance sheets, profit and loss statements, and tax reports. This feature simplifies bookkeeping, enhances compliance, and supports informed financial decision-making, helping dairy owners maintain profitability and streamline accounting processes efficiently. </p>
                </div>
              </div>


              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price9}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price9}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price9}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Accurate 15 Gram Kat System for Dairy Transactions</h3>
                  <p className="text-justify">
                  CipherERP&#39;s 15 Gram Kat System ensures standardized weight deductions in dairy transactions, maintaining accuracy and fairness. This automated system deducts 15 grams per liter to account for standard measurement adjustments, preventing discrepancies in milk procurement. It helps dairy businesses maintain consistency, avoid financial losses, and build trust with suppliers. By eliminating manual errors and improving record-keeping, this feature ensures smooth financial settlements between farmers and dairy processors, enhancing operational efficiency. </p>
                </div>
              </div>


              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price10}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price10}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price10}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Efficient Dairy Stock Management for Optimal Inventory Control</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Dairy Stock Management system enables real-time tracking of milk, butter, cheese, and other dairy products, ensuring optimal inventory control and reduced wastage. Automated stock tracking helps businesses manage procurement, storage, and distribution seamlessly. The system provides insights into stock levels, expiry dates, and demand trends, allowing better decision-making. By maintaining accurate records, it prevents shortages, overstocking, and financial losses, ensuring smooth operations and improved profitability in dairy businesses. </p>
                </div>
              </div>


              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
                
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price11}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price11}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price11}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3> Efficient Order Management for Seamless Dairy Operations</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Order Management system streamlines the entire order process, from customer requests to final delivery. It ensures accurate tracking, efficient order fulfillment, and timely dispatch, reducing errors and optimizing inventory. Businesses can manage bulk orders, recurring deliveries, and special requests effortlessly. With real-time order status updates, automated invoicing, and integrated payment processing, dairy businesses can enhance customer satisfaction, boost productivity, and achieve smoother supply chain operations for sustained growth. </p>
                </div>
              </div>



              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price12}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price12}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price12}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3> Optimized Milk Supply Chain Tracking for Quality Assurance</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Milk Supply Chain Tracking system ensures real-time monitoring of milk collection, transportation, storage, and distribution, maintaining freshness and safety. It enhances traceability, prevents spoilage, and ensures compliance with quality standards. Automated tracking minimizes errors, boosts transparency, and optimizes logistics for efficient deliveries. With detailed reports and instant alerts, dairy businesses can reduce waste, improve operational efficiency, and maintain product integrity, ensuring high-quality milk reaches consumers on time.</p>
                </div>
              </div>

              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price13}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price13}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price13}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Efficient Employee Management for Dairy Operations</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Employee Management system optimizes workforce operations by tracking attendance, shifts, tasks, and performance. It automates payroll processing, ensures compliance with labor laws, and enhances scheduling efficiency. With real-time insights, dairy businesses can monitor productivity, assign roles, and evaluate performance seamlessly. Automated record-keeping minimizes manual effort, reducing errors and improving accuracy. A centralized dashboard streamlines leave management, salary processing, and employee records, ensuring smooth operations and a more productive workforce in the dairy industry. </p>
                </div>
              </div>

              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
                
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price15}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price15}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price15}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Customer Feedback for Dairy Business Growth</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Customer Feedback feature enables dairy businesses to gather, analyze, and act on customer opinions to enhance service quality. It collects insights on products, deliveries, and overall experience, helping businesses identify areas for improvement. Automated reports highlight trends and customer concerns, allowing for proactive issue resolution. Real-time feedback analysis boosts customer satisfaction, strengthens brand loyalty, and drives continuous improvement. By addressing customer needs efficiently, dairy businesses can refine their offerings and build lasting relationships. </p>
                </div>
              </div>


              <div className="row d-flex">
                <div className="col-xl-6 pricinginner-img">
               
      <LazyLoad height={200} offset={100}>
        <picture>
          {/* PNG image for browsers */}
          <source srcSet={`${price16}?w=500&fit=crop`} type="image/png" />
          {/* JPEG image for fallback */}
          <source srcSet={`${price16}?w=500&fit=crop`} type="image/jpeg" />
          {/* img tag for browsers that don't support <picture> */}
          <img
            src={`${price16}?w=500&fit=crop`}
            className="img-responsive my-5"
            loading="lazy"
            alt="Finance images"
          
          />
        </picture>
      </LazyLoad>
      
      
                </div>
                <div className="col-xl-6 pricinginner-text">
                  <h3>Efficient Management of Multiple Locations & Branches</h3>
                  <p className="text-justify">
                  CipherERP&#39;s Multiple Locations & Branches feature enables seamless coordination across all dairy outlets with real-time data synchronization. It optimizes stock management, sales tracking, and employee operations, ensuring consistency in pricing and quality. Automated reporting provides insights into each branch’s performance, aiding data-driven decision-making. By streamlining logistics and enhancing control over inventory and financials, dairy businesses can expand effortlessly while maintaining operational efficiency and service excellence across multiple locations.</p>
                </div>
              </div>



            </div>
    </div>
    </>
    
  )
}

export default DairyManagementFeatures;
