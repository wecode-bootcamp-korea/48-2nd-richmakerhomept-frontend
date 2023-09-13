import React from 'react';
import './ContainerBox.scss';

const ContainerBox = ({
  title,
  count,
  firstAccountImage,
  firstAccountName,
  secondAccountImage,
  secondAccountName,
  onClick,
}) => {
  return (
    <div className="container">
      <div className="boxHeader">
        <h1 className="title">{title}</h1>
        <p className="count">{count}</p>
      </div>
      <div className="accountListBox">
        <div className="accountListContainer">
          <img
            className="userPofileImage"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
            alt="프로필"
          />
          <img className="accountImage" src={firstAccountImage} alt="은행" />
          <p className="accountName">{firstAccountName}</p>
        </div>
        <div className="accountListContainer">
          <img
            className="userPofileImage"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
            alt="프로필"
          />
          <img className="accountImage" src={secondAccountImage} alt="은행" />
          <p className="accountName">{secondAccountName}</p>
        </div>
        <button className="moreAccount" onClick={onClick}>
          더보기
        </button>
      </div>
    </div>
  );
};

export default ContainerBox;
