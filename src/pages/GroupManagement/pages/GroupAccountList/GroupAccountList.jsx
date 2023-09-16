import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { GROUP_CARD_TABS } from '../../../../utils/constant';
import { useGetAccounts } from '../../../../hooks/api/group/useGetAccountList';
import './GroupAccountList.scss';

const GroupAccountList = () => {
  // 탭별 화면은 쿼리스트링으로
  // 계좌 내역이 없을 때에도 '표시할 계좌 내역이 없습니다.' 표시

  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const navigate = useNavigate();

  const { isLoading, isError, data: accountList } = useGetAccounts();

  const handleTabClick = id => {
    setActiveTabIndex(id);
  };

  return (
    <div className="groupAccountListContainer">
      <div className="accountListHeader">
        <div className="accountListTitleBox">
          <BiArrowBack
            size={20}
            className="arrowBack"
            onClick={() => navigate(-1)}
          />
          <h1 className="title">계좌</h1>
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
      <div className="totalAccountPriceContainer">
        <div className="totalAccountPriceContentContainer">
          <div className="header">
            <p>잔고 합계</p>
            <p>
              <b className="price">20,000</b>원
            </p>
          </div>
          <div className="accountItemContainer">
            {accountList?.map(account => (
              <div className="accountList" key={account.accountId}>
                <img
                  src={account.accountImage}
                  alt="카드"
                  className="account"
                />
                <div className="accountTitleBox">
                  <p>{account.accountName}</p>
                  <span className="price">{account.price}원</span>
                </div>
                <img
                  src={account.profileImage}
                  alt="프로필"
                  className="profile"
                />
              </div>
            ))}

            {/* <div className="accountList">
              <img
                src="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/lotteCard_PNG.png"
                alt="카드"
                className="account"
              />
              <div className="accountTitleBox">
                <p>그린체크카드</p>
                <span className="price">0원</span>
              </div>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
                alt="프로필"
                className="profile"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAccountList;
