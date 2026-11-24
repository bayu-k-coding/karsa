import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, TEMPLATES_DATA, createWhatsAppLink } from '../data/templatesData';
import { Eye, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Catalog({ onSelectTemplate }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredData = activeTab === 'all'
    ? TEMPLATES_DATA
    : TEMPLATES_DATA.filter(t => t.category === activeTab);

  return (
    <section id="catalog" className="py-16 md:py-20 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Katalog Desain Siap Pakai
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-zinc-950 tracking-tight">
              Pilihan Template Hari Peringatan & Hari Raya
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-xl">
              Template ucapan resmi berkualitas tinggi untuk instansi, korporat, komunitas, maupun UMKM.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-zinc-200/70 border border-zinc-200/80 self-start">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredData.map((template, idx) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-950 transition-all shadow-xs hover:shadow-lg flex flex-col justify-between overflow-hidden group"
              >
                {/* Bagian Cover Poster Desain Utuh (Rasio 4:5 Sesuai Desain Asli) */}
                <div>
                  <div
                    className="aspect-[4/5] relative overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => onSelectTemplate(template)}
                  >
                    <img
                      src={template.imageUrl}
                      alt={template.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/20" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] font-mono font-bold shadow-2xs border border-white/50">
                        {template.categoryLabel}
                      </span>
                      {template.badge && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-medium border border-white/20">
                          {template.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom Aspect Tag */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-200 pointer-events-none">
                      <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        {template.stats.ratio}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        {template.stats.support}
                      </span>
                    </div>
                  </div>

                  {/* Judul Template Ringkas */}
                  <div className="p-3.5 pb-2">
                    <h3
                      onClick={() => onSelectTemplate(template)}
                      className="text-sm font-heading font-bold text-zinc-950 group-hover:text-amber-600 transition-colors leading-snug line-clamp-1 cursor-pointer"
                      title={template.title}
                    >
                      {template.title}
                    </h3>
                  </div>
                </div>

                {/* Bagian Bawah: Harga Bersih (Tanpa Diskon) & Tombol Aksi */}
                <div className="p-3.5 pt-2.5 bg-zinc-50/70 border-t border-zinc-100 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-medium">
                      Harga
                    </span>
                    <span className="text-base font-heading font-extrabold text-zinc-950 whitespace-nowrap">
                      {template.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectTemplate(template)}
                      className="py-1.5 px-2 rounded-lg bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-100 text-xs font-medium flex items-center justify-center gap-1 shadow-2xs transition-colors"
                      title="Lihat Pratinjau Lengkap"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={createWhatsAppLink(template.title, template.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-semibold flex items-center justify-center gap-1 shadow-xs transition-colors"
                      title="Beli via WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Beli</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
