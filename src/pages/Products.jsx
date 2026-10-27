import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/ui/PageHeader';
import CtaBand from '@/components/ui/CtaBand';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { PRODUCTS, PRODUCT_CATEGORIES, waLink } from '@/data/pyramidData';

export default function Products() {
  useDocumentTitle('Products');
  const [params, setParams] = useSearchParams();
  const cat = PRODUCT_CATEGORIES.some((c) => c.id === params.get('cat')) ? params.get('cat') : 'all';

  const items = useMemo(
    () => (cat === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)),
    [cat]
  );

  const select = (id) => {
    if (id === 'all') setParams({}, { replace: true });
    else setParams({ cat: id }, { replace: true });
  };

  return (
    <Layout>
      <PageHeader
        title="Products we supply"
        text="Choose a category, then ask for a price. We reply with a written quote for the exact model and quantity you need."
      />

      <section className="section !pt-10">
        <div className="wrap">
          <div role="tablist" aria-label="Product categories" className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((c) => {
              const on = c.id === cat;
              return (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  onClick={() => select(c.id)}
                  className={`px-4 py-2 text-sm font-semibold border-2 transition-colors ${
                    on
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-ink border-line hover:border-black'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-mute" aria-live="polite">
            Showing {items.length} {items.length === 1 ? 'type' : 'types'}
          </p>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <li key={p.id} className="flex flex-col border border-line bg-white p-6">
                <span className="grid h-12 w-12 place-items-center bg-brand text-black">
                  <Icon name={p.icon} className="w-6 h-6" />
                </span>
                <h2 className="mt-5 text-xl" style={{ fontVariationSettings: "'wdth' 108" }}>
                  {p.name}
                </h2>
                <p className="mt-2 text-mute">{p.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="bg-sand px-2.5 py-1 text-xs font-semibold">{t}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <a
                    href={waLink(`Hello Pyramid Enterprises, please share the price and options for: ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line !py-2.5 w-full"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Ask for price
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 border-2 border-black p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl">Not sure what you need?</h2>
              <p className="mt-1 text-mute">Tell us how you will use it and your budget. We will recommend options.</p>
            </div>
            <Link to="/contact" className="btn btn-brand shrink-0">Get a recommendation</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
