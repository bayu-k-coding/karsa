import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageCircle, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/templatesData';

export default function PreviewModal({ template, onClose }) {
  // Tutup dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!template) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-zinc-200 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Modal */}
          <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-mono font-semibold">
                {template.categoryLabel}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {template.stats.ratio}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-6 overflow-y-auto space-y-5">
            
            {/* Visual Real Poster Preview */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950 flex flex-col items-center justify-center p-3 relative shadow-inner">
              <img
                src={template.imageUrl}
                alt={template.title}
                className="max-h-[55vh] w-auto object-contain rounded-lg shadow-2xl"
              />
              <div className="w-full mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-white text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  Rasio: {template.stats.ratio}
                </span>
                <span className="text-zinc-400">
                  {template.stats.support}
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-zinc-950">
                {template.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
                {template.shortDesc}
              </p>
            </div>

            {/* Rincian Apa Saja yang Didapatkan */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2.5">
                Keunggulan & Fitur Template:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {template.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-zinc-700 p-2 rounded-xl bg-zinc-50 border border-zinc-100"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Format & Kompatibilitas */}
            <div className="p-3.5 rounded-xl bg-zinc-100/70 border border-zinc-200 text-xs text-zinc-600 space-y-1 font-mono">
              <p>• File langsung dibagikan via tautan resmi Canva Template & Google Drive.</p>
              <p>• Dapat diedit penuh dengan akun Canva gratis (tanpa Canva Pro).</p>
              <p>• Bebas digunakan untuk kebutuhan akun instansi, korporasi, maupun UMKM.</p>
            </div>

          </div>

          {/* Footer Modal: Harga & CTA Checkout (Bersih Tanpa Diskon) */}
          <div className="p-5 border-t border-zinc-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-zinc-500 font-mono block">Harga Satuan</span>
              <span className="text-2xl font-heading font-extrabold text-zinc-950">
                {template.price}
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-zinc-300 text-xs font-medium text-zinc-700 hover:bg-zinc-100"
              >
                Tutup
              </button>
              
              <a
                href={createWhatsAppLink(template.title, template.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-semibold flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Beli via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
