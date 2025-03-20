'use client';

import { useSession } from 'next-auth/react';
import { AppWrapper, DesktopSection, DownloadText, MobileContainer, QRCodeWrapper, SubText } from '@/styles/common.styles';
import {
    ProfileWrapper,
    ProfileHeader,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileEmail,
    ProfileSection,
    SectionTitle
} from '@/styles/profile.styles';
import BottomNavigation from '@/components/BottomNavigation';
import Link from 'next/link';

const getRandomProfileImage = () => {
    const randomSeed = Math.random().toString(36).substring(7);
    return `https://api.dicebear.com/7.x/lorelei/svg?seed=${randomSeed}`;
};

export default function ProfilePage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <AppWrapper>
                <MobileContainer>
                    <Link href="/login" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                        <ProfileWrapper style={{ cursor: 'pointer' }}>
                            <ProfileSection>
                                <SectionTitle>로그인이 필요합니다</SectionTitle>
                                <p>프로필을 보려면 로그인해주세요.</p>
                            </ProfileSection>
                        </ProfileWrapper>
                    </Link>
                    <BottomNavigation />
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

    return (
        <AppWrapper>
            <MobileContainer>
                <ProfileWrapper>
                    <ProfileHeader>
                        <ProfileImage
                            src={session.user?.image || getRandomProfileImage()}
                            alt="프로필 이미지"
                        />
                        <ProfileInfo>
                            <ProfileName>{session.user?.name}</ProfileName>
                            <ProfileEmail>{session.user?.email}</ProfileEmail>
                        </ProfileInfo>
                    </ProfileHeader>

                    <ProfileSection>
                        <SectionTitle>내 정보</SectionTitle>
                        <p>가입일: {new Date().toLocaleDateString()}</p>
                        <p>로그인 방식: {session.user?.email?.split('@')[1]}</p>
                    </ProfileSection>

                    <ProfileSection>
                        <SectionTitle>설정</SectionTitle>
                        <p>알림 설정</p>
                        <p>개인정보 수정</p>
                        <p>로그아웃</p>
                    </ProfileSection>
                    <BottomNavigation />

                </ProfileWrapper>

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