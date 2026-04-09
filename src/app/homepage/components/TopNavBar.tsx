'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const colors = {
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  glass: 'rgba(248, 246, 242, 0.85)',
};

const GlossyAppBar = styled(AppBar)(({ theme }) => ({
  background: colors.glass,
  backdropFilter: 'blur(20px) saturate(180%)',
  borderBottom: '1px solid rgba(42, 107, 90, 0.15)',
  boxShadow: '0 8px 32px rgba(20, 184, 166, 0.08)',
  zIndex: theme.zIndex.appBar,
}));

const NavLink = styled(Typography)({
  fontFamily: 'monospace',
  fontSize: '14.5px',
  color: colors.sage,
  cursor: 'pointer',
  padding: '6px 12px',
  borderRadius: '4px',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: colors.teal,
    backgroundColor: 'rgba(20, 184, 166, 0.08)',
  },
});

const ActiveNavLink = styled(NavLink)<{ isActive?: boolean }>(({ isActive }) => ({
  color: isActive ? colors.teal : colors.sage,
  backgroundColor: isActive ? 'rgba(20, 184, 166, 0.08)' : 'transparent',
}));

export default function TopNavBar() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');
  const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null);
  const openProjects = Boolean(projectsAnchor);

  // Handle hash on client side only (fixes window not defined)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isHome = pathname === '/homepage' || pathname === '/';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/homepage#${id}`;
    }
    setProjectsAnchor(null);
  };

  const handleOpenProjects = (event: React.MouseEvent<HTMLElement>) => {
    setProjectsAnchor(event.currentTarget);
  };

  const handleCloseProjects = () => {
    setProjectsAnchor(null);
  };

  return (
    <GlossyAppBar position="sticky" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, md: 6 }, py: 2.2 }}>
        {/* Logo */}
        <Link href="/homepage" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              fontSize: '18px',
              fontWeight: 500,
              color: colors.sage,
              cursor: 'pointer',
            }}
          >
            ivy.kiley
          </Typography>
        </Link>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 5 }, alignItems: 'center' }}>
          <Link href="/about" style={{ textDecoration: 'none' }} onClick={() => scrollToSection('about')}>
            <ActiveNavLink isActive={isHome && currentHash === '#about'}>
              About
            </ActiveNavLink>
          </Link>

          <Link href="/blog" style={{ textDecoration: 'none' }} onClick={() => scrollToSection('experience')}>
            <ActiveNavLink isActive={isHome && currentHash === '#experience'}>
              Blog
            </ActiveNavLink>
          </Link>

          {/* Projects Hover Dropdown */}
          <Box
            onMouseEnter={handleOpenProjects}
            onMouseLeave={handleCloseProjects}
          >
            <NavLink sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              Projects
              <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
            </NavLink>

            <Menu
              anchorEl={projectsAnchor}
              open={openProjects}
              onClose={handleCloseProjects}
              MenuListProps={{
                onMouseEnter: () => setProjectsAnchor(projectsAnchor!),
                onMouseLeave: handleCloseProjects,
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#fff',
                  border: '1px solid #E8F4F0',
                  boxShadow: '0 10px 30px rgba(20, 184, 166, 0.12)',
                  mt: 1,
                },
              }}
            >
              <MenuItem onClick={() => scrollToSection('projects')}>All Projects</MenuItem>
              <MenuItem onClick={() => scrollToSection('project1')}>Cybersecurity Awareness Platform</MenuItem>
              <MenuItem onClick={() => scrollToSection('project2')}>FairTrace Blockchain System</MenuItem>
              <MenuItem onClick={() => scrollToSection('project3')}>Insider Threat Dashboard</MenuItem>
            </Menu>
          </Box>

          <Link href="/contact" style={{ textDecoration: 'none' }} onClick={() => scrollToSection('contact')}>
            <ActiveNavLink isActive={isHome && currentHash === '#contact'}>
              Contact
            </ActiveNavLink>
          </Link>
        </Box>

        {/* CTA */}
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: colors.teal,
              color: colors.teal,
              fontFamily: 'monospace',
              fontSize: '12.8px',
              px: 3.5,
              py: 1,
              textTransform: 'none',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: 'rgba(20, 184, 166, 0.08)',
              },
            }}
          >
            Open to opportunities
          </Button>
        </Link>
      </Toolbar>
    </GlossyAppBar>
  );
}