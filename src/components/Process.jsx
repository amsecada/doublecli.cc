export default function Process() {
  const steps = [
    ["01", "Strategy Call", "We identify the bottlenecks, messy workflows, and revenue leaks that are creating friction inside the business."],
    ["02", "Revenue Blueprint", "We prioritize the systems most likely to create measurable upside first, especially in lead handling, follow-up, sales support, and repeatable output."],
    ["03", "Done-For-You Buildout", "We implement the workflows, automations, and operating layer needed to solve the problem, then support the system over time through ongoing improvement and monthly partnership."],
  ];

  return (
    <section className="process-section border-y bg-alt">
      <div className="process-container">
        <div className="process-grid grid-2-uneven">
          <div className="process-intro">
            <div className="section-kicker text-orange"><span className="badge-dot" /> Process</div>
            <h2 className="section-title text-white mt-4">
              Strategy first. Build second. Revenue always.
            </h2>
            <p className="section-text mt-6">
              doublecli.cc does not start with random tools or shiny demos. We start with the business problem, the revenue opportunity, and the process gaps that need to be fixed first.
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
