import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/lms.scss';
import { useScrollAnimation } from '../hooks/ScrollAnimation';
import { CaretCircleLeft, CaretCircleRight, ArrowRight } from "@phosphor-icons/react";
import PriceCard from "../components/PriceCard";
import FooterConsult from '../components/FooterConsult';

function LMS() {   
    const navigate = useNavigate();

    //배너 이미지 애니메이션
    const imgRefs = useRef([]);
    const txtRef = useRef(null);

    useEffect(() => {
    if (imgRefs.current.length) {

        txtRef.current.classList.add("on");

        setTimeout(() => {
            imgRefs.current[1].classList.add("on");
            imgRefs.current[2].classList.add("on");
        }, 200); 

        setTimeout(() => {
            imgRefs.current[0].classList.add("on");
            imgRefs.current[3].classList.add("on");
        }, 800);
        }
    }, []);

    //배너 네비게이션
   const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialNav = Number(queryParams.get('tab')) || 0;

  const [currentNav, setCurrentNav] = useState(initialNav);

    //스크롤 애니메이션
    useScrollAnimation('.lms_con .title', 'visible', 0.1, currentNav);

    //con5 네비게이션
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavClick = (index) => {
        setCurrentIndex(index);
    };
    
    const current = con5Data[currentIndex];

    //pricecard
    const [activeTab, setActiveTab] = useState(0);

    //반응형 텍스트
     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
        <div className="lms_banner">
            <div className="wrap">
                <div className="txt" ref={txtRef}>
                    <strong>국내 대표 이러닝 플랫폼, <br />
                    HRDe Solution</strong>
                    <p>
                        초기 구축 비용 없이, 월정액으로 간편하게 시작하세요.<br />
                        홈페이지, 서버, 동영상 스트리밍까지<br />
                        이러닝 운영에 필요한 모든 기능을 하나로 제공합니다.<br />
                        HRDe Solution은 교육을 쉽고 빠르게, 효율적으로 만듭니다.
                    </p>
                </div>
                <div className="img">
                    {[
                        { src: "img/lms/lms-banner-icn1.png", alt: "사람 아이콘" },
                        { src: "img/lms/lms-banner-icn2.png", alt: "노트북 아이콘" },
                        { src: "img/lms/lms-banner-icn3.png", alt: "구름 아이콘" },
                        { src: "img/lms/lms-banner-icn4.png", alt: "이메일 아이콘" },
                    ].map((img, i) => (
                        <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        ref={(el) => (imgRefs.current[i] = el)}
                        />
                    ))}
                </div>

                <ul className="lms_nav">
                <li className={currentNav === 0 ? 'on' : ''} onClick={() => setCurrentNav(0)}>
                    HRDe LMS
                </li>
                <li className={currentNav === 1 ? 'on' : ''} onClick={() => setCurrentNav(1)}>
                   {isMobile ? <>HRDe<br />아카이브</> : 'HRDe 아카이브'}
                </li>
                <li className={currentNav === 2 ? 'on' : ''} onClick={() => setCurrentNav(2)}>
                    데모 체험
                </li>
                <li className={currentNav === 3 ? 'on' : ''} onClick={() => setCurrentNav(3)}>
                    서비스 요금
                </li>
                <li className={currentNav === 4 ? 'on' : ''} onClick={() => setCurrentNav(4)}>
                    브로슈어
                </li>
            </ul>

            </div>
        </div>

        {/*1. HRDe LMS */}
        {currentNav === 0 && (
        <>
        <div className="lms_con lms_con1">
            <div className="wrap">
                <div className="title">
                    <strong>
                    HRDe LMS를 선택하는 이유
                    </strong>
                    <p>특성에 맞는 차별화된 디자인과 1등 기술력으로 <br />
                    고객이 원하는 모든 것을 구현하기 위해 최선을 다합니다</p>
                </div>
                <div className="content">
                    <div>
                        <div className="box">
                            <span>01</span>
                            <b>자동 업데이트로<br />빠른 대응</b>
                        </div>
                        <p>고용노동부, 산업인력공단 기준 <br />변경에 따른 <span>빠른 업데이트트</span></p>
                    </div>
                    <div>
                        <div className="box">
                            <span>02</span>
                            <b>안정된<br />서버관리 시스템</b>
                        </div>
                        <p>2대 이상의 서버 병렬구성과<br />glusterFS 분산파일 시스템을<br />통해 <span>안정성 확보 </span></p>
                    </div>
                    <div>
                        <div className="box">
                            <span>03</span>
                            <b>쉽고 편리한<br />운영관리</b>
                        </div>
                        <p>맞춤형 구축 및 관리기능 제공으로<br />디자인도 컨텐츠도 다양하게 구성!<br /> <span>학습관리 쉽고 빠르게!</span></p>
                    </div>
                    <div>
                        <div className="box">
                            <span>04</span>
                            <b>교육원 맞춤<br />APP 제공</b>
                        </div>
                        <p>각 교육원별 맞춤 앱 제공으로<br />학습자들이 시간과 장소 제약없이<br /><span>언제 어디서나 강의 시청 가능!</span></p>
                    </div>
                </div>
            </div>
        </div>

        <div className="lms_con lms_con2">
            <div className="wrap">
                <div className="title">
                    <strong>
                        강력한 <span>부정훈련 모니터링 시스템</span> 탑재
                    </strong>
                    <p>HRDe LMS는 한국산업인력공단의 IP 분석을 통한 부정훈련 7가지 패턴을 <br />
                    자동으로 감지하는 강력한 부정훈련 모니터링 시스템이 탑재되어있습니다.</p>
                </div>
                <div className="content">
                    <div className="left">
                        <ol>
                            <li>01. 학습기록이 연속되는 경우</li>
                            <li>02. 동일 IP에서 다수 사업장 훈련생이 학습한 경우  </li>
                            <li>03. 사업장 내 모든 훈련생의 학습일자가 동일한 경우  </li>
                            <li>04. 동일 단말기에서 다수 사업장 훈련생이 학습한 경우  </li>
                            <li>05. 각 학습지원센터 IP로 학습한 경우  </li>
                            <li>06. IP 끝자리에 연속성이 있는 경우 </li>
                            <li>07. 동일 사업장 내 2개 이상 중복 IP 검출</li>
                        </ol>
                    </div>
                    <div className="right">
                        <img src="img/lms/lms-con2.png" alt="한국산업인력공단 소명자료 검토 결과과" />
                    </div>
                </div>
            </div>
        </div>

        <div className="lms_con lms_con3">
            <div className="wrap">
                <div className="title">
                    <strong>
                        <span>원격훈련(환급)</span>에 최적화된 LMS
                    </strong>
                
                </div>
                <div className="content">
                    <div>
                        <div className="img"><img src="img/lms/lms-con3-bg1.png" alt="" /></div>
                        <div className="txt">
                            사업주 훈련 [고용보험환급과정], [국민내일배움카드]의 <br />
                            모든 기능을 충족하는 원격훈련에 특화된 솔루션입니다.
                        </div>
                    </div>
                        <div>
                        <div className="img"><img src="img/lms/lms-con3-bg2.png" alt="" /></div>
                        <div className="txt">
                            훈련생 모듈, 관리자 모듈, 교강사 모듈 등 <br />
                            원격훈련 운영에 최적화된 솔루션입니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="lms_con lms_con4">
            <div className="wrap">
                <div className="title">
                    <strong>
                    {isMobile ? <>원격훈련과정</> : '원격훈련(환급)과정'}
                    <span> 인정 요건 설비 및 장비</span>

                    </strong>
                <p>원격훈련 기준응 상회하는 HRDe솔루션의 서버 구성으로 동시시청 5,000명은 물론 실시간 스트리밍도 가능합니다.</p>
                </div>
                <div className="content">
                    <img src="img/lms/lms-con4.png" alt="CLOUD-방화벽-L4-WEB,VOD,DB,Backup" />
                </div>
            </div>
        </div>

        <div className="lms_con lms_con5">
            <div className="wrap">
                <div className="title">
                    <strong>
                        원격훈련(환급) <span>LMS 기능</span>
                    </strong>
                        <p>회원가입에서부터 학습운영 및 매출 관리에 이르기까지 <br />
                    학습자의 원활한 학습진행과 운영자의 편리한 관리를 위한 최적의 환경을 제공합니다.</p>
                </div>

                <ul className="con-nav">
                {con5Data.map((item, idx) => {
                    const isActive = currentIndex === idx;
                    const iconFile = isActive
                    ? `img/lms/lms-con5-${idx + 1}-icnw.png`
                    : `img/lms/lms-con5-${idx + 1}-icn.png`;

                    return (
                    <li
                        key={idx}
                        className={isActive ? "on" : ""}
                        onClick={() => handleNavClick(idx)}
                    >
                        <span>
                        <img src={iconFile} alt="아이콘" />
                        </span>
                        <p>{item.title}</p>
                    </li>
                    );
                })}
                </ul>

                <div className="nav-btn">
                    <div
                        className="prev"
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + con5Data.length) % con5Data.length)}
                    >
                        <CaretCircleLeft size={48} weight="thin" />
                    </div>
                    <div
                        className="next"
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % con5Data.length)}
                    >
                        <CaretCircleRight size={48} weight="thin" />
                    </div>
                </div>

                <div className="content">
                    <div className="img">
                        <img src={current.img} alt="" />
                    </div>
                    <div className="txt">
                        <div className="ttl">
                        <strong>{current.title}</strong>
                        <p>{current.desc}</p>
                        </div>
                        <ul className="expl">
                        {current.expl.map((ex, idx) => (
                            <li key={idx}>
                            <span>{ex.title}</span>
                            {ex.content}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="lms_con lms_con6">
            <div className="wrap">
                <div className="title">
                    <strong>
                    HRDe LMS 구축 프로세스
                    </strong>
                    <p>
                        <span style={{ color: "#0576FB" }}>신규 설치   ❘   </span>계약일로부터 약 2주 소요 {isMobile ? <><br /></> : '\u00A0\u00A0\u00A0\u00A0\u00A0'} 
                        <span style={{ color: "#0576FB" }}>이전 설치   ❘  </span>계약일로부터 약 4주 소요
                    </p>
                </div>
                <div className="content">
                    <div>
                        <div className="box">
                            <span>01</span>
                            <b>LMS 구축</b>
                        </div>
                        <p>
                        • 서버 설치<br />
                        • 도메인 설정<br />
                        • 인증서 설치<br />
                        • LMS 설치<br />
                        </p>
                    </div>
                    <div>
                        <div className="box">
                            <span>02</span>
                            <b>API 연동</b>
                        </div>
                        <p>
                        • EMON API 설정<br />
                        • 본인인증 API 설정<br />
                        • 문자 발송 API 설정<br />
                        • 카드결제 API 설정<br />
                        </p>
                    </div>
                    <div>
                        <div className="box">
                            <span>03</span>
                            <b>데이터 이전</b>
                        </div>
                        <p>
                        • 기존 데이터 이전<br />
                        • 과정 업로드<br />
                        </p>
                    </div>
                    <div>
                        <div className="box">
                            <span>04</span>
                            <b>점검</b>
                        </div>
                        <p>
                        • 과정 시뮬레이션<br />
                        • EMON 데이터 확인<br />
                        • 기능 시뮬레이션 및 <br />
                        {'\u00A0\u00A0'} LMS 설치<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="lms_con lms_con7">
            <div className="wrap">
                <div className="title">
                    <strong>
                          {isMobile ? <>타 솔루션과 차별화된 플랫폼<br /></> : '타 솔루션과 차별화된 플랫폼 '}
                           <span>HRDe LMS</span> </strong>
                    <p>타 솔루션과는 차원이 다른 스마트한 직업훈련 플랫폼입니다. </p>
                </div>
                <div className="content">
                    <div onClick={() => navigate('/consult')}>
                        <div className="icn"><img src="img/lms/lms-con7-icn1.png" alt="" /></div>
                        서비스 요금 <ArrowRight size={30} />
                    </div>
                    <div onClick={() => navigate('/consult')}>
                        <div className="icn"><img src="img/lms/lms-con7-icn2.png" alt="" /></div>
                        견적 문의 <ArrowRight size={30} />
                    </div>
                </div>
            </div>
        </div>

        </>
    )}

    {/*2. HRDe 아카이브 */}
    {currentNav === 1 && (
    <>
    <div className="lms_con lms_con8">
        <div className="wrap">
            <div className="title">
                <strong>HRDe 아카이브 LMS</strong>
                <p>원격훈련의 교육 데이터를 안전하게 보관하고, <br />
                효율적인 학습운영을 위한 최적의 환경을 제공합니다.</p>
            </div>
            <div className="content">
                <div>
                    <div className="img">      
                        <img src="img/lms/lms-con8-1.png" alt="아이콘" />
                    </div>
                    <div className="txt">
                        <strong>시스템 안정성</strong>
                        <p>안정된 서버와 전문 유지보수팀의 장애관리로 <br />다수의 동시접속 가능</p>
                    </div>
                </div>
                 <div>
                    <div className="img">      
                        <img src="img/lms/lms-con8-2.png" alt="아이콘" />
                    </div>
                    <div className="txt">
                        <strong>맞춤형 콘텐츠 큐레이션</strong>
                        <p>조건에 맞는 큐레이션 서비스로 수강생들의<br /> 맞춤형 교육 가능</p>
                    </div>
                </div>
                 <div>
                    <div className="img">      
                        <img src="img/lms/lms-con8-3.png" alt="아이콘" />
                    </div>
                    <div className="txt">
                        <strong>합리적인 서비스이용</strong>
                        <p>서비스 이용량에 따른 과금 체계가 없어<br /> 운영비용 부담 최소화</p>
                    </div>
                </div>
                 <div>
                    <div className="img">      
                        <img src="img/lms/lms-con8-4.png" alt="아이콘" />
                    </div>
                    <div className="txt">
                        <strong>서비스 확장성</strong>
                        <p>지속적인 전문가의 지원과 업그레이드로<br />서비스 확장이 가능</p>
                    </div>
                </div>
                 <div>
                    <div className="img">      
                        <img src="img/lms/lms-con8-5.png" alt="아이콘" />
                    </div>
                    <div className="txt">
                        <strong>스마트한 수강</strong>
                        <p>반응형 웹으로 다양한 기기를 지원하고<br />호환하여 언제 어디서나 학습이 가능</p>
                    </div>
                </div>
                 <div>
                    <div className="img">      
                        <img src="img/lms/lms-con8-6.png" alt="아이콘" />
                    </div>
                    <div className="txt">
                        <strong>고객관리</strong>
                        <p>고객센터를 통한 신속한 응대와 지원으로<br />안정적인 유지보수 및 AS지원</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="lms_con lms_con9">
        <div className="wrap">
            <div className="title">
                <strong>HRDe 아카이브 핵심기능</strong>
            </div>
            <div className="content">
                <div>
                    <div className="icn"><img src="img/lms/lms-con9-icn1.png" alt="아이콘" /></div>
                    <div className="txt">
                        <strong>수강시간 합산 표시</strong>
                        <p>HRDe 아카이브에서 시청한 모든 콘텐츠의 총 수강 시간을 합산하여 표시</p>
                    </div>
                </div>
                <div>
                    <div className="icn"><img src="img/lms/lms-con9-icn2.png" alt="아이콘" /></div>
                    <div className="txt">
                        <strong>관심강의</strong>
                        <p>관심있는 강의를 찜한 뒤 나의학습실에서 확인 및 학습 가능</p>
                    </div>
                </div>
                <div>
                    <div className="icn"><img src="img/lms/lms-con9-icn3.png" alt="아이콘" /></div>
                    <div className="txt">
                        <strong>콘텐츠 관리</strong>
                        <p>관리자 모듈을 통해 콘텐츠, 카테고리, 키워드, 큐레이션 등 모두 관리 가능</p>
                    </div>
                </div>
                <div>
                    <div className="icn"><img src="img/lms/lms-con9-icn4.png" alt="아이콘" /></div>
                    <div className="txt">
                        <strong>커뮤니티 관리</strong>
                        <p>관리자 모듈을 통해 학습문의 내용을 확인하고, 문의자에게 문자 / 이메일 발송 가능</p>
                    </div>
                </div>
                <div>
                    <div className="icn"><img src="img/lms/lms-con9-icn5.png" alt="아이콘" /></div>
                    <div className="txt">
                        <strong>콘텐츠 태그</strong>
                        <p>콘텐츠마다 태그를 표시해 학습자들이 원하는 강의를 더욱 쉽고 빠르게 찾을 수 있음</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

     <div className="lms_con lms_con10">
        <div className="wrap">
            <div className="title">
                <strong> A-Z까지 강력한 핵심기능</strong>
                <p>회원가입에서부터 학습운영에 이르기까지 학습자의 원활한 학습진행과  <br />
                운영자의 편리한 관리를 위한 최적의 환경을 제공합니다.</p>
            </div>
            <div className="content">
                <div>
                    <div className="icn">
                        <img src="img/lms/lms-con10-icn1.png" alt="아이콘" />
                    </div>
                     <div className="txt">
                        <strong>회원 관리</strong>
                        <p>회원분류와 그룹기능을 이용하여 체계적이고 간편하게 회원을 관리할 수 있습니다.  <br />
                        또한 메일 템플릿과 SMS 발송 기능을 지원하여 효과적인 회원관리가 가능합니다.</p>
                    </div>
                </div>
                  <div>
                    <div className="icn">
                        <img src="img/lms/lms-con10-icn2.png" alt="아이콘" />
                    </div>
                     <div className="txt">
                        <strong>콘텐츠 관리</strong>
                        <p>동영상 플랫폼과 연동하여 보유하신 콘텐츠를 손쉽게 강의 등록하실수 있습니다.  <br />
                        등록하신 강의 라이브러리는 운영하시는 다양한 과정에서 사용할 수 있습니다.</p>
                    </div>
                </div>
                  <div>
                    <div className="icn">
                        <img src="img/lms/lms-con10-icn3.png" alt="아이콘" />
                    </div>
                     <div className="txt">
                        <strong>운영 관리</strong>
                        <p>관리자 대시 보드, 운영 통계, 나의학습실 등 LMS 운영에 필요한 다양한 기능을 제공하며   <br />
                        관리자는 플랫폼의 현황을 한눈에 확인이 가능합니다.</p>
                    </div>
                </div>
                  <div>
                    <div className="icn">
                        <img src="img/lms/lms-con10-icn4.png" alt="아이콘" />
                    </div>
                     <div className="txt">
                        <strong>게시판 관리</strong>
                        <p>공지사항 및 학습자들의 1:1 문의, FAQ 게시판 등을 접수할 수 있는 게시판 기능을 제공하여  <br />
                        학습자와 관리자 사이의 의사소통을 돕습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="lms_con lms_con6">
        <div className="wrap">
            <div className="title">
                <strong>
                HRDe LMS 구축 프로세스
                </strong>
                <p>
                    <span style={{ color: "#0576FB" }}>신규 설치   ❘   </span>계약일로부터 약 2주 소요 {isMobile ? <><br /></> : '\u00A0\u00A0\u00A0\u00A0\u00A0'} 
                    <span style={{ color: "#0576FB" }}>이전 설치   ❘  </span>계약일로부터 약 4주 소요
                </p>
            </div>
            <div className="content">
                <div>
                    <div className="box">
                        <span>01</span>
                        <b>LMS 구축</b>
                    </div>
                    <p>
                    • 서버 설치<br />
                    • 도메인 설정<br />
                    • 인증서 설치<br />
                    • LMS 설치<br />
                    </p>
                </div>
                <div>
                    <div className="box">
                        <span>02</span>
                        <b>API 연동</b>
                    </div>
                    <p>
                    • EMON API 설정<br />
                    • 본인인증 API 설정<br />
                    • 문자 발송 API 설정<br />
                    • 카드결제 API 설정<br />
                    </p>
                </div>
                <div>
                    <div className="box">
                        <span>03</span>
                        <b>데이터 이전</b>
                    </div>
                    <p>
                    • 기존 데이터 이전<br />
                    • 과정 업로드<br />
                    </p>
                </div>
                <div>
                    <div className="box">
                        <span>04</span>
                        <b>점검</b>
                    </div>
                    <p>
                    • 과정 시뮬레이션<br />
                    • EMON 데이터 확인<br />
                    • 기능 시뮬레이션 및 <br />
                    {'\u00A0\u00A0'} LMS 설치<br />
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    </>
    )}

    {/*3. 데모 체험*/}
    {currentNav === 2 && (
    <>
    <div className="lms_con lms_con11">
        <div className="title">
            <strong>
                랜딩사이트(기본제공)
            </strong>
            <p>
                이제 교육원도, 온라인 마케팅과 LMS도 진화해야 합니다.
            </p>
        </div>
        <div className="content">
            <a href="https://www.hrdelms.com/landingpage/main.html" target="_blank" rel="noopener noreferrer">
                <div className="img">
                    <img src="img/lms/lms-con11-1.png" alt="랜딩사이트 이동" />
                </div>
            </a>
        </div>
    </div>
    <div className="lms_con lms_con11">
        <div className="title">
            <strong>
               HRDe LMS
            </strong>
            <p>
              학습자 위주의 고용노동부 환급과정 사이트 <br />
                강력한 큐레이션 기능 활용
            </p>
        </div>
        <div className="content">
            <a href="https://www.hrdelms.com/hrdedu/main/main.html" target="_blank" rel="noopener noreferrer">
                <div className="img">
                    <img src="img/lms/lms-con11-2.png" alt="LMS 사이트 이동" />
                </div>
            </a>
        </div>
    </div>
    <div className="lms_con lms_con11">
        <div className="title">
            <strong>
             HRDe 아카이브
            </strong>
            <p>
                <span style={{ color: "#52A3CF" }}>강력한 큐레이션 기능</span>을 통해 맞춤형 교육을 실시할 수 있는 HRDe아카이브 플랫폼
            </p>
        </div>
        <div className="content">
            <a href="https://www.hrdeedu.co.kr/archive/main/main.html" target="_blank" rel="noopener noreferrer">
                <div className="img">
                     <img src="img/lms/lms-con11-3.png" alt="아카이브 사이트 이동" />
                </div>
            </a>
        </div>
    </div>
    </>
    )}

    {/*4. 서비스 요금*/}
    {currentNav === 3 && (
    <>
    <div className="main_sec4" style={{backgroundColor: "#fff" }}>
        <div className="wrap">
          <div className="title">
            LMS 개발부터 콘텐츠 제작까지 <br />
            <b>HRDe의 축적된 노하우</b>로 완성된 <em>최상의 솔루션</em>
          </div>
          <div className="content">
             <ul className="nav" style={{ border: "1px solid #8FADEB" }}>
              <li
                className={activeTab === 0 ? "on" : ""}
                onClick={() => setActiveTab(0)}
              >
                HRDe LMS
              </li>
              <li
                className={activeTab === 1 ? "on" : ""}
                onClick={() => setActiveTab(1)}
              >
                CONTENTS
              </li>
            </ul>
            <div
              className="con con1"
              style={{ display: activeTab === 0 ? "flex" : "none" }}
            >
              <PriceCard
                title="HRDe LMS"
                price="월 2,500,000원"
                priceDesc="(1년 약정 기준)"
                featuresTitle={`LMS 기능 자동 업데이트\n기능개선 및 유지보수 가능\n5,000명 동시접속/수강지원\n서버사항`}
                featuresList={`- Web 서버\n- VOD 서버\n- DB서버\n- 백업서버`}
              />
              <PriceCard
                title="HRDe 아카이브"
                price="월 2,750,000원"
                priceDesc="(1년 약정 기준)"
                featuresTitle={`LMS 기능 자동 업데이트\n기능개선 및 유지보수 가능\n5,000명 동시접속/수강지원\n서버사항`}
                featuresList={`- Web 서버\n- VOD 서버\n- DB서버\n- 백업서버`}
                featuresList2={`* 정부 추진 사업 디지털 아카이브 및\n &nbsp; &nbsp;  비환급 사업 적용 가능`}
              />
            </div>
            <div
              className="con con2"
              style={{ display: activeTab === 1 ? "flex" : "none" }}
            >
              <PriceCard
                title="자체콘텐츠 개발용역"
                price="차시당 500,000원"
                priceDesc="(20차시 기준)"
                featuresTitle={`맞춤형 콘텐츠 기획`}
                featuresList={`  -전문가 제작 진행\n -기획부터 촬영, 편집까지 자체적으로 진행 \n -고객 맞춤 검수/수정 반영`}
              />
              <PriceCard
                title="자체콘텐츠 임대"
                tabs={["임대형", "수익분배형"]}
                tabPrices={[
                  { price: "차시당 500,000원", desc: "(20차시 기준)" },
                  { price: "교육비의 15%" },
                ]}
                featuresList={`  - 자체콘텐츠 제공\n - 일부 커스터마이징 허용`}
              />
              <PriceCard
                title="콘텐츠 구독제"
                price="월 5,000,000원"
                priceDesc="(1년 약정 기준)"
                featuresList={`- 지속적 콘텐츠 업데이트\n- 개발사가 보유한 콘텐츠 전부 제공`}
              />
            </div>
          </div>
        </div>
      </div>
  
       <div className="lms_con lms_con12">
        <div className="wrap">
            <div className="title">
                <strong>모든 요금제에 제공되는 무료 혜택</strong>
            </div>
            <div className="content">
                <div className="grid grid1">
                    <div>
                    <div className="img"><img src="img/lms/lms-con12-1.png" alt="아이콘" /></div>
                    <div className="txt">
                        <strong>디자인 플랫폼</strong>
                        <p>저작권 걱정없이 풍부한 템플릿과 <br />
                        다양한 소스를 활용한 <br />
                        퀄리티 높은 작업을 제작 가능</p>
                    </div>
                    </div>
                    <div>
                        <div className="img"><img src="img/lms/lms-con12-2.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>반응형 템플릿</strong>
                            <p>반응형으로 다양한 기기에서 <br />
                            학습 가능한 최신 트렌드의 <br />
                            깔끔한 템플릿을 기본 제공</p>
                        </div>
                    </div>
                </div>
               <div className="grid grid2">
                    <div>
                        <div className="img"><img src="img/lms/lms-con12-3.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>업데이트 지원</strong>
                            <p>기능 및 보안 패치 등 <br />
                            매월 정기 / 상시 업데이트는 물론, <br />
                            유지보수, 기술지원, 기술자문 지원 가능</p>
                        </div>
                    </div>
                    <div>
                        <div className="img"><img src="img/lms/lms-con12-4.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>SSL 인증서</strong>
                            <p>도메인 SSL 인증서 무료 제공으로 <br />
                            비용절감이 가능하며, <br />
                            운영 효율성과 보안수준 향상</p>
                        </div>
                    </div>
                    <div>
                        <div className="img"><img src="img/lms/lms-con12-5.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>관리자 계정수 무제한</strong>
                            <p>최고 관리자, 운영자, 소속 관리자,<br />
                            과정 운영자, 강사 계정 등<br />
                            다양한 관리자 계정을 무제한 생성 가능</p>
                        </div>
                    </div>
               </div>
               
            </div>
        </div>
     
       </div>
      </>
    )}

     {/*5. 브로슈어*/}
    {currentNav === 4 && (
    <>
       <FooterConsult />
    </>
    )}
    </>
    );
}

