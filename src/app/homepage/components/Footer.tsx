import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const colors = {
  primary: '#6B4E3D',
  accent: '#D4A88A',
  muted: '#8C745E',
  bg: '#F8F4ED',
  border: '#EDE4D8',
};

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: colors.bg, 
        py: 5, 
        borderTop: `1px solid ${colors.border}`,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: 3 
          }}
        >
          <Typography 
            sx={{ 
              fontFamily: 'monospace', 
              fontSize: '13.5px', 
              color: colors.muted,
              letterSpacing: '0.5px'
            }}
          >
            © 2026 Ivy Mutanu Kiley
          </Typography>

          <Typography 
            sx={{ 
              fontFamily: 'monospace', 
              fontSize: '13.5px', 
              color: colors.muted,
              letterSpacing: '0.5px'
            }}
          >
            Nairobi, Kenya
          </Typography>

          <Typography 
            sx={{ 
              fontFamily: 'monospace', 
              fontSize: '13px', 
              color: colors.muted,
              letterSpacing: '0.5px'
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