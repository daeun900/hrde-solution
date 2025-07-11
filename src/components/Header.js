import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const transparentRoutes = ['/', '/consult', '/lms', '/contents'];
  const blackRoutes = ['/lms', '/contents', '/consulting', '/newsdetail'];

  const isTransparentRoute = transparentRoutes.some(route => location.pathname.startsWith(route));
  const isBlackRoute = blackRoutes.some(route => location.pathname.startsWith(route));

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

  const headerClass = [
    isTransparentRoute && !isScrolled ? 'unscrolled' : '',
    isBlackRoute && !isScrolled ? 'black' : ''
  ].join(' ').trim();

  const logoSrc =
    isTransparentRoute && !isScrolled
      ? isBlackRoute
        ? '/img/header-logo.png'
        : '/img/header-logo-white.png'
      : '/img/header-logo.png';

  return (
    <header className={headerClass}>
      <div className="wrap">
        <nav className="headerNav">
          <Link to="/">
            <img src={logoSrc} alt="HRDe Solution" />
          </Link>
          <ul>
            <li><Link to="/lms">LMS</Link></li>
            <li><Link to="/contents">CONTENTS</Link></li>
            <li><Link to="/consulting">CONSULTING</Link></li>
            <li><Link to="/">모아</Link></li>
            <li><Link to="/consult" className='btn'>상담문의</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
