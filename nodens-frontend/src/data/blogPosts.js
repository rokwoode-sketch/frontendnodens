import { posts } from './posts-data.js';

export function getStaticPost(slug, lang = 'en') {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  const t = post.translations[lang] || post.translations.en;
  return {
    slug: post.slug,
    category: post.category,
    image_url: post.image_url,
    published_at: new Date().toISOString(),
    title: t.title,
    meta_title: t.meta_title,
    meta_description: t.meta_description,
    excerpt: t.excerpt,
    content: t.content,
    faq: t.faq,
  };
}

export function getAllStaticPosts(lang = 'en') {
  return posts.map((post) => getStaticPost(post.slug, lang));
}
