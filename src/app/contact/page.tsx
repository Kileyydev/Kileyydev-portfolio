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
  sage: '#2A6B5A',
  teal: '#14B8A6',
  lightBg: '#F8F6F2',
  text: '#1C2B27',
  muted: '#5A6E68',
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

  // Proper TypeScript handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <TopNavBar />
      <main>
        <Box sx={{ backgroundColor: colors.lightBg, minHeight: '100vh' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, minHeight: 'calc(100vh - 60px)' }}>

            {/* LEFT SIDE - Info */}
            <Box sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 7, md: 9 },
              borderRight: { md: '1px solid #E5E9E6' },
              bgcolor: '#fff'
            }}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.sage,
                  display: 'block',
                  mb: 2.5,
                  fontFamily: 'monospace',
                  letterSpacing: '2px'
                }}
              >
                // let's connect
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  lineHeight: 1.12,
                  color: colors.text,
                  fontSize: { xs: '42px', md: '52px' },
                  fontWeight: 300
                }}
                dangerouslySetInnerHTML={{
                  __html: "Let's build<br/><span style='color:#14B8A6; font-style:italic'>resilient</span><br/>things<br/>together."
                }}
              />

              <Typography variant="body1" sx={{ color: colors.muted, mb: 5, lineHeight: 1.85, maxWidth: 520 }}>
                Open to Risk Consulting, GRC, Cloud Security, and Cybersecurity roles globally. 
                I bring calm precision, technical depth, and genuine care for people to every team I join. 
                Willing to relocate internationally.
              </Typography>

              {/* Contact Links */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 6 }}>
                {links.map((l) => (
                  <Box
                    key={l.label}
                    component="a"
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      px: 2.5,
                      py: 1.8,
                      border: '1px solid #E5E9E6',
                      borderRadius: 2,
                      bgcolor: '#fff',
                      textDecoration: 'none',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      color: colors.sage,
                      transition: 'all .2s',
                      '&:hover': {
                        bgcolor: '#EAF5F1',
                        borderColor: colors.teal
                      }
                    }}
                  >
                    <span style={{ color: colors.teal }}>→</span> {l.label}
                  </Box>
                ))}
              </Box>

              {/* Terminal */}
              <Terminal
                title="ivy@contact ~ status"
                lines={[
                  { prompt: 'ivy@contact', cmd: '~ $ cat available.json' },
                  { out: '{', outColor: '#8A9BA8' },
                  { out: '  "open_to_work": true,', outColor: '#8A9BA8' },
                  { out: '  "relocate": true,', outColor: '#8A9BA8' },
                  { out: '  "focus": "GRC · Risk · Cloud Security",', outColor: '#B87ACA' },
                  { out: '  "response_time": "fast"', outColor: '#B87ACA' },
                  { out: '}', outColor: '#8A9BA8' },
                ]}
                cursor={false}
              />
            </Box>

            {/* RIGHT SIDE - Contact Form */}
            <Box sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 7, md: 9 }
            }}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.sage,
                  display: 'block',
                  mb: 2.5,
                  fontFamily: 'monospace',
                  letterSpacing: '2px'
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
                  fontSize: { xs: '2rem', md: '2.4rem' }
                }}
              >
                Drop me a line
              </Typography>

              {submitted ? (
                <Box sx={{
                  p: 5,
                  bgcolor: '#EAF5F1',
                  border: '1px solid #C2E2D8',
                  borderRadius: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="h4" sx={{ color: colors.teal, mb: 1.5 }}>
                    Message sent successfully!
                  </Typography>
                  <Typography sx={{ color: colors.muted }}>
                    Thank you for reaching out. I'll get back to you within 48 hours.
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {[
                    { label: 'your name', key: 'name', type: 'text', placeholder: 'Jane Smith' },
                    { label: 'email address', key: 'email', type: 'email', placeholder: 'jane@company.com' },
                    { label: 'subject', key: 'subject', type: 'text', placeholder: 'GRC Role · Consulting Opportunity · Just saying hello' },
                  ].map((f) => (
                    <Box key={f.key}>
                      <Typography
                        variant="overline"
                        sx={{ color: colors.muted, display: 'block', mb: 0.75, fontFamily: 'monospace' }}
                      >
                        {f.label}
                      </Typography>
                      <Box
                        component="input"
                        name={f.key}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={handleChange}
                        sx={{
                          width: '100%',
                          px: 2.5,
                          py: 1.6,
                          border: '1px solid #E5E9E6',
                          borderRadius: 1.5,
                          fontSize: '0.95rem',
                          bgcolor: '#fff',
                          color: colors.text,
                          outline: 'none',
                          '&:focus': { borderColor: colors.teal }
                        }}
                      />
                    </Box>
                  ))}

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{ color: colors.muted, display: 'block', mb: 0.75, fontFamily: 'monospace' }}
                    >
                      message
                    </Typography>
                    <Box
                      component="textarea"
                      name="message"
                      placeholder="Tell me what you have in mind..."
                      value={form.message}
                      onChange={handleChange}
                      sx={{
                        width: '100%',
                        px: 2.5,
                        py: 1.8,
                        border: '1px solid #E5E9E6',
                        borderRadius: 1.5,
                        fontSize: '0.95rem',
                        bgcolor: '#fff',
                        color: colors.text,
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: 140,
                        '&:focus': { borderColor: colors.teal }
                      }}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.8,
                      mt: 2,
                      bgcolor: colors.teal,
                      color: 'white',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.8rem',
                      letterSpacing: '0.8px',
                      '&:hover': { bgcolor: colors.sage }
                    }}
                    onClick={() => setSubmitted(true)}
                  >
                    SEND MESSAGE →
                  </Button>

                  <Typography variant="caption" sx={{ color: colors.muted, textAlign: 'center', display: 'block', mt: 1 }}>
                    I respond to all messages within 48 hours.
                  </Typography>
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