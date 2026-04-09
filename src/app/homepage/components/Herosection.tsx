'use client';
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Paper,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const colors = {
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  text: '#1C2B27',
  muted: '#5A6E68',
};

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(12px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4); }
  70% { box-shadow: 0 0 0 12px rgba(20, 184, 166, 0); }
`;

const KaliTerminal = styled(Paper)({
  backgroundColor: '#0A0F0C',
  color: '#98C379',
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '28px',
  borderRadius: '12px',
  border: '1px solid #1F2A24',
  boxShadow: '0 20px 60px rgba(20, 184, 166, 0.25)',
  height: '100%',
  minHeight: '440px',
  overflow: 'hidden',
  position: 'relative',
});

const ScrollIndicator = styled(Box)({
  position: 'absolute',
  bottom: '48px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 20,
  pointerEvents: 'none', // ← FIXED: no longer eats clicks from sections below
  animation: `${float} 3.5s ease-in-out infinite`,
  '&:hover': {
    '& .scroll-circle': {
      animation: `${pulse} 1.5s infinite`,
      borderColor: '#14B8A6',
    },
    '& .arrow': {
      transform: 'translateY(6px)',
      color: '#14B8A6',
    },
  },
});

const HeroSection = () => {
  const scrollDown = () => {
    const nextSection = window.innerHeight * 0.85;
    window.scrollTo({ top: nextSection, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.lightBg,
        minHeight: '100vh',
        pt: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'visible', // ← FIXED: was 'hidden', was bleeding over next section
        isolation: 'isolate',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 10 },
            alignItems: 'center',
          }}
        >
          {/* Left Side */}
          <Box sx={{ flex: 1, maxWidth: { md: '520px' } }}>
            <Typography
              variant="overline"
              sx={{
                color: colors.sage,
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '2px',
                mb: 3,
                display: 'block',
              }}
            >
              // cybersecurity graduate • aspiring risk consultant
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '52px', md: '72px' },
                fontWeight: 300,
                lineHeight: 1.05,
                color: colors.text,
                mb: 1,
              }}
            >
              Ivy Mutanu
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '52px', md: '72px' },
                fontWeight: 600,
                lineHeight: 1.05,
                color: colors.teal,
                mb: 5,
              }}
            >
              Kiley
            </Typography>

            <Typography
              sx={{
                color: colors.muted,
                fontSize: '17px',
                mb: 2,
                fontFamily: 'monospace',
              }}
            >
              Nairobi, Kenya • imkiley2003@gmail.com
            </Typography>

            <Typography
              sx={{
                fontSize: '17.5px',
                lineHeight: 1.85,
                color: colors.muted,
                mb: 8,
                maxWidth: '480px',
              }}
            >
              Computer networks & cybersecurity graduate building at the intersection of
              GRC, cloud security, and risk advisory. I translate technical complexity into
              business clarity — and I care deeply about how technology shapes human systems.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: colors.sage,
                  color: '#fff',
                  px: 7, py: 2,
                  fontSize: '15.5px',
                  textTransform: 'none',
                  borderRadius: '6px',
                  boxShadow: '0 8px 25px rgba(42, 107, 90, 0.3)',
                  '&:hover': { backgroundColor: '#1F5246', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease',
                }}
              >
                View CV
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: colors.sage,
                  color: colors.sage,
                  px: 7, py: 2,
                  fontSize: '15.5px',
                  textTransform: 'none',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: 'rgba(42, 107, 90, 0.08)',
                    borderColor: colors.teal,
                    color: colors.teal,
                  },
                }}
              >
                GitHub: Kileyydev
              </Button>
            </Stack>
          </Box>

          {/* Right Side - Terminal */}
          <Box sx={{ flex: 1, width: '100%', maxWidth: { md: '500px' } }}>
            <KaliTerminal>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, pb: 2, borderBottom: '1px solid #1F2A24' }}>
                <TerminalIcon sx={{ color: '#E06C75' }} />
                <Typography sx={{ color: '#E5C07B', fontSize: '14.5px', fontFamily: 'monospace' }}>
                  root@kali:~#
                </Typography>
              </Box>

              <Typography
                component="pre"
                sx={{
                  fontFamily: '"Ubuntu Mono", monospace',
                  fontSize: '15.2px',
                  lineHeight: 1.7,
                  color: '#98C379',
                  whiteSpace: 'pre-wrap',
                  mb: 2,
                }}
              >
{`root@kali:~# whoami
Ivy Mutanu Kiley
root@kali:~# ls -la ~/cyber-portfolio/
drwxr-xr-x 8 ivy projects   2026
drwxr-xr-x 5 ivy experience 2026
drwxr-xr-x 4 ivy grc        2026
root@kali:~# echo "Calm under pressure. Aware in complexity. Resilient by design."
Calm under pressure. Aware in complexity. Resilient by design.
root@kali:~# `}
              </Typography>

              <Box
                sx={{
                  display: 'inline-block',
                  width: '9px',
                  height: '19px',
                  backgroundColor: '#98C379',
                  verticalAlign: 'middle',
                  animation: 'blink 0.9s step-end infinite',
                }}
              />
            </KaliTerminal>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={scrollDown}>
        <Box
          className="scroll-circle"
          sx={{
            width: 46,
            height: 46,
            border: `2.5px solid ${colors.teal}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1.5,
            transition: 'all 0.4s ease',
          }}
        >
          <KeyboardArrowDownIcon
            className="arrow"
            sx={{ color: colors.teal, fontSize: 28, transition: 'transform 0.4s ease' }}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '3px',
            color: colors.sage,
            opacity: 0.75,
            fontWeight: 500,
          }}
        >
          SCROLL TO EXPLORE
        </Typography>
      </ScrollIndicator>

      <style jsx global>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </Box>
  );
};

export default HeroSection;