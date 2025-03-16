'use client';

import { useState } from 'react';
import { SearchContainer, SearchButton } from '@/styles/search.styles';
import { useSearchStore } from '@/store/searchStore';
import SearchModal from './SearchModal';

export default function Search() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { destination, dateRange, personnel, tags } = useSearchStore();

    return (
        <>
            <SearchContainer>
                <SearchButton onClick={() => setIsModalOpen(true)}>
                    <span>🔍</span>
                    {destination || '캠핑장을 검색해보세요'}
                </SearchButton>
            </SearchContainer>
            <SearchModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
} 