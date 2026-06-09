import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const p = t.pages.contact;

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

      <Contact />
    </>
  );
}
