'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';

const colors = {
  text: '#F5F0E9',
  accent: '#D4B89E',
  muted: '#B8A78F',
  bg: '#070604', // deeper cinematic black-brown
};

/* ✨ terminal now fully integrated into dark system */
const AboutTerminal = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(145deg, #120F0C, #1A1410)',
  color: colors.text,
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '28px',
  borderRadius: '18px',
  border: '1px solid rgba(212, 184, 158, 0.18)',
  boxShadow: '0 40px 120px rgba(0,0,0,0.65)',
  width: '100%',
  minHeight: '360px',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at top left, rgba(212,184,158,0.10), transparent 55%)',
    pointerEvents: 'none',
  },
});

export default function AboutSection() {
  return (
    <Box
      sx={{
        background: colors.bg,
        color: colors.text,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.accent,
              fontFamily: 'monospace',
              letterSpacing: '3px',
              fontSize: '13px',
              mb: 3,
              display: 'block',
            }}
          >
            ABOUT
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '36px', md: '52px' },
              fontWeight: 300,
              lineHeight: 1.15,
              color: colors.text,
              mb: 4,
            }}
          >
            Calm under{' '}
            <span style={{ color: colors.accent, fontStyle: 'italic' }}>
              pressure.
            </span>
            <br />
            Clear in complexity. Rooted in purpose.
          </Typography>

          <Typography
            sx={{
              fontSize: '17px',
              lineHeight: 1.9,
              color: colors.muted,
              maxWidth: '780px',
            }}
          >
            I bring technical depth and human-centered thinking to cybersecurity.
            From alert triage to cloud security and awareness systems, I focus on
            clarity, resilience, and systems that actually make sense for people.
          </Typography>
        </Box>

        {/* GRID */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            mb: 10,
          }}
        >
          <Box>
            <Typography sx={{ color: colors.accent, mb: 1 }}>
              What I do
            </Typography>
            <Typography sx={{ color: colors.muted, lineHeight: 1.9 }}>
              Translate complex risks into business clarity.<br />
              Design GRC + cloud security systems that actually work in real environments.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ color: colors.accent, mb: 1 }}>
              What I enjoy
            </Typography>
            <Typography sx={{ color: colors.muted, lineHeight: 1.9 }}>
              Building resilient systems • strengthening security culture •
              turning complexity into usable security.
            </Typography>
          </Box>
        </Box>

        {/* TERMINAL */}
        <AboutTerminal>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
              pb: 2,
              borderBottom: '1px solid rgba(212,184,158,0.2)',
            }}
          >
            <TerminalIcon sx={{ color: colors.accent }} />
            <Typography sx={{ color: colors.accent, fontSize: '14.5px' }}>
              ivy@cyblack:~#
            </Typography>
          </Box>

          <Typography
            component="pre"
            sx={{
              fontFamily: '"Ubuntu Mono", monospace',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#F3E6D6',
              whiteSpace: 'pre-wrap',
              position: 'relative',
              zIndex: 1,
            }}
          >
{`ivy@cyblack:~# configure --mode resilience
Applying GRC alignment...
Deploying cloud security controls...
Initializing awareness systems...

✔ Configuration complete

ivy@cyblack:~# system.status
security.human_factor = HIGH
risk_visibility = CLEAR
resilience_mode = ACTIVE

ivy@cyblack:~# echo "philosophy"
Calm analysis. Precise execution. Human-first security.
Security is not fear — it's clarity, trust, and structure.

ivy@cyblack:~# █`}
          </Typography>

        </AboutTerminal>

      </Container>
    </Box>
  );
}