import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.qndEyXZzFgEBRnGJldwmi_YHd1jixIq9UR_0GODuJk2myu_x3GeMYFccTXV0',
  },
});
