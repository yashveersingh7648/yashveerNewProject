import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";
import LazyLoad from "react-lazyload";



// Define image paths using process.env.PUBLIC_URL
const contactImg =  '/Images/Address.png';
const contact1Img ='/Images/Number.png';
const contact2Img =  '/Images/Email.cipher.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
     <Helmet>
  {/* SEO-Optimized Title */}
  <title>Contact CipherERP - Expert ERP Support & Business Solutions</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Need help with your ERP system? Contact CipherERP today for expert ERP support, business management solutions, and enterprise resource planning services. Our team is ready to assist you!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Contact CipherERP, ERP support, business management, ERP software support, enterprise solutions, customer service, business systems, CipherShield Technology, ERP system support, technology services" 
  />

  {/* Ensure search engines index and follow links */}
  <meta name="robots" content="index, follow" />
</Helmet>


      <ScrollToTopButton/>

      <div className='container-fluid mb-4'>
        <div className='contact_banner ' id='head'>
          <div className='contectcontent text-center'>
            <h1>Contact CipherERP - Get Assistance with ERP Solutions and Services</h1>
            <p>We're here to help! Reach out to us for any inquiries or support. Our team is available to assist you with ERP solutions, and we're committed to delivering the best CipherShield Technology experience.</p>
          </div>
          
          <div className='row'>
            <div className='col-lg-6 contactimg text-center'>
              <div className='col-sm-6 boxex1'>
                <h2><i className='fa fa-map-marker fa-spin py-3' aria-hidden='true'></i> &nbsp; Our Address</h2>
                <LazyLoad height={200} offset={100}>
                  <img src={contactImg} className="img-responsiv " loading="lazy" alt="Address" height={100} width={400}/>
                </LazyLoad>
{/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${contactImg}?w=400&h=100&fit=crop&fm=avif 400w,
               ${contactImg}?w=800&h=200&fit=crop&fm=avif 800w,
               ${contactImg}?w=1200&h=300&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    <source 
      srcSet={`${contactImg}?w=400&h=100&fit=crop&fm=webp 400w,
               ${contactImg}?w=800&h=200&fit=crop&fm=webp 800w,
               ${contactImg}?w=1200&h=300&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    <source 
      srcSet={`${contactImg}?w=400&h=100&fit=crop&fm=png 400w,
               ${contactImg}?w=800&h=200&fit=crop&fm=png 800w,
               ${contactImg}?w=1200&h=300&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    <source 
      srcSet={`${contactImg}?w=400&h=100&fit=crop&fm=jpeg 400w,
               ${contactImg}?w=800&h=200&fit=crop&fm=jpeg 800w,
               ${contactImg}?w=1200&h=300&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    <img 
      src={`${contactImg}?w=800&h=200&fit=crop`} 
      className="img-responsiv" 
      loading="lazy"  
      alt="Address"  
      width={400} 
      height={100}
      style={{ objectFit: "cover" }} 
      decoding="async"
      fetchpriority="low"
    />
  </picture>
</LazyLoad> */}

                <h2><i className='fa fa-phone fa-spin py-3' loading="lazy" aria-hidden='true'></i>&nbsp; Call Us</h2>
                <LazyLoad height={200} offset={100}>
                  <img src={contact1Img} className="img-responsiv " loading="lazy" alt="Contact" height={100} width={400}/>
                </LazyLoad>
{/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${contact1Img}?w=400&h=100&fit=crop&fm=avif 400w,
               ${contact1Img}?w=800&h=200&fit=crop&fm=avif 800w,
               ${contact1Img}?w=1200&h=300&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    <source 
      srcSet={`${contact1Img}?w=400&h=100&fit=crop&fm=webp 400w,
               ${contact1Img}?w=800&h=200&fit=crop&fm=webp 800w,
               ${contact1Img}?w=1200&h=300&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    <source 
      srcSet={`${contact1Img}?w=400&h=100&fit=crop&fm=png 400w,
               ${contact1Img}?w=800&h=200&fit=crop&fm=png 800w,
               ${contact1Img}?w=1200&h=300&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    <source 
      srcSet={`${contact1Img}?w=400&h=100&fit=crop&fm=jpeg 400w,
               ${contact1Img}?w=800&h=200&fit=crop&fm=jpeg 800w,
               ${contact1Img}?w=1200&h=300&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    <img 
      src={`${contact1Img}?w=800&h=200&fit=crop`} 
      className="img-responsiv" 
      loading="lazy"  
      alt="Contact"  
      width={400} 
      height={100}
      style={{ objectFit: "cover" }} 
      decoding="async"
      fetchpriority="low"
    />
  </picture>
</LazyLoad> */}

                <h2><i className='fa fa-envelope fa-spin py-3' loading="lazy" aria-hidden='true'></i>&nbsp; Email Us</h2>
                <LazyLoad height={200} offset={100}>
                  <img src={contact2Img} className="img-responsiv " loading="lazy" alt="Email" height={100} width={400}/>
                </LazyLoad>
                {/* <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source 
      srcSet={`${contact2Img}?w=400&h=100&fit=crop&fm=avif 400w,
               ${contact2Img}?w=800&h=200&fit=crop&fm=avif 800w,
               ${contact2Img}?w=1200&h=300&fit=crop&fm=avif 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/avif"
    />

    <source 
      srcSet={`${contact2Img}?w=400&h=100&fit=crop&fm=webp 400w,
               ${contact2Img}?w=800&h=200&fit=crop&fm=webp 800w,
               ${contact2Img}?w=1200&h=300&fit=crop&fm=webp 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    <source 
      srcSet={`${contact2Img}?w=400&h=100&fit=crop&fm=png 400w,
               ${contact2Img}?w=800&h=200&fit=crop&fm=png 800w,
               ${contact2Img}?w=1200&h=300&fit=crop&fm=png 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    <source 
      srcSet={`${contact2Img}?w=400&h=100&fit=crop&fm=jpeg 400w,
               ${contact2Img}?w=800&h=200&fit=crop&fm=jpeg 800w,
               ${contact2Img}?w=1200&h=300&fit=crop&fm=jpeg 1200w`}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    <img 
      src={`${contact2Img}?w=800&h=200&fit=crop`} 
      className="img-responsiv" 
      loading="lazy"  
      alt="Email"  
      width={400} 
      height={100}
      style={{ objectFit: "cover" }} 
      decoding="async"
      fetchpriority="low"
    />
  </picture>
</LazyLoad> */}

              </div>
            </div>
            
            <div className='col-lg-6 contactform text-center'>
              <form onSubmit={handleSubmit}>
                <div className='row formcontrol mt-4'>
                  <div className='col-sm-8 boxex pt-5'>
                    <div className='row'>
                      <div className='col-sm-2'>
                        <label htmlFor='txtName' className='pb-2'>Name:</label>
                      </div>
                      <div className='col-sm-8'>
                        <input type='text' onChange={handleChange} className='form-control' name='name' id='txtName' placeholder='Enter your Name' required />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-sm-2'>
                        <label htmlFor='txtEmailId' className='pb-2'>Email:</label>
                      </div>
                      <div className='col-sm-8'>
                        <input type='email' onChange={handleChange} className='form-control' name='email' id='txtEmailId' placeholder='Enter your Email' required />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-sm-2'>
                        <label htmlFor='txtContact' className='pb-2'>Contact:</label>
                      </div>
                      <div className='col-sm-8'>
                        <input type='tel' onChange={handleChange} className='form-control' name='contact' id='txtContact' placeholder='Enter your Number' required pattern='[0-9]{10}' />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-sm-2'>
                        <label htmlFor='txtSubject' className='pb-2'>Subject:</label>
                      </div>
                      <div className='col-sm-8'>
                        <input type='text' onChange={handleChange} className='form-control' name='subject' id='txtSubject' placeholder='Enter your Subject' required />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-sm-2'>
                        <label htmlFor='txtBody' className='pb-2'>Message:</label>
                      </div>
                      <div className='col-sm-8'>
                        <textarea onChange={handleChange} className='form-control' name='body' rows='8' id='txtBody' required></textarea>
                      </div>
                    </div>

                    <br />
                    <div className='col-md-12 text-left text-center mb-5'>
                      <button type='submit' className='btn btn-success btn-lg mb-5' id='btnSubmit'>Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ChatbotComponent />
    </>
  );
};

export default ContactUs;
