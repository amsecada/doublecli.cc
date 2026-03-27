import Layout from '../components/Layout';

const tocItems = [
  { label: 'Executive Summary', href: '#executive-summary' },
  { label: 'Client Context', href: '#client-context' },
  { label: 'The Trigger', href: '#the-trigger' },
  { label: 'What Was Actually Broken', href: '#what-was-actually-broken' },
  { label: 'Why This Was Difficult', href: '#why-this-was-difficult' },
  { label: 'Scope', href: '#scope' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'What We Led', href: '#what-we-led' },
  { label: 'Approach', href: '#approach' },
  { label: 'Outcome', href: '#outcome' },
  { label: 'Why It Mattered', href: '#why-it-mattered' },
  { label: 'Closing', href: '#closing' },
  { label: 'Recommended Pull Quotes', href: '#recommended-pull-quotes' },
];

const coverStats = [
  { value: '10x growth', label: 'From $200K to $2M in annual bookings' },
  { value: '2 years', label: 'To turn a weak function into a scalable delivery practice' },
  { value: '50 consultants', label: 'Using the system as the main path to production' },
  { value: '2 days → minutes', label: 'Deployment cycles reduced through automation and standardization' },
];

const scopeStats = [
  ['1 → 3', 'Practice headcount'],
  ['$200K → $2M', 'Annual bookings'],
  ['50', 'Salesforce consultants using the system'],
  ['2 years', 'Transformation window'],
  ['2 days → minutes', 'Deployment cycle reduction'],
  ['CPQ', 'Major reusable project pattern'],
];

