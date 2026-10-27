import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { STACK_TIERS } from '@/data/pyramidData';

const CX = 200;
const APEX_Y = 16;
const BASE_Y = 364;
const HALF_BASE = 190;
const GAP = 6;

const halfWidthAt = (y) => ((y - APEX_Y) / (BASE_Y - APEX_Y)) * HALF_BASE;

function buildTiers() {
  const n = STACK_TIERS.length;
  const step = (BASE_Y - APEX_Y) / n;
  return STACK_TIERS.map((tier, i) => {
    const y0 = APEX_Y + i * step + (i === 0 ? 0 : GAP / 2);
    const y1 = APEX_Y + (i + 1) * step - (i === n - 1 ? 0 : GAP / 2);
    const w0 = halfWidthAt(y0);
    const w1 = halfWidthAt(y1);
    const points = [
      [CX - w0, y0],
      [CX + w0, y0],
      [CX + w1, y1],
      [CX - w1, y1],
    ]
      .map((p) => p.join(','))
      .join(' ');
    const labelY = i === 0 ? y0 + (y1 - y0) * 0.72 : (y0 + y1) / 2 + 4;
    return { ...tier, points, labelY, delay: (n - 1 - i) * 130 + 150 };
  });
}

const TIERS = buildTiers();

export default function InfraStack() {
  const [active, setActive] = useState(TIERS.length - 1);
  const current = TIERS[active];

  return (
    <div className="grid gap-5">
      <svg
        viewBox="0 0 400 380"
        className="w-full max-w-[21rem] mx-auto"
        role="img"
        aria-label="Pyramid showing four layers of an IT setup: laptops and desktops at the base, then printers, networking and CCTV on top"
      >
        {TIERS.map((t, i) => {
          const isActive = i === active;
          return (
            <g
              key={t.id}
              className="tier-rise"
              style={{ animationDelay: `${t.delay}ms` }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <polygon
                points={t.points}
                className="tier-shape"
                fill={isActive ? '#FF8F0F' : '#000000'}
              />
              <text
                x={CX}
                y={t.labelY}
                textAnchor="middle"
                fontSize={i === 0 ? 11 : 14}
                fontWeight="700"
                fill={isActive ? '#000000' : '#FFFFFF'}
                style={{ pointerEvents: 'none', fontFamily: 'Archivo, sans-serif' }}
              >
                {t.short}
              </text>
            </g>
          );
        })}
      </svg>

      <div>
        <ul className="grid gap-1.5 sm:grid-cols-2" aria-label="Layers of an IT setup">
          {TIERS.map((t, i) => {
            const isActive = i === active;
            return (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`w-full text-left px-4 py-2.5 border-l-4 font-semibold transition-colors ${
                    isActive
                      ? 'border-brand bg-black text-white'
                      : 'border-line bg-white text-ink hover:border-black'
                  }`}
                >
                  {t.title}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 min-h-[5.5rem]" aria-live="polite">
          <p className="text-mute">{current.text}</p>
          <Link
            to={`/services#${current.serviceId}`}
            className="mt-3 inline-flex items-center gap-1.5 font-semibold underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-deep"
          >
            See this service
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
