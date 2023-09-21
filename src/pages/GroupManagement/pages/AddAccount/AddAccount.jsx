import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Loading from '../../../../components/Loading/Loading';
import { useGetGroupFinanceList } from '../../../../hooks/api/group/myAssets';
import './AddAccount.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;
const accessToken = localStorage.getItem('accessToken');

const AddAccount = () => {
  const [checkedCardList, setCheckedCardList] = useState([]);
  const [checkedAccountList, setCheckedAccountList] = useState([]);
  const navigate = useNavigate();
  const numCardChecked = checkedCardList.length;
  const numAccountChecked = checkedAccountList.length;

  const { isLoading, data: accountsAndCardsData } = useGetGroupFinanceList();

  const cards = accountsAndCardsData?.cards || [];
  const banks = accountsAndCardsData?.banks || [];

  const handleShare = () => {
    const isAll =
      numCardChecked === cards.length && numAccountChecked === banks.length;
    const financeId = [...checkedCardList, ...checkedAccountList];

    mutation.mutate({ isAll, financeId });
    navigate('/group');
  };

  const mutation = useMutation(async ({ isAll, financeId }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/group/financeList`,
        {
          isAll,
          financeId,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `${accessToken}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  });

  const handleCardsAllCheck = ({ target: { checked } }) => {
    if (checked) {
      setCheckedCardList(cards.map(card => card.financeId));
    } else {
      setCheckedCardList([]);
    }
  };

  const handleAccountsAllCheck = ({ target: { checked } }) => {
    if (checked) {
      setCheckedAccountList(banks.map(account => account.financeId));
    } else {
      setCheckedAccountList([]);
    }
  };

  const totalAllCheck = ({ target: { checked } }) => {
    if (checked) {
      setCheckedCardList(cards.map(card => card.financeId));
      setCheckedAccountList(banks.map(account => account.financeId));
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

    if (isLoading) return <Loading />;

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
              numCardChecked === cards?.length &&
              numAccountChecked === banks.length
            }
          />
        </button>

        <div className="detailContainer">
          {cards &&
            cards.map(card => (
              <>
                <div className="detailHeader">
                  <p>카드</p>
                  <input
                    type="checkbox"
                    onChange={handleCardsAllCheck}
                    checked={numCardChecked === cards?.length}
                  />
                </div>
                <ul className="detailList">
                  <li key={card.financeId} className="detailItem">
                    <div className="detailTitleBox">
                      <img
                        src={card.providerImage}
                        alt="카드"
                        className="detailImage"
                      />
                      <p className="detailTitle">{card.providerName}</p>
                    </div>
                    <input
                      type="checkbox"
                      onChange={() => handleCardOnChange(card.financeId)}
                      checked={checkedCardList.includes(card.financeId)}
                    />
                  </li>
                </ul>
              </>
            ))}

          {banks &&
            banks?.map(account => (
              <>
                <div className="detailHeader">
                  <p>은행</p>
                  <input
                    type="checkbox"
                    onChange={handleAccountsAllCheck}
                    checked={numAccountChecked === banks?.length}
                  />
                </div>
                <ul className="detailList">
                  <li key={account.financeId} className="detailItem">
                    <div className="detailTitleBox">
                      <img
                        src={account.providerImage}
                        alt="은행"
                        className="detailImage"
                      />
                      <p className="detailTitle">{account.providerName}</p>
                    </div>
                    <input
                      type="checkbox"
                      onChange={() => handleAccountOnChange(account.financeId)}
                      checked={checkedAccountList.includes(account.financeId)}
                    />
                  </li>
                </ul>
              </>
            ))}
          <DefaultButton text="공유하기" onClick={handleShare} />
        </div>
      </div>
    );
  };
};

export default AddAccount;
