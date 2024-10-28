import React from 'react';
import '../css/main.scss'
import FooterConsult from '../components/FooterConsult';

function Home() {
  return (
    <>
      <div className='video_box'>
        <video autoPlay loop muted className="background-video">
          <source src="/video/main_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='main_sec1'>
        <div className='wrap'>
          <ul>
            <li>
              <h2>사업영역</h2>
              <p>신뢰와 경험, 그리고 고객중심 가치를 지향합니다.</p>
            </li>
            <li>
              <span>HRDe LMS</span>
              <h3>차별화된 1등 기술력 차세대 LMS</h3>
              <button>바로가기<span>&rarr;</span></button>
            </li>
            <li>
              <span>HRDe CONTENTS</span>
              <h3>국내 최대 법정교육 콘텐츠 보유</h3>
              <button>바로가기<span>&rarr;</span></button>
            </li>
            <li>
              <span>HRDe CONSULTING</span>
              <h3>원격평생교육원 설립 A부터 Z까지</h3>
              <button>바로가기<span>&rarr;</span></button>
            </li>
          </ul>
        </div>
      </div>
      <div className='main_sec2'>
        <div className='wrap'>
          <div className='title'>
            <h2>HRDe NEWS</h2>
            <p>HRDe솔루션의 소식을 빠르게 만나보세요.</p>
          </div>
          <div className='content'>
            <ul className='con1'>
              <li>
                <span>HRDe 솔루션</span>
                <h3>한국직업훈련신문 발간</h3>
                <p>직업훈련 기관들의 목소리</p>
                <button>자세히 보기</button>
              </li>
              <li>
                <span>HRDe 솔루션</span>
                <h3>신규 LMS 런칭 소식</h3>
                <p>원격훈련 기관들의 런칭 소식</p>
                <button>자세히 보기</button>
              </li>
              <li>
                <span>HRDe 솔루션</span>
                <h3>콘텐츠 개발 소식</h3>
                <p>새롭게 개발된 콘턴츠 정보</p>
                <button>자세히 보기</button>
              </li>
            </ul>
            <ul className='con2'>
              <li>
                <img src="/img/news1.png" alt="HRDe솔루션 원격훈련기관 간담회"/>
                <p>HRDe솔루션 원격훈련기관 간담회</p>
              </li>
              <li>
                <img src="/img/news2.png" alt="HRDe솔루션 임직원 2023년 송년회"/>
                <p>HRDe솔루션 임직원 2023년 송년회</p>
              </li>
              <li>
                <img src="/img/news3.png" alt="HRDe솔루션 원격훈련기관 간담회"/>
                <p>HRDe솔루션 원격훈련기관 간담회</p>
              </li>
            </ul>
            <button className='more'>더보기 +</button>
          </div>
        </div>
      </div>
      <FooterConsult />
    </>

  
  );
}

export default Home;
