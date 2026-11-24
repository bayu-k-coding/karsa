import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TextMarquee from './components/TextMarquee';
import Catalog from './components/Catalog';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PreviewModal from './components/PreviewModal';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="bg-[#FAFAFA] text-zinc-900 font-sans antialiased min-h-screen relative overflow-x-hidden selection:bg-zinc-950 selection:text-white">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections - Focused on Catalog */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Running Banner Marquee */}
        <TextMarquee />

        {/* Product Catalog with Category Tabs */}
        <Catalog onSelectTemplate={setSelectedTemplate} />

        {/* How It Works (3 Simple Steps) */}
        <HowItWorks />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Floating Direct WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Interactive Quick Preview Modal */}
      {selectedTemplate && (
        <PreviewModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </div>
  );
}
