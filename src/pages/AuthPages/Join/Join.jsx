import React from 'react';
import { CiUser, CiLock } from 'react-icons/ci';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './Join.scss';

const Join = () => {
  return (
    <div className="joinPage">
      <header className="pageTitleBox">회원가입</header>
      <div className="phoneNumber">
        <h1 className="title">정보를 입력해주세요.</h1>
        <DefaultInput
          icon={<CiUser className="inputIcon" />}
          type="text"
          placeholder="이름"
          id="userName"
          // value={}
          // onChange={}
        />
        <DefaultInput
          icon={<CiLock className="inputIcon" />}
          type="password"
          placeholder="비밀번호"
          id="password"
          // value={}
          // onChange={}
        />
        <DefaultInput
          icon={<CiLock className="inputIcon" />}
          type="password"
          placeholder="비밀번호 확인"
          id="passwordCheck"
          // value={}
          // onChange={}
        />
        <DefaultButton
          text="다음"
          // onClick={}
          // disabled={}
        />
      </div>
    </div>
  );
};

export default Join;
