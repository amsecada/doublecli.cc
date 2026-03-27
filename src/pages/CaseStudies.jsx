import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const caseStudyCards = [
  {
    title: 'Restoring Trust in Commercial Data After Acquisition',
    description:
      'A systems-led Salesforce consolidation that turned three fragmented legacy orgs into a governed foundation leadership could actually trust.',
    href: '/case-studies/restoring-trust-commercial-data-after-acquisition',
    metrics: ['3 Org → 1 Model', '80%+ Platform Spend Reduction'],
  },
  {
    title: 'Turning a Fragile DevOps Function Into a Scalable Delivery Engine',
    description:
      'A two-year practice transformation that replaced manual release heroics with repeatable deployment systems, auditability, and operational control.',
    href: '/case-studies/scalable-devops-delivery-engine',
    metrics: ['$200K → $2M Bookings', '2 Days → Minutes Deployment'],
  },
  {
    title: 'Transforming a Patchwork Federal System Into a Measurable User Experience',
    description:
      'A visibility redesign that measured real user success across mission-critical workflows and turned detection from reactive to proactive.',
    href: '/case-studies/federal-system-user-experience-visibility',
    metrics: ['24 Critical Journeys', 'Minutes → Seconds Detection'],
  },
  {
    title: "Enabling Users Like Freakin' Magic Across the Enterprise",
    description:
      'A product-adoption system that connected release velocity to user understanding through traceability, automated notes, and version-aware docs.',
    href: '/case-studies/enterprise-product-adoption-system',
    metrics: ['75% Fewer User-Error Tickets', '~800 Active Users Supported'],
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
