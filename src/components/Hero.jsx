import React from 'react';
import { ArrowRight, MessageCircle, Instagram } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppLink } from '../data/templatesData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-28 bg-[#FAFAFA]">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-amber-100/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-zinc-200/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6 sm:space-y-8">
        
        {/* Pill Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-2xs text-xs font-mono text-zinc-700">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-medium">Template Hari Besar Nasional & Keagamaan</span>
          <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-800 text-[10px] font-bold">
            Canva & Figma
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-zinc-950 tracking-tight leading-[1.1] max-w-3xl mx-auto">
          Tingkatkan Visual Bisnis Anda Dalam{' '}
          <span className="relative inline-block text-zinc-950">
            Hitungan Menit.
            <span className="absolute bottom-1.5 left-0 w-full h-3 bg-amber-300/40 -z-10 rounded-sm" />
          </span>
        </h1>

        {/* Subheadline Persuasif */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-600 font-sans max-w-2xl mx-auto leading-relaxed">
          Koleksi template ucapan Hari Peringatan Nasional & Hari Raya Keagamaan siap pakai dari <span className="font-semibold text-zinc-900">{STORE_CONFIG.brandName}</span>. Tinggal sematkan logo dan nama instansi di Canva tanpa perlu keahlian desain rumit.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#catalog"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2 group"
          >
            <span>Eksplor Katalog Template</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={createWhatsAppLink("Tanya Admin Seputar Template", "Konsultasi")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-zinc-900 border border-zinc-300/90 font-medium text-sm hover:bg-zinc-50 transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat WhatsApp</span>
          </a>

          <a
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-zinc-900 border border-zinc-300/90 font-medium text-sm hover:bg-pink-50/50 hover:border-pink-300 transition-all text-center flex items-center justify-center gap-2 shadow-2xs group"
          >
            <Instagram className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform" />
            <span>Instagram @karsa.coo</span>
          </a>
        </div>

      </div>
    </section>
  );
}
