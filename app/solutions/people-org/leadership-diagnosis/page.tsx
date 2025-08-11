import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function LeadershipDiagnosisPage() {
  return (
    <SolutionPageLayout
      title="리더십 진단"
      subtitle="360° Leadership Insight™"
      description="리더 개인의 역량 수준을 상사, 동료, 부하, 본인의 다각적 시선으로 정밀하게 분석하여, 객관적인 자기인식과 성장 계획 수립을 돕는 다면 진단 솔루션입니다."
      imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="진단 목적">
        <p>리더 스스로는 알기 어려운 자신의 리더십 강점과 보완점을 객관적인 피드백을 통해 인식하고, 데이터 기반의 구체적인 성장 계획을 수립하고자 할 때 필수적입니다. 리더 개인뿐만 아니라 조직 전체의 리더십 수준을 파악하는 데도 활용됩니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 특징">
          <ul className="list-disc list-inside space-y-2">
              <li><b>다면적 분석:</b> 본인뿐만 아니라 상사, 동료, 부하의 시각을 종합하여 리더십을 입체적으로 조망합니다.</li>
              <li><b>역량 모델링 연계:</b> APX의 표준 리더십 역량 모델 또는 고객사 맞춤형 역량 모델을 기반으로 진단하여 정확도를 높입니다.</li>
              <li><b>결과 활용도:</b> 개인별 상세 리포트와 그룹 분석 리포트를 제공하여 개인의 성장 계획(IDP) 수립과 조직의 리더십 개발 전략 수립에 직접적으로 활용됩니다.</li>
        </ul>
      </ContentBlock>
      <ContentBlock title="연계 솔루션">
        <p>차세대 리더십 파이프라인 설계, 리더십 개발 아카데미, 핵심인재 1:1 코칭 등 리더의 성장을 위한 체계적인 육성 프로그램으로 이어집니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}