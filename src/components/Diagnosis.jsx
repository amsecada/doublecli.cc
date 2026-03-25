export default function Diagnosis() {
  return (
    <section className="diagnosis-section border-y">
      <div className="diagnosis-container">
        <div className="diagnosis-grid">
          <div className="diagnosis-intro">
            <div className="section-kicker">Diagnosis</div>
            <h2 className="section-title text-white">
              Most businesses don’t have a lead problem. They have a systems problem.
            </h2>
          </div>
          <div className="diagnosis-points grid-2">
            {[
              "Leads arrive, then disappear into the cracks.",
              "Follow-up depends on memory instead of process.",
              "Sales conversations are inconsistent and hard to scale.",
              "Owners become the bottleneck for every growth decision.",
            ].map((item, idx) => (
              <div key={idx} className="diagnosis-card">
                <div className="diagnosis-icon" />
                <p className="diagnosis-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
