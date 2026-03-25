export default function Proof() {
  const proofItems = [
    "Audit / teardown example",
    "Revenue systems blueprint",
    "Case study placeholder",
  ];

  return (
    <section className="proof-section content-container">
      <div className="proof-grid grid-2-uneven-reverse">
        <div className="proof-intro">
          <div className="section-kicker">Proof / signal</div>
          <h2 className="section-title text-white mt-4">
            The trust-building block.
          </h2>
          <p className="section-text mt-6">
            This section can be case studies, teardowns, strategic essays, screenshots, or sample deliverables.
          </p>
        </div>
        <div className="proof-cards grid-3">
          {proofItems.map((item, idx) => (
            <div key={idx} className="proof-card">
              <div className="proof-image-placeholder" />
              <div className="proof-card-content">
                <h3 className="proof-card-title">{item}</h3>
                <p className="proof-card-text text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
