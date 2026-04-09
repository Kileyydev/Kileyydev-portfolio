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
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  text: '#1C2B27',
  muted: '#5A6E68',
};

const ContactTerminal = styled(Paper)({
  backgroundColor: '#0A0F0C',
  color: '#98C379',
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '24px',
  borderRadius: '8px',
  border: '1px solid #1F2A24',
  boxShadow: '0 12px 35px rgba(20, 184, 166, 0.15)',
  minHeight: '260px',
  width: '100%',
});

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: colors.lightBg, py: 14, borderTop: '1px solid #E8F4F0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 10, alignItems: 'flex-start' }}>

          {/* Left Side - Text */}
          <Box sx={{ flex: 1, maxWidth: '520px' }}>
            <Typography
              variant="overline"
              sx={{
                color: colors.sage,
                fontFamily: 'monospace',
                letterSpacing: '2px',
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
                fontSize: { xs: '42px', md: '52px' },
                fontWeight: 300,
                lineHeight: 1.15,
                color: colors.text,
                mb: 4,
              }}
            >
              Let&apos;s build<br />
              <span style={{ color: colors.teal }}>resilient things.</span>
            </Typography>

            <Typography
              sx={{
                fontSize: '17px',
                lineHeight: 1.85,
                color: colors.muted,
                mb: 6,
                maxWidth: '460px',
              }}
            >
              Open to Risk Consulting, GRC, and Cybersecurity roles globally. 
              I bring calm precision to complex problems — and I&apos;m always glad to connect.
            </Typography>

            <Stack spacing={2}>
              <Link href="mailto:imkiley2003@gmail.com" sx={{ color: colors.sage, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: colors.teal } }}>
                → imkiley2003@gmail.com
              </Link>
              <Link href="#" sx={{ color: colors.sage, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: colors.teal } }}>
                → LinkedIn: Ivy Kiley
              </Link>
              <Link href="https://github.com/Kileyydev" target="_blank" sx={{ color: colors.sage, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: colors.teal } }}>
                → GitHub: Kileyydev
              </Link>
              <Link href="tel:+254708835355" sx={{ color: colors.sage, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: colors.teal } }}>
                → +254 708 835 355
              </Link>
            </Stack>
          </Box>

          {/* Right Side - Terminal */}
          <Box sx={{ flex: 1, maxWidth: { md: '460px' } }}>
            <ContactTerminal>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, pb: 2, borderBottom: '1px solid #1F2A24' }}>
                <TerminalIcon sx={{ color: '#E06C75' }} />
                <Typography sx={{ color: '#E5C07B', fontSize: '14px' }}>
                  ivy@contact:~#
                </Typography>
              </Box>

              <Typography 
                component="pre" 
                sx={{ 
                  fontFamily: '"Ubuntu Mono", monospace', 
                  fontSize: '14.8px', 
                  lineHeight: 1.75,
                  color: '#98C379',
                  whiteSpace: 'pre-wrap',
                }}
              >
{`ivy@contact:~# ping ivy
PING ivy.kiley — available globally
64 bytes from ivy: icmp_seq=1 ttl=64

ivy@contact:~# nslookup status
→ open_to_work: true
→ relocate: yes
→ response_time: fast

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