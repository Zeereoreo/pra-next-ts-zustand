'use client';

import Header from './Header';
import Search from './Search';
import CampingList from './CampingList';
import CategoryMenu from './CategoryMenu';
import { useRouter, usePathname } from 'next/navigation';
import {
    AppWrapper,
    MobileContainer,
    DesktopSection,
    QRCodeWrapper,
    DownloadText,
    SubText,
    MainContainer
} from '@/styles/common.styles';
import BottomNavigation from './BottomNavigation';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <AppWrapper>
            <MobileContainer>
                <Header />
                <Search />
                <CategoryMenu />
                {/* <MainContainer> */}
                <CampingList />
                {children}
                {/* </MainContainer> */}
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