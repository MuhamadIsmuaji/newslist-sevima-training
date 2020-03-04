import axios from 'axios';
import { STORAGEKEY } from './Auth';

export const baseUrl = `http://localhost/newslist-api-sevima-training/public/api`;
const token = localStorage.getItem(STORAGEKEY) !== null ? JSON.parse(localStorage.getItem(STORAGEKEY)).token : '';

export const APIJSON = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const APIFORM = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`,
  }
})