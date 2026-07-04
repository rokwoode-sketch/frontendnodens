import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found | NodensCare"
        description="This page does not exist on NodensCare."
        noindex
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        <p className="text-gold-600 font-semibold tracking-wide text-sm mb-3">404</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 max-w-md mb-8">
          This URL is not part of the NodensCare site. It may be an old link from our previous website.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary">
            Go to homepage
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
