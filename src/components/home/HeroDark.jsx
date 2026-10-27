import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '@/data/pyramidData';

const WORDS = ['laptops', 'CCTV', 'networks', 'printers'];

const CHIPS = [
  { label: 'CCTV', icon: 'camera', pos: 'left-[2%] top-[14%]', cls: 'float-a' },
  { label: 'Wi-Fi', icon: 'wifi', pos: 'right-[0%] top-[28%]', cls: 'float-b' },
  { label: 'Printers', icon: 'printer', pos: 'left-[0%] bottom-[16%]', cls: 'float-b' },
  { label: 'Laptops', icon: 'laptop', pos: 'right-[4%] bottom-[6%]', cls: 'float-a' },
];

export default function HeroDark() {
  const sectionRef = useRef(null);
  const orangeRef = useRef(null);
  const blackRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const t = setInterval(() => setWordIndex((v) => (v + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  const onMove = (e) => {
    const sec = sectionRef.current;
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    sec.style.setProperty('--mx', `${x}px`);
    sec.style.setProperty('--my', `${y}px`);
    const dx = x / r.width - 0.5;
    const dy = y / r.height - 0.5;
    if (orangeRef.current) orangeRef.current.style.transform = `translate(${-dx * 46}px, ${-dy * 46}px)`;
    if (blackRef.current) blackRef.current.style.transform = `translate(${dx * 56}px, ${dy * 56}px)`;
  };

  const onLeave = () => {
    if (orangeRef.current) orangeRef.current.style.transform = 'translate(0,0)';
    if (blackRef.current) blackRef.current.style.transform = 'translate(0,0)';
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-black text-white"
      style={{ '--mx': '70%', '--my': '40%' }}
    >
      {/* grid + cursor spotlight */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(520px circle at var(--mx) var(--my), rgba(255,143,15,0.22), transparent 60%)',
        }}
      />

      <div className="wrap relative grid gap-10 py-14 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 border border-white/25 px-3 py-1.5 text-sm text-white/85">
            <span className="h-2 w-2 rounded-full bg-brand pulse-dot" aria-hidden="true" />
            IT infrastructure solution, Pallikaranai, Chennai
          </p>

          <h1 className="mt-6 text-[clamp(2.4rem,6.2vw,4.9rem)] leading-[1.03]">
            <span className="sr-only">
              We set up your laptops, CCTV, networks and printers, and keep them running.
            </span>
            <span aria-hidden="true">
              <span className="block">We set up your</span>
              <span className="block h-[1.1em] overflow-hidden text-brand">
                <span key={wordIndex} className="word-in block">
                  {WORDS[wordIndex]}
                </span>
              </span>
              <span className="block">and keep it running.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75">
            Laptops, desktops, printers, CCTV and networking for homes, shops and offices. One local
            team for the supply, the installation and the support afterwards.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#plan" className="btn btn-brand">
              Plan your setup
              <Icon name="arrow" className="w-5 h-5" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line-light"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* interactive logo mark */}
        <div className="relative mx-auto w-full max-w-[34rem]">
          <svg
            viewBox="200 -20 1050 820"
            className="w-full drop-shadow-[0_0_60px_rgba(255,143,15,0.25)]"
            role="img"
            aria-label="Pyramid Enterprises logo mark"
          >
            <g ref={orangeRef} className="parallax-layer">
              <polygon fill="#FF8F0F" points="735,13 803,123 457,682 922,682 973,755 258,755" />
            </g>
            <g ref={blackRef} className="parallax-layer">
              <polygon
                fill="#111111"
                stroke="#FFFFFF"
                strokeWidth="6"
                points="832,162 1196,755 1023,755 805,372 633,651 526,651"
              />
            </g>
          </svg>

          {CHIPS.map((c) => (
            <span
              key={c.label}
              className={`absolute ${c.pos} ${c.cls} hidden sm:inline-flex items-center gap-2 bg-white px-3.5 py-2 text-sm font-semibold text-black shadow-lg`}
              aria-hidden="true"
            >
              <Icon name={c.icon} className="w-4 h-4 text-brand-deep" />
              {c.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="wrap grid gap-x-8 gap-y-3 py-5 text-sm text-white/80 sm:grid-cols-3">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 hover:text-brand transition-colors">
            <Icon name="phone" className="w-5 h-5 text-brand" /> Call {PHONE_DISPLAY}
          </a>
          <span className="flex items-center gap-2.5">
            <Icon name="check" className="w-5 h-5 text-brand" strokeWidth={3} /> Written quotes before any work
          </span>
          <Link to="/contact" className="flex items-center gap-2.5 hover:text-brand transition-colors">
            <Icon name="mail" className="w-5 h-5 text-brand" /> Send an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
