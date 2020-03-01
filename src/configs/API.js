import axios from 'axios';

// export const baseUrl = `http://learn.hackatown.online/api`;
export const API = axios.create({
  // baseURL: baseUrl,
  headers: {
    'crossDomain': true,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  }
})