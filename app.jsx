/* app.jsx — nav, footer, tweaks, router, mount */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "navy",
  "type": "plex"
}/*EDITMODE-END*/;

const ROUTES = [
  { id: 'home', label: 'Start' },
  { id: 'angebot', label: 'Angebot' },
  { id: 'ueber-mich', label: 'Über mich' },
  { id: 'kontakt', label: 'Kontakt' },
];

/* ---------------- NAV ---------------- */
function Nav({ route, nav }) {
  const [scrolled, setScrolled] = useStateApp(false);
  const [open, setOpen] = useStateApp(false);
  useEffectApp(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffectApp(() => { setOpen(false); }, [route]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'color-mix(in srgb, var(--paper) 86%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--line)' : 'transparent'),
      transition: 'background .3s ease, border-color .3s ease',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Wordmark onClick={() => nav('home')} />
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {ROUTES.filter((r) => r.id !== 'kontakt').map((r) => (
            <button key={r.id} onClick={() => nav(r.id)} style={{
              background: 'none', border: 'none', padding: '8px 14px', fontSize: 15, fontWeight: 500,
              color: route === r.id ? 'var(--ink)' : 'var(--ink-soft)', position: 'relative', fontFamily: 'var(--font-body)',
            }}>
              {r.label}
              {route === r.id && <span style={{ position: 'absolute', left: 14, right: 14, bottom: 2, height: 2, background: 'var(--accent)', borderRadius: 2 }}></span>}
            </button>
          ))}
          <button onClick={() => nav('kontakt')} style={{
            marginLeft: 12, background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 2,
            padding: '11px 18px', fontWeight: 600, fontSize: 14.5, fontFamily: 'var(--font-body)', transition: 'background .2s',
          }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-strong)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent)'}>
            Gespräch
          </button>
        </nav>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menü" style={{ display: 'none', background: 'none', border: 'none', flexDirection: 'column', gap: 5, padding: 8 }}>
          <span style={{ width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'transform .25s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
          <span style={{ width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity .2s' }}></span>
          <span style={{ width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'transform .25s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </div>
      {/* mobile drawer */}
      <div className="nav-drawer" style={{ display: 'none', overflow: 'hidden', maxHeight: open ? 320 : 0, transition: 'max-height .3s ease', background: 'var(--paper)', borderBottom: open ? '1px solid var(--line)' : 'none' }}>
        <div className="wrap" style={{ padding: '12px 20px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {ROUTES.map((r) => (
            <button key={r.id} onClick={() => nav(r.id)} style={{
              background: 'none', border: 'none', textAlign: 'left', padding: '14px 4px', fontSize: 18, fontWeight: 500,
              color: route === r.id ? 'var(--accent-strong)' : 'var(--ink)', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)',
            }}>{r.label}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ nav }) {
  return (
    <footer style={{ background: 'var(--dark)', color: '#fff', padding: '64px 0 36px' }}>
      <div className="wrap">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40, paddingBottom: 44, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Mark on="dark" />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>Remo Koch</span>
            </div>
            <p style={{ color: 'var(--dark-soft)', fontSize: 15.5, lineHeight: 1.6, maxWidth: 320 }}>
              KI-Integration für KMU. Ich baue die Brücke zwischen Ihren Systemen und der KI — damit aus 1 + 1 die 3 wird.
            </p>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--accent-bright)', marginBottom: 16 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {ROUTES.map((r) => (
                <button key={r.id} onClick={() => nav(r.id)} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'rgba(255,255,255,.82)', fontSize: 15, padding: 0, fontFamily: 'var(--font-body)' }}>{r.label}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--accent-bright)', marginBottom: 16 }}>Kontakt</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15, color: 'rgba(255,255,255,.82)' }}>
              <a href="mailto:hallo@remokoch.com">hallo@remokoch.com</a>
              <a href="https://remokoch.com">remokoch.com</a>
              <a href="https://objeng.ch" target="_blank" rel="noreferrer">objeng.ch</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 24 }}>
          <span className="mono" style={{ color: 'var(--dark-soft)', fontSize: 11, letterSpacing: '.08em' }}>© {new Date().getFullYear()} Remo Koch · Schweiz</span>
          <span className="mono" style={{ color: 'var(--dark-soft)', fontSize: 11, letterSpacing: '.08em' }}>Mensch + KI = 3</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- TWEAKS ---------------- */
function ThemeTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Akzentfarbe" />
      <TweakColor label="Akzent" value={t.accent === 'navy' ? '#19394e' : t.accent === 'teal' ? '#0E7F73' : '#3C6E8F'}
        options={['#19394e', '#0E7F73', '#3C6E8F']}
        onChange={(v) => setTweak('accent', v === '#19394e' ? 'navy' : v === '#0E7F73' ? 'teal' : 'slate')} />
      <TweakSection label="Typografie" />
      <TweakRadio label="Schrift" value={t.type} options={['plex', 'serif', 'grotesk']}
        onChange={(v) => setTweak('type', v)} />
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--ink-soft)', lineHeight: 1.6, padding: '4px 2px 2px', opacity: .8 }}>
navy = #19394e · plex = technisch · serif = redaktionell
      </div>
    </TweaksPanel>
  );
}

/* ---------------- APP ---------------- */
function App() {
  const [route, setRoute] = useStateApp('home');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => { window.applyTheme(t.accent, t.type); }, [t.accent, t.type]);

  const nav = (r) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const Page = route === 'angebot' ? window.OfferPage
    : route === 'ueber-mich' ? window.AboutPage
    : route === 'kontakt' ? window.KontaktPage
    : window.HomePage;

  return (
    <window.NavContext.Provider value={{ route, nav }}>
      <Nav route={route} nav={nav} />
      <main key={route}>
        <Page />
      </main>
      <Footer nav={nav} />
      <ThemeTweaks t={t} setTweak={setTweak} />
    </window.NavContext.Provider>
  );
}

/* responsive styles */
const responsiveCSS = `
@media (max-width: 1000px) {
  .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; min-height: 0 !important; }
  .hero-grid > div:last-child { max-width: 360px; }
  .case-grid, .contact-grid, .about-hero-grid, .about-teaser-grid, .offer-row { grid-template-columns: 1fr !important; gap: 36px !important; }
  .about-teaser-tags { flex-direction: row !important; flex-wrap: wrap; }
  .tenet-grid, .offer-grid, .step-grid, .personal-grid { grid-template-columns: 1fr 1fr !important; }
  .footer-grid { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 720px) {
  .nav-links { display: none !important; }
  .nav-burger { display: flex !important; }
  .nav-drawer { display: block !important; }
  .tenet-grid, .offer-grid, .step-grid, .personal-grid, .footer-grid { grid-template-columns: 1fr !important; }
  .step-line { display: none !important; }
  .tl-row { grid-template-columns: 1fr !important; gap: 6px !important; }
}
`;
const styleEl = document.createElement('style');
styleEl.textContent = responsiveCSS;
document.head.appendChild(styleEl);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
