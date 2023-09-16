import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormAdd } from 'react-icons/gr';
import { useGetGroupMain } from '../../hooks/api/useGetGroupMain';
import InviteModal from '../AddUser/components/InviteModal';
import ContainerBox from './components/ContainerBox';
import GroupNoAccount from './components/GroupNoAccount';
import './GroupManagement.scss';

// 계좌랑 카드의 수가 2개 이상이면 더보기 버튼이 보이도록!!
// 계좌 및 카드가 없으면 GroupNoAccount 보여지도록!!

const GroupManagement = () => {
  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsOpenAddUserModal(true);
  };

  const closeModal = () => setIsOpenAddUserModal(false);

  const { isLoading, data: mainData, isError } = useGetGroupMain();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const {
    members,
    totalImportCount,
    totalImportPrice,
    totalPaymentCount,
    totalPaymentPrice,
    cards,
    accounts,
  } = mainData;

  const groupCardsCount = cards?.length === undefined ? 0 : cards?.length;
  const groupAccountsCount =
    accounts?.length === undefined ? 0 : accounts?.length;

  return (
    <div className="groupContainer">
      <div className="groupContentContainer">
        {members.length === 0 ? (
          <GroupNoAccount />
        ) : (
          <>
            <div className="header">
              <div className="profileImages">
                {members?.map(member => (
                  <img
                    key={member.id}
                    className="pofileImage positioned"
                    src={member.profileImage}
                    alt="프로필"
                    onClick={() => navigate('/group/group-user')}
                  />
                ))}
              </div>

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
                  <span className="count">{totalImportCount}건</span>
                </div>
                <p className="price">{totalImportPrice}원</p>
              </div>
              <div className="detailBox">
                <div className="detail">
                  <h1 className="title">지출</h1>
                  <span className="count">{totalPaymentCount}건</span>
                </div>
                <p className="price">{totalPaymentPrice}원</p>
              </div>
            </div>
            <ContainerBox
              title="계좌"
              count={`${groupAccountsCount}건`}
              assets={accounts}
              assetType="account"
              onClick={() => navigate('/group/account')}
            />
            <ContainerBox
              title="카드"
              count={`${groupCardsCount}건`}
              assets={cards}
              assetType="card"
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
          </>
        )}
      </div>
      {isOpenAddUserModal && (
        <InviteModal
          isOpenAddUserModal={isOpenAddUserModal}
          closeModal={closeModal}
          hideNavbar={true}
        />
      )}
    </div>
  );
};

export default GroupManagement;
