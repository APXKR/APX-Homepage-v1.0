import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function OrgDiagnosisPage() {
  return (
    <SolutionPageLayout
      title="조직 진단"
      subtitle="Organization Vitality Index™"
      description="조직의 현재 건강 상태와 미래 성장 가능성을 종합적으로 스캔하여, 가장 시급하게 개선해야 할 핵심 영역을 규명하는 APX의 표준 종합 진단입니다."
      imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="진단 목적">
        <p>우리 조직의 강점과 약점은 무엇인지, 지속가능한 성장을 위해 무엇을 먼저 개선해야 하는지 객관적인 데이터로 확인하고 싶을 때 필요합니다. 조직 전체를 조망하는 '건강검진'과 같습니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 진단 영역">
        <ul className="list-disc list-inside space-y-2">
          <li><b>전략 및 방향성:</b> 비전과 전략이 명확하게 공유되고 있는가?</li>
          <li><b>리더십:</b> 리더들이 구성원의 성장을 지원하고 동기를 부여하는가?</li>
          <li><b>조직문화:</b> 신뢰와 협력을 기반으로 소통하고 도전하는 문화인가?</li>
          <li><b>인재 및 역량:</b> 핵심 인재를 확보하고 육성하는 시스템이 갖춰져 있는가?</li>
          <li><b>프로세스 및 시스템:</b> 일하는 방식과 의사결정 체계가 효율적인가?</li>
        </ul>
      </ContentBlock>
      <ContentBlock title="연계 솔루션">
        <p>진단 결과를 바탕으로 전략적 조직 설계, 조직문화 혁신 로드맵 설계, 변화관리 실행 워크숍, 리더십 개발 아카데미 등 맞춤형 후속 솔루션으로 연결됩니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}