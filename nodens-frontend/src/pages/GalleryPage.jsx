import { Helmet } from 'react-helmet-async';

import PageHeader from '../components/PageHeader';

import Gallery from '../components/Gallery';

import { useLanguage } from '../i18n/LanguageContext';



export default function GalleryPage() {

  const { t } = useLanguage();

  const p = t.pages.gallery;



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



      <Gallery mode="page" />

    </>

  );

}

