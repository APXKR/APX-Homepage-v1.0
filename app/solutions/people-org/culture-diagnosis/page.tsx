import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function CultureDiagnosisPage() {
  return (
    <SolutionPageLayout
      title="조직문화 진단"
      subtitle="Culture Compass™"
      description="경쟁가치모형(CVF)을 활용해 조직의 현재 문화 유형(클랜, 애드호크라시, 시장, 위계)을 진단하고, 지향하는 미래 모습과의 차이를 분석하는 정밀 진단 솔루션입니다."
      imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="진단 목적">
        <p>우리 회사의 문화는 어떤 모습인지, '좋은 게 좋은 것'이라는 막연한 기대가 아닌 과학적인 모델로 현재 문화를 진단하고, 비전 달성을 위해 어떤 방향으로 문화를 발전시켜야 할지 구체적인 방향성을 찾고 싶을 때 필요합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 특징">
          <ul className="list-disc list-inside space-y-2">
              <li><b>과학적 모델 기반:</b> 세계적으로 검증된 경쟁가치모형(CVF)을 사용하여 진단의 신뢰도가 높습니다.</li>
              <li><b>현재와 미래 비교:</b> 현재 문화(As-Is)와 지향하는 문화(To-Be)를 함께 진단하여, 변화의 방향과 우선순위를 명확히 합니다.</li>
              <li><b>실행 연계성:</b> 진단 결과는 조직문화 혁신 로드맵 설계, 핵심가치 내재화 프로그램 등 구체적인 실행 방안으로 직접 연결됩니다.</li>
        </ul>
      </ContentBlock>
       <ContentBlock title="연계 솔루션">
        <p>조직문화 혁신 로드맵 설계, 조직문화 활성화 프로그램(핵심가치 내재화, 소통/협업 워크숍 등)으로 연계하여 진단에서 끝나지 않는 실질적인 변화를 만듭니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}