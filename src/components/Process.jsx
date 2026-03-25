export default function Process() {
  const steps = [
    ["01", "Strategy Call", "Clarify constraints, priorities, leaks, and upside."],
    ["02", "Revenue Blueprint", "Map the systems, sequencing, and fastest wins."],
    ["03", "Done-For-You Buildout", "Implement, refine, and maintain the operating layer."],
  ];

  return (
    <section className="process-section border-y bg-alt">
      <div className="process-container">
        <div className="process-grid grid-2-uneven">
          <div className="process-intro">
            <div className="section-kicker text-orange">Process</div>
            <h2 className="section-title text-white mt-4">
              Strategy first. Build second. Revenue always.
            </h2>
            <p className="section-text mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.
            </p>
          </div>
          <div className="process-steps">
            {steps.map(([step, title, text]) => (
              <div key={step} className="step-card">
                <div className="step-badge">{step}</div>
                <div className="step-content">
                  <h3 className="step-title">{title}</h3>
                  <p className="step-desc">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
