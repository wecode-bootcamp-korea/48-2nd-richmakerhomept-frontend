import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { RxDividerVertical } from 'react-icons/rx';
import ChangeProfileImage from './ChangeProfileImage/ChangeProfileImage';
import ChangePassword from './ChangePassword/ChangePassword';
import './MyPage.scss';

const MyPage = () => {
  return (
    <div className="myPageContainer">
      <div className="myPageTitleBox">
        <BiArrowBack size={20} className="arrowBack" />
        <h1 className="title">마이페이지</h1>
      </div>
      <div className="tabBox">
        <button className="changeBtn">프로필 이미지 변경</button>
        <RxDividerVertical size={35} className="divider" />
        <button className="changeBtn">비밀번호 변경</button>
      </div>
      <ChangePassword />
    </div>
  );
};

export default MyPage;
