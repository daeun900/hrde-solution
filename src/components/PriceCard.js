import React, { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

function PriceCard({ title, price, priceDesc, featuresTitle, featuresList, featuresList2, tabs, tabPrices }) {
  
    const [activeTab, setActiveTab] = useState(0);
    const currentPrice = tabs && tabPrices ? tabPrices[activeTab] : { price, desc: priceDesc };
   const navigate = useNavigate();
    return (
    <div className="card">
      <div className="ttl">{title}</div>
      {tabs && (
        <ul className="tab">
          {tabs.map((tab, idx) => (
            <li
              key={tab}
              className={idx === activeTab ? "on" : ""}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </li>
          ))}
        </ul>
      )}
      <div className="price">
        <b>{currentPrice.price}</b>
        <p dangerouslySetInnerHTML={{ __html: currentPrice.desc || "&nbsp;",
    }}
  />
      </div>
      <button onClick={() => navigate('/consult')}>
        <p>견적 문의</p>
        <ArrowRight size={20} weight="bold" />
      </button>
      <div className="exp">
        {featuresTitle && (
        <b dangerouslySetInnerHTML={{ __html: featuresTitle.replace(/\n/g, "<br />") }} />
        )}
        <p dangerouslySetInnerHTML={{ __html: featuresList.replace(/\n/g, "<br />") }} />
        {featuresList2 && (
        <em dangerouslySetInnerHTML={{ __html: featuresList2.replace(/\n/g, "<br />") }} />
        )}
      </div>
    </div>
  );
}

export default PriceCard;
