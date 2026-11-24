import React from 'react';
import { motion } from 'framer-motion';

export default function TextMarquee() {
  const items = [
    "HARI BESAR NASIONAL",
    "HARI RAYA KEAGAMAAN",
    "CANVA READY",
    "RATIO 4:5 FEED & 9:16 STORY",
    "100% EDITABLE",
    "LISENSI KOMERSIAL BEBAS",
    "INSTANT ACCESS GOOGLE DRIVE",
    "NO DESIGN SKILL NEEDED",
  ];

  return (
    <div className="py-3.5 bg-zinc-950 text-white overflow-hidden relative border-y border-zinc-800">
      {/* Running Marquee Left to Right */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex items-center gap-8 whitespace-nowrap text-xs font-mono tracking-widest uppercase font-semibold text-zinc-300"
        >
          {[...items, ...items, ...items].map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
