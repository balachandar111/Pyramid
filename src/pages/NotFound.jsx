import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { LogoMark } from '@/components/ui/Logo';
import useDocumentTitle from '@/hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <Layout>
      <section className="wrap section text-center">
        <div className="flex justify-center"><LogoMark size={110} /></div>
        <h1 className="h-section mt-8">This page could not be found</h1>
        <p className="lead mt-4 mx-auto">
          The link may be old or mistyped. Head back to the home page or see what we offer.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-brand">Back to home</Link>
          <Link to="/services" className="btn btn-line">View services</Link>
        </div>
      </section>
    </Layout>
  );
}
