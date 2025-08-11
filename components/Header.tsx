
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Page } from '../types';
import { ThemeToggle, MenuIcon, CloseIcon } from './ui';

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
        's-hr-impl': '/solutions/people-org/hr-implementation',
        's-talent-impl': '/solutions/people-org/talent-implementation',
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

const NavLink: React.FC<{ page: Page; children: React.ReactNode, className?: string }> = ({ page, children, className }) => (
    <Link href={pageToPath(page)} className={`transition-colors text-dark/80 hover:text-dark dark:text-light/80 dark:hover:text-light ${className || ''}`}>
        {children}
    </Link>
);

const MobileMenu: React.FC<{ isOpen: boolean; closeMenu: () => void; }> = ({ isOpen, closeMenu }) => {
    const handleLinkClick = () => {
        closeMenu();
    }
    
    return (
        <div className={`fixed inset-0 z-[100] bg-light dark:bg-darker transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
            <div className="flex justify-end p-4">
                <button onClick={closeMenu} className="p-2 text-dark dark:text-light">
                    <CloseIcon className="w-8 h-8" />
                </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-16">
                <Link href={pageToPath('solutions-overview-page')} onClick={handleLinkClick} className="py-4 text-3xl font-semibold text-dark dark:text-light">솔루션</Link>
                <Link href={pageToPath('cases-page')} onClick={handleLinkClick} className="py-4 text-3xl font-semibold text-dark dark:text-light">케이스</Link>
                <Link href={pageToPath('insights-page')} onClick={handleLinkClick} className="py-4 text-3xl font-semibold text-dark dark:text-light">인사이트</Link>
                <Link href={pageToPath('company-page')} onClick={handleLinkClick} className="py-4 text-3xl font-semibold text-dark dark:text-light">회사 소개</Link>
                <Link href={pageToPath('contact-page')} onClick={handleLinkClick} className="mt-8 px-6 py-2 text-xl font-semibold rounded-full bg-accent text-white">문의하기</Link>
            </nav>
        </div>
    );
};

import { AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);
    let menuTimeout: number;

    const handleSolutionsEnter = () => {
        clearTimeout(menuTimeout);
        setMegaMenuVisible(true);
    };

    const handleSolutionsLeave = () => {
        menuTimeout = window.setTimeout(() => {
            setMegaMenuVisible(false);
        }, 200);
    };

    const closeMegaMenu = () => {
        setMegaMenuVisible(false);
    }
    
    return (
        <>
            <header className="sticky top-0 z-50 bg-light/80 dark:bg-darker/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors duration-300">
                <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link href={pageToPath("homepage")}><Image src="/logo.png" alt="APX Logo" width={125} height={50} priority /></Link>

                        <div className="hidden md:flex md:items-center md:space-x-10 text-lg font-medium">
                            <div onMouseEnter={handleSolutionsEnter} onMouseLeave={handleSolutionsLeave}>
                                <NavLink page="solutions-overview-page">솔루션</NavLink>
                                                                <AnimatePresence>
                                    {isMegaMenuVisible && <MegaMenu onClose={closeMegaMenu} />}
                                </AnimatePresence>
                            </div>
                            <NavLink page="cases-page">케이스</NavLink>
                            <NavLink page="insights-page">인사이트</NavLink>
                            <NavLink page="company-page">회사 소개</NavLink>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:block">
                                <Link href={pageToPath('contact-page')} className="px-5 py-2 text-base font-semibold rounded-full bg-accent text-white hover:brightness-110 transition">문의하기</Link>
                            </div>
                            <ThemeToggle />
                            <div className="md:hidden">
                                <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-dark dark:text-light">
                                    <MenuIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} />
            <div className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${isMegaMenuVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onMouseEnter={handleSolutionsLeave}></div>
        </>
    );
};

export default Header;
