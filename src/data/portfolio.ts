export const me = {
  name: 'Ivy Mutanu Kiley',
  title: 'Cybersecurity Graduate · Aspiring Risk Consultant',
  location: 'Nairobi, Kenya',
  email: 'imkiley2003@gmail.com',
  phone: '+254 708 835 355',
  linkedin: 'https://linkedin.com/in/ivy-kiley',
  github: 'https://github.com/Kileyydev',
  bio: 'Computer networks & cybersecurity graduate building at the intersection of GRC, cloud security, and risk advisory. I translate technical complexity into business clarity — with calm and precision.',
  longBio: `I bring technical depth and human-centered thinking to every problem. Whether I'm triaging Sentinel alerts across client environments or designing behavioral risk platforms, my approach is always grounded: understand the people, understand the risk, then build something that actually works.

I'm a Strathmore University Computer Networks & Cybersecurity graduate (class of 2026), based in Nairobi and open to international opportunities. I specialize in GRC, cloud security, and risk advisory — with a deep passion for making security accessible to organizations of every size.`,
};

export const stats = [
  { num: '30%', label: 'Sentinel backlog reduced' },
  { num: '200+', label: 'Gov. users administered' },
  { num: '15+', label: 'Threat scenarios documented' },
  { num: '4', label: 'Industry certifications' },
];

export const experience = [
  {
    company: 'CyBlack',
    title: 'Cybersecurity & Cloud Technology Intern',
    period: 'Jan – Apr 2026',
    location: 'Remote',
    description: 'Monitored enterprise security alerts via Microsoft Sentinel across client environments, contributing to a 30% reduction in unresolved alert backlog. Implemented Azure security controls across 3 client accounts. Contributed to incident response playbooks, GRC initiatives, and threat intelligence programs.',
    tags: ['Sentinel', 'Azure', 'GRC', 'Threat Intel', 'Ethical Hacking'],
  },
  {
    company: 'Kenya Forest Service',
    title: 'ICT & Software Development Attaché',
    period: 'Jan – Apr 2025',
    location: 'Nairobi',
    description: 'Redesigned KFS public-facing website in React & Tailwind. Administered Linux servers for 200+ government users with patch cycles and access hardening. Assisted in evaluating firewall configurations and endpoint protection.',
    tags: ['React', 'Linux', 'System Hardening', 'Network Security', 'Tailwind CSS'],
  },
  {
    company: 'Boltech',
    title: 'Security Awareness Game Developer',
    period: 'Nov – Dec 2024',
    location: '',
    description: 'Built an interactive security awareness app covering phishing, password hygiene, and social engineering with scoring mechanisms to measure and reinforce secure behaviors.',
    tags: ['Security Awareness', 'UX', 'Web Dev', 'Incident Advisory'],
  },
  {
    company: 'Boltech',
    title: 'Incident Readiness Research Intern',
    period: 'Oct – Nov 2024',
    location: '',
    description: 'Researched 15+ cyber threat scenarios including phishing, ransomware, and malware. Developed incident readiness assessments identifying gaps in client incident handling processes.',
    tags: ['Incident Response', 'Research', 'Advisory', 'Threat Scenarios'],
  },
];

