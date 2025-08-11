import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function TeamDiagnosisPage() {
  return (
    <SolutionPageLayout
      title="팀 진단"
      subtitle="High-Performance Equation™"
      description="최고의 성과를 내는 팀들의 성공 방정식(목표, 역할, 프로세스, 관계 등)을 기반으로, 현재 팀의 강점과 약점을 분석하여 성과를 극대화할 구체적인 개선 과제를 도출합니다."
      imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="진단 목적">
        <p>우리 팀의 성과가 기대에 미치지 못하거나, 팀원 간의 시너지가 나지 않을 때 그 원인을 정확히 파악하고 싶을 때 필요합니다. 팀의 건강 상태를 점검하고 성과를 높이기 위한 구체적인 처방을 제공합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 진단 영역">
          <ul className="list-disc list-inside space-y-2">
              <li><b>목표 공유 (Shared Goals):</b> 팀의 목표가 명확하고, 모든 팀원이 이를 공유하고 있는가?</li>
              <li><b>역할 명확성 (Clear Roles):</b> 각 팀원의 역할과 책임(R&R)이 분명한가?</li>
              <li><b>효율적 프로세스 (Effective Process):</b> 의사결정, 소통, 협업 방식이 효율적인가?</li>
              <li><b>심리적 안정감 (Psychological Safety):</b> 실패를 두려워하지 않고 솔직하게 의견을 나눌 수 있는가?</li>
        </ul>
      </ContentBlock>
      <ContentBlock title="연계 솔루션">
        <p>진단 결과를 바탕으로 고성과팀 운영체계 설계, 팀 시너지 워크숍, 리더-구성원 관계 개선 코칭 등 팀의 성과를 직접적으로 향상시키는 솔루션으로 연계됩니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}