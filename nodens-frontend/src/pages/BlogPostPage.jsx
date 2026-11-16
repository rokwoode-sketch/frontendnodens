import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageMeta from '../components/PageMeta';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getStaticPost } from '../data/blogPosts';
import ClinicalFaq from '../components/ClinicalFaq';
import InstitutionalCta from '../components/InstitutionalCta';

const categoryLinks = {
  'Hair Transplant': '/hair-transplant',
  Dental: '/dental',
  'Plastic Surgery': '/plastic-surgery',
  Complex: '/complex-treatments',
  Oncology: '/complex-treatments',
  Fertility: '/complex-treatments',
  Travel: '/contact',
  'Medical Tourism': '/packages',
};

const categoryPages = {
  'Hair Transplant': 'hair',
  Dental: 'dental',
  'Plastic Surgery': 'plastic',
  Complex: 'complex',
  Oncology: 'complex',
  Fertility: 'complex',
  Travel: 'contact',
  'Medical Tourism': 'packages',
};

function ContentBlock({ block, index }) {
  const motionClass = 'blog-block-enter';
  const style = { animationDelay: `${Math.min(index, 12) * 45}ms` };

  if (block.type === 'h2') {
    return (
      <h2 className={`font-serif text-2xl font-medium text-navy-950 mt-10 mb-4 tracking-tight ${motionClass}`} style={style}>
        {block.text}
      </h2>
    );
  }
  if (block.type === 'h3') {
    return (
      <h3 className={`font-serif text-xl font-medium text-navy-900 mt-8 mb-3 tracking-tight ${motionClass}`} style={style}>
        {block.text}
      </h3>
    );
  }
  if (block.type === 'img') {
    return (
      <figure className={`my-8 ${motionClass}`} style={style}>
        <div className="relative aspect-[16/9] overflow-hidden border border-clinical-line bg-navy-100 blog-media-frame">
          <img
            src={block.src}
            alt={block.alt || ''}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover blog-kenburns"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-2 text-[13px] text-navy-500 leading-relaxed">{block.caption}</figcaption>
        )}
      </figure>
    );
  }
  if (block.type === 'table') {
    return (
      <figure className={`my-8 overflow-x-auto ${motionClass}`} style={style}>
        <div className="border border-clinical-line bg-navy-50/40">
          <table className="w-full min-w-[560px] text-left text-sm border-collapse">
            <thead>
              <tr className="bg-navy-950 text-white">
                {block.headers.map((h) => (
                  <th key={h} className="px-3.5 py-3 font-semibold tracking-wide text-[12px] uppercase align-top">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-navy-50/70'}>
                  {row.map((cell, ci) => (
                    <td key={`${ri}-${ci}`} className="px-3.5 py-3 text-navy-700 leading-relaxed border-t border-clinical-line align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.caption && (
          <figcaption className="mt-2 text-[13px] text-navy-500 leading-relaxed">{block.caption}</figcaption>
        )}
      </figure>
    );
  }
  if (block.type === 'sources') {
    return (
      <aside className={`mt-12 mb-6 border border-clinical-line bg-navy-50 p-5 md:p-6 ${motionClass}`} style={style}>
        <h2 className="font-serif text-lg font-medium text-navy-950 mb-3 tracking-tight">{block.title || 'Sources & References'}</h2>
        <ol className="space-y-2 list-decimal list-inside">
          {block.items.map((item) => (
            <li key={item.url || item.label} className="text-sm text-navy-600 leading-relaxed">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-teal-medical hover:underline">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ol>
      </aside>
    );
  }
  if (block.type === 'ul') {
    return (
      <ul className={`space-y-2 mb-6 ${motionClass}`} style={style}>
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-navy-600 leading-relaxed">
            <ChevronRight size={14} className="text-gold-500 flex-shrink-0 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className={`text-navy-600 leading-relaxed mb-5 ${motionClass}`} style={style}>
      {block.text}
    </p>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const post = useMemo(() => getStaticPost(slug, lang), [slug, lang]);
  const contentBlocks = useMemo(() => {
    if (!post?.content) return [];
    const hero = post.image_url;
    return post.content.filter((block) => !(block.type === 'img' && hero && block.src === hero));
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-36 gap-4 px-5">
        <PageMeta title="Article Not Found | NodensCare" description="This guide does not exist." noindex />
        <p className="text-navy-500">{t.common.articleNotFound}</p>
        <Link to="/blog" className="text-teal-medical hover:underline text-sm font-semibold">{t.common.articleBack}</Link>
      </div>
    );
  }

  const categoryLink = categoryLinks[post.category] || '/';
  const categoryLabel = t.pages[categoryPages[post.category]]?.breadcrumb || post.category;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (post.faq || []).map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    image: post.image_url?.startsWith('http') ? post.image_url : `https://www.nodenscare.com${post.image_url}`,
    datePublished: post.published_at,
    author: { '@type': 'Organization', name: 'NodensCare' },
    publisher: { '@type': 'Organization', name: 'NodensCare' },
  };

  return (
    <>
      <PageMeta title={post.meta_title || post.title} description={post.meta_description} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {post.faq?.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <section className="pt-36 pb-12 md:pt-40 md:pb-14 bg-navy-950 border-b border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 blog-hero-sheen" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
          <nav className="flex items-center gap-2 text-[12px] mb-6 flex-wrap tracking-wide blog-block-enter" aria-label="Breadcrumb">
            <Link to="/" className="text-white/55 hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight size={12} className="text-white/35" aria-hidden="true" />
            <Link to="/blog" className="text-white/55 hover:text-white transition-colors">{t.pages.blog.breadcrumb}</Link>
            <ChevronRight size={12} className="text-white/35" aria-hidden="true" />
            <Link to={categoryLink} className="text-white/55 hover:text-white transition-colors">{categoryLabel}</Link>
            <ChevronRight size={12} className="text-white/35" aria-hidden="true" />
            <span className="text-gold-300">{t.pages.blog.guideCrumb}</span>
          </nav>
          <div className="w-10 h-px bg-gold-400 mb-6 blog-block-enter" style={{ animationDelay: '40ms' }} aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-400 mb-4 blog-block-enter" style={{ animationDelay: '80ms' }}>
            {categoryLabel}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.15] tracking-tight mb-5 blog-block-enter" style={{ animationDelay: '120ms' }}>
            {post.title}
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-[1.7] max-w-2xl blog-block-enter" style={{ animationDelay: '180ms' }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {post.image_url && (
        <div className="max-w-4xl mx-auto px-5 sm:px-8 -mt-6 relative z-10 blog-block-enter" style={{ animationDelay: '220ms' }}>
          <div className="relative aspect-[16/9] overflow-hidden border border-clinical-line bg-navy-100 shadow-[0_18px_48px_rgba(12,28,36,0.18)] blog-media-frame">
            {post.video_url ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={post.image_url}
                aria-label={post.title}
              >
                <source src={post.video_url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={post.image_url}
                alt={post.title}
                width={800}
                height={450}
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover blog-kenburns"
              />
            )}
            <div className="pointer-events-none absolute inset-0 blog-media-veil" aria-hidden="true" />
          </div>
        </div>
      )}

      <section className="inst-section bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {contentBlocks.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} />
          ))}
        </div>
      </section>

      {post.faq?.length > 0 && (
        <ClinicalFaq items={post.faq} title={t.common.faqTitle} id="guide-faq" />
      )}

      <InstitutionalCta
        title={t.patientJourney.ctaTitle}
        subtitle={t.patientJourney.ctaDesc}
        primaryLabel={t.patientJourney.ctaWhatsapp}
        secondaryLabel={categoryLabel}
        secondaryTo={categoryLink}
      />
    </>
  );
}
