import React from 'react';
import Icon from '@/components/ui/Icon';

const ITEMS = [
  { label: 'Laptops', icon: 'laptop' },
  { label: 'Desktops', icon: 'desktop' },
  { label: 'Printers', icon: 'printer' },
  { label: 'CCTV', icon: 'camera' },
  { label: 'Networking', icon: 'wifi' },
  { label: 'Hardware', icon: 'chip' },
  { label: 'Power backup', icon: 'bolt' },
  { label: 'Servers and racks', icon: 'server' },
];

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden}>
      {ITEMS.map((it) => (
        <li key={it.label} className="flex items-center gap-3 font-display text-xl font-extrabold" style={{ fontVariationSettings: "'wdth' 112" }}>
          <Icon name={it.icon} className="w-6 h-6" />
          {it.label}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden bg-brand py-4 text-black" aria-label="Products and services we cover">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
