import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineVpnKey } from 'react-icons/md';
import { passwordPattern } from '../../../utils/constant';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import './ChangePassword.scss';

// 기존 비밀번호가 로그인된 유저의 비밀번호와 같아야 한다.

const ChangePassword = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    existingPassword: '',
    newPassword: '',
    newPasswordCheck: '',
  });

  const { existingPassword, newPassword, newPasswordCheck } = userData;

  const handleInput = e => {
    const { id, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/main');

    axios
      .post('', { existingPassword, newPassword })
      .then(res => {
        if (res.message === 'inValid password')
          alert('기존 비밀번호를 확인해주세요');
      })
      .catch(err => console.log(`ERROR : ${err}`));
  };

  const existingPasswordIsValid = passwordPattern.test(existingPassword);
  const newPasswordIsValid = passwordPattern.test(newPassword);
  const newPasswordCheckIsValid = passwordPattern.test(newPasswordCheck);
  const isSameNewPassword = newPassword === newPasswordCheck;

  const isValid =
    existingPasswordIsValid &&
    newPasswordIsValid &&
    newPasswordCheckIsValid &&
    existingPassword !== newPassword &&
    isSameNewPassword;

  return (
    <>
      <p className="noticePasswordValidation">
        알파벳 대/소문자, 숫자, 특수문자를 조합하여 <br /> 10자 이상이어야
        합니다.
      </p>
      <div className="changePasswordBox">
        <form
          className="passwordInputBox"
          onChange={handleInput}
          onSubmit={handleSubmit}
        >
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
            <p className="passwordCheck">비밀번호와 일치하지 않습니다.</p>
          )}
          <DefaultButton text="저장" disabled={!isValid} />
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
