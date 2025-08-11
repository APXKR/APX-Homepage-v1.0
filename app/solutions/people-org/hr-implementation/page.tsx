import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function HRImplementationPage() {
  return (
    <SolutionPageLayout
      title="인사제도 실행 지원"
      subtitle="HR System Implementation Support"
      description="설계(Ignite) 단계에서 구축한 새로운 인사제도(성과관리, 평가, 보상 등)가 단순한 보고서나 계획으로 끝나지 않고, 조직에 성공적으로 뿌리내리고 실제 성과로 이어지도록 현장에서 밀착 지원합니다."
      imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="실행 지원의 중요성">
        <p>새로운 제도의 성패는 '설계'가 아닌 '실행'에 달려있습니다. APX는 제도를 만드는 것에서 그치지 않고, 구성원들이 제도의 취지를 이해하고, 리더들이 제도를 공정하게 운영하며, 최종적으로 조직의 성과 향상에 기여하도록 돕는 것을 핵심 가치로 삼습니다. 이는 일회성 교육을 넘어, 지속적인 변화를 만들어내는 APX의 강력한 차별점입니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 실행 지원 프로그램">
          <ul className="list-disc list-inside space-y-2">
              <li><b>성과관리 실행 코칭:</b> 새로운 성과관리 시스템(OKR, MBO 등) 도입 후, 리더들이 구성원과 함께 도전적인 목표를 설정하고, 상시적인 성과 코칭과 공정한 평가를 실행할 수 있도록 돕는 그룹/개인 코칭입니다.</li>
              <li><b>면접관 스킬 향상 워크숍:</b> 설계된 역량 기반 구조화 면접(CBI)을 실제 면접 상황에서 효과적으로 활용하여, 우리 조직에 적합한 최고의 인재를 선별할 수 있도록 면접관의 질문과 평가 스킬을 강화합니다.</li>
              <li><b>평가자/보상자 교육:</b> 새롭게 설계된 평가/보상 시스템의 공정성과 신뢰도를 확보하기 위해, 평가자들이 편견 없이 객관적으로 평가하고, 보상 제도의 철학을 구성원에게 투명하게 설명할 수 있도록 훈련합니다.</li>
        </ul>
      </ContentBlock>
    </SolutionPageLayout>
  );
}