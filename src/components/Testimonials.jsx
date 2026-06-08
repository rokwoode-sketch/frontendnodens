import { Star, Quote } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'London, UK',
    flag: '🇬🇧',
    procedure: 'Hollywood Smile',
    rating: 5,
    text: 'I researched dental clinics for two years before choosing NodensCare. My coordinator walked me through every step before I even boarded the flight. The Digital Smile Design meant I approved my result on a screen before any work began. Six months on — strangers compliment my smile weekly.',
    initials: 'SM',
    color: 'bg-gold-100 text-gold-700',
  },
  {
    name: 'James Okonkwo',
    country: 'Lagos, Nigeria',
    flag: '🇳🇬',
    procedure: 'FUE Sapphire Hair Transplant',
    rating: 5,
    text: 'I had consulted clinics in London and Lagos — both quoted double the price for half the care. NodensCare\'s FUE Sapphire result at 12 months is remarkable. More importantly, their medical clearance before I flew home gave my family real peace of mind.',
    initials: 'JO',
    color: 'bg-navy-100 text-navy-700',
  },
  {
    name: 'Amira Al-Hassan',
    country: 'Dubai, UAE',
    flag: '🇦🇪',
    procedure: 'Rhinoplasty',
    rating: 5,
    text: 'The professor genuinely understood ethnic preservation — I wanted refinement, not a Westernized nose. The 3D digital planning session was the deciding factor. I could see my projected result and ask questions before committing. The outcome exceeded what I had imagined.',
    initials: 'AA',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'محمد العنزي',
    country: 'الرياض، المملكة العربية السعودية',
    flag: '🇸🇦',
    procedure: 'زراعة الشعر FUE Sapphire',
    rating: 5,
    text: 'كنت أعاني من تساقط الشعر منذ سنوات وجربت كل شيء. فريق نودنزكير كان محترفاً من أول تواصل معهم وحتى عودتي للرياض. النتيجة بعد ١٢ شهراً فاقت توقعاتي تماماً. المستشفى بمستوى عالمي والطبيب كان دقيقاً جداً في تصميم خط الشعر. أنصح كل من يعاني من هذه المشكلة.',
    initials: 'مع',
    color: 'bg-gold-100 text-gold-700',
  },
  {
    name: 'فاطمة الزهراني',
    country: 'جدة، المملكة العربية السعودية',
    flag: '🇸🇦',
    procedure: 'ابتسامة هوليوود',
    rating: 5,
    text: 'تجربتي مع نودنزكير كانت استثنائية بكل معنى الكلمة. قبل السفر أرسلت صور أسناني وحصلت على تصميم رقمي للابتسامة خلال ٢٤ ساعة. الطبيب فهم ما أريده بالضبط والنتيجة طبيعية جداً وليست مبالغة. المنسقة العربية كانت معي في كل خطوة وهذا أهدأ من روعي كثيراً.',
    initials: 'فز',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'خالد المنصوري',
    country: 'دبي، الإمارات',
    flag: '🇦🇪',
    procedure: 'تجميل الأنف',
    rating: 5,
    text: 'كنت قلقاً جداً من فكرة السفر للخارج لعملية تجميلية، لكن نودنزكير غيّرت نظرتي تماماً. الاستشارة الأولى عبر الفيديو مع الجراح كانت احترافية ومطمئنة. التخطيط ثلاثي الأبعاد مكّنني من رؤية النتيجة قبل العملية. المستشفى معتمد دولياً ومستوى الرعاية لا يختلف عن أفضل مستشفيات دبي.',
    initials: 'خم',
    color: 'bg-navy-100 text-navy-700',
  },
  {
    name: 'Katarzyna Wiśniewska',
    country: 'Warsaw, Poland',
    flag: '🇵🇱',
    procedure: 'All-on-6 Dental Implants',
    rating: 5,
    text: 'I received quotes from three Warsaw clinics — all nearly double NodensCare\'s price. The Istanbul hospital was more modern than any I had visited in Poland. My fixed bridge was fitted on Day 2, and I flew home Day 7 with a completely new smile. Absolutely flawless experience.',
    initials: 'KW',
    color: 'bg-gold-100 text-gold-700',
  },
  {
    name: 'Priya Sharma',
    country: 'Toronto, Canada',
    flag: '🇨🇦',
    procedure: 'Mommy Makeover',
    rating: 5,
    text: 'After two pregnancies I felt invisible in my own body. NodensCare\'s coordinator helped me understand exactly what was realistic, what the recovery would look like, and how to prepare. The multidisciplinary team — one surgeon, one anesthesiologist, one recovery coordinator — made me feel completely safe.',
    initials: 'PS',
    color: 'bg-navy-100 text-navy-700',
  },
  {
    name: 'Thomas Leroy',
    country: 'Paris, France',
    flag: '🇫🇷',
    procedure: 'Facelift (Deep Plane)',
    rating: 5,
    text: 'At 58, I was skeptical. My Parisian surgeon had quoted €18,000 for a facelift I wasn\'t sure about. NodensCare arranged a video consultation with the professor before I committed to anything. The deep plane result is completely natural — colleagues assume I simply look "well-rested". Extraordinary.',
    initials: 'TL',
    color: 'bg-teal-100 text-teal-700',
  },
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
            <p className={`text-gray-600 text-sm leading-relaxed mb-5 line-clamp-5 ${/[\u0600-\u06FF]/.test(review.text) ? 'font-[Noto_Naskh_Arabic]' : ''}`}>
              {review.text}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${review.color || 'bg-navy-100 text-navy-700'}`}>
                {review.initials}
              </div>
              <div>
                <div className={`font-semibold text-navy-950 text-sm ${/[\u0600-\u06FF]/.test(review.name) ? 'font-[Noto_Naskh_Arabic]' : ''}`}>{review.name}</div>
                <div className="text-gray-400 text-xs">{review.flag} {review.country} · {review.procedure}</div>
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
