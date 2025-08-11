'use client';

import { useState } from 'react';
import { FadeInSection, Card } from '@/components/ui';

const caseData = [
    { category: 'private', imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1', title: 'A사 핵심 리더십 파이프라인 구축', tags: '#리더십개발 #성과관리 #HR시스템' },
    { category: 'startup', imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1', title: 'B사 시리즈B 투자유치 IR 컨설팅', tags: '#투자유치 #GTM전략 #스타트업' },
    { category: 'public', imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1', title: 'C기관 조직문화 혁신 로드맵 설계', tags: '#조직문화 #공공조직 #변화관리' },
    { category: 'private', imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1', title: 'D그룹 디지털 전환(DT) 리더십 교육', tags: '#디지털전환 #리더십 #대기업' },
    { category: 'startup', imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1', title: 'E사 경영관리 시스템(OS) 구축', tags: '#스타트업 #경영시스템 #OKR' },
    { category: 'public', imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1', title: 'F위원회 중장기 발전계획 수립', tags: '#공공조직 #전략 #로드맵' },
];

export default function CasesPage() {
    const [filter, setFilter] = useState('all');
    const filters = [
        { key: 'all', label: '전체' },
        { key: 'private', label: '민간기업' },
        { key: 'public', label: '공공조직' },
        { key: 'startup', label: '스타트업' },
    ];

    const filteredCases = filter === 'all' ? caseData : caseData.filter(c => c.category === filter);

    return (
        <main className="py-20 md:py-32 px-4">
            <div className="max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light">성공 사례</h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-text dark:text-gray-text-dark">APX는 다양한 산업의 리더들과 함께 의미 있는 성장을 만들어왔습니다.</p>
                
                <div className="my-12 flex justify-center items-center space-x-2 md:space-x-4">
                    {filters.map(({ key, label }) => (
                        <button 
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-semibold rounded-full transition-all duration-300 border-2 ${filter === key ? 'bg-accent text-white border-accent' : 'bg-transparent text-gray-text dark:text-gray-text-dark border-gray-text/50 dark:border-gray-text-dark/50 hover:border-accent hover:text-accent'}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {filteredCases.map((item, index) => (
                        <FadeInSection key={index}>
                            <Card variant="glass" className="h-full flex flex-col p-0 overflow-hidden">
                                <div className="h-40 w-full">
                                    <img 
                                        src={item.imageUrl}
                                        alt={`${item.title} Logo`} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                  <h3 className="text-xl font-bold text-dark dark:text-light flex-grow">{item.title}</h3>
                                  <p className="mt-2 text-accent font-medium">{item.tags}</p>
                                </div>
                            </Card>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </main>
    );
};