const con5Data = [
{
    title: "회원관리",
    desc: "회원 분류와 그룹 기능을 이용하여 체계적이고 간편하게 회원을 관리할 수 있습니다. 또한 메일 템플릿과 SMS발송 기능을 지원하여 효과적인 회원 관리가 가능합니다.",
    img: "img/lms/lms-con5-1.png",
    expl: [
    { title: "회원 / 관리자", content: "접속 이력과 현황을 확인할 수 있으며, 관리자의 운영 권한 부여 가능" },
    { title: "강사권한 부여", content: "강사권한 부여를 통해 별도 교강사 페이지 제공으로 수강생 관리 가능" },
    { title: "회원 소속 / 그룹 관리", content: "회원을 소속 / 그룹핑하여 할인을 물론 그룹별 게시판 운영 가능" },
    { title: "학습독려 관리", content: "진도율과 시험, 과제 제출 등 이메일, SMS를 통한 학습 독려 기능 제공" },
    ],
},
{
    title: "콘텐츠 관리",
    desc: "동영상 플랫폼과 연동하여 보유하신 콘텐츠를 손쉽게 강의를 동록할 수 있습니다. 등록하신 강의 라이브러리는 운영하시는 다양한 과정에서 사용할 수 있습니다.",
    img: "img/lms/lms-con5-2.png",
    expl: [
    { title: "콘텐츠 관리", content: "그룹별 강의 관리가 가능하며, MP4, 외부링크 등 다양한 콘텐츠를 한번에 등록하고 관리" },
    { title: "토론 관리", content: "과정별 토론 주제 관리" },
    { title: "시험 관리", content: "심사 기준에 맞춰 문제 은행 등록" },
    ],
},
{
    title: "수강 관리",
    desc: "온라인 교육에 최적의 관리 기능을 제공합니다. 수강 대상, 복습관리, 평가 정보 등 과정 세부 정보를 설정하여 다양한 유형의 과정을 효과적으로 운영하실 수 있습니다.",
    img: "img/lms/lms-con5-3.png",
    expl: [
    { title: "IP 모니터링", content: "학습자 IP모니터링을 통해 부정훈련 방지" },
    { title: "통합 수강생 관리", content: "과정별 전체 수강생의 수강과정, 수료여부 등 확인" },
    { title: "결제관리", content: "수강생의 결제 여부 등 확인" }
    ],
},
{
    title: "독려 관리",
    desc: "수강생들의 수강현황을 조회하고 독려를 통해 수료율을 향상시킬 수 있습니다.",
    img: "img/lms/lms-con5-4.png",
    expl: [
    { title: "독려메시지 발송", content: "미수강자나 진도 미달 학습자에게 독려 메시지를 발송 가능" },
    { title: "대상자별 상태 추적", content: "진도율, 수강현황을 기준으로 학습상태를 분석하고, 독려대상자를 확인 가능" },
    { title: "템플릿 관리", content: "독려메시지의 내용을 수정하고 생성 가능" }
    ],
},
{
    title: "커뮤니티 관리",
    desc: "공지사항과 수강생들의 문의를 관리하고 학습자료실 업로드가 가능합니다.",
    img: "img/lms/lms-con5-5.png",
    expl: [
    { title: "공지사항 관리", content: "수강생에게 중요한 교육 일정 시스템 안내 등을 공지사항으로 전달 가능" },
    { title: "문의 대응", content: "학습자와 관리자 간 개별 상담이 가능한 문의 기능 제공" },
    { title: "학습자료실 운영", content: "강의자료, 참고자료 등을 업로드하여 학습자에게 공유 가능" }
    ],
},
{
    title: "통계 관리",
    desc: "모든 사항을 파악할 수 있는 통계 그래프로, 다양한 통계를 통해 수강생의 접속 현황과 매출을 확인하실 수 있습니다.",
    img: "img/lms/lms-con5-6.png",
    expl: [
    { title: "접속 통계 관리", content: "수강생들의 접속현황 확인 가능" },
    { title: "영업 통계 관리", content: "영업자별 매출 및 예상 수당 확인 가능" },
    ],
},
{
    title: "사이트 관리",
    desc: "팝업과 사이트 정보를 체계적으로 관리하고, 작업 요청 게시판을 활용하여 유지보수를 요청할 수 있습니다.",
    img: "img/lms/lms-con5-7.png",
    expl: [
    { title: "팝업 관리", content: "팝업 혹은 배너의 디자인 관리" },
    { title: "작업요청 게시판", content: "기능개선 혹은 유지보수 요청" },
    { title: "사이트 정보 관리", content: "사이트의 기본 정보 관리" }
    ],
},
];

export default LMS;
