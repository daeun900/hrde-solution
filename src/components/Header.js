import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    isBlackRoute && !isScrolled ? 'black' : '',
    menuOpen ? 'menu-open' : ''
  ].join(' ').trim();

  const logoSrc =
    isTransparentRoute && !isScrolled && !isBlackRoute
      ? 'img/header-logo-white.png'
      : 'img/header-logo.png';

  return (
    <header className={headerClass}>
      <div className="wrap">
        <nav className="headerNav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logoSrc} alt="HRDe Solution" />
          </Link>
          <button
            className={`menuToggle ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar top" />
            <span className="bar middle" />
            <span className="bar bottom" />
          </button>
          {/* 오버레이 */}
          {menuOpen && <div className="menuDimmed" onClick={() => setMenuOpen(false)}></div>}

          <ul className={`navMenu ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/lms" onClick={() => setMenuOpen(false)}>LMS</Link></li>
            <li><Link to="/contents" onClick={() => setMenuOpen(false)}>CONTENTS</Link></li>
            <li><Link to="/consulting" onClick={() => setMenuOpen(false)}>CONSULTING</Link></li>
            <li><a   href="http://www.hrdemoa.com/" target="_blank"  rel="noopener noreferrer"  onClick={() => setMenuOpen(false)}>모아</a></li>
            <li><Link to="/consult" className='btn' onClick={() => setMenuOpen(false)}>상담문의</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
