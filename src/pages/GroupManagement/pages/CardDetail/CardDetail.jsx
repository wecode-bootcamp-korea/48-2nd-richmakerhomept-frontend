import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { formatDate } from '../../../../utils/constant';
import './CardDetail.scss';
import CalendarModal from '../../../../components/CalendarModal/CalendarModal';

const CardDetail = () => {
  const navigate = useNavigate();
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(formatDate);

  // TODO: (지출액 / 지출목표) * 100 해야함!! 통신할 때!!
  const percentBar = Math.min(25, 100);

  const handleOpenCalendar = () => {
    setIsOpenCalendar(true);
  };

  const handleCloseCalendar = () => {
    setIsOpenCalendar(false);
  };

  return (
    <>
      <div className="cardDetailContainer">
        <div className="cardDetailHeader">
          <div className="cardListTitleBox">
            <BiArrowBack
              size={20}
              className="arrowBack"
              onClick={() => navigate(-1)}
            />
            <h1 className="title" onClick={handleOpenCalendar}>
              <p>{selectedDate}</p>
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
              <div className="percentBar" style={{ width: `${percentBar}%` }} />
              <p className="percentText">{percentBar}%</p>
            </div>
            <div className="priceGoal">
              <p>지출목표</p>
              <p className="price">52,800원 &gt;</p>
            </div>
          </div>
        </div>

        {/* TODO: map 돌려야함! */}
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
              <p>2,200원</p>
            </div>
          </div>

          <div className="content">
            <img
              src="https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png"
              alt="카테고리"
              className="category"
            />
            <div className="detailContent">
              <p className="title">(주)이마트24 MV의왕</p>
              <p>2,200원</p>
            </div>
          </div>
        </div>
      </div>
      {isOpenCalendar && (
        <CalendarModal
          closeModal={handleCloseCalendar}
          onDateSelect={newDate => setSelectedDate(newDate)}
        />
      )}
    </>
  );
};

export default CardDetail;
