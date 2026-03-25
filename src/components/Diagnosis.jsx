export default function Diagnosis() {
  return (
    <section className="diagnosis-section border-y">
      <div className="diagnosis-container">
        <div className="diagnosis-grid">
          <div className="diagnosis-intro">
            <div className="section-kicker"><span className="badge-dot" /> Diagnosis</div>
            <h2 className="section-title text-white">
              Most service businesses do not have a lead problem. They have a systems problem.
            </h2>
            <p className="section-text mt-6">
              Revenue gets lost when follow-up is inconsistent, sales depends on memory, content is built from scratch every time, and important workflows stay manual longer than they should. doublecli.cc helps identify those gaps and replace them with systems that are easier to run, easier to scale, and easier to justify financially.
            </p>
          </div>
          <div className="diagnosis-points grid-2">
            {[
              [
                "Leads come in, then go cold.",
                "Without a reliable process, opportunities sit too long, get missed, or disappear entirely."
              ],
              [
                "Follow-up depends on people remembering.",
                "When sales activity lives in someone’s head instead of a system, revenue becomes fragile."
              ],
              [
                "Content creation is slow and chaotic.",
                "Teams waste time reinventing assets instead of using repeatable systems that scale output."
              ],
              [
                "The owner becomes the operating system.",
                "If growth only works when the owner is manually holding everything together, the business is leaking time and money."
              ],
            ].map(([title, desc], idx) => (
              <div key={idx} className="diagnosis-card">
                <div className="diagnosis-icon" />
                <h3 className="text-white font-medium mb-2">{title}</h3>
                <p className="diagnosis-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
