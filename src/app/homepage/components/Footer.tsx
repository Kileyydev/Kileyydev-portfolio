import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const colors = {
  muted: '#5A6E68',
};

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F6F2', py: 4, borderTop: '1px solid #E8F4F0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '13px', color: colors.muted }}>
            © 2026 Ivy Mutanu Kiley
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '13px', color: colors.muted }}>
            Nairobi, Kenya
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;