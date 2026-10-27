import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/ui/PageHeader';
import CtaBand from '@/components/ui/CtaBand';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { SERVICES, waLink } from '@/data/pyramidData';

export default function Services() {
  useDocumentTitle('Services');
  return (
    <Layout>
      <PageHeader
        title="Services for every layer of your IT setup"
        text="Supply, installation, repair and support for computers, printers, CCTV and networks."
      />

      <div className="wrap">
        {SERVICES.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="grid gap-8 border-b border-line py-12 md:py-16 last:border-b-0 lg:grid-cols-[1fr_1.1fr]"
          >
            <div>
              <span className="grid h-14 w-14 place-items-center bg-black text-brand">
                <Icon name={s.icon} className="w-7 h-7" />
              </span>
              <h2 className="h-section mt-5">{s.title}</h2>
              <p className="lead mt-3">{s.summary}</p>
              <a
                href={waLink(`Hello Pyramid Enterprises, I would like to enquire about: ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-6"
              >
                <WhatsAppIcon /> Ask about this
              </a>
            </div>
            <ul className="self-start border-t-2 border-black">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 border-b border-line py-4">
                  <Icon name="check" className="w-5 h-5 mt-1 shrink-0 text-brand-deep" strokeWidth={3} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="bg-black text-white">
        <div className="wrap section grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <h2 className="h-section">Looking for regular upkeep?</h2>
            <p className="mt-4 text-white/75 max-w-xl text-lg">
              If you run an office, school or shop with many devices, ask us about scheduled
              maintenance visits. We will suggest a plan that fits the size of your setup.
            </p>
          </div>
          <div>
            <a
              href={waLink('Hello Pyramid Enterprises, I would like to know about regular maintenance for my office.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand"
            >
              <WhatsAppIcon /> Ask about maintenance
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
