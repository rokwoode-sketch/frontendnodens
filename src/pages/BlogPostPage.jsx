import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { fetchBlogPost } from '../api/blog';

const categoryLinks = {
  'Hair Transplant': '/hair-transplant',
  Dental: '/dental',
  'Plastic Surgery': '/plastic-surgery',
  Complex: '/complex-treatments',
  Oncology: '/complex-treatments',
  Fertility: '/complex-treatments',
};

function ContentBlock({ block }) {
  if (block.type === 'h2') {
    return <h2 className="font-serif text-2xl font-bold text-navy-950 mt-10 mb-4">{block.text}</h2>;
  }
  if (block.type === 'ul') {
    return (
      <ul className="space-y-2 mb-6">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-gray-600 leading-relaxed">
            <ChevronRight size={14} className="text-gold-500 flex-shrink-0 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-gray-600 leading-relaxed mb-5">{block.text}</p>;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchBlogPost(slug, lang)
      .then(setPost)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug, lang]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 gap-4">
        <p className="text-gray-500">Article not found.</p>
        <Link to="/blog" className="text-gold-600 hover:underline text-sm">Back to Guides</Link>
      </div>
    );
  }

  const categoryLink = categoryLinks[post.category] || '/';
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
    image: post.image_url,
    datePublished: post.published_at,
    author: { '@type': 'Organization', name: 'NodensCare' },
    publisher: { '@type': 'Organization', name: 'NodensCare' },
  };

  return (
    <>
      <Helmet>
        <title>{post.meta_title || post.title}</title>
        <meta name="description" content={post.meta_description} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {post.faq?.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <section className="relative pt-32 pb-16 gradient-navy overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white transition-colors">Guides</Link>
            <ChevronRight size={14} />
            <Link to={categoryLink} className="hover:text-white transition-colors">{post.category}</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">Guide</span>
          </div>
          <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">{post.category}</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {post.image_url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {(post.content || []).map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
      </section>

      {post.faq?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-2xl font-bold text-navy-950 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {post.faq.map(({ q, a }) => (
                <details key={q} className="bg-white rounded-xl border border-gray-200 group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                    {q}
                    <ChevronRight size={15} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/70 mb-8">Get a free remote consultation with our medical coordinators. Response within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Free Consultation <ArrowRight size={16} />
            </a>
            <Link to={categoryLink} className="btn-outline">View {post.category} Treatments</Link>
          </div>
        </div>
      </section>
    </>
  );
}
