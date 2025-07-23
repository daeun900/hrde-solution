import "../css/consult.scss";
import { ArrowRight } from "@phosphor-icons/react";

function Consult() {
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

          <button>
            LMS 제안서 다운로드 <ArrowRight size={20} weight="bold" />
          </button>
          <button>
            콘텐츠 제안서 다운로드 <ArrowRight size={20} weight="bold" />
          </button>
        </div>
      </div>
      <div className="consult_form">
        <div className="wrap">
            <div className="grid">
                <div className="input_wrap">
                    <label htmlFor="contact_name">담당자<i> *</i></label>
                    <input type="text" name="contact_name" id="contact_name" placeholder="담당자명을 입력하세요." />
                 </div>
                <div className="input_wrap">
                    <label htmlFor="company_name">기업명</label>
                    <input type="text" name="company_name" id="company_name" placeholder="기업명을 입력하세요."  />
                </div>
            </div>

            <div className="grid">
                <div className="input_wrap">
                    <label htmlFor="contact_phone">연락처<i> *</i></label>
                    <input type="text" name="contact_phone" id="contact_phone" placeholder="연락처를 입력하세요."  />
                </div>
                <div className="input_wrap">
                    <label htmlFor="contact_email">이메일<i> *</i></label>
                    <input type="text" name="contact_email" id="contact_email" placeholder="이메일을 입력하세요." />
                </div>
             </div>

            <div className="input_wrap input_wrap2">
                <label>서비스</label>
                <div className="checkbox_group">
                    <label><input type="checkbox" name="inquiry_type" value="lms" /> HRDe LMS 임대</label>
                    <label><input type="checkbox" name="inquiry_type" value="archive" />HRDe 아카이브 임대</label>
                    <label><input type="checkbox" name="inquiry_type" value="contents1" />콘텐츠 임대</label>
                    <label><input type="checkbox" name="inquiry_type" value="contents2" />콘텐츠 구독제</label>
                </div>
            </div>
   
            <div className="input_wrap input_wrap2">
                <label htmlFor="inquiry_content">문의 내용</label>
                <textarea name="inquiry_content" id="inquiry_content" rows="8" placeholder="내용을 입력하세요."></textarea>
            </div>
   
          <div className="input_wrap input_wrap2">
            <label>유입경로</label>
            <div className="checkbox_group checkbox_group2">
              <label><input type="checkbox" name="referral_source" value="website" /> 검색</label>
              <label><input type="checkbox" name="referral_source" value="ad" /> 광고</label>
              <label><input  type="checkbox" name="referral_source"value="recommend"/> 지인 추천</label>
              <label><input type="checkbox" name="referral_source" value="etc" /> 기타 </label>
            </div>
          </div>

          <div className="agree_wrap">
                 <label><input type="checkbox" name="agree" value="agree" />문의를 위한 개인정보 활용에 동의합니다.</label>
                <p className="more">자세히 보기</p>
          </div>
          <button>
            문의하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Consult;
