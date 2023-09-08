import React from 'react';
import { CiLock } from 'react-icons/ci';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './Password.scss';

const Password = () => {
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
          // value={}
          // onChange={}
        />
        <DefaultButton
          text="로그인"
          // onClick={}
          // disabled={}
        />
      </div>
    </div>
  );
};

export default Password;
