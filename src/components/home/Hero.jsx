import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import InfraStack from '@/components/home/InfraStack';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/pyramidData';

const ASSURANCES = ['Based in Pallikaranai, Chennai', 'Written quotes before any work', 'Support after installation'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* big soft triangle echoing the logo */}
      <div
        className="absolute -right-24 top-0 h-full w-[60%] bg-brand-soft hidden lg:block"
        style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      />
      <div className="wrap relative grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="h-display">The hardware and network your business runs on.</h1>
          <p className="lead mt-6">
            Pyramid Enterprises supplies, installs and services laptops, desktops, printers, CCTV and
            networking for homes, shops and offices in Chennai.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn btn-brand">
              Get a free quote
              <Icon name="arrow" className="w-5 h-5" />
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-line">
              <Icon name="phone" className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <ul className="mt-9 grid gap-2.5 text-[0.95rem]">
            {ASSURANCES.map((a) => (
              <li key={a} className="flex items-center gap-2.5">
                <span className="grid h-5 w-5 place-items-center bg-black text-brand">
                  <Icon name="check" className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative bg-white border border-line p-5 sm:p-7 lg:shadow-[10px_10px_0_0_#000]">
          <p className="font-display font-extrabold text-lg mb-5" style={{ fontVariationSettings: "'wdth' 110" }}>
            Every setup is built in layers
          </p>
          <InfraStack />
        </div>
      </div>
    </section>
  );
}
