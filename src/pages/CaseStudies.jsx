import Layout from '../components/Layout';

export default function CaseStudies() {
  return (
    <Layout>
      <section className="content-container" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
        <div className="section-kicker">Proof and Signal</div>
        <h1 className="section-title text-white">Case Studies</h1>
        <p className="section-text mt-6 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
        </p>
        
        <div className="grid-2">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="proof-card" style={{ marginBottom: '2rem' }}>
              <div className="proof-image-placeholder" style={{ height: '14rem' }} />
              <div className="proof-card-content">
                <h3 className="proof-card-title">Client Success Story {i + 1}</h3>
                <p className="proof-card-text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <div className="mt-4 flex gap-4">
                  <span className="status-badge bg-alt">Revenue +140%</span>
                  <span className="status-badge bg-alt">Close Rate 2x</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
