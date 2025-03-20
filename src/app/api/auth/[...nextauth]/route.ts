import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "@/api/utils/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 