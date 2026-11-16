import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { getAllStaticPosts } from '../data/blogPosts';

const categoryLinks = {
  'Hair Transplant': '/hair-transplant',
  Dental: '/dental',
  'Plastic Surgery': '/plastic-surgery',
  Complex: '/complex-treatments',
  Oncology: '/complex-treatments',
  Fertility: '/complex-treatments',
  Travel: '/contact',
};

const categoryPages = {
  'Hair Transplant': 'hair',
  Dental: 'dental',
  'Plastic Surgery': 'plastic',
  Complex: 'complex',
  Oncology: 'complex',
  Fertility: 'complex',
  Travel: 'contact',
};

export default function BlogIndexPage() {
  const { lang, t } = useLanguage();
  const p = t.pages.blog;
  const posts = getAllStaticPosts(lang);

  return (
    <>
      <PageMeta title={p.metaTitle} description={p.metaDescription} />

      <PageHeader
        title={p.title}
        titleAccent={p.titleAccent}
        subtitle={p.subtitle}
        breadcrumbs={[{ label: p.breadcrumb }]}
      />

      <section className="inst-section-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {posts.map((post, i) => {
              const categoryLabel = t.pages[categoryPages[post.category]]?.breadcrumb || post.category;
              return (
                <article
                  key={post.slug}
                  className="group bg-white border border-clinical-line flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={i * 40}
                >
                  <div className="relative h-56 overflow-hidden bg-navy-100">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      width={688}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                    <span className="absolute top-4 left-4 bg-navy-950 text-white text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1">
                      {categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    <h2 className="font-serif text-xl font-medium text-navy-950 mb-3 leading-snug tracking-tight group-hover:text-teal-medical transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-navy-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-clinical-line">
                      <Link
                        to={categoryLinks[post.category] || '/'}
                        className="text-xs font-semibold text-navy-400 hover:text-teal-medical transition-colors"
                      >
                        {categoryLabel}
                      </Link>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-teal-medical hover:text-teal-700 font-semibold text-sm transition-colors"
                      >
                        {p.readGuide} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
