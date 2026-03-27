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
  { label: 'Pulled Quotes', href: '#pulled-quotes' },
];

const coverStats = [
  { value: '3 legacy orgs', label: 'Reconciled into 1 governed intermediate-state model' },
  { value: '12 weeks', label: 'To structure and execute the reconciliation effort' },
  { value: '40,000 accounts', label: 'Normalized across a multi-entity enterprise environment' },
  { value: '$15,760/month', label: 'Estimated direct license-related savings' },
  { value: 'One pane of glass', label: 'Leadership regained a unified view of the business' },
  { value: '80%+ reduction', label: 'In backend platform spend' },
];

const scopeStats = [
  ['40,000', 'Accounts'],
  ['115,000', 'Contacts'],
  ['60,000', 'Opportunities'],
  ['500–1,000', 'Campaigns'],
  ['~10,000', 'Users / licenses'],
  ['~200', 'Custom objects'],
  ['~300', 'Roles, profiles, and permission structures'],
];

const pullQuotes = [
  'At first glance, this looked like a CRM problem. It wasn’t. It was a trust problem.',
  'Once duplicate records start appearing across business units, people stop arguing about software and start arguing about which version of the business is real.',
  'When a CRM sits close to the revenue function, trust becomes the product.',
  'The goal was not to dump records into a new org and pretend the problem was solved.',
  'That is the difference between a migration that merely completes and a migration the business can actually rely on.',
  'That is the difference between CRM cleanup and real systems work.',
];

