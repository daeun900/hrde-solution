import React, { useEffect, useState } from 'react';
import FooterConsult from '../components/FooterConsult';
import '../css/consulting.scss'; // SCSS 파일 import

function Consulting() {

    //consult-banner
    const images = [
        '/img/consulting_banner1.png',
        '/img/consulting_banner2.png',
        '/img/consulting_banner3.png',
    ];
    
    const texts = [
        "당신의 교육원은 경영 혁신을 준비했습니까?",
        "당신의 교육원은 다가올 미래에 지속성장 할 수 있습니까?",
        "HRDe솔루션이 도와드리겠습니다",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadeClass('fade-in');
            }, 500); // 페이드 아웃 후 500ms 대기
        }, 3000); // 3초 간격으로 전환
        return () => clearInterval(interval);
    }, []);

    //scroll-down
    const scrollToContent = () => {
        const contentSection = document.querySelector('.consult-sec1');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 이미지 hover 효과 추가
    const [hoveredImg, setHoveredImg] = useState({
        0: "/img/consult-sec1-icon1.png",
        1: "/img/consult-sec1-icon2.png",
        2: "/img/consult-sec1-icon3.png"
    });

    const handleMouseOver = (index) => {
        setHoveredImg((prev) => ({
            ...prev,
            [index]: `/img/consult-sec1-icon${index + 1}-hover.png`
        }));
    };

    const handleMouseOut = (index) => {
        setHoveredImg((prev) => ({
            ...prev,
            [index]: `/img/consult-sec1-icon${index + 1}.png`
        }));
    };
    return (
        <>
            <div className="consulting_banner">
                <div
                    className="bg"
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                >
                    <div className={`txt ${fadeClass}`}>
                        {texts[currentIndex]}
                    </div>
                    <div className="scroll-down" onClick={scrollToContent}>
                        <span className='point'></span>
                        Scroll Down
                    </div>
                </div>
            </div>
            <div className="consult-sec1">
                <div className="title">
                    <div className="top">
                    정부지원 원격평생교육원 설립 
                    </div>
                    <strong>
                    A부터 Z까지 전과정 컨설팅
                    </strong>
                    <p>
                    원격훈련기관 운영의 최상의 파트너 HRDe솔루션은 30여년간 평생교육원 운영겸험을 통해 <br />
                    고용노동부 인가 평생교육원 설립에 필요한 모든 제반 사항들을 컨설팅 해드립니다
                    </p>
                </div>
                <ul>
                    {["원격평생교육시설 인허가 컨설팅", "원격평생교육원 인증 평가 컨설팅", "원격평생교육원 운영 노하우 컨설팅"].map((text, index) => (
                        <li key={index}     
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={() => handleMouseOut(index)}>
                            <p>{text}</p>
                            <img 
                                src={hoveredImg[index]} 
                                alt={text} 
                           
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="consult-sec2">
                <div className="wrap">
                    <div className="title">
                        <span>WHY HRDe?</span>
                        <strong>왜 HRDe솔루션의 컨설팅 일까요?</strong>
                    </div>
                    <ul>
                        <li>
                            <img src="/img/consult-sec2-icon1.png" alt="" />
                            <strong>성과 중심의 컨설팅</strong>
                            <p>결과물을 바로 낼 수 있는 <br />
                            성공적인  원격교육 컨설팅</p>
                        </li>
                        <li>
                            <img src="/img/consult-sec2-icon2.png" alt="" />
                            <strong>맞춤형 컨설팅</strong>
                            <p>각 교육원의 특성과 필요에 맞춘 <br />
                            컨설팅 프로그램 제안</p>
                        </li>
                        <li>
                            <img src="/img/consult-sec2-icon3.png" alt="" />
                            <strong>검증된 전문가</strong>
                            <p>문제 해결에 대한 <br />
                            풍부한 경험을 가진 전문가 보유</p>
                        </li>
                    </ul>
                </div>
              
            </div>
            <FooterConsult />
        </>
    );
}

export default Consulting;
