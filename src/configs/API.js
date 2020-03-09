import axios from 'axios';
import { STORAGEKEY } from './Auth';

export const baseUrl = `http://localhost/newslist-sevima-training-api/public/api`;

export const APIJSON = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const APIFORM = () => {
  const token = localStorage.getItem(STORAGEKEY) ? JSON.parse(localStorage.getItem(STORAGEKEY)).auth.token : '';

  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    }
  })
}