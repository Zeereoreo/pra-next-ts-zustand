'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { searchCampingSites, type SearchParams, type CampingSite } from '@/api/camping';
import BackHeader from './BackHeader';
import Search from './Search';
import BottomNavigation from './BottomNavigation';
import { MainContainer } from '@/styles/common.styles';
import {
    ListContainer,
    CampingGrid,
    CampingCard,
    CardImage,
    CardContent,
    CampingName,
    TagList,
    TagItem
} from '@/styles/campingList.styles';
import CategoryMenu from './CategoryMenu';
import { useCampingStore } from '@/store/campingStore';

interface CategoryPageProps {
    title: string;
    industyTypes: string[];
}

export default function CategoryPage({ title, industyTypes }: CategoryPageProps) {
    const router = useRouter();
    const setStoreCampingSites = useCampingStore(state => state.setCampingSites);
    const [campingSites, setCampingSites] = useState<CampingSite[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const handleCardClick = (contentId: string) => {
        router.push(`/camping/${contentId}`);
    };

    const loadCampingSites = async (pageNo: number) => {
        try {
            const searchParams: SearchParams = {
                numOfRows: 20,
                pageNo: pageNo,
            };

            const results = await searchCampingSites(searchParams);
            if (Array.isArray(results)) {
                // 해당 업종 타입의 캠핑장만 필터링
                const filteredResults = results.filter(site =>
                    industyTypes.some(type => site.induty?.includes(type))
                );
                return filteredResults;
            }
            return [];
        } catch (error) {
            // console.error('캠핑장 목록을 불러오는데 실패했습니다:', error);
            return [];
        }
    };

    const loadMoreCampingSites = async () => {
        let currentPage = page;
        let sites: CampingSite[] = [];

        while (sites.length < 10 && currentPage <= 5) {
            const newSites = await loadCampingSites(currentPage);
            sites = [...sites, ...newSites];
            currentPage += 1;

            if (newSites.length === 0) break; // 더 이상 데이터가 없으면 중단
        }

        setPage(currentPage);
        return sites;
    };

    useEffect(() => {
        const initializeCampingSites = async () => {
            setIsLoading(true);
            const sites = await loadMoreCampingSites();
            setCampingSites(sites);
            setStoreCampingSites(sites); // store에 데이터 저장
            setIsLoading(false);
        };

        initializeCampingSites();
    }, []);

    if (isLoading) {
        return (
            <>
                <BackHeader title={title} />
                <Search />
                <CategoryMenu />
                {/* <MainContainer> */}
                <ListContainer>로딩 중...</ListContainer>
                {/* </MainContainer> */}
                <BottomNavigation />
            </>
        );
    }

    return (
        <>
            <BackHeader title={title} />
            <Search />
            <CategoryMenu />
            {/* <MainContainer> */}
            <ListContainer>
                <CampingGrid>
                    {campingSites.map((site) => (
                        <CampingCard
                            key={site.contentId}
                            onClick={() => handleCardClick(site.contentId)}
                            style={{ cursor: 'pointer' }}
                        >
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
            {/* </MainContainer> */}
            <BottomNavigation />
        </>
    );
} 