import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { config } from '../../../utils/constant';
import { useGetProfileImage } from '../../../hooks/api/useGetProfileImage';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangeProfileImage.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;
const profileImage = localStorage.getItem('profileImage');

const ChangeProfileImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const onChangeImageInput = async e => {
    e.preventDefault();
    const { files } = e.target;
    const formData = new FormData();

    if (files) {
      formData.append('profileImage', files[0]);
      setFile(files[0]);
    }
  };

  const onSubmitChange = async () => {
    const formData = new FormData();
    formData.append('image', file);

    const headers = {
      ...config.headers,
      Authorization: localStorage.getItem('accessToken'),
    };

    try {
      await axios.post(`${baseUrl}/user/profileimage`, formData, { headers });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };
  //onSuccess에서 url 저장... localstorage.setItem('profileImage');

  const handleSubmitImage = () => {
    onSubmitChange();
    // navigate('/main');
  };

  // const { isLoading, data, isError } = useGetProfileImage();

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error...</div>;

  // console.log(data);

  return (
    <>
      <div className="avatar">
        {profileImage === 'null' ? (
          <AiOutlineUser className="profileImage" />
        ) : (
          <img src={profileImage} alt="프로필" />
        )}

        <span className="editBox">
          <MdModeEditOutline size={30} className="editBtn" />
          <p>변경</p>
          <input
            type="file"
            name="file"
            accept="image/*"
            className="fileUp"
            onChange={onChangeImageInput}
          />
        </span>
      </div>

      <DefaultButton text="저장" onClick={handleSubmitImage} />
    </>
  );
};

export default ChangeProfileImage;
