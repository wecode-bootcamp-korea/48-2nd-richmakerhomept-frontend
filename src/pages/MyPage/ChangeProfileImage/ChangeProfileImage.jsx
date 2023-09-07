import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import './ChangeProfileImage.scss';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';

const ChangeProfileImage = () => {
  return (
    <>
      <div className="avatar">
        <AiOutlineUser className="profileImage" />
        <span className="editBox">
          <MdModeEditOutline size={30} className="editBtn" />
          <p>변경</p>
          <input type="file" name="file" accept="image/*" className="fileUp" />
        </span>
      </div>

      <DefaultButton text="저장" />
    </>
  );
};

export default ChangeProfileImage;
