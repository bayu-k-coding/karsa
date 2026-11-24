import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, ShieldCheck, Clock, RefreshCw } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MousePointerClick,
      title: "1-Klik Edit di Canva & Figma",
      description: "Tanpa perlu install software berat atau beli font mahal. Buka link template di browser atau HP, langsung siap diedit.",
    },
    {
      icon: Clock,
      title: "Hemat 20+ Jam Kerja per Minggu",
      description: "Tidak perlu lagi pusing memikirkan layout atau layouting dari awal. Cukup input teks promosi dan gambar produk.",
    },
    {
      icon: ShieldCheck,
      title: "Lisensi Komersial Seumur Hidup",
      description: "Bebas digunakan untuk jualan produk toko sendiri, konten affiliasi, atau bahkan untuk melayani klien jasa kelola sosmed.",
    },
    {
      icon: RefreshCw,
      title: "Sekali Bayar Tanpa Langganan",
      description: "Beli sekali untuk akses selamanya. Tidak ada biaya tersembunyi atau langganan bulanan yang mengikat dompetmu.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
            Kenapa Memilih CraftStudio?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-zinc-950 tracking-tight mt-2">
            Desain Profesional Tanpa Bikin Pusing
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3">
            Dibuat khusus agar siapa pun—bahkan yang tidak paham desain grafis—bisa menghasilkan konten media sosial sekelas agensi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 hover:border-zinc-950 transition-all shadow-2xs hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors mb-5 shadow-2xs">
                    <Icon className="w-5 h-5" />
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
