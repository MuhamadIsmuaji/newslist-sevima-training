import axios from 'axios';
import { STORAGEKEY, initializeAuthData } from './Auth';

export const baseUrl = `http://localhost/newslist-sevima-training-api/public/api`;

export const APIJSON = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const APIFORM = () => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem(STORAGEKEY)).token}`,
    }
  })
}