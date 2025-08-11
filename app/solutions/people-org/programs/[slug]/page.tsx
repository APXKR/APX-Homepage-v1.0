'use client';

import { useParams } from 'next/navigation';
import { SOLUTIONS_DATA } from '@/constants/solutions';

// This is a simplified way to find the solution. 
// In a real app, you might have a more direct way to fetch data by slug.
const allSolutions = SOLUTIONS_DATA.peopleAndOrganization.phases?.flatMap(p => p.solutions) || [];

export default function SolutionDetailPage() {
    const params = useParams();
    const slug = params.slug;

    const solution = allSolutions.find(s => s.page === slug);

    if (!solution) {
        return (
            <main className="py-20 md:py-32 px-4">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h1 className="text-4xl font-bold">Solution not found</h1>
                </div>
            </main>
        );
    }

    return (
        <main className="py-20 md:py-32 px-4">
            <div className="max-w-screen-lg mx-auto">
                {/* Based on IA 2.1.4 */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light">{solution.name}</h1>
                    <p className="mt-4 text-lg text-accent">프로그램 개요: {solution.name} 전문가 과정</p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">교육 대상</h2>
                        <p>이 프로그램은... 을(를) 대상으로 합니다.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">상세 커리큘럼</h2>
                        <p>상세 커리큘럼 내용이 여기에 표시됩니다.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">담당 강사</h2>
                        <p>담당 강사 정보가 여기에 표시됩니다.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">관련 성공 케이스</h2>
                        <p>관련 성공 케이스가 여기에 표시됩니다.</p>
                    </div>
                    <div className="text-center pt-8">
                        <button className="px-8 py-4 bg-accent text-white font-bold rounded-lg transition-transform hover:scale-105">
                            문의하기 (CTA)
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}