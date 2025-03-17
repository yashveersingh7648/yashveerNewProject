import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <button className='arrow' onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
