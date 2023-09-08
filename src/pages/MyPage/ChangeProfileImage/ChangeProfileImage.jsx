import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangeProfileImage.scss';

const ChangeProfileImage = () => {
  const handleFileUpload = e => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    for (const key of formData) console.log(key);
  };

  return (
    <>
      <div className="avatar">
        <AiOutlineUser className="profileImage" />
        <span className="editBox">
          <MdModeEditOutline size={30} className="editBtn" />
          <p>변경</p>
          <input
            type="file"
            name="file"
            accept="image/*"
            className="fileUp"
            onClick={handleFileUpload}
          />
        </span>
      </div>

      <DefaultButton text="저장" />
    </>
  );
};

export default ChangeProfileImage;
