import PageMeta from '../components/PageMeta';

import PageHeader from '../components/PageHeader';

import FAQ from '../components/FAQ';

import { useLanguage } from '../i18n/LanguageContext';



export default function FAQPage() {

  const { t } = useLanguage();

  const p = t.pages.faq;



  return (

    <>

      <PageMeta title={p.metaTitle} description={p.metaDescription} />



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

