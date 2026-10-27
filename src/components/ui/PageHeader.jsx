import React from 'react';
import { LogoMark } from '@/components/ui/Logo';

export default function PageHeader({ title, text }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-sand">
      <div className="wrap py-14 md:py-20 relative z-10">
        <h1 className="h-display max-w-3xl">{title}</h1>
        {text && <p className="lead mt-5">{text}</p>}
      </div>
      <div className="hidden md:block absolute right-[6%] top-1/2 -translate-y-1/2 opacity-[0.12]" aria-hidden="true">
        <LogoMark size={260} />
      </div>
    </section>
  );
}
