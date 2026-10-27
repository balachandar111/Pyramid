import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import { PHONE_TEL, waLink } from '@/data/pyramidData';

// Desktop: round WhatsApp button. Mobile: fixed Call / WhatsApp / Quote bar.
export default function FloatingContact() {
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-black text-white border-t border-white/20">
        <a href={`tel:${PHONE_TEL}`} className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold">
          <Icon name="phone" className="w-5 h-5 text-brand" />
          Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold border-x border-white/20"
        >
          <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
          WhatsApp
        </a>
        <Link to="/contact" className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold bg-brand text-black">
          <Icon name="mail" className="w-5 h-5" />
          Get a quote
        </Link>
      </div>
    </>
  );
}
