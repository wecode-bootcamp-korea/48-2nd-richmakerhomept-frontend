import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import InviteWithPhoneNumber from './InviteWithPhoneNumber';
import './InviteModal.scss';

const InviteModal = ({ isOpenAddUserModal, closeModal, hideNavbar }) => {
  return (
    <>
      {isOpenAddUserModal ? (
        <div
          className="inviteModalBackGround"
          onClick={closeModal}
          isOpenAddUserModal={isOpenAddUserModal}
        >
          <div className="inviteModal" onClick={e => e.stopPropagation()}>
            <p className="title">연결 방식</p>
            <InviteWithPhoneNumber />
          </div>
        </div>
      ) : null}
      {!hideNavbar && <Navbar />}
    </>
  );
};

export default InviteModal;
