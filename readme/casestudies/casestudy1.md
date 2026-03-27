## Recommended Flow 

Title, subtitle, hero image, 3–4 stat boxes

Executive summary + client context + at-a-glance sidebar

What was actually broken + why this was hard + pull quote

What we led + approach + problem/intervention/result panel

Before/after panel + risk removed panel + savings panel

Why it mattered + outcome summary + quiet CTA

# Case Study - KAR Auction Services

# Case Study

# Restoring Trust in Commercial Data After Acquisition

### Subtitle

A case study in Salesforce consolidation, visibility governance, and post-acquisition systems cleanup.

## Executive Summary

After a major acquisition, a large automotive remarketing business was left with three separate Salesforce orgs, conflicting account structures, duplicate records, fragmented reporting, and no trusted technical owner who could connect the business to the system.

At first glance, this looked like a CRM problem.

It wasn’t.

It was a trust problem.

The company relied on Salesforce for account visibility, opportunity history, reporting, ownership, and commission-adjacent truth. But the environment had become fragmented enough that people no longer trusted the system to tell them what was real.

Over 12 weeks, we led the reconciliation of data from three separate Salesforce orgs into a single intermediate-state environment used for governance modeling and structural cleanup. The scope included roughly 40,000 accounts, 115,000 contacts, 60,000 opportunities, 500 to 1,000 campaigns, around 200 custom objects, and roughly 300 roles, profiles, and permission structures.

The result was a governed intermediate environment that preserved critical business relationships, created a usable foundation for reporting and visibility, reduced backend platform spend by more than 80%, and gave the business a credible path toward future-state consolidation.

---

## Client Context

This engagement took place before 2019, during an acquisition-era integration effort inside a large automotive remarketing enterprise. Public filings from that period show KAR operating across major business segments including ADESA, IAA, and AFC before IAA was separated into an independent public company in June 2019.

For this case study, the client is anonymized.

What matters is the operating reality: a large, multi-entity commercial environment spanning salvage and auction-related business lines, with systems shaped by history, acquisition activity, and overlapping commercial operations.

Instead of one clean commercial system, the company was running three separate Salesforce orgs:

- a mid-tier salvage business network
- a large-scale auction business
- another large-scale auction business

Each org had been shaped by different teams, different assumptions, different rules, and different habits.

That made the environment expensive to maintain, hard to govern, and increasingly hard to trust.

---

## The Trigger

The business needed a path toward consolidation.

At the same time, there was a quiet loss of confidence in the old technical guard responsible for the backend of the project. The company had commercial operators who understood the business. What it did not have was a trusted technical team that could take messy enterprise reality and turn it into migration logic that would actually hold up.

That was the gap we were brought in to close.

This was not about moving records for the sake of neatness. It was about creating a structure the business could actually trust.

---

## What Was Actually Broken

The visible problem was system fragmentation.

The real problem was that nobody fully trusted the system that was supposed to govern visibility, reporting, ownership, and the data sitting too close to commission-related truth.

Across the three orgs, the company was dealing with:

- duplicate accounts
- broken continuity across business units
- fragmented campaign history
- cross-subsidiary opportunity blind spots
- conflicting assumptions about ownership
- reporting nobody fully believed
- internal tension around who should be allowed to see what

There were already multiple cases where duplicate accounts had surfaced.

That mattered because once duplicate records start appearing across business units, people stop arguing about software and start arguing about which version of the business is real.

When a CRM sits close to the revenue function, trust becomes the product. Once people stop trusting the system, the software stops being infrastructure and starts becoming a liability.

---

## Why This Was Difficult

A lot of people talk about migrations like they are just data shuffling.

That is not what this was.

The hard part was not moving records from one Salesforce org to another. The hard part was preserving commercial meaning while the architecture underneath it changed.

For example, whether a sales executive from one legacy org should be able to see an account from another legacy org is not just a permissions question. It is a business governance question. It affects ownership, visibility, reporting, internal politics, and confidence in the system.

The client owned the final hierarchy and visibility framework inside the intermediate environment.

Our job was to make sure those relationships survived the migration intact.

That meant the migration had to be technically correct, commercially aware, and disciplined enough not to break the business logic underneath the data.

---

## Scope

