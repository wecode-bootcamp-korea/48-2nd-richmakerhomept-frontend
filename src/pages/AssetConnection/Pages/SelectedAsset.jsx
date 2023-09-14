import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelectedAccount } from '../../../hooks/api/userAccount/useSelectedAccount';
import { BiArrowBack } from 'react-icons/bi';
import './SelectedAsset.scss';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';

const SelectedAsset = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const banks = searchParams.get('b');
  const cards = searchParams.get('c');
  console.log(`banks=[${banks}] / cards=[${cards}]`);

  // const { data, error, isLoading } = useSelectedAccount(banks, cards);
  // console.log(data);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) {
  //   console.log(error);
  // }

  return (
    <div className="selectedAsset">
      <header>
        <BiArrowBack
          className="toBack"
          onClick={() => {
            navigate(-1);
          }}
        />
      </header>

      <p className="announceMessage">
        <span className="highlight">불러올 자산을 선택</span>해주세요
      </p>

      <main className="assetListSection">
        {/*TODO : assetBox?.map돌리고 assetList 안에서  assetCard를 map 또 돌리자*/}
        <div className="assetBox">
          <div className="assetTitle">
            <h3>카카오뱅크</h3>
          </div>
          <div className="assetList">
            <div className="assetCard">
              <div className="assetInfo">
                <h5 className="assetName">입출금통장</h5>
                <p className="assetNumber">356-1212-5643-03</p>
              </div>
              <input type="checkbox" />
            </div>
            <div className="assetCard">
              <div className="assetInfo">
                <h5 className="assetName">세이프박스</h5>
                <p className="assetNumber">333-3312-7624-01</p>
              </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </main>

      <DefaultButton text="저장하기" />
    </div>
  );
};

export default SelectedAsset;
