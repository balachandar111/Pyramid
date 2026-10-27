import React from 'react';
import Icon from '@/components/ui/Icon';
import { WHY } from '@/data/pyramidData';

export default function WhyPyramid() {
  return (
    <section className="section bg-sand border-y border-line">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="h-section">What you can expect when you work with us</h2>
          <p className="lead mt-4">
            IT purchases are easier when one local team handles the buying, the installation and the
            follow-up.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {WHY.map((w) => (
            <li key={w.title} className="flex gap-4">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center bg-brand text-black">
                <Icon name="check" className="w-4 h-4" strokeWidth={3} />
              </span>
              <div>
                <h3 className="text-lg">{w.title}</h3>
                <p className="mt-1.5 text-mute">{w.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
