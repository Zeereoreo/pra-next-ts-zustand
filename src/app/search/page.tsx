import { Suspense } from 'react';
import BackHeader from '@/components/BackHeader';
import Search from '@/components/Search';
import BottomNavigation from '@/components/BottomNavigation';
import FavoriteButton from '@/components/FavoriteButton';
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
    ListContainer,
    CampingGrid,
    CampingCard,
    CardImage,
    CardContent,
    CampingName,
    TagList,
    TagItem
} from '@/styles/campingList.styles';
import { SearchClient } from '@/app/search/SearchClient';

interface SearchPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
    const tag = searchParams.tag as string || '';

    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <SearchClient tag={tag} />
        </Suspense>
    );
}
