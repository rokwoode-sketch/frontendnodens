import PageMeta from '../components/PageMeta';

import PageHeader from '../components/PageHeader';

import Doctors from '../components/Doctors';

import { useLanguage } from '../i18n/LanguageContext';



export default function DoctorsPage() {

  const { t } = useLanguage();

  const p = t.pages.doctors;



  return (

    <>

      <PageMeta title={p.metaTitle} description={p.metaDescription} />



      <PageHeader

        title={p.title}

        titleAccent={p.titleAccent}

        subtitle={p.subtitle}

        breadcrumbs={[{ label: p.breadcrumb }]}

      />



      <Doctors />

    </>

  );

}

