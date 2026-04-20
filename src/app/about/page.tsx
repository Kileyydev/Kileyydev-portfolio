'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';
import { SectionLabel, Tag } from '@/components';
import { experience, skills, certifications } from '@/data/portfolio';
import TopNavBar from '../homepage/components/TopNavBar';
import Footer from '../homepage/components/Footer';

const colors = {
  primary: '#6B4E3D',      // Deep warm brown
  accent: '#D4A88A',       // Soft gold / warm highlight
  lightBg: '#F8F4ED',      // Warm cream background
  text: '#2C211B',         // Dark rich brown
  muted: '#8C745E',        // Soft brown
};

const AboutTerminal = styled(Paper)({
  backgroundColor: '#1C1612',        // Warm dark
  color: '#EDE4D8',                  // Warm light text
  fontFamily: '"Ubuntu Mono", monospace',
  padding: '32px',
  borderRadius: '12px',
  border: '1px solid #3C2F2F',
  boxShadow: '0 20px 50px rgba(107, 78, 61, 0.25)',
  width: '100%',
  minHeight: '360px',
});

export default function AboutPage() {
  return (
    <>
      <TopNavBar/>
      <main>
        <Box sx={{ backgroundColor: colors.lightBg }}>

        {/* SPLIT HEADER */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, borderBottom: '1px solid', borderColor: '#EDE4D8' }}>
          
          {/* LEFT: About Me */}
          <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 7, md: 9 }, borderRight: { md: '1px solid' }, borderColor: '#EDE4D8' }}>
            <Typography 
              variant="overline" 
              sx={{ color: colors.accent, display: 'block', mb: 2.5, fontFamily: 'monospace', letterSpacing: '2px' }}
            >
              // about me
            </Typography>
            
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3, 
                lineHeight: 1.15, 
                color: colors.text,
                fontSize: { xs: '40px', md: '50px' },
                fontWeight: 300 
              }}
            >
              Calm under <span style={{ color: colors.accent, fontStyle: 'italic' }}>pressure.</span><br />
              Clear in complexity.
            </Typography>

            <Typography variant="body1" sx={{ color: colors.muted, mb: 2.5, lineHeight: 1.85 }}>
              I bring technical depth and human-centered thinking to cybersecurity. 
              Whether building awareness platforms, designing blockchain systems, 
              or creating insider threat solutions, I approach every challenge with patience and precision.
            </Typography>

            <Typography variant="body1" sx={{ color: colors.muted, lineHeight: 1.85 }}>
              Based in Nairobi. Strathmore University BSc Computer Networks & Cybersecurity (Expected 2026). 
              Passionate about GRC, cloud security, and making security practical for real people.
            </Typography>
          </Box>

          {/* RIGHT: Education & Certifications */}
          <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 7, md: 9 }, bgcolor: '#fff' }}>
            <Typography 
              variant="overline" 
              sx={{ color: colors.accent, display: 'block', mb: 3, fontFamily: 'monospace', letterSpacing: '2px' }}
            >
              // education & certifications
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ mb: 0.5, color: colors.text }}>
                BSc Computer Networks & Cybersecurity
              </Typography>
              <Typography sx={{ color: colors.accent, mb: 2 }}>
                Strathmore University · 2022 – 2026
              </Typography>
              <Typography variant="body2" sx={{ color: colors.muted }}>
                Network Security, Penetration Testing, Ethical Hacking, Malware Analysis, 
                Cryptography, Blockchain, Cloud Security, Linux Administration
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
              {certifications.map((c) => (
                <Box 
                  key={c.name} 
                  component="a" 
                  href={c.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5, 
                    p: 1.75, 
                    border: '1px solid #EDE4D8', 
                    borderRadius: 2, 
                    textDecoration: 'none',
                    '&:hover': { borderColor: colors.accent }
                  }}
                >
                  <Box sx={{ width: 32, height: 32, bgcolor: '#F5EDE4', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: colors.text }}>{c.name}</Typography>
                    <Typography variant="caption" sx={{ color: colors.muted }}>{c.issuer} · {c.year}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* TERMINAL SECTION - Warm Brown Theme */}
        <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 10 } }}>
          <AboutTerminal>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, pb: 2, borderBottom: '1px solid #3C2F2F' }}>
              <TerminalIcon sx={{ color: '#D4A88A' }} />
              <Typography sx={{ color: '#E8D9C4', fontSize: '14.5px' }}>
                ivy@portfolio:~#
              </Typography>
            </Box>

            <Typography
              component="pre"
              sx={{
                fontFamily: '"Ubuntu Mono", monospace',
                fontSize: '15.2px',
                lineHeight: 1.8,
                color: '#EDE4D8',
                whiteSpace: 'pre-wrap',
              }}
            >
{`ivy@portfolio:~# whoami
Cybersecurity builder & student @ Strathmore University

ivy@portfolio:~# configure --mode resilience
→ Building human-centered security awareness platforms
→ Implementing GRC & cloud security controls
→ Designing behavioral risk & insider threat solutions

Configuration successful.

ivy@portfolio:~# echo "Security Philosophy"
Calm analysis. Precise execution. Human-first mindset.
Security is not just protection — it's enabling trust and clarity.

ivy@portfolio:~# █`}
            </Typography>
          </AboutTerminal>
        </Box>

        {/* EXPERIENCE */}
        <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 9 }, borderTop: '1px solid #EDE4D8' }}>
          <SectionLabel>work experience</SectionLabel>
          {experience.map((e, idx) => (
            <Box key={idx} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '120px 20px 1fr' }, gap: { xs: 1, sm: '0 20px' }, pb: 5 }}>
              <Typography variant="caption" sx={{ color: colors.muted, textAlign: { sm: 'right' }, pt: { sm: '4px' } }}>
                {e.period}{e.location && <><br />{e.location}</>}
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colors.accent, mt: '4px' }} />
                {idx < experience.length - 1 && <Box sx={{ flex: 1, width: '1px', bgcolor: '#EDE4D8', mt: 0.5 }} />}
              </Box>
              <Box>
                <Typography sx={{ color: colors.primary, letterSpacing: '.06em', mb: 0.5 }}>{e.company}</Typography>
                <Typography variant="h4" sx={{ mb: 1, color: colors.text }}>{e.title}</Typography>
                <Typography variant="body2" sx={{ color: colors.muted, mb: 2 }}>{e.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {e.tags.map(t => <Tag key={t} label={t} />)}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* CORE SKILLS */}
        <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 9 } }}>
          <SectionLabel>core skills</SectionLabel>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {skills.map(g => (
              <Box key={g.category}>
                <Typography variant="overline" sx={{ color: colors.muted, mb: 2, display: 'block' }}>
                  {g.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {g.items.map(item => (
                    <Box 
                      key={item} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1, 
                        px: 3, 
                        py: 1.2, 
                        bgcolor: '#fff', 
                        border: '1px solid #EDE4D8', 
                        borderRadius: '40px' 
                      }}
                    >
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.accent }} />
                      <Typography sx={{ fontSize: '0.8rem', color: colors.text }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Footer/>
      </Box>
    </main>
    </>
  );
}