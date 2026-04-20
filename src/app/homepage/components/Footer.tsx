import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const colors = {
  bg: '#070604',
  text: '#F5F0E9',
  accent: '#D4B89E',
  muted: '#B8A78F',
  border: 'rgba(212, 184, 158, 0.15)',
};

const Footer = () => {
  return (
    <Box
      sx={{
        background: colors.bg,
        py: 6,
        borderTop: `1px solid ${colors.border}`,
        mt: 'auto',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {/* LEFT */}
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: colors.muted,
              letterSpacing: '0.5px',
              opacity: 0.9,
              transition: '0.2s',
              '&:hover': {
                color: colors.accent,
                opacity: 1,
              },
            }}
          >
            © 2026 Ivy Mutanu Kiley
          </Typography>

          {/* CENTER */}
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: colors.muted,
              letterSpacing: '0.5px',
              opacity: 0.9,
              '&:hover': {
                color: colors.accent,
              },
            }}
          >
            Nairobi, Kenya
          </Typography>

          {/* RIGHT */}
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: colors.muted,
              letterSpacing: '0.5px',
              opacity: 0.9,
              '&:hover': {
                color: colors.accent,
              },
            }}
          >
            Built with calm precision ✨
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;