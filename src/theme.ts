'use client';

import { createTheme } from '@mui/material/styles';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: { 
      main: '#6B4E3D',        // Deep warm brown
      light: '#8C5F45',
      dark: '#4A3629',
    },
    secondary: { 
      main: '#D4A88A',        // Soft gold accent
    },
    background: {
      default: '#F8F4ED',     // Warm cream background
      paper: '#FFFFFF',       // Clean white for cards/glass
    },
    text: {
      primary: '#2C211B',     // Rich dark brown text
      secondary: '#8C745E',   // Muted brown
    },
    mode: 'light',            // Changed to light for warm feel
  },

  typography: {
    fontFamily: [josefin.style.fontFamily, 'sans-serif'].join(','),
    h1: {
      fontWeight: 400,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 400,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          backgroundColor: '#F8F4ED',
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: '#F8F4ED',
          color: '#2C211B',
        },
        '#__next': {
          height: '100%',
          backgroundColor: '#F8F4ED',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(28px)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '10px',
        },
      },
    },
  },
});

export default theme;