This was a large, highly customized Salesforce environment.

Approximate scope included:

- **40,000 accounts**
- **115,000 contacts**
- **60,000 opportunities**
- **500–1,000 campaigns**
- **~10,000 users / licenses**
- **~200 custom objects**
- **~300 roles, profiles, and permission structures**

The target was not a final production org.

It was an intermediate-state Salesforce environment used for two purposes:

- reconciliation
- governance redesign

That distinction matters.

The goal was not to dump records into a new org and pretend the problem was solved. The goal was to create a controlled environment where the business could normalize data, configure future-state governance, and regain trust before bigger downstream decisions were made.

---

## Why Us

We were brought in because this required more than basic Salesforce familiarity.

It required a team that understood Salesforce from the ground up and knew how to automate the hard parts without breaking the business logic underneath the data.

That combination mattered here.

The project did not need someone who could merely move records. It needed someone who could translate messy business reality into technical order of operations and then execute it cleanly.

---

## What We Led

We structured the migration order of operations required to take data from three separate Salesforce orgs and move it into one intermediate-state environment without breaking the relationships the business depended on.

That work included:

- auditing the legacy orgs
- mapping fields across inconsistent schemas
- reconciling object structures
- defining deduplication logic
- sequencing the migration
- validating the result
- preserving configured relationships after the client established hierarchy and sharing rules

The client owned the role and profile redesign, along with the final hierarchy and sharing model.

Our responsibility was to ensure the migration respected that structure and preserved the right relationships once the move happened.

That is the difference between a migration that merely completes and a migration the business can actually rely on.

---

## Approach

The work followed a deliberate sequence.

### 1. Audit the source environments

We started by establishing what actually existed across the three orgs: overlapping records, schema drift, object dependencies, duplication, and the structural inconsistencies that would create problems later if they were left unresolved.

### 2. Reconcile fields and objects

The data models had evolved separately. Before the environments could live inside one governed structure, those models had to be translated into something coherent.

### 3. Apply deduplication logic

A consolidated environment only creates value if it reduces ambiguity. Deduplication logic helped create a cleaner view of accounts and relationships before the data landed.

### 4. Sequence the migration

This was one of the most important parts of the engagement. In a large Salesforce environment, the order of migration determines whether relationships survive. Accounts, contacts, opportunities, campaigns, and dependent objects had to move in the right sequence or the resulting structure would not be reliable.

### 5. Preserve configured governance relationships

Once the client configured the hierarchy and visibility model inside the intermediate environment, the migration had to honor that structure. Our role was to make sure those relationships held after the move.

### 6. Validate the result

The final step was making sure the intermediate environment was more than a technical container. It had to function as a trustworthy governance and reconciliation layer for the combined business.

---

## Outcome

By the end of the 12-week engagement, the client had:

- reconciled three legacy Salesforce orgs into one governed intermediate-state model
- established a cleaner foundation for enterprise visibility
- made standardized reporting possible
- reduced administrative complexity
- created a viable path toward future-state consolidation

Most importantly, leadership got **one single dashboard, one pane of glass**, for the business.

On direct budget alone, retiring legacy licenses represented roughly **$15,760 per month** in savings, based on the retired-license estimate you provided. In addition, using a conservative operating assumption of one hour per week per affected user previously spent cross-checking systems, the consolidation points to roughly **3,000 hours per month** of reclaimed administrative time, or about **$75,000 per month** at a $25 hourly wage. That second figure should be presented as a directional efficiency estimate, not as a hard audited savings claim.

Just as important, the project reduced the risk of:

- broken account-contact-opportunity relationships
- duplicate records distorting pipeline visibility
- reporting corruption across merged environments
- incorrect permissions exposing the wrong accounts
- continued internal distrust in the system used to support commercial decision-making

---

## Why It Mattered

The biggest win was not the license savings.

The biggest win was that the business regained a believable path toward commercial truth.

Before this engagement, Salesforce reflected the fragmentation of the organization. After it, leadership had a governed reconciliation model that could support cleaner visibility, more defensible reporting, and a more rational future-state structure.

That changed the role of the system.

Instead of being a pile of legacy environments held together by habit, it became the beginning of an actual operating model.

That is the difference between CRM cleanup and real systems work.

