import Layout from '../components/Layout';

export default function BookCall() {
  return (
    <Layout>
      <section className="content-container" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <div className="grid-2-uneven">
          <div>
            <div className="section-kicker text-orange">Action</div>
            <h1 className="section-title text-white">Book Your Strategy Call</h1>
            <p className="section-text mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            
            <div className="mt-12 space-y-6">
              <div className="step-card" style={{ padding: '1.25rem' }}>
                <div className="step-badge">1</div>
                <div>
                  <h3 className="text-white font-medium">Pick a Time</h3>
                  <p className="text-sm text-dim mt-1">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="step-card" style={{ padding: '1.25rem' }}>
                <div className="step-badge">2</div>
                <div>
                  <h3 className="text-white font-medium">Fill out the Form</h3>
                  <p className="text-sm text-dim mt-1">Consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="step-card" style={{ padding: '1.25rem' }}>
                <div className="step-badge">3</div>
                <div>
                  <h3 className="text-white font-medium">Show Up</h3>
                  <p className="text-sm text-dim mt-1">Sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="process-card" style={{ 
            background: 'var(--bg-card)', 
            border: '1px solid var(--border-subtle)', 
            borderRadius: '1.5rem',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '500px'
          }}>
            <div className="text-center">
              <h3 className="text-white text-xl font-medium mb-4">[Calendar Embed Placeholder]</h3>
              <p className="text-dim text-sm">Calendly or similar booking widget would load here.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
