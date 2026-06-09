import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { getAllStaticPosts } from '../data/blogPosts';

const categoryLinks = {
  'Hair Transplant': '/hair-transplant',
  Dental: '/dental',
  'Plastic Surgery': '/plastic-surgery',
  Complex: '/complex-treatments',
};

export default function BlogIndexPage() {
  const { lang } = useLanguage();
  const posts = getAllStaticPosts(lang);

  return (
    <>
      <Helmet>
        <title>Patient Guides & Blog | NodensCare Istanbul</title>
        <meta name="description" content="Expert patient guides for hair transplant, dental treatments, plastic surgery, and complex medical procedures in Istanbul, Turkey. Written for international patients." />
      </Helmet>

      <PageHeader
        title="Patient"
        titleAccent="Guides"
        subtitle="In-depth guides for international patients considering treatment in Istanbul. Costs, procedures, recovery timelines, and what to expect at JCI-accredited facilities."
        breadcrumbs={[{ label: 'Guides' }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-xl font-bold text-navy-950 mb-3 leading-snug group-hover:text-gold-700 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link to={categoryLinks[post.category] || '/'} className="text-xs font-semibold text-gray-400 hover:text-gold-600 transition-colors flex items-center gap-1">
                      {post.category} procedures <ChevronRight size={12} />
                    </Link>
                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-1.5 text-gold-600 hover:text-gold-700 font-semibold text-sm transition-colors">
                      Read guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
