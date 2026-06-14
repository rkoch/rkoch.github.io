/* shared.jsx — design tokens, context, primitives */
const { useState, useEffect, useRef, useContext, createContext } = React;

/* ---- navigation context (simple SPA router state) ---- */
window.NavContext = window.NavContext || createContext({ route: 'home', nav: () => {} });

/* ---- tweakable themes ---- */
const ACCENTS = {
  navy:  { '--accent': '#19394e', '--accent-strong': '#102634', '--accent-bright': '#5C9BC0', '--accent-tint': '#E5EAEF', '--dark': '#0C1C28', '--dark-2': '#122838', '--dark-soft': '#93A6B4' },
  teal:  { '--accent': '#0E7F73', '--accent-strong': '#0A5E54', '--accent-bright': '#2FB9A6', '--accent-tint': '#E3EFEB', '--dark': '#0C1F1B', '--dark-2': '#122A25', '--dark-soft': '#93ACA4' },
  slate: { '--accent': '#3C6E8F', '--accent-strong': '#2C5169', '--accent-bright': '#6FAACD', '--accent-tint': '#E4ECF1', '--dark': '#0E1D27', '--dark-2': '#152A37', '--dark-soft': '#95A8B4' },
};
const TYPES = {
  plex:    { '--font-display': "'IBM Plex Sans', system-ui, sans-serif", '--font-body': "'IBM Plex Sans', system-ui, sans-serif", '--display-weight': '600', '--display-spacing': '-0.02em' },
  serif:   { '--font-display': "'Newsreader', Georgia, serif",            '--font-body': "'IBM Plex Sans', system-ui, sans-serif", '--display-weight': '500', '--display-spacing': '-0.01em' },
  grotesk: { '--font-display': "'Space Grotesk', system-ui, sans-serif",  '--font-body': "'IBM Plex Sans', system-ui, sans-serif", '--display-weight': '600', '--display-spacing': '-0.025em' },
};
window.ACCENTS = ACCENTS;
window.TYPES = TYPES;

function applyTheme(accent, type) {
  const root = document.documentElement;
  Object.entries(ACCENTS[accent] || ACCENTS.navy).forEach(([k, v]) => root.style.setProperty(k, v));
  Object.entries(TYPES[type] || TYPES.plex).forEach(([k, v]) => root.style.setProperty(k, v));
}
window.applyTheme = applyTheme;

/* ---- logo mark: venn = 1+1=3 ---- */
function Mark({ size = 30, on = 'light' }) {
  const stroke = on === 'dark' ? 'var(--accent-bright)' : 'var(--accent)';
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true" style={{ display: 'block', flex: 'none' }}>
      <g style={{ mixBlendMode: 'multiply' }}>
        <circle cx="13" cy="17" r="9.2" fill={stroke} fillOpacity="0.5" />
        <circle cx="21" cy="17" r="9.2" fill={stroke} fillOpacity="0.5" />
      </g>
    </svg>
  );
}
window.Mark = Mark;

function Wordmark({ on = 'light', onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none',
      padding: 0, color: on === 'dark' ? '#fff' : 'var(--ink)',
    }}>
      <Mark on={on} />
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em' }}>
        Remo&nbsp;Koch
      </span>
    </button>
  );
}
window.Wordmark = Wordmark;

/* ---- eyebrow label ---- */
function Eyebrow({ children, on = 'light', style }) {
  return (
    <div className="mono" style={{
      color: on === 'dark' ? 'var(--accent-bright)' : 'var(--accent-strong)',
      display: 'flex', alignItems: 'center', gap: 10, ...style,
    }}>
      <span style={{ width: 18, height: 1, background: 'currentColor', opacity: .6 }}></span>
      {children}
    </div>
  );
}
window.Eyebrow = Eyebrow;

/* ---- button ---- */
function Button({ children, variant = 'primary', on = 'light', onClick, full }) {
  const [h, setH] = useState(false);
  const base = {
    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15.5,
    padding: '15px 26px', borderRadius: 2, border: '1px solid transparent',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    transition: 'all .22s ease', width: full ? '100%' : 'auto', letterSpacing: '-0.01em',
    transform: h ? 'translateY(-1px)' : 'none',
  };
  const styles = {
    primary: { ...base, background: h ? 'var(--accent-strong)' : 'var(--accent)', color: '#fff',
      boxShadow: h ? '0 10px 24px -10px var(--accent-strong)' : '0 6px 16px -10px var(--accent-strong)' },
    ghost: { ...base, background: 'transparent',
      borderColor: on === 'dark' ? 'rgba(255,255,255,.28)' : 'var(--line-2)',
      color: on === 'dark' ? '#fff' : 'var(--ink)',
      backgroundColor: h ? (on === 'dark' ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.03)') : 'transparent' },
    light: { ...base, background: h ? '#fff' : 'rgba(255,255,255,.92)', color: 'var(--dark)' },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={styles[variant]}>
      {children}
      {variant === 'primary' && <Arrow />}
    </button>
  );
}
window.Button = Button;

function Arrow({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
window.Arrow = Arrow;

/* ---- reveal-on-scroll wrapper (scroll-position based; IO is unreliable here) ---- */
function Reveal({ children, delay = 0, as = 'div', style, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const check = () => {
      if (done || !el.isConnected) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) {
        done = true;
        el.classList.add('in');
        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      }
    };
    // initial check after layout settles
    const raf = requestAnimationFrame(() => { check(); requestAnimationFrame(check); });
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    const safety = setTimeout(() => { if (!done) { el.classList.add('in'); } }, 1600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}
window.Reveal = Reveal;

/* ---- section heading block ---- */
function SectionHead({ eyebrow, title, intro, on = 'light', align = 'left', max = 640 }) {
  return (
    <div style={{ maxWidth: max, textAlign: align, margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <Eyebrow on={on} style={{ justifyContent: align === 'center' ? 'center' : 'flex-start', marginBottom: 20 }}>{eyebrow}</Eyebrow>}
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: on === 'dark' ? '#fff' : 'var(--ink)' }}>{title}</h2>
      {intro && <p style={{ marginTop: 18, fontSize: 18.5, lineHeight: 1.6, color: on === 'dark' ? 'var(--dark-soft)' : 'var(--ink-soft)' }}>{intro}</p>}
    </div>
  );
}
window.SectionHead = SectionHead;

/* ---- image slot wrapper (user-fillable, persists) ---- */
function Slot({ id, ratio = '4 / 3', caption, placeholder, radius = 4, style }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: 'relative', aspectRatio: ratio, ...style }}>
        <image-slot
          id={id}
          shape="rounded"
          radius={String(radius)}
          placeholder={placeholder || 'Bild hier ablegen'}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        ></image-slot>
      </div>
      {caption && <figcaption className="mono" style={{ marginTop: 12, color: 'var(--ink-soft)', letterSpacing: '0.1em' }}>{caption}</figcaption>}
    </figure>
  );
}
window.Slot = Slot;
