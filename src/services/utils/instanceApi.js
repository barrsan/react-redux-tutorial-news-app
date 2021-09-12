import axios from 'axios';
import { config } from '@constants';

export default (token = '', instanceConfigParams = {}) => {
  const params = instanceConfigParams;
  const { headers, ...restParams } = params;

  restParams.baseURL = restParams.baseURL || config.API_URL;

  const instanceConfig = {
    headers: {
      Accept: '*/*',
      cookie: '',
      ...headers,
    },
    ...restParams,
  };

  if (token) {
    instanceConfig.headers.Authorization = `Bearer ${token}`;
  }

  const axiosInstance = axios.create(instanceConfig);

  return axiosInstance;
};
