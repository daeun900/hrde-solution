import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/contents.scss';
import PriceCard from "../components/PriceCard";
import { useScrollAnimation } from '../hooks/ScrollAnimation';
import {  ArrowRight,CaretCircleLeft,CaretCircleRight, CaretUp, CaretDown } from "@phosphor-icons/react";

function Contents() {
       const navigate = useNavigate();

    //배너 이미지 애니메이션
    const imgRefs = useRef([]);
    const txtRef = useRef(null);

  useEffect(() => {
  if (txtRef.current && imgRefs.current.every(el => el)) {
    txtRef.current.classList.add("on");

    setTimeout(() => {
      imgRefs.current[1].classList.add("on");
    }, 300);

    setTimeout(() => {
      imgRefs.current[0].classList.add("on");
      imgRefs.current[2].classList.add("on");
    }, 600);
  }
}, []);


    //배너 네비게이션
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialNav = Number(queryParams.get('tab')) || 0;

    const [currentNav, setCurrentNav] = useState(initialNav);

    //cont-con 네비게이션
        const [currentIndex, setCurrentIndex] = useState(0);
        
    const sectionRefs0 = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const sectionRefs1 = [useRef(null), useRef(null), useRef(null)];


        const getActiveRefs = () => {
        if (currentNav === 0) return sectionRefs0;
        if (currentNav === 1) return sectionRefs1;
        return [];
        };

        const scrollToSection = (index) => {
        const yOffset = -130;
        const refs = getActiveRefs();
        const element = refs[index].current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        };

        useEffect(() => {
            const handleScroll = () => {
                const refs = getActiveRefs();
                refs.forEach((ref, index) => {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setCurrentIndex(index);
                }
                });
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
            }, [currentNav]); // 🔑 Nav 바뀌면 새로 적용


    //스크롤 애니메이션
    useScrollAnimation('.cont_con .title', 'visible', 0.1, currentNav);
    
    //qna 토글
     const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
             <div className="cont_banner">
            <div className="wrap">
                <div className="txt" ref={txtRef}>
                    <strong>HRDe가 만든 콘텐츠는 <br />
                    다릅니다.</strong>
                    <p>
                  단순 영상이 아닌, 교육효과에 집중한 설계와 스토리텔링 <br />
                    전문 강사진과 함께 기획한 고품질 콘텐츠로 <br />
                    학습자의 몰입도와 완성도를 높입니다. <br />
                    귀 기관의 교육 목적에 정확히 맞춘 콘텐츠, <br />
                    지금 바로 경험해보세요.
                    </p>
                </div>
                <div className="img">
                    {[
                        { src: "/img/cont/cont-banner-icn1.png", alt: "필름 아이콘" },
                        { src: "/img/cont/cont-banner-icn2.png", alt: "노트북 아이콘" },
                        { src: "/img/cont/cont-banner-icn3.png", alt: "책 아이콘" },
                    ].map((img, i) => (
                        <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        ref={(el) => (imgRefs.current[i] = el)}
                        />
                    ))}
                </div>

                <ul className="cont_nav">
                <li className={currentNav === 0 ? 'on' : ''} onClick={() => setCurrentNav(0)}>
                    콘텐츠 개발
                </li>
                <li className={currentNav === 1 ? 'on' : ''} onClick={() => setCurrentNav(1)}>
                    콘텐츠 임대
                </li>
            </ul>

            </div>
        </div>

        {/*1. 콘텐츠 개발 */}
        {currentNav === 0 && (
        <>
            <div className="cont_con_nav">
                <div className="title">
                    <strong>동영상 제작</strong>
                    <p>콘텐츠 제작에 특화된 전문성, 체계성을 바탕으로 고품질의 자체개발 콘텐츠를 제작해드립니다.</p>
                </div>
                <ul>
                {["콘텐츠 제작", "제작 방식", "프로세스", "제작 비용"].map(
                    (label, index) => (
                    <li
                        key={index}
                        className={currentIndex === index ? "on" : ""}
                        onClick={() => scrollToSection(index)}
                    >
                        {label}
                    </li>
                    )
                )}
                </ul>
            </div>
             <div className="cont_con cont_con1"  ref={sectionRefs0[0]}>
                <div className="wrap">
                    <div className="title">
                        <strong>
                            최신 트렌드의 고객 맞춤형 자체개발 콘텐츠 제작 <br />
                            <span>원격훈련 콘텐츠 제작 전문 솔루션</span>
                        </strong>
                    </div>
                    <div className="content">
                        <div className="img">
                            <img src="/img/cont/cont-con1.png" alt="전문성, 체계성, 다양성" />
                        </div>
                        <ul>
                            <li>
                            <div className="img"><img src="/img/cont/cont-con1-icn1.png" alt="" /></div>
                            <div className="txt">
                                    <strong>교육 콘텐츠 기획·개발</strong>
                                    <p>고객의 니즈와 최신 트렌드를 파악하여 교육대상, 목적, 내용에 맞는 맞춤형 콘텐츠 기획·개발</p>
                            </div>
                            </li>
                            <li>
                            <div className="img"><img src="/img/cont/cont-con1-icn2.png" alt="" /></div>
                            <div className="txt">
                                    <strong>이러닝 콘텐츠 제작</strong>
                                    <p>다양한 분야의 풍부한 이러닝 콘텐츠 제작 경험을 바탕으로 고품질의 우수한 이러닝 콘텐츠 제작</p>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

             <div className="cont_con cont_con2"  ref={sectionRefs0[1]}>
                <div className="title">
                    <strong>㈜HRDe Solution의 사업주훈련 콘텐츠는  <br />
                    학습자 만족도를 최고의 가치로 합니다.</strong>
                    <p>창사 이후 개발 모든 콘텐츠 A등급!! 학습자의 평가를 도와주는 챗봇 러비 탑재!!</p>
                </div>
                <div className="content">
                    <div className="img">
                        <img src="/img/cont/cont-con2.png" alt="인트로,사전 지식 테스트, 학습을 시작하며, 플립러닝, 본강의, 키포인트, 아웃트로" />
                    </div>
                </div>
            </div>

            <div className="cont_con cont_con3"  ref={sectionRefs0[2]}>
                <div className="title">
                    <strong><span>서비스</span> 프로세스</strong>
                </div>
                <div className="content">
                    <div className="img">
                        <img src="/img/cont/cont-con3.png" alt="상담 및 컨설팅, 기획 및 계획 수립, 촬영 및 디렉팅, 후반 작업, 최종 검수 및 납품" />
                    </div>
                </div>
            </div>

             <div className="cont_con cont_con4"  ref={sectionRefs0[3]}>
                <div className="title">
                    <strong>기획부터 촬영, 제작, 납품까지 한번에 <br />
                    <span>합리적인 제작 비용</span></strong>
                </div>
                <div className="content">
                    <PriceCard
                    title="자체콘텐츠 개발용역"
                    price="차시당 500,000원"
                    priceDesc="(20차시 기준)"
                    featuresTitle={`맞춤형 콘텐츠 기획`}
                    featuresList={`  -전문가 제작 진행\n -기획부터 촬영, 편집까지 자체적으로 진행 \n -고객 맞춤 검수/수정 반영`}
                    />
                </div>
            </div>

             <div className="lms_con lms_con7">
                <div className="wrap">
                    <div className="content">
                        <div onClick={() => navigate('/consult')}>
                            <div className="icn"><img src="/img/lms/lms-con7-icn1.png" alt="" /></div>
                            서비스 요금 <ArrowRight size={30} />
                        </div>
                        <div onClick={() => navigate('/consult')}>
                            <div className="icn"><img src="/img/lms/lms-con7-icn2.png" alt="" /></div>
                            견적 문의 <ArrowRight size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        )}

        {/*2. 콘텐츠 임대 */}
        {currentNav === 1 && (
        <>
         <div className="cont_con_nav">
                <div className="title">
                    <strong>동영상 제작</strong>
                    <p>콘텐츠 제작에 특화된 전문성, 체계성을 바탕으로 고품질의 자체개발 콘텐츠를 제작해드립니다.</p>
                </div>
                <ul>
                {["서비스 소개", "콘텐츠 소개", "도입 절차"].map(
                    (label, index) => (
                    <li
                        key={index}
                        className={currentIndex === index ? "on" : ""}
                        onClick={() => scrollToSection(index)}
                    >
                        {label}
                    </li>
                    )
                )}
                </ul>
            </div>

            <div className="cont_con cont_con5"  ref={sectionRefs1[0]}>
                <div className="wrap">
                    <div className="title">
                        <strong>
                           HRDe Solution의 고품질 콘텐츠를 활용하여 <br />
                            교육서비스를 <span>쉽고 편리하게!</span>
                        </strong>
                    </div>
                    <div className="content">
                        <div className="img">
                            <img src="/img/cont/cont-con5-img.png" alt="HRDe Solution 고품질 콘텐츠" />
                        </div>
                        <ul>
                            <li>
                                <div className="img"><img src="/img/cont/cont-con5-icn1.png" alt="" /></div>
                                <div className="txt">
                                    콘텐츠 제작 비용 없이 <br />
                                    저렴한 비용으로 콘텐츠 임대
                                </div>
                            </li>
                            <li>
                                <div className="img"><img src="/img/cont/cont-con5-icn2.png" alt="" /></div>
                                <div className="txt">
                                    콘텐츠를 쉽고 편리하게 <br />
                                    과정으로 등록
                                </div>
                            </li>
                            <li>
                                <div className="img"><img src="/img/cont/cont-con5-icn3.png" alt="" /></div>
                                <div className="txt">
                                    100% HRDe Solution이 <br />
                                    자체 제작한 콘텐츠를 운용
                                </div>
                            </li>
                             <li>
                                <div className="img"><img src="/img/cont/cont-con5-icn4.png" alt="" /></div>
                                <div className="txt">
                                  최신 콘텐텐츠 다수 포함<br />
                                  주기적으로 업데이트 진행
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

             <div className="cont_con cont_con6"  ref={sectionRefs1[1]}>
                <div className="wrap">
                    <div className="title">
                        <strong>콘텐츠 소개</strong>
                        <p>법정의무교육 콘텐츠부터 AI 교육 등 최신 트렌드에 맞는 마이크로러닝/숏폼 콘텐츠까지! <br />
                            계속 업데이트 되는 콘텐츠를 전체 과정 리스트에서 확인하세요.</p>
                    </div>
                    <div className="content">
                        <button>전체 과정 리스트 엑셀 다운로드 <ArrowRight size={30} /></button>
                        <div className="nav-btn">
                            <div className="prev">
                                <CaretCircleLeft size={48} weight="thin" />
                            </div>
                            <div className="next">
                                <CaretCircleRight size={48} weight="thin" />
                            </div>
                        </div>
                        <div className="lec-slide">
                            <div>
                                <div className="img"><img src="/img/cont/lec1.png" alt="반도체, 뭐가 그리 특별하죠?" /></div>
                                <div className="txt">직무 역량</div>
                            </div>
                            <div>
                                <div className="img"><img src="/img/cont/lec2.png" alt="팀워크, 말에서 시작된다" /></div>
                                <div className="txt">리더십</div>
                            </div>
                            <div>
                                <div className="img"><img src="/img/cont/lec3.png" alt="AI 레이싱 경기" /></div>
                                <div className="txt">공통 역량</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="cont_con cont_con7"  ref={sectionRefs1[2]}>
                <div className="wrap">
                    <div className="title">
                        <strong>콘텐츠 <span>임대 절차</span></strong>
                    </div>
                     <div className="content">
                        <div className="img">
                            <img src="/img/cont/cont-con7.png" alt="필요컨텐츠 확인, 상담 신청 및 계약, 포팅, 과정 등록, 서비스 시작" />
                        </div>
                         <div className="qna">
                            <div className="q" onClick={toggleAnswer}>
                                <span>Q.</span> HRDe Solution 콘텐츠 임대 서비스 이용 계약 방법
                                {isOpen ? (
                                <CaretUp size={20} weight="bold" />
                                ) : (
                                <CaretDown size={20} weight="bold" />
                                )}
                            </div>
                            <div className={`a ${isOpen ? "open" : ""}`}>
                                <span>A.</span> 1. 구독제 계약 : 특정 비용을 지불하고 일정기간동안 임대가 가능한 형태 <br />
                                2. 수익분배 계약 : 콘텐츠 사용에 따른 수익을 공유하는 형태
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              <div className="lms_con lms_con7">
                <div className="wrap">
                    <div className="content">
                        <div onClick={() => navigate('/consult')}>
                            <div className="icn"><img src="/img/lms/lms-con7-icn1.png" alt="" /></div>
                            서비스 요금 <ArrowRight size={30} />
                        </div>
                        <div onClick={() => navigate('/consult')}>
                            <div className="icn"><img src="/img/lms/lms-con7-icn2.png" alt="" /></div>
                            견적 문의 <ArrowRight size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        )}

        </>
    );
}

export default Contents;