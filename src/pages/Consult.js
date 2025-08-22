import "../css/consult.scss";
import { ArrowRight } from "@phosphor-icons/react";
import React, { useState } from "react";
import axios from "axios";

// 체크박스 코드 매핑(첫 번째 체크만 사용)
const serviceMap = { lms: "A", archive: "B", contents1: "C", contents2: "D" };
const acqMap = { website: "A", recommend: "B", ad: "C", etc: "D" };
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function Consult() {
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

    const firstService = form.inquiry_type[0];
    const firstAcq = form.referral_source[0];

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
      alert("문의가 접수되었습니다. 감사합니다!");
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

      <div className="consult_form">
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
              <p className="more">자세히 보기</p>
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
