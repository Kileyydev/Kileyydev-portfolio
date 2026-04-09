'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/app/homepage/components/Footer';
import { getPost, posts } from '@/data/blog';
import TopNavBar from '@/app/homepage/components/TopNavBar';
export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split('\n').filter(Boolean);

  return (
    <><TopNavBar /><main>
          <Box sx={{ backgroundColor: '#F8F6F2', minHeight: '100vh' }}>
              <Box sx={{ maxWidth: 760, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 6, md: 10 } }}>

                  {/* Back Link */}
                  <Box
                      component={Link}
                      href="/blog"
                      sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          mb: 5,
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '0.75rem',
                          color: '#2A6B5A',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                      }}
                  >
                      ← back to blog
                  </Box>

                  {/* Tag */}
                  <Box
                      sx={{
                          display: 'inline-block',
                          mb: 2,
                          px: 1.75,
                          py: 0.5,
                          borderRadius: '4px',
                          background: tagBg[post.tag] || '#EAF5F1',
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '0.65rem',
                          color: tagTxt[post.tag] || '#1F6B54',
                          letterSpacing: '0.5px'
                      }}
                  >
                      {post.tag}
                  </Box>

                  {/* Title */}
                  <Typography
                      variant="h2"
                      sx={{
                          mb: 3,
                          lineHeight: 1.15,
                          color: '#1C2B27',
                          fontSize: { xs: '2.4rem', md: '2.8rem' },
                          fontWeight: 400
                      }}
                  >
                      {post.title}
                  </Typography>

                  {/* Meta */}
                  <Box
                      sx={{
                          display: 'flex',
                          gap: 1.5,
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '0.7rem',
                          color: '#5A6E68',
                          pb: 4,
                          mb: 5,
                          borderBottom: '1px solid #E5E9E6'
                      }}
                  >
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>Ivy Kiley</span>
                  </Box>

                  {/* Content */}
                  <Box
                      sx={{
                          '& h2': { fontFamily: '"Playfair Display", serif', fontSize: '1.55rem', fontWeight: 400, color: '#1C2B27', mt: 6, mb: 2.5 },
                          '& p': { color: '#5A6E68', lineHeight: 1.95, mb: 2.8, fontSize: '1.02rem' },
                          '& blockquote': {
                              borderLeft: '4px solid #14B8A6',
                              pl: 3,
                              py: 1,
                              my: 4,
                              background: '#EAF5F1',
                              borderRadius: '0 8px 8px 0',
                              '& p': { fontStyle: 'italic', color: '#2A6B5A' }
                          },
                          '& code': {
                              fontFamily: '"JetBrains Mono", monospace',
                              bgcolor: '#EAF5F1',
                              color: '#14B8A6',
                              px: 1,
                              py: 0.2,
                              borderRadius: 1
                          },
                      }}
                  >
                      {paragraphs.map((line, i) => {
                          if (line.startsWith('## ')) {
                              return <Typography key={i} component="h2" sx={{ fontFamily: '"Playfair Display", serif' }}>{line.replace('## ', '')}</Typography>;
                          }
                          if (line.startsWith('> ')) {
                              return (
                                  <Box key={i} component="blockquote">
                                      <Typography>{line.replace('> ', '').replace(/\*/g, '')}</Typography>
                                  </Box>
                              );
                          }
                          return (
                              <Typography key={i} variant="body1">
                                  {line}
                              </Typography>
                          );
                      })}
                  </Box>

                  {/* Navigation */}
                  <Box
                      sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          pt: 6,
                          mt: 8,
                          borderTop: '1px solid #E5E9E6'
                      }}
                  >
                      <Box component={Link} href="/blog" sx={{ fontFamily: '"JetBrains Mono", monospace', color: '#2A6B5A', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                          ← all posts
                      </Box>
                      <Box component={Link} href="/contact" sx={{ fontFamily: '"JetBrains Mono", monospace', color: '#2A6B5A', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                          get in touch →
                      </Box>
                  </Box>
              </Box>
          </Box>

          <Footer />
      </main></>
  );
}