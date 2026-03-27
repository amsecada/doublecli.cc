import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const caseStudyCards = [
  {
    title: 'Operations Whitepaper: Atlas Home Services',
    description:
      'How one service team reworked intake, routing, and follow-up to turn lagging demand into reliable weekly revenue.',
    href: '/case-studies/template-atlas-home-services',
    metrics: ['Revenue +140%', 'Close Rate 2x'],
  },
  {
    title: 'Pipeline Reliability Sprint',
    description:
      'A systems-first rebuild that removed handoff gaps and restored speed between lead capture and booked call.',
    href: '/case-studies/template-atlas-home-services',
    metrics: ['Lead Response -78%', 'No-show -34%'],
  },
  {
    title: 'Sales Ops Stabilization',
    description:
      'A white-glove implementation focused on process accountability, automation, and cleaner forecasting.',
    href: '/case-studies/template-atlas-home-services',
    metrics: ['Forecast Accuracy +49%', 'Admin Hours -16/wk'],
  },
  {
    title: 'Follow-up Engine Rollout',
    description:
      'The engagement that transformed dead leads into a durable reactivation channel with consistent win rates.',
    href: '/case-studies/template-atlas-home-services',
    metrics: ['Reactivation +63%', 'Booked Calls +41%'],
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      <section className="content-container" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
        <div className="section-kicker"><span className="badge-dot" />Proof and Signal</div>
        <h1 className="section-title text-white">Case Studies</h1>
        <p className="section-text mt-6 mb-12">
          Explore longform implementation breakdowns that show how systems changes translate into measurable commercial outcomes.
        </p>
        
        <div className="grid-2">
          {caseStudyCards.map((caseStudy) => (
            <Link
              key={caseStudy.title}
              className="proof-card case-study-card-link"
              style={{ marginBottom: '2rem', display: 'block', textDecoration: 'none' }}
              to={caseStudy.href}
            >
              <div className="proof-image-placeholder" style={{ height: '14rem' }} />
              <div className="proof-card-content">
                <h3 className="proof-card-title">{caseStudy.title}</h3>
                <p className="proof-card-text">
                  {caseStudy.description}
                </p>
                <div className="mt-4 flex gap-4">
                  {caseStudy.metrics.map((metric) => (
                    <span key={metric} className="status-badge bg-alt">{metric}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
