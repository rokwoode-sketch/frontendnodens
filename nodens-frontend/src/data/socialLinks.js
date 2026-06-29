export const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/nodenscare',
  tiktok: 'https://www.tiktok.com/@nodenscare',
  facebook: 'https://www.facebook.com/nodenscare',
  linkedin: 'https://www.linkedin.com/company/nodenscare',
  youtube: 'https://www.youtube.com/@nodenscare',
  whatsapp: 'https://wa.me/905546745516',
};

export const FEATURED_SOCIALS = [
  { id: 'instagram', href: SOCIAL_URLS.instagram, handle: '@nodenscare', color: 'hover:border-pink-400/50 hover:bg-pink-500/10' },
  { id: 'facebook', href: SOCIAL_URLS.facebook, handle: 'NodensCare', color: 'hover:border-blue-400/50 hover:bg-blue-500/10' },
];

export const ALL_SOCIALS = [
  { id: 'whatsapp', href: SOCIAL_URLS.whatsapp, label: 'WhatsApp', color: 'hover:text-green-400', lucide: 'MessageCircle' },
  { id: 'instagram', href: SOCIAL_URLS.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
  { id: 'tiktok', href: SOCIAL_URLS.tiktok, label: 'TikTok', color: 'hover:text-white' },
  { id: 'facebook', href: SOCIAL_URLS.facebook, label: 'Facebook', color: 'hover:text-blue-400' },
  { id: 'linkedin', href: SOCIAL_URLS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-300' },
  { id: 'youtube', href: SOCIAL_URLS.youtube, label: 'YouTube', color: 'hover:text-red-400' },
];
