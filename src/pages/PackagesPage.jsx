import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import Treatments from '../components/Treatments';
import { useLanguage } from '../i18n/LanguageContext';

export default function PackagesPage() {
  const { t } = useLanguage();
  const p = t.pages.packages;

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <PageHeader
        title={p.title}
        titleAccent={p.titleAccent}
        subtitle={t.treatments.subtitle}
        breadcrumbs={[{ label: p.breadcrumb }]}
      />

      <Treatments />
    </>
  );
}
