import Link from 'next/link';
import { FadeInSection, Card } from '@/components/ui';

const LearnMoreLink: React.FC<{ href: string, text?: string }> = ({ href, text = "더 알아보기" }) => (
    <Link href={href} className="text-accent font-semibold text-lg md:text-xl mt-6 inline-block hover:underline">
        {text} &rarr;
    </Link>
);

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center text-center py-20 px-4">
                <div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-dark dark:text-light leading-tight">
                        성장의 다음 단계를<br />설계합니다
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-text dark:text-gray-text-dark">
                        Designing the Next Stage of Growth
                    </p>
                </div>
            </section>

            {/* Core Solution 1 */}
            <section className="py-20 md:py-32 bg-light-gray dark:bg-dark">
                <FadeInSection className="max-w-screen-lg mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark dark:text-light">사람과 조직의 잠재력을<br />최고의 가치로</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-text dark:text-gray-text-dark">HR시스템, 조직문화, 리더십 설계를 통해 지속가능한 성장 엔진을 만듭니다</p>
                    <LearnMoreLink href="/solutions" />
                    <div className="mt-16 shadow-2xl rounded-3xl">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop" alt="People & Organization Visual" className="rounded-3xl mx-auto max-w-full h-auto" />
                    </div>
                </FadeInSection>
            </section>

            {/* APX Approach */}
            <section className="py-20 md:py-32">
                <FadeInSection className="max-w-screen-lg mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark dark:text-light">The APX Approach</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-text dark:text-gray-text-dark">성장을 설계하고 기회를 연결하는 APX의 Growth Engine Framework</p>
                    <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
                        <Card variant="glass">
                            <h3 className="text-3xl font-bold text-accent">Unlock™</h3>
                            <p className="mt-2 text-xl font-semibold text-dark dark:text-light">진단 & 분석</p>
                            <p className="mt-4 text-dark/80 dark:text-light/80">잠재력을 가두고 있는 문제의 '잠금'을 풀어 성장의 기회를 발굴합니다.</p>
                        </Card>
                        <Card variant="glass">
                            <h3 className="text-3xl font-bold text-accent">Ignite™</h3>
                            <p className="mt-2 text-xl font-semibold text-dark dark:text-light">설계 & 전략</p>
                            <p className="mt-4 text-dark/80 dark:text-light/80">지속 가능한 성장을 만들어 낼 핵심 전략과 시스템의 첫 불씨를 '점화'합니다.</p>
                        </Card>
                        <Card variant="glass">
                            <h3 className="text-3xl font-bold text-accent">Accelerate™</h3>
                            <p className="mt-2 text-xl font-semibold text-dark dark:text-light">실행 & 교육</p>
                            <p className="mt-4 text-dark/80 dark:text-light/80">설계된 시스템이 실제 성과로 이어지도록 압도적인 성장의 '가속도'를 붙입니다.</p>
                        </Card>
                    </div>
                </FadeInSection>
            </section>

            {/* Case/Insight Links */}
            <section className="py-20 md:py-32 bg-light-gray dark:bg-dark">
                <FadeInSection className="max-w-screen-lg mx-auto px-4 grid md:grid-cols-2 gap-8">
                    <Card className="text-center" variant="default">
                        <h3 className="text-4xl font-bold text-dark dark:text-light">성공 사례</h3>
                        <p className="mt-4 text-lg text-gray-text dark:text-gray-text-dark">APX와 함께 성장을 이룬 고객들의 이야기를 확인하세요.</p>
                        <LearnMoreLink href="/cases" />
                    </Card>
                    <Card className="text-center" variant="default">
                        <h3 className="text-4xl font-bold text-dark dark:text-light">최신 인사이트</h3>
                        <p className="mt-4 text-lg text-gray-text dark:text-gray-text-dark">성장과 혁신에 대한 APX의 깊이 있는 분석과 전망을 만나보세요.</p>
                        <LearnMoreLink href="/insights" />
                    </Card>
                </FadeInSection>
            </section>
        </>
    );
}