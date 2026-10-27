import React, { useEffect, useRef, useState } from 'react';
import { PROCESS } from '@/data/pyramidData';

// The orange line fills as the section scrolls through the screen,
// lighting each step in turn.
export default function ProcessTimeline() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.8 - r.top) / (r.height * 0.85);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const n = PROCESS.length;

  return (
    <section ref={ref} className="section bg-black text-white">
      <div className="wrap">
        <h2 className="h-section max-w-2xl">How a job runs, start to finish</h2>

        <div className="relative mt-14">
          {/* progress rail */}
          <div className="absolute left-[1.15rem] top-0 h-full w-[3px] bg-white/15 lg:left-0 lg:top-[1.15rem] lg:h-[3px] lg:w-full" aria-hidden="true">
            <div
              className="bg-brand h-full w-full origin-top lg:origin-left"
              style={{
                transform: `scale(${window.innerWidth >= 1024 ? progress : 1}, ${window.innerWidth >= 1024 ? 1 : progress})`,
                transition: 'transform .15s linear',
              }}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {PROCESS.map((p, i) => {
              const lit = progress * n > i + 0.15;
              return (
                <li key={p.title} className="relative pl-14 lg:pl-0 lg:pt-14">
                  <span
                    className={`absolute left-0 top-0 grid h-10 w-10 place-items-center font-display text-lg font-black transition-all duration-300 ${
                      lit ? 'bg-brand text-black scale-100' : 'bg-[#222] text-white/50 scale-90'
                    }`}
                    style={{ fontVariationSettings: "'wdth' 118" }}
                  >
                    {i + 1}
                  </span>
                  <h3 className={`text-xl transition-colors duration-300 ${lit ? 'text-white' : 'text-white/45'}`}>
                    {p.title}
                  </h3>
                  <p className={`mt-2 transition-colors duration-300 ${lit ? 'text-white/75' : 'text-white/35'}`}>
                    {p.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
