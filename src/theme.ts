'use client';

import { createTheme } from '@mui/material/styles';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// ... your existing imports and josefin font

const theme = createTheme({
  palette: {
    primary: { main: '#6d28d9' },
    background: {
      default: '#fff',
      paper: '#4a1a2a', // optional for cards
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: [josefin.style.fontFamily, 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',               // ← key!
          margin: 0,
          padding: 0,
          backgroundColor: '#fff',   // set on html too
        },
        body: {
          height: '100%',               // ← key!
          margin: 0,
          padding: 0,
          backgroundColor: '#fff',   // fallback + override
          color: '#f4f4f4',
        },
        '#__next': {                    // ← targets Next.js root div
          height: '100%',
          backgroundColor: '#fff',
        },
      },
    },
    // ... your other component overrides
  },
});

export default theme;