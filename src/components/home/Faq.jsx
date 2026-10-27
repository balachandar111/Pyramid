import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

const FAQS = [
  {
    q: 'How do I get a price?',
    a: 'Send us an enquiry by WhatsApp, email or phone, or use the plan tool above. We reply with a written quote listing the items, quantities and cost.',
  },
  {
    q: 'I do not know exactly what to buy. Can you help?',
    a: 'Yes. Tell us how you will use the equipment and your budget, and we will suggest options that fit the work.',
  },
  {
    q: 'Can I ask about just one item?',
    a: 'Yes. A single laptop, a printer or one camera is as welcome as a full office setup.',
  },
  {
    q: 'What happens if something stops working after installation?',
    a: 'Call or message the same number you used to place the order, and we will arrange the fix.',
  },
  {
    q: 'Where are you located?',
    a: 'Our office is at #13/1, West Anna Nagar, 8th Street, Narayanapuram, Pallikaranai, Chennai - 600 100. Call us to confirm whether we can visit your location.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="h-section">Questions people ask us</h2>
          <p className="lead mt-4">Cannot find your answer? Call or message us and we will help.</p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="border-t-2 border-black">
            {FAQS.map((f, i) => {
              const on = open === i;
              return (
                <li key={f.q} className="border-b border-line">
                  <h3 className="!text-base !font-semibold" style={{ fontVariationSettings: 'normal' }}>
                    <button
                      type="button"
                      aria-expanded={on}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(on ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold hover:text-brand-deep transition-colors"
                    >
                      {f.q}
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center transition-colors ${
                          on ? 'bg-brand text-black' : 'bg-black text-white'
                        }`}
                      >
                        <Icon
                          name="arrow"
                          className={`w-4 h-4 transition-transform duration-300 ${on ? 'rotate-90' : ''}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-12 text-mute">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}