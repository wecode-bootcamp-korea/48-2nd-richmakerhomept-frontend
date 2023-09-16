import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './AccountDetail.scss';

const AccountDetail = () => {
  const navigate = useNavigate();
  const { accountId } = useParams();

  return (
    <div className="accountDetailContainer">
      <div className="accountDetailHeader">
        <div className="accountListTitleBox">
          <BiArrowBack
            size={20}
            className="arrowBack"
            onClick={() => navigate(-1)}
          />
          <h1 className="title">상세정보</h1>
        </div>
      </div>

      <div className="accountDetailInfo">
        <div className="header">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
            alt="카드"
            className="cardImage"
          />
          <p className="title">잇(it)딴주머니통장</p>
        </div>
        <div className="summaryInfo">
          <p className="accountNumber">1020301230</p>
          <div className="priceBox">
            <p className="price">544원</p>
            <span className="priceInfo">(출금가능액 : 544원)</span>
          </div>
        </div>
      </div>

      <div className="accountDetailContainer">
        <p className="title">23년 9월</p>
        <div className="accountDetailContent">
          <div className="header">
            <p>23/09/14 12:15</p>
            <p>체크카드결</p>
          </div>
          <div className="body">
            <p>바나프레소 역삼대로</p>
            <p>-3,300원</p>
          </div>
          <p className="rest">1,144,638원</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
