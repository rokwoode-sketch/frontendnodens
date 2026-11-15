import { posts as corePosts } from './posts-data.js';
import { extraPosts } from './posts-seo-extra.js';

const posts = [...corePosts, ...extraPosts];

export function getStaticPost(slug, lang = 'en') {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  const t = post.translations[lang] || post.translations.en;
  return {
    slug: post.slug,
    category: post.category,
    image_url: post.image_url,
    published_at: post.published_at || '2026-01-15T09:00:00.000Z',
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
