import React from 'react';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui';
import type { Page } from '@/types';
import AcademyGrid from '@/components/AcademyGrid';
import SolutionLibrary from '@/components/SolutionLibrary';

const pageToPath = (page: Page) => {
    const basePaths: { [key in Page]?: string } = {
        's-org-diag': '/solutions/people-org/org-diagnosis',
        's-culture-diag': '/solutions/people-org/culture-diagnosis',
        's-leader-diag': '/solutions/people-org/leadership-diagnosis',
        's-team-diag': '/solutions/people-org/team-diagnosis',
        's-indiv-diag': '/solutions/people-org/individual-diagnosis',
        's-hr-design': '/solutions/people-org/hr-design',
        's-talent-design': '/solutions/people-org/talent-design',
        's-leader-academy': '/solutions/people-org/leadership-academy',
        's-core-academy': '/solutions/people-org/core-competency-academy',
        's-culture-academy': '/solutions/people-org/culture-academy',
        's-hr-impl': '/solutions/people-org/hr-implementation',
        's-talent-impl': '/solutions/people-org/talent-implementation',
    };
    return basePaths[page] || '/';
};

const services: {
  [key: string]: { page: Page; name: string; description: string }[];
} = {
  diagnosis: [
    { page: 's-org-diag', name: '조직 진단', description: '조직의 건강 상태를 종합적으로 스캔하여 성장을 가로막는 근본 원인을 찾아냅니다.' },
    { page: 's-culture-diag', name: '조직문화 진단', description: '현재 문화를 과학적으로 진단하고, 지향하는 미래 모습과의 차이를 분석하여 변화의 방향을 제시합니다.' },
    { page: 's-leader-diag', name: '리더십 진단', description: '리더의 역량을 다각도로 분석하여 객관적인 자기인식과 성장의 기회를 제공합니다.' },
    { page: 's-team-diag', name: '팀 진단', description: '고성과 팀의 성공 방정식을 기반으로 우리 팀의 강점과 약점을 분석하여 시너지를 극대화합니다.' },
    { page: 's-indiv-diag', name: '개인 진단', description: '과학적 도구로 개인의 성향과 강점을 발견하여 자기이해를 돕고 협업을 촉진합니다.' },
  ],
  design: [
    { page: 's-hr-design', name: '인사제도 설계', description: '회사의 전략과 사람을 연결하는 공정한 \'게임의 법칙\'을 만들어 최고의 인재가 몰입하게 합니다.' },
    { page: 's-talent-design', name: '인재개발 설계', description: '개인의 성장이 조직의 성장으로 이어지는 \'인재 농장\'을 설계하여 미래 성장 동력을 확보합니다.' },
  ],
};

const ServiceSection: React.FC<{
  id: string;
  phase: string;
  title: string;
  items: { page: Page; name: string; description: string }[];
}> = ({ id, phase, title, items }) => (
  <section id={id} className="py-16 md:py-24 scroll-mt-20">
    <div className="max-w-screen-xl mx-auto px-4">
      <FadeInSection className="text-center mb-12 md:mb-16">
        <p className="text-lg font-bold text-accent">{phase}</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-dark dark:text-light">{title}</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <FadeInSection key={item.page} className="h-full">
            <Link href={pageToPath(item.page)} className="bg-light-gray dark:bg-dark p-8 rounded-3xl h-full flex flex-col cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-dark dark:text-light">{item.name}</h3>
              <p className="mt-4 text-gray-text dark:text-gray-text-dark flex-grow">{item.description}</p>
              <span className="mt-6 font-semibold text-accent self-start">자세히 보기 &rarr;</span>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);


export default function PeopleOrgSolutionsPage() {
  return (
    <main>
      <section className="py-20 md:py-32 text-center px-4 bg-light-gray dark:bg-dark">
        <FadeInSection>
          <p className="text-lg font-semibold text-accent">People & Organization</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-dark dark:text-light leading-tight">
            사람과 조직의 잠재력을<br />최고의 가치로
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-text dark:text-gray-text-dark">
            리더십, 조직문화, HR 시스템의 유기적인 설계를 통해<br />구성원의 몰입을 이끌어내고 지속가능한 성장의 엔진을 만듭니다.
          </p>
        </FadeInSection>
      </section>

      <ServiceSection 
        id="diagnosis" 
        phase="Phase 1: Diagnosis" 
        title="문제의 핵심을 파고드는 정밀한 진단" 
        items={services.diagnosis} 
      />
      
      <div className="h-px bg-black/10 dark:bg-white/10 max-w-screen-xl mx-auto"></div>
      
      <ServiceSection 
        id="design" 
        phase="Phase 2: Design" 
        title="성공을 부르는 최적의 청사진 설계" 
        items={services.design} 
      />

      <div className="h-px bg-black/10 dark:bg-white/10 max-w-screen-xl mx-auto"></div>

      <section id="execution" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-screen-xl mx-auto px-4">
            <FadeInSection className="text-center mb-12 md:mb-16">
                <p className="text-lg font-bold text-accent">Phase 3: Execution</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-dark dark:text-light">변화를 완성하는 강력한 실행</h2>
            </FadeInSection>
            <div className="mb-16">
                <AcademyGrid />
            </div>
            <div id="solution-library">
                <SolutionLibrary />
            </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent text-white">
        <FadeInSection className="max-w-screen-md mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">조직의 새로운 성장 방정식을<br/>설계할 준비가 되셨나요?</h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">APX의 전문가들과 함께 당신 조직의 잠재력을 100% 끌어내 보세요.</p>
          <Link href="/contact" className="mt-8 inline-block font-semibold bg-white text-accent px-8 py-3 rounded-full hover:brightness-110 transition-transform active:scale-95 text-lg">프로젝트 문의하기 &rarr;</Link>
        </FadeInSection>
      </section>
    </main>
  );
}