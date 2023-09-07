import React from 'react';
import CalendarModal from '../../components/CalendarModal/CalendarModal';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import DefaultInput from '../../components/DefaultInput/DefaultInput';
import { CiUser, CiLock } from 'react-icons/ci';
import './Main.scss';

const Main = () => {
  return (
    <>
      {/* <CalendarModal /> */}
      <div className="main">
        Main
        <DefaultInput
          icon={<CiUser className="inputIcon" />}
          type="text"
          placeholder="전화번호"
        />
        <DefaultInput
          icon={<CiLock className="inputIcon" />}
          type="password"
          placeholder="비밀번호"
        />
        <DefaultButton />
      </div>
    </>
  );
};

export default Main;
