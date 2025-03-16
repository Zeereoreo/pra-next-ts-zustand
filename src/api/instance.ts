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
    console.log('API 요청 설정:', {
      url: config.url,
      params: config.params,
      baseURL: config.baseURL
    });
    return config;
  },
  (error) => {
    console.error('API 요청 인터셉터 에러:', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    console.log('API 원본 응답:', response.data);
    // 공공데이터 포털 API 응답 구조에 맞게 데이터 추출
    const result = response.data.response.body;
    if (result.items) {
      return result.items.item;
    }
    return result;
  },
  (error) => {
    if (error.response) {
      console.error('API 응답 에러:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      console.error('API 요청 에러 (응답 없음):', error.request);
    } else {
      console.error('API 에러:', error.message);
    }
    console.error('API 에러 설정:', {
      url: error.config?.url,
      params: error.config?.params,
      baseURL: error.config?.baseURL
    });
    return Promise.reject(error);
  }
); 