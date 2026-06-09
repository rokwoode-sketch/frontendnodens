import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';
import { useLanguage } from '../i18n/LanguageContext';

export default function FAQPage() {
  const { t } = useLanguage();
  const p = t.pages.faq;

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <PageHeader
        title={p.title}
        titleAccent={p.titleAccent}
        subtitle={p.subtitle}
        breadcrumbs={[{ label: p.breadcrumb }]}
      />

      <FAQ />
    </>
  );
}
