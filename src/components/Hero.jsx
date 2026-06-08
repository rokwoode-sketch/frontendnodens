import { ArrowRight, Shield, Star, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-medical/20 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-300 text-xs font-semibold tracking-widest uppercase">{t.hero.badge}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              {t.hero.h1a}
              <br />
              <span className="text-gold-400">{t.hero.h1b}</span>
              <br />
              {t.hero.h1c}
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">{t.hero.subtitle}</p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button onClick={() => scrollTo('#contact')} className="btn-primary text-base px-8 py-4">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo('#gallery')} className="btn-outline text-base px-8 py-4">
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: t.hero.badge1 },
                { icon: Star, text: t.hero.badge2 },
                { icon: Users, text: t.hero.badge3 },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <Icon size={14} className="text-gold-400" />
                  <span className="text-white/80 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=700&fit=crop&crop=center"
                alt="Istanbul JCI-accredited surgical center"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                {[
                  { num: '15+', label: t.hero.stat1 },
                  { num: '50+', label: t.hero.stat2 },
                  { num: '98%', label: t.hero.stat3 },
                ].map(({ num, label }) => (
                  <div key={label} className="flex-1 bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 text-center">
                    <div className="text-gold-400 font-bold text-xl font-serif">{num}</div>
                    <div className="text-white/80 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-gray-100 animate-float">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-gold-600" />
              </div>
              <div>
                <div className="text-navy-950 font-bold text-sm">JCI Accredited</div>
                <div className="text-gray-500 text-xs">International Standard</div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 max-w-[200px] animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-gold-500 fill-gold-500" />)}
              </div>
              <p className="text-navy-800 text-xs font-medium leading-snug">{t.hero.review}</p>
              <p className="text-gray-400 text-xs mt-1">{t.hero.reviewAuthor}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
