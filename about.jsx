/* about.jsx — Über mich */
const { useContext: useCtxA } = React;

const TIMELINE = [
  { y: 'Fundament', t: 'Elektronik', d: 'Ausbildung in Elektronik. Ich verstehe Hardware, Sensoren und Steuerungen — nicht aus dem Lehrbuch, sondern von der Platine her.' },
  { y: 'Handwerk', t: 'Software-Engineering', d: 'Jahre als Software-Ingenieur, spezialisiert auf Legacy-Systeme. Genau dort, wo alte und neue Welt aufeinandertreffen und übersetzt werden müssen.' },
  { y: 'Breite', t: 'Viele Branchen', d: 'Immer wieder neue Industrien, neue Betriebe, neue Realitäten. Diese Breite ist mein Vorteil: Ich erkenne Muster, die andere übersehen.' },
  { y: 'Heute', t: 'objeng.ch — Wissensgraphen', d: 'Ich baue Wissensgraphen für die Analyse von Software und erschliesse sie mit einem KI-Harness. Aus Code werden Einsichten, aus Einsichten Berichte.' },
  { y: 'Jetzt', t: 'KI-Integration für KMU', d: 'Dieselbe Übersetzungsarbeit — jetzt für kleine und mittlere Betriebe. Ich baue die Brücke zwischen Ihren Systemen und der KI.' },
];

const PERSONAL = [
  { t: 'Tauchlehrer', d: 'Ruhe bewahren, wenn es darauf ankommt.' },
  { t: 'Triathlet', d: 'Drei Disziplinen, ein Ziel — Integration ist auch hier alles.' },
  { t: 'Ultradistanz-Radfahrer', d: 'Lange Strecken, klarer Kopf, Schritt für Schritt.' },
];

function AboutPage() {
  const { nav } = useContext(window.NavContext);
  return (
    <div className="page-enter">
      {/* hero */}
      <section style={{ padding: '64px 0 40px' }}>
        <div className="wrap">
          <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.78fr', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div>
                <Eyebrow style={{ marginBottom: 24 }}>Über mich</Eyebrow>
                <h1 style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05 }}>
                  Ich übersetze<br />zwischen den Welten.
                </h1>
                <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 520 }}>
                  Ich bin Remo Koch. Seit Jahren arbeite ich an der Schnittstelle von Hardware, Software und Daten — und genau das mache ich heute zwischen Ihrem Betrieb und der KI.
                </p>
                <blockquote style={{ marginTop: 30, paddingLeft: 22, borderLeft: '3px solid var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 'var(--display-weight)', fontSize: 24, lineHeight: 1.3, color: 'var(--ink)' }}>
                  «Geht nicht, gibt's nicht.»
                </blockquote>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ position: 'relative', maxWidth: 380, marginLeft: 'auto' }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: '18px -18px -18px 18px', background: 'var(--accent)', opacity: .12, borderRadius: 6 }}></div>
                <img src="assets/remo-2.webp" alt="Remo Koch" style={{ position: 'relative', width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'top center', borderRadius: 6, border: '1px solid var(--line)' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section style={{ padding: '80px 0', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Reveal><SectionHead eyebrow="Werdegang" title="Vom Lötkolben zur KI-Brücke" max={620} /></Reveal>
          <div style={{ marginTop: 56, maxWidth: 820 }}>
            {TIMELINE.map((item, i) => (
              <Reveal key={item.t} delay={i * 70}>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 28, padding: '26px 0', borderTop: '1px solid var(--line-2)' }} className="tl-row">
                  <div className="mono" style={{ color: 'var(--accent-strong)', letterSpacing: '.1em', paddingTop: 4 }}>{item.y}</div>
                  <div>
                    <h3 style={{ fontSize: 23, marginBottom: 8 }}>{item.t}</h3>
                    <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.6, maxWidth: 560 }}>{item.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* personal */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap">
          <Reveal>
            <SectionHead eyebrow="Abseits der Arbeit" title="Was mich antreibt"
              intro="Ausdauer, Ruhe und das Zusammenspiel vieler Teile — die Prinzipien sind überall dieselben." max={620} />
          </Reveal>
          <div className="personal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 52 }}>
            {PERSONAL.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: '30px 26px', height: '100%' }}>
                  <div className="mono" style={{ color: 'var(--accent-strong)', marginBottom: 16 }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: 21, marginBottom: 10 }}>{p.t}</h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 15.5, lineHeight: 1.6 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <CtaBand nav={nav}
        title="Neugierig, was zusammen möglich ist?"
        text="Ein Gespräch kostet nichts — ausser ein bisschen Zeit. Danach wissen Sie mehr."
      />
    </div>
  );
}
window.AboutPage = AboutPage;

/* shared CTA band — also used on offer page */
function CtaBand({ nav, title, text }) {
  return (
    <section style={{ padding: '0 0 96px' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ background: 'var(--dark)', color: '#fff', borderRadius: 10, padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: .5, backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(80% 120% at 50% 0%, #000, transparent 75%)', WebkitMaskImage: 'radial-gradient(80% 120% at 50% 0%, #000, transparent 75%)' }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}><Mark size={40} on="dark" /></div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4.4vw, 44px)', maxWidth: 680, margin: '0 auto', lineHeight: 1.1 }}>{title}</h2>
              <p style={{ color: 'var(--dark-soft)', fontSize: 18, lineHeight: 1.6, maxWidth: 520, margin: '18px auto 0' }}>{text}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
                <Button variant="light" onClick={() => nav('kontakt')}>Gespräch vereinbaren <Arrow /></Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.CtaBand = CtaBand;
