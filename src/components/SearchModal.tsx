'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
    SearchModal as StyledSearchModal,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    SearchSection,
    SectionTitle,
    SearchInput,
    DateContainer,
    DatePickerWrapper,
    PersonnelContainer,
    PersonnelControl,
    ControlButton,
    TagContainer,
    Tag,
    ModalOverlay,
    SearchButtonContainer,
    SearchSubmitButton,
    DateButton
} from '@/styles/search.styles';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import { useSearchStore } from '@/store/searchStore';
import { searchCampingSites, searchCampingList, type SearchParams } from '@/api/camping';
import { useRouter } from 'next/navigation';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
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

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
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
        if (!localState.destination && localState.tags.length === 0) return;

        try {
            setIsLoading(true);

            // 여행지와 태그를 모두 검색어로 사용
            const searchKeywords = [];
            if (localState.destination) {
                searchKeywords.push(localState.destination);
            }
            if (localState.tags.length > 0) {
                searchKeywords.push(...localState.tags);
            }

            const searchKeyword = searchKeywords.join('');
            // console.log('검색 키워드:', searchKeyword);

            // searchList API 호출
            const searchParams: SearchParams = {
                keyword: searchKeyword,
                numOfRows: 10,
                pageNo: 1,
            };

            const response = await searchCampingList(searchParams);
            // console.log('검색 결과:', response);

            // 모든 상태를 한 번에 업데이트
            setSearchState({
                ...localState,
                searchResults: response
            });

            // console.log('저장된 상태:', useSearchStore.getState());

            onClose();

            // 검색 결과 페이지로 이동
            router.push('/search');
        } catch (error) {
            // console.error('검색 실패:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const tags = ['일반야영장', '자동차야영장', '글램핑', '카라반'];

    if (!isOpen) return null;

    return (
        <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
            <StyledSearchModal $isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>검색</ModalTitle>
                    <CloseButton onClick={onClose}>×</CloseButton>
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
                        disabled={!localState.destination && localState.tags.length === 0}
                    >
                        {isLoading ? '검색중...' : '검색하기'}
                    </SearchSubmitButton>
                </SearchButtonContainer>
            </StyledSearchModal>
        </ModalOverlay>
    );
} 