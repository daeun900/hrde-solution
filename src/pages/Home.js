  import { useState, useRef, useEffect } from "react";
import "../css/main.scss";
import PriceCard from "../components/PriceCard";
import { ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Home() {
  const contentRef = useRef(null);
  const scrollToContent = () => {
    if (!contentRef.current) return;
    const offset = contentRef.current.offsetTop;
    window.scrollTo({ top: offset - 100, behavior: "smooth" });
  };

  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  // 뉴스
  const [homeNews, setHomeNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://hrde.co.kr/wp-json/hrde/v1/news", {
      params: { page: 1, per_page: 3 } 
    })
    .then(res => {
      const data = Array.isArray(res.data) ? res.data : (res.data?.items ?? []);
      setHomeNews(data);
    })
    .catch(err => {
      console.error("메인 뉴스 불러오기 실패:", err);
      setHomeNews([]);
    })
    .finally(() => setNewsLoading(false));
  }, []);

  //간단 상담문의
  const [quick, setQuick] = useState({ name: "", email: "" });
  const [quickLoading, setQuickLoading] = useState(false);
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const submitQuick = async () => {
    if (!quick.name.trim()) return alert("이름을 입력해주세요.");
    if (!quick.email.trim() || !isEmail(quick.email)) return alert("올바른 이메일을 입력해주세요.");

    const payload = {
      Name: quick.name.trim(),
      Phone: "",                 // 배너 폼엔 없음 → 빈 값
      Email: quick.email.trim(),
      Contents:
        `<p><b>[홈 간단 상담문의]</b></p>` +
        `<p>이름: ${quick.name}</p>` +
        `<p>이메일: ${quick.email}</p>`,
      CompanyName: "",           // 선택 없음 → 빈 값
      PrivacyConsent: "Y",       // 배너는 간단 접수 → Y로 처리(필요 시 UI 추가 가능)
      website: "",               // honeypot 반드시 빈 문자열
      // ServiceType / AcqChannel 생략 (API 단일값만 허용)
    };

    setQuickLoading(true);
    try {
      await axios.post("https://hrde.co.kr/wp-json/hrde/v1/consulting", payload, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      alert("간편 상담 문의가 접수되었습니다. 감사합니다!");
      setQuick({ name: "", email: "" });
    } catch (err) {
      console.error("간편 상담 접수 실패:", err?.response?.data || err);
      alert(err?.response?.data?.message || "접수 중 오류가 발생했습니다.");
    } finally {
      setQuickLoading(false);
    }
  };

  return (
    <>
      <div className="video_box">
        <video autoPlay loop muted  playsInline className="background-video">
          <source src="video/main_bg.mp4" type="video/mp4" />
        </video>
        <div className="wrap">
          <div className="bottom_banner">
            <div className="txt">
              <img src="img/main/main-banner-icn1.png" alt="아이콘" />
              <p>상담문의</p>
            </div>
           <div className="form">
              <input
                type="text"
                placeholder="이름을 입력하세요."
                value={quick.name}
                onChange={(e) => setQuick((p) => ({ ...p, name: e.target.value }))}
              />
             <input
                type="text"
                placeholder="이메일을 입력하세요."
                value={quick.email}
                onChange={(e) => setQuick((p) => ({ ...p, email: e.target.value }))}
              />
              <button onClick={submitQuick} disabled={quickLoading}>
                {quickLoading ? "전송 중..." : "상담신청"}
              </button>
            </div>
            <div className="txt">
              <img src="img/main/main-banner-icn2.png" alt="아이콘" />
              <p>1811-9530</p>
            </div>
            <button onClick={scrollToContent} className="banner-label" />
          </div>
        </div>
      </div>
      <div className="main_sec1" ref={contentRef}>
        <div className="wrap">
          <div className="top">
            <div onClick={() => navigate('/lms?tab=2')}>
              <img src="img/main/main-con1-icn1.png" alt="아이콘" />
              <p>
                데모 체험 바로가기 <ArrowRight size={20} weight="bold" />
              </p>
            </div>
            <div onClick={() => navigate('/lms?tab=4')}>
              <img src="img/main/main-con1-icn2.png" alt="아이콘" />
              <p>
                브로슈어 바로가기 <ArrowRight size={20} weight="bold" />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div>
              <img src="img/main/main-con1-icn3.png" alt="아이콘" />
              <div className="txt">
                <b>HRDe LMS</b>
                <p>
                  사업주직업훈련도 손쉽게! <br />
                  고용노동부 기준에 맞춘 플랫폼
                </p>
              </div>
            </div>
            <div>
              <img src="img/main/main-con1-icn4.png" alt="아이콘" />
              <div className="txt">
                <b>HRDe 아카이브</b>
                <p>
                  보고 싶은 콘텐츠, 직접 선택! <br />
                  맞춤형 학습이 가능한 선택형플랫폼
                </p>
              </div>
            </div>
            <div>
              <img src="img/main/main-con1-icn5.png" alt="아이콘" />
              <div className="txt">
                <b>자체콘텐츠 탑재</b>
                <p>
                  교육 기획 걱정 끝! <br />
                  전문가가 만든 자체개발 콘텐츠 즉시 활용
                </p>
              </div>
            </div>
            <div>
              <img src="img/main/main-con1-icn6.png" alt="아이콘" />
              <div className="txt">
                <b>콘텐츠 구독</b>
                <p>
                  콘텐츠 구독으로 무제한! <br />
                  교육 콘텐츠 정기 업데이트 + 무제한 이용
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_sec2">
        <div className="wrap">
          <div className="title">
            <em>HRDe Solution</em>을 선택해야하는 이유
          </div>
          <ul>
            <li>
              <p>국내 최고의 부정훈련방지 IP모니터링시스템</p>
              <img src="img/main/main-con2-icn1.png" alt="아이콘" />
            </li>
            <li>
              <p>최신 디자인의 홈페이지 제공</p>
              <img src="img/main/main-con2-icn2.png" alt="아이콘" />
            </li>
            <li>
              <p>고품질의 자제콘텐츠 제작 및 임대</p>
              <img src="img/main/main-con2-icn3.png" alt="아이콘" />
            </li>
            <li>
              <p>쌍방향 아카이브 플랫폼등 다양한 플랫폼 연동</p>
              <img src="img/main/main-con2-icn4.png" alt="아이콘" />
            </li>
            <li>
              <p>신속한 응대 고객센터 운영</p>
              <img src="img/main/main-con2-icn5.png" alt="아이콘" />
            </li>
          </ul>
        </div>
      </div>
      <div className="main_sec3">
        <div className="wrap">
          <div className="title">
            원격훈련기관의 최상의 파트너 HRDe Solution
          </div>
          <ul>
            <li>
              <div className="top">
                <b>
                  HRDe LMS <br />
                  HRDe 아카이브
                </b>
                <p>
                  법정교육, 직무교육, <br />
                  기업 맞춤까지 기업교육에 <br />
                  최적화된 통합형 플랫폼
                </p>
              </div>
              <div className="bottom">
                <p>
                  다양한 교육 콘텐츠 <br />
                  출결, 수료, 평가 등 전 과정 자동화 <br />
                  관리자/수강생 전용 맞춤형 대시보드 <br />
                  모바일 학습 지원
                </p>
              </div>
            </li>
            <li>
              <div className="top">
                <b>
                  자체 제작 콘텐츠 <br />
                  제공
                </b>
                <p>
                  기획부터 촬영·편집까지 <br />
                  직접 제작한 교육콘텐츠 <br />
                  개발용역 또는 임대
                </p>
              </div>
              <div className="bottom">
                <p>
                  산업별/직무별 맞춤형 콘텐츠 라인업 <br /> 숏폼/마이크로러닝 등
                  트렌드 <br />
                  반영 연간 업데이트 및 신규 콘텐츠 지속 제공 <br />
                  자막/음성/모바일 최적화로 접근성 강화
                </p>
              </div>
            </li>
            <li>
              <div className="top">
                <b>
                  콘텐츠 구독제 <br />
                  (월정액)
                </b>
                <p>
                  다양한 교육콘텐츠를 <br />
                  월정액으로 구독하여 <br />
                  무제한 이용 가능
                </p>
              </div>
              <div className="bottom">
                <p>
                  직무별/산업별 맞춤 콘텐츠 <br />
                  매월 신규 콘텐츠 자동 업데이트 별도 <br />
                  추가 비용 없는 정액제 구조 <br />
                  다수의 콘텐츠 동시 활용 가능
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="main_sec4">
        <div className="wrap">
          <div className="title">
            LMS 개발부터 콘텐츠 제작까지 <br />
            <b>HRDe의 축적된 노하우</b>로 완성된 <em>최상의 솔루션</em>
          </div>
          <div className="content">
            <ul className="nav">
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
      
     <div className="main_sec5">
  <div className="wrap">
    <div className="title">HRDe NEWS</div>

    {/* 로딩 중 */}
    {newsLoading && (
      <div className="con">
        <div className="news"><div className="img" /><div className="txt">불러오는 중...</div></div>
        <div className="news"><div className="img" /><div className="txt">불러오는 중...</div></div>
        <div className="news"><div className="img" /><div className="txt">불러오는 중...</div></div>
      </div>
    )}

    {/* 데이터 있는 경우 */}
    {!newsLoading && homeNews.length > 0 && (
      <div className="con">
        {homeNews.map(item => (
          <div
            key={item.idx}
            className="news"
            onClick={() => navigate(`/newsdetail/${item.idx}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="img">
              <img src={item.Thumbnail || "img/news-thumbnail.jpg"} alt={item.Title} />
            </div>
            <div className="txt">{item.Title} </div>
          </div>
        ))}
      </div>
    )}

    {/* 데이터 없는 경우*/}
    {!newsLoading && homeNews.length === 0 && (
        <div className="txt">등록된 뉴스가 없습니다.</div>
    )}

    <button className="more" onClick={() => navigate('/news')}>더보기 +</button>
  </div>
</div>

    </>
  );
}

export default Home;
