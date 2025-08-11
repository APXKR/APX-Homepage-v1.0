import { Page } from '../types';

export interface Solution {
  name: string;
  page: Page;
}

export interface PhaseName {
  k: string;
  ko: string;
}

export interface Phase {
  id: string;
  name: PhaseName;
  solutions: Solution[];
}

export interface Point {
  k: string;
  ko: string;
  desc: string;
}

export interface SolutionCategory {
  name: string;
  path: string;
  page: Page;
  points?: Point[];
  phases?: Phase[];
}

export interface SolutionsData {
  approach: SolutionCategory;
  peopleAndOrganization: SolutionCategory;
  startup: SolutionCategory;
}

export const SOLUTIONS_DATA: SolutionsData = {
  approach: {
    name: 'OUR APPROACH',
    path: '/approach',
    page: 'our-approach-page',
    points: [
      {
        k: 'Unlock',
        ko: '진단',
        desc: '고객의 문제를 함께 해결하며, 최적의 솔루션을 찾아나가는 APX만의 방법론입니다.',
      },
      {
        k: 'Ignite',
        ko: '설계',
        desc: '데이터와 인사이트를 기반으로 지속 가능한 성장을 설계하고 실행합니다.',
      },
      {
        k: 'Accelerate',
        ko: '실행',
        desc: '고객과의 긴밀한 협력을 통해 새로운 가치를 함께 만들어나갑니다.',
      },
    ],
  },
  peopleAndOrganization: {
    name: 'PEOPLE & ORGANIZATION',
    path: '/people-org',
    page: 's-people-org-overview',
    phases: [
      {
        id: 'diagnosis',
        name: { k: 'Unlock', ko: '진단' },
        solutions: [
          { name: '조직 진단', page: 's-org-diag' },
          { name: '조직문화 진단', page: 's-culture-diag' },
          { name: '리더십 진단', page: 's-leader-diag' },
          { name: '팀 진단', page: 's-team-diag' },
          { name: '개인 진단', page: 's-indiv-diag' },
        ],
      },
      {
        id: 'design',
        name: { k: 'Ignite', ko: '설계' },
        solutions: [
          { name: '인사제도 설계', page: 's-hr-design' },
          { name: '인재개발 설계', page: 's-talent-design' },
        ],
      },
      {
        id: 'execution',
        name: { k: 'Accelerate', ko: '실행' },
        solutions: [
          { name: '리더십 아카데미', page: 's-leader-academy' },
          { name: '조직문화 아카데미', page: 's-culture-academy' },
          { name: '핵심역량 아카데미', page: 's-core-academy' },
          { name: 'HR 아카데미', page: 's-hr-academy' },
          { name: '솔루션 라이브러리', page: 's-solution-library-anchor' },

        ],
      },
    ],
  },
  startup: {
    name: 'STARTUP',
    path: '/startup-biz',
    page: 's-startup-biz-overview',
    phases: [
      {
        id: 'diagnosis',
        name: { k: 'Unlock', ko: '진단' },
        solutions: [
            { name: 'BM 검증', page: 's-bm-validation' },
        ],
      },
      {
        id: 'design',
        name: { k: 'Ignite', ko: '설계' },
        solutions: [
          { name: 'GTM 전략', page: 's-gtm-design' },
          { name: 'IR 전략', page: 's-ir-design' },
          { name: '경영 시스템', page: 's-mgmt-os-design' },
        ],
      },
      {
        id: 'execution',
        name: { k: 'Accelerate', ko: '실행' },
        solutions: [
          { name: 'IR 피칭', page: 's-ir-pitching' },
          { name: '핸즈온 지원', page: 's-hands-on-support' },
        ],
      },
    ],
  },
};