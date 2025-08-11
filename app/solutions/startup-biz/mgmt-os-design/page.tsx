import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function MgmtOSDesignPage() {
  return (
    <SolutionPageLayout
      title="스타트업 경영 시스템 설계"
      subtitle="Startup Management OS Design"
      description="빠른 성장을 뒷받침하고 시행착오를 줄이는 스타트업 맞춤형 경영관리 시스템(OS)을 설계하고 세팅합니다. 목표관리(OKR), 회의, 소통, HR 등 핵심 경영관리 체계를 구축합니다."
      imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="설계 목적">
        <p>성장의 혼돈 속에서 길을 잃지 않도록, 조직의 방향성을 정렬하고 실행 속도를 높이는 운영체제를 만듭니다. 창업자가 사소한 관리에 시간을 뺏기지 않고, 본질적인 문제 해결과 성장에 집중할 수 있는 환경을 구축하는 것을 목표로 합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 설계 모듈">
          <ul className="list-disc list-inside space-y-2">
              <li><b>OKR 기반 목표관리 시스템:</b> 전사의 목표와 팀, 개인의 목표를 정렬하고, 도전적인 목표를 향해 달려가는 문화를 만듭니다.</li>
              <li><b>효율적 회의체 및 소통 규칙:</b> 불필요한 회의를 없애고, 목적이 명확한 회의를 통해 빠른 의사결정과 정보 공유가 이루어지도록 설계합니다.</li>
              <li><b>초기 단계 HR 필수 제도:</b> 스타트업 성장 단계에 맞는 채용, 평가, 보상 등 최소한의 필수 HR 제도를 구축하여 인재 관리의 기틀을 마련합니다.</li>
        </ul>
      </ContentBlock>
       <ContentBlock title="연계 솔루션">
        <p>설계된 경영 시스템이 실제 작동하도록 APX가 CFO, CHRO 등 파트타임 경영진 역할을 수행하며 실질적인 운영을 지원하는 '핸즈온 지원' 서비스로 연결될 수 있습니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}