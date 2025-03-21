import { create } from 'zustand';
import { type CampingSite } from '@/api/camping';

interface CampingStore {
    campingSites: CampingSite[];
    setCampingSites: (sites: CampingSite[]) => void;
    getCampingSiteById: (contentId: string) => CampingSite | undefined;
}

export const useCampingStore = create<CampingStore>((set, get) => ({
    campingSites: [],
    setCampingSites: (sites) => set({ campingSites: sites }),
    getCampingSiteById: (contentId) => {
        const { campingSites } = get();
        return campingSites.find(site => site.contentId === contentId);
    },
})); 