---

## Closing

When businesses grow through acquisition, the problem is rarely just messy software.

Usually the deeper issue is that nobody fully trusts the system responsible for visibility, reporting, ownership, and commercial truth.

This engagement was about more than consolidation.

It was about restoring trust in the operating system behind the revenue function.

---

## Recommended pull quotes to preserve

These are the lines I’d keep intact because they carry the voice and the positioning:

- **At first glance, this looked like a CRM problem. It wasn’t. It was a trust problem.**
- **Once duplicate records start appearing across business units, people stop arguing about software and start arguing about which version of the business is real.**
- **When a CRM sits close to the revenue function, trust becomes the product.**
- **The goal was not to dump records into a new org and pretend the problem was solved.**
- **That is the difference between a migration that merely completes and a migration the business can actually rely on.**
- **That is the difference between CRM cleanup and real systems work.**

The next clean move is turning this into a **page-by-page PDF script** so each section becomes design-ready copy blocks.

# Pulled Quotes / Sidebar Thingies
# Design-ready add-ons for Case Study 1

## Restoring Trust in Commercial Data After Acquisition

### Subtitle

A case study in Salesforce consolidation, visibility governance, and post-acquisition systems cleanup.

---

## Cover stat box options

Use 3–4 of these on page 1.

**Option A**  
**3 legacy orgs**  
Reconciled into 1 governed intermediate-state model

**Option B**  
**12 weeks**  
To structure and execute the reconciliation effort

**Option C**  
**40,000 accounts**  
Normalized across a multi-entity enterprise environment

**Option D**  
**$15,760/month**  
Estimated direct license-related savings

**Option E**  
**One pane of glass**  
Leadership regained a unified view of the business

**Option F**  
**80%+ reduction**  
In backend platform spend

---

## Scope stat grid

This works well as a clean 2-column or 3-column block.

**40,000**  
Accounts

**115,000**  
Contacts

**60,000**  
Opportunities

**500–1,000**  
Campaigns

**~200**  
Custom objects

**~300**  
Roles / profiles / permission structures

---

## Big-number callouts

These are for oversized moments in the PDF.

**3**  
Legacy Salesforce orgs reconciled

**12**  
Weeks to build the governed intermediate-state model

**80%+**  
Reduction in backend platform spend

**$15,760 / month**  
Estimated direct savings from retired licenses

**~3,000 hours / month**  
Potential manual cross-checking time avoided

**One**  
Unified dashboard / pane of glass for leadership

---

## Pull quotes

These are the lines worth protecting visually.

**“At first glance, this looked like a CRM problem. It wasn’t. It was a trust problem.”**

**“Once duplicate records start appearing across business units, people stop arguing about software and start arguing about which version of the business is real.”**

**“When a CRM sits close to the revenue function, trust becomes the product.”**

**“The goal was not to dump records into a new org and pretend the problem was solved.”**

**“That is the difference between a migration that merely completes and a migration the business can actually rely on.”**

**“That is the difference between CRM cleanup and real systems work.”**

---

## Sidebar blocks

These are the right-rail / inset text pieces that make the document feel smarter and more editorial.

### What the business thought it had

Three Salesforce orgs supporting three operating environments.

### What the business actually had

Three competing versions of commercial truth.

### What made the problem dangerous

The system sat too close to visibility, reporting, and commission-adjacent reality to be wrong.

### What leadership needed

One governed view of the business they could actually trust.

### What made this difficult

The migration had to preserve business relationships, not just move records.

### What the intermediate org really was

Not a dumping ground. A controlled reconciliation and governance layer.

### What was at risk

Duplicate accounts, broken visibility, bad permissions, reporting corruption, and internal distrust.

### Why this mattered

Once trust breaks inside the commercial system, the software stops being infrastructure and starts becoming a liability.

---

## “At a glance” sidebar

This is useful as a compact summary box.

**Client**  
Large automotive remarketing enterprise

**Situation**  
Post-acquisition Salesforce fragmentation

**Primary issue**  
Low trust in visibility, reporting, and account structure

**Engagement length**  
12 weeks

**Primary work**  
Data reconciliation and migration sequencing

**Main outcome**  
Governed intermediate-state model with unified visibility

---

