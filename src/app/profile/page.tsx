'use client';

import { useSession } from 'next-auth/react';
import { MobileContainer } from '@/styles/common.styles';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  padding: 2rem 1rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ProfileEmail = styled.p`
  color: #666;
  font-size: 1rem;
`;

const ProfileSection = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export default function ProfilePage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <MobileContainer>
                <ProfileWrapper>
                    <ProfileSection>
                        <SectionTitle>로그인이 필요합니다</SectionTitle>
                        <p>프로필을 보려면 로그인해주세요.</p>
                    </ProfileSection>
                </ProfileWrapper>
            </MobileContainer>
        );
    }

    return (
        <MobileContainer>
            <ProfileWrapper>
                <ProfileHeader>
                    <ProfileImage
                        src={session.user?.image || '/default-profile.png'}
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
                    <p>로그인 방식: {session.provider}</p>
                </ProfileSection>

                <ProfileSection>
                    <SectionTitle>설정</SectionTitle>
                    <p>알림 설정</p>
                    <p>개인정보 수정</p>
                    <p>로그아웃</p>
                </ProfileSection>
            </ProfileWrapper>
        </MobileContainer>
    );
} 