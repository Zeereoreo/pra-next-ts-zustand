'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useFavoriteStore, type CampingSite } from '@/store/favoriteStore';
import { FavoriteButton as StyledFavoriteButton } from '@/styles/campingList.styles';

interface FavoriteButtonProps {
    site: CampingSite;
}

export default function FavoriteButton({ site }: FavoriteButtonProps) {
    const { data: session } = useSession();
    const router = useRouter();
    const { isFavorite, addFavorite, removeFavorite } = useFavoriteStore();

    const handleToggleFavorite = () => {
        if (!session) {
            if (window.confirm('즐겨찾기를 사용하려면 로그인이 필요합니다. 로그인하시겠습니까?')) {
                router.push('/login');
            }
            return;
        }

        if (isFavorite(site.contentId)) {
            removeFavorite(site.contentId);
        } else {
            addFavorite(site);
        }
    };

    return (
        <StyledFavoriteButton
            onClick={handleToggleFavorite}
            aria-label={isFavorite(site.contentId) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
        >
            {isFavorite(site.contentId) ? '⭐' : '☆'}
        </StyledFavoriteButton>
    );
} 