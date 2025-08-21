import "../css/news.scss";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const BASE = "https://hrde.co.kr/wp-json/hrde/v1";

function NewsDetail() {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchNewsDetail(id) {
    const url = `${BASE}/news/${id}`;
    const res = await axios.get(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" }
    });
    return res.data;
  }

  useEffect(() => {
    if (!idx) return;
    fetchNewsDetail(idx)
      .then(data => setNews(data))
      .catch(err => console.error("뉴스 상세 불러오기 실패:", err))
      .finally(() => setLoading(false));
  }, [idx]);

  if (loading) return <div>로딩 중...</div>;
  if (!news) return <div>뉴스를 불러올 수 없습니다.</div>;

  return (
    <div className="news_detail">
      <div className="wrap">
        <div className="title">
          <strong>{news.Title}</strong>
          <span>{news.RegDate}</span>
        </div>

        <div className="content" dangerouslySetInnerHTML={{ __html: news.Content }} />

        <div className="news-nav">
          {news.Prev && (
            <div
              className="prev"
              onClick={() => navigate(`/newsdetail/${news.Prev.idx}`)}
              style={{cursor: "pointer"}}
            >
              <span><CaretUp size={25} /> PREV </span>
              {news.Prev.Title}
            </div>
          )}
          {news.Next && (
            <div
              className="next"
              onClick={() => navigate(`/newsdetail/${news.Next.idx}`)}
              style={{cursor: "pointer"}}
            >
              <span><CaretDown size={25} /> NEXT </span>
              {news.Next.Title}
            </div>
          )}
        </div>

        <button onClick={() => navigate('/news')}>목록</button>
      </div>
    </div>
  );
}

export default NewsDetail;
