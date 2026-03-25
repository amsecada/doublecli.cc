export default function CTA() {
  return (
    <section className="cta-section content-container pb-lg">
      <div className="cta-card">
        <div className="cta-glow-right" />
        <div className="cta-glow-left" />
        <div className="cta-grid relative z-10 grid-2-uneven">
          <div className="cta-content">
            <div className="section-kicker text-orange"><span className="badge-dot" /> Revenue Systems Audit</div>
            <h2 className="section-title text-white mt-4">
              If your business is growing, but the systems behind it are messy, doublecli.cc helps fix the gaps that cost you revenue.
            </h2>
            <p className="section-text mt-6">
              The best engagements usually start by finding the highest-friction, highest-value problems first. If leads are slipping, follow-up is inconsistent, or manual work is slowing growth, a Revenue Systems Audit is the fastest way to see where the money is actually leaking.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn-primary w-full sm:w-auto">Book Strategy Call</button>
            <button className="btn-secondary w-full sm:w-auto">Download Audit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
