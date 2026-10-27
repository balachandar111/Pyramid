import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '@/data/pyramidData';

export default function CtaBand({
  title = 'Planning a setup for your home, shop or office?',
  text = 'Tell us what you need. We will reply with a written quote and suggest only what the job requires.',
}) {
  return (
    <section className="bg-brand text-black">
      <div className="wrap py-14 md:py-16 grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
        <div>
          <h2 className="h-section max-w-2xl">{title}</h2>
          <p className="mt-4 text-lg max-w-xl text-black/80">{text}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <Link to="/contact" className="btn btn-dark">
            Get a free quote
            <Icon name="arrow" className="w-5 h-5" />
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-line">
            <Icon name="phone" className="w-5 h-5" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line sm:col-span-2 lg:col-span-1"
          >
            <WhatsAppIcon /> Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}