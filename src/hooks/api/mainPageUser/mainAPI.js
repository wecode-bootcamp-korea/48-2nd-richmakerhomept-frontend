import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;
const accessToken = localStorage.getItem('accessToken');

export const fetchFinancialData = async () => {
  const response = await axios.get(`${baseUrl}/service`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `${accessToken}`,
    },
  });
  return response.data.data;
};
