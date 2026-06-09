import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>FAQ | NodensCare Medical Tourism Istanbul</title>
        <meta name="description" content="Frequently asked questions about medical tourism in Istanbul: clinical standards, pre-operative assessment, recovery, combined procedures, pricing, and IVF support at NodensCare." />
      </Helmet>

      <PageHeader
        title="Frequently Asked"
        titleAccent="Questions"
        subtitle="Everything you need to know before beginning your medical journey to Istanbul."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <FAQ />
    </>
  );
}
