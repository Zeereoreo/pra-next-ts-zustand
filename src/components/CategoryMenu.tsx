'use client';

import { useRouter } from 'next/navigation';
import {
    MenuContainer,
    MenuItem,
    IconWrapper,
    MenuText
} from '@/styles/categoryMenu.styles';

const categories = [
    {
        id: 'camping',
        name: '캠핑',
        icon: '⛺',
        industyTypes: ['일반야영장', '자동차야영장']
    },
    {
        id: 'glamping',
        name: '글램핑',
        icon: '🏕️',
        industyTypes: ['글램핑']
    },
    {
        id: 'caravan',
        name: '카라반',
        icon: '🚐',
        industyTypes: ['카라반']
    },
    {
        id: 'pension',
        name: '펜션',
        icon: '🏡',
        industyTypes: ['펜션']
    },
];

export default function CategoryMenu() {
    const router = useRouter();

    const handleCategoryClick = (categoryId: string) => {
        router.push(`/category/${categoryId}`);
    };

    return (
        <MenuContainer>
            {categories.map((category) => (
                <MenuItem
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                >
                    <IconWrapper>
                        {category.icon}
                    </IconWrapper>
                    <MenuText>{category.name}</MenuText>
                </MenuItem>
            ))}
        </MenuContainer>
    );
} 