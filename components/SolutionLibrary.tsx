'use client';

import { useState } from 'react';
import { SOLUTIONS_DATA } from '../constants/solutions';
import Link from 'next/link';

// TODO: This is a simplified data extraction. It should be made more robust
// to get solutions from all defined academies.
const allSolutions = SOLUTIONS_DATA.peopleAndOrganization.phases?.find(p => p.id === 'execution')?.solutions || [];

const academyFilters = [
    { key: 'all', label: '전체' },
    { key: 's-leader-academy', label: '리더십 아카데미' },
    { key: 's-culture-academy', label: '조직문화 아카데미' },
    { key: 's-core-academy', label: '핵심역량 아카데미' },
    { key: 's-hr-academy', label: 'HR 아카데미' },
];

export default function SolutionLibrary() {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSolutions = allSolutions
        .filter(s => filter === 'all' || s.page.startsWith(filter))
        .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12">솔루션 라이브러리</h2>
            
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
                <input 
                    type="text"
                    placeholder="솔루션 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
                <div className="flex flex-wrap gap-2">
                    {academyFilters.map(({ key, label }) => (
                        <button 
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors border ${filter === key ? 'bg-accent text-white border-accent' : 'bg-transparent hover:border-accent hover:text-accent'}`}>
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {filteredSolutions.length > 0 ? (
                    filteredSolutions.map(solution => (
                        <Link href={`/solutions/people-org/programs/${solution.page}`} key={solution.name}>
                            <div className="block p-4 border rounded-lg transition-all hover:shadow-md bg-white dark:bg-gray-800">
                                {solution.name}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-text dark:text-gray-text-dark">검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
}