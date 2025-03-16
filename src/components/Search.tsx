'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
    SearchContainer,
    SearchButton,
    SearchModal,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    SearchSection,
    SectionTitle,
    SearchInput,
    DateContainer,
    DatePickerWrapper,
    DateRangeDisplay,
    PersonnelContainer,
    PersonnelControl,
    ControlButton,
    TagContainer,
    Tag,
    ModalOverlay,
    DateButton,
    SearchButtonContainer,
    SearchSubmitButton
} from '@/styles/search.styles';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import { useSearchStore } from '@/store/searchStore';
import { searchCampingSites, type SearchParams } from '@/api/camping';
import { useRouter } from 'next/navigation';

export default function Search() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const { setSearchState, resetSearchState, ...searchState } = useSearchStore();
    const [localState, setLocalState] = useState({
        destination: searchState.destination,
        dateRange: searchState.dateRange,
        personnel: searchState.personnel,
        tags: searchState.tags,
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setLocalState({
            destination: searchState.destination,
            dateRange: searchState.dateRange,
            personnel: searchState.personnel,
            tags: searchState.tags,
        });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsCalendarOpen(false);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    const handleTagClick = (tag: string) => {
        setLocalState(prev => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag]
        }));
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('ko-KR', {
            month: 'long',
            day: 'numeric',
            weekday: 'short'
        }).format(date);
    };

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        setLocalState(prev => ({
            ...prev,
            dateRange: dates
        }));
        if (dates[0] && dates[1]) {
            setIsCalendarOpen(false);
        }
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleSearch = async () => {
        if (!localState.destination) return;

        try {
            setIsLoading(true);

            const searchParams: SearchParams = {
                keyword: localState.destination,
                numOfRows: 10,
                pageNo: 1,
            };

            const results = await searchCampingSites(searchParams);
            setSearchState(localState);
            handleCloseModal();

            // 검색 결과를 URL 파라미터로 전달
            const searchQuery = new URLSearchParams({
                keyword: localState.destination,
                checkIn: localState.dateRange[0] ? format(localState.dateRange[0], 'yyyy-MM-dd') : '',
                checkOut: localState.dateRange[1] ? format(localState.dateRange[1], 'yyyy-MM-dd') : '',
                personnel: localState.personnel.toString(),
                tags: localState.tags.join(','),
            }).toString();

            // 검색 결과 페이지로 이동
            router.push(`/search-results?${searchQuery}`);
        } catch (error) {
            console.error('Search failed:', error);
            // TODO: 에러 처리 (예: 토스트 메시지 표시)
        } finally {
            setIsLoading(false);
        }
    };

    const tags = ['산과 숲', '강과 호수', '바다', '도심 근교', '글램핑', '카라반', '펜션', '키즈 friendly'];

    return (
        <>
            <SearchContainer>
                <SearchButton onClick={handleOpenModal}>
                    <span>🔍</span>
                    {searchState.destination || '캠핑장을 검색해보세요'}
                </SearchButton>
            </SearchContainer>

            <ModalOverlay $isOpen={isModalOpen} onClick={handleOverlayClick}>
                <SearchModal $isOpen={isModalOpen} onClick={e => e.stopPropagation()}>
                    <ModalHeader>
                        <ModalTitle>검색</ModalTitle>
                        <CloseButton onClick={handleCloseModal}>×</CloseButton>
                    </ModalHeader>

                    <ModalContent>
                        <SearchSection>
                            <SectionTitle>여행지</SectionTitle>
                            <SearchInput
                                placeholder="여행지를 입력해주세요"
                                value={localState.destination}
                                onChange={(e) => setLocalState(prev => ({ ...prev, destination: e.target.value }))}
                            />
                        </SearchSection>

                        <SearchSection>
                            <SectionTitle>날짜</SectionTitle>
                            <DateContainer onClick={toggleCalendar}>
                                <DateButton>
                                    {localState.dateRange[0] ? formatDate(localState.dateRange[0]) : '체크인'}
                                </DateButton>
                                <DateButton>
                                    {localState.dateRange[1] ? formatDate(localState.dateRange[1]) : '체크아웃'}
                                </DateButton>
                            </DateContainer>
                            {isCalendarOpen && (
                                <DatePickerWrapper>
                                    <DatePicker
                                        selected={localState.dateRange[0]}
                                        onChange={handleDateChange}
                                        startDate={localState.dateRange[0]}
                                        endDate={localState.dateRange[1]}
                                        selectsRange
                                        inline
                                        locale={ko}
                                        minDate={new Date()}
                                        monthsShown={1}
                                    />
                                </DatePickerWrapper>
                            )}
                        </SearchSection>

                        <SearchSection>
                            <SectionTitle>인원</SectionTitle>
                            <PersonnelContainer>
                                <span>성인</span>
                                <PersonnelControl>
                                    <ControlButton
                                        onClick={() => setLocalState(prev => ({ ...prev, personnel: Math.max(1, prev.personnel - 1) }))}
                                    >
                                        -
                                    </ControlButton>
                                    <span>{localState.personnel}명</span>
                                    <ControlButton
                                        onClick={() => setLocalState(prev => ({ ...prev, personnel: prev.personnel + 1 }))}
                                    >
                                        +
                                    </ControlButton>
                                </PersonnelControl>
                            </PersonnelContainer>
                        </SearchSection>

                        <SearchSection>
                            <SectionTitle>태그</SectionTitle>
                            <TagContainer>
                                {tags.map(tag => (
                                    <Tag
                                        key={tag}
                                        $isSelected={localState.tags.includes(tag)}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                    </Tag>
                                ))}
                            </TagContainer>
                        </SearchSection>
                    </ModalContent>

                    <SearchButtonContainer>
                        <SearchSubmitButton
                            onClick={handleSearch}
                            disabled={!localState.destination || !localState.dateRange[0] || !localState.dateRange[1] || isLoading}
                        >
                            {isLoading ? '검색 중...' : '검색하기'}
                        </SearchSubmitButton>
                    </SearchButtonContainer>
                </SearchModal>
            </ModalOverlay>
        </>
    );
} 