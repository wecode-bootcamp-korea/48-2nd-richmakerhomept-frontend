import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useGetGroupAssets } from '../../../../hooks/api/group/useGetAccountList';
import Loading from '../../../../components/Loading/Loading';
import './GroupCardList.scss';

const GroupCardList = () => {
  // 탭별 화면은 쿼리스트링으로

  const [searchParams, setSearchParams] = useSearchParams();

  const assets = searchParams.get('type');
  const memberIdParam = searchParams.get('memberId');
  const memberId = parseInt(memberIdParam);

  const [activeTab, setActiveTab] = useState('공동');
  const navigate = useNavigate();

  const { isLoading, data: cardList } = useGetGroupAssets(assets, memberId);

  console.log(cardList);

  const handleTabClick = (tabName, tabUserId) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (tabName) {
      setActiveTab(tabName);
      newSearchParams.set('type', assets);
      newSearchParams.set('memberId', tabUserId);
    } else {
      setActiveTab('공동');
      newSearchParams.set('type', assets);
      newSearchParams.delete('memberId');
    }

    setSearchParams(newSearchParams);
  };

  if (isLoading) return <Loading />;

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
          {cardList.members.map(tab => (
            <button
              key={tab.userId}
              className={`groupTab ${activeTab === tab.userName ? 'bold' : ''}`}
              onClick={() => handleTabClick(tab.userName, tab.userId)}
            >
              {tab.userName}
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
            {cardList.info.map((card, i) => (
              <div className="accountItemBox" key={i}>
                <div className="cardTitleHeader" key={i}>
                  <p>{card.providerName}</p>
                  <p>
                    <b className="price">{card.total}</b>원
                  </p>
                </div>

                {card.finances.map((finance, i) => (
                  <div className="cardList" key={i}>
                    <img src={card.providerImage} alt="카드" className="card" />
                    <div className="cardTitleBox">
                      <p>{finance.financeNumber}</p>
                      <span className="price">
                        {Number(finance.sum).toLocaleString()}원
                      </span>
                    </div>
                    <img
                      src={finance.userProfile}
                      alt="프로필"
                      className="profile"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCardList;
