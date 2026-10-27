import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/data/pyramidData';

const CATEGORY_ICON = {
  laptops: 'laptop',
  desktops: 'desktop',
  printers: 'printer',
  cctv: 'camera',
  networking: 'wifi',
  accessories: 'chip',
};

export default function ProductTiles() {
  const cats = PRODUCT_CATEGORIES.filter((c) => c.id !== 'all');
  return (
    <section className="section">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <h2 className="h-section">Browse what we supply</h2>
            <p className="lead mt-4">Pick a category to see the range. Prices are shared as a written quote.</p>
          </div>
          <Link to="/products" className="btn btn-line self-start sm:self-auto">
            View all products
          </Link>
        </div>

        <div className="mt-10 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c) => {
            const count = PRODUCTS.filter((p) => p.category === c.id).length;
            return (
              <Link
                key={c.id}
                to={`/products?cat=${c.id}`}
                className="group relative overflow-hidden bg-white p-7 transition-colors hover:bg-black hover:text-white"
              >
                <span
                  className="absolute right-0 top-0 h-12 w-12 bg-brand opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                  aria-hidden="true"
                />
                <Icon name={CATEGORY_ICON[c.id]} className="w-9 h-9 text-brand-deep group-hover:text-brand" />
                <span className="mt-6 block font-display text-2xl font-extrabold" style={{ fontVariationSettings: "'wdth' 110" }}>
                  {c.label}
                </span>
                <span className="mt-1 block text-mute group-hover:text-white/70">
                  {count} {count === 1 ? 'type' : 'types'} available
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
