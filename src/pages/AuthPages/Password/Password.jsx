import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { passwordPattern } from '../../../utils/constant';
import { CiLock } from 'react-icons/ci';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './Password.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Password = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const passwordIsValid = passwordPattern.test(password);

  const userPhoneNumber = localStorage.getItem('userPhoneNumber');

  const signInMutation = useMutation(
    ({ phoneNumber, password }) =>
      axios.post(`${baseUrl}/user/signin`, { phoneNumber, password }),
    {
      onSuccess: data => {
        if (data.data.accessToken) {
          localStorage.setItem('accessToken', data.data.accessToken);
          localStorage.setItem('userName', data.data.userName);
          localStorage.setItem('phoneNumber', data.data.phoneNumber);
          localStorage.setItem('profileImage', data.data.profileImage);
          localStorage.removeItem('userPhoneNumber');
          navigate('/main');
        } else {
          alert('비밀번호를 확인해주세요.');
        }
      },
      onError: error => {
        console.log(`ERROR : ${error}`);
      },
    },
  );

  const handlePostPassword = () => {
    signInMutation.mutate({ phoneNumber: userPhoneNumber, password: password });
  };

  return (
    <div className="passwordPage">
      <header className="pageTitleBox">로그인</header>
      <div className="password">
        <h1 className="title">비밀번호를 입력해주세요.</h1>
        <DefaultInput
          icon={<CiLock className="inputIcon" />}
          type="password"
          placeholder="비밀번호"
          id="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <DefaultButton
          text="로그인"
          onClick={handlePostPassword}
          disabled={!passwordIsValid}
        />
      </div>
    </div>
  );
};

export default Password;
