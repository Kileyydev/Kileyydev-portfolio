'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
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

const AboutTerminal = styled(Paper)({
  backgroundColor: '#0A0F0C',
  color: '#98C379',
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '28px',
  borderRadius: '12px',
  border: '1px solid #1F2A24',
  boxShadow: '0 20px 50px rgba(20, 184, 166, 0.18)',
  width: '100%',
  minHeight: '340px',
});

const AboutSection = () => {
  return (
    <Box sx={{ backgroundColor: colors.lightBg }}>
      {/* Thin Divider Line Above Section */}
      <Divider
        sx={{
          borderColor: '#E5E9E6',
          opacity: 0.6,
          width: '100%',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '1100px', mx: 'auto', py: { xs: 8, md: 9 } }}>

          {/* Top Content - More Compact */}
          <Box sx={{ mb: 7 }}>
            <Typography
              variant="overline"
              sx={{
                color: colors.sage,
                fontFamily: 'monospace',
                letterSpacing: '2px',
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
                fontSize: { xs: '38px', md: '48px' },
                fontWeight: 300,
                lineHeight: 1.15,
                color: colors.text,
                mb: 4,
              }}
            >
              Calm under <span style={{ color: colors.teal, fontStyle: 'italic' }}>pressure.</span><br />
              Clear in complexity. Rooted in purpose.
            </Typography>

            <Typography
              sx={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: colors.muted,
                maxWidth: '720px',
                mb: 7,
              }}
            >
              I bring technical depth and human-centered thinking to cybersecurity. 
              Whether triaging Sentinel alerts, implementing Azure controls, or designing 
              awareness tools, I approach every challenge with patience and precision.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
              <Box>
                <Typography sx={{ fontWeight: 500, color: colors.sage, mb: 1 }}>
                  What I do
                </Typography>
                <Typography sx={{ fontSize: '16px', lineHeight: 1.75, color: colors.muted }}>
                  Translate complex risks into clear business insights.<br />
                  Align GRC, cloud security, and people-focused solutions.
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 500, color: colors.sage, mb: 1 }}>
                  What I enjoy
                </Typography>
                <Typography sx={{ fontSize: '16px', lineHeight: 1.75, color: colors.muted }}>
                  Building resilient systems • Strengthening security culture • 
                  Making security practical and accessible.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Terminal */}
          <AboutTerminal>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, pb: 2, borderBottom: '1px solid #1F2A24' }}>
              <TerminalIcon sx={{ color: '#E06C75' }} />
              <Typography sx={{ color: '#E5C07B', fontSize: '14.5px' }}>
                ivy@cyblack:~#
              </Typography>
            </Box>

            <Typography 
              component="pre" 
              sx={{ 
                fontFamily: '"Ubuntu Mono", monospace', 
                fontSize: '15px', 
                lineHeight: 1.75,
                color: '#98C379',
                whiteSpace: 'pre-wrap',
              }}
            >
{`ivy@cyblack:~# configure --mode resilience
Setting GRC framework alignment...
Applying Azure security controls across client environments...
Building human-centered awareness modules...

Configuration complete.

ivy@cyblack:~# sysctl security.awareness
net.security.human-factor = high
net.risk.visibility = clear
net.resilience.level = enabled

ivy@cyblack:~# echo "My security philosophy"
Calm analysis. Precise execution. Human-first mindset.
Security is not just protection — it's enabling trust and clarity.

ivy@cyblack:~# █`}
            </Typography>
          </AboutTerminal>

        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;