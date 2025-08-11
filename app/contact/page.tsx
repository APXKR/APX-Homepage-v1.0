'use client';

import React, { useState } from 'react';
import { FadeInSection } from '@/components/ui';

const InfoBlock: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-dark dark:text-light">{title}</h3>
            <div className="text-gray-text dark:text-gray-text-dark">{children}</div>
        </div>
    </div>
);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        company: '',
        department: '',
        name: '',
        position: '',
        contactNumber: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields: { key: keyof typeof formData; label: string }[] = [
            { key: 'company', label: '회사명' },
            { key: 'name', label: '성함' },
            { key: 'contactNumber', label: '연락처' },
            { key: 'email', label: '이메일' },
            { key: 'subject', label: '제목' },
            { key: 'message', label: '내용' },
        ];

        for (const field of requiredFields) {
            if (!formData[field.key].trim()) {
                alert(`'${field.label}' 항목을 입력해주세요.`);
                document.getElementById(field.key)?.focus();
                return;
            }
        }

        setIsSubmitting(true);
        setError(null);
        
        const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE'; // IMPORTANT: Keep this placeholder
        
        if (SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
            alert('문의 제출을 위한 서버 URL이 설정되지 않았습니다. 관리자에게 문의하세요.');
            setIsSubmitting(false);
            return;
        }

        const dataToSend = new FormData();
        (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
            dataToSend.append(key, formData[key]);
        });

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: dataToSend,
        })
        .then(response => response.json())
        .then(data => {
            setIsSubmitting(false);
            if (data.result === 'success') {
                alert('문의가 성공적으로 접수되었습니다.');
                setFormData({
                    company: '', department: '', name: '', position: '',
                    contactNumber: '', email: '', subject: '', message: ''
                });
            } else {
                throw new Error(data.message || 'An unknown error occurred in the script.');
            }
        })
        .catch(err => {
            setIsSubmitting(false);
            setError('문의 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
            console.error('Error submitting form:', err);
            alert('문의 제출에 실패했습니다. 네트워크 연결을 확인하고 다시 시도해주세요.');
        });
    };

    const placeholderText = `문의 배경, 주요 과제, 기간 및 예산 등 구체적인 내용을 기재해주시면 더욱 신속하고 정확한 상담이 가능합니다.\n\n1. 문의 배경 및 목적:\n   (예: 신규 사업 진출을 위한 GTM 전략 수립이 필요합니다.)\n\n2. 주요 과제 및 요청사항:\n   (예: 3개월 내에 시장 분석, 타겟 고객 정의, 채널 전략을 포함한 구체적인 실행 계획을 수립하고 싶습니다.)\n\n3. 기간 및 예산:\n   (예: 예상 기간은 3개월이며, 예산은 00원 내외로 생각하고 있습니다.)`;

    return (
        <main>
            <section className="py-20 md:py-32 text-center px-4">
                <FadeInSection>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light">Contact Us</h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-text dark:text-gray-text-dark">
                        프로젝트 문의, 파트너십 제안 등 성장을 위한 모든 논의를 환영합니다.<br />
                        아래 정보를 통해 연락 주시거나 메시지를 남겨주시면 신속하게 답변드리겠습니다.
                    </p>
                </FadeInSection>
            </section>
            
            <section className="py-20 md:py-24 px-4 bg-light-gray dark:bg-dark">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
                    <FadeInSection className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-dark dark:text-light mb-8">Information</h2>
                            <div className="space-y-8">
                                <InfoBlock
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                    title="주소"
                                >
                                    <p>서울시 강남구 테헤란로 128, 317호 (06234)</p>
                                    <p>#317, 128 Teheran-ro, Gangnam-gu, Seoul, Korea</p>
                                </InfoBlock>
                                <InfoBlock
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                    title="이메일"
                                >
                                    <a href="mailto:support@apxc.co.kr" className="hover:text-accent transition-colors">support@apxc.co.kr</a>
                                </InfoBlock>
                            </div>
                        </div>
                         <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.717180376101!2d127.0319593151651!3d37.5148679798075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f7c9e7e72d%3A0x6d9f9b5c32b4b45a!2s128%20Teheran-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="APX Office Location on Google Maps"
                            ></iframe>
                        </div>
                    </FadeInSection>
                    
                    <FadeInSection>
                        <h2 className="text-3xl font-bold text-dark dark:text-light mb-8">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">회사명 <span className="text-accent">*</span></label>
                                    <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" required />
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">부서</label>
                                    <input type="text" id="department" value={formData.department} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">성함 <span className="text-accent">*</span></label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" required />
                                </div>
                                <div>
                                    <label htmlFor="position" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">직책</label>
                                    <input type="text" id="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" />
                                </div>
                                 <div>
                                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">연락처 <span className="text-accent">*</span></label>
                                    <input type="tel" id="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" required />
                                </div>
                                 <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">이메일 <span className="text-accent">*</span></label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">제목 <span className="text-accent">*</span></label>
                                <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-text dark:text-gray-text-dark mb-2">내용 <span className="text-accent">*</span></label>
                                <textarea id="message" rows={8} value={formData.message} onChange={handleChange} placeholder={placeholderText} className="w-full px-4 py-3 bg-light dark:bg-darker border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition placeholder:text-gray-text/60 dark:placeholder:text-gray-text-dark/60" required></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full px-8 py-4 text-lg font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all active:scale-95 disabled:bg-gray-text disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? '전송 중...' : '문의하기'}
                                </button>
                                {error && <p className="text-accent text-sm mt-2 text-center">{error}</p>}
                            </div>
                         </form>
                    </FadeInSection>
                </div>
            </section>
        </main>
    );
}