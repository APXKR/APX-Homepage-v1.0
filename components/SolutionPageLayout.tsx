import React from 'react';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui';

interface SolutionPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode;
}

export const SolutionPageLayout: React.FC<SolutionPageLayoutProps> = ({ title, subtitle, description, imageUrl, children }) => {

  return (
    <main>
      <section className="py-20 md:py-32 text-center px-4 bg-light-gray dark:bg-dark">
        <FadeInSection>
          <p className="text-lg font-semibold text-accent">{subtitle}</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-dark dark:text-light leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-text dark:text-gray-text-dark">
            {description}
          </p>
        </FadeInSection>
      </section>
      
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
            <FadeInSection>
                 <img src={imageUrl} alt={title} className="rounded-3xl shadow-2xl max-w-full h-auto mx-auto"/>
            </FadeInSection>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-screen-lg mx-auto space-y-12">
          {children}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-gray dark:bg-dark">
        <FadeInSection className="max-w-screen-md mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark dark:text-light">준비되셨나요?</h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-dark/80 dark:text-light/80">APX와 함께 새로운 성장 방정식을 설계해보세요.</p>
          <Link href="/contact" className="mt-8 inline-block font-semibold bg-accent text-light px-8 py-3 rounded-full hover:brightness-110 transition-transform active:scale-95 text-lg">프로젝트 문의하기 &rarr;</Link>
        </FadeInSection>
      </section>
    </main>
  );
};

export const ContentBlock: React.FC<{ title: string; children: React.ReactNode, reverse?: boolean }> = ({ title, children, reverse = false }) => (
    <FadeInSection className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-8 md:gap-12`}>
        <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-accent sticky top-28">{title}</h3>
        </div>
        <div className="md:w-2/3 text-lg text-gray-text dark:text-gray-text-dark space-y-4">
            {children}
        </div>
    </FadeInSection>
);