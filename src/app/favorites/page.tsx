'use client';

import { useEffect, useState } from 'react';
import { AppWrapper, DesktopSection, DownloadText, MobileContainer, QRCodeWrapper, SubText } from '@/styles/common.styles';
import {
    ListContainer,
    CampingGrid,
    CampingCard,
    CardImage,
    CardContent,
    CampingName,
    TagList,
    TagItem,

} from '@/styles/campingList.styles';
import BottomNavigation from '@/components/BottomNavigation';
import BackHeader from '@/components/BackHeader';
import FavoriteButton from '@/components/FavoriteButton';
import { useFavoriteStore } from '@/store/favoriteStore';

interface CampingSite {
    contentId: string;
    facltNm: string;
    firstImageUrl: string;
    induty?: string;
}

export default function FavoritesPage() {
    const { favorites } = useFavoriteStore();

    // useEffect(() => {
    //     // 로컬 스토리지에서 즐겨찾기 데이터 로드
    //     const savedFavorites = localStorage.getItem('favorites');
    //     if (savedFavorites) {
    //         setFavorites(JSON.parse(savedFavorites));
    //     }
    // }, []);


    return (
        <AppWrapper>
            <MobileContainer>
                <BackHeader title="즐겨찾기" />
                <ListContainer>
                    <CampingGrid>
                        {favorites.map((site) => (
                            <CampingCard key={site.contentId}>
                                <CardImage $imageUrl={site.firstImageUrl} />
                                <CardContent>
                                    <CampingName>{site.facltNm}</CampingName>
                                    <TagList>
                                        {site.induty && <TagItem>{site.induty}</TagItem>}
                                    </TagList>
                                    <FavoriteButton site={site} />
                                </CardContent>
                            </CampingCard>
                        ))}
                    </CampingGrid>
                </ListContainer>
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