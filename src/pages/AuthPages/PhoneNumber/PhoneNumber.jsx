import React from 'react';
import { CiUser } from 'react-icons/ci';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './PhoneNumber.scss';

const PhoneNumber = () => {
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

export default PhoneNumber;
