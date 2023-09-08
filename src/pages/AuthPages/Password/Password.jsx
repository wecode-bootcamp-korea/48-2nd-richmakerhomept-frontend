import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { passwordPattern } from '../../../utils/constant';
import { CiLock } from 'react-icons/ci';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './Password.scss';

const baseUrl = process.env.REACT_APP_BASE_URL;
const userPhoneNumber = localStorage.getItem('userPhoneNumber');

const Password = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const passwordIsValid = passwordPattern.test(password);

  const handlePostPassword = () => {
    axios
      .post(`${baseUrl}/user/signin`, {
        phoneNumber: userPhoneNumber,
        password: password,
      })
      .then(response => {
        if (response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          navigate('/main');
        } else {
          alert('비밀번호를 확인해주세요.');
        }
      })
      .catch(error => {
        console.log(`ERROR : ${error}`);
      });
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
