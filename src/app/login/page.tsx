'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AppWrapper, DesktopSection, DownloadText, MobileContainer, QRCodeWrapper, SubText } from '@/styles/common.styles';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import {
    LoginWrapper,
    LoginBox,
    LoginTitle,
    LoginDescription,
    SocialButtonsWrapper,
    SocialButton
} from '@/styles/login.styles';

export default function LoginPage() {
    const router = useRouter();

    const handleGoogleLogin = () => {
        signIn('google', { callbackUrl: '/' });
    };

    const handleKakaoLogin = () => {
        signIn('kakao', { callbackUrl: '/' });
    };

    const handleNaverLogin = () => {
        signIn('naver', { callbackUrl: '/' });
    };

    return (
        <AppWrapper>
            <MobileContainer>
                <LoginWrapper>
                    <LoginBox>
                        <LoginTitle>로그인</LoginTitle>
                        <LoginDescription>소셜 계정으로 로그인해주세요</LoginDescription>

                        <SocialButtonsWrapper>
                            <SocialButton
                                onClick={handleGoogleLogin}
                                $bgColor="#ffffff"
                                $textColor="#000000"
                            >
                                <FcGoogle />
                                Google로 계속하기
                            </SocialButton>

                            <SocialButton
                                onClick={handleKakaoLogin}
                                $bgColor="#FEE500"
                                $textColor="#000000"
                            >
                                <RiKakaoTalkFill />
                                Kakao로 계속하기
                            </SocialButton>

                            <SocialButton
                                onClick={handleNaverLogin}
                                $bgColor="#03C75A"
                                $textColor="#ffffff"
                            >
                                <SiNaver />
                                Naver로 계속하기
                            </SocialButton>
                        </SocialButtonsWrapper>
                    </LoginBox>
                </LoginWrapper>
            </MobileContainer>
            <DesktopSection>
                <QRCodeWrapper>
                    QR 코드
                </QRCodeWrapper>
                <DownloadText>캠핑 앱 다운로드</DownloadText>
                <SubText>
                    QR코드를 스캔하여<br />
                    모바일에서 더 편하게 이용하세요
                </SubText>
            </DesktopSection>
        </AppWrapper>
    );
} 