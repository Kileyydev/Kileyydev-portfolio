'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

// ── Terminal ──────────────────────────────────────────────
interface TermLine { prompt?:string; cmd?:string; out?:string; outColor?:string; blank?:boolean; }
interface TerminalProps { title?: string; lines: TermLine[]; cursor?: boolean; sx?: object; }

export function Terminal({ title, lines, cursor = true, sx }: TerminalProps) {
  const C = { green:'#5CB88A', text:'#8A9BA8', muted:'#3D7055', amber:'#D4A843', blue:'#4A9EBF', purple:'#B87ACA', bar:'#142018', bg:'#0F1F18' };
  return (
    <Box sx={{ background: C.bg, borderRadius: 2, overflow: 'hidden', ...sx }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:0.75, px:2, py:1.25, background: C.bar }}>
        {['#E06C75','#E5C07B','#98C379'].map(c => <Box key={c} sx={{ width:9,height:9,borderRadius:'50%',background:c }}/>)}
        {title && <Typography sx={{ ml:0.75, fontFamily:'"JetBrains Mono",monospace', fontSize:'0.6rem', color:'#2E6A45', letterSpacing:'.08em' }}>{title}</Typography>}
      </Box>
      <Box sx={{ p:'16px 20px', fontFamily:'"JetBrains Mono",monospace', fontSize:'0.7rem', lineHeight: 2.0 }}>
        {lines.map((line, i) => {
          if (line.blank) return <br key={i}/>;
          if (line.prompt && line.cmd) return <Box key={i}><span style={{color:C.green}}>{line.prompt}</span><span style={{color:C.text}}> {line.cmd}</span></Box>;
          if (line.out) return <Box key={i} sx={{ color: line.outColor || C.muted }}>{line.out}</Box>;
          return null;
        })}
        {cursor && (
          <Box component="span">
            <span style={{color:C.green}}>ivy@portfolio</span>
            <span style={{color:C.text}}> ~ $ </span>
            <Box component="span" sx={{ display:'inline-block',width:7,height:12,background:C.green,verticalAlign:'middle', animation:'blink 1.2s step-end infinite', '@keyframes blink':{'0%,100%':{opacity:1},'50%':{opacity:0}} }}/>
          </Box>
        )}
      </Box>
    </Box>
  );
}

// ── SectionLabel ──────────────────────────────────────────
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display:'flex', alignItems:'center', gap:1.5, mb:5 }}>
      <Typography variant="overline" sx={{ color:'primary.main', letterSpacing:'0.14em', whiteSpace:'nowrap' }}>{children}</Typography>
      <Box sx={{ flex:1, height:'0.5px', bgcolor:'divider' }}/>
    </Box>
  );
}

// ── Footer ────────────────────────────────────────────────
export function Footer({ right }: { right?: string }) {
  return (
    <Box sx={{ display:'flex',justifyContent:'space-between',alignItems:'center',px:{xs:2.5,md:6},py:2.5,borderTop:'1px solid',borderColor:'divider' }}>
      <Typography variant="caption" sx={{ color:'primary.main' }}>ivy.mutanu.kiley · 2026</Typography>
      <Typography variant="caption" sx={{ color:'text.disabled' }}>{right || 'Nairobi, Kenya · open to relocate'}</Typography>
    </Box>
  );
}

// ── GeoIllustration (hero SVG art) ───────────────────────
export function GeoIllustration() {
  return (
    <svg style={{ width:'100%', height:'100%', display:'block' }} viewBox="0 0 380 360" xmlns="http://www.w3.org/2000/svg">
      <rect width="380" height="360" fill="#0F1F18"/>
      {[80,160,240,320].map(y=><line key={`h${y}`} x1="0" y1={y} x2="380" y2={y} stroke="#182E22" strokeWidth=".5"/>)}
      {[76,152,228,304].map(x=><line key={`v${x}`} x1={x} y1="0" x2={x} y2="360" stroke="#182E22" strokeWidth=".5"/>)}
      <circle cx="280" cy="110" r="90" fill="#1F6B54" opacity=".22"/>
      <circle cx="280" cy="110" r="55" fill="#2E8F6F" opacity=".18"/>
      <circle cx="280" cy="110" r="26" fill="#5BB89A" opacity=".22"/>
      <polygon points="80,158 108,141 136,158 136,192 108,209 80,192" fill="none" stroke="#2E8F6F" strokeWidth=".8"/>
      <polygon points="80,158 108,141 136,158 136,192 108,209 80,192" fill="#2E8F6F" opacity=".07"/>
      <line x1="108" y1="209" x2="190" y2="262" stroke="#2E8F6F" strokeWidth=".7" opacity=".5"/>
      <line x1="136" y1="175" x2="240" y2="148" stroke="#2E8F6F" strokeWidth=".7" opacity=".4"/>
      <line x1="240" y1="148" x2="280" y2="110" stroke="#5BB89A" strokeWidth=".7" opacity=".5"/>
      <circle cx="190" cy="262" r="4" fill="#5BB89A" opacity=".8"/>
      <circle cx="240" cy="148" r="3" fill="#B8860B" opacity=".9"/>
      <circle cx="50" cy="248" r="4" fill="#2E8F6F" opacity=".6"/>
      <line x1="50" y1="248" x2="190" y2="262" stroke="#2E8F6F" strokeWidth=".5" opacity=".3"/>
      <circle cx="340" cy="268" r="3" fill="#5BB89A" opacity=".5"/>
      <path d="M280 198 L296 208 L296 230 Q296 242 280 248 Q264 242 264 230 L264 208 Z" fill="none" stroke="#2E8F6F" strokeWidth=".8" opacity=".5"/>
      <path d="M274 222 L279 227 L287 218" fill="none" stroke="#5CB88A" strokeWidth="1.1" strokeLinecap="round"/>
      <text x="28" y="48" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#2A5A3A" letterSpacing=".08em">sentinel.monitor()</text>
      <text x="28" y="330" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#2A5A3A" letterSpacing=".08em">grc.align(nist)</text>
      <text x="210" y="340" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#2A5A3A" letterSpacing=".08em">risk.score()</text>
      <text x="160" y="108" fontFamily="Playfair Display,serif" fontSize="60" fill="#2E8F6F" opacity=".08" fontStyle="italic">IK</text>
    </svg>
  );
}

// ── Chip / Tag ─────────────────────────────────────────────
export function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <Box component="span" sx={{
      fontFamily:'"JetBrains Mono",monospace', fontSize:'0.6rem', letterSpacing:'.03em',
      px:1, py:0.4, borderRadius:0.5,
      background: dark ? '#162A20' : '#EAF5F1',
      color: dark ? '#5CB88A' : '#1F6B54',
      border: dark ? '1px solid #2E5040' : 'none',
    }}>{label}</Box>
  );
}