export default function CaseStudyKAR() {
  return (
    <Layout>
      <section className="content-container case-study-template case-study-kar" style={{ paddingTop: '8rem' }}>
        <div className="case-study-title-card case-study-kar-hero">
          <div className="section-kicker"><span className="badge-dot" />Case Study · Enterprise Systems</div>
          <p className="case-study-eyebrow">Case Study - KAR Auction Services (Anonymized)</p>
          <h1 className="section-title">Restoring Trust in Commercial Data After Acquisition</h1>
          <p className="section-text case-study-subheading">
            A case study in Salesforce consolidation, visibility governance, and post-acquisition systems cleanup.
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
              <p>
                After a major acquisition, a large automotive remarketing business was left with three separate Salesforce
                orgs, conflicting account structures, duplicate records, fragmented reporting, and no trusted technical
                owner who could connect the business to the system.
              </p>
              <p className="mt-4">At first glance, this looked like a CRM problem.</p>
              <p>It wasn’t.</p>
              <p>It was a trust problem.</p>
              <p className="mt-4">
                The company relied on Salesforce for account visibility, opportunity history, reporting, ownership, and
                commission-adjacent truth. But the environment had become fragmented enough that people no longer trusted
                the system to tell them what was real.
              </p>
              <p className="mt-4">
                Over 12 weeks, we led the reconciliation of data from three separate Salesforce orgs into a single
                intermediate-state environment used for governance modeling and structural cleanup. The scope included
                roughly 40,000 accounts, 115,000 contacts, 60,000 opportunities, 500 to 1,000 campaigns, around 200
                custom objects, and roughly 300 roles, profiles, and permission structures.
              </p>
              <p className="mt-4">
                The result was a governed intermediate environment that preserved critical business relationships, created a
                usable foundation for reporting and visibility, reduced backend platform spend by more than 80%, and gave
                the business a credible path toward future-state consolidation.
              </p>
            </section>

            <section id="client-context">
              <h2>Client Context</h2>
              <p>
                This engagement took place before 2019, during an acquisition-era integration effort inside a large
                automotive remarketing enterprise. Public filings from that period show KAR operating across major business
                segments including ADESA, IAA, and AFC before IAA was separated into an independent public company in June
                2019.
              </p>
              <p className="mt-4">For this case study, the client is anonymized.</p>
              <p>
                What matters is the operating reality: a large, multi-entity commercial environment spanning salvage and
                auction-related business lines, with systems shaped by history, acquisition activity, and overlapping
                commercial operations.
              </p>
              <p className="mt-4">Instead of one clean commercial system, the company was running three separate Salesforce orgs:</p>
              <ul className="case-study-list mt-4">
                <li>a mid-tier salvage business network</li>
                <li>a large-scale auction business</li>
                <li>another large-scale auction business</li>
              </ul>
              <p className="mt-4">
                Each org had been shaped by different teams, different assumptions, different rules, and different habits.
              </p>
              <p>
                That made the environment expensive to maintain, hard to govern, and increasingly hard to trust.
              </p>
            </section>

            <section id="the-trigger">
              <h2>The Trigger</h2>
              <p>The business needed a path toward consolidation.</p>
              <p className="mt-4">
                At the same time, there was a quiet loss of confidence in the old technical guard responsible for the
                backend of the project. The company had commercial operators who understood the business. What it did not
                have was a trusted technical team that could take messy enterprise reality and turn it into migration logic
                that would actually hold up.
              </p>
              <p className="mt-4">That was the gap we were brought in to close.</p>
              <p>
                This was not about moving records for the sake of neatness. It was about creating a structure the business
                could actually trust.
              </p>
            </section>

            <section id="what-was-actually-broken">
              <h2>What Was Actually Broken</h2>
              <p>
                The visible problem was system fragmentation.
              </p>
              <p className="mt-4">
                The real problem was that nobody fully trusted the system that was supposed to govern visibility, reporting,
                ownership, and the data sitting too close to commission-related truth.
              </p>
              <p className="mt-4">Across the three orgs, the company was dealing with:</p>
              <ul className="case-study-list mt-4">
                <li>duplicate accounts</li>
                <li>broken continuity across business units</li>
                <li>fragmented campaign history</li>
                <li>cross-subsidiary opportunity blind spots</li>
                <li>conflicting assumptions about ownership</li>
                <li>reporting nobody fully believed</li>
                <li>internal tension around who should be allowed to see what</li>
              </ul>
              <p className="mt-4">There were already multiple cases where duplicate accounts had surfaced.</p>
              <p>
                That mattered because once duplicate records start appearing across business units, people stop arguing
                about software and start arguing about which version of the business is real.
              </p>
              <div className="case-study-quote-callout mt-4">
                <p className="quote-mark">“</p>
                <blockquote>
                  When a CRM sits close to the revenue function, trust becomes the product. Once people stop trusting the
                  system, the software stops being infrastructure and starts becoming a liability.
                </blockquote>
              </div>
            </section>

            <section id="why-this-was-difficult">
              <h2>Why This Was Difficult</h2>
              <p>A lot of people talk about migrations like they are just data shuffling.</p>
              <p className="mt-4">That is not what this was.</p>
              <p className="mt-4">
                The hard part was not moving records from one Salesforce org to another. The hard part was preserving
                commercial meaning while the architecture underneath it changed.
              </p>
              <p className="mt-4">
                For example, whether a sales executive from one legacy org should be able to see an account from another
                legacy org is not just a permissions question. It is a business governance question. It affects ownership,
                visibility, reporting, internal politics, and confidence in the system.
              </p>
              <p className="mt-4">
                The client owned the final hierarchy and visibility framework inside the intermediate environment.
              </p>
              <p>
                Our job was to make sure those relationships survived the migration intact.
              </p>
              <p className="mt-4">
                That meant the migration had to be technically correct, commercially aware, and disciplined enough not to
                break the business logic underneath the data.
              </p>
            </section>

            <section id="scope">
              <h2>Scope</h2>
              <p>This was a large, highly customized Salesforce environment.</p>
              <p className="mt-4">Approximate scope included:</p>
              <div className="case-study-scope-grid mt-4">
                {scopeStats.map(([value, label]) => (
                  <article key={label} className="case-study-scope-stat">
                    <p>{value}</p>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
              <p className="mt-4">The target was not a final production org.</p>
              <p>It was an intermediate-state Salesforce environment used for two purposes:</p>
              <ul className="case-study-list mt-4">
                <li>reconciliation</li>
                <li>governance redesign</li>
              </ul>
              <p className="mt-4">That distinction matters.</p>
              <p>
                The goal was not to dump records into a new org and pretend the problem was solved. The goal was to create
                a controlled environment where the business could normalize data, configure future-state governance, and
                regain trust before bigger downstream decisions were made.
              </p>
            </section>

            <section id="why-us">
              <h2>Why Us</h2>
              <p>
                We were brought in because this required more than basic Salesforce familiarity.
              </p>
              <p className="mt-4">
                It required a team that understood Salesforce from the ground up and knew how to automate the hard parts
                without breaking the business logic underneath the data.
              </p>
              <p className="mt-4">That combination mattered here.</p>
              <p>
                The project did not need someone who could merely move records. It needed someone who could translate messy
                business reality into technical order of operations and then execute it cleanly.
              </p>
            </section>

            <section id="what-we-led">
              <h2>What We Led</h2>
              <p>
                We structured the migration order of operations required to take data from three separate Salesforce orgs
                and move it into one intermediate-state environment without breaking the relationships the business depended
                on.
              </p>
              <p className="mt-4">That work included:</p>
              <div className="case-study-pill-row mt-4">
                <span className="status-badge bg-alt">auditing the legacy orgs</span>
                <span className="status-badge bg-alt">mapping fields across inconsistent schemas</span>
                <span className="status-badge bg-alt">reconciling object structures</span>
                <span className="status-badge bg-alt">defining deduplication logic</span>
                <span className="status-badge bg-alt">sequencing the migration</span>
                <span className="status-badge bg-alt">validating the result</span>
                <span className="status-badge bg-alt">preserving configured relationships</span>
              </div>
              <p className="mt-4">
                The client owned the role and profile redesign, along with the final hierarchy and sharing model.
              </p>
              <p>
                Our responsibility was to ensure the migration respected that structure and preserved the right
                relationships once the move happened.
              </p>
              <div className="case-study-quote-callout mt-4">
                <p className="quote-mark">“</p>
                <blockquote>
                  That is the difference between a migration that merely completes and a migration the business can
                  actually rely on.
                </blockquote>
              </div>
            </section>

            <section id="approach">
              <h2>Approach</h2>
              <p>The work followed a deliberate sequence.</p>
              <div className="case-study-timeline mt-4">
                <article>
                  <h3>1. Audit the source environments</h3>
                  <p>
                    We started by establishing what actually existed across the three orgs: overlapping records, schema
                    drift, object dependencies, duplication, and the structural inconsistencies that would create problems
                    later if they were left unresolved.
                  </p>
                </article>
                <article>
                  <h3>2. Reconcile fields and objects</h3>
                  <p>
                    The data models had evolved separately. Before the environments could live inside one governed
                    structure, those models had to be translated into something coherent.
                  </p>
                </article>
                <article>
                  <h3>3. Apply deduplication logic</h3>
                  <p>
                    A consolidated environment only creates value if it reduces ambiguity. Deduplication logic helped create
                    a cleaner view of accounts and relationships before the data landed.
                  </p>
                </article>
                <article>
                  <h3>4. Sequence the migration</h3>
                  <p>
                    This was one of the most important parts of the engagement. In a large Salesforce environment, the
                    order of migration determines whether relationships survive. Accounts, contacts, opportunities,
                    campaigns, and dependent objects had to move in the right sequence or the resulting structure would not
                    be reliable.
                  </p>
                </article>
                <article>
                  <h3>5. Preserve configured governance relationships</h3>
                  <p>
                    Once the client configured the hierarchy and visibility model inside the intermediate environment, the
                    migration had to honor that structure. Our role was to make sure those relationships held after the
                    move.
                  </p>
                </article>
                <article>
                  <h3>6. Validate the result</h3>
                  <p>
                    The final step was making sure the intermediate environment was more than a technical container. It had
                    to function as a trustworthy governance and reconciliation layer for the combined business.
                  </p>
                </article>
              </div>
            </section>

            <section id="outcome">
              <h1>Outcome</h1>
              <p>By the end of the 12-week engagement, the client had:</p>
              <ul className="case-study-list mt-4">
                <li>reconciled three legacy Salesforce orgs into one governed intermediate-state model</li>
                <li>established a cleaner foundation for enterprise visibility</li>
                <li>made standardized reporting possible</li>
                <li>reduced administrative complexity</li>
                <li>created a viable path toward future-state consolidation</li>
              </ul>
              <p className="mt-4">
                Most importantly, leadership got <strong>one single dashboard, one pane of glass</strong>, for the business.
              </p>
              <div className="case-study-sidebar-grid mt-4">
                <aside className="case-study-sidebar-block">
                  <h3>Direct Budget</h3>
                  <p>
                    On direct budget alone, retiring legacy licenses represented roughly <strong>$15,760 per month</strong>{' '}
                    in savings, based on the retired-license estimate.
                  </p>
                </aside>
                <aside className="case-study-sidebar-block">
                  <h3>Directional Efficiency Estimate</h3>
                  <p>
                    Using a conservative operating assumption of one hour per week per affected user previously spent
                    cross-checking systems, consolidation points to roughly <strong>3,000 hours per month</strong> of reclaimed
                    administrative time, or about <strong>$75,000 per month</strong> at a $25 hourly wage. This is presented
                    as directional, not as a hard audited savings claim.
                  </p>
                </aside>
              </div>
              <p className="mt-4">Just as important, the project reduced the risk of:</p>
              <ul className="case-study-list mt-4">
                <li>broken account-contact-opportunity relationships</li>
                <li>duplicate records distorting pipeline visibility</li>
                <li>reporting corruption across merged environments</li>
                <li>incorrect permissions exposing the wrong accounts</li>
                <li>continued internal distrust in the system used to support commercial decision-making</li>
              </ul>
            </section>

            <section id="why-it-mattered">
              <h2>Why It Mattered</h2>
              <p>The biggest win was not the license savings.</p>
              <p className="mt-4">The biggest win was that the business regained a believable path toward commercial truth.</p>
              <p className="mt-4">
                Before this engagement, Salesforce reflected the fragmentation of the organization. After it, leadership had
                a governed reconciliation model that could support cleaner visibility, more defensible reporting, and a
                more rational future-state structure.
              </p>
              <p className="mt-4">That changed the role of the system.</p>
              <p>
                Instead of being a pile of legacy environments held together by habit, it became the beginning of an actual
                operating model.
              </p>
              <div className="case-study-quote-callout mt-4">
                <p className="quote-mark">“</p>
                <blockquote>That is the difference between CRM cleanup and real systems work.</blockquote>
              </div>
            </section>

            <section id="closing">
              <h2>Closing</h2>
              <p>When businesses grow through acquisition, the problem is rarely just messy software.</p>
              <p className="mt-4">
                Usually the deeper issue is that nobody fully trusts the system responsible for visibility, reporting,
                ownership, and commercial truth.
              </p>
              <p className="mt-4">This engagement was about more than consolidation.</p>
              <p>It was about restoring trust in the operating system behind the revenue function.</p>
            </section>

            <section id="pulled-quotes">
              <h2>Recommended pull quotes to preserve</h2>
              <p>
                These lines are preserved on-page as they carry the voice and positioning for the case study.
              </p>
              <div className="case-study-quote-grid mt-4">
                {pullQuotes.map((quote) => (
                  <blockquote key={quote} className="case-study-quote-tile">
                    {quote}
                  </blockquote>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
}
