import React from 'react';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui';

const ProcessDiagram: React.FC = () => (
    <div className="w-full max-w-screen-lg mx-auto py-12 md:py-20 px-4" aria-label="APX Approach: Unlock, Ignite, Accelerate">
        {/* Desktop Diagram (SVG) */}
        <div className="hidden md:block">
            <svg width="100%" viewBox="0 0 1000 250" role="img" aria-labelledby="diagram-title">
                <title id="diagram-title">A 3-stage process diagram: Unlock, Ignite, Accelerate.</title>
                <style>{`
                    .line-path { stroke-dasharray: 500; stroke-dashoffset: 500; animation: draw-line 1.5s ease-out forwards; }
                    .node-group { opacity: 0; animation: fade-in 0.8s ease-out forwards; }
                    #node-1 { animation-delay: 0s; }
                    #line-1 { animation-delay: 0.2s; }
                    #node-2 { animation-delay: 0.5s; }
                    #line-2 { animation-delay: 0.7s; }
                    #node-3 { animation-delay: 1s; }
                    @keyframes draw-line { to { stroke-dashoffset: 0; } }
                    @keyframes fade-in { to { opacity: 1; } }
                `}</style>
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current text-accent" />
                    </marker>
                </defs>

                <path id="line-1" d="M 230 125 H 395" stroke="currentColor" strokeWidth="3" fill="none" className="line-path text-gray-text/30 dark:text-gray-text-dark/30" markerEnd="url(#arrow)" />
                <path id="line-2" d="M 605 125 H 770" stroke="currentColor" strokeWidth="3" fill="none" className="line-path text-gray-text/30 dark:text-gray-text-dark/30" markerEnd="url(#arrow)" />

                <g id="node-1" className="node-group">
                    <foreignObject x="50" y="50" width="180" height="150">
                        <div className="flex flex-col items-center justify-center text-center h-full p-4">
                            <div className="w-24 h-24 mb-3 flex items-center justify-center bg-accent/10 rounded-full text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258l-1-1.414L6 12l-2-8h4l2 2h2v2h2v2h2a2 2 0 012-2h-2m-6 4a2 2 0 110-4 2 2 0 010 4z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-accent">Unlock</h3>
                            <p className="font-semibold text-dark dark:text-light">진단 & 분석</p>
                        </div>
                    </foreignObject>
                </g>
                <g id="node-2" className="node-group">
                    <foreignObject x="425" y="50" width="180" height="150">
                        <div className="flex flex-col items-center justify-center text-center h-full p-4">
                            <div className="w-24 h-24 mb-3 flex items-center justify-center bg-accent/10 rounded-full text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-accent">Ignite</h3>
                            <p className="font-semibold text-dark dark:text-light">설계 & 전략</p>
                        </div>
                    </foreignObject>
                </g>
                <g id="node-3" className="node-group">
                    <foreignObject x="820" y="50" width="180" height="150">
                        <div className="flex flex-col items-center justify-center text-center h-full p-4">
                            <div className="w-24 h-24 mb-3 flex items-center justify-center bg-accent/10 rounded-full text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-accent">Accelerate</h3>
                            <p className="font-semibold text-dark dark:text-light">실행 & 교육</p>
                        </div>
                    </foreignObject>
                </g>
            </svg>
        </div>

        {/* Mobile Diagram (Flexbox) */}
        <div className="md:hidden space-y-8 flex flex-col items-center">
            {[
                { title: 'Unlock', subtitle: '진단 & 분석', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258l-1-1.414L6 12l-2-8h4l2 2h2v2h2v2h2a2 2 0 012-2h-2m-6 4a2 2 0 110-4 2 2 0 010 4z" /></svg> },
                { title: 'Ignite', subtitle: '설계 & 전략', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
                { title: 'Accelerate', subtitle: '실행 & 교육', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
            ].map((item, index, arr) => (
                <React.Fragment key={item.title}>
                    <FadeInSection className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-3 flex items-center justify-center bg-accent/10 rounded-full text-accent">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
                        <p className="font-semibold text-dark dark:text-light">{item.subtitle}</p>
                    </FadeInSection>
                    {index < arr.length - 1 && (
                        <FadeInSection>
                            <div className="h-10 w-px bg-gray-text/30 dark:bg-gray-text-dark/30"></div>
                        </FadeInSection>
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
);


const ApproachSection: React.FC<{
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    children: React.ReactNode;
    reverse?: boolean;
}> = ({ id, title, subtitle, imageUrl, children, reverse = false }) => (
    <section id={id} className="py-16 md:py-24 scroll-mt-20">
        <FadeInSection className="max-w-screen-lg mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={reverse ? 'md:order-last' : 'md:order-first'}>
                    <img src={imageUrl} alt={title} className="rounded-3xl shadow-2xl w-full h-auto" />
                </div>
                <div className={reverse ? 'md:order-first' : 'md:order-last'}>
                    <p className="text-lg font-bold text-accent">{subtitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-dark dark:text-light">{title}</h2>
                    <div className="mt-6 text-lg space-y-4 text-gray-text dark:text-gray-text-dark">
                        {children}
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);


export default function OurApproachPage() {
    return (
        <main className="bg-light dark:bg-darker">
            <section className="py-20 md:py-32 text-center px-4 bg-light-gray dark:bg-dark">
                <FadeInSection>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light">The APX Approach</h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-text dark:text-gray-text-dark">
                        성장을 설계하고 기회를 연결하는 APX의 Growth Engine Framework.
                        <br />
                        데이터 기반 진단, 맞춤형 전략 설계, 그리고 지속가능한 실행을 통해 예측 가능한 성장을 만듭니다.
                    </p>
                </FadeInSection>
            </section>
            
            <ProcessDiagram />

            <div className="bg-light dark:bg-darker">
                <ApproachSection
                    id="unlock"
                    title="Unlock: 진단 & 분석"
                    subtitle="Phase 1"
                    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1287&auto=format&fit=crop"
                >
                    <p>성장의 정체는 표면적인 증상이 아닌 근본적인 원인에서 비롯됩니다. APX는 '종합 건강검진'처럼 조직 전체를 스캔하는 종합 진단부터, 특정 문제 영역을 깊이 파고드는 'MRI' 같은 정밀 진단까지 체계적인 진단 프레임워크를 사용합니다.</p>
                    <p>이를 통해 리더십, 조직문화, HR 시스템, 비즈니스 모델 등 성장을 저해하는 핵심 요인을 데이터에 기반하여 객관적으로 규명하고 새로운 성장 기회를 발견하는 나침반을 찾습니다.</p>
                </ApproachSection>

                <div className="h-px max-w-screen-lg mx-auto bg-black/10 dark:bg-white/10"></div>
                
                <ApproachSection
                    id="ignite"
                    title="Ignite: 설계 & 전략"
                    subtitle="Phase 2"
                    imageUrl="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop"
                    reverse={true}
                >
                    <p>성공적인 변화는 치밀한 설계도에서 시작됩니다. APX는 진단 단계에서 발굴한 기회를 바탕으로, 조직의 비전과 전략에 맞는 최적의 청사진을 그립니다.</p>
                    <p>이는 조직 구조, 일하는 방식, HR 시스템 등 조직의 성장을 이끌 구체적이고 실행 가능한 시스템 설계는 물론, 구성원의 마음을 움직여 변화의 첫 불씨를 점화하는 과정까지 포함합니다.</p>
                </ApproachSection>
                
                <div className="h-px max-w-screen-lg mx-auto bg-black/10 dark:bg-white/10"></div>

                <ApproachSection
                    id="accelerate"
                    title="Accelerate: 실행 & 교육"
                    subtitle="Phase 3"
                    imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                >
                    <p>시스템은 저절로 작동하지 않습니다. 시스템을 움직이는 것은 결국 '사람'입니다. APX는 설계된 시스템이 조직 내에 성공적으로 뿌리내리고 활성화될 수 있도록, 구성원들의 역량을 내재화하는 과정을 지원합니다.</p>
                    <p>리더십 개발 아카데미, 핵심 역량 교육, 성과 코칭 등 맞춤형 실행 프로그램을 통해 일회성 컨설팅을 넘어, 조직이 스스로 성장해나가는 선순환 구조를 만듭니다.</p>
                </ApproachSection>
            </div>
            
            <section className="py-20 md:py-32 bg-accent">
                <FadeInSection className="max-w-screen-md mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">APX와 함께 성장의<br/>다음 단계를 설계하세요.</h2>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">당신의 비즈니스가 가진 잠재력을 최고의 가치로 만들 준비가 되셨나요?</p>
                    <Link href="/contact" className="mt-8 inline-block font-semibold bg-white text-accent px-8 py-3 rounded-full hover:brightness-110 transition-transform active:scale-95 text-lg">프로젝트 문의하기 &rarr;</Link>
                </FadeInSection>
            </section>

        </main>
    );
}