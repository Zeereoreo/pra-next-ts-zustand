import { instance } from './instance';

export interface SearchParams {
  keyword?: string;
  numOfRows?: number;
  pageNo?: number;
  doNm?: string; // 도/시 이름
  sigunguNm?: string; // 시/군/구 이름
  induty?: string;  // 추가: 업종 타입 파라미터
}

export interface LocationSearchParams {
  mapX: string; // 경도
  mapY: string; // 위도
  radius?: string; // 거리 반경(m)
  numOfRows?: number;
  pageNo?: number;
}

export interface CampingSite {
  contentId: string;
  facltNm: string; // 캠핑장 이름
  lineIntro: string; // 한 줄 소개
  intro: string; // 소개
  addr1: string; // 주소
  addr2: string; // 상세주소
  mapX: string; // 경도
  mapY: string; // 위도
  tel: string; // 전화번호
  homepage: string; // 홈페이지
  resveUrl: string; // 예약 페이지
  resveCl: string; // 예약 구분
  induty: string; // 업종
  lctCl: string; // 입지 구분
  facltDivNm: string; // 사업장 구분
  themaEnvrnCl: string; // 테마환경
  eqpmnLendCl: string; // 캠핑장비 대여
  animalCmgCl: string; // 애완동물 출입
  firstImageUrl: string; // 대표이미지
  sbrsCl: string; // 부대시설
  sbrsEtc: string; // 부대시설 기타
  posblFcltyCl: string; // 주변이용가능시설
  operPdCl: string; // 운영기간
  operDeCl: string; // 운영일
  doNm: string; // 도
  sigunguNm: string; // 시군구
}

interface ApiResponse {
  response: {
    body: {
      items: {
        item: CampingSite | CampingSite[];
      };
    };
  };
}

// 캠핑장 기본 정보 목록 조회
export const searchCampingSites = async (params: SearchParams = {}) => {
  try {
    const encodedKeyword = params.keyword ? encodeURIComponent(params.keyword) : '';
    // console.log('baseList API 요청 파라미터:', {
    //   ...params,
    //   keyword: encodedKeyword
    // });
    const response = await instance.get<CampingSite[]>('/basedList', {
      params: {
        numOfRows: params.numOfRows || 10,
        pageNo: params.pageNo || 1,
        // keyword: encodedKeyword,
        // doNm: params.doNm,
        // sigunguNm: params.sigunguNm,
        // induty: params.induty,
      },
    });
    // console.log('baseList API 응답:', response);
    return response;
  } catch (error) {
    // console.error('baseList API 호출 실패:', error);
    throw error;
  }
};

// 캠핑장 상세 정보 조회
// export const getCampingSiteDetails = async (contentId: string) => {
//   try {
//     const response = await instance.get<CampingSite>('/baseInfo', {
//       params: {
//         contentId,
//       },
//     });
//     return response;
//   } catch (error) {
//     // console.error('Failed to get camping site details:', error);
//     throw error;
//   }
// };

// 위치 기반 캠핑장 목록 조회
export const searchLocationBasedList = async (params: LocationSearchParams) => {
  try {
    const response = await instance.get<CampingSite[]>('/locationBasedList', {
      params: {
        numOfRows: params.numOfRows || 10,
        pageNo: params.pageNo || 1,
        mapX: params.mapX || '128.6142847',
        mapY: params.mapY || '36.0345423',
        radius: params.radius || '2000',
      },
    });
    return response;
  } catch (error) {
    // console.error('Failed to search location based camping sites:', error);
    throw error;
  }
};

// 캠핑장 검색 목록 조회 (키워드 검색)
export const searchCampingList = async (params: SearchParams = {}) => {
  try {
    const keyword = params.keyword || '야영장';
    // console.log('searchList API 요청 파라미터:', {
    //   ...params,
    //   keyword
    // });
    const response = await instance.get<CampingSite[]>('/searchList', {
      params: {
        numOfRows: params.numOfRows || 10,
        pageNo: params.pageNo || 1,
        keyword,
      },
    });
    // console.log('searchList API 응답:', response);
    return response;
  } catch (error) {
    // console.error('searchList API 호출 실패:', error);
    throw error;
  }
}; 