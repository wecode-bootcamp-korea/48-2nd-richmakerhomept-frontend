import React from 'react';
import { MdOutlineVpnKey } from 'react-icons/md';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangePassword.scss';

const ChangePassword = () => {
  return (
    <div className="changePasswordBox">
      <div className="passwordInputBox">
        <div className="input">
          <MdOutlineVpnKey size={20} className="passwordIcon" />
          <DefaultInput type="password" placeholder="기존 비밀번호" />
        </div>
        <div className="input">
          <MdOutlineVpnKey size={20} className="passwordIcon" />
          <DefaultInput type="password" placeholder="새 비밀번호" />
        </div>
        <div className="input">
          <MdOutlineVpnKey size={20} className="passwordIcon" />
          <DefaultInput type="password" placeholder="새 비밀번호 확인" />
        </div>
      </div>
      <DefaultButton text="저장" />
    </div>
  );
};

export default ChangePassword;
