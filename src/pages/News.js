import "../css/news.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get("https://hrde.co.kr/wp-json/hrde/v1/news", {
    params: { page: 1, per_page: 10 }
  })
  .then(res => {
    const data = Array.isArray(res.data) ? res.data : res.data.items || [];
    setNewsList(data);
  })
  .catch(err => {
    console.error("뉴스 목록 불러오기 실패:", err);
    setNewsList([]);
  })
  .finally(() => setLoading(false));
}, []);


  if (loading) return <p style={{ textAlign: "center" }}>뉴스를 불러오는 중...</p>;

  return (
    <>
      <div className="news_banner">
        <strong>HRDe NEWS</strong>
      </div>
      <div className="wrap">
        <div className="news_list">
          {newsList.map(item => (
            <div 
              key={item.idx} 
              onClick={() => navigate(`/newsdetail/${item.idx}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="ttl">{item.Title}</div>
              <div className="img">
                <img src={item.Thumbnail || "img/news-thumbnail.jpg"} alt={item.Title} />
              </div>
              <div className="date">{item.RegDate}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
