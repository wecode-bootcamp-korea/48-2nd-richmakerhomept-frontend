import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormAdd } from 'react-icons/gr';
import { useGetGroupManagement } from '../../hooks/api/useGetGroupManagement';
import InviteModal from '../AddUser/components/InviteModal';
import ContainerBox from './components/ContainerBox';
import './GroupManagement.scss';
import GroupNoAccount from './components/GroupNoAccount';

// 계좌랑 카드의 수가 2개 이상이면 더보기 버튼이 보이도록!!
// 계좌 및 카드가 없으면 GroupNoAccount 보여지도록!!

const GroupManagement = () => {
  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsOpenAddUserModal(true);
  };

  const closeModal = () => {
    if (isOpenAddUserModal === true) return setIsOpenAddUserModal(false);
  };

  const { isLoading, data, isError } = useGetGroupManagement();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  // const { id, title, body, userId } = data;

  return (
    <div className="groupContainer">
      <div className="groupContentContainer">
        <div className="header">
          <img
            className="pofileImage"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
            alt="프로필"
            onClick={() => navigate('/group/group-user')}
          />
          <GrFormAdd
            size={30}
            className="addAccount"
            onClick={() => navigate('/group/add-account')}
          />
        </div>
        <div className="totalPrice" onClick={() => navigate('/group/use')}>
          <div className="detailBox">
            <div className="detail">
              <h1 className="title">수입</h1>
              <span className="count">2건</span>
            </div>
            <p className="price">1원</p>
          </div>
          <div className="detailBox">
            <div className="detail">
              <h1 className="title">지출</h1>
              <span className="count">2건</span>
            </div>
            <p className="price">1원</p>
          </div>
        </div>
        <ContainerBox
          title="계좌"
          count="10건"
          firstAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/busanBank_PNG.png"
          firstAccountName="부산은행 계좌"
          secondAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/citiBank_PNG.png"
          secondAccountName="씨티은행 계좌"
          onClick={() => navigate('/group/account')}
        />
        <ContainerBox
          title="카드"
          count="3건"
          firstAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/busanBank_PNG.png"
          firstAccountName="부산은행 계좌"
          secondAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/citiBank_PNG.png"
          secondAccountName="씨티은행 계좌"
          onClick={() => navigate('/group/card')}
        />
        <div className="addUserBox">
          <h1 className="title">구성원 추가하기</h1>
          <GrFormAdd
            size={30}
            className="addUserButton"
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isOpenAddUserModal && (
        <InviteModal
          isOpenAddUserModal={isOpenAddUserModal}
          closeModal={closeModal}
          hideNavbar={true}
        />
      )}
    </div>
    // <GroupNoAccount />
  );
};

export default GroupManagement;
