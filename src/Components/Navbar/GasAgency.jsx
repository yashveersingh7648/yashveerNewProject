

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";
import { FaTruck, FaShoppingCart, FaBoxOpen, FaGasPump, FaIndustry, FaChartLine, FaWarehouse, FaFileAlt, FaClipboardList, FaExclamationTriangle, FaTint, FaUsers, FaBuilding, FaBusinessTime } from 'react-icons/fa';

const GasAgency = () => {
  return (
    <>
      <Helmet>
        <title>Gas Agency Management Software | CipherERP Business Solutions</title>
        <meta
          name="description"
          content="Optimize your gas agency operations with CipherERP's Gas Agency Management Software. Track inventory, manage orders, enhance customer service, and streamline delivery management with ease."
        />
        <meta
          name="keywords"
          content="Gas Agency Management Software, CipherERP, business automation, inventory tracking, order management, gas agency ERP, delivery management, customer management, defected stock tracking, leakage stock management, commercial gas cylinder handling, dispatch report, purchase report, floor stock, partywise stock"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <ScrollToTopButton />

      <div className="container-fluid">
        <div className="hero-section1" id='head'>
          <div className="row">
            <div className="col-lg-12 text-section">
              <h1>Efficient <b>Gas Agency</b><br/> Management | CipherERP Solutions</h1>
              <p>
                Streamline your gas agency operations with CipherERP's advanced <br/> features for dispatch, purchase,cylinder tracking, defected stock <br/> management, and real-time reporting.
              </p>
              <a className="nav-sign" href="/SignUp">
                <button className="btn btn-outline-primary text-white bg-primary" type="submit">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>

        <section id="gas-agency-features" className="my-5">
  <div className="text-center">
    <h2>Gas Agency ERP Solutions for Efficient Management</h2> {/* SEO-friendly H2 */}
    <p>
      Explore advanced ERP solutions for gas agency management, designed to streamline operations and enhance business growth.
    </p> {/* SEO-friendly paragraph */}
  </div>
  <div className="row">
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaTruck className="feature-icon" />
      </div>
      <h3>Efficient Gas Cylinder Dispatch Management</h3> {/* SEO-friendly H3 */}
      <p>
        Streamline gas cylinder dispatch operations with real-time tracking and automated scheduling for better efficiency.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaShoppingCart className="feature-icon" />
      </div>
      <h3>Automated Purchase Order Management</h3> {/* SEO-friendly H3 */}
      <p>
        Simplify cylinder procurement with ERP solutions for automated purchase orders and supplier management.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaBoxOpen className="feature-icon" />
      </div>
      <h3>Track Empty Cylinder Receiving</h3> {/* SEO-friendly H3 */}
      <p>
        Manage empty cylinders received from customers with real-time updates and ERP-driven tracking systems.
      </p> {/* SEO-friendly paragraph */}
    </div>
  </div>

  <div className="row mt-4">
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaGasPump className="feature-icon" />
      </div>
      <h3>Monitor Cylinder Filling Process</h3> {/* SEO-friendly H3 */}
      <p>
        Ensure quality with detailed reports and real-time monitoring of the cylinder filling process.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaIndustry className="feature-icon" />
      </div>
      <h3>Streamline Gas Cylinder Manufacturing</h3> {/* SEO-friendly H3 */}
      <p>
        Optimize the manufacturing process of gas cylinders with ERP-driven precision and efficiency.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaChartLine className="feature-icon" />
      </div>
      <h3>Comprehensive ERP Reports</h3> {/* SEO-friendly H3 */}
      <p>
        Generate detailed ERP reports for dispatch, purchase, and stock management to drive business growth.
      </p> {/* SEO-friendly paragraph */}
    </div>
  </div>
</section>

<section id="additional-features" className="my-5">
  <div className="text-center">
    <h2>Advanced ERP Features for Gas Agency Management</h2> {/* SEO-friendly H2 */}
    <p>
      Discover advanced ERP features designed to optimize gas agency operations and enhance business efficiency.
    </p> {/* SEO-friendly paragraph */}
  </div>
  <div className="row">
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaWarehouse className="feature-icon" />
      </div>
      <h3>Real-Time Floor Stock Tracking</h3> {/* SEO-friendly H3 */}
      <p>
        Maintain accurate records of floor stock to prevent shortages and ensure seamless operations.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaFileAlt className="feature-icon" />
      </div>
      <h3>Automated Dispatch Reports</h3> {/* SEO-friendly H3 */}
      <p>
        Generate detailed dispatch reports for better stock control and operational efficiency.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaClipboardList className="feature-icon" />
      </div>
      <h3>Comprehensive Purchase Reports</h3> {/* SEO-friendly H3 */}
      <p>
        Track purchase trends and optimize procurement decisions with ERP-driven insights.
      </p> {/* SEO-friendly paragraph */}
    </div>
  </div>

  <div className="row mt-4">
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaExclamationTriangle className="feature-icon" />
      </div>
      <h3>Defected Stock Management</h3> {/* SEO-friendly H3 */}
      <p>
        Identify and manage defected cylinders separately to maintain quality and safety standards.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaTint className="feature-icon" />
      </div>
      <h3>Leakage Stock Monitoring</h3> {/* SEO-friendly H3 */}
      <p>
        Monitor gas leakage incidents and defective stock reports for improved safety.
      </p> {/* SEO-friendly paragraph */}
    </div>
    <div className="col-sm-4 feature-box">
      <div className="icon-container">
        <FaUsers className="feature-icon" />
      </div>
      <h3>Partywise Stock Allocation</h3> {/* SEO-friendly H3 */}
      <p>
        Analyze stock distribution based on partywise allocation for better resource management.
      </p> {/* SEO-friendly paragraph */}
    </div>
  </div>
</section>
      </div>

      <ChatbotComponent />
    </>
  );
};

export default GasAgency;

