import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppLink } from '../data/templatesData';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Kontak Cepat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Instagram CTA */}
      <a
        href={STORE_CONFIG.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white shadow-lg transition-all hover:scale-105 active:scale-95 group"
        aria-label="Kunjungi Instagram @karsa.coo"
        title="Instagram @karsa.coo"
      >
        <Instagram className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline-block">
          @karsa.coo
        </span>
      </a>

      {/* Floating WhatsApp CTA */}
      <a
        href={createWhatsAppLink("Konsultasi Cepat Floating Button", "Tanya Admin")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 group"
        aria-label="Chat WhatsApp Admin"
        title="Chat WhatsApp Admin"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-500 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline-block">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
