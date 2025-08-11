import Link from 'next/link';
import { FadeInSection } from '@/components/ui';

export default function InsightsPage() {
    return (
        <main className="py-20 md:py-32 px-4">
            <div className="max-w-screen-md mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light">인사이트</h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-text dark:text-gray-text-dark">성장과 혁신에 대한 APX의 깊이 있는 분석과 전망</p>

                <FadeInSection className="mt-16">
                    <div className="p-8 md:p-10 bg-accent text-white rounded-3xl text-left shadow-lg">
                        <h2 className="text-3xl font-bold">APX 미래 성장 리포트</h2>
                        <p className="mt-2 text-lg text-white/90">업계 리더들의 필독 자료. 지금 바로 최신 리포트를 다운로드하세요.</p>
                        <Link href="/contact" className="mt-6 inline-block font-semibold bg-light text-accent px-8 py-3 rounded-full hover:brightness-110 transition-transform active:scale-95">리포트 다운로드 &rarr;</Link>
                    </div>
                </FadeInSection>
                
                <div className="mt-20 space-y-12 text-left">
                    <FadeInSection className="grid md:grid-cols-3 gap-8 items-center">
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=300&h=200&auto=format&fit=crop" alt="Insight Thumbnail" className="rounded-2xl md:col-span-1 max-w-full h-auto shadow-md"/>
                        <div className="md:col-span-2">
                            <p className="text-sm text-gray-text dark:text-gray-text-dark">2024. 08. 15.</p>
                            <h3 className="text-2xl font-bold mt-1 text-dark dark:text-light">조직의 '심리적 안정감'은 어떻게 성과를 만드는가</h3>
                            <p className="mt-2 text-gray-text dark:text-gray-text-dark">실패를 두려워하지 않고 과감하게 도전하는 혁신적인 팀의 비밀을 파헤칩니다.</p>
                        </div>
                    </FadeInSection>
                     <FadeInSection className="grid md:grid-cols-3 gap-8 items-center">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&h=200&auto=format&fit=crop" alt="Insight Thumbnail" className="rounded-2xl md:col-span-1 max-w-full h-auto shadow-md"/>
                        <div className="md:col-span-2">
                            <p className="text-sm text-gray-text dark:text-gray-text-dark">2024. 07. 28.</p>
                            <h3 className="text-2xl font-bold mt-1 text-dark dark:text-light">스타트업 CEO가 반드시 알아야 할 3가지 HR 원칙</h3>
                            <p className="mt-2 text-gray-text dark:text-gray-text-dark">스케일업 과정에서 겪는 인재 문제를 해결하기 위한 실질적인 가이드.</p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </main>
    );
}