import React from 'react';
import { SolutionPageLayout, ContentBlock } from '@/components/SolutionPageLayout';

export default function IRDesignPage() {
  return (
    <SolutionPageLayout
      title="IR 전략 설계"
      subtitle="Investor-Ready Design"
      description="투자 유치를 위한 가장 매력적인 성장 스토리와 실행 로드맵을 구축합니다. 투자자의 관점에서 비즈니스의 잠재력을 설득력 있게 전달하는 IR 스토리라인과 Deck을 설계합니다."
      imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
    >
      <ContentBlock title="설계 목적">
        <p>단순히 제품을 설명하는 것을 넘어, '왜 이 사업에 투자해야 하는가'에 대한 명확한 답을 제시합니다. 투자자들이 신뢰할 수 있는 데이터와 논리를 바탕으로, 회사의 비전과 성장 가능성을 매력적인 투자 기회로 포지셔닝하는 것을 목표로 합니다.</p>
      </ContentBlock>
      <ContentBlock title="주요 설계 모듈">
          <ul className="list-disc list-inside space-y-2">
              <li><b>시장 분석 및 포지셔닝:</b> 우리 사업이 속한 시장의 매력도와 우리의 경쟁 우위를 명확히 합니다.</li>
              <li><b>성장 로드맵 및 재무 모델링:</b> 투자 이후 어떻게 성장할 것인지 구체적인 계획과 예측 재무 데이터를 제시합니다.</li>
              <li><b>IR 스토리라인 및 Deck 설계:</b> 투자자를 사로잡을 논리적이고 매력적인 발표 자료를 처음부터 끝까지 함께 만듭니다.</li>
              <li><b>투자자 네트워크 연결:</b> APX의 네트워크를 활용하여 잠재 투자자와의 연결 기회를 모색합니다.</li>
        </ul>
      </ContentBlock>
      <ContentBlock title="연계 솔루션">
        <p>설계된 IR Deck을 완벽하게 체화하고, 실전 투자 유치 기회를 모색하도록 돕는 'IR 피칭 클리닉 및 투자자 연결 지원' 솔루션으로 이어집니다.</p>
      </ContentBlock>
    </SolutionPageLayout>
  );
}