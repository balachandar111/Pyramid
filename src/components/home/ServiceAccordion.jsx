import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import { SERVICES } from '@/data/pyramidData';

export default function ServiceAccordion() {
  const [active, setActive] = useState(0);
  const cols = SERVICES.map((_, i) => (i === active ? '3.2fr' : '1fr')).join(' ');

  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <h2 className="h-section max-w-2xl">Everything your setup needs, from one team</h2>
          <p className="lead mt-4">Point at a service to see what is included.</p>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-10 flex flex-col gap-2 lg:grid lg:gap-2 lg:[grid-template-columns:var(--cols)] lg:transition-[grid-template-columns] lg:duration-500 lg:ease-out"
          style={{ '--cols': cols }}
        >
          {SERVICES.map((s, i) => {
            const on = i === active;
            return (
              <article
                key={s.id}
                onMouseEnter={() => setActive(i)}
                className={`relative flex flex-col overflow-hidden transition-colors duration-300 lg:min-h-[27rem] ${
                  on ? 'bg-brand text-black' : 'bg-black text-white hover:bg-[#222]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-expanded={on}
                  className={`flex w-full gap-4 p-6 text-left lg:flex-col lg:justify-between ${on ? '' : 'lg:flex-1'}`}
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center transition-colors ${
                      on ? 'bg-black text-brand' : 'bg-brand text-black'
                    }`}
                  >
                    <Icon name={s.icon} className="w-6 h-6" />
                  </span>
                  <span
                    className="font-display text-xl font-extrabold leading-tight lg:text-[1.15rem]"
                    style={{ fontVariationSettings: "'wdth' 108" }}
                  >
                    {s.title}
                  </span>
                </button>

                {on && (
                  <div className="px-6 pb-6 svc-in">
                    <p className="max-w-md text-black/85">{s.summary}</p>
                    <ul className="mt-4 grid gap-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-[0.95rem]">
                          <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0" strokeWidth={3} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services#${s.id}`}
                      className="mt-5 inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4"
                    >
                      Full details
                      <Icon name="arrow" className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
