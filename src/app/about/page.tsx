'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';
import { SectionLabel, Tag } from '@/components';
import { experience, skills, certifications } from '@/data/portfolio';
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

/* ✨ TERMINAL (same contact vibe) */
const AboutTerminal = styled(Paper)({
  background: 'linear-gradient(145deg, rgba(15,12,10,0.85), rgba(20,16,12,0.85))',
  color: colors.text,
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '32px',
  borderRadius: '16px',
  border: `1px solid ${colors.border}`,
  boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
  backdropFilter: 'blur(10px)',
  width: '100%',
  minHeight: '360px',
});

export default function AboutPage() {
  return (
    <>
      <TopNavBar />

      {/* 🌑 SAME CONTACT-STYLE BACKGROUND */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(10,8,6,0.92), rgba(10,8,6,0.78))',
            zIndex: 1,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 2, color: colors.text }}>

          {/* ───────── HEADER ───────── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            {/* LEFT */}
            <Box sx={{ px: 6, py: 8 }}>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 2 }}>
                // about me
              </Typography>

              <Typography variant="h2" sx={{ fontWeight: 300, mb: 3 }}>
                Calm under <span style={{ color: colors.accent }}>pressure.</span><br />
                Clear in complexity.
              </Typography>

              <Typography sx={{ color: colors.muted, lineHeight: 1.85, mb: 2 }}>
                I bring technical depth and human-centered thinking to cybersecurity.
              </Typography>

              <Typography sx={{ color: colors.muted, lineHeight: 1.85 }}>
                Based in Nairobi. GRC • Cloud Security • Risk Engineering.
              </Typography>
            </Box>

            {/* RIGHT — CERTIFICATIONS (FIXED NO BLUE EVER AGAIN 😤) */}
            <Box sx={{ px: 6, py: 8 }}>
              <Typography sx={{ color: colors.accent, fontFamily: 'monospace', mb: 3 }}>
                // education & certifications
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: 20, mb: 1 }}>
                  BSc Computer Networks & Cybersecurity
                </Typography>
                <Typography sx={{ color: colors.accent, mb: 2 }}>
                  Strathmore University · 2022 – 2026
                </Typography>
                <Typography sx={{ color: colors.muted, lineHeight: 1.7 }}>
                  Network Security, Cloud Security, Cryptography, Ethical Hacking
                </Typography>
              </Box>

              {/* 🔥 FULL DARK GLASS CERT CARDS (NO BLUE, NO WHITE) */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                {certifications.map((c) => (
                  <Box
                    key={c.name}
                    component="a"
                    href={c.url || '#'}
                    target="_blank"
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      p: 2,
                      borderRadius: 2,
                      textDecoration: 'none',

                      /* SAME VIBE AS CONTACT LINKS */
                      background: 'rgba(10,8,6,0.35)',
                      backdropFilter: 'blur(10px)',

                      border: `1px solid ${colors.border}`,
                      transition: '0.3s',

                      color: colors.text, // 🔥 IMPORTANT: kills default blue links

                      '&:hover': {
                        borderColor: colors.accent,
                        transform: 'translateY(-2px)',
                        background: 'rgba(10,8,6,0.5)',
                      },
                    }}
                  >
                    {/* ICON BLOCK (NO BLUE, ONLY WARM GOLD GLOW) */}
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 1,
                        background: 'rgba(212,184,158,0.10)',
                        border: '1px solid rgba(212,184,158,0.15)',
                      }}
                    />

                    <Box>
                      <Typography sx={{ fontSize: 13, color: colors.text }}>
                        {c.name}
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: colors.muted }}>
                        {c.issuer} · {c.year}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* ───────── TERMINAL ───────── */}
          <Box sx={{ px: 6, py: 8 }}>
            <AboutTerminal elevation={0}>
              <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
                <TerminalIcon sx={{ color: colors.accent }} />
                <Typography sx={{ color: colors.accent }}>
                  ivy@portfolio:~#
                </Typography>
              </Box>

              <Typography component="pre" sx={{ color: '#EDE4D8', fontSize: 15 }}>
{`whoami
Cybersecurity builder & student

status
→ GRC • Cloud • Risk Engineering
→ Nairobi based

philosophy
Calm analysis. Precise execution. Human-first security.`}
              </Typography>
            </AboutTerminal>
          </Box>

          {/* EXPERIENCE */}
          <Box sx={{ px: 6, py: 6, borderTop: `1px solid ${colors.border}` }}>
            <SectionLabel>work experience</SectionLabel>

            {experience.map((e, idx) => (
              <Box key={idx} sx={{ display: 'grid', gridTemplateColumns: '120px 20px 1fr', mb: 5 }}>
                <Typography sx={{ color: colors.muted, fontSize: 12 }}>
                  {e.period}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colors.accent }} />
                </Box>

                <Box>
                  <Typography sx={{ color: colors.accent }}>{e.company}</Typography>
                  <Typography sx={{ fontSize: 18 }}>{e.title}</Typography>
                  <Typography sx={{ color: colors.muted }}>{e.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* SKILLS */}
          <Box sx={{ px: 6, py: 6 }}>
            <SectionLabel>core skills</SectionLabel>

            {skills.map((g) => (
              <Box key={g.category} sx={{ mb: 4 }}>
                <Typography sx={{ color: colors.muted, mb: 2 }}>
                  {g.category}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {g.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: 20,
                        background: 'rgba(10,8,6,0.35)',
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <Typography sx={{ fontSize: 12, color: colors.text }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Footer />
        </Box>
      </Box>
    </>
  );
}