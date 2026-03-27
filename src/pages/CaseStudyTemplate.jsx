import Layout from '../components/Layout';

const tocItems = [
  { label: 'Executive Overview', href: '#executive-overview' },
  { label: 'Operating Context', href: '#operating-context' },
  { label: 'Intervention Design', href: '#intervention-design' },
  { label: 'Implementation Timeline', href: '#implementation-timeline' },
  { label: 'Performance Outcomes', href: '#performance-outcomes' },
  { label: 'System Notes', href: '#system-notes' },
];

export default function CaseStudyTemplate() {
  return (
    <Layout>
      <section className="content-container case-study-template" style={{ paddingTop: '8rem' }}>
        <div className="case-study-title-card">
          <div className="section-kicker"><span className="badge-dot" />Case Study Whitepaper</div>
          <p className="case-study-eyebrow">Atlas Home Services · Revenue Systems Rebuild</p>
          <h1 className="section-title">From Lead Leakage to Compounding Revenue</h1>
          <p className="section-text case-study-subheading">
            A longform implementation narrative showing how intake design, follow-up infrastructure, and execution rhythm
            were rebuilt to improve close velocity and forecast confidence.
          </p>
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
            <section id="executive-overview">
              <h1>Executive Overview</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus varius arcu, a posuere nibh
                finibus vitae. Curabitur pharetra, quam in ultricies elementum, eros massa convallis massa, non faucibus
                lectus lorem at justo. Sed vulputate justo vel posuere tincidunt. Vivamus bibendum in nibh a sodales.
              </p>

              <div className="case-study-quote-callout">
                <p className="quote-mark">“</p>
                <blockquote>
                  Quote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et elit suscipit, varius purus
                  sed, tincidunt ipsum.
                </blockquote>
                <p className="quote-attribution">— Operations Director, Atlas Home Services</p>
              </div>
            </section>

            <section id="operating-context">
              <h2>Operating Context</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo eu nibh posuere volutpat.
                Phasellus quis eros est. Duis tincidunt luctus augue, sed porttitor felis iaculis non. In malesuada,
                nibh at volutpat gravida, lorem purus consectetur nunc, sed egestas felis risus eu sem.
              </p>
              <h3>Known Friction Points</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada sem et lectus sagittis,
                vulputate efficitur arcu posuere. Aliquam erat volutpat. Pellentesque quis erat et sem posuere ultricies.
              </p>
            </section>

            <section id="intervention-design">
              <h2>Intervention Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum, augue at aliquet aliquam, augue
                velit gravida arcu, in mattis odio ex sed est. Integer iaculis auctor magna, vel facilisis nunc blandit
                quis. Maecenas gravida consequat turpis, vitae tincidunt tortor porttitor non.
              </p>

              <div className="case-study-big-number">
                <p className="big-number">140%</p>
                <p className="big-number-caption">
                  Increase in attributable monthly revenue after rebuilding intake and lead recovery sequences.
                </p>
              </div>
            </section>

            <section id="implementation-timeline">
              <h2>Implementation Timeline</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend sem vel sem molestie, at cursus
                dui faucibus. Morbi posuere turpis nec elit aliquet malesuada. Pellentesque id libero magna. Sed
                vestibulum risus sed feugiat blandit.
              </p>
              <h3>Week-by-Week Deployment Rhythm</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, lorem vel volutpat tincidunt,
                lectus justo semper quam, vitae commodo augue enim in justo. Suspendisse sagittis dui magna, quis feugiat
                est aliquam nec.
              </p>
            </section>

            <section id="performance-outcomes">
              <h1>Performance Outcomes</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas leo sit amet ex hendrerit, non
                varius lectus placerat. Nunc faucibus arcu quis magna tristique, at lobortis augue viverra.
              </p>

              <div className="case-study-sidebar-grid">
                <aside className="case-study-sidebar-block">
                  <h3>PIPELINE RELIABILITY</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non diam ac mi porttitor posuere vitae
                    sed nunc.
                  </p>
                </aside>
                <aside className="case-study-sidebar-block">
                  <h3>FOLLOW-UP CADENCE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet dictum turpis, in pulvinar
                    velit.
                  </p>
                </aside>
              </div>
            </section>

            <section id="system-notes">
              <h2>System Notes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor augue vel turpis viverra, in
                efficitur massa congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Suspendisse potenti.
              </p>
              <h3>Operator Guidance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra consectetur mauris, et volutpat
                magna ullamcorper in. Sed vitae tincidunt neque, sit amet convallis sapien. In ac neque sed lectus
                convallis auctor.
              </p>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
}
