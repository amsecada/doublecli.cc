import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Diagnosis from '../components/Diagnosis';
import OfferPillars from '../components/OfferPillars';
import Process from '../components/Process';
import Proof from '../components/Proof';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Diagnosis />
      <OfferPillars />
      <Process />
      <Proof />
      <CTA />
    </Layout>
  );
}
