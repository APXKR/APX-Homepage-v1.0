import { FadeInSection } from '@/components/ui';

export default function CompanyPage() {
    return (
        <main>
           <section className="py-20 md:py-32 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-light">우리는 동반자이자,<br/>따뜻한 전문가입니다.</h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-text dark:text-gray-text-dark">APX는 고객의 성공을 넘어, 함께 성장하는 여정을 만듭니다.</p>
           </section>
   
           <section className="py-20 md:py-32 bg-light-gray dark:bg-dark">
               <FadeInSection className="max-w-screen-lg mx-auto px-4">
                   <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-light text-center">Our Creed</h2>
                   <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
                       <div>
                           <h3 className="text-2xl font-bold text-accent">Mission</h3>
                           <p className="mt-4 text-gray-text dark:text-gray-text-dark">경계를 허무는 연결과 체계적인 성장 설계를 통해, 조직과 개인의 잠재력이 최고의 가치로 발현되도록 돕는다.</p>
                       </div>
                       <div>
                           <h3 className="text-2xl font-bold text-accent">Vision</h3>
                           <p className="mt-4 text-gray-text dark:text-gray-text-dark">성장과 혁신에 대한 과제가 생겼을 때, 조직의 리더들이 가장 먼저 찾는 파트너가 된다.</p>
                       </div>
                       <div>
                           <h3 className="text-2xl font-bold text-accent">Core Values</h3>
                           <ul className="mt-4 space-y-2 text-gray-text dark:text-gray-text-dark list-disc list-inside">
                               <li>고객 집착 (Customer Obsession)</li>
                               <li>데이터 기반의 탁월함 (Data-driven Excellence)</li>
                               <li>진정성 있는 연결 (Authentic Connection)</li>
                           </ul>
                       </div>
                   </div>
               </FadeInSection>
           </section>
   
           <section className="py-20 md:py-32">
               <FadeInSection className="max-w-screen-lg mx-auto px-4 text-center">
                   <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-light">Our Team</h2>
                   <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-text dark:text-gray-text-dark">'따뜻한 전문가' 컨셉에 맞는 전문성과 진정성을 갖춘 APX의 리더들을 소개합니다.</p>
                   <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                       <div className="text-center">
                           <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop" alt="Team Member Kim" className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg border-4 border-light dark:border-dark"/>
                           <h3 className="mt-6 text-xl font-bold text-dark dark:text-light">김민준</h3>
                           <p className="text-accent font-semibold">Managing Partner</p>
                           <p className="mt-2 text-gray-text dark:text-gray-text-dark text-sm">"데이터는 거짓말을 하지 않습니다. 우리는 숫자를 통해 문제의 본질을 꿰뚫고 가장 효과적인 해결책을 설계합니다."</p>
                       </div>
                       <div className="text-center">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&h=400&auto=format&fit=crop" alt="Team Member Lee" className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg border-4 border-light dark:border-dark"/>
                           <h3 className="mt-6 text-xl font-bold text-dark dark:text-light">이서연</h3>
                           <p className="text-accent font-semibold">Head of People & Org</p>
                           <p className="mt-2 text-gray-text dark:text-gray-text-dark text-sm">"모든 조직의 혁신은 '사람'의 마음을 얻는 것에서 시작됩니다. 진정성 있는 소통으로 변화의 에너지를 만듭니다."</p>
                       </div>
                       <div className="text-center">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=400&auto=format&fit=crop" alt="Team Member Park" className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg border-4 border-light dark:border-dark"/>
                           <h3 className="mt-6 text-xl font-bold text-dark dark:text-light">박도윤</h3>
                           <p className="text-accent font-semibold">Head of Startup Growth</p>
                           <p className="mt-2 text-gray-text dark:text-gray-text-dark text-sm">"스타트업의 성장은 속도와 방향성의 싸움입니다. 우리는 창업가의 가장 가까운 곳에서 함께 달리는 페이스메이커입니다."</p>
                       </div>
                   </div>
               </FadeInSection>
           </section>
       </main>
    );
}