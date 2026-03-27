import Layout from '../components/Layout';

const tocItems = [
  { label: 'Executive Summary', href: '#executive-summary' },
  { label: 'Client Context', href: '#client-context' },
  { label: 'The Trigger', href: '#the-trigger' },
  { label: 'What Was Actually Broken', href: '#what-was-actually-broken' },
  { label: 'Why This Was Difficult', href: '#why-this-was-difficult' },
  { label: 'Scope', href: '#scope' },
  { label: 'What We Led', href: '#what-we-led' },
  { label: 'Approach', href: '#approach' },
  { label: 'Outcome', href: '#outcome' },
  { label: 'Why It Mattered', href: '#why-it-mattered' },
  { label: 'Closing', href: '#closing' },
];

const coverStats = [
  { value: '75% reduction', label: 'In support tickets caused by user error' },
  { value: '~800 users', label: 'Active consultants supported on Appirio DX' },
  { value: 'Weekly releases', label: 'Aligned with automated release communication' },
  { value: '18 months', label: 'Transformation timeline with early results in weeks' },
];

export default function CaseStudyAppirioDX() {
  return (
    <Layout>
      <section className="content-container case-study-template" style={{ paddingTop: '8rem' }}>
        <div className="case-study-title-card case-study-kar-hero">
          <div className="section-kicker"><span className="badge-dot" />Case Study · Product Adoption Systems</div>
          <p className="case-study-eyebrow">Case Study - Appirio (Wipro Subsidiary)</p>
          <h1 className="section-title">Enabling Users Like Freakin&apos; Magic Across the Enterprise</h1>
          <p className="section-text case-study-subheading">
            A case study in product adoption, DevOps integration, and scaling user understanding alongside weekly feature delivery.
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
              <p>Appirio&apos;s internal product was shipping weekly, but the systems helping users understand those changes were lagging. Confusion and user-error support load kept increasing.</p>
              <p className="mt-4">At first glance, this looked like a product development issue.</p>
              <p>It wasn&apos;t.</p>
              <p>It was a breakdown between what was being built and what users could realistically absorb.</p>
              <p className="mt-4">By integrating development workflows with automated release notes and versioned documentation, we made product understanding scale with product velocity.</p>
            </section>

            <section id="client-context">
              <h2>Client Context</h2>
              <p>Appirio (a Wipro subsidiary) supported about 1,300 consultants, with roughly 800 actively using Appirio DX for delivery work. The platform worked technically, but operational strain was rising as release cadence increased.</p>
            </section>

            <section id="the-trigger">
              <h2>The Trigger</h2>
              <p>The request came in as a product development improvement effort. The real issue was that there was no reliable system connecting shipped changes to user understanding across a distributed user base.</p>
            </section>

            <section id="what-was-actually-broken">
              <h2>What Was Actually Broken</h2>
              <p>The visible issue was user confusion. The real issue was structural disconnect across request intake, development traceability, release communication, and version-aware documentation.</p>
              <ul className="case-study-list mt-4">
                <li>documentation often stale or inconsistent</li>
                <li>users spread across product versions</li>
                <li>unclear self-diagnosis for version-related issues</li>
                <li>developers pulled repeatedly into support interruptions</li>
              </ul>
            </section>

            <section id="why-this-was-difficult">
              <h2>Why This Was Difficult</h2>
              <p>Adding support headcount would only scale the pain. The constraints included weekly releases, global teams, inconsistent connectivity, and users on different versions simultaneously.</p>
            </section>

            <section id="scope">
              <h2>Scope</h2>
              <p>This was a systems redesign across the full product communication chain over about 18 months, with measurable gains starting in the first few weeks.</p>
            </section>

            <section id="what-we-led">
              <h2>What We Led</h2>
              <p>We built an integrated operating flow:</p>
              <div className="case-study-big-number mt-4">
                <p className="big-number">Request → Build → Release → Understand</p>
                <p className="big-number-caption">A connected system that removed the lag between shipped features and user comprehension.</p>
              </div>
              <div className="case-study-pill-row mt-4">
                <span className="status-badge bg-alt">request-to-PR traceability</span>
                <span className="status-badge bg-alt">automated release notes</span>
                <span className="status-badge bg-alt">version-aware documentation</span>
                <span className="status-badge bg-alt">self-service knowledge access</span>
              </div>
            </section>

            <section id="approach">
              <h2>Approach</h2>
              <div className="case-study-timeline mt-4">
                <article>
                  <h3>1. Establish traceability</h3>
                  <p>Linked enhancement requests directly to GitHub pull requests and implementation records.</p>
                </article>
                <article>
                  <h3>2. Automate communication</h3>
                  <p>Generated release notes from development activity to eliminate manual documentation lag.</p>
                </article>
                <article>
                  <h3>3. Introduce version-aware docs</h3>
                  <p>Aligned user guidance to specific product versions to reduce ambiguity and support load.</p>
                </article>
                <article>
                  <h3>4. Shift to self-service understanding</h3>
                  <p>Enabled users to identify their state and resolve common issues independently.</p>
                </article>
              </div>
            </section>

            <section id="outcome">
              <h1>Outcome</h1>
              <ul className="case-study-list mt-4">
                <li>75% reduction in support tickets caused by user error</li>
                <li>fewer daily engineering interruptions</li>
                <li>faster user adoption of shipped functionality</li>
                <li>more engineering capacity for product delivery</li>
                <li>reduced reliance on scheduled training sessions</li>
              </ul>
              <div className="case-study-sidebar-grid mt-4">
                <aside className="case-study-sidebar-block">
                  <h3>Behavioral shift</h3>
                  <p>Users no longer depended on developers to understand the product after every release.</p>
                </aside>
                <aside className="case-study-sidebar-block">
                  <h3>Business impact</h3>
                  <p>The product became scalable not just in shipped features, but in user usability and adoption.</p>
                </aside>
              </div>
            </section>

            <section id="why-it-mattered">
              <h2>Why It Mattered</h2>
              <p>Most teams think shipping features is the hard part. At scale, the harder part is making sure users can absorb and apply those features without constant expert intervention.</p>
            </section>

            <section id="closing">
              <h2>Closing</h2>
              <p>This engagement fixed the system around the product, not just the product itself. That is what enabled sustained weekly delivery without compounding user confusion.</p>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
}
