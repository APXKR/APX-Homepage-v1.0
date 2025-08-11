'use client';

import Link from 'next/link';

const academies = [
    {
        name: '리더십 아카데미',
        description: '레벨 기반, 역할 전환, 미래 대응, 심화',
        href: '/solutions/people-org/leadership-academy'
    },
    {
        name: '조직문화 아카데미',
        description: '가치 내재화, 소통 활성화, 변화 관리',
        href: '/solutions/people-org/culture-academy'
    },
    {
        name: '핵심역량 아카데미',
        description: 'Two-Track (공통/직무) 역량 강화',
        href: '/solutions/people-org/core-competency-academy'
    },
    {
        name: 'HR 아카데미',
        description: '인재 확보, 육성, 평가, 보상 전문가 양성',
        href: '/solutions/people-org/hr-academy'
    }
];

export default function AcademyGrid() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12">4대 아카데미</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {academies.map((academy) => (
                    <Link href={academy.href} key={academy.name}>
                        <div className="block p-8 border rounded-lg h-full transition-all hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-dark dark:text-light">{academy.name}</h3>
                            <p className="mt-4 text-gray-text dark:text-gray-text-dark">{academy.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}