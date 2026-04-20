'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Stack,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';

const colors = {
  bg: '#070604',
  card: '#0E1512',
  text: '#F5F0E9',
  accent: '#D4B89E',
  muted: '#B8A78F',
  border: 'rgba(212, 184, 158, 0.15)',
};

/* ───────── TERMINAL ───────── */

const ContactTerminal = styled(Paper)({
  background: 'linear-gradient(145deg, #0E1512, #0B110E)',
  color: colors.accent,
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '24px',
  borderRadius: '14px',
  border: `1px solid ${colors.border}`,
  boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
  minHeight: '260px',
  width: '100%',
});

/* ───────── SECTION ───────── */

const ContactSection = () => {
  return (
    <Box
      sx={{
        background: colors.bg,
        py: { xs: 10, md: 14 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 10,
            alignItems: 'flex-start',
          }}
        >

          {/* ───────── LEFT ───────── */}
          <Box sx={{ flex: 1, maxWidth: 520 }}>
            <Typography
              variant="overline"
              sx={{
                color: colors.accent,
                fontFamily: 'monospace',
                letterSpacing: '3px',
                fontSize: '13px',
                mb: 4,
                display: 'block',
              }}
            >
              CONTACT
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '40px', md: '52px' },
                fontWeight: 300,
                lineHeight: 1.15,
                color: colors.text,
                mb: 4,
              }}
            >
              Let’s build<br />
              <span style={{ color: colors.accent }}>
                resilient things.
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: '17px',
                lineHeight: 1.85,
                color: colors.muted,
                mb: 6,
                maxWidth: 460,
              }}
            >
              Open to Risk Consulting, GRC, and Cybersecurity roles globally.
              I focus on clarity, resilience, and human-centered security systems.
            </Typography>

            <Stack spacing={2}>
              {[
                'mailto:imkiley2003@gmail.com',
                '#',
                'https://github.com/Kileyydev',
                'tel:+254708835355',
              ].map((href, i) => (
                <Link
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  sx={{
                    color: colors.accent,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    opacity: 0.85,
                    transition: '0.2s',
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  → {href}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* ───────── RIGHT TERMINAL ───────── */}
          <Box sx={{ flex: 1, maxWidth: 460 }}>
            <ContactTerminal>

              {/* Header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 3,
                  pb: 2,
                  borderBottom: `1px solid ${colors.border}`,
                }}
              >
                <TerminalIcon sx={{ color: colors.accent }} />
                <Typography sx={{ color: colors.accent, fontSize: '14px' }}>
                  ivy@contact:~#
                </Typography>
              </Box>

              {/* Terminal Content */}
              <Typography
                component="pre"
                sx={{
                  fontFamily: '"Ubuntu Mono", monospace',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                  color: colors.accent,
                  whiteSpace: 'pre-wrap',
                }}
              >
{`ivy@contact:~# ping ivy
connection: stable
availability: global
response: instant

ivy@contact:~# status --user
open_to_work = true
relocation = enabled
communication = clear

ivy@contact:~# echo "message"
Let’s build secure, human-centered systems that actually work.

ivy@contact:~# █`}
              </Typography>

            </ContactTerminal>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;