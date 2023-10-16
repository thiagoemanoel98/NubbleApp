import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.02MN_jo4_ZN57n6FcScHve5a5cy6m2v7DgboEIxdqEWUQgwsdWcVYskytoR9',
  },
});
