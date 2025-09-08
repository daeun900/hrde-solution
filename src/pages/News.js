import "../css/news.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const navigate = useNavigate();

  const PER_PAGE = 10;
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);    // 최초 로딩
  const [loadingMore, setLoadingMore] = useState(false); // 더보기 로딩
  const [hasMore, setHasMore] = useState(true);    // 다음 페이지 존재 여부

  const fetchNews = async (targetPage, isLoadMore = false) => {
    try {
      if (isLoadMore) setLoadingMore(true);
      else setLoading(true);

      const res = await axios.get("https://hrde.co.kr/wp-json/hrde/v1/news", {
        params: { page: targetPage, per_page: PER_PAGE }
      });

      const data = Array.isArray(res.data) ? res.data : (res.data.items || []);

      if (data.length < PER_PAGE) setHasMore(false);

      setNewsList(prev => {
        const seen = new Set(prev.map(v => v.idx));
        const merged = [...prev];
        data.forEach(item => {
          if (!seen.has(item.idx)) merged.push(item);
        });
        return merged;
      });

      setPage(targetPage); // 현재 페이지 갱신
    } catch (err) {
      console.error("뉴스 목록 불러오기 실패:", err);
      if (!isLoadMore) setNewsList([]);

    } finally {
      if (isLoadMore) setLoadingMore(false);
      else setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(1, false);
  }, []);

  const handleLoadMore = () => {
    if (loadingMore || !hasMore) return;
    fetchNews(page + 1, true);
  };

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
        
        <div className="btn_wrap">
          {hasMore && (
            <button class="more" onClick={handleLoadMore} disabled={loadingMore} >더보기 +</button>
         )}
        </div>
        
      </div>
       
    </>
  );
}

export default News;
