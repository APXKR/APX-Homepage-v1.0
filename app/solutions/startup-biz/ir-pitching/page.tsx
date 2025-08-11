import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function IRPitchingPage() {
  return (
    <SolutionPageLayout
      title="IR 피칭 클리닉 및 투자자 연결"
      subtitle="IR Pitch Clinic & Connection Support"
      description="설계된 IR 스토리라인을 완벽하게 체화하고, 실전 투자 유치 기회를 모색하도록 모의 IR, 전문가 코칭, 그리고 APX 네트워크를 활용한 잠재 투자자 연결을 지원합니다."
      imageUrl="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="실행 목적">
        <p>아무리 좋은 발표 자료도, 대표가 제대로 전달하지 못하면 투자를 이끌어낼 수 없습니다. 실제 투자 심사 상황과 같은 압박감 속에서, 어떤 돌발 질문에도 막힘없이 답변하며 투자자의 신뢰를 얻을 수 있도록 실전 역량을 극대화하는 것을 목표로 합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 실행 프로그램">
          <ul className="list-disc list-inside space-y-2">
              <li><b>모의 IR (Mock IR Session):</b> 실제 VC, 엑셀러레이터 등 전문가를 심사역으로 초빙하여 실전과 같은 모의 IR을 진행하고, 날카로운 피드백을 제공합니다.</li>
              <li><b>발표 스킬 코칭:</b> 스토리텔링, 제스처, 목소리 톤 등 투자자의 마음을 사로잡는 발표 스킬을 집중적으로 코칭합니다.</li>
              <li><b>Q&A 클리닉:</b> 예상되는 모든 질문에 대한 최적의 답변을 준비하고, 어떤 압박 질문에도 논리적으로 대응하는 순발력을 기릅니다.</li>
              <li><b>투자자 연결 지원:</b> APX의 네트워크를 활용하여 우리 회사와 가장 잘 맞는(Fit) 잠재 투자자에게 IR 기회를 주선합니다.</li>
        </ul>
      </ContentBlock>
    </SolutionPageLayout>
  );
}