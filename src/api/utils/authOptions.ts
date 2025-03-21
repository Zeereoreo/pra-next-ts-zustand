import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
      NaverProvider({
        clientId: process.env.NAVER_ID as string,
        clientSecret: process.env.NAVER_SECRET as string,
      }),
      KakaoProvider({
        clientId: process.env.KAKAO_ID as string,
        clientSecret: process.env.KAKAO_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/login',
    },
  };
  