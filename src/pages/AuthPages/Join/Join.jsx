import React, { useState } from 'react';
import axios from 'axios';
import { CiUser, CiLock } from 'react-icons/ci';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './Join.scss';
import { useNavigate } from 'react-router';
import { koreanPattern, passwordPattern } from '../../../utils/constant';

const baseUrl = process.env.REACT_APP_BASE_URL;
const userPhoneNumber = localStorage.getItem('userPhoneNumber');

const Join = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userName: '',
    phoneNumber: userPhoneNumber,
    password: '',
  });

  const [passwordCheck, setPasswordCheck] = useState('');

  const handleChangeUserInfo = e => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  const userNameIsValid = koreanPattern.test(userInfo.userName);
  const passwordIsValid = passwordPattern.test(userInfo.password);
  const passwordCheckIsValid = userInfo.password === passwordCheck;
  const allUserInfoIsValid =
    userNameIsValid && passwordIsValid && passwordCheckIsValid;

  const handlePostJoinUserInfo = () => {
    axios
      .post(`${baseUrl}/user/signup`, userInfo, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
      .then(response => {
        const message = response.message;
        if (message === 'user is created') {
          localStorage.removeItem('userPhoneNumber');
          alert('회원가입이 완료되었습니다.');
          navigate('/login');
        } else if (message === 'user is confirmed') {
          alert(`회원가입에 실패했습니다. (에러 : ${message})`);
        }
      })
      .catch(error => {
        console.log(`ERROR : ${error}`);
      });
  };

  return (
    <div className="joinPage">
      <header className="pageTitleBox">회원가입</header>
      <div className="phoneNumber">
        {!userNameIsValid && (
          <p className="userNameInvalidMessage">
            한국어 이름만 입력 가능합니다. (2글자 이상)
          </p>
        )}
        {!passwordIsValid && (
          <p className="passwordInvalidMessage">
            알파벳 대/소문자, 숫자, 특수문자를 조합하여 10자 이상이어야 합니다.
          </p>
        )}
        {!passwordCheckIsValid && (
          <p className="passwordCheckInvalidMessage">
            비밀번호와 일치하지 않습니다.
          </p>
        )}
        <h1 className="title">정보를 입력해주세요.</h1>
        <DefaultInput
          icon={<CiUser className="inputIcon" />}
          type="text"
          placeholder="이름"
          id="userName"
          value={userInfo.userName}
          onChange={handleChangeUserInfo}
        />
        <DefaultInput
          icon={<CiLock className="inputIcon" />}
          type="password"
          placeholder="비밀번호"
          id="password"
          value={userInfo.password}
          onChange={handleChangeUserInfo}
        />
        <DefaultInput
          icon={<CiLock className="inputIcon" />}
          type="password"
          placeholder="비밀번호 확인"
          id="passwordCheck"
          value={passwordCheck}
          onChange={e => {
            setPasswordCheck(e.target.value);
          }}
        />
        <DefaultButton
          text="다음"
          onClick={handlePostJoinUserInfo}
          disabled={!allUserInfoIsValid}
        />
      </div>
    </div>
  );
};

export default Join;
