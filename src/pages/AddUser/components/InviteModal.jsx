import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import InviteWithPhoneNumber from './InviteWithPhoneNumber';
import './InviteModal.scss';

const InviteModal = () => {
  return (
    <>
      <div className="inviteModalBackGround">
        <div className="inviteModal">
          <p className="title">연결 방식</p>
          <InviteWithPhoneNumber />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default InviteModal;
