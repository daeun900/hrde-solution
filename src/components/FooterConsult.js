import React from 'react';
import ButtonGroup from './ButtonGroup';

function FooterConsult() {
  const buttons = [
    { label: "HRDe LMS", description: "통합본 다운로드", link: "/files/integrated.pdf" },
    { label: "HRDe LMS", description: "브로슈어 다운로드", link: "/files/brochure.pdf" },
    { label: "HRDe LMS", description: "APP 브로슈어 다운로드", link: "/files/app_brochure.pdf" },
    { label: "HRDe LMS", description: "디자인 매뉴얼 다운로드", link: "/files/design_manual.pdf" }
  ];

    return(
        <div className="footer_consult">
        <div className="sec1">
          <div className="wrap">
            <strong>HRDe솔루션은 훈련생에게 최고의 교육을 선사하고<br />
            원격훈련의 기준을 높이겠습니다.</strong>
            
            <ButtonGroup buttons={buttons} />
          </div>
        </div>
  {/*        <div className="sec2">
            <div className='sec2_1'>
              <span>HRDe 고객센터</span>
              <strong>1811-9530</strong>
              <p>E-Mail : hrde@hrde.co.kr</p>
            </div>
            <div className='sec2_2'>
              <span>LMS / CONTENTS / CONSULTING 문의</span>
              <p>더 나은 원격훈련 환경을 만들기 위해 앞장서겠습니다.</p>
              <button>
                <ChatCircleDots className='icon' weight="fill" size={24}/>
                문의하기
              </button>
          </div>
        </div> */}
      </div>
    )
}

export default FooterConsult;