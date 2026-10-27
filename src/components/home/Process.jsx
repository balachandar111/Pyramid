import React from 'react';
import { PROCESS } from '@/data/pyramidData';

export default function Process() {
  return (
    <section className="section bg-black text-white">
      <div className="wrap">
        <h2 className="h-section max-w-2xl">How a job runs, start to finish</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="border-t-2 border-brand pt-5">
              <span
                className="font-display text-5xl font-black text-brand"
                style={{ fontVariationSettings: "'wdth' 120" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-3 text-xl">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
