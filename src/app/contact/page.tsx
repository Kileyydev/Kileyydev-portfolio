'use client';

import { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Terminal } from '@/components';
import { me } from '@/data/portfolio';
import Footer from '../homepage/components/Footer';
import TopNavBar from '../homepage/components/TopNavBar';

const colors = {
  primary: '#6B4E3D',
  accent: '#D4A88A',
  lightBg: '#F8F4ED',
  text: '#F5F0E9',
  muted: '#B8A78F',
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const links = [
    { label: me.email, href: `mailto:${me.email}` },
    { label: me.phone, href: `tel:${me.phone.replace(/\s/g, '')}` },
    { label: 'LinkedIn: Ivy Kiley', href: me.linkedin },
    { label: 'GitHub: Kileyydev', href: me.github },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <TopNavBar />

      <main>
        {/* 🌑 CINEMATIC BACKGROUND WRAPPER */}
        <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            backgroundImage: "url('/images/contact-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* DARK OVERLAY FOR READABILITY */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(10,8,6,0.92), rgba(10,8,6,0.75))',
              zIndex: 1,
            }}
          />

          {/* CONTENT */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              minHeight: '100vh',
            }}
          >
            {/* LEFT SIDE */}
            <Box
              sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 7, md: 9 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: colors.accent,
                  display: 'block',
                  mb: 2.5,
                  fontFamily: 'monospace',
                  letterSpacing: '2px',
                }}
              >
                // let's connect
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  lineHeight: 1.1,
                  color: colors.text,
                  fontSize: { xs: '42px', md: '52px' },
                  fontWeight: 300,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Let's build<br/><span style='color:#D4A88A; font-style:italic'>resilient</span><br/>systems together.",
                }}
              />

              <Typography
                sx={{
                  color: 'rgba(245,240,233,0.75)',
                  mb: 5,
                  lineHeight: 1.85,
                  maxWidth: 520,
                }}
              >
                Open to Risk Consulting, GRC, Cloud Security, and Cybersecurity roles globally.
              </Typography>

              {/* LINKS */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 6 }}>
                {links.map((l) => (
                  <Box
                    key={l.label}
                    component="a"
                    href={l.href}
                    sx={{
                      color: colors.text,
                      textDecoration: 'none',
                      px: 2.5,
                      py: 1.8,
                      border: '1px solid rgba(212,184,158,0.25)',
                      borderRadius: 2,
                      bgcolor: 'rgba(10,8,6,0.35)',
                      backdropFilter: 'blur(8px)',
                      transition: '0.25s',
                      '&:hover': {
                        borderColor: colors.accent,
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <span style={{ color: colors.accent }}>→</span> {l.label}
                  </Box>
                ))}
              </Box>

              {/* TERMINAL (NOW MATCHES HERO VIBE) */}
              <Terminal
                title="ivy@contact ~ status"
                lines={[
                  { prompt: 'ivy@contact', cmd: '~ $ status' },
                  { out: 'open_to_work: true', outColor: '#D4A88A' },
                  { out: 'focus: GRC · Cloud · Risk', outColor: '#B8A78F' },
                  { out: 'relocate: true', outColor: '#B8A78F' },
                  { out: 'response_time: fast', outColor: '#D4A88A' },
                ]}
                cursor={false}
              />
            </Box>

            {/* RIGHT SIDE - FORM */}
            <Box
              sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 7, md: 9 },
                background: 'rgba(10,8,6,0.35)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: colors.accent,
                  display: 'block',
                  mb: 2.5,
                  fontFamily: 'monospace',
                }}
              >
                // send a message
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  color: colors.text,
                  fontWeight: 400,
                }}
              >
                Drop me a line
              </Typography>

              {submitted ? (
                <Box
                  sx={{
                    p: 5,
                    border: '1px solid rgba(212,184,158,0.3)',
                    borderRadius: 2,
                    bgcolor: 'rgba(10,8,6,0.4)',
                    color: colors.text,
                  }}
                >
                  Message received ✔ I’ll respond soon.
                </Box>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {['name', 'email', 'subject'].map((key) => (
                    <Box key={key}>
                      <Typography sx={{ color: colors.muted, mb: 1, fontFamily: 'monospace' }}>
                        {key}
                      </Typography>
                      <Box
                        component="input"
                        name={key}
                        onChange={handleChange}
                        sx={{
                          width: '100%',
                          px: 2.5,
                          py: 1.5,
                          borderRadius: 1.5,
                          border: '1px solid rgba(212,184,158,0.25)',
                          bgcolor: 'rgba(10,8,6,0.3)',
                          color: colors.text,
                          outline: 'none',
                          '&:focus': { borderColor: colors.accent },
                        }}
                      />
                    </Box>
                  ))}

                  <Box>
                    <Typography sx={{ color: colors.muted, mb: 1, fontFamily: 'monospace' }}>
                      message
                    </Typography>
                    <Box
                      component="textarea"
                      name="message"
                      onChange={handleChange}
                      sx={{
                        width: '100%',
                        minHeight: 140,
                        px: 2.5,
                        py: 1.5,
                        borderRadius: 1.5,
                        border: '1px solid rgba(212,184,158,0.25)',
                        bgcolor: 'rgba(10,8,6,0.3)',
                        color: colors.text,
                        outline: 'none',
                      }}
                    />
                  </Box>

                  <Button
                    onClick={() => setSubmitted(true)}
                    sx={{
                      mt: 2,
                      py: 1.8,
                      bgcolor: colors.accent,
                      color: '#111',
                      '&:hover': { bgcolor: '#E8D9C4' },
                    }}
                  >
                    SEND MESSAGE →
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Footer />
      </main>
    </>
  );
}