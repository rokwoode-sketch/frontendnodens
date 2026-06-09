import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import Treatments from '../components/Treatments';
import { useLanguage } from '../i18n/LanguageContext';

export default function PackagesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Treatment Packages & Pricing | NodensCare Istanbul</title>
        <meta name="description" content="All-inclusive treatment packages for hair transplant, Hollywood Smile, rhinoplasty, dental implants, liposuction, and more. Transparent pricing from NodensCare Istanbul." />
      </Helmet>

      <PageHeader
        title="Treatment"
        titleAccent="Packages"
        subtitle={t.treatments.subtitle}
        breadcrumbs={[{ label: 'Packages' }]}
      />

      <Treatments />
    </>
  );
}
