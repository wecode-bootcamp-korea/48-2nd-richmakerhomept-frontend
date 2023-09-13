import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { phoneNumberPattern } from '../../../utils/constant';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import usePostPhoneNumberMutation from '../../../hooks/api/user/usePostPhoneNumberMutation';
import './PhoneNumberInput.scss';

const PhoneNumberInput = () => {
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const phoneNumberIsValid = phoneNumberPattern.test(userPhoneNumber);
  const postPhoneNumberMutation = usePostPhoneNumberMutation();

  const handleInputChange = e => {
    const inputValue = e.target.value;
    let onlyNumber = inputValue.replace(/[^0-9]/g, '');
    if (onlyNumber.length > 11) {
      onlyNumber = onlyNumber.slice(0, 11);
    }
    setUserPhoneNumber(onlyNumber);
  };

  const handlePostPhoneNumber = async () => {
    if (phoneNumberIsValid) {
      await postPhoneNumberMutation.mutateAsync(userPhoneNumber);
    }
  };

  return (
    <div className="phoneNumberInputContainer">
      <DefaultInput
        icon={<CiUser className="inputIcon" />}
        type="text"
        placeholder="전화번호"
        id="phoneNumber"
        value={userPhoneNumber}
        onChange={handleInputChange}
      />
      <DefaultButton
        text="다음"
        onClick={handlePostPhoneNumber}
        disabled={!phoneNumberIsValid}
      />
    </div>
  );
};

export default PhoneNumberInput;
