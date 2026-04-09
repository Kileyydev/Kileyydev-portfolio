'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Footer from '../homepage/components/Footer';
import TopNavBar from '../homepage/components/TopNavBar';
import { posts } from '@/data/blog';

const tagBg: Record<string, string> = {
  GRC: '#EAF5F1',
  'Cloud Security': '#E6F1FB',
  Research: '#FAEEDA',
  Career: '#FBEAF0',
};

const tagTxt: Record<string, string> = {
  GRC: '#1F6B54',
  'Cloud Security': '#185FA5',
  Research: '#854F0B',
  Career: '#993556',
};

export default function BlogPage() {
  return (
    <><TopNavBar /><main>
          <Box sx={{ backgroundColor: '#F8F6F2' }}>

              {/* Header */}
              <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 7, md: 9 }, borderBottom: '1px solid #E5E9E6' }}>
                  <Typography
                      variant="overline"
                      sx={{
                          color: '#2A6B5A',
                          display: 'block',
                          mb: 2.5,
                          fontFamily: 'monospace',
                          letterSpacing: '2px'
                      }}
                  >
            // thoughts & writing
                  </Typography>

                  <Typography
                      variant="h2"
                      sx={{
                          color: '#1C2B27',
                          fontSize: { xs: '2.6rem', md: '3.2rem' },
                          fontWeight: 300,
                          lineHeight: 1.15
                      }}
                  >
                      The Ivy <span style={{ color: '#14B8A6', fontStyle: 'italic' }}>Perspective</span>
                  </Typography>

                  <Typography
                      variant="body1"
                      sx={{
                          color: '#5A6E68',
                          maxWidth: 580,
                          mt: 2,
                          lineHeight: 1.8
                      }}
                  >
                      Reflections on cybersecurity, GRC, risk advisory, and building a meaningful career at the intersection of technology and people.
                  </Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 320px' } }}>

                  {/* Main Posts */}
                  <Box sx={{ px: { xs: 3, md: 6 }, py: 6, borderRight: { lg: '1px solid #E5E9E6' } }}>
                      {posts.map((post, i) => (
                          <Box
                              key={post.slug}
                              component={Link}
                              href={`/blog/${post.slug}`}
                              sx={{
                                  display: 'block',
                                  pb: 5,
                                  mb: 5,
                                  borderBottom: i < posts.length - 1 ? '1px solid #E5E9E6' : 'none',
                                  textDecoration: 'none',
                                  '&:hover .post-title': { color: '#14B8A6' }
                              }}
                          >
                              <Box
                                  sx={{
                                      display: 'inline-block',
                                      mb: 1.5,
                                      px: 1.75,
                                      py: 0.5,
                                      borderRadius: '4px',
                                      background: tagBg[post.tag] || '#EAF5F1',
                                      fontFamily: '"JetBrains Mono", monospace',
                                      fontSize: '0.65rem',
                                      color: tagTxt[post.tag] || '#1F6B54'
                                  }}
                              >
                                  {post.tag}
                              </Box>

                              <Typography
                                  className="post-title"
                                  sx={{
                                      fontFamily: '"Playfair Display", serif',
                                      fontSize: '1.45rem',
                                      fontWeight: 400,
                                      color: '#1C2B27',
                                      mb: 1.5,
                                      lineHeight: 1.3,
                                      transition: 'color 0.2s'
                                  }}
                              >
                                  {post.title}
                              </Typography>

                              <Typography variant="body2" sx={{ color: '#5A6E68', mb: 2, lineHeight: 1.7 }}>
                                  {post.excerpt}
                              </Typography>

                              <Box
                                  sx={{
                                      display: 'flex',
                                      gap: 1.5,
                                      fontFamily: '"JetBrains Mono", monospace',
                                      fontSize: '0.7rem',
                                      color: '#5A6E68'
                                  }}
                              >
                                  <span>{post.date}</span>
                                  <span>·</span>
                                  <span>{post.readTime}</span>
                                  <span>·</span>
                                  <span>Ivy Kiley</span>
                              </Box>
                          </Box>
                      ))}
                  </Box>

                  {/* Sidebar */}
                  <Box sx={{ px: { xs: 3, md: 4 }, py: 6, display: { xs: 'none', lg: 'block' } }}>
                      <Box sx={{ mb: 6 }}>
                          <Typography variant="overline" sx={{ color: '#5A6E68', display: 'block', mb: 2, fontFamily: 'monospace' }}>
                              TOPICS
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {['GRC', 'Cloud Security', 'Risk', 'SIEM', 'Incident Response', 'Azure', 'Python', 'Career', 'Blockchain', 'Research'].map(t => (
                                  <Box
                                      key={t}
                                      sx={{
                                          fontFamily: '"JetBrains Mono", monospace',
                                          fontSize: '0.7rem',
                                          px: 2,
                                          py: 0.75,
                                          border: '1px solid #E5E9E6',
                                          borderRadius: '40px',
                                          color: '#5A6E68',
                                          cursor: 'pointer',
                                          '&:hover': {
                                              bgcolor: '#EAF5F1',
                                              color: '#14B8A6',
                                              borderColor: '#C2E2D8'
                                          },
                                          transition: 'all .2s'
                                      }}
                                  >
                                      {t}
                                  </Box>
                              ))}
                          </Box>
                      </Box>

                      {/* Newsletter */}
                      <Box sx={{ bgcolor: '#fff', border: '1px solid #E5E9E6', borderRadius: 2, p: 3.5, mb: 3 }}>
                          <Typography variant="h4" sx={{ mb: 1, color: '#1C2B27' }}>Stay in the loop</Typography>
                          <Typography variant="body2" sx={{ color: '#5A6E68', mb: 3 }}>
                              New thoughts on cybersecurity, GRC, and risk — delivered quietly.
                          </Typography>
                          <Box
                              component="input"
                              type="email"
                              placeholder="your@email.com"
                              sx={{
                                  width: '100%',
                                  px: 2.5,
                                  py: 1.5,
                                  border: '1px solid #E5E9E6',
                                  borderRadius: 1,
                                  fontSize: '0.9rem',
                                  mb: 2,
                                  '&:focus': { borderColor: '#14B8A6', outline: 'none' }
                              }} />
                          <Box
                              component="button"
                              sx={{
                                  width: '100%',
                                  py: 1.6,
                                  bgcolor: '#14B8A6',
                                  color: 'white',
                                  fontFamily: '"JetBrains Mono", monospace',
                                  fontSize: '0.75rem',
                                  letterSpacing: '0.8px',
                                  border: 'none',
                                  borderRadius: 1,
                                  cursor: 'pointer',
                                  '&:hover': { bgcolor: '#2A6B5A' }
                              }}
                          >
                              SUBSCRIBE
                          </Box>
                      </Box>

                      {/* Author Card */}
                      <Box sx={{ bgcolor: '#fff', border: '1px solid #E5E9E6', borderRadius: 2, p: 3.5 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                              <Box
                                  sx={{
                                      width: 48,
                                      height: 48,
                                      borderRadius: '50%',
                                      bgcolor: '#EAF5F1',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontFamily: '"JetBrains Mono", monospace',
                                      fontSize: '1.1rem',
                                      color: '#2A6B5A',
                                      fontWeight: 600
                                  }}
                              >
                                  IK
                              </Box>
                              <Box>
                                  <Typography variant="h5" sx={{ color: '#1C2B27' }}>Ivy Mutanu Kiley</Typography>
                                  <Typography variant="caption" sx={{ color: '#5A6E68' }}>Cybersecurity • GRC • Risk</Typography>
                              </Box>
                          </Box>
                          <Typography variant="body2" sx={{ color: '#5A6E68', lineHeight: 1.75 }}>
                              Nairobi-based cybersecurity student writing about building secure systems and meaningful tech careers.
                          </Typography>
                      </Box>
                  </Box>
              </Box>

              <Footer />
          </Box>
      </main></>
  );
}