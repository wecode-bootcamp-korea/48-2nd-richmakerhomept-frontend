import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangeProfileImage.scss';
import axios from 'axios';

const ChangeProfileImage = () => {
  const navigate = useNavigate();

  const handleFileUpload = e => {
    const { files } = e.target;
    const formData = new FormData();

    if (files) {
      formData.append('img', files[0]);
      for (const key of formData) console.log(key);
      axios.post('', formData);
    }
  };

  return (
    <>
      <div className="avatar">
        <AiOutlineUser className="profileImage" />
        {/* <img src={profileImage} alt="프로필" className="profileImage" /> */}
        <span className="editBox">
          <MdModeEditOutline size={30} className="editBtn" />
          <p>변경</p>
          <input
            type="file"
            name="file"
            accept="image/*"
            className="fileUp"
            onChange={handleFileUpload}
          />
        </span>
      </div>

      <DefaultButton text="저장" onClick={() => navigate('/main')} />
    </>
  );
};

export default ChangeProfileImage;
