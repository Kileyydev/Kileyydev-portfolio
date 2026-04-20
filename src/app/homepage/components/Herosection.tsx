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
  text: '#F5F0E9',
  accent: '#D4B89E',
  muted: '#B8A78F',
};

/* 🎯 Clean card (NO global blur, we localize glass instead) */
const ContainerCard = styled(Paper)(() => ({
  background: 'rgba(10, 8, 6, 0.35)', // subtle glass ONLY for readability
  backdropFilter: 'blur(6px)',
  border: '1px solid rgba(212, 184, 158, 0.15)',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
}));

const TerminalWrapper = styled(Box)(() => ({
  background: 'linear-gradient(145deg, rgba(28,22,18,0.95), rgba(36,28,23,0.95))',
  borderRadius: '16px',
  padding: '32px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgba(255,255,255,0.05)',
}));

export default function Home() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        /* 🌄 FULL IMAGE BACKGROUND */
        backgroundImage: "url('/images/hero2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 🌫️ VERY LIGHT readability gradient (does NOT kill image) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.25) 50%, rgba(10,8,6,0.45) 100%)',
          zIndex: 1,
        }}
      />

      {/* MAIN CONTENT */}
      <ContainerCard
        sx={{
          width: '100%',
          maxWidth: 1280,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          zIndex: 2,
        }}
      >

        {/* LEFT */}
        <Box
          sx={{
            width: { xs: '100%', md: '55%' },
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
              letterSpacing: '4px',
              color: colors.accent,
              mb: 3,
            }}
          >
            CYBERSECURITY PROFESSIONAL
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '52px', md: '68px' },
              lineHeight: 1.05,
              fontWeight: 400,
              color: colors.text,
              mb: 4,
            }}
          >
            Calm under<br />
            pressure.<br />
            Clear in<br />
            complexity.
          </Typography>

          <Typography
            sx={{
              fontSize: '17.5px',
              lineHeight: 1.8,
              color: colors.muted,
              maxWidth: '460px',
              mb: 6,
            }}
          >
            I turn complex security risks into clear, human-centered solutions.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="outlined"
              onClick={() => router.push('/about')}
              sx={{
                borderColor: colors.accent,
                color: colors.accent,
                px: 6,
                py: 1.8,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: colors.accent,
                  color: '#111',
                },
              }}
            >
              Learn more about Ivy
            </Button>

            <Button
              variant="contained"
              onClick={() => router.push('/contact')}
              sx={{
                bgcolor: colors.accent,
                color: '#111',
                px: 6,
                py: 1.8,
                borderRadius: '50px',
                '&:hover': {
                  bgcolor: '#E8D9C4',
                },
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Box>

        {/* RIGHT - TERMINAL (FIXED VISIBILITY) */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            p: { xs: 4, md: 8 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TerminalWrapper>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 4,
                pb: 2,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <TerminalIcon sx={{ color: '#D4B89E' }} />
              <Typography sx={{ color: '#D4B89E', fontSize: '14.5px' }}>
                ivy@portfolio:~#
              </Typography>
            </Box>

            <Typography
              component="pre"
              sx={{
                fontFamily: '"Ubuntu Mono", monospace',
                fontSize: '14.8px',
                lineHeight: 1.75,
                color: '#F2E9DD', // 🔥 brighter for contrast
                whiteSpace: 'pre-wrap',
              }}
            >
{`ivy@portfolio:~# whoami
Cybersecurity builder & strategist

ivy@portfolio:~# status
→ Open to GRC, Risk Consulting & Cloud Security roles
→ Based in Nairobi • Willing to relocate

ivy@portfolio:~# philosophy
Calm analysis. Precise execution. Human-first security.

ivy@portfolio:~# █`}
            </Typography>

          </TerminalWrapper>
        </Box>

      </ContainerCard>
    </Box>
  );
}