import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const transparentRoutes = ['/', '/consult', '/lms'];

  const isTransparentRoute = transparentRoutes.some(route => location.pathname.startsWith(route));
  const isLMSRoute = location.pathname.startsWith('/lms');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isTransparentRoute) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isTransparentRoute]);

  const headerClass = isTransparentRoute && !isScrolled ? 'unscrolled' : '';

  // LMS만 예외 처리
  const logoSrc =
    isTransparentRoute && !isScrolled
      ? isLMSRoute
        ? '/img/header-logo.png' 
        : '/img/header-logo-white.png'
      : '/img/header-logo.png';

  return (
    <header className={headerClass + (isLMSRoute && !isScrolled ? ' lms' : '')}>
      <div className="wrap">
        <nav className="headerNav">
          <Link to="/">
            <img src={logoSrc} alt="HRDe Solution" />
          </Link>
          <ul>
            <li><Link to="/lms">LMS</Link></li>
            <li><Link to="/">CONTENTS</Link></li>
            <li><Link to="/">CONSULTING</Link></li>
            <li><Link to="/">모아</Link></li>
            <li><Link to="/consult" className='btn'>상담문의</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