## Problem / intervention / result panel

This is one of the strongest visual devices for the PDF.

### Problem

Three disconnected Salesforce orgs, duplicate accounts, fragmented reporting, cross-subsidiary blind spots, and a system people no longer trusted.

### Intervention

A structured migration order of operations designed to reconcile data, preserve configured relationships, and create a governed intermediate-state environment for visibility and reporting.

### Result

A unified model leadership could trust, direct license-related savings, lower administrative drag, and a credible path toward future-state consolidation.

---

## Before / after panel copy

### Before

- three disconnected Salesforce orgs
- duplicate accounts across business units
- fragmented campaign history
- weak cross-subsidiary visibility
- reporting nobody fully trusted
- internal disputes around ownership and access
- expensive legacy overhead
- no single commercial source of truth

### After

- one governed intermediate-state model
- normalized account and relationship structure
- preserved hierarchy and sharing logic
- standardized reporting foundation
- one pane of glass for leadership
- lower platform and admin burden
- clearer path to future-state consolidation
- more believable commercial truth

---

## “What was actually broken” panel

This is great as a boxed section.

The visible problem was CRM sprawl.

The real problem was that the business no longer trusted the system responsible for visibility, reporting, ownership, and data tied too closely to commission-related confidence.

That changed the stakes. This was not cleanup. It was a systems trust problem.

---

## “Why this was hard” panel

Another good inset box.

Most migration projects are framed as record movement.

This one was different.

The hard part was preserving commercial meaning while the architecture changed underneath it. Visibility, ownership, hierarchy, and reporting all had to survive the move intact.

---

## “Why us” panel

This is useful if you want the PDF to quietly sell without sounding like a brochure.

We were brought in because this required more than basic Salesforce familiarity. It required a team that understood Salesforce from the ground up and knew how to automate and structure the hard parts without breaking the business logic underneath the data.

---

## Short insight callouts

These work as little quote cards or narrow bars between sections.

**System fragmentation was the symptom. Trust failure was the problem.**

**A technically correct migration can still fail if it breaks visibility, ownership, or reporting confidence.**

**In acquisition environments, CRM complexity is usually governance complexity wearing a software costume.**

**The point was not to consolidate data. The point was to restore trust in the system behind the revenue function.**

---

## Smart subheads

These make the piece feel more premium and less brochure-y.

- The system had become too fragmented to trust
- The acquisition exposed the fault lines
- Duplicate records made the problem visible
- The migration had to preserve more than records
- Governance had to survive the move
- One pane of glass changed the conversation
- Cost savings mattered, but trust was the real win

---

## Risk removed panel

This is especially good near the outcome section.

### Risks reduced

- broken account-contact-opportunity relationships
- duplicate records distorting visibility
- reporting corruption across merged environments
- incorrect permissions exposing the wrong accounts
- continued internal distrust in the system

### What that meant

Less confusion, less political tension, fewer visibility disputes, and a more credible operating model for leadership.

---

## Savings panel

Use this carefully, with the distinction between hard and directional estimates.

### Direct savings

**~$15,760 / month**  
Estimated direct license-related savings from retiring legacy environments

### Directional efficiency estimate

**~3,000 hours / month**  
Potential manual cross-checking time avoided

**~$75,000 / month**  
Directional labor-value estimate at $25/hour

Small note for the designer or footnote:  
**Present the labor-value figure as an internal operating estimate, not an audited financial claim.**

---

## Outcome summary block

This can sit near the end as a concise wrap-up.

By the end of the engagement, the client had:

- reconciled three legacy Salesforce orgs into one governed model
- made standardized reporting possible
- reduced administrative complexity
- improved leadership visibility across business units
- lowered platform spend
- created a believable path toward future-state consolidation

Most importantly, leadership got one single dashboard — one pane of glass for the business.

---

## Quiet CTA options

Choose based on how aggressive you want the piece to feel.

**Option A**  
Complex CRM problems are rarely just CRM problems.

**Option B**  
When visibility, ownership, and reporting stop agreeing, the issue is no longer software hygiene. It is operational risk.

**Option C**  
We help businesses rebuild trust in the systems their revenue depends on.

**Option D**  
If the system behind the revenue function is fragmented, the business will eventually feel it.

---

