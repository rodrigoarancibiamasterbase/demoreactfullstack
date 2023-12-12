import axios from 'axios';
export  default async function getUserData(tokenStr) {
    const response = await axios.get(`${process.env.REACT_APP_INTERNAL_API_URL}/login/user`,{ headers: {"Authorization" : `Bearer ${tokenStr}`} });
    const data = response.data;
    return data;
  }