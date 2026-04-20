'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TopNavBar from '../homepage/components/TopNavBar';
import Footer from '../homepage/components/Footer';

const colors = {
  bgOverlay: 'rgba(10,8,6,0.92)',
  card: 'rgba(10,8,6,0.45)',
  text: '#F5F0E9',
  accent: '#D4A88A',
  muted: 'rgba(245,240,233,0.65)',
  border: 'rgba(212, 184, 158, 0.18)',
};

const PageWrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: "url('/images/contact-bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  position: 'relative',
});

const Overlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(to right, rgba(10,8,6,0.94), rgba(10,8,6,0.78))',
});

const Card = styled(Paper)({
  background: 'rgba(10,8,6,0.35)',
  border: '1px solid rgba(212,184,158,0.18)',
  borderRadius: '16px',
  padding: '26px',
  backdropFilter: 'blur(10px)',
  transition: '0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: colors.accent,
  },
});

export default function ProjectsPage() {
  return (
    <>
      <TopNavBar />

      <PageWrapper>
        <Overlay />

        <Box sx={{ position: 'relative', zIndex: 2, color: colors.text }}>

          {/* HEADER */}
          <Box sx={{ px: { xs: 3, md: 8 }, py: 8 }}>
            <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 2 }}>
              // projects archive
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 300, mb: 2 }}>
              Systems I've <span style={{ color: colors.accent }}>designed</span><br />
              & built from scratch
            </Typography>

            <Typography sx={{ color: colors.muted, maxWidth: 650 }}>
              A collection of cybersecurity, risk engineering, blockchain, and AI-driven systems
              focused on real-world impact, not just prototypes.
            </Typography>
          </Box>

          {/* PROJECT GRID */}
          <Box
            sx={{
              px: { xs: 3, md: 8 },
              pb: 10,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >

            {/* ───── PROJECT 1 ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                01 · Cybersecurity Awareness Platform
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Risk & Phishing Simulation System
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Built an interactive platform that simulates phishing attacks and tracks user behavior
                to improve organizational security awareness.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent, mb: 0.5 }}>Problem</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Employees lacked practical exposure to phishing and social engineering threats.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent, mb: 0.5 }}>Solution</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Gamified simulation system with behavioral scoring and risk tracking.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent, mb: 0.5 }}>Impact</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Improved user awareness and security decision-making behavior.
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ color: colors.accent, mb: 0.5 }}>Skills Gained</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Security Awareness Design • Risk Modeling • UX for Security • Behavioral Analytics
                </Typography>
              </Box>
            </Card>

            {/* ───── PROJECT 2 ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                02 · Fraud Detection System
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Cyber Risk Analytics Engine
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Designed a detection system for identifying anomalous financial transactions using
                pattern-based risk analysis.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Problem</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Fraudulent transactions often bypass traditional rule-based systems.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Solution</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Risk scoring engine to flag anomalies and suspicious behavior patterns.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Impact</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Improved detection accuracy and reduced false negatives.
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ color: colors.accent }}>Skills Gained</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Data Analysis • Risk Scoring Systems • Anomaly Detection • Security Analytics
                </Typography>
              </Box>
            </Card>

            {/* ───── PROJECT 3 ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                03 · Blockchain Supply Chain System
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                FairTrace Transparency Platform
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Developed a blockchain-based system for tracking supply chain integrity and preventing
                tampering of records.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Problem</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Lack of transparency and traceability in supply chains.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Solution</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Immutable ledger system for transaction and product tracking.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Impact</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Increased trust and auditability in data records.
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ color: colors.accent }}>Skills Gained</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Blockchain Concepts • Smart Contracts • Distributed Systems • Data Integrity
                </Typography>
              </Box>
            </Card>

            {/* ───── PROJECT 4 ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                04 · Insider Threat Dashboard
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Behavioral Security Monitoring System
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Built a dashboard that visualizes user behavior patterns to detect insider threats
                in enterprise environments.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Problem</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Insider threats are difficult to detect using traditional perimeter security.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Solution</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Behavior monitoring dashboard inspired by SIEM systems.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: colors.accent }}>Impact</Typography>
                <Typography sx={{ color: colors.muted }}>
                  Improved visibility into abnormal user activity patterns.
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ color: colors.accent }}>Skills Gained</Typography>
                <Typography sx={{ color: colors.muted }}>
                  SIEM Concepts • Behavioral Monitoring • Security Dashboards • Risk Detection Systems
                </Typography>
              </Box>
            </Card>

          </Box>

          <Footer />
        </Box>
      </PageWrapper>
    </>
  );
}