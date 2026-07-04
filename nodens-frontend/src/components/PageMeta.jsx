import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.nodenscare.com';

/** Build a stable www canonical for the current (or explicit) path. */
export function canonicalFor(pathname = '/') {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return clean === '/' ? `${BASE_URL}/` : `${BASE_URL}${clean}`;
}

/**
 * Per-page title, description, and canonical.
 * Language is client-side only — do not invent /fr/ or ?lang= URLs.
 */
export default function PageMeta({ title, description, path, noindex = false }) {
  const { pathname } = useLocation();
  const canonical = canonicalFor(path ?? pathname);

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
    </Helmet>
  );
}
