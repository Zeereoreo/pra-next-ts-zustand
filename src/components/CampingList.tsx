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
    TagList,
    TagItem
} from '@/styles/campingList.styles';

const INITIAL_RADIUS = 2000;
const MAX_RADIUS = 20000;
const RADIUS_INCREMENT = 3000;

export default function CampingList() {
    const [campingSites, setCampingSites] = useState<CampingSite[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userLocation, setUserLocation] = useState<{ mapX: string; mapY: string } | null>(null);
    const [currentRadius, setCurrentRadius] = useState(INITIAL_RADIUS);

    useEffect(() => {
        const getUserLocation = () => {
            if (!navigator.geolocation) {
                console.log('Geolocation이 지원되지 않는 브라우저입니다.');
                setUserLocation({
                    mapX: '128.6142847',
                    mapY: '36.0345423'
                });
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

    const loadCampingSites = async (radius: number) => {
        if (!userLocation) return [];

        try {
            const locationParams: LocationSearchParams = {
                mapX: userLocation.mapX,
                mapY: userLocation.mapY,
                radius: radius.toString(),
                numOfRows: 20,
                pageNo: 1,
            };

            const results = await searchLocationBasedList(locationParams);
            return Array.isArray(results) ? results : [];
        } catch (error) {
            console.error('캠핑장 목록을 불러오는데 실패했습니다:', error);
            return [];
        }
    };

    useEffect(() => {
        const loadMoreCampingSites = async () => {
            if (!userLocation) return;

            try {
                setIsLoading(true);
                let radius = INITIAL_RADIUS;
                let sites: CampingSite[] = [];

                while (sites.length < 10 && radius <= MAX_RADIUS) {
                    sites = await loadCampingSites(radius);
                    if (sites.length < 10) {
                        radius += RADIUS_INCREMENT;
                    } else {
                        break;
                    }
                }

                setCurrentRadius(radius);
                setCampingSites(sites);
            } catch (error) {
                console.error('캠핑장 목록을 불러오는데 실패했습니다:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadMoreCampingSites();
    }, [userLocation]);

    if (isLoading) {
        return <ListContainer>로딩 중...</ListContainer>;
    }

    return (
        <ListContainer>
            <ListTitle>
                내 주변 캠핑장
                {/* <span>
                    {campingSites.length}개의 캠핑장
                    {currentRadius !== INITIAL_RADIUS && ` (반경 ${(currentRadius / 1000).toFixed(1)}km)`}
                </span> */}
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