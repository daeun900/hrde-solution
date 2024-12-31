import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 스크롤이 50px 이상 내려가면
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

     // 특정 경로에서만 스크롤 이벤트 활성화
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(false); // 다른 페이지에서는 초기 상태 유지
    }

    return () => {
      window.removeEventListener('scroll', handleScroll); // 이벤트 리스너 제거
    };
  }, [location.pathname]); // 경로가 변경될 때마다 effect 재실행

  return (
    <>
    <header className={location.pathname === '/' ? (isScrolled ? '' : 'unscrolled') : ''}>
        <div className='wrap'>
            <nav className='headerNav'>
                <Link to="/"><img src='/img/header-logo.png' alt='HRDe Solution'/></Link>
                <ul>
                    <li><Link to="/about">회사소개</Link></li>
                    <li><Link to="/lms">HRDe LMS</Link></li>
                    <li><Link to="/contents">Contents</Link></li>
                    <li><Link to="/contact">Consulting</Link></li>
                    <li><Link to="/contact">모아</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </>

 
  );
}

export default Header;
