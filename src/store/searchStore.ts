import { create } from 'zustand';
import { CampingSite } from '@/api/camping';
import { AxiosResponse } from 'axios';

interface SearchState {
  destination: string;
  dateRange: [Date | null, Date | null];
  personnel: number;
  tags: string[];
  searchResults: AxiosResponse<CampingSite[], any>;
  setSearchState: (state: Partial<SearchState>) => void;
  resetSearchState: () => void;
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const initialState = {
  destination: '',
  dateRange: [today, tomorrow] as [Date | null, Date | null],
  personnel: 2,
  tags: [] as string[],
  searchResults: {} as AxiosResponse<CampingSite[], any>,
};

export const useSearchStore = create<SearchState>((set) => ({
  destination: '',
  dateRange: [null, null],
  personnel: 1,
  tags: [],
  searchResults: {} as AxiosResponse<CampingSite[], any>,
  setSearchState: (state) => set((prev) => ({ ...prev, ...state })),
  resetSearchState: () => set({
    destination: '',
    dateRange: [null, null],
    personnel: 1,
    tags: [],
    searchResults: {} as AxiosResponse<CampingSite[], any>
  }),
})); 