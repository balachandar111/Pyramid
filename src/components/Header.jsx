import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, waLink } from '@/data/pyramidData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-[0.95rem] font-medium transition-colors ${
      isActive ? 'text-black' : 'text-mute hover:text-black'
    } after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[3px] after:bg-brand after:origin-left after:transition-transform ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
    }`;

  const drawerNode = createPortal(
    (
      <div
        className={`fixed inset-0 z-[70] lg:hidden transition-[visibility] duration-300 ${open ? 'visible' : 'invisible pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[18.5rem] max-w-[86vw] bg-black text-white flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/15">
            <Logo light size={38} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
              tabIndex={open ? 0 : -1}
            >
              <Icon name="close" className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 p-4 flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `py-3.5 border-b border-white/10 font-display text-xl font-bold ${
                    isActive ? 'text-brand' : 'text-white'
                  }`
                }
                style={{ fontVariationSettings: "'wdth' 110" }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 grid gap-3 border-t border-white/15">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-brand" tabIndex={open ? 0 : -1}>
              <Icon name="phone" className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line-light"
              tabIndex={open ? 0 : -1}
            >
              <WhatsAppIcon /> WhatsApp us
            </a>
          </div>
        </aside>
      </div>
    ),
    document.body
  );

  return (
    <>
    <header
      className={`sticky top-0 z-50 bg-white ${
        scrolled ? 'border-b border-line shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
        <Link to="/" aria-label="Pyramid Enterprises home" className="shrink-0">
          <Logo size={44} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${PHONE_TEL}`} className="btn btn-line !py-2.5 !px-4">
            <Icon name="phone" className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <Link to="/contact" className="btn btn-brand !py-2.5 !px-4">
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Icon name="menu" className="w-7 h-7" />
        </button>
      </div>

    </header>

    {drawerNode}
    </>
  );
}