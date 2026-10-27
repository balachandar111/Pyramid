import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/ui/PageHeader';
import Icon, { WhatsAppIcon } from '@/components/ui/Icon';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import {
  ADDRESS_LINES,
  CONTACT_PERSON,
  EMAIL,
  MAPS_EMBED,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  WEBSITE,
  waLink,
} from '@/data/pyramidData';

const EMPTY = { name: '', phone: '', email: '', need: '', message: '' };

const cleanPhone = (v) => {
  const digits = v.replace(/\D/g, '');
  return digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
};

export default function Contact() {
  useDocumentTitle('Contact');
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Enter your name.';
    if (cleanPhone(form.phone).length !== 10) er.phone = 'Enter a 10-digit mobile number.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Enter a valid email address.';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const buildMessage = () =>
    [
      'Enquiry from the Pyramid Enterprises website',
      `Name: ${form.name.trim()}`,
      `Phone: ${cleanPhone(form.phone)}`,
      form.email && `Email: ${form.email.trim()}`,
      form.need && `Looking for: ${form.need}`,
      form.message && `Details: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(waLink(buildMessage()), '_blank', 'noopener,noreferrer');
    setStatus('WhatsApp is opening with your enquiry. Press send there to reach us.');
    setForm(EMPTY);
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `Enquiry from ${form.name.trim()}${form.need ? ` - ${form.need}` : ''}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
    setStatus('Your email app is opening with your enquiry. Press send there to reach us.');
  };

  return (
    <Layout>
      <PageHeader
        title="Tell us what you need"
        text="Send your enquiry on WhatsApp or by email, or call us directly. We reply with a written quote."
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={sendWhatsApp} noValidate className="grid gap-5" aria-label="Enquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-1.5 font-semibold">Your name</label>
                <input
                  id="name" name="name" autoComplete="name" className="field"
                  value={form.name} onChange={onChange}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined}
                />
                {errors.name && <p id="name-err" className="mt-1.5 text-sm text-[#b3261e]">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1.5 font-semibold">Mobile number</label>
                <input
                  id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field"
                  value={form.phone} onChange={onChange} placeholder="10-digit number"
                  aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined}
                />
                {errors.phone && <p id="phone-err" className="mt-1.5 text-sm text-[#b3261e]">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block mb-1.5 font-semibold">
                  Email <span className="font-normal text-mute">(optional)</span>
                </label>
                <input
                  id="email" name="email" type="email" autoComplete="email" className="field"
                  value={form.email} onChange={onChange}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined}
                />
                {errors.email && <p id="email-err" className="mt-1.5 text-sm text-[#b3261e]">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="need" className="block mb-1.5 font-semibold">What do you need?</label>
                <select id="need" name="need" className="field" value={form.need} onChange={onChange}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-1.5 font-semibold">
                Details <span className="font-normal text-mute">(optional)</span>
              </label>
              <textarea
                id="message" name="message" rows={5} className="field resize-y"
                value={form.message} onChange={onChange}
                placeholder="For example: 8 CCTV cameras for a two-floor shop, or a laptop for accounting work."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" className="btn btn-brand">
                <WhatsAppIcon /> Send on WhatsApp
              </button>
              <button type="button" onClick={sendEmail} className="btn btn-line">
                <Icon name="mail" className="w-5 h-5" /> Send by email
              </button>
            </div>

            <p role="status" className={`text-sm ${status ? 'border-l-4 border-brand bg-brand-soft p-3' : 'sr-only'}`}>
              {status}
            </p>
          </form>

          <div className="grid gap-6 content-start">
            <div className="border-2 border-black p-6">
              <h2 className="text-xl">Reach us directly</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <Icon name="phone" className="w-5 h-5 mt-0.5 shrink-0 text-brand-deep" />
                  <div>
                    <p className="text-sm text-mute">Call or WhatsApp {CONTACT_PERSON}</p>
                    <a href={`tel:${PHONE_TEL}`} className="font-semibold hover:text-brand-deep">{PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="mail" className="w-5 h-5 mt-0.5 shrink-0 text-brand-deep" />
                  <div>
                    <p className="text-sm text-mute">Email</p>
                    <a href={`mailto:${EMAIL}`} className="font-semibold hover:text-brand-deep break-all">{EMAIL}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="globe" className="w-5 h-5 mt-0.5 shrink-0 text-brand-deep" />
                  <div>
                    <p className="text-sm text-mute">Website</p>
                    <p className="font-semibold">{WEBSITE}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="pin" className="w-5 h-5 mt-0.5 shrink-0 text-brand-deep" />
                  <div>
                    <p className="text-sm text-mute">Visit us</p>
                    <address className="not-italic font-semibold">
                      {ADDRESS_LINES.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Get directions <Icon name="external" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Map showing our location">
        <iframe
          title="Pyramid Enterprises location on Google Maps"
          src={MAPS_EMBED}
          className="block w-full h-[22rem] md:h-[26rem] border-0 border-t border-line"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </Layout>
  );
}
