import Layout from '../components/Layout';

const tocItems = [
  { label: 'Executive Summary', href: '#executive-summary' },
  { label: 'Client Context', href: '#client-context' },
  { label: 'The Trigger', href: '#the-trigger' },
  { label: 'What Was Actually Broken', href: '#what-was-actually-broken' },
  { label: 'Why This Was Difficult', href: '#why-this-was-difficult' },
  { label: 'Our Approach', href: '#our-approach' },
  { label: 'Implementation', href: '#implementation' },
  { label: 'Outcome', href: '#outcome' },
  { label: 'Why It Mattered', href: '#why-it-mattered' },
  { label: 'Closing', href: '#closing' },
  { label: 'Recommended Pull Quotes', href: '#recommended-pull-quotes' },
];

const coverStats = [
  { value: 'Millions of users', label: 'Continuously validated during peak demand' },
  { value: '2 months', label: 'To build a real user-experience monitoring system' },
  { value: '24 workflows', label: 'Tracked end-to-end across the system' },
  { value: 'Minutes → seconds', label: 'Detection and root-cause attribution time' },
];

export default function CaseStudyIRSVisibility() {
  return (
    <Layout>
      <section className="content-container case-study-template" style={{ paddingTop: '8rem' }}>
        <div className="case-study-title-card case-study-kar-hero">
          <div className="section-kicker"><span className="badge-dot" />Case Study · System Observability</div>
          <p className="case-study-eyebrow">Case Study - Federal Public Platform</p>
          <h1 className="section-title">Transforming a Patchwork Federal System Into a Measurable, Reliable User Experience</h1>
          <p className="section-text case-study-subheading">
            A case study in large-scale system observability, user-path monitoring, and reliability under national demand.
          </p>
          <div className="case-study-cover-stats">
            {coverStats.map((stat) => (
              <article key={stat.value} className="case-study-cover-stat">
                <p className="case-study-cover-value">{stat.value}</p>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-study-layout">
          <aside className="case-study-toc">
            <p className="case-study-toc-label">Table of Contents</p>
            <ul>
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="case-study-article">
            <section id="executive-summary">
              <h1>Executive Summary</h1>
              <p>The IRS needed IRS.gov to perform reliably during tax season under massive demand. Monitoring existed, but it did not answer the question the business actually cared about: does the site work for users right now?</p>
              <p className="mt-4">At first glance, this looked like a monitoring gap.</p>
              <p>It wasn&apos;t.</p>
              <p>It was a visibility problem at the user-experience level.</p>
              <p className="mt-4">Over roughly two months, we built a synthetic journey system across two dozen critical workflows to detect degradations in minutes and trace root cause in seconds.</p>
            </section>

            <section id="client-context">
              <h2>Client Context</h2>
              <p>IRS.gov serves millions of users under time pressure. To users, it appears as one website. Operationally, it is a distributed set of interconnected environments and dependencies.</p>
              <p className="mt-4">Failures rarely appeared as full outages. They surfaced as broken journeys: redirects that failed, pages that partially loaded, and workflows that quietly stopped completing.</p>
            </section>

            <section id="the-trigger">
              <h2>The Trigger</h2>
              <p>This engagement was driven by a mismatch: system importance and national usage had outgrown the organization&apos;s visibility into real user outcomes.</p>
              <div className="case-study-quote-callout mt-4">
                <p className="quote-mark">“</p>
                <blockquote>If users are the ones detecting failure, your monitoring system is already too late.</blockquote>
              </div>
            </section>

            <section id="what-was-actually-broken">
              <h2>What Was Actually Broken</h2>
              <p>The visible issue was intermittent instability. The real issue was no reliable end-to-end measurement of user experience across system boundaries.</p>
              <ul className="case-study-list mt-4">
                <li>fragmented monitoring across components</li>
                <li>frequent subtle degradations</li>
                <li>redirect errors and incomplete page behavior</li>
                <li>root-cause analysis requiring broad multi-team pull-in</li>
                <li>limited tracing across environment dependencies</li>
              </ul>
            </section>

            <section id="why-this-was-difficult">
              <h2>Why This Was Difficult</h2>
              <p>The existing observability model did not match the problem. There was no unified API layer, dependencies were distributed, and failure patterns only emerged through actual user behavior.</p>
            </section>

            <section id="our-approach">
              <h2>Our Approach</h2>
              <p>We shifted from infrastructure monitoring to behavior monitoring by simulating real user journeys continuously.</p>
              <div className="case-study-pill-row mt-4">
                <span className="status-badge bg-alt">real navigation paths</span>
                <span className="status-badge bg-alt">full click flow execution</span>
                <span className="status-badge bg-alt">backend interaction checks</span>
                <span className="status-badge bg-alt">2-3 second latency thresholds</span>
                <span className="status-badge bg-alt">step-by-step completion validation</span>
              </div>
            </section>

            <section id="implementation">
              <h2>Implementation</h2>
              <div className="case-study-timeline mt-4">
                <article>
                  <h3>1. Identify critical pathways</h3>
                  <p>Defined two dozen high-impact workflows tied to user success.</p>
                </article>
                <article>
                  <h3>2. Map dependencies</h3>
                  <p>Connected pathways to underlying cross-environment dependency chains.</p>
                </article>
                <article>
                  <h3>3. Build synthetic journeys</h3>
                  <p>Constructed and refined real interaction simulations that ran every few minutes.</p>
                </article>
                <article>
                  <h3>4. Tune for operational reality</h3>
                  <p>Adjusted thresholds and journey logic based on observed degradation patterns.</p>
                </article>
              </div>
            </section>

            <section id="outcome">
              <h1>Outcome</h1>
              <ul className="case-study-list mt-4">
                <li>millions of user interactions continuously validated</li>
                <li>degradations surfaced in minutes</li>
                <li>root cause identified in seconds</li>
                <li>lower diagnostic overhead and fewer disrupted technical resources</li>
                <li>higher confidence in site reliability under peak demand</li>
              </ul>
              <div className="case-study-sidebar-grid mt-4">
                <aside className="case-study-sidebar-block">
                  <h3>Operational shift</h3>
                  <p>Moved from reactive complaint handling to proactive degradation detection.</p>
                </aside>
                <aside className="case-study-sidebar-block">
                  <h3>Definition of health</h3>
                  <p>System health was reframed around user task completion, not just service uptime.</p>
                </aside>
              </div>
            </section>

            <section id="why-it-mattered">
              <h2>Why It Mattered</h2>
              <p>At this scale, reliability is a public outcome. Users do not experience infrastructure; they experience whether they can complete tasks.</p>
            </section>

            <section id="closing">
              <h2>Closing</h2>
              <p>Most complex systems fail in pieces. This engagement replaced late detection with behavior-level visibility that mirrored the user experience itself.</p>
            </section>

            <section id="recommended-pull-quotes">
              <h2>Recommended pull quotes to preserve</h2>
              <div className="case-study-quote-grid mt-4">
                <blockquote className="case-study-quote-tile">At first glance, this looked like a monitoring problem. It wasn&apos;t. It was a visibility problem.</blockquote>
                <blockquote className="case-study-quote-tile">If users are the ones detecting failure, your monitoring system is already too late.</blockquote>
                <blockquote className="case-study-quote-tile">The system didn&apos;t fail all at once. It failed in pieces.</blockquote>
                <blockquote className="case-study-quote-tile">We weren&apos;t monitoring infrastructure. We were measuring whether the system actually worked.</blockquote>
              </div>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
}
