'use client';

import Header from './Header';
import Search from './Search';
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

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <AppWrapper>
            <MobileContainer>
                <Header />
                <Search />
                <MainContainer>
                    {children}
                </MainContainer>
                <BottomNavigation>
                    <NavItem className="active">
                        <IconWrapper>🏠</IconWrapper>
                        홈
                    </NavItem>
                    <NavItem>
                        <IconWrapper>🔍</IconWrapper>
                        검색
                    </NavItem>
                    <NavItem>
                        <IconWrapper>🎧</IconWrapper>
                        고객센터
                    </NavItem>
                    <NavItem>
                        <IconWrapper>👤</IconWrapper>
                        프로필
                    </NavItem>
                </BottomNavigation>
            </MobileContainer>
            <DesktopSection>
                <QRCodeWrapper>
                    QR 코드
                </QRCodeWrapper>
                <DownloadText>캠핑톡 앱 다운로드</DownloadText>
                <SubText>
                    QR코드를 스캔하여<br />
                    모바일에서 더 편하게 이용하세요
                </SubText>
            </DesktopSection>
        </AppWrapper>
    );
} 