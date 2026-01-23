import axios from 'axios';

export const axiosInstanceNext = axios.create({});

axiosInstanceNext.interceptors.request.use((config) => config);
