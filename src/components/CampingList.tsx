'use client';

import { useState, useEffect } from 'react';
import { searchLocationBasedList, type LocationSearchParams, type CampingSite } from '@/api/camping';
import {
    ListContainer,
    ListTitle,
    CampingGrid,
    CampingCard,
    CardImage,
    CardContent,
    CampingName,
    Price,
    TagList,
    TagItem
} from '@/styles/campingList.styles';

export default function CampingList() {
    const [campingSites, setCampingSites] = useState<CampingSite[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userLocation, setUserLocation] = useState<{ mapX: string; mapY: string } | null>(null);

    useEffect(() => {
        const getUserLocation = () => {
            if (!navigator.geolocation) {
                console.log('Geolocation이 지원되지 않는 브라우저입니다.');
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { longitude, latitude } = position.coords;
                    setUserLocation({
                        mapX: longitude.toString(),
                        mapY: latitude.toString()
                    });
                },
                (error) => {
                    console.error('위치 정보를 가져오는데 실패했습니다:', error);
                    setUserLocation({
                        mapX: '128.6142847',
                        mapY: '36.0345423'
                    });
                }
            );
        };

        getUserLocation();
    }, []);

    useEffect(() => {
        const loadCampingSites = async () => {
            if (!userLocation) return;

            try {
                setIsLoading(true);
                const locationParams: LocationSearchParams = {
                    mapX: userLocation.mapX,
                    mapY: userLocation.mapY,
                    radius: '2000',
                    numOfRows: 10,
                    pageNo: 1,
                };

                const results = await searchLocationBasedList(locationParams);
                if (Array.isArray(results)) {
                    setCampingSites(results);
                }
            } catch (error) {
                console.error('캠핑장 목록을 불러오는데 실패했습니다:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadCampingSites();
    }, [userLocation]);

    if (isLoading) {
        return <ListContainer>로딩 중...</ListContainer>;
    }

    return (
        <ListContainer>
            <ListTitle>
                내 주변 캠핑장
                <span>{campingSites.length}개의 캠핑장</span>
            </ListTitle>
            <CampingGrid>
                {campingSites.map((site) => (
                    <CampingCard key={site.contentId}>
                        <CardImage $imageUrl={site.firstImageUrl} />
                        <CardContent>
                            <CampingName>{site.facltNm}</CampingName>
                            <TagList>
                                {site.induty && <TagItem>{site.induty}</TagItem>}
                            </TagList>
                        </CardContent>
                    </CampingCard>
                ))}
            </CampingGrid>
        </ListContainer>
    );
} 