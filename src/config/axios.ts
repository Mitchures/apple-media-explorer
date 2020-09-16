import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  headers: {
	  'Access-Control-Allow-Origin': '*',
	},
  baseURL: 'https://itunes.apple.com'
});

export default instance;