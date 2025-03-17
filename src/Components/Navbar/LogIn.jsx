import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

const LogIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const modalElement = document.getElementById("exampleModal6");
    if (modalElement) {
      const modalInstance = new window.bootstrap.Modal(modalElement, {
        backdrop: false, // Disable background overlay
        keyboard: false, // Disable closing with keyboard
      });
      modalInstance.show();
      modalElement.dataset.bsInstance = modalInstance; // Store modal instance
    }

    // Cleanup function to ensure body scrolling is restored
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal and redirect to home page
  const handleClose = () => {
    const modalElement = document.getElementById("exampleModal6");
    if (modalElement) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }

    setTimeout(() => {
      document.body.classList.remove("modal-open"); // Remove Bootstrap class
      document.body.style.overflow = "auto"; // Ensure scrolling works
      navigate("/"); // Redirect to home page
    }, 300);
  };

  return (
    <>
     <Helmet>
  {/* SEO-Optimized Title */}
  <title>Log In to CipherERP | Secure ERP Access & Business Management</title>

  {/* Optimized Meta Description */}
  <meta 
    name="description" 
    content="Access your CipherERP account securely. Log in to manage your business with advanced ERP tools for enterprise resource planning, automation, and efficiency." 
  />

  {/* SEO-Optimized Keywords */}
  <meta 
    name="keywords" 
    content="Log In, CipherERP login, ERP access, business management system, secure ERP, enterprise resource planning, business software, ERP dashboard" 
  />

  {/* Allow indexing for search engines */}
  <meta name="robots" content="index, follow" />
</Helmet>


      <ScrollToTopButton />

      <div className="container-fluid">
        <div className="Login_banner">
          <div className="containers">
            <div className="row formlogin mt-5">
              <div className="contactrapper">
                <div
                  className="modal fade"
                  id="exampleModal6"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="row d-flex">
                        <div className="modal-header">
                      
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
    Secure ERP Access &#45; Manage Business Resources Efficiently
</h1>

                          <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose} // Close & Redirect
                            aria-label="Close"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                        <div className="col-xl-6">
                          <div className="logininner">
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email Id
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter your Email"
                                    required
                                  />
                                  <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Enter your Password"
                                    required
                                  />
                                </div>
                                <div className="d-flex justify-content-between">
                                  <button type="submit" className="btn btn-primary">Log In</button>
                                  <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="logininner">
                            <h2>Welcome to CipherERP</h2>
                            <p>
                              CipherERP is a robust, cloud-based Enterprise Resource Planning (ERP)
                              solution designed to streamline and optimize your business processes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatbotComponent />
    </>
  );
};

export default LogIn;
