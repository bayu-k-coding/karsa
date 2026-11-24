import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageSquareShare, DownloadCloud, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: ShoppingBag,
      title: "Pilih Template",
      description: "Jelajahi katalog di atas dan tentukan paket template yang paling sesuai dengan tema konten atau bisnismu.",
    },
    {
      step: "02",
      icon: MessageSquareShare,
      title: "Pesan via WhatsApp",
      description: "Klik tombol 'Beli via WA'. Format pesan akan otomatis terisi rapi, kirim ke admin kami untuk instruksi pembayaran.",
    },
    {
      step: "03",
      icon: DownloadCloud,
      title: "Akses Instan Dibagikan",
      description: "Kirim bukti transfer/QRIS, lalu link resmi Canva dan folder Google Drive akan langsung dikirimkan dalam hitungan menit.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
            Alur Pemesanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-zinc-950 tracking-tight mt-2">
            Cara Belanja Cepat dalam 3 Langkah
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm mt-3">
            Tanpa perlu registrasi akun berbelit atau login sistem pembayaran rumit.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-heading font-extrabold text-zinc-300 font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-zinc-950 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
