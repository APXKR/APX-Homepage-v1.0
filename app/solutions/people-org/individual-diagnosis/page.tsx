import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function IndividualDiagnosisPage() {
  return (
    <SolutionPageLayout
      title="개인 진단"
      subtitle="Personal Growth Navigator™"
      description="과학적으로 검증된 진단 도구(MBTI, DISC, 버크만 등)를 통해 구성원 개인의 고유한 성향, 강점, 업무 및 소통 스타일을 발견하여 자기인식과 상호이해를 돕는 솔루션입니다."
      imageUrl="https://images.unsplash.com/photo-1531482615713-2c65a0b784b2?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="진단 목적">
        <p>구성원 각자의 잠재력을 극대화하고, 팀 내 소통과 협업을 활성화하기 위한 기초 자료를 확보하고자 할 때 사용됩니다. '나'를 이해하고 '너'를 이해함으로써 '우리'의 시너지를 만드는 첫걸음입니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 진단 도구">
          <ul className="list-disc list-inside space-y-2">
              <li><b>MBTI:</b> 심리적 선호 경향을 이해하여 자기인식과 타인 이해를 돕습니다. (활용: 신입사원 온보딩, 팀 빌딩)</li>
              <li><b>DISC:</b> 관찰 가능한 행동 유형을 파악하여 소통과 갈등관리에 활용합니다. (활용: 영업/고객 응대, 리더-구성원 관계 개선)</li>
              <li><b>Firo-B:</b> 대인관계 욕구를 측정하여 관계의 역동성을 이해하고 갈등의 원인을 파악합니다. (활용: 리더십 코칭, 팀 역할 분석)</li>
              <li><b>버크만 진단:</b> 평상시 행동, 내면의 욕구, 스트레스 행동을 종합적으로 분석하는 프리미엄 진단입니다. (활용: 핵심인재 선발 및 배치, 임원 코칭)</li>
        </ul>
      </ContentBlock>
      <ContentBlock title="연계 솔루션">
        <p>전략적 교육체계 수립, 개인별 성장 계획(IDP) 수립 지원, 소통 및 협업 강화 워크숍 등 개인과 조직의 동시 성장을 지원하는 다양한 프로그램으로 연결됩니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}