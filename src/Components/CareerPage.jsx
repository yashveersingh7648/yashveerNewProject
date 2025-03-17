import React, { useState } from "react";
import {
  FaCode, FaPalette, FaChartLine, FaHeadset, FaCogs
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
const img2 = '/Images/careerup.webp';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    { name: "Engineering", icon: <FaCode />, description: "Build the future of technology with Cipher ERP systems", openings: 8 },
    { name: "Design", icon: <FaPalette />, description: "Create beautiful user experiences for Cipher ERP solutions", openings: 4 },
    { name: "Marketing", icon: <FaChartLine />, description: "Drive growth and brand awareness for Cipher ERP", openings: 3 },
    { name: "Customer Support", icon: <FaHeadset />, description: "Help customers succeed with Cipher ERP systems", openings: 5 },
    { name: "Operations", icon: <FaCogs />, description: "Keep Cipher ERP systems running smoothly", openings: 2 }
  ];

  const jobs = [
    { title: "Senior Frontend Developer", department: "Engineering", location: "Noida,India", type: "Full-time" },
    { title: "UX Designer", department: "Design", location: "Noida,India", type: "Full-time" },
    { title: "Marketing Manager", department: "Marketing", location: "Noida,India", type: "Full-time" },
    { title: "Customer Success Manager", department: "Customer Support", location: "Noida,India", type: "Full-time" }
  ];

  const filteredJobs = selectedDepartment === "All" ? jobs : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-vh-100 bg-light">
      {/* SEO Title and Meta Description */}
      <head>
        <title>Cipher ERP Careers | Join Our Team in Business Management Solutions</title>
        <meta
          name="description"
          content="Explore career opportunities at Cipher ERP. Join our team to work on innovative business management systems and customer solutions."
        />
      </head>

      {/* Hero Section */}
      <div className="hero-sections position-relative overflow-hidden">
        <div className="hero-overlay position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <div className="hero-contente text-center text-white p-5">
            <h1 className="hero-title display-4 fw-bold mb-4">Build Your Career With Cipher ERP</h1>
            <p className="hero-text fs-4 mb-5">Join our team and make an impact on millions of businesses with Cipher ERP solutions.</p>
            <a className="nav-sign" href="/SignUp">
            <button className="hero-button btn btn-primary btn-lg">View Open Positions</button>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container row carrerlang mb-5">
        <div className="col-lg-6 col-md-6 fs-1 mx-auto mt-20 carrertext">
          <h2 className="text-center fw-bold">Cipher ERP Technologies</h2>
          <p className="textpart1 text-justify mt-5">
          At Cipher ERP Technologies, we are committed to delivering cutting-edge business management systems. Our ERP solutions empower businesses to streamline operations, enhance customer experiences, and accelerate growth. If you are a passionate professional with a strong technology background and a drive to work on innovative projects, we&#39;d love to connect with you.
          </p>
        </div>
        <div className="col-lg-6 col-xl-6 carrer">
          <img src={img2} className="img-responsive" alt="Cipher ERP Business Solutions" />
        </div>
      </div>

      {/* Job Categories */}
      <div className="container px-4 py-5">
        <h2 className="text-center fw-bold mb-5 display-4">Explore Our Departments</h2>
        <div className="row">
          {departments.map((dept, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="department-card bg-white p-4 rounded shadow h-100">
                <div className="department-icon fs-2 text-primary mb-3">{dept.icon}</div>
                <h3 className="department-title fs-4 fw-bold mb-2">{dept.name}</h3>
                <p className="department-text text-secondary mb-3">{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-light py-5">
        <div className="container px-4">
          <h2 className="text-center fw-bold mb-5 display-4">Current Openings at Cipher ERP</h2>

          {/* Department Filter */}
          <div className="d-flex justify-content-center mb-5">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="form-select w-auto"
            >
              <option value="All">All Departments</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept.name}>{dept.name}</option>
              ))}
            </select>
          </div>

          {/* Job Listings */}
          <div className="row g-4">
            {filteredJobs.map((job, index) => (
              <div key={index} className="col-12">
                <div className="job-card bg-white p-4 rounded shadow">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div>
                      <h3 className="job-title fs-5 fw-bold mb-2">{job.title}</h3>
                      <div className="job-details text-secondary">
                        <span className="me-3">{job.department}</span>
                        <span className="me-3">{job.location}</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <a className="nav-sign" href="/SignUp">
                    <button className="apply-button btn btn-primary mt-3 mt-md-0">Apply Now</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="container px-4 py-5">
        <h2 className="text-center fw-bold mb-5 display-4">Hiring Process at Cipher ERP</h2>
        <div className="row">
          <div className="col-12">
            <p className="text-center fs-5">
              What to expect when applying for a job at Cipher ERP Technologies:
            </p>
            <ul className="list-unstyled text-center">
              <li className="mb-3">1. Submit your application online.</li>
              <li className="mb-3">2. Initial screening call with HR.</li>
              <li className="mb-3">3. Technical interview with the team.</li>
              <li className="mb-3">4. Final interview with senior management.</li>
              <li className="mb-3">5. Receive an offer and join our team!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-light py-5">
        <div className="container px-4">
          <h2 className="text-center fw-bold mb-5 display-4">Benefits at Cipher ERP</h2>
          <div className="row">
            <div className="col-12">
              <p className="text-center fs-5">
                We care about your total well-being. At Cipher ERP Technologies, our benefits support physical, financial, and emotional well-being. Benefits vary by location, so talk with your recruiter to learn what is available.
              </p>
              <div className="row mt-4">
                <div className="col-md-4 text-center">
                  <h4 className="fw-bold">Health & Wellness</h4>
                  <p>Comprehensive health insurance and wellness programs.</p>
                </div>
                <div className="col-md-4 text-center">
                  <h4 className="fw-bold">Professional Growth</h4>
                  <p>Opportunities for training and career development.</p>
                </div>
                <div className="col-md-4 text-center">
                  <h4 className="fw-bold">Work-Life Balance</h4>
                  <p>Flexible work hours and remote work options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="culture-section position-relative overflow-hidden">
        <div className="culture-overlay d-flex align-items-center justify-content-center">
          <div className="culture-content text-center text-white p-4">
            <h4 className="culture-title display-5 fw-bold mb-4">Our Culture at Cipher ERP</h4>
            <p className="culture-text fs-5">
              We believe in fostering an inclusive environment where innovation thrives and every voice matters. Join us to work on cutting-edge ERP solutions that transform businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">© 2025 Cipher ERP Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;