import React from 'react';
import { motion } from 'framer-motion';
import { MEGA_BUNDLE, createWhatsAppLink } from '../data/templatesData';
import { Check, MessageCircle, ArrowUpRight, Flame } from 'lucide-react';

export default function BundleSection() {
  return (
    <section id="bundle" className="py-20 md:py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Floating Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold tracking-wider uppercase">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {MEGA_BUNDLE.badge}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Sekali Bayar • Akses Selamanya
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                {MEGA_BUNDLE.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {MEGA_BUNDLE.shortDesc}
              </p>

              <div className="pt-4 space-y-2.5">
                {MEGA_BUNDLE.includes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing Box & Instant CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                    Penawaran Terbatas
                  </span>
                  <div className="mt-2 flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                      {MEGA_BUNDLE.promoPrice}
                    </span>
                    <span className="text-sm text-zinc-500 line-through">
                      {MEGA_BUNDLE.normalPrice}
                    </span>
                  </div>
                  <span className="inline-block mt-1 text-xs font-bold text-emerald-400">
                    {MEGA_BUNDLE.saving}
                  </span>
                </div>

                <a
                  href={createWhatsAppLink(MEGA_BUNDLE.title, MEGA_BUNDLE.promoPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                  <span>Ambil Paket Mega Bundle</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </a>

                <p className="text-[11px] text-zinc-500 font-mono">
                  🔒 Akses langsung dikirim via WhatsApp setelah verifikasi transfer.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
