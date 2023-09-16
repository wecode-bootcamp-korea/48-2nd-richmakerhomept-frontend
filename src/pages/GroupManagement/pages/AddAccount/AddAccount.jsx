import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import { useGetCardsAndAccounts } from '../../../../hooks/api/group/useGetAccountAndCardList';
import './AddAccount.scss';
import { useNavigate } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const AddAccount = () => {
  const [checkedCardList, setCheckedCardList] = useState([]);
  const [checkedAccountList, setCheckedAccountList] = useState([]);
  const navigate = useNavigate();
  const numCardChecked = checkedCardList.length;
  const numAccountChecked = checkedAccountList.length;

  const {
    isLoading,
    data: accountsAndCardsData,
    isError,
  } = useGetCardsAndAccounts();

  const handleCardsAllCheck = ({ target: { checked } }) => {
    if (checked) {
      setCheckedCardList(accountsAndCardsData.cards.map(card => card.id));
    } else {
      setCheckedCardList([]);
    }
  };

  const handleAccountsAllCheck = ({ target: { checked } }) => {
    if (checked) {
      setCheckedAccountList(
        accountsAndCardsData.accounts.map(account => account.id),
      );
    } else {
      setCheckedAccountList([]);
    }
  };

  const totalAllCheck = ({ target: { checked } }) => {
    if (checked) {
      setCheckedCardList(accountsAndCardsData.cards.map(card => card.id));
      setCheckedAccountList(
        accountsAndCardsData.accounts.map(account => account.id),
      );
    } else {
      setCheckedCardList([]);
      setCheckedAccountList([]);
    }
  };

  const handleCardOnChange = id => {
    const isChecked = checkedCardList.includes(id);

    if (isChecked) {
      setCheckedCardList(prev => prev.filter(el => el !== id));
    } else {
      setCheckedCardList(prev => [...prev, id]);
    }
  };

  const handleAccountOnChange = id => {
    const isChecked = checkedAccountList.includes(id);

    if (isChecked) {
      setCheckedAccountList(prev => prev.filter(el => el !== id));
    } else {
      setCheckedAccountList(prev => [...prev, id]);
    }
  };

  const handleShare = () => {
    mutation.mutate();
  };

  const sendSelectedItems = async selectedItems => {
    try {
      const response = await axios.post(`${baseUrl}`, {
        selectedItems,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation(sendSelectedItems);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="addAccountContainer">
      <div className="header">
        <div className="closeBtnBox">
          <AiOutlineClose
            size={24}
            className="closeBtn"
            onClick={() => navigate('/group')}
          />
        </div>
        <div className="title">
          <h2>내 공유 데이터 설정</h2>
          <p>원치 않으시면 선택하지 않으셔도 됩니다.</p>
        </div>
      </div>

      <button className="allCheckBtn">
        <label htmlFor="checkAll">전체 선택</label>
        <input
          type="checkbox"
          id="checkAll"
          onChange={totalAllCheck}
          checked={
            numCardChecked === accountsAndCardsData.cards.length &&
            numAccountChecked === accountsAndCardsData.accounts.length
          }
        />
      </button>

      <div className="detailContainer">
        <div className="detailHeader">
          <p>카드</p>
          <input
            type="checkbox"
            onChange={handleCardsAllCheck}
            checked={numCardChecked === accountsAndCardsData.cards.length}
          />
        </div>
        <ul className="detailList">
          {accountsAndCardsData.cards.map(card => (
            <li key={card.id} className="detailItem">
              <div className="detailTitleBox">
                <img src={card.cardImage} alt="카드" className="detailImage" />
                <p className="detailTitle">{card.cardName}</p>
              </div>
              <input
                type="checkbox"
                onChange={() => handleCardOnChange(card.id)}
                checked={checkedCardList.includes(card.id)}
              />
            </li>
          ))}
        </ul>

        <div className="detailHeader">
          <p>은행</p>
          <input
            type="checkbox"
            onChange={handleAccountsAllCheck}
            checked={numAccountChecked === accountsAndCardsData.accounts.length}
          />
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
              <input
                type="checkbox"
                onChange={() => handleAccountOnChange(account.id)}
                checked={checkedAccountList.includes(account.id)}
              />
            </li>
          ))}
        </ul>
        <DefaultButton text="공유하기" onClick={handleShare} />
      </div>
    </div>
  );
};

export default AddAccount;
