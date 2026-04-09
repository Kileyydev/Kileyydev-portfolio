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
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  text: '#1C2B27',
  muted: '#5A6E68',
};

const BlogCard = styled(Paper)({
  backgroundColor: '#fff',
  border: '1px solid #E8F4F0',
  borderRadius: '12px',
  padding: '28px 24px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: colors.teal,
    transform: 'translateY(-4px)',
    boxShadow: '0 15px 30px rgba(20, 184, 166, 0.1)',
  },
});

const BlogsSection = () => {
  const router = useRouter();

  const blogPosts = [
    {
      number: "01",
      title: "Why Human Factors Are the Biggest Risk in Cybersecurity",
      description: "Exploring how user behavior contributes to breaches and practical ways organizations can build stronger security awareness culture.",
      date: "March 2026",
      readTime: "8 min read",
      tags: ["GRC", "Security Awareness"]
    },
    {
      number: "02",
      title: "Azure Sentinel in Action: Real Lessons from Alert Triage",
      description: "Key insights I learned while reducing alert backlog by 30% during my CyBlack internship.",
      date: "February 2026",
      readTime: "11 min read",
      tags: ["Azure", "Sentinel"]
    },
    {
      number: "03",
      title: "Building Trust in Supply Chains Using Blockchain",
      description: "How FairTrace demonstrates the power of smart contracts in agricultural traceability and risk reduction.",
      date: "January 2026",
      readTime: "9 min read",
      tags: ["Blockchain", "Supply Chain"]
    },
    {
      number: "04",
      title: "Communicating Risk: From Technical Jargon to Business Value",
      description: "How to translate complex cybersecurity findings into clear, actionable insights for leadership.",
      date: "December 2025",
      readTime: "7 min read",
      tags: ["Risk Advisory", "Communication"]
    }
  ];

  return (
    <Box sx={{ backgroundColor: colors.lightBg, py: 8 }}>   {/* Reduced vertical padding */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.sage,
              fontFamily: 'monospace',
              letterSpacing: '2px',
              fontSize: '13px',
            }}
          >
            BLOGS & THOUGHTS
          </Typography>

          {/* Underlined Link */}
          <Typography
            onClick={() => router.push('/blog')}
            sx={{
              color: colors.teal,
              fontFamily: 'monospace',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
              '&:hover': {
                color: '#1F5246',
              },
            }}
          >
            View all posts →
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3.5   // Reduced gap
          }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={index} elevation={0}>
              <Typography
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: colors.sage,
                  mb: 1.5,
                }}
              >
                {post.number} • {post.date}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: colors.text,
                  lineHeight: 1.35,
                  mb: 2.5,
                }}
              >
                {post.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '15.5px',
                  lineHeight: 1.7,
                  color: colors.muted,
                  mb: 4,
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
                      backgroundColor: '#F0F7F4',
                      color: colors.sage,
                      fontSize: '12.5px',
                      fontFamily: 'monospace',
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