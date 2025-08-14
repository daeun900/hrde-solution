import "../css/news.scss";
import { useNavigate } from 'react-router-dom';

function News() {
        const navigate = useNavigate();

      return (
    <>
    <div className="news_banner">
        <strong>HRDe NEWS</strong>
    </div>
    <div className="wrap">
        <div className="news_list">
            <div onClick={() => navigate('/newsdetail')}>
                <div className="ttl">
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </div>
                <div className="img">
                    <img src="img/news1.png" alt="" />
                </div>
                <div className="date">
                    2024.09.23
                </div>
            </div>
            <div>
                <div className="ttl">
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </div>
                <div className="img">
                    <img src="img/news2.png" alt="" />
                </div>
                <div className="date">
                    2024.09.23
                </div>
            </div>
            <div>
                <div className="ttl">
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </div>
                <div className="img">
                    <img src="img/news3.png" alt="" />
                </div>
                <div className="date">
                    2024.09.23
                </div>
            </div>
               <div>
                <div className="ttl">
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </div>
                <div className="img">
                    <img src="img/news3.png" alt="" />
                </div>
                <div className="date">
                    2024.09.23
                </div>
            </div>
               <div>
                <div className="ttl">
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </div>
                <div className="img">
                    <img src="img/news3.png" alt="" />
                </div>
                <div className="date">
                    2024.09.23
                </div>
            </div>
        </div>
    </div>
 

    </>
  );
}

export default News;  