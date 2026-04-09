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
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  text: '#1C2B27',
  muted: '#5A6E68',
};

const workExperiences = [
  {
    date: 'Jan 2026 – Apr 2026',
    location: 'Remote',
    role: 'Cybersecurity & Cloud Technology Intern',
    company: 'CyBlack',
    description: 'Monitored enterprise security alerts via Microsoft Sentinel across client environments, contributing to a 30% reduction in unresolved alert backlog. Implemented cloud security controls in Azure across 3 client accounts and contributed to incident response playbooks.',
    tags: ['Microsoft Sentinel', 'Azure', 'GRC', 'Threat Intel'],
    isRecent: true,
  },
  {
    date: 'Jan 2025 – Apr 2025',
    location: 'Nairobi',
    role: 'ICT & Software Development Attaché',
    company: 'Kenya Forest Service',
    description: 'Redesigned the KFS public-facing website in React & Tailwind. Administered Linux servers for 200+ government users, enforcing patch cycles and access hardening. Assisted in evaluating firewall configs and endpoint protection.',
    tags: ['React', 'Linux', 'Network Security', 'System Hardening'],
  },
  {
    date: 'Nov 2024 – Dec 2024',
    location: '',
    role: 'Security Awareness Game Developer',
    company: 'Boltech',
    description: 'Built an interactive security awareness web application covering phishing, password hygiene, and social engineering — deployed to strengthen organizational security culture with measurable scoring systems.',
    tags: ['Security Awareness', 'UX', 'Incident Advisory'],
  },
];

const projects = [
  {
    number: '01',
    title: 'Cybersecurity Awareness & Risk Consulting Platform',
    description: 'Human-centered platform with phishing simulations, behavioral risk scoring, and GRC-aligned content for organizational security culture training.',
    tags: ['Python', 'GRC', 'Web'],
  },
  {
    number: '02',
    title: 'Cyber Risk Analytics — Financial Fraud Detection',
    description: 'Data-driven solution identifying fraudulent financial transactions via anomaly detection and risk visualization to support early threat response.',
    tags: ['Python', 'Scikit-learn', 'Risk Analytics'],
  },
  {
    number: '03',
    title: 'FairTrace — Blockchain Supply Chain System',
    description: 'Blockchain-based traceability system with cryptographic identity verification and tamper-resistant logging for agricultural supply chain integrity.',
    tags: ['Python', 'Blockchain', 'Smart Contracts'],
  },
  {
    number: '04',
    title: 'Insider Threat Risk Detection Dashboard',
    description: 'SIEM-inspired dashboard for monitoring behavioral patterns and log anomalies, simulating enterprise-grade risk monitoring for SME environments.',
    tags: ['Django', 'Next.js', 'PostgreSQL'],
  },
];

export default function ExperienceSection() {
  const [tab, setTab] = useState<'work' | 'projects'>('work');

  return (
    <Box
      id="experience"
      sx={{
        backgroundColor: colors.lightBg,
        pt: { xs: 4, md: 5 },
        pb: { xs: 10, md: 12 },
        position: 'relative',
        zIndex: 1,
        isolation: 'isolate',
      }}
    >
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
          <Typography sx={{
            color: colors.sage,
            fontFamily: 'monospace',
            letterSpacing: '3px',
            fontSize: '13px',
            fontWeight: 600,
          }}>
            EXPERIENCE
          </Typography>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            sx={{ color: colors.teal, textTransform: 'none', fontWeight: 500 }}
            onClick={() => window.location.href = '/experience'}
          >
            View Full Experience
          </Button>
        </Box>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', borderBottom: '1px solid #E5E9E6', marginBottom: '48px' }}>
          {(['work', 'projects'] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              style={{
                padding: '12px 28px',
                background: 'none',
                border: 'none',
                borderBottom: tab === key ? '3px solid #14B8A6' : '3px solid transparent',
                color: tab === key ? '#14B8A6' : '#5A6E68',
                fontWeight: tab === key ? 600 : 500,
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '-1px',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
              }}
            >
              {key === 'work' ? 'Work Experience' : 'Projects'}
            </button>
          ))}
        </div>

        {/* ══ WORK EXPERIENCE ══ */}
        {tab === 'work' && (
          <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
            <Box sx={{
              position: 'absolute',
              left: '50%', top: 40, bottom: 40,
              width: '3px',
              backgroundColor: '#DDE5E1',
              transform: 'translateX(-50%)',
              zIndex: 1,
              pointerEvents: 'none',
              display: { xs: 'none', md: 'block' },
            }} />
            <Stack spacing={{ xs: 8, md: 10 }}>
              {workExperiences.map((item, index) => {
                const isRight = index % 2 === 1;
                return (
                  <Box key={index} sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: 3, md: 6 },
                    position: 'relative',
                  }}>
                    <Box sx={{
                      width: 16, height: 16,
                      bgcolor: '#fff',
                      border: `3px solid ${colors.teal}`,
                      borderRadius: '50%',
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '28px',
                      zIndex: 2,
                      display: { xs: 'none', md: 'block' },
                    }} />
                    {isRight ? (
                      <>
                        <EntryContent item={item} isRight={true} />
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

        {/* ══ PROJECTS ══ */}
        {tab === 'projects' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {projects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #E8F4F0',
                  borderRadius: '12px',
                  padding: '28px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#14B8A6';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(20,184,166,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E8F4F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <p style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.sage, marginBottom: '10px' }}>
                  {p.number}
                </p>
                <p style={{ fontSize: '17px', fontWeight: 500, color: colors.text, lineHeight: 1.35, marginBottom: '12px' }}>
                  {p.title}
                </p>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: colors.muted, marginBottom: '20px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.tags.map((tag, ti) => (
                    <span key={ti} style={{
                      background: '#F0F7F4',
                      color: colors.sage,
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '20px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </Container>
    </Box>
  );
}

function EntryContent({ item, isRight }: { item: typeof workExperiences[0]; isRight: boolean }) {
  return (
    <Box sx={{
      textAlign: { xs: 'left', md: isRight ? 'right' : 'left' },
      pl: { md: isRight ? 0 : 8 },
      pr: { md: isRight ? 8 : 0 },
    }}>
      <Typography sx={{ fontFamily: 'monospace', color: colors.muted, mb: 1, fontSize: '13px' }}>
        {item.date}{item.location ? ` • ${item.location}` : ''}
      </Typography>
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: 1, mb: 1,
        justifyContent: { xs: 'flex-start', md: isRight ? 'flex-end' : 'flex-start' },
      }}>
        <Typography variant="h5" sx={{ color: colors.text, fontWeight: 500 }}>
          {item.role}
        </Typography>
        {item.isRecent && <StarIcon sx={{ color: colors.teal, fontSize: 22 }} />}
      </Box>
      <Typography sx={{ color: colors.sage, fontSize: '15px', mb: 2 }}>
        {item.company}
      </Typography>
      <Typography sx={{ color: colors.muted, lineHeight: 1.8, mb: 2 }}>
        {item.description}
      </Typography>
      <Stack
        direction="row" flexWrap="wrap" gap={1}
        justifyContent={{ xs: 'flex-start', md: isRight ? 'flex-end' : 'flex-start' }}
      >
        {item.tags.map((tag, i) => (
          <Chip key={i} label={tag} size="small"
            sx={{ backgroundColor: '#E8F4F0', color: colors.sage, fontFamily: 'monospace' }}
          />
        ))}
      </Stack>
    </Box>
  );
}