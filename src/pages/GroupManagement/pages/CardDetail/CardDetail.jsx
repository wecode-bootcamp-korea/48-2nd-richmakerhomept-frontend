import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import './CardDetail.scss';

const CardDetail = () => {
  const navigate = useNavigate();

  const percentBar = Math.min(12, 105);

  return (
    <div className="cardDetailContainer">
      <div className="cardDetailHeader">
        <div className="cardListTitleBox">
          <BiArrowBack
            size={20}
            className="arrowBack"
            onClick={() => navigate(-1)}
          />
          <h1 className="title">
            <p>2023년 9월</p>
            <IoIosArrowDown size={18} />
          </h1>
        </div>

        <div className="contentContainer">
          <div className="contentHeader">
            <p className="cardName">플러스</p>
            <p className="accountNumber">4848128989891</p>
            <p className="price">2,200원</p>
          </div>
          <div className="comparison">
            <div className="percentBar" style={{ width: `${percentBar}%` }}>
              {percentBar}%
            </div>
          </div>
          <div className="priceGoal">
            <p>지출목표</p>
            <p className="price">52,800원 &gt;</p>
          </div>
        </div>
      </div>

      {/* map 돌려야함! */}
      <div className="cardUsingList">
        <div className="header">
          <p>8일</p>
          <p>2,200원</p>
        </div>
        <div className="content">
          <img
            src="https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png"
            alt="카테고리"
            className="category"
          />
          <div className="detailContent">
            <p className="title">(주)이마트24 MV의왕</p>
            <p className="price">2,200원</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
