import React from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "./Navbar/ChatbotComponent";  // If Navbar is in the same folder
import ScrollToTopButton from "./Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define image paths using process.env.PUBLIC_URL
const School = '/Images/School_banner.webp';
const School1 = '/Images/Schoolimg.webp';
const Feture1 = '/Images/Fetures1.webp';
const Feture2 = '/Images/Fetures2.webp';
const Feture3 = '/Images/Fetures3.webp';
const Feture4 = '/Images/Fetures4.webp';
const Feture5 = '/Images/Fetures5.webp';
const Feture6 = '/Images/Fetures6.webp';
const Feture7 = '/Images/Fetures7.webp';
const Feture8 = '/Images/Fetures8.webp';
const cardgif1 = '/Images/cardgif1.webp';
const cardgif2 ='/Images/cardgif2.webp';
const cardgif3 = '/Images/cardgif3.webp';
const cardgif4 = '/Images/cardgif4.webp';
const cardgif5 = '/Images/cardgif5.webp';
const cardgif6 = '/Images/cardgif6.webp';
const schoolicon1 = '/Images/schoole.webp';
const schoolicon2 = '/Images/Collegesese.webp';
const schoolicon3 = '/Images/Universities__1.webp';
const schoolicon4 = '/Images/Multi-campus.webp';

// import icon1 from '../Images/TransferCertificate.png';
// import icon2 from '../Images/LeavingCertificate.png';
// import icon3 from '../Images/TuitionFeeCertificate.png';
// import NoDueCertificate from '../Images/NoDueCertificate.png';
// import icon5 from '../Images/StrengthReport.png';
// import icon6 from '../Images/Category-wiseReport.png';
// import icon7 from '../Images/Student_Profile.png';
// import icon8 from '../Images/DropoutStudentList.png';
// import icon9 from '../Images/ProspectusSalesReport.png';
// import icon10 from '../Images/FeeOutstandingReport.png';
// import icon11 from '../Images/StudentandClassWise.png';
// import icon12 from '../Images/BonafideCertificate.png';
// // import icon13 from '../Images/TransferCertificateRegister.png';
// import StrengthReport from '../Images/StrengthReport.png';
// import CategoryWiseReport from '../Images/Category-wiseReport.png';
// import StudentProfile from '../Images/Student_Profile.png';
// import DropoutStudentList from '../Images/DropoutStudentList.png';
// import ProspectusSalesReport from '../Images/ProspectusSalesReport.png';
// import FeeOutstandingReport from '../Images/FeeOutstandingReport.png';
// import StudentAndClassWise from '../Images/StudentandClassWise.png';
// import BonafideCertificate from '../Images/BonafideCertificate.png';
// import TransferCertificateRegister from '../Images/TransferCertificateRegister.png';



