import React from 'react';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui';
import type { Page } from '@/types';

const pageToPath = (page: Page) => {
    const basePaths: { [key in Page]?: string } = {
        's-bm-validation': '/solutions/startup-biz/bm-validation',
        's-gtm-design': '/solutions/startup-biz/gtm-design',
        's-ir-design': '/solutions/startup-biz/ir-design',
        's-mgmt-os-design': '/solutions/startup-biz/mgmt-os-design',
        's-ir-pitching': '/solutions/startup-biz/ir-pitching',
        's-hands-on-support': '/solutions/startup-biz/hands-on-support',
    };
    return basePaths[page] || '/';
};

const services: {
  [key: string]: { page: Page; name: string; description: string }[];
} = {
  diagnosis: [
    { page: 's-bm-validation', name: '비즈니스 모델(BM) 검증', description: '아이디어가 실제 시장에서 통할 수 있는지 객관적으로 검증하여 Product-Market Fit을 찾습니다.' },
  ],
  design: [
    { page: 's-gtm-design', name: 'GTM 전략 설계', description: '최소의 자원으로 최대의 효과를 내는 시장 진입 전략을 수립하여 초기 성장을 가속화합니다.' },
    { page: 's-ir-design', name: 'IR 전략 설계', description: '투자자의 관점에서 가장 매력적인 성장 스토리와 로드맵을 구축하여 투자 유치 성공률을 높입니다.' },
    { page: 's-mgmt-os-design', name: '스타트업 경영 시스템 설계', description: '빠른 성장을 뒷받침하는 목표관리, 소통, HR 체계를 구축하여 성장의 혼돈을 정리합니다.' },
  ],
  execution: [
    { page: 's-ir-pitching', name: 'IR 피칭 클리닉 및 투자자 연결', description: '실전과 같은 코칭과 네트워크 지원으로 투자 유치의 마지막 관문을 통과하도록 돕습니다.' },
    { page: 's-hands-on-support', name: '핸즈온 경영관리 지원', description: '전문 경영진이 필요한 스타트업에게 합리적인 비용으로 C-level의 실행력을 제공합니다.' },
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


export default function StartupBizSolutionsPage() {
  return (
    <main>
      <section className="py-20 md:py-32 text-center px-4 bg-light-gray dark:bg-dark">
        <FadeInSection>
          <p className="text-lg font-semibold text-accent">Startup & Business</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-dark dark:text-light leading-tight">
            비즈니스의 스케일업을 위한<br />가장 확실한 성장 파트너
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-text dark:text-gray-text-dark">
            성장 전략, 경영 시스템, 투자 유치를 통해<br />아이디어를 성공적인 비즈니스로 전환하는 모든 여정을 함께합니다.
          </p>
        </FadeInSection>
      </section>

      <ServiceSection 
        id="diagnosis" 
        phase="Phase 1: Diagnosis" 
        title="성공 가능성을 검증하는 첫 단계" 
        items={services.diagnosis} 
      />
      
      <div className="h-px bg-black/10 dark:bg-white/10 max-w-screen-xl mx-auto"></div>
      
      <ServiceSection 
        id="design" 
        phase="Phase 2: Design" 
        title="성장 가속도를 위한 전략 설계" 
        items={services.design} 
      />

      <div className="h-px bg-black/10 dark:bg-white/10 max-w-screen-xl mx-auto"></div>

      <ServiceSection 
        id="execution" 
        phase="Phase 3: Execution" 
        title="결과를 만드는 실질적인 지원" 
        items={services.execution} 
      />

      <section className="py-20 md:py-32 bg-accent text-white">
        <FadeInSection className="max-w-screen-md mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">가장 빠른 성장 곡선을<br/>만들 준비가 되셨나요?</h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">APX의 스타트업 전문가들과 함께 당신의 비즈니스를 유니콘으로 만드세요.</p>
          <Link href="/contact" className="mt-8 inline-block font-semibold bg-white text-accent px-8 py-3 rounded-full hover:brightness-110 transition-transform active:scale-95 text-lg">프로젝트 문의하기 &rarr;</Link>
        </FadeInSection>
      </section>
    </main>
  );
}