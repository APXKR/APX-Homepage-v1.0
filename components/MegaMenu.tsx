
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SOLUTIONS_DATA, SolutionCategory } from '../constants/solutions';
import type { Page } from '../types';

const pageToPath = (page: Page, anchor?: string) => {
    const basePaths: { [key in Page]?: string } = {
        'homepage': '/',
        'solutions-overview-page': '/solutions',
        'cases-page': '/cases',
        'insights-page': '/insights',
        'company-page': '/company',
        'contact-page': '/contact',
        'our-approach-page': '/solutions/approach',
        's-people-org-overview': '/solutions/people-org',
        's-startup-biz-overview': '/solutions/startup-biz',
        's-org-diag': '/solutions/people-org/org-diagnosis',
        's-culture-diag': '/solutions/people-org/culture-diagnosis',
        's-leader-diag': '/solutions/people-org/leadership-diagnosis',
        's-team-diag': '/solutions/people-org/team-diagnosis',
        's-indiv-diag': '/solutions/people-org/individual-diagnosis',
        's-hr-design': '/solutions/people-org/hr-design',
        's-talent-design': '/solutions/people-org/talent-design',
        's-leader-academy': '/solutions/people-org/leadership-academy',
        's-core-academy': '/solutions/people-org/core-competency-academy',
        's-culture-academy': '/solutions/people-org/culture-academy',
        's-hr-academy': '/solutions/people-org/hr-academy',
        's-hr-impl': '/solutions/people-org/hr-implementation',
        's-talent-impl': '/solutions/people-org/talent-implementation',
        's-solution-library-anchor': '/solutions/people-org#solution-library',
        's-bm-validation': '/solutions/startup-biz/bm-validation',
        's-gtm-design': '/solutions/startup-biz/gtm-design',
        's-ir-design': '/solutions/startup-biz/ir-design',
        's-mgmt-os-design': '/solutions/startup-biz/mgmt-os-design',
        's-ir-pitching': '/solutions/startup-biz/ir-pitching',
        's-hands-on-support': '/solutions/startup-biz/hands-on-support',
    };
    const path = basePaths[page] || '/';
    return anchor ? `${path}#${anchor}` : path;
};

interface MegaTier1ItemProps {
  item: SolutionCategory;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
}

const MegaTier1Item = ({ item, isActive, onHover, onClick }: MegaTier1ItemProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(pageToPath(item.page));
    onClick();
  };

  return (
    <li onMouseEnter={onHover}>
      <button
        onClick={handleClick}
        className={`group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left transition-colors ${
          isActive
            ? 'bg-gray-100 dark:bg-gray-700'
            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <span className="text-lg font-bold text-primary-text dark:text-dark-primary-text">{item.name}</span>
        <ChevronRight size={20} className="text-secondary-text opacity-50 transition-transform group-hover:opacity-100 group-hover:translate-x-1" />
      </button>
    </li>
  );
};

interface MegaTier2And3Props {
    category: SolutionCategory;
    onClick: () => void;
}

const MegaTier2And3 = ({ category, onClick }: MegaTier2And3Props) => {
    if (category.points) {
        return (
            <div className="grid grid-cols-3 gap-6">
                {category.points.map(item => (
                    <Link
                        key={item.k}
                        href={pageToPath(category.page)}
                        onClick={onClick}
                        className="flex flex-col rounded-lg border border-gray-200/80 dark:border-gray-700/80 bg-gray-50/30 dark:bg-gray-900/30 p-5 transition-all hover:shadow-lg hover:border-accent-blue/50 hover:-translate-y-1"
                    >
                        <div className="text-sm font-bold text-accent">{item.k}</div>
                        <h4 className="mt-1 text-base font-semibold text-primary-text dark:text-dark-primary-text">{item.ko}</h4>
                        <p className="mt-2.5 text-sm text-secondary-text flex-grow">{item.desc}</p>
                    </Link>
                ))}
            </div>
        );
    }

    if (category.phases) {
        return (
            <div className="grid grid-cols-3 gap-6">
                {category.phases.map(phase => {
                    const englishName = phase.name.k;
                    const koreanName = phase.name.ko;

                    return (
                        <div key={phase.id} className="flex flex-col rounded-lg border border-gray-200/80 dark:border-gray-700/80 bg-gray-50/30 dark:bg-gray-900/30 p-5 transition-all hover:shadow-lg hover:border-accent-blue/50 hover:-translate-y-1">
                            <Link
                                href={pageToPath(category.page, phase.id)}
                                onClick={onClick}
                                className="block mb-4"
                            >
                                {englishName && <div className="text-sm font-bold text-accent">{englishName}</div>}
                                <h4 className="mt-1 text-base font-semibold text-primary-text dark:text-dark-primary-text hover:text-accent transition-colors">{koreanName}</h4>
                            </Link>
                            <ul className="space-y-3 flex-grow">
                                {phase.solutions.map(solution => (
                                    <li key={solution.name}>
                                        <Link
                                            href={pageToPath(solution.page)}
                                            onClick={onClick}
                                            className="text-sm text-secondary-text hover:text-primary-text dark:hover:text-dark-primary-text transition-colors"
                                        >
                                            {solution.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
};


const MegaMenu = ({ onClose }: { onClose: () => void }) => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<keyof typeof SOLUTIONS_DATA>('peopleAndOrganization');

  const categories = [
    { key: 'approach' as const, data: SOLUTIONS_DATA.approach },
    { key: 'peopleAndOrganization' as const, data: SOLUTIONS_DATA.peopleAndOrganization },
    { key: 'startup' as const, data: SOLUTIONS_DATA.startup },
  ];
  
  const activeCategoryData = SOLUTIONS_DATA[activeCategoryKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed top-[80px] left-0 right-0 flex justify-center pointer-events-none"
    >
      <div className="w-[1152px] max-w-[calc(100vw-32px)] rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 pointer-events-auto">
        <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1 border-r border-gray-200 dark:border-gray-700 pr-8">
              <ul className="space-y-1">
                {categories.map(({ key, data }) => (
                  <MegaTier1Item
                    key={key}
                    item={data}
                    isActive={activeCategoryKey === key}
                    onHover={() => setActiveCategoryKey(key)}
                    onClick={onClose}
                  />
                ))}
              </ul>
            </div>
            <div className="col-span-3">
              <MegaTier2And3 category={activeCategoryData} onClick={onClose} />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
