import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Layout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand focus:text-black focus:px-4 focus:py-2 font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="page-in">
        {children}
      </main>
      <div className="pb-16 md:pb-0 bg-black">
        <Footer />
      </div>
      <FloatingContact />
    </>
  );
}