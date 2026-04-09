export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: 'sage' | 'blue' | 'amber' | 'pink';
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'what-grc-actually-means-2026',
    title: 'What GRC actually means in 2026',
    excerpt: 'Everyone talks about governance, risk, and compliance like it\'s a checkbox exercise. Here\'s why it\'s one of the most deeply human disciplines in security.',
    date: 'April 2026',
    readTime: '6 min read',
    tag: 'GRC',
    tagColor: 'sage',
    content: `
GRC stands for Governance, Risk, and Compliance — but if that's all it means to you, you're missing the point.

## GRC is a language, not a framework

When I joined CyBlack as a cybersecurity intern, one of the first things I noticed was how the GRC conversation shifted depending on who was in the room. With the technical team, we talked about control mapping and gap assessments. With the client's leadership, we talked about risk appetite and business continuity. Same underlying work — completely different vocabulary.

That's the real skill: translation. GRC professionals are interpreters between the technical world and the business world. And the better you get at reading the room, the more effective your security posture work becomes.

> The best GRC work I've done wasn't filling out a NIST matrix. It was sitting with a client and helping them understand *why* a particular control mattered to their specific context.

## The 2026 GRC landscape

With cloud-native environments now the norm, GRC has had to evolve beyond static compliance checklists. Continuous monitoring, automated policy enforcement, and real-time risk scoring are changing the game. Microsoft Sentinel, for example, isn't just a SIEM — it's a GRC tool if you use it right.

My work implementing Azure security controls across three client accounts taught me this firsthand. Aligning access management policies to CIS Controls and NIST CSF isn't an academic exercise — it's live governance in action.

## Where GRC is heading

The field is moving toward integrated risk management — where GRC, threat intelligence, and security operations converge. The professionals who will thrive are those who can hold the technical and the strategic simultaneously. That's the space I'm building toward.
    `,
  },
  {
    slug: 'microsoft-sentinel-lessons-from-the-field',
    title: 'Microsoft Sentinel: lessons from the field',
    excerpt: 'How I learned to love KQL and triage 800+ alerts without losing my mind — from a real production environment.',
    date: 'March 2026',
    readTime: '8 min read',
    tag: 'Cloud Security',
    tagColor: 'blue',
    content: `
Before my internship at CyBlack, I'd worked with Sentinel in labs. Academic setups. Carefully curated log sources, predictable alert volumes, clean data. Real production environments are a different universe.

## The first week: alert shock

The first time I looked at a live Sentinel workspace with hundreds of active alerts across multiple client tenants, my instinct was to triage everything immediately. That instinct is wrong, and it's one of the fastest paths to analyst burnout.

The better approach is structured: understand your alert taxonomy first. High-severity alerts that correlate across multiple data sources are your priority. Everything else gets a systematic workflow, not panic-driven attention.

> Alert fatigue is a design problem, not a discipline problem. If your team is drowning in noise, the answer is better KQL tuning — not more working hours.

## KQL queries that actually helped

\`\`\`kql
SecurityEvent
| where EventID == 4625
| summarize count() by Account
| where count_ > 10
| order by count_ desc
\`\`\`

Failed logon clustering is far more meaningful than individual failed logons. Behavioral patterns beat individual events almost every time.

## The 30% backlog reduction

Our team's contribution to a 30% reduction in unresolved alert backlog came from three things: structured triage workflows, better escalation criteria, and honest conversations with clients about which alerts actually mapped to their risk appetite. Not all alerts need human review — understanding that is a skill.
    `,
  },
  {
    slug: 'human-factor-cybersecurity',
    title: 'The human factor in cybersecurity',
    excerpt: 'The weakest link isn\'t the firewall or the endpoint — it\'s the people using them. Here\'s what the data shows.',
    date: 'February 2026',
    readTime: '5 min read',
    tag: 'Research',
    tagColor: 'amber',
    content: `
My research at CyBlack focused on something that technical security professionals sometimes resist acknowledging: the most sophisticated firewall in the world cannot protect against a well-crafted phishing email sent to the right person at the right moment.

## What the data shows

Across the organizations I studied, human-related vulnerabilities — phishing, weak authentication, insider behaviors — accounted for the vast majority of security incidents. This isn't a controversial finding. What is controversial is how the industry responds to it.

Too many organizations treat human factors as an inconvenience to be managed with policy. The more effective frame is to treat humans as security assets to be developed. These are fundamentally different orientations.

> Security awareness training that treats employees as the problem creates compliance theater. Training that treats employees as the solution creates genuine behavioral change.

## What actually works

The security awareness game I built at Boltech was designed around this principle. Rather than lecturing users about phishing, we put them in simulated scenarios where they experienced the consequences of poor decisions — and the satisfaction of making good ones.

Scoring and feedback mechanisms made progress visible and reinforced secure behaviors organically. This approach — behavioral security design — is where I see the most untapped potential in the field.
    `,
  },
  {
    slug: 'nairobi-to-the-world-global-cybersecurity-career',
    title: 'From Nairobi to the world: building a global cybersecurity career',
    excerpt: 'The challenges, opportunities, and skills that travel well across borders when building an international security career.',
    date: 'January 2026',
    readTime: '7 min read',
    tag: 'Career',
    tagColor: 'pink',
    content: `
There's a version of this post that's full of inspiration and optimism. That version isn't false — but it's incomplete. The honest version includes the specific challenges of building an international security career from Nairobi, alongside the very real opportunities.

## The skills that travel

Technical skills in cloud security and GRC are genuinely global. Microsoft Sentinel works the same way whether you're monitoring alerts in Nairobi or Amsterdam. NIST CSF maps the same controls regardless of geography. These are real equalizers.

Where things get harder is in the softer dimensions: networking, visibility, and the trust that comes from being physically present in the markets where opportunities cluster. Remote and hybrid work has helped — a lot — but hasn't eliminated these gaps.

> The most important career move I made was choosing internships that gave me production experience, not just certificate programs that gave me credentials without context.

## What I'm building toward

My goal is a role in Technology and Risk Consulting — ideally with an international firm where I can contribute across multiple client contexts and geographies. I believe the combination of African market experience and internationally recognized technical skills is genuinely valuable, not a compromise.

I'm open to relocation, and I'm actively building toward that next step. If you're reading this and you're hiring — I'd love to talk.
    `,
  },
  {
    slug: 'hardening-azure-grc-approach',
    title: 'Hardening Azure for clients: a practical GRC approach',
    excerpt: 'A walkthrough of the access management and compliance tracking work across three client accounts, and the GRC principles behind every decision.',
    date: 'December 2025',
    readTime: '9 min read',
    tag: 'Cloud Security',
    tagColor: 'blue',
    content: `
During my time at CyBlack, I had the opportunity to implement and strengthen security controls across three distinct client Azure environments. Each was different — different industries, different risk profiles, different existing postures. But the GRC approach that guided the work was consistent.

## Start with the risk conversation

Before touching a single Azure configuration, the most important work happens in a conversation. What does this organization actually care about protecting? What's their risk appetite? What regulatory environment are they operating in? The answers shape every technical decision that follows.

## Access management first

In every environment, access management was the highest-leverage starting point. Privileged identity management, conditional access policies, and role-based access control reviews consistently revealed over-permissioned accounts and stale access paths that represented real risk.

> Rule of least privilege isn't just a security principle — it's a GRC principle. Limiting access reduces audit scope, simplifies compliance tracking, and makes your security posture more defensible.

## Mapping to NIST

We used the NIST Cybersecurity Framework as our reference architecture for all three accounts, mapping Azure security controls to the Identify, Protect, Detect, Respond, and Recover functions. This gave clients a language for understanding their security posture that connected to their broader risk conversations.
    `,
  },
  {
    slug: 'blockchain-supply-chain-trust-fairtrace',
    title: 'Blockchain for supply chain trust: building FairTrace',
    excerpt: 'What building a cryptographic traceability system for agricultural supply chains taught me about trust, risk, and transparency at scale.',
    date: 'November 2025',
    readTime: '6 min read',
    tag: 'Research',
    tagColor: 'amber',
    content: `
FairTrace started as an academic project and became something I genuinely believe in. The problem it addresses — fraud and opacity in agricultural supply chains — is both a technology problem and a trust problem. And trust problems are, at their core, risk problems.

## Why blockchain for supply chains

The core property that makes blockchain valuable for supply chain traceability isn't the technology itself — it's immutability. When a transaction is logged on a distributed ledger, it cannot be quietly modified. Every step in a supply chain becomes an auditable, tamper-resistant record.

## The security design decisions

The most interesting technical work in FairTrace was the identity verification layer. We needed to ensure that the entity claiming to add a supply chain event was actually who they said they were — without creating a centralized identity system that would become a single point of failure.

> Cryptographic identity verification is elegant when it works and catastrophic when it doesn't. Key management is always the hard part — not the cryptography itself.

## What I learned about risk assurance

Building FairTrace taught me that technology can create the conditions for trust, but it can't manufacture trust itself. The farmers and buyers who use a traceability system still need to believe in the institutions that run it. That's a governance challenge, not an engineering one.
    `,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}
