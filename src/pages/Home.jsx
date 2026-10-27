import React from 'react';
import Layout from '@/components/Layout';
import HeroDark from '@/components/home/HeroDark';
import Marquee from '@/components/home/Marquee';
import ServiceAccordion from '@/components/home/ServiceAccordion';
import SetupPlanner from '@/components/home/SetupPlanner';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ProductTiles from '@/components/home/ProductTiles';
import Faq from '@/components/home/Faq';
import CtaBand from '@/components/ui/CtaBand';
import useDocumentTitle from '@/hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('');
  return (
    <Layout>
      <HeroDark />
      <Marquee />
      <ServiceAccordion />
      <SetupPlanner />
      <ProcessTimeline />
      <ProductTiles />
      <Faq />
      <CtaBand />
    </Layout>
  );
}
