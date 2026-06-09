function getApiUrl() {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (typeof window !== 'undefined' && window.location.hostname.includes('easypanel.host')) {
    return 'https://backend.nodenscare.ah2jvv.easypanel.host';
  }
  return 'http://localhost:3001';
}

const API_URL = getApiUrl();

export async function fetchBlogPost(slug, lang = 'en') {
  try {
    const res = await fetch(`${API_URL}/api/posts/${slug}?lang=${lang}`);
    if (res.ok) return res.json();
  } catch {
    // API unavailable — fall back to static data
  }
  const { getStaticPost } = await import('../data/blogPosts.js');
  const post = getStaticPost(slug, lang);
  if (!post) throw new Error('Post not found');
  return post;
}

export async function fetchBlogPosts(lang = 'en') {
  const res = await fetch(`${API_URL}/api/posts?lang=${lang}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
