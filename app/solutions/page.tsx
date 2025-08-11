import Link from 'next/link';
import { FadeInSection } from '@/components/ui';

const SolutionCard: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    href: string;
}> = ({ title, description, imageUrl, href }) => (
    <Link href={href} className="group relative block rounded-3xl overflow-hidden cursor-pointer">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
            <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
            <p className="mt-2 text-lg text-white/80 max-w-md">{description}</p>
            <p className="mt-6 text-lg font-semibold group-hover:underline">더 알아보기 &rarr;</p>
        </div>
    </Link>
);

export default function SolutionsOverviewPage() {
    return (
        <main>
            <section className="py-20 md:py-32 text-center px-4">
                <FadeInSection>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light leading-tight">
                        APX 솔루션
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-text dark:text-gray-text-dark">
                        사람과 조직의 잠재력을 극대화하고, 사업과 성장의 기회를 연결합니다.<br />APX는 진단, 설계, 실행의 통합적 접근으로 지속가능한 성공을 설계합니다.
                    </p>
                </FadeInSection>
            </section>

            <section className="pb-20 md:pb-32 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                     <FadeInSection>
                        <SolutionCard
                            title="Our Approach"
                            description="진단, 설계, 실행의 통합 프레임워크를 통해 지속가능한 성장을 만듭니다."
                            imageUrl="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop"
                            href="/solutions/approach"
                        />
                    </FadeInSection>
                    <FadeInSection>
                        <SolutionCard
                            title="People & Organization"
                            description="리더십, 조직문화, HR 시스템을 통해 사람과 조직의 잠재력을 최고의 가치로 전환합니다."
                            imageUrl="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1470&auto=format&fit=crop"
                            href="/solutions/people-org"
                        />
                    </FadeInSection>
                    <FadeInSection>
                        <SolutionCard
                            title="Business & Startup"
                            description="성장 전략, 경영 시스템, 투자 유치를 통해 비즈니스의 스케일업을 위한 가장 확실한 파트너가 되어 드립니다."
                            imageUrl="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            href="/solutions/startup-biz"
                        />
                    </FadeInSection>
                </div>
            </section>
        </main>
    );
}