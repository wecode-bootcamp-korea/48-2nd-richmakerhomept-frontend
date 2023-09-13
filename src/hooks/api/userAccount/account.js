import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;
const accessToken = localStorage.getItem('accessToken');

export const fetchAccountData = async () => {
  const response = await axios.get(`${baseUrl}/service/account`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    },
  });
  return response.data;
};
