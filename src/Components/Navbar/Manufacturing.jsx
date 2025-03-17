import React from 'react';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// Define media paths using process.env.PUBLIC_URL
const videoSrc = '/Images/manufacturingvideos.mp4';
const GIFSrc = '/Images/manufacturing-robots3.webp';
const ImageSrc = '/Images/discretemanufacturing.webp';
const Image1Src = '/Images/ProcessManufacturing.webp';
const Image2Src = '/Images/JobShopManufacturing.webp';
const Image3Src = '/Images/BatchMan.webp';
const Image4Src = '/Images/AdditiveManufacturing(3D Printing).jpg';
const Image5Src = '/Images/ContinuousManufacturing.webp';
const Image6Src = '/Images/DesignandDevelopment.webp';
const Image7Src = '/Images/SourcingRawMaterials.webp';
const Image8Src = '/Images/Production.webp';
const Image9Src = '/Images/QualityControl.webp';
const Image10Src = '/Images/PackagingandShipping.webp';

const Manufacturing = () => {
  // const style = {
  //   height: '500px',
  //   width: '600px',
  //   overflowY: 'scroll', // Scroll bar vertical direction ke liye
  //   border: '1px solid black',
  //   padding: '10px',
  // };

  return (
    <>
     <Helmet>
  {/* SEO-Optimized Title */}
  <title>Manufacturing ERP Solutions | Optimize Production & Supply Chain - CipherERP</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Boost manufacturing efficiency with CipherERP’s advanced Manufacturing ERP. Optimize production, inventory management, and supply chain with real-time automation. Get a demo today!" 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Manufacturing ERP, production management, inventory control, supply chain automation, industrial ERP solutions, process manufacturing, discrete manufacturing, factory automation, real-time analytics"
  />

  {/* Allow indexing for search engines */}
  <meta name="robots" content="index, follow" />
</Helmet>


      <ScrollToTopButton />

      <div className="container-fluid">
        <div className="Manufacturingimg">
          <figure>
            <div className="fixed">
              <div className="color">
                <video id="fixed" autoPlay={true} muted loop>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </figure>
        </div>

        <h1  className="text-center py-5">
    Smart Manufacturing Solutions &#45; Boost Efficiency with CipherERP
</h1>

        <div className="container text-justify">
          <p className="text-center fs-3">
            Manufacturing is the process of producing goods on a large scale using machinery, tools, labor, and chemical or biological processing. It encompasses a broad range of industries and processes, from producing raw materials to assembling complex systems. Manufacturing can be categorized into several types based on the production methods and the types of products being produced.
          </p>
        </div>

        <div className="Manufacturing-section">
          <h2 className="text-center py-5">Types of Manufacturing</h2>
          <div className="row d-flex">
            <div className="col-xl-6 manuimg">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={GIFSrc} className="img-responsive py-5" loading="lazy" alt="Manufacturing GIF" height={500} width={600} />
                  <source srcSet={GIFSrc} type="image/png" />
                  <source srcSet={GIFSrc} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    <source srcSet={`${GIFSrc}?w=800&h=533&fit=crop`} type="image/webp" />
    <source srcSet={`${GIFSrc}?w=800&h=533&fit=crop`} type="image/png" />
    <source srcSet={`${GIFSrc}?w=800&h=533&fit=crop`} type="image/jpeg" />
    <img src={`${GIFSrc}?w=800&h=533&fit=crop`} className="responsive-img" loading="lazy" alt="Contact Us" />
  </picture>
</LazyLoad>
            </div>
            <div className="col-xl-5 manutext">
              <div className='scroll-container'>
                <div className="maniinner d-flex mb-5">
                  <div className="section-innertext">
                    <h3>Discrete Manufacturing</h3>
                    <ul>
                    <p>
                   
                        <li>Involves the production of distinct items or products that can be easily counted and tracked (e.g., cars, computers, furniture).</li><br />
                        <li>Products are typically assembled from individual components.</li>
                   
                    </p>
                    </ul>
                  </div>
                  <div className="section-innerimg">
                    {/* <LazyLoad height={200} offset={100}>
                      <picture>
                        <img src={ImageSrc} className="img-responsive py-5" loading="lazy" alt="Discrete Manufacturing" height={300} width={400} />
                        <source srcSet={ImageSrc} type="image/png" />
                        <source srcSet={ImageSrc} type="image/jpeg" />
                      </picture>
                    </LazyLoad> */}
                    <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${ImageSrc}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${ImageSrc}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${ImageSrc}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${ImageSrc}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Discrete Manufacturing"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

                  </div>
                </div>

                <div className="maniinner d-flex mb-5">
                  <div className="section-innertext">
                    <h3>Process Manufacturing</h3>
                    <ul>
                    <p>
                     
                        <li>Involves the production of goods in bulk, where the end product is often indistinguishable (e.g., chemicals, food, beverages, pharmaceuticals).</li><br />
                        <li>The production process is continuous or semi-continuous, and the focus is on chemical or physical transformation.</li>
                      
                    </p>
                    </ul>
                  </div>
                  <div className="section-innerimg">
                    {/* <LazyLoad height={200} offset={100}>
                      <picture>
                        <img src={Image1Src} className="img-responsive py-5" loading="lazy" alt="Process Manufacturing" height={300} width={400} />
                        <source srcSet={Image1Src} type="image/png" />
                        <source srcSet={Image1Src} type="image/jpeg" />
                      </picture>
                    </LazyLoad> */}
                    <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image1Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image1Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image1Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image1Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Process Manufacturing"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

                  </div>
                </div>

                <div className="maniinner d-flex mb-5">
                  <div className="section-innertext">
                    <h3>Job Shop Manufacturing</h3>
                    <ul>
                    <p>
                  
                        <li>Custom manufacturing process designed to make a wide variety of products in small quantities.</li><br />
                        <li>Common in industries like custom machinery, aerospace, or specialized equipment.</li>
                  
                    </p>
                    </ul>
                  </div>
                  <div className="section-innerimg">
                    <LazyLoad height={200} offset={100}>
                      <picture>
                        <img src={Image2Src} className="img-responsive py-5" loading="lazy" alt="Job Shop Manufacturing" height={300} width={400} />
                        <source srcSet={Image2Src} type="image/png" />
                        <source srcSet={Image2Src} type="image/jpeg" />
                      </picture>
                    </LazyLoad>
                    {/* <LazyLoad height={200} offset={100}>
  <picture>
    <source srcSet={`${Image2Src}?w=800&h=533&fit=crop`} type="image/webp" />
    <source srcSet={`${Image2Src}?w=800&h=533&fit=crop`} type="image/png" />
    <source srcSet={`${Image2Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    <img
      src={`${Image2Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Job Shop Manufacturing"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad> */}

                  </div>
                </div>

                <div className="maniinner d-flex mb-5">
                  <div className="section-innertext">
                    <h3>Batch Manufacturing</h3>
                    <ul>
                    <p>
                    
                        <li>Involves producing goods in batches or small production runs rather than continuously.</li><br />
                        <li>Common in industries like pharmaceuticals, food processing, and some consumer goods.</li>
                     
                    </p>
                    </ul>
                  </div>
                  <div className="section-innerimg">
                    {/* <LazyLoad height={200} offset={100}>
                      <picture>
                        <img src={Image3Src} className="img-responsive py-5" loading="lazy" alt="Batch Manufacturing" height={300} width={400} />
                        <source srcSet={Image3Src} type="image/png" />
                        <source srcSet={Image3Src} type="image/jpeg" />
                      </picture>
                    </LazyLoad> */}
                    <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image3Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image3Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image3Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image3Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Batch Manufacturing"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

                  </div>
                </div>

                <div className="maniinner d-flex mb-5">
                  <div className="section-innertext">
                    <h3>Additive Manufacturing (3D Printing)</h3>
                    <ul>
                    <p>
                   
                        <li>Involves creating objects layer by layer from a digital model.</li><br />
                        <li>It is particularly useful for rapid prototyping and producing customized or complex parts.</li>
                 
                    </p>
                    </ul>
                  </div>
                  <div className="section-innerimg">
                    {/* <LazyLoad height={200} offset={100}>
                      <picture>
                        <img src={Image4Src} className="img-responsive py-5" loading="lazy" alt="Additive Manufacturing (3D Printing)" height={300} width={400} />
                        <source srcSet={Image4Src} type="image/png" />
                        <source srcSet={Image4Src} type="image/jpeg" />
                      </picture>
                    </LazyLoad> */}
<LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image4Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image4Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image4Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image4Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Additive Manufacturing (3D Printing)"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

                  </div>
                </div>

                <div className="maniinner d-flex mb-5">
                  <div className="section-innertext">
                    <h3>Continuous Manufacturing</h3>
                    <ul>
                    <p>
                    
                        <li>A production process where the product flows continuously through a system (e.g., oil refineries, power plants).</li><br />
                        <li>This method is often automated and optimized for efficiency.</li>
                    
                    </p>
                    </ul>
                  </div>
                  <div className="section-innerimg">
                    {/* <LazyLoad height={200} offset={100}>
                      <picture>
                        <img src={Image5Src} className="img-responsive py-5" loading="lazy" alt="Continuous Manufacturing" height={300} width={400} />
                        <source srcSet={Image5Src} type="image/png" />
                        <source srcSet={Image5Src} type="image/jpeg" />
                      </picture>
                    </LazyLoad> */}
                    <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image5Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image5Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image5Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image5Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Continuous Manufacturing"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="text-center py-5">Steps in the Manufacturing Process</h2>
        </div>

        <div className="manufacture-section">
          <div className="row">
            <div className="col-xl-6 manufacture-inner-text">
              <h3>Design and Development</h3>
              <p className="text-justify">
                Manufacturers specializing in Design and Development focus on taking an initial concept through the stages of engineering design, testing, and mass production.
              </p>
            </div>
            <div className="col-xl-6 manufacture-inner-img">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={Image6Src} className="img-responsive py-5" loading="lazy" alt="Design and Development" height={300} width={400} />
                  <source srcSet={Image6Src} type="image/png" />
                  <source srcSet={Image6Src} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image6Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image6Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image6Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image6Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Design and Development"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 manufacture-inner-img">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={Image7Src} className="img-responsive py-5" loading="lazy" alt="Sourcing Raw Materials" height={300} width={400} />
                  <source srcSet={Image7Src} type="image/png" />
                  <source srcSet={Image7Src} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image7Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image7Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image7Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image7Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Sourcing Raw Materials"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-xl-6 manufacture-inner-text">
              <h3>Sourcing Raw Materials</h3>
              <p className="text-justify">
                Sourcing raw materials is crucial for manufacturing success. It influences production cycles, quality, and pricing strategies.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 manufacture-inner-text">
              <h3>Production</h3>
              <p className="text-justify">
                Production is where raw materials are transformed into finished products through various manufacturing techniques.
              </p>
            </div>
            <div className="col-xl-6 manufacture-inner-img">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={Image8Src} className="img-responsive py-5" loading="lazy" alt="Production" height={300} width={400} />
                  <source srcSet={Image8Src} type="image/png" />
                  <source srcSet={Image8Src} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image8Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image8Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image8Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image8Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Production"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 manufacture-inner-img">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={Image9Src} className="img-responsive py-5" loading="lazy" alt="Quality Control" height={300} width={400} />
                  <source srcSet={Image9Src} type="image/png" />
                  <source srcSet={Image9Src} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    {/* WebP image for browsers that support WebP */}
    <source srcSet={`${Image9Src}?w=800&h=533&fit=crop`} type="image/webp" />
    {/* PNG image for browsers that do not support WebP */}
    <source srcSet={`${Image9Src}?w=800&h=533&fit=crop`} type="image/png" />
    {/* JPEG image for fallback */}
    <source srcSet={`${Image9Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    {/* img tag for browsers that don't support <picture> */}
    <img
      src={`${Image9Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Quality Control"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

            </div>
            <div className="col-xl-6 manufacture-inner-text">
              <h3>Quality Control</h3>
              <p className="text-justify">
                Quality control ensures that products meet required standards and specifications before they are released to customers.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 manufacture-inner-text">
              <h3>Packaging and Shipping</h3>
              <p className="text-justify">
                Packaging and shipping involve the final stages of the manufacturing process. Proper packaging ensures product safety during transportation.
              </p>
            </div>
            <div className="col-xl-6 manufacture-inner-img">
              {/* <LazyLoad height={200} offset={100}>
                <picture>
                  <img src={Image10Src} className="img-responsive py-5" loading="lazy" alt="Packaging and Shipping" height={300} width={400} />
                  <source srcSet={Image10Src} type="image/png" />
                  <source srcSet={Image10Src} type="image/jpeg" />
                </picture>
              </LazyLoad> */}
              <LazyLoad height={200} offset={100}>
  <picture>
    <source srcSet={`${Image10Src}?w=800&h=533&fit=crop`} type="image/webp" />
    <source srcSet={`${Image10Src}?w=800&h=533&fit=crop`} type="image/png" />
    <source srcSet={`${Image10Src}?w=800&h=533&fit=crop`} type="image/jpeg" />
    <img
      src={`${Image10Src}?w=800&h=533&fit=crop`}
      className="img-responsive py-5"
      loading="lazy"
      alt="Packaging and Shipping"
      height={300}
      width={400}
    />
  </picture>
</LazyLoad>

            </div>
          </div>
        </div>
<div className='section1 text-center' id='manifacture1'>
    <h4 className='py-5'>Technologies in Manufacturing</h4>
    <div className='container'>
    <div className='row d-flex  text-justifye'>
        <div className='col-sm-3 pb-5'>
        <div className='innerimg mb-5'>
<h5 className='text-center '>Automation</h5>
<p className='text-justify pt-4'>
Automation in manufacturing refers to the use of technology and machines to perform tasks or processes that were traditionally done by humans. It aims to increase efficiency, reduce errors, lower costs, and improve product quality by streamlining production and operational processes.</p>
</div>
        </div>
        <div className='col-sm-3 pb-5'>
        <div className='innerimg '>
            <h5 className='text-center pt-5'>Computer Numerical Control (CNC)</h5>
            <p className='text-justify pt-4'>Computer Numerical Control (CNC) refers to the automated control of machine tools via a computer executing pre-programmed sequences of machine control commands. CNC is a method used in manufacturing to control machines such as lathes, mills, routers, grinders, and 3D printers.</p>
</div>
        </div>
        <div className='col-sm-3'>
            <div className='innerimg'>
                <h5 className='text-center'>Enterprise Resource Planning  Systems</h5>
                <p className='text-justify'>
                Enterprise Resource Planning systems are integrated software platforms used by organizations to manage and automate core business processes. ERP systems enable businesses to collect, store, manage, and interpret data from various departments within the company, such as finance, human resources, sales, inventory, production, and customer service. </p>
        </div>
        </div>
        </div>
    </div>
</div>


        <ChatbotComponent />
      </div>
    </>
  );
};

export default Manufacturing;
