import React from 'react';
import {Link}  from 'react-router-dom';
import { CaretRight } from "@phosphor-icons/react";
function Footer() {
  return (
    <>
     <div className="footer">
        <div className="top">
          <div className="wrap">
            <ul className="link">
              <li><Link to="https://www.hrdeedu.com/hrdedu/group/introduce.html"  target="_blank" >회사 소개</Link></li>
              <li><Link to="https://www.hrdeedu.com/hrdedu/group/introduce.html"  target="_blank" >찾아오시는 길</Link></li>
            </ul>
            <ul className="social">
              <li><Link to="http://pf.kakao.com/_xaSSxgxj/chat"  target="_blank" ><img src="img/footer-soc1.png" alt="카카오톡 바로가기" /></Link></li>
              <li><Link to="https://blog.naver.com/hrdesolution"  target="_blank" ><img src="img/footer-soc2.png" alt="블로그 바로가기" /></Link></li>
              <li><Link to="https://www.youtube.com/@hrd9130"  target="_blank" ><img src="img/footer-soc3.png" alt="유튜브 바로가기" /></Link></li>
            </ul>
          </div>
          </div>
          <div className="bottom">
            <div className="wrap">
              <div className="left">
                <ul>
                  <li><b>(주)HRDe 솔루션</b></li>
                  <li>대표자: 박병래</li>
                  <li>사업자등록번호 : 591-87-02242</li>
                  <li>개인정보관리자 : 노현정</li>
                </ul>
                <ul>
                  <li>주소 : 경기도 용인시 기흥구 흥덕1로 13 흥덕 IT밸리 타워동 105호</li>
                  <li>E-Mail : hrde@hrde.co.kr</li>
                </ul>
                <ul>
                  <li>COPYRIGHT ⓒ HRDe Solution Inc. ALL RIGHTS RESERVED.</li>
                </ul>
              </div>
              <div className="right">
                <div className="icn"><img src="img/footer-icn.png" alt="아이콘"/>고객센터<CaretRight size={16}/></div>
                <div className="cs">
                  <strong>1811-9530</strong>
                  <p><b>상담시간</b>평일 09:00 ~ 18:00</p>
                  <p><b>휴뮤일</b>토요일, 일요일, 공휴일</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default Footer;
