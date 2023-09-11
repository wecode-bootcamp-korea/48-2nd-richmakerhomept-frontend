import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { CiUser } from 'react-icons/ci';
import { phoneNumberPattern } from '../../../utils/constant';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './PhoneNumber.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;

const PhoneNumber = () => {
  const navigate = useNavigate();

  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const phoneNumberIsValid = phoneNumberPattern.test(userPhoneNumber);

  const handleInputChange = e => {
    const inputValue = e.target.value;
    let onlyNumber = inputValue.replace(/[^0-9]/g, '');
    if (onlyNumber.length > 11) {
      onlyNumber = onlyNumber.slice(0, 11);
    }
    setUserPhoneNumber(onlyNumber);
  };

  const postPhoneNumber = async phoneNumber => {
    const response = await axios.post(
      `${baseUrl}/user/presignin`,
      {
        phoneNumber,
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );

    return response.data;
  };

  const mutation = useMutation(postPhoneNumber, {
    onSuccess: data => {
      const message = data.message;
      localStorage.setItem('userPhoneNumber', userPhoneNumber);
      if (message === 'INVALID_USER') {
        navigate('/join');
      } else if (message === 'user is confirmed') {
        navigate('/password');
      }
    },
    onError: error => {
      console.log(`ERROR : ${error}`);
    },
  });

  const handlePostPhoneNumber = () => {
    mutation.mutate(userPhoneNumber);
  };

  return (
    <div className="phoneNumberPage">
      <header className="pageTitleBox">시작하기</header>
      <div className="phoneNumber">
        <h1 className="title">전화번호를 입력해주세요.</h1>
        <DefaultInput
          icon={<CiUser className="inputIcon" />}
          type="text"
          placeholder="전화번호"
          id="phoneNumber"
          value={userPhoneNumber}
          onChange={handleInputChange}
        />
        <DefaultButton
          text="다음"
          onClick={handlePostPhoneNumber}
          disabled={!phoneNumberIsValid}
        />
      </div>
    </div>
  );
};

export default PhoneNumber;
