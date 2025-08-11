import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function HandsOnSupportPage() {
  return (
    <SolutionPageLayout
      title="핸즈온 경영관리 지원"
      subtitle="Hands-on Management Support"
      description="설계된 경영 시스템이 실제 작동하도록 APX가 CFO, CHRO 등 파트타임 경영진의 역할을 수행하며, 목표관리(OKR), 재무, 인사 등 실질적인 운영을 지원하는 장기 파트너십 서비스입니다."
      imageUrl="https://images.unsplash.com/photo-1521790797524-b24945d8b2d0?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="서비스 목적">
        <p>전문적인 경영관리 시스템의 조기 안착이 필요한 초기/성장 단계 스타트업을 위한 서비스입니다. 당장 풀타임 C-level 인력을 채용하기 부담스러운 스타트업에게, 합리적인 비용으로 대기업 수준의 경영관리 노하우와 실행력을 제공하여 성장을 지원합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 지원 영역">
          <ul className="list-disc list-inside space-y-2">
              <li><b>Part-time CFO:</b> 재무 전략 수립, 예산 관리, 투자 유치 실무, 재무 데이터 관리 등 재무 관련 업무를 총괄합니다.</li>
              <li><b>Part-time CHRO:</b> 인사 전략 수립, OKR 운영, 채용, 평가/보상, 조직문화 관리 등 인사 관련 업무를 총괄합니다.</li>
              <li><b>OKR 마스터/코치:</b> 전사 OKR이 성공적으로 운영되도록 분기별 워크숍을 퍼실리테이팅하고, 리더들을 코칭하며 실행을 지원합니다.</li>
        </ul>
      </ContentBlock>
    </SolutionPageLayout>
  );
}