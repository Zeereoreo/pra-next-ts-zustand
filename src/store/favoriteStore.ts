import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useSession } from 'next-auth/react';

export interface CampingSite {
    contentId: string;
    facltNm: string;
    firstImageUrl: string;
    induty?: string;
}

interface FavoriteState {
    favorites: CampingSite[];
    addFavorite: (site: CampingSite) => void;
    removeFavorite: (contentId: string) => void;
    isFavorite: (contentId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite: (site) => {
                set((state) => ({
                    favorites: [...state.favorites, site]
                }));
            },
            removeFavorite: (contentId) => {
                set((state) => ({
                    favorites: state.favorites.filter(fav => fav.contentId !== contentId)
                }));
            },
            isFavorite: (contentId) => {
                return get().favorites.some(fav => fav.contentId === contentId);
            }
        }),
        {
            name: 'favorites-storage',
        }
    )
); 