export const projects = [
  {
    num: '01',
    slug: 'risk-platform',
    title: 'Cybersecurity Awareness & Risk Consulting Platform',
    description: 'Human-centered platform with GRC-aligned phishing simulations, behavioral risk scoring, and organizational security reporting.',
    longDescription: 'Designing and developing a cybersecurity awareness and consulting-focused platform aimed at improving organizational security culture through human-centered risk education and simulated threat scenarios. Building interactive modules covering phishing awareness, password hygiene, social engineering, and insider threat risks.',
    tags: ['Python', 'GRC', 'Risk Analytics', 'Web Tech'],
    category: 'security',
    status: 'ongoing',
    dark: true,
  },
  {
    num: '02',
    slug: 'fraud-detection',
    title: 'Cyber Risk Analytics — Financial Fraud Detection',
    description: 'Anomaly detection pipeline with risk visualization dashboards for financial threat response.',
    longDescription: 'Developed a data-driven risk analytics solution to identify potential fraudulent financial transactions. Analyzing patterns and anomalies to support early detection of high-risk activity and potential financial threats. Building risk visualization outputs to support decision-making.',
    tags: ['Python', 'Scikit-learn', 'PostgreSQL', 'Risk Analytics'],
    category: 'data',
  },
  {
    num: '03',
    slug: 'fairtrace',
    title: 'FairTrace — Agricultural Blockchain Supply Chain',
    description: 'Tamper-resistant agricultural traceability using cryptographic identity and smart contracts.',
    longDescription: 'Designed a blockchain-based system focused on improving transparency, reducing fraud risk, and enhancing supply chain trust. Implemented secure identity verification and tamper-resistant transaction logging.',
    tags: ['Python', 'Blockchain', 'Smart Contracts', 'Web Security'],
    category: 'blockchain',
  },
  {
    num: '04',
    slug: 'insider-threat',
    title: 'Insider Threat Risk Detection Dashboard',
    description: 'SIEM-inspired risk monitoring for insider threats via behavioral and log-based analysis.',
    longDescription: 'Developed a risk monitoring solution to identify insider threats through behavioral and log-based analysis. Designed dashboards for visibility of user activity patterns and potential security anomalies. Supported early-stage SIEM concepts.',
    tags: ['Django', 'Next.js', 'Material UI', 'PostgreSQL'],
    category: 'security',
    wide: true,
  },
  {
    num: '05',
    slug: 'kfs-website',
    title: 'KFS Website Redesign',
    description: 'Modern React & Tailwind redesign of Kenya Forest Service public website.',
    longDescription: 'Redesigned and redeveloped the KFS public-facing website using React and Tailwind CSS, modernizing the digital presence for a platform serving thousands of government stakeholders.',
    tags: ['React', 'Tailwind CSS', 'Gov. Tech'],
    category: 'dev',
  },
  {
    num: '06',
    slug: 'security-game',
    title: 'Security Awareness Game',
    description: 'Interactive phishing & social engineering training app for organizational security culture.',
    longDescription: 'Designed and built an interactive security awareness web application covering phishing detection, password hygiene, and social engineering. Implemented scoring and feedback mechanisms enabling measurable tracking of user awareness levels.',
    tags: ['JavaScript', 'Security Awareness', 'UX'],
    category: 'security',
  },
];

export const skills = [
  { category: 'cloud & infrastructure', items: ['Microsoft Azure', 'AWS', 'Docker', 'VMware', 'VirtualBox', 'CI/CD Pipelines'] },
  { category: 'grc & security', items: ['NIST CSF', 'ISO 27001', 'CIS Controls', 'Microsoft Sentinel', 'Splunk', 'Ethical Hacking', 'Incident Response'] },
  { category: 'development', items: ['Python', 'React', 'Django', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Scikit-learn'] },
  { category: 'networking & os', items: ['Linux Admin & Hardening', 'TCP/IP', 'DNS', 'VPNs', 'Firewalls', 'VLANs', 'IDS/IPS', 'Windows'] },
];

export const certifications = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', year: 'Jul 2025', url: 'https://www.credly.com/earner/earned/badge/afb4d6b5-48d1-4074-9ba4-ac8dc772f4e3' },
  { name: 'AWS Academy Cloud Security Foundations', issuer: 'Amazon Web Services', year: 'Jul 2025', url: 'https://www.credly.com/earner/earned/badge/6bd73008-9163-4f8c-a1a2-0e71c0935a57' },
  { name: 'CCNA Routing & Switching', issuer: 'Cisco Networking Academy', year: 'Oct 2023', url: 'https://www.credly.com/earner/earned/badge/f6d76dec-7e0e-4cda-9f1d-c05146340278' },
  { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', year: 'Sep 2023', url: 'https://www.credly.com/earner/earned/badge/a29a2cc0-444a-445a-86e3-70ea14911835' },
];
