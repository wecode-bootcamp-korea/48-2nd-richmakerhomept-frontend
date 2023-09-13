import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccountData } from '../../hooks/api/userAccount/useAccountData';
import { BiArrowBack } from 'react-icons/bi';
import CardList from './Lists/CardList';
import BankList from './Lists/BankList';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import './AssetConnection.scss';

const AssetConnection = () => {
  const navigate = useNavigate();

  const [myCards, setMyCards] = useState([]);
  const [myBanks, setMyBanks] = useState([]);
  const [cardClick, setCardClick] = useState(true);
  const [bankClick, setBankClick] = useState(false);

  const { data, isError } = useAccountData();
  useEffect(() => {
    if (data) {
      setMyCards(data.cards);
      setMyBanks(data.banks);
    } else if (isError) {
      console.error('데이터 통신 실패');
    } else {
      console.log('통신 실패');
    }
  }, [data, isError]);

  const handleCardClick = () => {
    setCardClick(true);
    setBankClick(false);
  };
  const handlebankClick = () => {
    setCardClick(false);
    setBankClick(true);
  };

  return (
    <div className="assetConnection">
      <header>
        <BiArrowBack
          className="toBack"
          onClick={() => {
            navigate(-1);
          }}
        />
      </header>

      <section className="announcementMessage">
        <h5>연결할 기관을</h5>
        <h5>
          <span className="highlight">카테고리별로 선택</span>해주세요
        </h5>
      </section>

      <section className="categories">
        <button
          className={`categoryButton ${cardClick ? 'bold' : ''}`}
          onClick={handleCardClick}
        >
          카드
        </button>
        <button
          className={`categoryButton ${bankClick ? 'bold' : ''}`}
          onClick={handlebankClick}
        >
          은행
        </button>
      </section>

      {cardClick && <CardList data={myCards} />}
      {bankClick && <BankList data={myBanks} />}

      <DefaultButton text="저장" />
    </div>
  );
};

export default AssetConnection;
