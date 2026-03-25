export default function Proof() {
  const proofItems = [
    [
      "Audit / Teardown Example",
      "See how doublecli.cc identifies revenue leaks, process gaps, and missed follow-up opportunities inside a business."
    ],
    [
      "Revenue Systems Blueprint",
      "A look at how the right systems can turn messy sales and operations into a cleaner, more scalable growth engine."
    ],
    [
      "Case Study Placeholder",
      "Examples of how smarter systems, better sequencing, and AI-enabled automation can create measurable business upside."
    ]
  ];

  return (
    <section className="proof-section content-container">
      <div className="proof-grid grid-2-uneven-reverse">
        <div className="proof-intro">
          <div className="section-kicker"><span className="badge-dot" /> Proof / Signal</div>
          <h2 className="section-title text-white mt-4">
            Proof, teardowns, and systems thinking.
          </h2>
          <p className="section-text mt-6">
            doublecli.cc builds trust by showing the work: strategic breakdowns, example audits, operating logic, and real-world thinking around lead handling, sales enablement, content systems, and AI-enabled workflow design.
          </p>
        </div>
        <div className="proof-cards grid-3">
          {proofItems.map(([title, text], idx) => (
            <div key={idx} className="proof-card">
              <div className="proof-image-placeholder" />
              <div className="proof-card-content">
                <h3 className="proof-card-title">{title}</h3>
                <p className="proof-card-text text-sm">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
