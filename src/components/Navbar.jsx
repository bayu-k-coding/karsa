import React, { useState } from 'react';
import { STORE_CONFIG, createWhatsAppLink } from '../data/templatesData';
import { MessageCircle, Menu, X, ArrowUpRight, Instagram } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Katalog Template', href: '#catalog' },
    { label: 'Cara Beli', href: '#how-it-works' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-zinc-950 flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-sm group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-zinc-950 tracking-tight leading-none">
              karsa<span className="text-amber-500">.co</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 font-medium">
              Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Instagram Button */}
          <a
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors border border-zinc-200/80"
            title="Kunjungi Instagram @karsa.coo"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>@karsa.coo</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={createWhatsAppLink("Tanya Template Desain", "Konsultasi")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pesan via WA</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white/95 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-700 hover:text-zinc-950 py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-100 space-y-2">
            <a
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-pink-50 text-pink-800 border border-pink-200/80"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Instagram: @karsa.coo</span>
            </a>
            <a
              href={createWhatsAppLink("Konsultasi Cepat", "Tanya Admin")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-zinc-950 text-white"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Hubungi Admin WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
