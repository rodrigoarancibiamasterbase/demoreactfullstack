import axios from 'axios';


export  default async function getAllProtectedData(tokenStr) {
    const response = await axios.get(`${process.env.REACT_APP_INTERNAL_API_URL}/api/protected`,{ headers: {"Authorization" : `Bearer ${tokenStr}`} });
    const data = response.data;
    return data;
  }