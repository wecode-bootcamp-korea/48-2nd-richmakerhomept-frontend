import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GoCheckCircle } from 'react-icons/go';
import { useGetCardsAndAccounts } from '../../../../hooks/api/group/useGetAccountAndCardList';
import './AddAccount.scss';

const AddAccount = () => {
  const {
    isLoading,
    data: accountsAndCardsData,
    isError,
  } = useGetCardsAndAccounts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="addAccountContainer">
      <div className="header">
        <div className="closeBtnBox">
          <AiOutlineClose size={24} className="closeBtn" />
        </div>
        <div className="title">
          <h2>내 공유 데이터 설정</h2>
          <p>원치 않으시면 선택하지 않으셔도 됩니다.</p>
        </div>
      </div>

      <button className="allCheckBtn">
        <span>전체 선택</span>
        <GoCheckCircle size={22} className="checkIcon" />
      </button>

      <div className="detailContainer">
        <div className="detailHeader">
          <p>카드</p>
        </div>
        <ul className="detailList">
          {accountsAndCardsData.cards.map(card => (
            <li key={card.id} className="detailItem">
              <div className="detailTitleBox">
                <img src={card.cardImage} alt="카드" className="detailImage" />
                <p className="detailTitle">{card.cardName}</p>
              </div>
              <GoCheckCircle size={22} className="checkIcon" />
            </li>
          ))}
        </ul>

        <div className="detailHeader">
          <p>은행</p>
        </div>
        <ul className="detailList">
          {accountsAndCardsData.accounts.map(account => (
            <li key={account.id} className="detailItem">
              <div className="detailTitleBox">
                <img
                  src={account.accountImage}
                  alt="은행"
                  className="detailImage"
                />
                <p className="detailTitle">{account.accountName}</p>
              </div>
              <GoCheckCircle size={22} className="checkIcon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddAccount;
