import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageMeta
        title={`${t.common.notFoundTitle} | NodensCare`}
        description={t.common.notFoundBody}
        noindex
      />
      <section className="min-h-[70vh] flex items-center justify-center pt-36 pb-20 px-5 bg-navy-50">
        <div className="max-w-lg w-full border border-clinical-line bg-white px-8 py-12 md:px-12 md:py-14 text-center">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-gold-600 mb-4">{t.common.notFoundCode}</p>
          <div className="w-10 h-px bg-gold-400 mx-auto mb-6" aria-hidden="true" />
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-navy-950 mb-4 tracking-tight">
            {t.common.notFoundTitle}
          </h1>
          <p className="text-navy-500 leading-[1.7] mb-8">
            {t.common.notFoundBody}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="btn-primary">
              {t.common.notFoundHome}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t.common.notFoundContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
