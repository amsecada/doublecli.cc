import Layout from '../components/Layout';

export default function Solutions() {
  return (
    <Layout>
      <section className="content-container" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
        <div className="section-kicker">Solutions</div>
        <h1 className="section-title text-white">Our Service Offerings</h1>
        <p className="section-text mt-6 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <div className="grid-2">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-icon" />
              <h3 className="pillar-title">Solution {i + 1}</h3>
              <p className="pillar-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
