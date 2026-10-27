import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/ui/PageHeader';
import CtaBand from '@/components/ui/CtaBand';
import Icon from '@/components/ui/Icon';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { ADDRESS_LINES, CONTACT_PERSON, MAPS_LINK, TAGLINE } from '@/data/pyramidData';

const LAYERS = [
  { title: 'Dependable support', text: 'The top of the pyramid: someone to call when something stops working.' },
  { title: 'Careful installation', text: 'Cabling, configuration and testing done properly, so the setup holds up.' },
  { title: 'Sound hardware', text: 'The base: products chosen for the job, not for the highest margin.' },
];

export default function About() {
  useDocumentTitle('About us');
  return (
    <Layout>
      <PageHeader
        title="A local IT partner in Pallikaranai"
        text={`${TAGLINE} for homes, shops and offices across Chennai.`}
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-lg max-w-2xl">
            <p>
              Pyramid Enterprises supplies and supports the equipment a business depends on every day:
              laptops, desktops, printers, CCTV, networking and hardware.
            </p>
            <p>
              We work with homes, small shops and offices that want one dependable contact for their
              IT needs, instead of a different vendor for each device. You tell us what you want to
              achieve, and we suggest a setup that fits the work and the budget.
            </p>
            <p>
              The name comes from how we think about technology. A strong base of hardware, careful
              installation in the middle, and reliable support at the top.
            </p>
          </div>

          <aside className="self-start border-2 border-black p-6">
            <h2 className="text-xl">Talk to us</h2>
            <dl className="mt-5 space-y-4">
              <div className="flex gap-3">
                <Icon name="user" className="w-5 h-5 mt-0.5 shrink-0 text-brand-deep" />
                <div>
                  <dt className="text-sm text-mute">Contact</dt>
                  <dd className="font-semibold">{CONTACT_PERSON}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="pin" className="w-5 h-5 mt-0.5 shrink-0 text-brand-deep" />
                <div>
                  <dt className="text-sm text-mute">Visit</dt>
                  <dd>
                    {ADDRESS_LINES.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold underline decoration-brand decoration-2 underline-offset-4">
                      Open in Google Maps
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <Link to="/contact" className="btn btn-brand mt-6 w-full">Contact us</Link>
          </aside>
        </div>
      </section>

      <section className="section bg-sand border-y border-line">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">Three layers behind every job</h2>
          <div className="mt-10 mx-auto max-w-3xl grid gap-3">
            {LAYERS.map((l, i) => (
              <div
                key={l.title}
                className="mx-auto p-5 text-center"
                style={{
                  width: `${55 + i * 22}%`,
                  background: i === 0 ? '#FF8F0F' : '#000',
                  color: i === 0 ? '#000' : '#fff',
                }}
              >
                <h3 className="text-lg">{l.title}</h3>
                <p className={`mt-1 text-sm ${i === 0 ? 'text-black/80' : 'text-white/70'}`}>{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
