import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const accessToken = localStorage.getItem('accessToken');

const saveSelectedAsset = async list => {
  try {
    const response = await axios.post(
      'http://10.58.52.160:3000/providers/transactions',
      list,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
/** 유저가 체크한 계좌만 POST */
const useSaveSelectedAsset = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: saveSelectedAsset,
    onSuccess: data => {
      if (data && data.message === 'SUCCESS CREATED') {
        alert('계좌 연결에 성공했습니다.');
        navigate('/main');
      }
    },
  });
};

export default useSaveSelectedAsset;
