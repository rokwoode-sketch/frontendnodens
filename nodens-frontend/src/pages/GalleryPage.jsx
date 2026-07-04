import PageMeta from '../components/PageMeta';

import PageHeader from '../components/PageHeader';

import Gallery from '../components/Gallery';

import { useLanguage } from '../i18n/LanguageContext';



export default function GalleryPage() {

  const { t } = useLanguage();

  const p = t.pages.gallery;



  return (

    <>

      <PageMeta title={p.metaTitle} description={p.metaDescription} />



      <PageHeader

        title={p.title}

        titleAccent={p.titleAccent}

        subtitle={p.subtitle}

        breadcrumbs={[{ label: p.breadcrumb }]}

      />



      <Gallery mode="page" />

    </>

  );

}

