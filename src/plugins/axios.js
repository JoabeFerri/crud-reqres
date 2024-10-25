import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api/'
});

export default {
  install: (app) => {
    app.config.globalProperties.$http = axiosInstance;
    app.provide('http', axiosInstance); // opcional para injeção de dependência
  }
};
