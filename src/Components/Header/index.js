import React, { useState, useEffect } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="header">
      <div className="logo">
        <img className='logoimage'alt='' src='data:image/png;base64,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'/>
        <div className='leftheading'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h1>Solutions</h1>
                <div className="menu-icon">
                <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            <h1>Pricing</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h1>Resouces</h1>
                <div className="menu-icon">
                <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
      </div>
      {isMobile ? (
        <div className="mobile-menu">
          <h1 className='startfreetrial'>Start free trial</h1>
          <div className="menu-icon" onClick={handleMenuClick}>
            &#9776;
          </div>
          {menuOpen && (
            <nav className="mobile-menu-links">
              <h1 className='startfreetrial'>Login</h1>
              <button className='button'>Start free trial</button>
            </nav>
          )}
        </div>
      ) : (
        <nav className="desktop-menu">
          <h1>Login</h1>
          <button className='button'>Start free trial</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
