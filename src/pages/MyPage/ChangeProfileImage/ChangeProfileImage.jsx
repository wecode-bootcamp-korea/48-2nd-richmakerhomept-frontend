import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { config } from '../../../utils/constant';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangeProfileImage.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;

const saveFileImage = async file => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(baseUrl, formData);
    return response.data;
  } catch (error) {
    throw new Error('이미지 업로드 실패');
  }
};

const ChangeProfileImage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(saveFileImage, {
    onSuccess: data => {
      queryClient.invalidateQueries('profileImage');
    },
  });

  const handleFileUpload = e => {
    const { files } = e.target;

    if (files && files[0]) {
      mutate(files[0]);
    }
  };

  const { isLoading, data } = useQuery(['profileImage'], async () => {
    const response = await axios.get('IMAGE_URL', config);
    return response.data;
  });

  useEffect(() => {
    if (!isLoading && data) {
      const imageUrl = data.url;

      const imageElement = document.querySelector('.profileImage');
      if (imageElement) {
        imageElement.src = imageUrl;
      }
    }
  }, [isLoading, data]);

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
            onChange={handleFileUpload}
          />
        </span>
      </div>

      <DefaultButton text="저장" onClick={() => navigate('/main')} />
    </>
  );
};

export default ChangeProfileImage;
