import { create } from 'zustand';

interface SearchState {
  destination: string;
  dateRange: [Date | null, Date | null];
  personnel: number;
  tags: string[];
  setSearchState: (state: Omit<SearchState, 'setSearchState' | 'resetSearchState'>) => void;
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
};

export const useSearchStore = create<SearchState>((set) => ({
  ...initialState,
  setSearchState: (newState) => set((state) => ({ ...state, ...newState })),
  resetSearchState: () => set(initialState),
})); 