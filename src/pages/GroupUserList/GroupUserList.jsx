import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import GroupUser from './components/GroupUser';
import './GroupUserList.scss';

const GroupUserList = () => {
  return (
    <div className="groupUserListContainer">
      <div className="groupUserLIstTitleBox">
        <BiArrowBack size={20} className="arrowBack" />
        <h1 className="title">공동관리 설정</h1>
      </div>
      <div className="groupUserListContentContainer">
        <GroupUser hideDeleteButton={true} />
        <GroupUser />
        <GroupUser />
      </div>
    </div>
  );
};

export default GroupUserList;
