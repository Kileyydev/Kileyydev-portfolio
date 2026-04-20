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
      main: '#6B4E3D',
      light: '#8C5F45',
      dark: '#4A3629',
    },
    secondary: {
      main: '#D4A88A',
    },
    background: {
      default: '#F8F4ED',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C211B',
      secondary: '#8C745E',
    },
    mode: 'light',
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
        },

        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          color: '#2C211B',

          /* 🌟 CINEMATIC BACKGROUND IMAGE */
          backgroundImage: "url('/images/hero1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',

          /* 🌫️ GLOBAL OVERLAY (VERY IMPORTANT FOR READABILITY) */
          '&::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(248,244,237,0.25), rgba(44,33,27,0.75))',
            zIndex: -1,
            pointerEvents: 'none',
          },
        },

        '#__next': {
          height: '100%',
        },

      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(107, 78, 61, 0.08)',
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