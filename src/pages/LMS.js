import React, { useEffect }  from 'react';
import '../css/lms.scss';
import LmsSlider from '../components/LmsSlider';
import ButtonGroup from '../components/ButtonGroup';
import FooterConsult from '../components/FooterConsult';
import { useScrollAnimation } from '../hooks/ScrollAnimation';

function LMS() {
    //베너 버튼
    const buttons = [
        { label: "HRDe LMS", description: "통합본 다운로드", link: "/files/integrated.pdf" },
        { label: "HRDe LMS", description: "브로슈어 다운로드", link: "/files/brochure.pdf" },
        { label: "HRDe LMS", description: "APP 브로슈어 다운로드", link: "/files/app_brochure.pdf" },
        { label: "HRDe LMS", description: "디자인 매뉴얼 다운로드", link: "/files/design_manual.pdf" }
    ];

    //lms-slider
    const slides = [
        { txt: <><span>통합 솔루션</span><strong>하나의 솔루션으로 <br />4가지 사업을<br />한번에!!</strong></>, img: "/img/lms-slide1.png" },
        { txt: <><span>랜딩페이지</span><strong>이제 원격교육원도 <br />온라인 마케팅과 LMS가 <br />진화해야 합니다.</strong></>, img: "/img/lms-slide2.png" },
        { txt: <><span>국민내일배움카드</span><strong>강력한 큐레이션 기능을 <br />활용한 학습자 위주의 <br />고용노동부 환급과정 사이트</strong></>, img: "/img/lms-slide3.png" },
        { txt: <><span>사이버연수원</span><strong>한국산업인력공단의 <br />HRD FLEX 사업을 위한 <br />강력한 큐레이션 기능 탑재</strong></>, img: "/img/lms-slide4.png" },
    ];

    useScrollAnimation('.lms_sec .title');
    
    return (
        <>
            <div className="lms-banner">
                <div className="wrap">
                    <div className="txt">
                        <h1>HRDe LMS</h1>
                        <p>HRDe의 1등 기술력 차세대 LMS는 하나의 솔루션으로 <br />사업주훈련, 내일배움카드, HRD FLEX, 비환급교육까지 가능합니다.</p>
                    </div>
                    <ButtonGroup buttons={buttons} />
                </div>
            </div>
            <LmsSlider slides={slides} />
            <div className="lms_sec lms_sec2">
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
                            <img src="/img/lms-sec2.png" alt="한국산업인력공단 소명자료 검토 결과과" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lms_sec lms_sec3">
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
            <div className="lms_sec lms_sec4">
                <div className="wrap">
                    <div className="left">
                        <div className="title">
                            <div className="top">
                            시간·장소 제약없이 학습 가능한
                            </div>
                            <strong>
                            각 교육원 전용 최신 LMS 앱 지원
                            </strong>
                            <p>
                            최신 고도화를 마친 LMS를 적용한 앱으로  언제 어디서나 더욱 편리하게 학습이 가능합니다. <br />
                            공동으로 사용하는 앱이 아닌 각 교육원 전용 앱을 제공해 드립니다.
                            </p>
                        </div>
                        <ul>
                            <li><img src="/img/lms-sec4-icon1.png" alt="아이콘" />모바일 최적화된 이러닝 환경 제공</li>
                            <li><img src="/img/lms-sec4-icon2.png" alt="아이콘" />직관적인 구성으로 편리한 사용성</li>
                            <li><img src="/img/lms-sec4-icon3.png" alt="아이콘" />PUSH 기능을 통한 문자 비용 절감</li>
                            <li><img src="/img/lms-sec4-icon4.png" alt="아이콘" />한번 설치 후 간편한 재접속</li>
                        </ul>
                    </div>
                    <div className="right">
                        <img src="/img/lms-sec4.png" alt="HRDe Solution 어플리케이션 이미지" />
                    </div>
                </div>
            </div>
            <div className="lms_sec lms_sec5">
                <div className="wrap">
                    <div className="title">
                        <strong>
                        HRDe LMS 구축 프로세스
                        </strong>
                        <p>
                            <span style={{ color: "#0576FB" }}>신규 설치   ❘   </span>계약일로부터 약 2주 소요    {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
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
            <FooterConsult />
        </>
    );
}

export default LMS;
