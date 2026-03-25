export default function OfferPillars() {
  const cards = [
    { title: "Revenue Systems", text: "Design the operational layer behind growth so revenue is not dependent on memory, improvisation, or manual patchwork." },
    { title: "Lead Handling & Follow-Up", text: "Build systems that capture leads, route them properly, trigger follow-up, and reduce the number of opportunities that slip through the cracks." },
    { title: "Sales Enablement", text: "Tighten the way the business presents offers, handles conversations, supports the pipeline, and moves prospects toward a decision." },
    { title: "AI-Enabled Automation", text: "Use AI where it creates real leverage: reducing manual work, increasing consistency, and making important workflows faster and easier to maintain." },
  ];

  return (
    <section className="pillars-section content-container">
      <div className="pillars-header max-w-2xl text-left mb-12">
        <div className="section-kicker"><span className="badge-dot" /> Offer Pillars</div>
        <h2 className="section-title text-white">
          doublecli.cc finds the gaps, fixes the bottlenecks, and installs better systems.
        </h2>
        <p className="section-text mt-6">
          We start by identifying the painful, expensive, messy parts of the revenue process, then replace manual chaos with smarter workflows, automation, and AI-enabled systems designed to support real business growth.
        </p>
      </div>
      <div className="pillars-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="pillar-card">
            <div className="pillar-icon" />
            <h3 className="pillar-title">{card.title}</h3>
            <p className="pillar-text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
