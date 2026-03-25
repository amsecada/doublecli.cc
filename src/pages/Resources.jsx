import Layout from '../components/Layout';

export default function Resources() {
  return (
    <Layout>
      <section className="content-container" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
        <div className="section-kicker text-orange">Free Assets</div>
        <h1 className="section-title text-white">Resources & Downloads</h1>
        <p className="section-text mt-6 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
        
        <div className="grid-3">
          {["Revenue Audit Template", "Cold Email Sequences", "Sales Script Teardown", "Objection Handling Guide", "Lead Gen Cheatsheet", "AI Prompt Library"].map((item, i) => (
            <div key={i} className="feature-card flex flex-col justify-between" style={{ minHeight: '12rem' }}>
              <div>
                <div className="feature-icon mb-4" style={{ height: '2rem', width: '2rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.1)' }} />
                <h3 className="feature-label text-white text-lg font-medium">{item}</h3>
                <p className="text-sm text-dim mt-2 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
                </p>
              </div>
              <button className="btn-secondary w-full mt-6" style={{ padding: '0.5rem' }}>Download PDF</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
