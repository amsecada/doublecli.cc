export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot" />
          Revenue Systems / AI-Enabled Growth Infrastructure
        </div>
        <h1 className="hero-title">
          Revenue systems for service businesses tired of winging growth.
        </h1>
        <p className="hero-subtitle">
          doublecli.cc helps service businesses create more revenue by fixing broken lead handling, weak follow-up, manual processes, and operational bottlenecks with smarter systems and AI-enabled automation.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">Book a Strategy Call</button>
          <button className="btn-secondary">See How It Works</button>
        </div>

        <div className="hero-features">
          {[
            ["01", "Lead handling"],
            ["02", "Sales process"],
            ["03", "AI leverage"],
          ].map(([num, label]) => (
            <div key={num} className="feature-card">
              <div className="feature-num">{num}</div>
              <div className="feature-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow" />
        <div className="visual-card">
          <div className="snapshot-card">
            <div className="snapshot-header">
              <div>
                <div className="snapshot-subtitle">System Snapshot</div>
                <div className="snapshot-title">Revenue Blueprint</div>
              </div>
              <div className="status-badge">Live</div>
            </div>

            <div className="snapshot-metrics">
              {[
                ["Lead Intake", "82%"],
                ["Follow-Up", "43%"],
                ["Pipeline Clarity", "67%"],
                ["Automation Readiness", "58%"],
              ].map(([label, value], i) => (
                <div key={label} className="metric-row">
                  <div className="metric-labels">
                    <span className="metric-name">{label}</span>
                    <span className="metric-value">{value}</span>
                  </div>
                  <div className="progress-bg">
                    <div
                      className={`progress-fill ${i === 1 ? "accent-orange" : "accent-violet"}`}
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="snapshot-stats">
              <div className="stat-box">
                <div className="stat-label">Opportunity</div>
                <div className="stat-value">$42k</div>
                <div className="stat-desc">Potential recovered revenue</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Primary Leak</div>
                <div className="stat-value">Inconsistent follow-up</div>
                <div className="stat-desc">Leads are coming in, but the system behind them is too manual and too inconsistent to convert efficiently.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
