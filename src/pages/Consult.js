import "../css/consult.scss";
import { ArrowRight } from "@phosphor-icons/react";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// 체크박스 코드 매핑(첫 번째 체크만 사용)
const serviceMap = { lms: "A", archive: "B", contents1: "C", contents2: "D" };
const acqMap = { website: "A", recommend: "B", ad: "C", etc: "D" };
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function Consult() {
  
// 폼 바로가기
const location = useLocation();     
const navigate = useNavigate();     
const formRef = useRef(null);    

useEffect(() => {
  if (location.state?.scrollTo === "form") {
    setTimeout(() => {
      if (formRef.current) {
        const headerOffset = 200; // 헤더 높이 
        const elementPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      navigate(location.pathname, { replace: true, state: {} });
    }, 0);
  }
}, [location.state, navigate, location.pathname]);


  //문의 접수
  const [form, setForm] = useState({
    contact_name: "",
    company_name: "",
    contact_phone: "",
    contact_email: "",
    inquiry_content: "",
    inquiry_type:  "",   
    referral_source: "", 
    agree: false,
    website: "",  // honeypot (비워두기)
  });
  const [submitting, setSubmitting] = useState(false);

  const onText = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "agree") {
      setForm((p) => ({ ...p, agree: checked }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.contact_name || form.contact_name.length > 50) return "담당자명을 입력하세요.";
    if (!form.contact_phone || form.contact_phone.length > 250) return "연락처를 입력하세요.";
    if (!form.contact_email || form.contact_email.length > 250 || !isEmail(form.contact_email)) return "올바른 이메일을 입력하세요.";
    if (form.company_name.length > 100) return "기업명은 최대 100자입니다.";
    if (!form.agree) return "개인정보 수집·이용에 동의해주세요.";
    if (form.website) return "스팸 의심 요청입니다."; // honeypot
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return alert(err);

    const payload = {
      Name: form.contact_name,
      Phone: form.contact_phone,
      Email: form.contact_email,
      Contents: form.inquiry_content, // HTML 허용
      CompanyName: form.company_name,
      ServiceType: serviceMap[form.inquiry_type] || undefined,
      AcqChannel: acqMap[form.referral_source] || undefined,
      PrivacyConsent: form.agree ? "Y" : "N",
      website: "", // 반드시 빈 문자열
    };

    setSubmitting(true);
    try {
      await axios.post(`https://hrde.co.kr/wp-json/hrde/v1/consulting`, payload, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      alert("문의가 접수되었습니다.");
      setForm({
        contact_name: "",
        company_name: "",
        contact_phone: "",
        contact_email: "",
        inquiry_content: "",
        inquiry_type: "",
        referral_source: "",
        agree: false,
        website: "",
      });
    } catch (error) {
      console.error("문의 접수 실패:", error?.response?.data || error);
      alert(error?.response?.data?.message || "문의 접수 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

   //개인정보 수집 문구 토글
   const [showPolicy, setShowPolicy] = useState(false);
  return (
    <>
      <div className="consult_banner">
        <div className="wrap">
          <strong>
            원격훈련기관의 <br />
            최상의 파트너!
          </strong>
          <p>
            HRDe Solution이 추구하는 핵심 가치 <br />
            <b>지금 바로 HRDe Solution과 함께 하세요.</b>
          </p>

          <button onClick={() => window.open("/down/2024_HRDe.pdf", "_blank")}>
            LMS 브로슈어 다운로드 <ArrowRight size={20} weight="bold" />
          </button>
          <button onClick={() => window.open("/down/2024_Content.pdf", "_blank")}>
            콘텐츠 브로슈어 다운로드 <ArrowRight size={20} weight="bold" />
          </button>
        </div>
      </div>

      <div className="consult_form" ref={formRef}>
        <div className="wrap">
          {/* 전송 폼으로 감싸기 */}
          <form onSubmit={handleSubmit} noValidate>
            {/* honeypot (숨김) */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onText}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", width: 0, height: 0 }}
              tabIndex={-1}
            />

            <div className="grid">
              <div className="input_wrap">
                <label htmlFor="contact_name">담당자<i> *</i></label>
                <input
                  type="text"
                  name="contact_name"
                  id="contact_name"
                  placeholder="담당자명을 입력하세요."
                  value={form.contact_name}
                  onChange={onText}
                  maxLength={50}
                  required
                />
              </div>
              <div className="input_wrap">
                <label htmlFor="company_name">기업명</label>
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  placeholder="기업명을 입력하세요."
                  value={form.company_name}
                  onChange={onText}
                  maxLength={100}
                />
              </div>
            </div>

            <div className="grid">
              <div className="input_wrap">
                <label htmlFor="contact_phone">연락처<i> *</i></label>
                <input
                  type="text"
                  name="contact_phone"
                  id="contact_phone"
                  placeholder="연락처를 입력하세요."
                  value={form.contact_phone}
                  onChange={onText}
                  maxLength={250}
                  required
                />
              </div>
              <div className="input_wrap">
                <label htmlFor="contact_email">이메일<i> *</i></label>
                <input
                  type="email"
                  name="contact_email"
                  id="contact_email"
                  placeholder="이메일을 입력하세요."
                  value={form.contact_email}
                  onChange={onText}
                  maxLength={250}
                  required
                />
              </div>
            </div>

          <div className="input_wrap input_wrap2">
              <label>서비스</label>
              <div className="checkbox_group">
                <label>
                  <input
                    type="radio"
                    name="inquiry_type"
                    value="lms"
                    checked={form.inquiry_type === "lms"}
                    onChange={onText}
                    required
                  /> HRDe LMS 임대
                </label>
                <label>
                  <input
                    type="radio"
                    name="inquiry_type"
                    value="archive"
                    checked={form.inquiry_type === "archive"}
                    onChange={onText}
                  /> HRDe 아카이브 임대
                </label>
                <label>
                  <input
                    type="radio"
                    name="inquiry_type"
                    value="contents1"
                    checked={form.inquiry_type === "contents1"}
                    onChange={onText}
                  /> 콘텐츠 임대
                </label>
                <label>
                  <input
                    type="radio"
                    name="inquiry_type"
                    value="contents2"
                    checked={form.inquiry_type === "contents2"}
                    onChange={onText}
                  /> 콘텐츠 구독제
                </label>
              </div>
            </div>

            <div className="input_wrap input_wrap2">
              <label htmlFor="inquiry_content">문의 내용</label>
              <textarea
                name="inquiry_content"
                id="inquiry_content"
                rows="8"
                placeholder="내용을 입력하세요."
                value={form.inquiry_content}
                onChange={onText}
              ></textarea>
            </div>

            <div className="input_wrap input_wrap2">
              <label>유입경로</label>
              <div className="checkbox_group checkbox_group2">
                <label>
                  <input
                    type="radio"
                    name="referral_source"
                    value="website"
                    checked={form.referral_source === "website"}
                    onChange={onText}
                    required
                  /> 검색
                </label>
                <label>
                  <input
                    type="radio"
                    name="referral_source"
                    value="ad"
                    checked={form.referral_source === "ad"}
                    onChange={onText}
                  /> 광고
                </label>
                <label>
                  <input
                    type="radio"
                    name="referral_source"
                    value="recommend"
                    checked={form.referral_source === "recommend"}
                    onChange={onText}
                  /> 지인 추천
                </label>
                <label>
                  <input
                    type="radio"
                    name="referral_source"
                    value="etc"
                    checked={form.referral_source === "etc"}
                    onChange={onText}
                  /> 기타
                </label>
              </div>
            </div>

            <div className="agree_wrap">
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onText}
                />
                문의를 위한 개인정보 활용에 동의합니다.
              </label>
               <p
                className="more"
                aria-expanded={showPolicy}
                aria-controls="policy-panel"
                onClick={() => setShowPolicy(v => !v)}>
                {showPolicy ? "닫기" : "자세히 보기"}
              </p>
            </div>
    <div id="policy-panel" className={`policy_box ${showPolicy ? "open" : ""}`} >
                <h4>개인정보 처리 동의(필수)</h4>
                <ul>
                  <li>
                    <b>수집 항목</b> : 담당자명, 연락처, 이메일, 기업명, 문의 내용, 접속 로그/쿠키(필요 시)
                  </li>
                  <li>
                    <b>수집 목적</b> : 상담 및 견적 제공, 서비스 안내/문의 대응, 고객 관리 및 민원 처리
                  </li>
                  <li>
                    <b>보유·이용 기간</b> : 목적 달성 후 즉시 파기 (단, 관련 법령에 따른 보존 기간이 있는 경우 해당 기간 보관)
                  </li>
                  <li>
                    <b>제3자 제공</b> : 원칙적으로 제공하지 않음. 제공이 필요한 경우 사전 동의 획득 또는 법령에 근거하여 처리
                  </li>
                  <li>
                    <b>처리 위탁</b> : 시스템 운영/유지보수, 고객상담 등을 위해 수탁사에 위탁할 수 있음(위탁 시 개인정보 보호를 위한 계약 및 관리·감독 실시)
                  </li>
                  <li>
                    <b>동의 거부 권리</b> : 귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 다만 동의하지 않을 경우 상담 및 서비스 안내가 제한될 수 있음
                  </li>
                  <li>
                    <b>파기 절차 및 방법</b> : 보유 기간 경과 또는 처리 목적 달성 시 지체 없이 안전한 방법으로 파기
                  </li>
                </ul>
                <p className="note">
                  ※ 본 동의서는 「개인정보 보호법」 등 관련 법령을 준수하며, 보다 상세한 내용은 개인정보처리방침을 참조해 주세요.
                </p>
              </div>
            <button type="submit" disabled={submitting}>
              {submitting ? "전송 중..." : "문의하기"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Consult;
