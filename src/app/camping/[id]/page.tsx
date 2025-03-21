'use client';

import { useParams } from 'next/navigation';
import CampingDetail from '@/components/CampingDetail';
import { useCampingStore } from '@/store/campingStore';
import { useEffect, useState } from 'react';
import { type CampingSite } from '@/api/camping';

export default function Page() {
    const params = useParams();
    const campingId = params.id as string;
    const getCampingSiteById = useCampingStore(state => state.getCampingSiteById);
    const [campingData, setCampingData] = useState<{
        title: string;
        imageUrl: string;
        tags: string[];
        site: CampingSite;
    } | null>(null);

    useEffect(() => {
        const site = getCampingSiteById(campingId);
        if (site) {
            setCampingData({
                title: site.facltNm,
                imageUrl: site.firstImageUrl,
                tags: [site.induty].filter(Boolean),
                site: site
            });
        }
    }, [campingId, getCampingSiteById]);

    if (!campingData) {
        return <div>로딩 중...</div>;
    }

    return (
        <CampingDetail
            title={campingData.title}
            imageUrl={campingData.imageUrl}
            tags={campingData.tags}
            site={campingData.site}
        />
    );
} 