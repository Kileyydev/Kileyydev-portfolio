'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'projects', href: '/projects' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        px: { xs: 2.5, md: 6 }, height: 60,
        background: 'background.default', bgcolor: 'background.default',
        borderBottom: '1px solid', borderColor: 'divider',
        position: 'sticky', top: 0, zIndex: 100,
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Typography sx={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.8rem', color: 'primary.main', letterSpacing: '0.06em' }}>
          ivy.kiley
        </Typography>
      </Link>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {navLinks.map(({ label, href }) => (
          <Link key={href} href={href} style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                px: 2, py: 1, borderRadius: 1,
                fontFamily: '"JetBrains Mono",monospace',
                fontSize: '0.7rem', letterSpacing: '0.04em',
                color: pathname === href ? 'primary.main' : 'text.disabled',
                background: pathname === href ? '#EAF5F1' : 'transparent',
                transition: 'all .15s',
                '&:hover': { color: 'primary.main', background: '#EAF5F1' },
              }}
            >
              {label}
            </Box>
          </Link>
        ))}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.75, py: 0.875, bgcolor: '#EAF5F1', border: '1px solid #C2E2D8', borderRadius: '40px' }}>
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.light', animation: 'pulse 2s ease-in-out infinite', '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
        <Typography sx={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.6rem', color: 'primary.main', letterSpacing: '0.06em' }}>
          open · will relocate
        </Typography>
      </Box>
    </Box>
  );
}
