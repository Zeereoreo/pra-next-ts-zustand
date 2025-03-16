'use client';

import Header from './Header';
import Search from './Search';
import CampingList from './CampingList';
import CategoryMenu from './CategoryMenu';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    AppWrapper,
    MobileContainer,
    DesktopSection,
    QRCodeWrapper,
    DownloadText,
    SubText,
    MainContainer
} from '@/styles/common.styles';
import {
    BottomNavigation,
    NavItem,
    IconWrapper
} from '@/styles/navigation.styles';
import SearchModal from './SearchModal';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const isHome = pathname === '/';

    return (
        <AppWrapper>
            <MobileContainer>
                <Header />
                <Search />
                <CategoryMenu />
                <MainContainer>
                    <CampingList />
                    {children}
                    <BottomNavigation>
                        <NavItem
                            className={isHome ? 'active' : ''}
                            onClick={() => router.push('/')}
                        >
                            <IconWrapper>🏠</IconWrapper>
                            홈
                        </NavItem>
                        <NavItem onClick={() => setIsSearchModalOpen(true)}>
                            <IconWrapper>🔍</IconWrapper>
                            검색
                        </NavItem>
                        <NavItem onClick={() => alert('준비중인 기능입니다.')}>
                            <IconWrapper>🎧</IconWrapper>
                            고객센터
                        </NavItem>
                        <NavItem onClick={() => alert('준비중인 기능입니다.')}>
                            <IconWrapper>👤</IconWrapper>
                            프로필
                        </NavItem>
                    </BottomNavigation>
                </MainContainer>
                <SearchModal
                    isOpen={isSearchModalOpen}
                    onClose={() => setIsSearchModalOpen(false)}
                />
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