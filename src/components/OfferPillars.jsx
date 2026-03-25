export default function OfferPillars() {
  const cards = [
    { title: "Lead Systems", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus luctus." },
    { title: "Sales Enablement", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer posuere erat." },
    { title: "Client Nurturing", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
    { title: "AI Operations", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
  ];

  return (
    <section className="pillars-section content-container">
      <div className="pillars-header max-w-2xl text-left mb-12">
        <div className="section-kicker">Offer pillars</div>
        <h2 className="section-title text-white">
          Lorem ipsum blocks for the actual service categories.
        </h2>
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
