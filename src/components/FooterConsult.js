import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import {ChatCircleDots} from "@phosphor-icons/react";

function FooterConsult() {
    return(
        <div className="footer_consult">
        <div className="sec1">
          <div className="wrap">
            <strong>HRDe솔루션은 훈련생에게 최고의 교육을 선사하고<br />
            원격훈련의 기준을 높이겠습니다.</strong>
            <div className="btn_wrap">
              <button>
                <div className="txt">
                  <span>HRDe LMS</span>
                  <p>통합본 다운로드</p>
                </div>
                <DownloadIcon className='icon'/>
              </button>
              <button>
               <div className="txt">
                 <span>HRDe LMS</span>
                 <p>브로슈어 다운로드</p>
                </div>
                <DownloadIcon className='icon'/>
              </button>
              <button>
                <div className="txt">
                  <span>HRDe LMS</span>
                  <p>APP 브로슈어 다운로드</p>
                </div>
                <DownloadIcon className='icon'/>
              </button>
              <button>
                <div className="txt">
                  <span>HRDe LMS</span>
                  <p>디자인 매뉴얼 다운로드</p>
                </div>
                <DownloadIcon className='icon'/>
              </button>
            </div>
          </div>
        </div>
         <div className="sec2">
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
        </div>
      </div>
    )
}

export default FooterConsult;