const SchooleERP = () => {
  return (
    <>

<Helmet>
    {/* Optimized Title */}
    <title>Best School ERP Software | Student & Fee Management System</title>

    {/* Optimized Meta Description */}
    <meta 
      name="description" 
      content="Boost school efficiency with CipherERP's School ERP software. Manage student data, fee tracking, attendance, and academic records with ease." 
    />

    {/* Optimized Keywords */}
    <meta 
      name="keywords" 
      content="School ERP, school management software, student data system, academic ERP, education management, fee tracking, CipherERP" 
    />

    {/* Open Graph for Better Social Sharing */}
    <meta property="og:title" content="Best School ERP Software | CipherERP" />
    <meta property="og:description" content="Enhance school operations with CipherERP's advanced School ERP software. Optimize student management, fees, and academics." />
    
    {/* Twitter Card for SEO */}
    <meta name="twitter:title" content="Best School ERP Software | CipherERP" />
    <meta name="twitter:description" content="All-in-one School ERP system for seamless education management, student records, and fee tracking." />

    {/* Robots Meta Tag for Indexing */}
    <meta name="robots" content="index, follow" />
</Helmet>

<ScrollToTopButton/>

<div className='container-fluid'>
  <div className='Bannerimg' id='header2'>
    {/* <LazyLoad height={200} offset={100}>
      <picture>
        <img src={School} className='responsive' loading="lazy" alt="School images" />
        <source srcSet={School} type="image/png" />
        <source srcSet={School} type="image/jpeg" />
      </picture>
    </LazyLoad> */}
    {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${School}?w=400&h=250&fit=crop&fm=avif 400w,
               ${School}?w=800&h=500&fit=crop&fm=avif 800w,
               ${School}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    <source 
      srcSet={`${School}?w=400&h=250&fit=crop&fm=webp 400w,
               ${School}?w=800&h=500&fit=crop&fm=webp 800w,
               ${School}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    <source 
      srcSet={`${School}?w=400&h=250&fit=crop&fm=png 400w,
               ${School}?w=800&h=500&fit=crop&fm=png 800w,
               ${School}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    <source 
      srcSet={`${School}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${School}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${School}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    <img 
      src={`${School}?w=800&h=500&fit=crop`} 
      className="responsive lazy-img" 
      loading="lazy"  
      alt="Modern School Infrastructure and Facilities"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad> */}

  </div>
</div>

<div className='container-fluid'>
  <div className='row mt-5 mb-5 school-section'>
    <div className='col-sm-6 col-md-6 col-xl-6 schooltext'>
      <h1 className='pt-5 px-3'>Education Management Powered by Cipher ERP Solutions</h1>
      <p className='pt-3 fs-4'>Cipher ERP (Enterprise Resource Planning) system offers a comprehensive solution designed to streamline and optimize academic and administrative processes within educational institutions. From kindergarten to university, this tailored ERP system helps manage everything from student enrollment to fee management, attendance tracking, and academic performance evaluation.</p>
    </div>
    <div className='col-sm-6 col-md-6 col-xl-6 schoolimg'>
    <LazyLoad height={200} offset={100}>
  <picture>
    {/* Provide appropriate srcset for different image formats and sizes */}
    <source 
      srcSet={`${School1}?w=800&h=600&fit=crop`} 
      type="image/jpeg" 
      media="(min-width: 800px)" 
    />
    <source 
      srcSet={`${School1}?w=400&h=300&fit=crop`} 
      type="image/jpeg" 
      media="(max-width: 799px)" 
    />
    <img 
      src={`${School1}?w=600&h=400&fit=crop`} 
      className="img-responsive pt-3" 
      loading="lazy" 
      alt="School images" 
    />
  </picture>
</LazyLoad>
      {/* <LazyLoad height={200} offset={100}>
        <picture>
          <img src={School1} className='img-responsive pt-3' loading="lazy" alt="School images" />
          <source srcSet={School1} type="image/png" />
          <source srcSet={School1} type="image/jpeg" />
          
        </picture>
      </LazyLoad> */}
    </div>
  </div>

  <div className="Allfetures-section-rapperstart d-flex" id="InvoiceBilling">
    <div className="row Allfetures-sectionstart d-flex">
      <div className="col-lg-5 mb-5">
        <h2>Student Enrollment & Admission</h2>
        <p className='text-justify'>
          <b>Online Enrollment:</b> Simplifies the process of student registration with online forms, document uploads, and automated approval workflows.<br/>
          <b>Application Tracking:</b> Track each student's application status in real-time, from submission to acceptance.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Student Information Management</h2>
        <p className='text-justify'>
          <b>Centralized Database:</b> Store all student data, including personal details, academic records, attendance, and contact information in one place.<br />
          <b>Easy Access:</b> Allow teachers and administrative staff to access student information with just a few clicks, ensuring data is always up-to-date and accessible.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Attendance Management</h2>
        <p className='text-justify'>
          <b>Automated Attendance:</b> Track daily student attendance using RFID, biometric systems, or manual entry.<br/>
          <b>Notifications:</b> Send attendance reports and alerts to parents and guardians when attendance falls below acceptable levels.
        </p>
      </div>

      <div className="col-lg-5 mb-5">
        <h2>Timetable & Scheduling</h2>
        <p className='text-justify'>
          <b>Class Scheduling:</b> Easily create, manage, and update class schedules for students and teachers, avoiding conflicts.<br/>
          <b>Examination Schedule:</b> Automatically generate exam schedules and notify students of exam dates and locations.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Academic Performance Management</h2>
        <p className='text-justify'>
          <b>Progress Tracking:</b> Track student performance across semesters, subjects, and assessments.<br/>
          <b>Detailed Reports:</b> Generate academic reports that provide insights into students' strengths, weaknesses, and progress.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Fee Management</h2>
        <p className='text-justify'>
          <b>Automated Invoicing:</b> Generate fee invoices automatically based on fee structures, course enrollment, and student details.<br/>
          <b>Payment Tracking:</b> Track fee payments in real-time and send reminders for outstanding payments.
        </p>
      </div>
    </div>
    <div className="col-sm-4 col-md-4 inner">
      <h3><b>Student Management System</b></h3>  
      <p>It streamlines and automates administrative tasks, improves communication between students, teachers, and parents, and helps administrators make data-driven decisions to improve institutional performance.</p>
    </div>
  </div>

  <div className="Allfetures-section-rapperstart d-flex" id="InvoiceBilling">
    <div className="row Allfetures-sectionstart d-flex">
      <div className="col-lg-5 mb-5">
        <h2>Fee Structure Management</h2>
        <p className='text-justify'>
          <b>Customizable Fee Structures:</b> Set up different fee categories (tuition, examination, library, etc.) and define fee amounts for each student based on grade, course, or department.<br/>
          <b>Multiple Payment Modes:</b> Accept various payment methods including cash, cheque, online payments, or bank transfers.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Student Information Management</h2>
        <p className='text-justify'>
          <b>Centralized Database:</b> Store all student data, including personal details, academic records, attendance, and contact information in one place.<br />
          <b>Easy Access:</b> Allow teachers and administrative staff to access student information with just a few clicks, ensuring data is always up-to-date and accessible.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Payment Tracking</h2>
        <p className='text-justify'>
          <b>Real-Time Payment Tracking:</b> Monitor payments in real time and track any outstanding fees.<br/>
          <b>Payment Receipts:</b> Generate and send receipts to students/parents after every payment.
        </p>
      </div>

      <div className="col-lg-5 mb-5">
        <h2>Online Payment Gateway Integration</h2>
        <p className='text-justify'>
          <b>Secure Online Payment Options:</b> Integrate with payment gateways to allow students and parents to pay fees online using debit/credit cards, net banking, or mobile wallets.<br/>
          <b>Instant Payment Updates:</b> Payments made online are instantly updated in the system, reducing the time required for manual reconciliation.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Fee History & Reports</h2>
        <p className='text-justify'>
          <b>Payment History:</b> Maintain a comprehensive record of each student’s payment history, including amounts paid, outstanding balance, and payment methods.<br/>
          <b>Detailed Reports:</b> Generate detailed financial reports and statements for students, including overdue fees, partial payments, and total fee amounts.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Bulk Fee Management</h2>
        <p className='text-justify'>
          <b>Batch Fee Collection:</b> Collect fees from large groups of students at once (e.g., class or grade-wise).<br/>
          <b>Bulk Fee Receipt Generation:</b> Automatically generate and send receipts for all students who have paid within a specified period.
        </p>
      </div>
    </div>
    <div className="col-sm-4 col-md-4 inner">
      <h3><b>Fee Management System</b></h3>  
      <p>It enables schools, colleges, and universities to manage all aspects of fee transactions effectively, from invoice generation to payment tracking, ensuring a streamlined process for both administrators and students.</p>
    </div>
  </div>

  <div className="Allfetures-section-rapperstart d-flex" id="InvoiceBilling">
    <div className="row Allfetures-sectionstart d-flex">
      <div className="col-lg-5 mb-5">
        <h2>Document Creation</h2>
        <p className='text-justify'>
          This is the initial stage where documents are created, whether manually or digitally. This may include reports, invoices, contracts, emails, or other types of documents.<br/>
          It can involve word processing software (e.g., Microsoft Word), spreadsheets, presentations, or specialized applications.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Storage and Organization</h2>
        <p className='text-justify'>
          Documents need to be stored in a structured way to ensure easy access. This can involve physical filing cabinets, but modern systems are more likely to store documents digitally using a Document Management System (DMS).<br/>
          A DMS uses folders, metadata, and tags to organize documents in a way that allows users to find what they need quickly.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Automation and Workflow</h2>
        <p className='text-justify'>
          Automation helps streamline document-centric tasks such as approval workflows, notifications, and routing.<br/>
          For example, documents may need to go through a series of approval steps before being finalized or shared with others. Workflow automation tools can route documents automatically to the appropriate stakeholders.
        </p>
      </div>

      <div className="col-lg-5 mb-5">
        <h2>Version Control</h2>
        <p className='text-justify'>
          Version control allows users to track different iterations of a document, ensuring that changes are documented and previous versions are accessible.<br/>
          It helps prevent confusion or errors when multiple users are working on a document simultaneously.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Integration with Other Systems</h2>
        <p className='text-justify'>
          Modern document management systems can integrate with other enterprise systems, such as Enterprise Resource Planning (ERP) or Customer Relationship Management (CRM) systems.<br/>
          This ensures that documents are easily accessible within the context of other business processes.
        </p>
      </div>
      <div className="col-lg-5 mb-5">
        <h2>Indexing and Metadata</h2>
        <p className='text-justify'>
          Indexing involves tagging documents with metadata (e.g., author, document type, date created, keywords) to make searching easier.<br/>
          Metadata enables users to categorize and locate documents based on these attributes, improving searchability and organization.
        </p>
      </div>
    </div>
    <div className="col-sm-4 col-md-4 inner">
      <h3><b>Document Management</b></h3>
      <p>The primary goal is to improve efficiency, security, and compliance by maintaining a well-organized system for accessing and controlling documents throughout their lifecycle.</p>
    </div>
  </div>


<div className='container'>
<div className="row School-section-inner d-flex" >
  <div className="col-sm-4 col-md-4 col-lg-4 Pricing-section-innerbox">
  
  <div className="scrlerimg">
      <div className="scrolinner">
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture1} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture1} type="image/png" />
                   <source srcSet={Feture1} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture1}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture1}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture1}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture1}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture1}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture1}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture1}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture1}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture1}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture1}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture1}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture1}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture1}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Modern School Facilities - Classroom and Infrastructure"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture1} alt='School images' loading="lazy" className="img-responsive"/> */}
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture2} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture2} type="image/png" />
                   <source srcSet={Feture2} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture2}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture2}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture2}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture2}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture2}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture2}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture2}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture2}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture2}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture2}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture2}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture2}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture2}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Modern School Infrastructure and Facilities"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture2} alt='School images' loading="lazy" className="img-responsive"/> */}
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture3} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture3} type="image/png" />
                   <source srcSet={Feture3} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture3}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture3}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture3}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture3}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture3}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture3}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture3}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture3}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture3}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture3}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture3}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture3}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture3}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Smart Learning Facilities in Schools"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture3} alt='School images' loading="lazy" className="img-responsive"/> */}
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture4} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture4} type="image/png" />
                   <source srcSet={Feture4} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture4}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture4}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture4}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture4}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture4}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture4}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture4}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture4}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture4}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture4}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture4}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture4}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture4}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Smart Learning Infrastructure in Schools"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

    {/* <img src={Feture4} alt='School images' loading="lazy" className="img-responsive"/> */}
    {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture6} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture6} type="image/png" />
                   <source srcSet={Feture6} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture6}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture6}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture6}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture6}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture6}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture6}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture6}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture6}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture6}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture6}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture6}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture6}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture6}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Smart Learning Facilities in Schools"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture6} alt='School images' loading="lazy" className="img-responsive"/> */}
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture7} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture7} type="image/png" />
                   <source srcSet={Feture7} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture7}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture7}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture7}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture7}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture7}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture7}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture7}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture7}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture7}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture7}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture7}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture7}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture7}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Smart Learning Features for Schools"  
      width={800} 
      height={500}
 
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture7} alt='School images' loading="lazy" className="img-responsive"/> */}
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture8} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture8} type="image/png" />
                   <source srcSet={Feture8} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture8}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture8}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture8}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture8}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture8}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture8}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture8}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture8}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture8}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture8}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture8}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture8}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture8}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Smart Features for Modern Schools - Enhance Learning with Technology"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture8} alt='School images' loading="lazy" className="img-responsive"/> */}
      {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={Feture5} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={Feture5} type="image/png" />
                   <source srcSet={Feture5} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${Feture5}?w=400&h=250&fit=crop&fm=avif 400w,
               ${Feture5}?w=800&h=500&fit=crop&fm=avif 800w,
               ${Feture5}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${Feture5}?w=400&h=250&fit=crop&fm=webp 400w,
               ${Feture5}?w=800&h=500&fit=crop&fm=webp 800w,
               ${Feture5}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${Feture5}?w=400&h=250&fit=crop&fm=png 400w,
               ${Feture5}?w=800&h=500&fit=crop&fm=png 800w,
               ${Feture5}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${Feture5}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${Feture5}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${Feture5}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${Feture5}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Modern School ERP System - Streamline Learning & Management"  
      width={800} 
      height={500}
    />
  </picture>
</LazyLoad>

      {/* <img src={Feture5} alt='School images' loading="lazy" className="img-responsive"/> */}
</div>
    </div>

  </div>


 
  <div className="col-sm-8 col-md-8 col-lg-8  Pricing-section-scroller">
    <div className="scrler">
      <div className="scrol">
        <h4>Certificate Management</h4>
        <p>Certificate Management refers to the processes involved in creating, storing,<br/> distributing, maintaining, and revoking digital certificates that are used to<br/> ensure secure communication and authentication in computer networks. <br/>Digital certificates are essential in establishing trust and security between<br/> parties, especially in contexts like secure website communication (HTTPS),<br/> email encryption, and client-server authentication.</p>
   
     
        <h4>Utility Tools</h4>
        <p>These tools integrate different aspects of school management, such as<br/> student records, attendance, exams, fees, and communication, into one<br/> centralized platform. The utility tools in a school ERP system are essential <br/>for improving efficiency, ensuring smooth operations, and providing valuable<br/> insights for better decision-making.</p>
   
      
<h4>Student Registration</h4>
<p>A Student Registration ERP (Enterprise Resource Planning) system is<br/> an integrated software solution that simplifies and automates the process<br/> of registering students for courses, managing academic information, handling<br/> payments, and organizing the overall enrollment process in educational <br/>institutions.</p>

        <h4>Auto Admission Fee Due & Receipt</h4>
        <p>An Auto Admission Fee Due & Receipt ERP system is a module or integrated <br/>part of a Student Management ERP system that automates the collection,<br/> tracking, and receipt generation for admission-related fees.<br/> It helps educational institutions manage their fee structure, notify students <br/>of pending payments, and generate receipts without <br/>manual intervention. </p>
   
        <h4>installment scheduling for regular fee,</h4>
        <p>Installment Scheduling for Regular Fee in the context of an ERP system like<br/> ChiperERP refers to the functionality that allows educational institutions<br/> to manage and track fee payments over time, enabling students to pay<br/> their regular fees in installments (instead of lump sum payments). <br/>This is especially beneficial for institutions offering long-term programs <br/>where fees can be high.</p>
    
<h4>Transport Fee, Hostel Fee etc.</h4>
<p>In ChiperERP (or similar ERP systems), transport fees, hostel fees, and other <br/> fees like library fees, examination fees, etc., are essential components that<br/> need to be managed efficiently. These fees are typically part of the institution<br/> overall fee structure and can be handled with specific features in the ERP <br/>system. </p>


<h4>Advance Fee/ Late Fine Management.</h4>
<p>Advance Fee and Late Fine Management in ERP involves automating the<br/> processes associated with students making payments ahead of<br/> time (advance fee) and applying penalties for late payments (late fine). <br/>This functionality ensures smooth financial operations, helps manage fee<br/> collections efficiently, and maintains transparency in the financial processes <br/>of educational institutions.</p>


<h4>Student & Class Wise Fee Bill Printing.</h4>
<p>Student and Class-Wise Fee Bill Printing in ERP allows educational institutions <br/>to generate and print fee bills based on individual students or entire classes. <br/>This feature streamlines fee management and ensures that all students <br/>receive clear, accurate fee bills for their dues, including tuition, hostel,<br/> transport, and any other related fees.</p>

<h4>Fee Reminder Letter (Student & Class-Wise)</h4>
<p>Fee Reminder Letter (Student & Class-Wise) in ERP is an essential feature that <br/>allows educational institutions to send automatic reminders to students<br/> regarding their fee payments. These reminders can be sent to students<br/> who have outstanding fees or are approaching their due date. The system <br/>can generate reminders both for individual students and entire classes, <br/>saving time and reducing the administrative burden.</p>

<h4>
Fee Outstanding Letter (Student & Class-Wise)</h4>
<p>Fee Outstanding Letter (Student & Class-Wise) in ERP is a feature that helps<br/> educational institutions manage and communicate with students or their<br/> guardians regarding overdue or unpaid fees. These letters are generated<br/> automatically by the ERP system and can be customized for individual <br/>students or for an entire class. The outstanding fee letter acts as an official <br/>reminder and can be sent to ensure timely payment of dues.</p>


<h4>Import Tools</h4>
<p>Import Tools refer to software tools or features that assist with the process<br/> of importing data from one system or platform into another. These tools<br/> are often used in enterprise resource planning (ERP) systems, databases,<br/> and business software to facilitate the seamless transfer of data. Import tools<br/> are designed to support the migration or integration of data<br/> from various formats such as CSV, Excel, XML, JSON, or databases like<br/> MySQL, SQL Server, and others.</p>
    </div>
  </div>
  </div>
  </div>
</div>


<div className='container'>
    <div className='row d-flex cardhover'>
        <div className='col-sm-4'>
        <div className="overlay-container"> 
        {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={cardgif1} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={cardgif1} type="image/png" />
                   <source srcSet={cardgif1} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source srcSet={cardgif1} type="image/avif" />

    {/* WebP Format for Better Performance */}
    <source srcSet={cardgif1} type="image/webp" />

    {/* Default img for unsupported browsers */}
    <img 
      src={cardgif1} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="Interactive School ERP Features"  
      width={500} 
      height={300}
 
    />
  </picture>
</LazyLoad>

        {/* <img src={cardgif1} alt='School images' loading="lazy" className="img-responsive"/> */}

        <div className="top-bottom">
            <h5> Prospectus Sales and Registration </h5>
            <p>In modern ERP systems, prospectus sales and registration functionalities are often integrated to provide a streamlined experience for both institutions and students.</p>
        </div> 
    </div>
        </div>

        <div className='col-sm-4'>
        <div className="overlay-container"> 
        {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={cardgif2} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={cardgif2} type="image/png" />
                   <source srcSet={cardgif2} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${cardgif2}?w=400&h=250&fit=crop&fm=avif 400w,
               ${cardgif2}?w=800&h=500&fit=crop&fm=avif 800w,
               ${cardgif2}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${cardgif2}?w=400&h=250&fit=crop&fm=webp 400w,
               ${cardgif2}?w=800&h=500&fit=crop&fm=webp 800w,
               ${cardgif2}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${cardgif2}?w=400&h=250&fit=crop&fm=png 400w,
               ${cardgif2}?w=800&h=500&fit=crop&fm=png 800w,
               ${cardgif2}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${cardgif2}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${cardgif2}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${cardgif2}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${cardgif2}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={800} 
      height={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

        {/* <img src={cardgif2} alt='School images' loading="lazy" className="img-responsive"/> */}

        <div className="top-bottom">
            <h5> Registration Form and Entrance </h5>
            <p>In the context of an ERP system for educational institutions, the Registration Form and Entrance Exam Management are crucial features that streamline the student enrollment process.</p>
        </div> 
    </div>
        </div>


        <div className='col-sm-4'>
        <div className="overlay-container"> 
        {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={cardgif3} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={cardgif3} type="image/png" />
                   <source srcSet={cardgif3} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${cardgif3}?w=400&h=250&fit=crop&fm=avif 400w,
               ${cardgif3}?w=800&h=500&fit=crop&fm=avif 800w,
               ${cardgif3}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${cardgif3}?w=400&h=250&fit=crop&fm=webp 400w,
               ${cardgif3}?w=800&h=500&fit=crop&fm=webp 800w,
               ${cardgif3}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${cardgif3}?w=400&h=250&fit=crop&fm=png 400w,
               ${cardgif3}?w=800&h=500&fit=crop&fm=png 800w,
               ${cardgif3}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${cardgif3}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${cardgif3}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${cardgif3}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${cardgif3}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={800} 
      height={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

        {/* <img src={cardgif3} alt='School images' loading="lazy" className="img-responsive"/> */}

        <div className="top-bottom">
            <h5>Complete Student Information</h5>
            <p>Complete Student Information within an ERP system encompasses all the relevant personal, academic, financial, and administrative data about a student. </p>
        </div> 
    </div>
        </div>
    </div>


    <div className='row d-flex cardhover'>
        <div className='col-sm-4'>
        <div className="overlay-container"> 
        {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={cardgif4} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={cardgif4} type="image/png" />
                   <source srcSet={cardgif4} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${cardgif4}?w=400&h=250&fit=crop&fm=avif 400w,
               ${cardgif4}?w=800&h=500&fit=crop&fm=avif 800w,
               ${cardgif4}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${cardgif4}?w=400&h=250&fit=crop&fm=webp 400w,
               ${cardgif4}?w=800&h=500&fit=crop&fm=webp 800w,
               ${cardgif4}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${cardgif4}?w=400&h=250&fit=crop&fm=png 400w,
               ${cardgif4}?w=800&h=500&fit=crop&fm=png 800w,
               ${cardgif4}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${cardgif4}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${cardgif4}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${cardgif4}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${cardgif4}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={800} 
      height={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

        {/* <img src={cardgif4} alt='School images' loading="lazy" className="img-responsive"/> */}

        <div className="top-bottom">
            <h5> Student History </h5>
            <p>Student History in an ERP system refers to a comprehensive record of a student&#39;s journey from the time they are admitted until they complete their education, or even after graduation.</p>
        </div> 
    </div>
        </div>

        <div className='col-sm-4'>
        <div className="overlay-container"> 
        {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={cardgif5} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={cardgif5} type="image/png" />
                   <source srcSet={cardgif5} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${cardgif5}?w=400&h=250&fit=crop&fm=avif 400w,
               ${cardgif5}?w=800&h=500&fit=crop&fm=avif 800w,
               ${cardgif5}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${cardgif5}?w=400&h=250&fit=crop&fm=webp 400w,
               ${cardgif5}?w=800&h=500&fit=crop&fm=webp 800w,
               ${cardgif5}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${cardgif5}?w=400&h=250&fit=crop&fm=png 400w,
               ${cardgif5}?w=800&h=500&fit=crop&fm=png 800w,
               ${cardgif5}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${cardgif5}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${cardgif5}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${cardgif5}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${cardgif5}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={800} 
      height={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

        {/* <img src={cardgif5} alt='School images' loading="lazy" className="img-responsive"/> */}

        <div className="top-bottom">
            <h5>  searching tool  </h5>
            <p>A searching tool within an ERP (Enterprise Resource Planning) system is a feature that allows users to easily find, filter, and access information across various modules within the system.</p>
        </div> 
    </div>
        </div>


        <div className='col-sm-4'>
        <div className="overlay-container"> 
        {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={cardgif6} className='img-responsive   '  loading="lazy"  alt="School images" /> 
                   <source srcSet={cardgif6} type="image/png" />
                   <source srcSet={cardgif6} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${cardgif6}?w=400&h=250&fit=crop&fm=avif 400w,
               ${cardgif6}?w=800&h=500&fit=crop&fm=avif 800w,
               ${cardgif6}?w=1200&h=750&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${cardgif6}?w=400&h=250&fit=crop&fm=webp 400w,
               ${cardgif6}?w=800&h=500&fit=crop&fm=webp 800w,
               ${cardgif6}?w=1200&h=750&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${cardgif6}?w=400&h=250&fit=crop&fm=png 400w,
               ${cardgif6}?w=800&h=500&fit=crop&fm=png 800w,
               ${cardgif6}?w=1200&h=750&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${cardgif6}?w=400&h=250&fit=crop&fm=jpeg 400w,
               ${cardgif6}?w=800&h=500&fit=crop&fm=jpeg 800w,
               ${cardgif6}?w=1200&h=750&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${cardgif6}?w=800&h=500&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={800} 
      height={500}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

        {/* <img src={cardgif6} alt='School images' loading="lazy" className="img-responsive"/> */}

        <div className="top-bottom">
            <h5> Student/Class-wise Circular </h5>
            <p>A Student/Class-wise Circular in an ERP system is a feature that allows administrators and teachers to create, manage, and distribute circulars or notices to specific groups of students based on their class, department, or other criteria. </p>
        </div> 
    </div>
        </div>
    </div>
</div>


<div className='schoolerp mb-5 pb-5'>
    <div className='container'>
    <div className='row schooltext-section d-flex'>
    <div className='col-sm-3 schotext'>
    {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={schoolicon1} className='img-responsive   '  loading="lazy"  alt="School images"  height={150} width={200}/> 
                   <source srcSet={schoolicon1} type="image/png" />
                   <source srcSet={schoolicon1} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${schoolicon1}?w=200&h=150&fit=crop&fm=avif 200w,
               ${schoolicon1}?w=400&h=300&fit=crop&fm=avif 400w,
               ${schoolicon1}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${schoolicon1}?w=200&h=150&fit=crop&fm=webp 200w,
               ${schoolicon1}?w=400&h=300&fit=crop&fm=webp 400w,
               ${schoolicon1}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${schoolicon1}?w=200&h=150&fit=crop&fm=png 200w,
               ${schoolicon1}?w=400&h=300&fit=crop&fm=png 400w,
               ${schoolicon1}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${schoolicon1}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${schoolicon1}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${schoolicon1}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${schoolicon1}?w=400&h=300&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

    {/* <img src={schoolicon1} alt='School images' loading="lazy" className="img-responsive" height={150} width={200}/> */}

    </div>
    <div className='col-sm-3 schotext'>
    {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={schoolicon2} className='img-responsive   '  loading="lazy"  alt="School images"  height={150} width={200}/> 
                   <source srcSet={schoolicon2} type="image/png" />
                   <source srcSet={schoolicon2} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${schoolicon2}?w=200&h=150&fit=crop&fm=avif 200w,
               ${schoolicon2}?w=400&h=300&fit=crop&fm=avif 400w,
               ${schoolicon2}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${schoolicon2}?w=200&h=150&fit=crop&fm=webp 200w,
               ${schoolicon2}?w=400&h=300&fit=crop&fm=webp 400w,
               ${schoolicon2}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${schoolicon2}?w=200&h=150&fit=crop&fm=png 200w,
               ${schoolicon2}?w=400&h=300&fit=crop&fm=png 400w,
               ${schoolicon2}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${schoolicon2}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${schoolicon2}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${schoolicon2}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${schoolicon2}?w=400&h=300&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

    {/* <img src={schoolicon2} alt='School images' loading="lazy" className="img-responsive" height={150} width={200}/> */}
        
    </div>
    <div className='col-sm-3 schotext'>
    {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={schoolicon3} className='img-responsive   '  loading="lazy"  alt="School images"  height={150} width={200}/> 
                   <source srcSet={schoolicon3} type="image/png" />
                   <source srcSet={schoolicon3} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${schoolicon3}?w=200&h=150&fit=crop&fm=avif 200w,
               ${schoolicon3}?w=400&h=300&fit=crop&fm=avif 400w,
               ${schoolicon3}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${schoolicon3}?w=200&h=150&fit=crop&fm=webp 200w,
               ${schoolicon3}?w=400&h=300&fit=crop&fm=webp 400w,
               ${schoolicon3}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${schoolicon3}?w=200&h=150&fit=crop&fm=png 200w,
               ${schoolicon3}?w=400&h=300&fit=crop&fm=png 400w,
               ${schoolicon3}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${schoolicon3}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${schoolicon3}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${schoolicon3}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${schoolicon3}?w=400&h=300&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

    {/* <img src={schoolicon3} alt='School images' loading="lazy" className="img-responsive" height={150} width={200}/> */}
        
    </div>
    <div className='col-sm-3 schotext'>
    {/* <LazyLoad height={200} offset={100}>
                   <picture>
                   
                   <img   src={schoolicon4} className='img-responsive   '  loading="lazy"  alt="School images"  height={150} width={200}/> 
                   <source srcSet={schoolicon4} type="image/png" />
                   <source srcSet={schoolicon4} type="image/jpeg" />
                   </picture>
                   </LazyLoad> */}
                   <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* AVIF Format for Best Optimization */}
    <source 
      srcSet={`${schoolicon4}?w=200&h=150&fit=crop&fm=avif 200w,
               ${schoolicon4}?w=400&h=300&fit=crop&fm=avif 400w,
               ${schoolicon4}?w=600&h=450&fit=crop&fm=avif 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/avif"
    />

    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`${schoolicon4}?w=200&h=150&fit=crop&fm=webp 200w,
               ${schoolicon4}?w=400&h=300&fit=crop&fm=webp 400w,
               ${schoolicon4}?w=600&h=450&fit=crop&fm=webp 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`${schoolicon4}?w=200&h=150&fit=crop&fm=png 200w,
               ${schoolicon4}?w=400&h=300&fit=crop&fm=png 400w,
               ${schoolicon4}?w=600&h=450&fit=crop&fm=png 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`${schoolicon4}?w=200&h=150&fit=crop&fm=jpeg 200w,
               ${schoolicon4}?w=400&h=300&fit=crop&fm=jpeg 400w,
               ${schoolicon4}?w=600&h=450&fit=crop&fm=jpeg 600w`}
      sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${schoolicon4}?w=400&h=300&fit=crop`} 
      className="img-responsive lazy-img" 
      loading="lazy"  
      alt="School images"  
      width={200} 
      height={150}
      decoding="async"
      fetchPriority="low"
    />
  </picture>
</LazyLoad>

    {/* <img src={schoolicon4} alt='School images' loading="lazy" className="img-responsive " height={150} width={200}/> */}
        
    </div>
    </div>
    </div>
{/* <div className=' schoolslider'>
    <div className=' schoolrow d-flex '>
        
    <div id="owl-demo" className="owl-carousel owl-theme ">
          
          <div className="item "> 
                <img src={icon1} alt='School images' className="img-responsive img-fluid " height={100} width={200}/>
                    <h6>Transfer Certificate (TC)</h6>
                    <p className='text-justify'>When you refer to a Transfer Certificate (TC) in an ERP (Enterprise Resource Planning) context, it usually implies that the school or educational institution is using an ERP system to manage administrative tasks.</p>
                 </div>
          <div className="item">       
                <img src={icon2} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6> Leaving Certificate</h6>
                    <p className='text-justify'>In many countries, the Leaving Certificate is used as proof of the student #&39;s completion of studies and may also include the student’s academic performance and behavior during their time at the institution.</p>
                 </div>
          <div className="item">  
                <img src={icon3} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Tuition Fee Certificate</h6>
                    <p className='text-justify'>In an ERP (Enterprise Resource Planning) system, a Tuition Fee Certificate is typically generated through the Fees Management module, which handles all student fee-related information such as payment records, due balances, and other financial details.</p>
                 </div>
          <div className="item"> 
                <img src={NoDueCertificate} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>No Due Certificate (NDC)</h6>
                    <p className='text-justify'>A No Due Certificate (NDC) is an official document issued by an educational institution that confirms that a student has cleared all financial and administrative dues before leaving the institution.</p>
                
         </div>
          <div className="item">
                <img src={StrengthReport} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Strength Report</h6>
                    <p className='text-justify'>A Strength Report in the context of ERP  refers to a report that provides insights into the strengths and performance of students, employees, or the institution as a whole.</p>
                </div>
          <div className="item"> 
                <img src={CategoryWiseReport} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Category-wise Report</h6>
                    <p className='text-justify'>A Category-wise Report in an ERP (Enterprise Resource Planning) system is a report that organizes data based on predefined categories or classification criteria.</p>
                </div>
          
          
          <div className="item">
                <img src={StudentProfile} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Student Profile</h6>
                    <p className='text-justify'>A Student Profile in an ERP (Enterprise Resource Planning) system is a comprehensive record that contains detailed information about an individual student.</p>
                </div>
          <div className="item">
                <img src={DropoutStudentList} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Dropout Student List</h6>
                    <p className='text-justify'> A Dropout Student List in an ERP (Enterprise Resource Planning) system refers to a report or list that identifies students who have discontinued or left their educational program before completing it.</p>
                </div>
          <div className="item">
                <img src={ProspectusSalesReport} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6> Prospectus Sales Report</h6>
                    <p className='text-justify'>A Prospectus Sales Report in an ERP (Enterprise Resource Planning) system is a report that tracks the sales of educational prospectuses—documents or brochures that provide information about the institution's courses, programs, admissions, and other offerings.</p>
                </div>
          <div className="item"> 
                <img src={FeeOutstandingReport} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Fee Outstanding Report (Monthly/Quarterly)</h6>
                    <p className='text-justify'>A Fee Outstanding Report (Monthly/Quarterly) in an ERP (Enterprise Resource Planning) system helps educational institutions track students who have unpaid or pending fees for a specific period (monthly or quarterly).</p>
               </div>
          <div className="item">
                <img src={StudentAndClassWise} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Student and Class Wise Fee Report</h6>
                    <p className='text-justify'>A Student and Class Wise Fee Report in an ERP (Enterprise Resource Planning) system is a report that provides an overview of the fees due and paid for each student and class within an institution.</p>
                </div>
         
          <div className="item"> 
                <img src={BonafideCertificate} alt='School images' className="img-responsive" height={100} width={100}/>
                <h6>Bonafide Certificate and Conduct Certificate</h6>
                    <p className='text-justify'>A Bonafide Certificate and Conduct Certificate are important documents issued by educational institutions to their students for various purposes such as employment, visa applications, higher studies, or other personal needs.</p>
                </div>
          <div className="item"> 
                <img src={TransferCertificateRegister} alt='School images' className="img-responsive" height={100} width={200}/>
                <h6>Transfer Certificate Register</h6>
                    <p className='text-justify'>A Transfer Certificate Register is an official record maintained by educational institutions to track the issuance of Transfer Certificates (TC) to students.</p>
                </div>
        </div>
    </div>
   
</div> */}
</div>



<div className='schoolfooter text-center mt-5 '>
    <h6>Embrace the dawn of a transformative educational experience. </h6>
    <p >"Transform Your Educational Institution: Say Goodbye to Manual Operations and Embrace the Future of Education <br/>Management with Our Cutting-Edge ERP System."</p>
</div>


    </div>
    <ChatbotComponent />

    </>
  )
}

export default SchooleERP;
