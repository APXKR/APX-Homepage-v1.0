import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function BMValidationPage() {
  return (
    <SolutionPageLayout
      title="비즈니스 모델(BM) 검증"
      subtitle="Startup Diagnosis"
      description="스타트업의 아이디어나 기술이 실제 시장에서 통할 수 있는지, 수익 창출이 가능한 비즈니스 모델인지 객관적인 데이터와 프레임워크를 통해 검증하고 구체화합니다."
      imageUrl="https://images.unsplash.com/photo-1600880292210-859bb3fed531?q=80&w=1374&auto=format&fit=crop"
    >
      <ContentBlock title="진단 목적">
        <p>"우리 기술/제품은 좋은데, 비즈니스를 모르겠다"고 느끼는 스타트업에게 필수적인 과정입니다. 시장에 대한 막연한 가정이 아닌, 고객의 진짜 문제를 파고들어 Product-Market Fit을 찾고, 지속가능한 수익 모델을 구축하는 것을 돕습니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 검증 영역">
          <ul className="list-disc list-inside space-y-2">
              <li><b>문제 정의 (Problem-Solution Fit):</b> 우리가 해결하려는 고객의 문제가 정말로 중요한 문제인가?</li>
              <li><b>시장 분석 (Market Analysis):</b> 목표 시장의 크기와 성장 가능성은 충분한가? 경쟁 환경은 어떠한가?</li>
              <li><b>고객 검증 (Customer Validation):</b> 잠재 고객 인터뷰 및 테스트를 통해 우리 제품/서비스에 돈을 지불할 의사가 있는지 확인한다.</li>
              <li><b>수익 모델 설계 (Revenue Model):</b> 어떻게 수익을 창출할 것인가? (구독, 판매, 광고 등) 가격 정책은 합리적인가?</li>
        </ul>
      </ContentBlock>
       <ContentBlock title="연계 솔루션">
        <p>검증된 비즈니스 모델을 바탕으로 GTM(Go-to-Market) 전략 수립, IR(Investor Relations) 스토리라인 설계 등 구체적인 성장 실행 단계로 연결됩니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}