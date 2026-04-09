'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useRouter } from 'next/navigation';

const colors = {
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  text: '#1C2B27',
  muted: '#5A6E68',
  glass: 'rgba(248, 246, 242, 0.92)',
};

const GlossyCard = styled(Paper)({
  background: colors.glass,
  backdropFilter: 'blur(32px)',
  WebkitBackdropFilter: 'blur(32px)',
  border: '1px solid rgba(42, 107, 90, 0.18)',
  boxShadow: '0 25px 80px rgba(20, 184, 166, 0.12)',
  borderRadius: '20px',
  overflow: 'hidden',
});

const TerminalBox = styled(Box)({
  backgroundColor: '#0A0F0C',
  color: '#98C379',
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '26px',
  borderRadius: '10px',
  border: '1px solid #1F2A24',
  minHeight: '340px',
});

export default function Home() {
  const router = useRouter();

  const navItems = [
    { label: 'About', route: '#about' },
    { label: 'Experience', route: '#experience' },
    { label: 'Projects', route: '#projects' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: colors.lightBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 3, md: 6 },
      }}
    >
      <GlossyCard
        sx={{
          width: '100%',
          maxWidth: 1280,
          height: { xs: 'auto', md: 720 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* LEFT - Content */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 6, md: 10 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: '13px',
              letterSpacing: '3px',
              color: colors.sage,
              mb: 3,
            }}
          >
            // IVY MUTANU KILEY
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '42px', md: '58px' },
              fontWeight: 300,
              lineHeight: 1.08,
              color: colors.text,
              mb: 4,
            }}
          >
            Calm under pressure.<br />
            Clear in complexity.
          </Typography>

          <Typography
            sx={{
              fontSize: '17.5px',
              lineHeight: 1.85,
              color: colors.muted,
              maxWidth: 480,
              mb: 8,
            }}
          >
            Cybersecurity Graduate &amp; Aspiring Risk Consultant from Nairobi.<br />
            I translate technical risks into clear business resilience while keeping people at the center.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="outlined"
                onClick={() => {
                  const el = document.querySelector(item.route);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  borderColor: colors.sage,
                  color: colors.sage,
                  px: 5,
                  py: 1.6,
                  fontSize: '15px',
                  textTransform: 'none',
                  borderRadius: '6px',
                  '&:hover': {
                    borderColor: colors.teal,
                    color: colors.teal,
                    backgroundColor: 'rgba(20,184,166,0.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* RIGHT - Interesting Terminal */}
        <Box
          sx={{
            width: { xs: '100%', md: 520 },
            background: '#0F1C18',
            p: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TerminalBox>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, pb: 2, borderBottom: '1px solid #1F2A24' }}>
              <TerminalIcon sx={{ color: '#E06C75' }} />
              <Typography sx={{ color: '#E5C07B', fontSize: '14px' }}>
                ivy@portfolio:~#
              </Typography>
            </Box>

            <Typography 
              component="pre" 
              sx={{ 
                fontSize: '14.8px', 
                lineHeight: 1.78,
                color: '#98C379',
                whiteSpace: 'pre-wrap',
              }}
            >
{`ivy@portfolio:~# load mindset.conf
Loading calm precision...
Enabling human-centered awareness...
Activating resilience protocols...

Mindset loaded successfully.

ivy@portfolio:~# audit security_culture
→ Phishing resistance: strengthened
→ Password hygiene: improved
→ User decision-making: empowered

ivy@portfolio:~# echo "What security means to me"
Security is not about fear.
It's about clarity, trust, and building systems that protect people while letting them thrive.

ivy@portfolio:~# █`}
            </Typography>
          </TerminalBox>
        </Box>
      </GlossyCard>
    </Box>
  );
}