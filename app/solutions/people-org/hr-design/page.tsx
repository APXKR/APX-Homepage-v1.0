import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function HRDesignPage() {
  return (
    <SolutionPageLayout
      title="인사제도 설계"
      subtitle="HR System Design"
      description="조직의 전략과 사람을 연결하여 성과를 창출하는 공식적인 '게임의 법칙'을 설계합니다. 채용, 평가, 보상, 승진 등 HR의 모든 과정이 회사의 비전과 정렬되도록 최적화합니다."
      imageUrl="https://images.unsplash.com/photo-1520607162513-77705c6f0d4a?q=80&w=1469&auto=format&fit=crop"
    >
      <ContentBlock title="설계 목적">
        <p>공정성과 동기부여를 극대화하는 인사제도를 통해, 최고의 인재들이 자발적으로 몰입하고 최고의 성과를 창출하는 환경을 구축합니다. 명확한 원칙과 시스템을 통해 불필요한 오해와 갈등을 줄이고 성장에 집중하도록 돕습니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 설계 모듈">
          <ul className="list-disc list-inside space-y-2">
              <li><b>직무 분석 및 등급 체계 수립:</b> 모든 HR 시스템의 뼈대가 되는 '일'의 명확한 정의와 R&R, 직무 등급 체계를 수립합니다.</li>
              <li><b>전략적 성과관리 시스템 설계:</b> 구성원의 성장을 견인하고 조직의 목표 달성에 기여하는 성과관리(OKR, MBO 등) 시스템과 운영 방안을 구축합니다.</li>
              <li><b>통합 보상 시스템 설계:</b> 공정성과 동기부여를 극대화하는 직급, 승진, 급여, 인센티브 등을 포함한 '총보상' 시스템을 설계합니다.</li>
              <li><b>인재 확보 및 온보딩 설계:</b> 조직에 적합한 최고의 인재를 유치하고, 성공적으로 안착하여 빠르게 성과를 내도록 돕는 전체 프로세스를 설계합니다.</li>
        </ul>
      </ContentBlock>
      <ContentBlock title="연계 솔루션">
        <p>설계된 제도가 성공적으로 안착할 수 있도록 평가자/보상자 교육, 새로운 제도 설명회, 성과 코칭 리더십 프로그램 등 맞춤형 실행 솔루션을 함께 제공합니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}