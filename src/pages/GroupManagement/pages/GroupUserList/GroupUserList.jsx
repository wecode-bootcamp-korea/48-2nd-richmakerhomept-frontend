import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useGetGroupUsers } from '../../../../hooks/api/useGetGroupUser';
import GroupUser from './components/GroupUser';
import './GroupUserList.scss';

const GroupUserList = () => {
  const navigate = useNavigate();

  const { isLoading, data: userList, isError } = useGetGroupUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="groupUserListContainer">
      <div className="groupUserLIstTitleBox">
        <BiArrowBack
          size={20}
          className="arrowBack"
          onClick={() => navigate(-1)}
        />
        <h1 className="title">공동관리 설정</h1>
      </div>
      <div className="groupUserListContentContainer">
        {userList.map(el => (
          <GroupUser
            key={el.userId}
            profileImage={el.profileImage}
            userName={el.userName}
            sharedCount={el.sharedCount}
            hideDeleteButton={el.userId === 1}
            who={el.userId === 1 ? 'ME' : 'YOU'}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupUserList;
