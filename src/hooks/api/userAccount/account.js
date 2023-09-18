import axios from 'axios';

// const baseUrl = process.env.REACT_APP_BASE_URL;
const accessToken = localStorage.getItem('accessToken');

/** 계좌 연결 초기페이지 모든 카드사 리스트 GET */
export const fetchAccountData = async () => {
  // ${baseUrl}/service/account
  const response = await axios.get(`http://10.58.52.160:3000/providers`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    },
  });
  return response.data;
};

/** 선택한 은행과 카드사에 대한 유저 명의의 자산 리스트 GET */
export const fetchSelectedAccount = async (banks, cards) => {
  const response = await axios.get(
    `http://10.58.52.160:3000/providers/finances?b=${banks}&c=${cards}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${accessToken}`,
      },
    },
  );
  return response.data;
};
