// import React from 'react';
// import { Link } from 'react-router-dom';

// const NotFound = () => {
//   return (
//     <div className='notfound'>
//     {/* <div style={styles.container}>
       
//       <h1 style={styles.heading}>Oops! Page Not Found</h1>
//       <p style={styles.message}>The page you're looking for might have been moved or doesn't exist.</p>
//       <Link to="/" style={styles.link}>Go to Homepage</Link>
//       </div> */}
//       <div className='container Not'>
//         <h1 className='Notheading'>Oops! Page Not Found</h1>
//         <p className='Notpara'>The page you're looking for might have been moved or doesn't exist.</p>
//         <Link to="/" className='link'>Go to Homepage</Link>
//       </div>
//     </div>
//   );
// };

// // const styles = {
// //   container: {
// //     textAlign: 'center',
// //     padding: '200px',
  

// //   },
// //   heading: {
// //     fontSize: '2rem',
// //     color: '#ff4040',
// //   },
// //   message: {
// //     fontSize: '1rem',
// //     marginBottom: '20px',
// //   },
// //   link: {
// //     color: '#007BFF',
// //     fontSize: '1.1rem',
// //     textDecoration: 'none',
// //   }
// // };

// export default NotFound;


import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <Helmet>
    <title>404 - Page Not Found | YourSiteName</title>
    <meta name="description" content="Oops! The page you're looking for doesn't exist. Visit our homepage or contact us for help." />
    <meta name="keywords" content="404, Page Not Found, Website Error, Missing Page, Broken Link" />
  </Helmet>
    <div className="notfound pb-5 ">
      <div className='container Not pb-5'>
      <h1 className='Notheading '>Oops! Page Not Found</h1>
      <p className='Notpara'>The page you're looking for might have been moved or doesn't exist.</p>
      <p className='Notpara'>Try one of these options:</p>
  
        <Link to="/" className='link'>Go to Homepage</Link>
        <br/>
        {/* <li><Link to="/blog">Read our Latest Articles</Link></li> */}
     <Link to="/ContactUs" className='link pb-5'>Contact Us for Help</Link>
      </div>
    </div>
    </>
  );
};

export default NotFound;
