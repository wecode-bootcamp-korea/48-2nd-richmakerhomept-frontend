import React from 'react';
import { BsPhone } from 'react-icons/bs';
import './InviteWithPhoneNumber.scss';

const InviteWithPhoneNumber = () => {
  return (
    <div className="inviteContainer">
      <BsPhone size={50} className="phoneIcon" />
      <h1 className="inviteMethod">핸드폰 번호</h1>
    </div>
  );
};

export default InviteWithPhoneNumber;
