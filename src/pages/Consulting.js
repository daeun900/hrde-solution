import React, { useEffect, useRef } from "react";
import '../css/consulting.scss'; 
import { useScrollAnimation } from '../hooks/ScrollAnimation';
import { useNavigate } from "react-router-dom";
import {  ArrowRight } from "@phosphor-icons/react";

function Consulting() {

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

    //스크롤 애니메이션
    useScrollAnimation('.consulting_con .title', 'visible', 0.1);

    return (
        <>
        <div className="consulting_banner">
            <div className="wrap">
                <div className="txt" ref={txtRef}>
                    <strong>우리 조직에 맞는 <br />
                    교육 방향이 필요신가요?</strong>
                    <p>
                     HRDe는 교육 목표부터 진단하고,  <br />
                    필요한 콘텐츠 유형, 운영방식, 평가구조까지 <br />
                    <b>교육 기획 전반을 컨설팅</b>해드립니다. <br />
                    <b>이러닝 시작전에, 전략부터 수립하세요.</b> 
                    </p>
                </div>
                <div className="img">
                    {[
                        { src: "/img/consulting/banner-icn1.png", alt: "아이콘" },
                        { src: "/img/consulting/banner-icn2.png", alt: "아이콘" },
                        { src: "/img/consulting/banner-icn3.png", alt: "아이콘" },
                    ].map((img, i) => (
                        <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        ref={(el) => (imgRefs.current[i] = el)}
                        />
                    ))}
                </div>
            </div>
        </div>

        <div className="consulting_con c_con1">
            <div className="wrap">
                <div className="title">
                    <strong>
                        <span>WHY HRDe?</span>
                        왜 HRDe솔루션의 컨설팅 일까요?
                    </strong>
                </div>
                <div className="content">
                    <div>
                        <div className="img"><img src="/img/consulting/con1-icn1.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>성과 중심의 컨설팅</strong>
                            <p>결과물을 바로 낼 수 있는 <br />
                                성공적인  원격교육 컨설팅</p>
                        </div>
                    </div>
                    <div>
                        <div className="img"><img src="/img/consulting/con1-icn2.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>맞춤형 컨설팅</strong>
                            <p>각 교육원의 특성과 필요에 맞춘 <br />
                                컨설팅 프로그램 제안</p>
                        </div>
                    </div>
                    <div>
                        <div className="img"><img src="/img/consulting/con1-icn3.png" alt="아이콘" /></div>
                        <div className="txt">
                            <strong>검증된 전문가</strong>
                            <p>문제 해결에 대한<br />
                            풍부한 경험을 가진 전문가 보유</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="consulting_con c_con2">
            <div className="wrap">
                <div className="title">
                    <strong>
                        <span>정부지원 원격평생교육원 설립</span>
                        A부터 Z까지 전과정 컨설팅
                    </strong>
                    <p>
                        원격훈련기관 운영의 최상의 파트너 HRDe솔루션은 30여년간 평생교육원 운영겸험을 통해<br />
                        고용노동부 인가 평생교육원 설립에 필요한 모든 제반 사항들을 컨설팅 해드립니다
                    </p>
                </div>
                <div className="content">
                    <div>
                        <div className="txt">원격평생교육시설 인허가 컨설팅</div>
                        <div className="img"><img src="/img/consulting/con2-icn1.png" alt="아이콘" /></div>
                    </div>
                    <div>
                        <div className="txt">인증평가(서류) 컨설팅</div>
                        <div className="img"><img src="/img/consulting/con2-icn2.png" alt="아이콘" /></div>
                    </div>
                    <div>
                        <div className="txt">인증평가(현장) 컨설팅</div>
                        <div className="img"><img src="/img/consulting/con2-icn3.png" alt="아이콘" /></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="consulting_con c_con3">
            <div className="wrap">
                <div className="title">
                    <strong>
                        컨설팅 <span>진행 절차</span>
                    </strong>
                </div>
                <div className="content">
                    <img src="/img/consulting/con3.png" alt="사전미팅, 계약진행, 서류컨설팅, 현장컨설팅" />
                </div>
            </div>
        </div>
        
         <div className="consulting_con c_con4">
            <div className="wrap">
                <div className="title">
                    <strong>
                        컨설팅 <span>진행 비용</span>
                    </strong>
                </div>
                <div className="content">
                    <table>
                        <colgroup>
                            <col width={300}/>
                            <col width={750}/>
                            <col width={210}/>
                        </colgroup>
                        <tr>
                            <th>구분</th>
                            <th>서비스 내용</th>
                            <th>단가(VAT 별도)</th>
                        </tr>
                        <tr>
                            <td>평생교교육원 설립 컨설팅</td>
                            <td>평생교육원으로 인가받기 위한 서류 일체를 안내해 드리고 검토 및 제출합니다.</td>
                            <td>150만원</td>
                        </tr>
                        <tr>
                            <td>직업능력훈련기관 <br />
                                자체평가보고서 작성 컨설팅</td>
                            <td>직업능력훈련기관으로 심사를 받기 위해 필요한 자체평가보고서 작성을 컨설팅해 드립니다.</td>
                            <td>400만원</td>
                        </tr>
                        <tr>
                            <td>직업능력훈련기관<br />
                                현장평가 준비 컨설팅</td>
                            <td>직업능력력훈련기관 현장심사용 첨부파일 준비 컨설팅 및 모의 현장심사를 진행하여 <br />
                                실제 현장심사 준비를 돕는 컨설팅 입니다.</td>
                            <td>500만원</td>
                        </tr>
                    </table>
                    <span>*위 단가는 요구사항 및 작업의 난이도에 따라 변동될 수 있습니다. <br />
                        *매해 국가예산에 따라 원격훈련기관 인가 비율이 달라질 수 있습니다</span>
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
    );
}

export default Consulting;