export default function CaseStudyDevOpsEngine() {
  return (
    <Layout>
      <section className="content-container case-study-template" style={{ paddingTop: '8rem' }}>
        <div className="case-study-title-card case-study-kar-hero">
          <div className="section-kicker"><span className="badge-dot" />Case Study · DevOps Practice Leadership</div>
          <p className="case-study-eyebrow">Case Study - Salesforce Consulting Firm (Anonymized)</p>
          <h1 className="section-title">Turning a Fragile DevOps Function Into a Scalable Delivery Engine</h1>
          <p className="section-text case-study-subheading">
            A case study in DevOps practice leadership, Salesforce delivery automation, and operational scale.
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
              <p>A Salesforce consulting firm was trying to compete with more mature players while relying on a DevOps function that barely existed.</p>
              <p className="mt-4">At first glance, this looked like a deployment problem.</p>
              <p>It wasn&apos;t.</p>
              <p>It was an operating model problem.</p>
              <p className="mt-4">Over two years, we transformed that weak function into a real delivery practice with reusable templates, playbooks, auditable deployment workflows, and practical performance visibility for leadership.</p>
              <p className="mt-4">The result: growth from 1 person to 3, annual bookings from roughly $200K to $2M, adoption by ~50 Salesforce consultants, and deployment cycles reduced from as much as two days to minutes in many cases.</p>
            </section>

            <section id="client-context">
              <h2>Client Context</h2>
              <p>The client was a Salesforce consulting firm operating in a market where delivery maturity and repeatability were becoming baseline expectations.</p>
              <p className="mt-4">The team had capable consultants, but the DevOps function was still mostly manual and dependent on individual effort. Delivery quality varied, knowledge retention was weak, and clients could feel implementation timelines slipping.</p>
            </section>

            <section id="the-trigger">
              <h2>The Trigger</h2>
              <p>This engagement did not start because DevOps was trendy. It started because customers were complaining that implementations were taking too long and leadership knew the firm could not compete if release motion stayed manual.</p>
              <div className="case-study-quote-callout mt-4">
                <p className="quote-mark">“</p>
                <blockquote>At first glance, this looked like a deployment problem. It wasn&apos;t. It was an operating model problem.</blockquote>
              </div>
            </section>

            <section id="what-was-actually-broken">
              <h2>What Was Actually Broken</h2>
              <p>The visible issue was slow deployment. The real issue was the absence of a repeatable system for getting Salesforce work into production safely, quickly, and consistently.</p>
              <ul className="case-study-list mt-4">
                <li>manual change-set deployment motion</li>
                <li>no meaningful reusable assets</li>
                <li>minimal KPI and SLA visibility</li>
                <li>poor project knowledge retention</li>
                <li>quality tied to whoever happened to be staffed</li>
              </ul>
              <p className="mt-4">That is not a tooling issue. That is a systems issue.</p>
            </section>

            <section id="why-this-was-difficult">
              <h2>Why This Was Difficult</h2>
              <p>Automating deployments alone would not solve this. The hard part was converting a fragile function into a reliable practice without losing delivery flexibility across varied client environments.</p>
              <p className="mt-4">We needed to standardize repeatable patterns, preserve auditability, improve onboarding speed, and make the model credible enough that the broader consulting team would actually use it.</p>
            </section>

            <section id="scope">
              <h2>Scope</h2>
              <p>This was a practice transformation, not a one-off implementation.</p>
              <div className="case-study-scope-grid mt-4">
                {scopeStats.map(([value, label]) => (
                  <article key={label} className="case-study-scope-stat">
                    <p>{value}</p>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
            </section>

            <section id="why-us">
              <h2>Why Us</h2>
              <p>We were brought in because this needed more than product familiarity. The firm needed operators who understood Salesforce delivery failure modes in real projects and could build a full system around repeatability, reporting, and operational control.</p>
            </section>

            <section id="what-we-led">
              <h2>What We Led</h2>
              <p>We led the practice transformation from ad hoc releases to a standardized delivery capability.</p>
              <div className="case-study-pill-row mt-4">
                <span className="status-badge bg-alt">reusable deployment templates</span>
                <span className="status-badge bg-alt">playbooks and SOPs</span>
                <span className="status-badge bg-alt">onboarding documentation</span>
                <span className="status-badge bg-alt">packaged migration assets</span>
                <span className="status-badge bg-alt">Salesforce-native auditability</span>
                <span className="status-badge bg-alt">KPIs and SLAs</span>
              </div>
            </section>

            <section id="approach">
              <h2>Approach</h2>
              <div className="case-study-timeline mt-4">
                <article>
                  <h3>1. Stabilize ownership</h3>
                  <p>Defined DevOps as a real function with clear accountability.</p>
                </article>
                <article>
                  <h3>2. Standardize recurring work</h3>
                  <p>Converted recurring project types, especially CPQ patterns, into repeatable delivery motion.</p>
                </article>
                <article>
                  <h3>3. Package reusable assets</h3>
                  <p>Built templates, migration bundles, playbooks, and onboarding resources to avoid project-by-project reinvention.</p>
                </article>
                <article>
                  <h3>4. Automate and audit deployments</h3>
                  <p>Replaced manual release flow with automated patterns and Salesforce-visible deployment records.</p>
                </article>
                <article>
                  <h3>5. Operationalize performance measurement</h3>
                  <p>Expanded KPIs into practical measures like deployment time, defect rate, turnaround, throughput, and MTTR.</p>
                </article>
              </div>
            </section>

            <section id="outcome">
              <h1>Outcome</h1>
              <ul className="case-study-list mt-4">
                <li>bookings scaled from roughly $200K to $2M annually</li>
                <li>practice headcount grew from 1 to 3</li>
                <li>~50 Salesforce consultants adopted the system as the primary path to production</li>
                <li>deployments that could take up to two days were reduced to minutes in many cases</li>
                <li>delivery became auditable, reportable, and less dependent on heroics</li>
              </ul>
              <div className="case-study-sidebar-grid mt-4">
                <aside className="case-study-sidebar-block">
                  <h3>What changed</h3>
                  <p>DevOps became a repeatable delivery system with reusable assets, auditability, and shared operating standards.</p>
                </aside>
                <aside className="case-study-sidebar-block">
                  <h3>What leadership gained</h3>
                  <p>A delivery capability that could scale, compete, and retain knowledge instead of losing it after each engagement.</p>
                </aside>
              </div>
            </section>

            <section id="why-it-mattered">
              <h2>Why It Mattered</h2>
              <p>The biggest win was not only faster releases. The biggest win was a delivery model that could scale with demand and hold quality across projects.</p>
              <div className="case-study-quote-callout mt-4">
                <p className="quote-mark">“</p>
                <blockquote>That is the difference between having a DevOps person and having a real DevOps practice.</blockquote>
              </div>
            </section>

            <section id="closing">
              <h2>Closing</h2>
              <p>When delivery depends on manual heroics, clients feel it long before leadership says it out loud. This work fixed that pattern at the systems level and turned a weak function into a repeatable delivery engine.</p>
            </section>

            <section id="recommended-pull-quotes">
              <h2>Recommended pull quotes to preserve</h2>
              <div className="case-study-quote-grid mt-4">
                <blockquote className="case-study-quote-tile">At first glance, this looked like a deployment problem. It wasn&apos;t. It was an operating model problem.</blockquote>
                <blockquote className="case-study-quote-tile">That is not a tooling issue. That is a systems issue.</blockquote>
                <blockquote className="case-study-quote-tile">We were not just speeding up releases. We were building the operating system behind a scalable delivery motion.</blockquote>
                <blockquote className="case-study-quote-tile">If delivery depends on heroics, it does not scale.</blockquote>
              </div>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
}
