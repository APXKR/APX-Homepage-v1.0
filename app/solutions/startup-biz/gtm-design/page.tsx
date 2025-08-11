import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function GTMDesignPage() {
  return (
    <SolutionPageLayout
      title="GTM 전략 설계"
      subtitle="Go-to-Market Strategy"
      description="검증된 비즈니스 모델을 바탕으로, 목표 고객에게 가장 효과적으로 도달하고, 성공적으로 시장에 진입하며, 초기 고객을 확보하기 위한 구체적인 실행 계획을 설계합니다."
      imageUrl="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="설계 목적">
        <p>훌륭한 제품도 시장에 제대로 알리지 못하면 실패합니다. 최소한의 자원으로 최대의 효과를 내는 시장 진입 전략을 수립하여, 시행착오를 줄이고 초기 성장을 가속화하는 것을 목표로 합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 설계 모듈">
          <ul className="list-disc list-inside space-y-2">
              <li><b>타겟 고객 정의 (Target Persona):</b> 우리의 핵심 고객은 누구이며, 그들은 어디에 있는가?</li>
              <li><b>채널 전략 (Channel Strategy):</b> 어떤 채널(온라인 광고, 콘텐츠 마케팅, 제휴 등)을 통해 고객에게 도달할 것인가?</li>
              <li><b>메시징 전략 (Messaging):</b> 고객의 마음을 움직일 우리의 핵심 가치와 메시지는 무엇인가?</li>
              <li><b>초기 성장 전략 (Early Traction):</b> 시장 진입 초기에 매출과 사용자를 확보하기 위한 구체적인 액션 플랜과 핵심 지표(KPI)를 설정합니다.</li>
        </ul>
      </ContentBlock>
    </SolutionPageLayout>
  );
}