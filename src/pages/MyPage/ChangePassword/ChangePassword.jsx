import React, { useState } from 'react';
import { MdOutlineVpnKey } from 'react-icons/md';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangePassword.scss';

// 기존 비밀번호가 로그인된 유저의 비밀번호와 같아야 한다.
// 기존 비밀번호와 새 비밀번호가 같으면 안 된다. => 사용하실 수 없습니다.
// 새 비밀번호와 새 비밀번호 확인은 같아야 한다.
// 모든 input이 입력이 되었는지

const ChangePassword = () => {
  const [userData, setUserData] = useState({
    existingPassword: '',
    newPassword: '',
    newPasswordCheck: '',
  });

  const handleInput = e => {
    const { id, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const { existingPassword, newPassword, newPasswordCheck } = userData;

  const isSameNewPassword = newPassword === newPasswordCheck;
  const isValid = existingPassword !== '' && isSameNewPassword === true;

  return (
    <div className="changePasswordBox">
      <form className="passwordInputBox" onChange={handleInput}>
        <div className="changePasswordInput">
          <MdOutlineVpnKey size={20} className="passwordIcon" />
          <DefaultInput
            type="password"
            placeholder="기존 비밀번호"
            id="existingPassword"
            value={existingPassword}
          />
        </div>
        <div className="changePasswordInput">
          <MdOutlineVpnKey size={20} className="passwordIcon" />
          <DefaultInput
            type="password"
            placeholder="새 비밀번호"
            id="newPassword"
            value={newPassword}
          />
        </div>
        <div className="changePasswordInput">
          <MdOutlineVpnKey size={20} className="passwordIcon" />
          <DefaultInput
            type="password"
            placeholder="새 비밀번호 확인"
            id="newPasswordCheck"
            value={newPasswordCheck}
          />
        </div>
        {newPasswordCheck !== '' && !isSameNewPassword && (
          <p className="passwordCheck">비밀번호가 다릅니다.</p>
        )}
        <DefaultButton text="저장" disabled={!isValid} />
      </form>
    </div>
  );
};

export default ChangePassword;
