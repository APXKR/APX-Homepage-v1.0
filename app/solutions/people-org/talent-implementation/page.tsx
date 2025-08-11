import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function TalentImplementationPage() {
  return (
    <SolutionPageLayout
      title="인재개발 실행 지원"
      subtitle="Talent Development Implementation Support"
      description="설계된 인재개발 시스템이 실제 역량 향상과 성과 창출로 이어지도록, 현장에서 구체적인 실행을 지원하는 전문적인 서비스입니다."
      imageUrl="https://images.unsplash.com/photo-1552960562-5a21e4284d72?q=80&w=1374&auto=format&fit=crop"
    >
      <ContentBlock title="실행 지원의 중요성">
        <p>훌륭한 교육 커리큘럼도 그것을 전달하고 실행하는 주체가 없다면 의미가 없습니다. APX는 조직 내부에 지식과 경험이 지속적으로 축적되고 확산되는 '스스로 학습하는 조직'을 만들기 위해, 인재개발 시스템의 실제 작동을 지원합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 실행 지원 프로그램">
          <ul className="list-disc list-inside space-y-2">
              <li><b>사내강사 양성 프로그램:</b> 설계된 사내 전문가 육성 체계에 따라, 실전 강의 스킬과 퍼실리테이션 역량을 갖춘 사내 전문가를 육성하여 조직 내 지식 이전의 효율을 극대화합니다.</li>
              <li><b>평가/개발 센터 운영:</b> 설계된 역량 모델과 선발 기준에 따라, 시뮬레이션, 인터뷰 등 과학적인 방법론을 활용하여 핵심인재와 리더의 잠재력을 객관적으로 평가하고 선발하는 전문 프로그램을 운영합니다.</li>
        </ul>
      </ContentBlock>
    </SolutionPageLayout>
  );
}