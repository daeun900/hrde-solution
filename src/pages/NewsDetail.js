import "../css/news.scss";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

function NewsDetail() {
        const navigate = useNavigate();

      return (
    <>
      <div className="news_detail">
        <div className="wrap">
           <div className="title">
                <strong>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </strong>
                <span>
                  2024.09.15 
                </span>
            </div>
            <div className="content">
                  <p>
                    HRDe솔류션의 사업주훈련과 내일배움카드,  HRD FLEX까지 포함된 신규 LMS가 개발이 완료됐습니다.
                  </p>
                  <img src="img/news-detail.png" alt="" />
            </div>
            <div className="news-nav">
                <div className="prev">
                    <span> <CaretUp size={25} />PREV </span>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목             
                </div>
                <div className="next">
                      <span> <CaretDown size={25} />NEXT </span>
                      제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </div>
            </div>
            <button onClick={() => navigate('/news')}>목록</button>
        </div>
      </div>
    </>
  );
}

export default NewsDetail;