'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const colors = {
  bg: '#070604',
  card: '#0E1512',
  text: '#F5F0E9',
  accent: '#D4B89E',
  muted: '#B8A78F',
  border: 'rgba(212, 184, 158, 0.15)',
};

/* ───────────────── DATA ───────────────── */

const workExperiences = [
  {
    date: 'Jan 2026 – Apr 2026',
    location: 'Remote',
    role: 'Cybersecurity & Cloud Technology Intern',
    company: 'CyBlack',
    description:
      'Monitored enterprise security alerts via Microsoft Sentinel across client environments, contributing to a 30% reduction in unresolved alert backlog. Implemented Azure security controls and contributed to incident response playbooks.',
    tags: ['Microsoft Sentinel', 'Azure', 'GRC', 'Threat Intel'],
    isRecent: true,
  },
  {
    date: 'Jan 2025 – Apr 2025',
    location: 'Nairobi',
    role: 'ICT & Software Development Attaché',
    company: 'Kenya Forest Service',
    description:
      'Redesigned public-facing systems in React. Administered Linux servers for 200+ users and assisted in firewall configuration and endpoint protection hardening.',
    tags: ['React', 'Linux', 'Network Security', 'System Hardening'],
  },
  {
    date: 'Nov 2024 – Dec 2024',
    location: '',
    role: 'Security Awareness Game Developer',
    company: 'Boltech',
    description:
      'Built an interactive security awareness platform covering phishing, passwords, and social engineering with behavioral scoring systems.',
    tags: ['Security Awareness', 'UX', 'Risk Training'],
  },
];

const projects = [
  {
    number: '01',
    title: 'Cybersecurity Awareness & Risk Platform',
    description:
      'Phishing simulations and behavioral risk scoring for organizational security training.',
    tags: ['Python', 'GRC', 'Web'],
  },
  {
    number: '02',
    title: 'Cyber Risk Analytics — Fraud Detection',
    description:
      'Anomaly detection system for identifying fraudulent financial transactions.',
    tags: ['Python', 'ML', 'Risk Analytics'],
  },
  {
    number: '03',
    title: 'FairTrace — Blockchain Supply Chain',
    description:
      'Tamper-resistant blockchain system for supply chain transparency.',
    tags: ['Blockchain', 'Smart Contracts'],
  },
  {
    number: '04',
    title: 'Insider Threat Detection Dashboard',
    description:
      'Behavioral monitoring dashboard inspired by SIEM systems.',
    tags: ['Django', 'Next.js', 'PostgreSQL'],
  },
];

/* ───────────────── MAIN COMPONENT ───────────────── */

export default function ExperienceSection() {
  const [tab, setTab] = useState<'work' | 'projects'>('work');

  return (
    <Box
      id="experience"
      sx={{
        backgroundColor: colors.bg,
        pt: { xs: 6, md: 8 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 5,
          }}
        >
          <Typography
            sx={{
              color: colors.accent,
              fontFamily: 'monospace',
              letterSpacing: '3px',
              fontSize: '13px',
            }}
          >
            EXPERIENCE
          </Typography>

          <Button
            endIcon={<ArrowForwardIcon />}
            onClick={() => (window.location.href = '/experience')}
            sx={{
              color: colors.accent,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            View Full Experience
          </Button>
        </Box>

        {/* TABS */}
        <Box
          sx={{
            display: 'flex',
            borderBottom: `1px solid ${colors.border}`,
            mb: 6,
          }}
        >
          {(['work', 'projects'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                padding: '12px 28px',
                background: 'none',
                border: 'none',
                borderBottom:
                  tab === key
                    ? `3px solid ${colors.accent}`
                    : '3px solid transparent',
                color: tab === key ? colors.accent : colors.muted,
                fontWeight: tab === key ? 600 : 500,
                fontSize: '15px',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {key === 'work' ? 'Work Experience' : 'Projects'}
            </button>
          ))}
        </Box>

        {/* ───────── WORK EXPERIENCE ───────── */}
        {tab === 'work' && (
          <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto' }}>
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 40,
                bottom: 40,
                width: '2px',
                backgroundColor: colors.border,
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' },
              }}
            />

            <Stack spacing={{ xs: 7, md: 10 }}>
              {workExperiences.map((item, index) => {
                const isRight = index % 2 === 1;

                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr',
                      },
                      gap: 6,
                      position: 'relative',
                    }}
                  >
                    {/* DOT */}
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        bgcolor: colors.bg,
                        border: `2px solid ${colors.accent}`,
                        borderRadius: '50%',
                        position: 'absolute',
                        left: '50%',
                        top: 28,
                        transform: 'translateX(-50%)',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />

                    {isRight ? (
                      <>
                        <EntryContent item={item} isRight />
                        <span />
                      </>
                    ) : (
                      <>
                        <span />
                        <EntryContent item={item} isRight={false} />
                      </>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Box>
        )}

        {/* ───────── PROJECTS ───────── */}
        {tab === 'projects' && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 3,
              maxWidth: 1100,
              mx: 'auto',
            }}
          >
            {projects.map((p, i) => (
              <Box
                key={i}
                sx={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '14px',
                  p: 3,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: colors.accent,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: colors.accent,
                    mb: 1,
                  }}
                >
                  {p.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '17px',
                    color: colors.text,
                    mb: 1.5,
                  }}
                >
                  {p.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '14px',
                    color: colors.muted,
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  {p.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {p.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      size="small"
                      sx={{
                        background: 'rgba(212,184,158,0.08)',
                        color: colors.accent,
                        fontFamily: 'monospace',
                        fontSize: '11px',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

/* ───────────────── ENTRY COMPONENT ───────────────── */

function EntryContent({
  item,
  isRight,
}: {
  item: typeof workExperiences[0];
  isRight: boolean;
}) {
  return (
    <Box
      sx={{
        textAlign: { xs: 'left', md: isRight ? 'right' : 'left' },
        pr: { md: isRight ? 6 : 0 },
        pl: { md: isRight ? 0 : 6 },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'monospace',
          color: colors.muted,
          fontSize: '13px',
          mb: 1,
        }}
      >
        {item.date} {item.location ? `• ${item.location}` : ''}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: { md: isRight ? 'flex-end' : 'flex-start' },
          alignItems: 'center',
          gap: 1,
          mb: 1,
        }}
      >
        <Typography sx={{ color: colors.text, fontSize: '18px' }}>
          {item.role}
        </Typography>

        {item.isRecent && (
          <StarIcon sx={{ color: colors.accent, fontSize: 18 }} />
        )}
      </Box>

      <Typography sx={{ color: colors.accent, mb: 1 }}>
        {item.company}
      </Typography>

      <Typography sx={{ color: colors.muted, lineHeight: 1.8, mb: 2 }}>
        {item.description}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        {item.tags.map((tag, i) => (
          <Chip
            key={i}
            label={tag}
            size="small"
            sx={{
              background: 'rgba(212,184,158,0.08)',
              color: colors.accent,
              fontFamily: 'monospace',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}