import React, { useMemo, useState } from 'react';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import { waLink } from '@/data/pyramidData';

const PLACES = ['Home', 'Shop', 'Office', 'School or institute'];

const ITEMS = [
  { id: 'pc', label: 'Laptops or desktops', unit: 'devices', icon: 'laptop' },
  { id: 'printer', label: 'Printers', unit: 'printers', icon: 'printer' },
  { id: 'cctv', label: 'CCTV cameras', unit: 'cameras', icon: 'camera' },
  { id: 'net', label: 'Wi-Fi or network points', unit: 'points', icon: 'wifi' },
  { id: 'ups', label: 'UPS or power backup', unit: 'units', icon: 'bolt' },
];

export default function SetupPlanner() {
  const [place, setPlace] = useState('Shop');
  const [qty, setQty] = useState({});

  const change = (id, delta) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(99, (q[id] || 0) + delta)) }));

  const chosen = ITEMS.filter((it) => (qty[it.id] || 0) > 0);
  const total = chosen.reduce((n, it) => n + qty[it.id], 0);

  const message = useMemo(() => {
    const lines = chosen.map((it) => `- ${it.label}: ${qty[it.id]}`);
    return [
      'Hello Pyramid Enterprises, I would like a quote for my setup.',
      `Place: ${place}`,
      ...lines,
    ].join('\n');
  }, [chosen, place, qty]);

  return (
    <section id="plan" className="section bg-sand border-y border-line">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.9fr]">
        <Reveal>
          <h2 className="h-section max-w-xl">Plan your setup and get a quote</h2>
          <p className="lead mt-4">
            Choose where it is going and how many of each item you need. We turn it into a written
            quote.
          </p>

          <fieldset className="mt-8">
            <legend className="mb-3 font-semibold">Where is it for?</legend>
            <div className="flex flex-wrap gap-2">
              {PLACES.map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-pressed={place === p}
                  onClick={() => setPlace(p)}
                  className={`px-4 py-2 text-sm font-semibold border-2 transition-colors ${
                    place === p ? 'bg-black text-white border-black' : 'bg-white border-line hover:border-black'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </fieldset>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ITEMS.map((it) => {
              const n = qty[it.id] || 0;
              const on = n > 0;
              return (
                <li
                  key={it.id}
                  className={`flex items-center gap-2.5 border-2 p-3 sm:gap-4 sm:p-4 transition-colors ${
                    on ? 'border-black bg-black text-white' : 'border-line bg-white'
                  }`}
                >
                  <span className={`grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center ${on ? 'bg-brand text-black' : 'bg-sand'}`}>
                    <Icon name={it.icon} className="w-6 h-6" />
                  </span>
                  <span className="min-w-0 flex-1 text-[0.95rem] sm:text-base font-semibold leading-snug">{it.label}</span>
                  <span className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => change(it.id, -1)}
                      disabled={!on}
                      aria-label={`Fewer ${it.unit}`}
                      className={`h-8 w-8 sm:h-9 sm:w-9 text-xl font-bold border-2 transition-colors disabled:opacity-30 ${
                        on ? 'border-white/50 hover:bg-white hover:text-black' : 'border-line'
                      }`}
                    >
                      −
                    </button>
                    <span className="w-6 sm:w-8 text-center font-display text-lg font-extrabold" aria-live="polite">
                      {n}
                    </span>
                    <button
                      type="button"
                      onClick={() => change(it.id, 1)}
                      aria-label={`More ${it.unit}`}
                      className="h-8 w-8 sm:h-9 sm:w-9 bg-brand text-xl font-bold text-black hover:bg-[#ffa23a] transition-colors"
                    >
                      +
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120} className="self-start lg:sticky lg:top-24">
          <div className="border-2 border-black bg-white shadow-[10px_10px_0_0_#FF8F0F]">
            <div className="bg-black px-6 py-4 text-white">
              <h3 className="text-lg">Your plan</h3>
            </div>
            <div className="p-6">
              <p className="text-mute">
                For: <strong className="text-ink">{place}</strong>
              </p>

              {chosen.length === 0 ? (
                <p className="mt-4 border-l-4 border-brand bg-brand-soft p-3">
                  Add at least one item with the + button to build your plan.
                </p>
              ) : (
                <ul className="mt-4 divide-y divide-line">
                  {chosen.map((it) => (
                    <li key={it.id} className="flex justify-between gap-4 py-2.5">
                      <span>{it.label}</span>
                      <strong>{qty[it.id]}</strong>
                    </li>
                  ))}
                  <li className="flex justify-between gap-4 pt-3 font-bold">
                    <span>Total items</span>
                    <span>{total}</span>
                  </li>
                </ul>
              )}

              <a
                href={chosen.length ? waLink(message) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={chosen.length === 0}
                onClick={(e) => chosen.length === 0 && e.preventDefault()}
                className={`btn mt-6 w-full ${chosen.length ? 'btn-brand' : 'btn-brand opacity-40 cursor-not-allowed'}`}
              >
                <WhatsAppIcon /> Send this plan on WhatsApp
              </a>
              <p className="mt-3 text-sm text-mute">
                Opens WhatsApp with your list filled in. Nothing is sent until you press send.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}