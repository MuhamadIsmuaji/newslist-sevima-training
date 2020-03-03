import axios from 'axios';

export const baseUrl = `http://localhost/newslist-api-sevima-training/public/api`;

export const APIJSON = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})