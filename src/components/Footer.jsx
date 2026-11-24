import React from 'react';
import { STORE_CONFIG, createWhatsAppLink } from '../data/templatesData';
import { MessageCircle, ArrowUp, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-zinc-900 pt-16 pb-12 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white font-heading font-extrabold text-sm">
                K
              </div>
              <span className="font-heading font-bold text-lg text-zinc-950">
                karsa<span className="text-amber-500">.co</span>
              </span>
            </div>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              Penyedia template desain ucapan Hari Peringatan Nasional & Hari Raya Keagamaan siap pakai di Canva & Figma.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-bold">
              Navigasi
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
              <li><a href="#catalog" className="hover:text-zinc-950">Katalog Template</a></li>
              <li><a href="#how-it-works" className="hover:text-zinc-950">Cara Pemesanan</a></li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-bold">
              Hubungi Kami
            </p>
            <p className="text-xs text-zinc-600">
              Butuh custom desain, request template, atau pembayaran?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={STORE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100/70 border border-pink-200/70 text-pink-900 text-xs font-semibold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>@karsa.coo</span>
                <ArrowUpRight className="w-3 h-3 text-pink-400" />
              </a>

              <a
                href={createWhatsAppLink("Tanya Admin Footer", "Konsultasi")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/70 text-emerald-900 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Admin</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} karsa.co. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors font-mono"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
