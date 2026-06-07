import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905546745516?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20NodensCare%20treatments."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 whatsapp-btn"
    >
      <MessageCircle size={26} />
    </a>
  );
}
