import React from 'react';
import '../css/contents.scss';
import Table from '../components/Table';
import Slider from '../components/Slider';
import ButtonGroup from '../components/ButtonGroup';
import FooterConsult from '../components/FooterConsult';
import { useScrollAnimation } from '../hooks/ScrollAnimation'
;
function Contents() {
    //베너 버튼
    const buttons = [
        { label: "HRDe LMS", description: "통합본 다운로드", link: "/files/integrated.pdf" },
        { label: "HRDe LMS", description: "브로슈어 다운로드", link: "/files/brochure.pdf" },
        { label: "HRDe LMS", description: "APP 브로슈어 다운로드", link: "/files/app_brochure.pdf" },
        { label: "HRDe LMS", description: "디자인 매뉴얼 다운로드", link: "/files/design_manual.pdf" }
    ];

    //sec1 슬라이더
    const slides01 = [
        "12개 법정교육 전콘텐츠 <br/> <b>무상지원</b>",
        "당사 개발 조정계수 1.0 미만 <br/>B등급 모든 콘텐츠<br/><b>무상지원</b>",
        "당사 개발 조정계수 1.0 B등급 콘텐츠<br/>훈련기관당 1개 콘텐츠<br/><b>무상지원</b>",
        "개정 안전보건교육 312차시<br/><b>파격적 가격 제공</b>",
        "A등급 개발 콘텐츠 20차시<br/><b>차시당 100만원에 제공</b>",
        "근로자 개인 A등급 자격증과정<br/>1개 콘텐츠<br/><b>무상제공</b>",
    ];

    const slides02 = [
        "(주)HRDe솔루션 개발 모든 콘텐츠 <br/> <b>우선 공급</b>",
        "조정계수 1.0 B등급 콘텐츠<br/>B등급 모든 콘텐츠<br/><b>무제한 공급</b>",
        "고객사 요구 A등급 콘텐츠<br/>연간 2개 과정<br/><b>개발 납품</b>",
        "고객사 요구 법정교육 콘텐츠<br/><b>개발 납품</b>",
        "산업안전보건교육  312차시<br/><b>연간 1,000만원 임대</b>"
    ];

    //sec4 테이블
    const tableData = [
        {
        //법정 교육
          columns01: [
            { key: 'field', title: '분야', width: '30%' },
            { key: 'content', title: '콘텐츠', width: '50%' },
            { key: 'classNum', title: '차시', width: '20%', align: 'center' },
          ],
          data01: [
            { field: '전 산업 공통', content: '자살예방교육', classNum: 2 },
            { field: '대기업 및 공공기관', content: 'ESG 지속가능 경영', classNum: 1 },
            { field: '보건의료기관', content: '4주기 급성기병원 인증 필수교육', classNum: 18 },
          ],
        //직무훈련
        columns02: [
            { key: 'field', title: '분야', width: '20%' },
            { key: 'ncs', title: 'NCS 중분류', width: '40%' },
            { key: 'adjustNum', title: '조정계수', width: '10%', align: 'center'  },
            { key: 'courseNum', title: '과정 수', width: '10%', align: 'center'  },
            { key: 'classNum', title: '차시', width: '10%' , align: 'center' },
            { key: 'supplyDate', title: '심사승인', width: '10%', align: 'center' },
        ],
        data02: [
            { field: '총무분야', ncs: 'NCS 기반 기업이 요구하는 필수 역량', adjustNum: '1.0', courseNum:'5개' , classNum:'20', supplyDate:'2024. 6회차'},
            { field: '사회복지분야', ncs: 'NCS 기반 일상생활지원 시리즈', adjustNum: '1.0', courseNum:'5개' , classNum:'20', supplyDate:'2024. 6회차'},
            { field: 'e-비지니스', ncs: 'NCS 기반 전자상거래 시리즈', adjustNum: '1.0', courseNum:'5개' , classNum:'20', supplyDate:'2024. 6회차'},
            { field: '청소', ncs: 'NCS 기반 환경미화 시리즈', adjustNum: '1.0', courseNum:'5개' , classNum:'20', supplyDate:'2024. 6회차'},
        ],
        //OA 과정
        columns03: [
            { key: 'category', title: '구분', width: '15%' },
            { key: 'content', title: '내용', width: '15%' },
            { key: 'ncs', title: 'NCS 중분류', width: '40%' },
            { key: 'courseNum', title: '과정 수', width: '10%', align: 'center' },
            { key: 'classNum', title: '차시', width: '10%', align: 'center' },
            { key: 'supplyDate', title: '심사승인', width: '10%', align: 'center' },
        ],
        data03: [
            { category: { value: 'OA', rowSpan: '3' }, content: '아래아 한글', ncs: '초급 / 고급', courseNum: 2, classNum: 20, supplyDate: '2025. 1회차' },
            { content: '엑셀', ncs: '초급 / 중급 / 고급 / 심화', courseNum: 4, classNum: 20, supplyDate: '2025. 1회차' },
            { content: '파워포인트', ncs: '초급부터 심화까지', courseNum: 1, classNum: 20, supplyDate: '2025. 1회차' },
            { category: '디자인' , content: '포토샵', ncs: '초급 / 중급 / 고급', courseNum: 3, classNum: 20, supplyDate: '2025. 1회차' },
        ],
        //마이크로러닝
        columns04 : [
            { key: 'category', title: '구분',colSpan: 2, width: '10%' },
            { key: 'category2', title: '구분', width: '10%', display:'none' },
            { key: 'course', title: '과정명', width: '40%' },
            { key: 'courseNum', title: '과정 수', width: '15%', align: 'center' },
            { key: 'supplyDate', title: '공급시기', width: '15%', align: 'center' },
          ],
          data04: [
            {category: { value: 'IT분야', colSpan: '2' }, course:'인공지능 / 빅데이터 / 메타버스 / 반도체',courseNum:'약 320',supplyDate: { value: '2024년 12월', rowSpan: '8' } },
            {category: { value: '보건의료분야', colSpan: '2' }, course:'병원안내 / 요양지원 / 의료기술',courseNum:'약 240'},
            {category: { value:'사무행정분야', colSpan: '2' }, course:'사무환경 / 사무자동화 / 사무행정 / 그룹웨어',courseNum:'약 120'},
            {category: { value:'보육분야', colSpan: '2' }, course:'어린이집 평가 / 보유계획수립 / 영유아지원',courseNum:'약 180'},
            {category: { value:'총무분야', colSpan: '2' }, course:'NCS 기반 기업이 요구하는 필수 역량',courseNum:'약 280'},
            {category: { value:'사회복지분야', colSpan: '2' }, course:'NCS 기반 일상생활지원 시리즈 ',courseNum:'약 200'},
            {category: { value:'e-비지니스', colSpan: '2' }, course:'NCS 기반 전자상거래 시리즈',courseNum:'약 200'},
            {category: { value:'청소', colSpan: '2' }, course:'NCS 기반 환경미화 시리즈',courseNum:'약 120'},
            {category: { value:'OA', rowSpan: '3' }, category2:'한글' ,course:'초보부터 심화까지',courseNum:'40',supplyDate: { value: '2025년 1월', rowSpan: '4' }},
            {category2:'엑셀', course:'초급 / 중급 / 고급 / 심화',courseNum:'160'},
            {category2:'파워포인트', course:'초급부터 심화까지',courseNum:'80'},
            {category: { value:'포토샵', colSpan: '2' }, course:'초급 / 중급 / 고급',courseNum:'120'},
            {category:{value:'계', colSpan: '2'}, course:{value:'약 2,060개',colSpan:'3', align: 'right' }}
        ]
        },
      ];

    useScrollAnimation('.con_sec2 .wrap > div');
    useScrollAnimation('.con_sec .title');
    useScrollAnimation('.con_sec .table');
    
    return (
        <>
            <div className="con-banner">
                <div className="wrap">
                    <div className="txt">
                        <h1>HRDe CONTENTS</h1>
                        <p>HRDe솔루션은 140여 원격훈련기관과 고통을 함께 나누기 위해 <br />
                        콘텐츠를 파격적 조건으로 제공합니다.</p>
                    </div>
                    <ButtonGroup buttons={buttons} />
                </div>
            </div>
            <div className="con_sec1">
                <div className="wrap">
                    <Slider
                    slides={slides01}
                    slidesToShow={3}
                    title="모든 훈련기관"
                    subtitle="HRDe솔루션은 모든 훈련기관에 <br /> 파격적인 조건으로 콘텐츠를 제공합니다."
                    />
                    <Slider
                    slides={slides02}
                    slidesToShow={3}
                    title="HRDe 파트너스"
                    subtitle="HRDe솔루션은 미래를 향해 함께 나아갈<br />원격훈련기관을 기다립니다."
                    />
                </div>
            </div>
            <div className="con_sec2">
                <div className="wrap">
                    <div className="left">
                        <img src="/img/con-sec2-logo.png" alt="HRDe Solution" />
                        <strong>대한민국 1등 전문가들의</strong>
                        <img src="/img/con-sec2-txt.png" alt="프리미엄 콘텐츠" />
                        <p>훈련생 만족도 UP!! 탄탄하게 자리잡은 HRDe 솔루션이 결과로 증명합니다.</p>
                    </div>
                    <div className="right">
                        <img src="/img/con-sec2-img.png" alt="HRDe 전문 아나운서 김도희 강사, HRDe 전문 강사 전운기 교수" />
                    </div>
                </div>
            </div>
            <div className="con_sec con_sec3">
                <div className="wrap">
                    <div className="title">
                        <strong>
                        ㈜HRDe Solution의 사업주훈련 콘텐츠는 <br />
                        학습자 만족도를 최고의 가치로 합니다.
                        </strong>
                        <p>
                        창사 이후 개발 모든 콘텐츠 A등급!!  <br />
                        학습자의 평가를 도와주는 챗봇 러비 탑재!!
                        </p>
                    </div>
                    <div className="content">
                        <img src="/img/con-sec3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="con_sec con_sec4">
                <div className="wrap">
                    <div className="title">
                        <strong>
                            신규 개발 참조 사항
                        </strong>
                        <p>
                        HRDe 솔루션의 신규개발 콘텐츠에 대한 사항으로 고객사에서는 참조하시기 바랍니다.
                        </p>
                    </div>
                    <div className="content">
                        <div className="table">
                            <div className="caption">
                                <strong>법정교육</strong>
                                <p>다음 표의 법정교육을 신규 개발하였으므로 고객사께서는 참조하여 주십시오</p>
                            </div>
                            {tableData.map((table, index) => (
                                <Table key={index} columns={table.columns01} data={table.data01} />
                            ))}
                            <span>* 법정교육 콘텐츠는 지속적으로 업그레이드 예정입니다.  </span>
                            <span>* 고객사에서 필요한 특수분야 법정교육은 협의를 거쳐 개발할 예정입니다.</span>
                        </div>
                       <div className="table">
                            <div className="caption">
                                <strong>직무훈련과정</strong>
                                <p>조정계수 1.0인 다음 표의 콘텐츠를 개발하여 심사일정에 따라 순차적으로 보급할 예정입니다.</p>
                            </div>
                            {tableData.map((table, index) => (
                                <Table key={index} columns={table.columns02} data={table.data02} />
                            ))}
                            <span>* 상기 표의 심사승인 일정은 개발일정에 따라 변경될 수 있습니다.    </span>
                            <span>* 상기 표의 사업주 / 근로자개인(국민내일배움카드) 겸용 승인 콘텐츠입니다.</span>
                       </div>
                       <div className="table">
                            <div className="caption">
                                <strong>OA과정</strong>
                                <p>조정계수 1.0인 다음 표의 콘텐츠를 개발하여 심사일정에 따라 순차적으로 보급할 예정입니다.</p>
                            </div>
                            {tableData.map((table, index) => (
                                <Table key={index} columns={table.columns03} data={table.data03} />
                            ))}
                            <span>* 상기 표의 사업주 / 근로자개인(국민내일배움카드) 겸용 심사승인 콘텐츠입니다.</span>
                       </div>
                       <div className="table">
                            <div className="caption">
                                <strong>마이크로러닝</strong>
                                <p>마이크로러닝 콘텐츠는 다음 표와 같이 공급할 예정입니다.</p>
                            </div>
                            {tableData.map((table, index) => (
                                <Table key={index} columns={table.columns04} data={table.data04} />
                            ))}
                            <span>* 마이크로 러닝 콘텐츠 : 단위 학습목표를 가진 5-10분 분량의 콘텐츠 </span>
                            <span>* 사용용도  : 2025년 산업인력공단 HRD FLEX 사업 및 자체 훈련운영</span>
                       </div>
                    </div>
                </div>
             
            </div>
            <FooterConsult />
        </>
    );
}

export default Contents;