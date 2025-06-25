import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const headerClass =
    location.pathname === '/' ? (isScrolled ? '' : 'unscrolled') : '';

  // 로고 이미지 선택
  const logoSrc =
    location.pathname === '/' && !isScrolled
      ? '/img/header-logo-white.png'
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
            <li><Link to="/contact">모아</Link></li>
            <li><Link to="/" className='btn'>상담문의</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
