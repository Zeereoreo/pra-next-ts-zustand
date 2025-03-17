'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import SearchModal from './SearchModal';
import {
    BottomNavigation as StyledBottomNavigation,
    NavItem,
    IconWrapper
} from '@/styles/navigation.styles';

export default function BottomNavigation() {
    const router = useRouter();
    const pathname = usePathname();
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const isHome = pathname === '/';

    const handleNavClick = (type: string) => {
        switch (type) {
            case 'home':
                router.push('/');
                break;
            case 'search':
                setIsSearchModalOpen(true);
                break;
            case 'cs':
                // 고객센터 기능 준비중
                alert('준비중인 기능입니다.');
                break;
            case 'profile':
                // 프로필 기능 준비중
                alert('준비중인 기능입니다.');
                break;
            default:
                break;
        }
    };

    return (
        <>
            <StyledBottomNavigation>
                <NavItem
                    className={isHome ? 'active' : ''}
                    onClick={() => handleNavClick('home')}
                >
                    <IconWrapper>🏠</IconWrapper>
                    홈
                </NavItem>
                <NavItem onClick={() => handleNavClick('search')}>
                    <IconWrapper>🔍</IconWrapper>
                    검색
                </NavItem>
                <NavItem onClick={() => handleNavClick('cs')}>
                    <IconWrapper>🎧</IconWrapper>
                    고객센터
                </NavItem>
                <NavItem onClick={() => handleNavClick('profile')}>
                    <IconWrapper>👤</IconWrapper>
                    프로필
                </NavItem>
            </StyledBottomNavigation>
            <SearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
            />
        </>
    );
}