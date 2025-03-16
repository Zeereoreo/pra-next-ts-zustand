import { create } from 'zustand';

interface ModalState {
    isSearchModalOpen: boolean;
    openSearchModal: () => void;
    closeSearchModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isSearchModalOpen: false,
    openSearchModal: () => set({ isSearchModalOpen: true }),
    closeSearchModal: () => set({ isSearchModalOpen: false }),
})); 