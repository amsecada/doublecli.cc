import React from 'react';
import Layout from '../components/Layout';

export default function Products() {
  const products = [
    {
      phase: "01",
      title: "Revenue Systems Audit",
      subtitle: "Find the gaps, friction, and revenue leaks inside your current operating process.",
      bestFor: "Businesses that know something is broken but are not sure what to fix first.",
      includes: [
        "Process gap analysis",
        "Lead flow review",
        "Follow-up review",
        "Bottleneck identification",
        "Automation opportunity mapping",
        "Prioritized action plan"
      ],
      outcome: "A clear picture of what is costing revenue and what should be fixed first."
    },
    {
      phase: "02",
      title: "Lead Flow Engine",
      subtitle: "Build a cleaner, faster system for capturing, routing, and following up with opportunities.",
      bestFor: "Businesses with leads coming in but inconsistent follow-up or weak internal process.",
      includes: [
        "Lead intake audit",
        "Routing logic",
        "Follow-up workflows",
        "Reminders and automations",
        "CRM structure recommendations",
        "Missed-opportunity recovery logic"
      ],
      outcome: "Fewer dropped leads, faster response, and more consistent follow-up."
    },
    {
      phase: "03",
      title: "Sales Enablement System",
      subtitle: "Make the business easier to sell by improving the process around offers, conversations, and conversion.",
      bestFor: "Businesses that get interest but lack a consistent process for moving people toward a decision.",
      includes: [
        "Sales process review",
        "Conversion friction analysis",
        "Supporting sales assets",
        "Nurture logic",
        "Reactivation opportunities",
        "Communication system improvements"
      ],
      outcome: "A more organized, more repeatable path from interest to closed business."
    },
    {
      phase: "04",
      title: "AI Ops Layer",
      subtitle: "Install AI-enabled automation and repeatable workflows that reduce manual work and support long-term growth.",
      bestFor: "Businesses ready to expand beyond revenue fixes into deeper operational leverage.",
      includes: [
        "Automation planning",
        "AI workflow design",
        "Repetitive task reduction",
        "Internal process support",
        "Content systemization",
        "Ongoing improvement and maintenance"
      ],
      outcome: "Less manual drag, more leverage, and a stronger operating layer behind the business."
    }
  ];

  return (
    <Layout>
      <div className="content-container">
        {/* Page Header */}
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <div className="badge" style={{ margin: "0 auto 1.5rem" }}>
            <div className="badge-dot" /> Systems we Install
          </div>
          <h1 className="hero-title" style={{ fontSize: "3rem", margin: "0 auto" }}>
            Products & Core Pathways
          </h1>
          <p className="hero-subtitle" style={{ margin: "1.5rem auto 0", maxWidth: "48rem" }}>
            We build and maintain revenue systems for service businesses. Our implementations move sequentially from finding leaks, to capturing flow, to enabling sales, and finally operational leverage.
          </p>
        </div>

        {/* Product Modules Grid */}
        <div className="grid-2" style={{ gap: "2rem" }}>
          {products.map((product, idx) => (
            <div key={idx} className="visual-card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Kicker */}
              <div className="section-kicker">
                <span className="badge-dot" /> PHASE {product.phase}
              </div>

              {/* Title & Sub */}
              <div>
                <h2 style={{ fontSize: "1.875rem", fontWeight: 600, margin: "0 0 0.5rem 0", color: "rgba(255,255,255,0.95)" }}>
                  {product.title}
                </h2>
                <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                  {product.subtitle}
                </p>
              </div>

              {/* Best For */}
              <div style={{ padding: "1rem", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "1rem", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-orange)", marginBottom: "0.25rem", fontWeight: 600 }}>
                  Best For
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                  {product.bestFor}
                </div>
              </div>

              {/* Includes List */}
              <div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: "0.75rem", fontWeight: 600 }}>
                  Includes
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem", gridTemplateColumns: "1fr 1fr" }}>
                  {product.includes.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                      <svg style={{ width: "1rem", height: "1rem", color: "var(--accent-violet)", flexShrink: 0, marginTop: "0.1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome Banner */}
              <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-violet)", marginBottom: "0.25rem", fontWeight: 600 }}>
                  Outcome
                </div>
                <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", fontWeight: 500, lineHeight: 1.5 }}>
                  {product.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
