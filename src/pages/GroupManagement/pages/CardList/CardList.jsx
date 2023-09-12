import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { GROUP_CARD_TABS } from '../../../../utils/constant';
import './CardList.scss';

const CardList = () => {
  // 탭별 화면은 쿼리스트링으로

  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = id => {
    setActiveTabIndex(id);
  };

  return (
    <div className="cardListContainer">
      <div className="cardListHeader">
        <div className="cardListTitleBox">
          <BiArrowBack
            size={20}
            className="arrowBack"
            onClick={() => navigate(-1)}
          />
          <h1 className="title">카드</h1>
        </div>
        <div className="groupUser">
          {GROUP_CARD_TABS.map(tab => (
            <button
              key={tab.id}
              className={`groupTab ${activeTabIndex === tab.id ? 'bold' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="totalCardPriceContainer">
        <div className="totalCardPriceContentContainer">
          <div className="header">
            <p>월 카드 이용료 합계</p>
            <p>
              <b className="price">0</b>원
            </p>
          </div>
          <div className="cardItemContainer">
            <div className="cardTitleHeader">
              <p>IBK 기업은행카드</p>
              <p>
                <b className="price">0</b>원
              </p>
            </div>
            <div className="cardList">
              <img
                src="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/lotteCard_PNG.png"
                alt="카드"
                className="card"
              />
              <div className="cardTitleBox">
                <p>그린체크카드</p>
                <span className="price">0원</span>
              </div>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
                alt="프로필"
                className="profile"
              />
            </div>

            <div className="cardList">
              <img
                src="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/lotteCard_PNG.png"
                alt="카드"
                className="card"
              />
              <div className="cardTitleBox">
                <p>그린체크카드</p>
                <span className="price">0원</span>
              </div>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
                alt="프로필"
                className="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
