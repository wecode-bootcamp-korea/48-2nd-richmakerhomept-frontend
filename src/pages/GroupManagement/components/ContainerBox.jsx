import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContainerBox.scss';

const ContainerBox = ({ title, count, assets, assetType, onClick }) => {
  const navigate = useNavigate();

  const assetListLength = assets ? assets.length : 0;
  const visibleAssets = assetListLength > 2 ? assets.slice(0, 2) : assets;

  const goToDetailAsset = assetId => {
    const basePath = assetType === 'card' ? '/group/card' : '/group/account';
    navigate(`${basePath}/${assetId}`);
  };

  return (
    <div className="container">
      <div className="boxHeader" onClick={() => navigate('/group/account')}>
        <h1 className="title">{title}</h1>
        <p className="count">{count}</p>
      </div>
      <div className="assetListBox">
        {visibleAssets?.map(asset => (
          <div
            className="assetListContainer"
            key={asset.accountId || asset.cardId}
            onClick={() => goToDetailAsset(asset.accountId || asset.cardId)}
          >
            <img
              className="userPofileImage"
              src={asset.profileImage}
              alt="프로필"
            />
            {assetType === 'account' ? (
              <img
                className="accountImage"
                src={asset.accountImage}
                alt="은행"
              />
            ) : (
              <img className="cardImage" src={asset.cardImage} alt="카드" />
            )}
            <div className="accountItemBox">
              <p className="accountName">
                {asset.accountName || asset.cardName}
              </p>
              <p className="price">{asset.amount}원</p>
            </div>
          </div>
        ))}
        {assetListLength > 2 && (
          <button className="moreAccount" onClick={onClick}>
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default ContainerBox;
