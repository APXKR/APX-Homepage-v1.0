import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function TalentDesignPage() {
  return (
    <SolutionPageLayout
      title="인재개발 설계"
      subtitle="Talent Development Design"
      description="구성원의 잠재력을 폭발시켜, 조직의 미래를 이끌 인재로 성장시키는 로드맵을 설계합니다. '인재 농장'을 만들어 회사의 미래 성장 동력을 확보합니다."
      imageUrl="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop"
    >
      <ContentBlock title="설계 목적">
        <p>개인의 성장이 조직의 성장으로 이어지는 선순환 구조를 만듭니다. 체계적인 인재개발 시스템을 통해 우수 인재의 만족도와 리텐션을 높이고, 미래에 필요한 역량을 미리 준비하여 조직의 지속가능성을 확보합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 설계 모듈">
          <ul className="list-disc list-inside space-y-2">
              <li><b>차세대 리더십 파이프라인 설계:</b> 회사의 미래를 이끌 핵심인재가 마르지 않는 '인재 농장' 시스템을 구축합니다. (미래 인재상 정의, 핵심인재(HiPo) 관리 및 승계 계획 수립)</li>
              <li><b>전략적 교육체계 수립:</b> 조직의 전략적 목표 달성에 필요한 역량을 정의하고, 이를 육성하기 위한 최적의 교육 로드맵과 시스템을 설계합니다. (직무/계층별 역량 모델링, 통합 교육 커리큘럼 설계)</li>
              <li><b>구성원 성장 경험 설계:</b> 직무 역량을 넘어, 구성원의 자발적 성장과 조직 몰입을 이끌어내는 다채로운 성장 '경험'의 기회를 설계하고 제공합니다. (인사이트 특강, 웰니스 프로그램 등)</li>
              <li><b>사내 전문가 육성 체계 설계:</b> 조직 내 지식과 경험이 자발적으로 공유되고 확산되는 학습 생태계를 만들기 위해, 사내 전문가(강사, 멘토, 코치)를 육성하는 시스템을 설계합니다.</li>
        </ul>
      </ContentBlock>
    </SolutionPageLayout>
  );
}