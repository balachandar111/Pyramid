import React from 'react';

// Vector redraw of the Pyramid mark (orange slab + black "A"), so it stays sharp
// at any size and can switch to a light version on dark backgrounds.
export function LogoMark({ size = 40, dark = false, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="250 5 955 760"
      className={className}
      role="img"
      aria-label="Pyramid logo"
    >
      <polygon
        fill="#FF8F0F"
        points="735,13 803,123 457,682 922,682 973,755 258,755"
      />
      <polygon
        fill={dark ? '#FFFFFF' : '#000000'}
        points="832,162 1196,755 1023,755 805,372 633,651 526,651"
      />
    </svg>
  );
}

export default function Logo({ light = false, size = 40 }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark size={size} dark={light} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.15rem] sm:text-xl font-black tracking-tight ${
            light ? 'text-white' : 'text-black'
          }`}
          style={{ fontVariationSettings: "'wdth' 118" }}
        >
          PYRAMID
        </span>
        <span
          className={`mt-1 text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-[0.2em] ${
            light ? 'text-white/70' : 'text-mute'
          }`}
        >
          ENTERPRISES
        </span>
      </span>
    </span>
  );
}
