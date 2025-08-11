
import React from 'react';
import Link from 'next/link';

const pageToPath = (page: string, anchor?: string) => {
    const basePaths: { [key: string]: string } = {
        'solutions-overview-page': '/solutions',
        'cases-page': '/cases',
        'insights-page': '/insights',
        'company-page': '/company',
        'contact-page': '/contact',
        'our-approach-page': '/solutions/approach',
        's-people-org-overview': '/solutions/people-org',
        's-startup-biz-overview': '/solutions/startup-biz',
    };
    const path = basePaths[page] || '/';
    return anchor ? `${path}#${anchor}` : path;
};

const FooterLink: React.FC<{ page: string; children: React.ReactNode }> = ({ page, children }) => (
    <li>
        <Link href={pageToPath(page)} className="hover:text-accent transition-colors">
            {children}
        </Link>
    </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-gray dark:bg-dark text-sm text-gray-text dark:text-gray-text-dark">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-dark dark:text-light mb-4">솔루션</h3>
            <ul className="space-y-3">
              <FooterLink page="solutions-overview-page">솔루션 개요</FooterLink>
              <FooterLink page="our-approach-page">Our Approach</FooterLink>
              <FooterLink page="s-people-org-overview">People & Organization</FooterLink>
              <FooterLink page="s-startup-biz-overview">Startup & Business</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-dark dark:text-light mb-4">케이스</h3>
            <ul className="space-y-3">
              <FooterLink page="cases-page">전체 보기</FooterLink>
              <FooterLink page="cases-page">민간기업</FooterLink>
              <FooterLink page="cases-page">공공조직</FooterLink>
              <FooterLink page="cases-page">스타트업</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-dark dark:text-light mb-4">인사이트</h3>
            <ul className="space-y-3">
              <FooterLink page="insights-page">전체 보기</FooterLink>
              <FooterLink page="insights-page">APX 미래 성장 리포트</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-dark dark:text-light mb-4">회사 소개</h3>
            <ul className="space-y-3">
                <FooterLink page="company-page">Our Creed</FooterLink>
                <FooterLink page="company-page">Our Team</FooterLink>
                <FooterLink page="company-page">Our Promise</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-dark dark:text-light mb-4">문의하기</h3>
            <ul className="space-y-3">
              <li><Link href={pageToPath('contact-page')} className="hover:text-accent transition-colors">프로젝트 문의</Link></li>
              <li><Link href={pageToPath('contact-page')} className="hover:text-accent transition-colors">파트너십 제안</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="space-y-2">
            <p>Copyright © 2024 APX Inc. All rights reserved.</p>
            <p className="text-gray-text/80 dark:text-gray-text-dark/80">
                #317, 128 Teheran-ro, Gangnam-gu, Seoul, Korea (06234) | <a href="mailto:support@apxc.co.kr" className="hover:text-accent">support@apxc.co.kr</a>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-accent transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;