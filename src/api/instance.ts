import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 5000,
  params: {
    ServiceKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    MobileOS: 'WIN',
    MobileApp: 'NextCamping',
    _type: 'json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // URL 인코딩된 ServiceKey를 디코딩
    if (config.params?.ServiceKey) {
      config.params.ServiceKey = decodeURIComponent(config.params.ServiceKey);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    // 공공데이터 포털 API 응답 구조에 맞게 데이터 추출
    const result = response.data.response.body;
    if (result.items) {
      return result.items.item;
    }
    return result;
  },
  (error) => {
    if (error.response) {
      console.error('Response Error:', error.response.data);
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
); 