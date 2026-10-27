import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { SERVICES } from '@/data/pyramidData';

export default function ServicesList() {
  return (
    <section className="section border-t border-line">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.4fr]">
        <div className="lg:sticky lg:top-28 self-start">
          <h2 className="h-section">What we do for you</h2>
          <p className="lead mt-4">
            From a single laptop to the cabling, Wi-Fi and cameras of a whole shop floor.
          </p>
          <Link to="/services" className="btn btn-dark mt-7">
            All services
            <Icon name="arrow" className="w-5 h-5" />
          </Link>
        </div>

        <ul className="border-t-2 border-black">
          {SERVICES.map((s) => (
            <li key={s.id} className="border-b border-line">
              <Link
                to={`/services#${s.id}`}
                className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 py-6 px-2 transition-colors hover:bg-sand"
              >
                <span className="grid h-12 w-12 place-items-center bg-black text-brand group-hover:bg-brand group-hover:text-black transition-colors">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-display text-xl font-extrabold" style={{ fontVariationSettings: "'wdth' 108" }}>
                    {s.title}
                  </span>
                  <span className="mt-1 block text-mute">{s.summary}</span>
                </span>
                <Icon
                  name="arrow"
                  className="w-6 h-6 mt-3 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
