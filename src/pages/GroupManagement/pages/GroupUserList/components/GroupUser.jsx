import React from 'react';
import { ImBin2 } from 'react-icons/im';
import './GroupUser.scss';

const GroupUser = ({ name, hideDeleteButton }) => {
  return (
    <div className="groupUserContainer">
      <div className="groupUserDetailBox">
        <div className="groupUserDetailHeader">
          <span className="who">Me</span>
          {!hideDeleteButton && <ImBin2 size={15} className="deleteButton" />}
        </div>
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
          alt="프로필"
          className="userProfileImage"
        />
        <h1>이인재</h1>
        <span className="count">공유 2건</span>
      </div>
    </div>
  );
};

export default GroupUser;
