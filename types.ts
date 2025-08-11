export type Theme = 'light' | 'dark';

export type Page = 
  | 'homepage' 
  // Overview
  | 'solutions-overview-page'
  | 'our-approach-page'
  | 's-people-org-overview'
  | 's-startup-biz-overview'
  // Cases, Insights, Company
  | 'cases-page' 
  | 'insights-page' 
  | 'company-page'
  | 'contact-page'
  // People & Organization
  | 's-org-diag'
  | 's-culture-diag'
  | 's-leader-diag'
  | 's-team-diag'
  | 's-indiv-diag'
  | 's-hr-design'
  | 's-talent-design'
  | 's-leader-academy'
  | 's-core-academy'
  | 's-culture-academy'
  | 's-hr-academy'
  | 's-hr-impl'
  | 's-talent-impl'
  | 's-solution-library-anchor'
  // Startup & Business
  | 's-bm-validation'
  | 's-gtm-design'
  | 's-ir-design'
  | 's-mgmt-os-design'
  | 's-ir-pitching'
  | 's-hands-on-support';

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