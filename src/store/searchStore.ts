import { create } from 'zustand';
import { type CampingSite } from '@/api/camping';

interface SearchState {
  destination: string;
  dateRange: [Date | null, Date | null];
  personnel: number;
  tags: string[];
  searchResults: {
    data: CampingSite[];
  };
  setSearchState: (state: Partial<SearchState>) => void;
  resetSearchState: () => void;
  setSearchResults: (results: { data: CampingSite[] }) => void;
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const initialState = {
  destination: '',
  dateRange: [today, tomorrow] as [Date | null, Date | null],
  personnel: 2,
  tags: [] as string[],
  searchResults: {
    data: [],
  },
};

export const useSearchStore = create<SearchState>((set) => ({
  ...initialState,
  setSearchState: (state) => set((prev) => ({ ...prev, ...state })),
  resetSearchState: () => set(initialState),
  setSearchResults: (results) => set({ searchResults: results }),
})); 