import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import Icon from '@/components/ui/Icon';
import {
  ADDRESS_LINES,
  EMAIL,
  MAPS_LINK,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  TAGLINE,
  WEBSITE,
} from '@/data/pyramidData';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="wrap py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.3fr]">
        <div>
          <Logo light size={48} />
          <p className="mt-5 text-white/70 max-w-xs">
            {TAGLINE}. Laptops, desktops, printers, CCTV, hardware and networking, supplied and
            looked after from Pallikaranai, Chennai.
          </p>
        </div>

        <div>
          <h3 className="text-sm text-brand mb-4" style={{ fontVariationSettings: "'wdth' 110" }}>
            Pages
          </h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-brand transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-brand mb-4" style={{ fontVariationSettings: "'wdth' 110" }}>
            What we do
          </h3>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services#${s.id}`}
                  className="text-white/75 hover:text-brand transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-brand mb-4" style={{ fontVariationSettings: "'wdth' 110" }}>
            Visit or call
          </h3>
          <ul className="space-y-3.5 text-white/75">
            <li className="flex gap-3">
              <Icon name="pin" className="w-5 h-5 mt-0.5 shrink-0 text-brand" />
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Icon name="phone" className="w-5 h-5 shrink-0 text-brand" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-brand transition-colors">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex gap-3 items-center">
              <Icon name="mail" className="w-5 h-5 shrink-0 text-brand" />
              <a href={`mailto:${EMAIL}`} className="hover:text-brand transition-colors break-all">{EMAIL}</a>
            </li>
            <li className="flex gap-3 items-center">
              <Icon name="globe" className="w-5 h-5 shrink-0 text-brand" />
              <span>{WEBSITE}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap py-5 text-sm text-white/55 flex flex-col sm:flex-row gap-1 justify-between">
          <p>© {new Date().getFullYear()} Pyramid Enterprises. All rights reserved.</p>
          <p>Pallikaranai, Chennai</p>
        </div>
      </div>
    </footer>
  );
}
