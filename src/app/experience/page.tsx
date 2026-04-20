'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';
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
  padding: '24px',
  backdropFilter: 'blur(10px)',
  transition: '0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: colors.accent,
  },
});

const TimelineDot = styled(Box)({
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: colors.accent,
  boxShadow: '0 0 12px rgba(212,184,158,0.4)',
});

export default function ExperiencePage() {
  return (
    <>
      <TopNavBar />

      <PageWrapper>
        <Overlay />

        <Box sx={{ position: 'relative', zIndex: 2, color: colors.text }}>

          {/* HEADER */}
          <Box sx={{ px: { xs: 3, md: 8 }, py: 8 }}>
            <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 2 }}>
              // experience log
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 300, mb: 2 }}>
              Field <span style={{ color: colors.accent }}>Operations</span><br />
              & Security Evolution
            </Typography>

            <Typography sx={{ color: colors.muted, maxWidth: 600 }}>
              A timeline of real-world cybersecurity, software engineering, and risk exposure.
              Each role shaped my technical depth and human-centered security thinking.
            </Typography>
          </Box>

          {/* TIMELINE */}
          <Box sx={{ px: { xs: 3, md: 8 }, pb: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>

            {/* ───── CYBLACK ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                Jan 2026 – Apr 2026 · CyBlack
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Cybersecurity & Cloud Technology Intern
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Monitored enterprise security events using Microsoft Sentinel,
                contributed to incident response workflows, and supported Azure
                security hardening across client environments.
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                <Box>
                  <Typography sx={{ color: colors.accent, mb: 1 }}>Impact</Typography>
                  <Typography sx={{ color: colors.muted }}>
                    Reduced unresolved alert backlog by ~30% through structured triage and prioritization.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ color: colors.accent, mb: 1 }}>Skills Gained</Typography>
                  <Typography sx={{ color: colors.muted }}>
                    • Microsoft Sentinel SIEM<br />
                    • Azure Security Controls<br />
                    • Incident Response Workflows<br />
                    • Threat Intelligence Analysis<br />
                    • Security Monitoring & Triage
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* ───── KFS ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                Jan 2025 – Apr 2025 · Kenya Forest Service
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                ICT & Software Development Attaché
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Supported internal systems, contributed to frontend redesigns,
                and assisted in network security and Linux server administration
                for enterprise infrastructure.
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                <Box>
                  <Typography sx={{ color: colors.accent, mb: 1 }}>Impact</Typography>
                  <Typography sx={{ color: colors.muted }}>
                    Improved usability of internal tools and supported secure system operations for 200+ users.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ color: colors.accent, mb: 1 }}>Skills Gained</Typography>
                  <Typography sx={{ color: colors.muted }}>
                    • React Frontend Development<br />
                    • Linux System Administration<br />
                    • Network Security Fundamentals<br />
                    • Firewall & Endpoint Hardening<br />
                    • Enterprise IT Support Systems
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* ───── BOLTECH ───── */}
            <Card>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 1 }}>
                Nov 2024 – Dec 2024 · Boltech
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Security Awareness Game Developer
              </Typography>

              <Typography sx={{ color: colors.muted, mb: 3, lineHeight: 1.8 }}>
                Designed and built an interactive security awareness platform
                focused on phishing, password security, and social engineering
                with behavioral learning feedback systems.
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                <Box>
                  <Typography sx={{ color: colors.accent, mb: 1 }}>Impact</Typography>
                  <Typography sx={{ color: colors.muted }}>
                    Improved engagement in security awareness training through gamified learning systems.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ color: colors.accent, mb: 1 }}>Skills Gained</Typography>
                  <Typography sx={{ color: colors.muted }}>
                    • Security Awareness Design<br />
                    • UX for Security Education<br />
                    • Risk Communication Systems<br />
                    • Gamification in Cybersecurity<br />
                    • Behavioral Security Engineering
                  </Typography>
                </Box>
              </Box>
            </Card>

          </Box>

          <Footer />
        </Box>
      </PageWrapper>
    </>
  );
}