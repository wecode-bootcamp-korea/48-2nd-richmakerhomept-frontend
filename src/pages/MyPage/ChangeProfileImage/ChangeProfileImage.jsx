import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { config } from '../../../utils/constant';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangeProfileImage.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;

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
      Authorization: localStorage.getItem('token'),
    };

    await axios
      .post(baseUrl, formData, { headers })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const handleSubmitImage = () => {
    onSubmitChange();
    navigate('/main');
  };

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }, []);

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
            onChange={onChangeImageInput}
          />
        </span>
      </div>

      <DefaultButton text="저장" onClick={handleSubmitImage} />
    </>
  );
};

export default ChangeProfileImage;
