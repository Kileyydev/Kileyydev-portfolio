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
  text: '#F5F0E9',           // Soft warm white
  accent: '#D4B89E',         // Warm beige accent
  glass: 'rgba(15, 12, 10, 0.75)',  // Dark transparent glass
};

const ElegantAppBar = styled(AppBar)(({ theme }) => ({
  background: colors.glass,
  backdropFilter: 'blur(32px)',
  borderBottom: '1px solid rgba(245, 240, 233, 0.1)',
  boxShadow: 'none',
  zIndex: theme.zIndex.appBar,
  height: '78px',
}));

const NavLink = styled(Typography)({
  fontFamily: '"Playfair Display", serif',   // Elegant serif font
  fontSize: '15.5px',
  fontWeight: 400,
  color: colors.text,
  cursor: 'pointer',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: colors.accent,
  },
});

export default function TopNavBar() {
  const pathname = usePathname();
  const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null);
  const openProjects = Boolean(projectsAnchor);

  const handleOpenProjects = (event: React.MouseEvent<HTMLElement>) => {
    setProjectsAnchor(event.currentTarget);
  };

  const handleCloseProjects = () => setProjectsAnchor(null);

  return (
    <ElegantAppBar position="fixed" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 4, md: 8 }, minHeight: '78px' }}>
        
        {/* Logo */}
        <Link href="/homepage" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '26px',
              fontWeight: 500,
              letterSpacing: '-0.8px',
              color: colors.text,
            }}
          >
            Ivy Kiley
          </Typography>
        </Link>

        {/* Navigation */}
        <Box sx={{ display: 'flex', gap: { xs: 4, md: 7 }, alignItems: 'center' }}>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <NavLink>About</NavLink>
          </Link>

          <Link href="/experience" style={{ textDecoration: 'none' }}>
            <NavLink>Experience</NavLink>
          </Link>

          {/* Projects Dropdown */}
          <Box onMouseEnter={handleOpenProjects} onMouseLeave={handleCloseProjects}>
            <NavLink sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              Projects
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </NavLink>

            <Menu
              anchorEl={projectsAnchor}
              open={openProjects}
              onClose={handleCloseProjects}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(15,12,10,0.95)',
                  backdropFilter: 'blur(20px)',
                  color: '#F5F0E9',
                  border: '1px solid rgba(212, 184, 158, 0.2)',
                  borderRadius: '8px',
                },
              }}
            >
              <MenuItem onClick={handleCloseProjects}>All Projects</MenuItem>
              <MenuItem onClick={handleCloseProjects}>Cybersecurity Awareness</MenuItem>
              <MenuItem onClick={handleCloseProjects}>FairTrace Blockchain</MenuItem>
              <MenuItem onClick={handleCloseProjects}>Insider Threat Dashboard</MenuItem>
            </Menu>
          </Box>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <NavLink>Contact</NavLink>
          </Link>
        </Box>

        {/* CTA */}
        <Button
          variant="outlined"
          sx={{
            borderColor: colors.accent,
            color: colors.accent,
            fontFamily: 'monospace',
            fontSize: '13px',
            px: 5,
            py: 1.2,
            borderRadius: '50px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: colors.accent,
              color: '#111',
              borderColor: colors.accent,
            },
          }}
        >
          Get in Touch
        </Button>

      </Toolbar>
    </ElegantAppBar>
  );
}