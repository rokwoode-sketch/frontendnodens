import { Star, Quote } from 'lucide-react';

import { useRef, useEffect, useState } from 'react';

import { useLanguage } from '../i18n/LanguageContext';



const testimonials = [

  { name: 'Sarah Mitchell', country: 'London, UK', procedure: 'Hollywood Smile', rating: 5, text: 'My coordinator guided every step before I flew. I approved my smile on screen first — strangers compliment it weekly now.', initials: 'SM', color: 'bg-gold-100 text-gold-700' },

  { name: 'James Okonkwo', country: 'Lagos, Nigeria', procedure: 'FUE Sapphire Hair Transplant', rating: 5, text: 'London quoted double the price. NodensCare delivered remarkable results and medical clearance before I flew home.', initials: 'JO', color: 'bg-navy-100 text-navy-700' },

  { name: 'Amira Al-Hassan', country: 'Dubai, UAE', procedure: 'Rhinoplasty', rating: 5, text: 'The professor understood ethnic preservation. 3D planning let me see my result before surgery — it exceeded my expectations.', initials: 'AA', color: 'bg-teal-100 text-teal-700' },

  { name: 'محمد العنزي', country: 'الرياض، السعودية', procedure: 'زراعة الشعر FUE Sapphire', rating: 5, text: 'فريق محترف من أول تواصل حتى العودة. النتيجة بعد ١٢ شهراً فاقت توقعاتي والمستشفى بمستوى عالمي.', initials: 'مع', color: 'bg-gold-100 text-gold-700' },

  { name: 'فاطمة الزهراني', country: 'جدة، السعودية', procedure: 'ابتسامة هوليوود', rating: 5, text: 'حصلت على تصميم رقمي للابتسامة خلال ٢٤ ساعة. النتيجة طبيعية والمنسقة العربية كانت معي في كل خطوة.', initials: 'فز', color: 'bg-teal-100 text-teal-700' },

  { name: 'خالد المنصوري', country: 'دبي، الإمارات', procedure: 'تجميل الأنف', rating: 5, text: 'الاستشارة عبر الفيديو كانت احترافية. التخطيط ثلاثي الأبعاد مكّنني من رؤية النتيجة قبل العملية.', initials: 'خم', color: 'bg-navy-100 text-navy-700' },

  { name: 'Katarzyna Wiśniewska', country: 'Warsaw, Poland', procedure: 'All-on-6 Dental Implants', rating: 5, text: 'Warsaw clinics quoted nearly double. My fixed bridge was fitted on Day 2 — I flew home Day 7 with a new smile.', initials: 'KW', color: 'bg-gold-100 text-gold-700' },

  { name: 'Priya Sharma', country: 'Toronto, Canada', procedure: 'Mommy Makeover', rating: 5, text: 'My coordinator explained exactly what was realistic and how to prepare. The team made me feel completely safe.', initials: 'PS', color: 'bg-navy-100 text-navy-700' },

  { name: 'Thomas Leroy', country: 'Paris, France', procedure: 'Facelift (Deep Plane)', rating: 5, text: 'Paris quoted €18,000. The deep plane result looks completely natural — colleagues say I look well-rested.', initials: 'TL', color: 'bg-teal-100 text-teal-700' },

];



export default function Testimonials() {

  const { t } = useLanguage();

  const scrollRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);



  useEffect(() => {

    const el = scrollRef.current;

    if (!el) return;

    let animFrame;

    let pos = 0;

    const animate = () => {

      if (!isPaused) {

        pos += 0.5;

        if (pos >= el.scrollWidth / 2) pos = 0;

        el.scrollLeft = pos;

      }

      animFrame = requestAnimationFrame(animate);

    };

    animFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animFrame);

  }, [isPaused]);



  const doubled = [...testimonials, ...testimonials];



  return (

    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14">

        <div className="text-center" data-aos="fade-up">

          <p className="section-subtitle mb-4">{t.testimonials.sectionLabel}</p>

          <h2 className="section-title mb-6">

            {t.testimonials.h2a}

            <br />

            <span className="text-gold-600">{t.testimonials.h2b}</span>

          </h2>

        </div>

      </div>



      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden px-6" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

        {doubled.map((review, i) => (

          <div

            key={i}

            dir={/[\u0600-\u06FF]/.test(review.text) ? 'rtl' : 'ltr'}

            className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"

          >

            <div className="flex gap-0.5 mb-4">

              {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} className="text-gold-500 fill-gold-500" />)}

            </div>

            <Quote size={20} className="text-gold-200 mb-3" />

            <p className={`text-gray-600 text-sm leading-relaxed mb-5 ${/[\u0600-\u06FF]/.test(review.text) ? 'font-[Noto_Naskh_Arabic]' : ''}`}>

              {review.text}

            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">

              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${review.color}`}>

                {review.initials}

              </div>

              <div>

                <div className={`font-semibold text-navy-950 text-sm ${/[\u0600-\u06FF]/.test(review.name) ? 'font-[Noto_Naskh_Arabic]' : ''}`}>{review.name}</div>

                <div className="text-gray-400 text-xs">{review.country} · {review.procedure}</div>

              </div>

            </div>

          </div>

        ))}

      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">

        <div className="bg-navy-50 rounded-2xl py-8 px-6 flex flex-wrap justify-center gap-10" data-aos="fade-up">

          {t.testimonials.stats.map(({ label, value, sub }) => (

            <div key={label} className="text-center">

              <div className="font-serif text-3xl font-bold text-navy-950">{value}</div>

              <div className="text-navy-700 text-sm font-semibold mt-0.5">{label}</div>

              <div className="text-gray-400 text-xs">{sub}</div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

