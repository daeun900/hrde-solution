import React from 'react';

function Footer() {
  return (
    <>
     <div className="footer">
        <div className="wrap">
          <div className="grid">
            <div className="img">
            <span>HRDe Solution 대표: 박병래</span>
              <img src='/img/hrde-logo-white.png' alt='HRDe Solution'/>
            </div>
            <div className="txt">
              <span>Address</span>
              <p>경기도 용인시 기흥구 흥덕1로 13 흥덕IT밸리</p>
              <p>원격평생교육원: 타워동 103호</p>
              <p>LMS 개발부: 타워동 104호</p>
              <p>컨텐츠 개발부: 타워동 105호</p>
              <p>경영지원실: 타워동 103A호</p>
            </div>
            <div className="txt">
              <span>Info</span>
             
              <p>사업자등록번호: 591-87-02242</p>
              <p>Tel: 1811-9530</p>
              <p>Fax: 031-211-1330 </p>
              <p>E-Mail: hrde@hrde.co.kr</p>
            </div>
          </div>
          <div className="copyright">
            COPYRIGHT ⓒ HRDe Solution Inc. ALL RIGHTS RESERVED
          </div>
        </div>
     </div>
    </>
  );
}

export default Footer;
