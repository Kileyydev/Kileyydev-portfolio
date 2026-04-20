'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const colors = {
  bg: '#070604',
  card: '#0E1512',
  text: '#F5F0E9',
  accent: '#D4B89E',
  muted: '#B8A78F',
  border: 'rgba(212, 184, 158, 0.15)',
};

/* ───────── BLOG CARD ───────── */

const BlogCard = styled(Paper)({
  background: 'linear-gradient(145deg, #0E1512, #0B110E)',
  border: `1px solid ${colors.border}`,
  borderRadius: '14px',
  padding: '28px 24px',
  height: '100%',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  boxShadow: '0 20px 50px rgba(0,0,0,0.35)',

  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: colors.accent,
    boxShadow: '0 25px 70px rgba(212,184,158,0.08)',
  },
});

const BlogsSection = () => {
  const router = useRouter();

  const blogPosts = [
    {
      number: '01',
      title: 'Why Human Factors Are the Biggest Risk in Cybersecurity',
      description:
        'How user behavior contributes to breaches and how organizations can build stronger security culture.',
      date: 'March 2026',
      readTime: '8 min read',
      tags: ['GRC', 'Security Awareness'],
    },
    {
      number: '02',
      title: 'Azure Sentinel in Action: Real Lessons from Alert Triage',
      description:
        'Key insights from reducing alert backlog by 30% during my CyBlack internship.',
      date: 'February 2026',
      readTime: '11 min read',
      tags: ['Azure', 'Sentinel'],
    },
    {
      number: '03',
      title: 'Building Trust in Supply Chains Using Blockchain',
      description:
        'How blockchain enables transparency and risk reduction in agricultural systems.',
      date: 'January 2026',
      readTime: '9 min read',
      tags: ['Blockchain', 'Supply Chain'],
    },
    {
      number: '04',
      title: 'Communicating Risk to Business Leaders',
      description:
        'Turning technical cybersecurity findings into clear executive insights.',
      date: 'December 2025',
      readTime: '7 min read',
      tags: ['Risk Advisory', 'Communication'],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.bg,
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6,
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
            BLOGS & THOUGHTS
          </Typography>

          <Typography
            onClick={() => router.push('/blog')}
            sx={{
              color: colors.accent,
              fontFamily: 'monospace',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
              opacity: 0.85,
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            View all posts →
          </Typography>
        </Box>

        {/* GRID */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 3.5,
          }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={index} elevation={0}>
              <Typography
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '12.5px',
                  color: colors.accent,
                  mb: 1.5,
                }}
              >
                {post.number} • {post.date}
              </Typography>

              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: colors.text,
                  lineHeight: 1.4,
                  mb: 2,
                }}
              >
                {post.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: colors.muted,
                  mb: 3,
                }}
              >
                {post.description}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {post.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    size="small"
                    sx={{
                      background: 'rgba(212,184,158,0.08)',
                      color: colors.accent,
                      fontFamily: 'monospace',
                      fontSize: '11.5px',
                      border: `1px solid ${colors.border}`,
                    }}
                  />
                ))}
              </Stack>
            </BlogCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogsSection;