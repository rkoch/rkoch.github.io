/* home.jsx — landing page */
const { useContext: useCtxH } = React;

function HomePage() {
  const { nav } = useContext(window.NavContext);
  return (
    <div className="page-enter">
      <HomeHero nav={nav} />
      <BeliefStrip />
      <OfferingsSection nav={nav} />
      <ProcessSection />
      <FarmerCase />
      <AboutTeaser nav={nav} />
      <ContactSection />
    </div>
  );
}
window.HomePage = HomePage;

/* ---------- HERO ---------- */
function HomeHero({ nav }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', paddingTop: 56, paddingBottom: 40 }}>
      {/* faint grid texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .5,
        backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
        backgroundSize: '64px 64px', maskImage: 'radial-gradient(120% 90% at 70% 0%, #000 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(120% 90% at 70% 0%, #000 30%, transparent 80%)',
      }}></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center', minHeight: 'min(78vh, 720px)' }}>
          <div>
            <Reveal>
              <Eyebrow style={{ marginBottom: 26 }}>KI-Integration für KMU · Schweiz</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(10px,2vw,22px)', fontFamily: 'var(--font-display)', fontWeight: 'var(--display-weight)', letterSpacing: '-0.03em', lineHeight: 1, fontSize: 'clamp(56px, 11vw, 116px)' }}>
                <span>1</span>
                <span style={{ color: 'var(--ink-soft)', fontWeight: 400 }}>+</span>
                <span>1</span>
                <span style={{ color: 'var(--ink-soft)', fontWeight: 400 }}>=</span>
                <span style={{ color: 'var(--accent)' }}>3</span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h1 style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', marginTop: 26, maxWidth: 540, lineHeight: 1.12 }}>
                Mensch und KI sind zusammen stärker — nicht ersetzbar.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p style={{ marginTop: 22, fontSize: 18.5, lineHeight: 1.62, color: 'var(--ink-soft)', maxWidth: 500 }}>
                Die Schlagzeilen sagen: «Die KI ersetzt uns alle.» Ich bin vom Gegenteil überzeugt. Wer KI als Werkzeug begreift, wird nicht ersetzt — sondern wächst über sich hinaus. Ich baue die Brücke zwischen Ihren Systemen und der KI.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
                <Button variant="primary" onClick={() => nav('kontakt')}>Unverbindliches Gespräch</Button>
                <Button variant="ghost" onClick={() => nav('angebot')}>So arbeite ich</Button>
              </div>
            </Reveal>
            <Reveal delay={370}>
              <p className="mono" style={{ marginTop: 34, color: 'var(--ink-soft)', letterSpacing: '.06em', lineHeight: 1.7, maxWidth: 440 }}>
                Für Gewerbe, lokale Betriebe & Landwirtschaft — dort, wo Digitalisierung bisher zu kurz kam.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div style={{ position: 'relative', maxWidth: 420, marginLeft: 'auto' }}>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '14px -14px -14px 14px', background: 'var(--accent)', borderRadius: 6, opacity: .14 }}></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '24px -24px -24px 24px', border: '1px solid var(--line-2)', borderRadius: 6 }}></div>
              <div style={{ position: 'relative', borderRadius: 6, overflow: 'hidden', border: '1px solid var(--line)', background: 'linear-gradient(180deg, #FCFBF7 0%, #FCFBF7 22%, #EBE4D5 68%, #D9D1BE 100%)' }}>
                <img src="assets/remo-cutout.webp" alt="Remo Koch" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'top center' }} />
                <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, padding: '20px 18px 16px', background: 'linear-gradient(to top, rgba(14,26,23,.82), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Remo Koch</div>
                    <div className="mono" style={{ color: 'rgba(255,255,255,.78)', letterSpacing: '.08em', marginTop: 2 }}>Ingenieur · KI-Integration</div>
                  </div>
                  <Mark size={26} on="dark" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

/* ---------- BELIEF STRIP (dark) ---------- */
function BeliefStrip() {
  const tenets = [
    { k: 'Mensch + KI = 3', d: 'Zusammen entsteht mehr als die Summe der Teile. Das ist kein Spruch, sondern mein Arbeitsprinzip.' },
    { k: 'Kein Ersatz, ein Hebel', d: 'Sie behalten die Kontrolle und Ihr Urteil. Die KI übernimmt die Fleissarbeit und den Zugang zu Wissen.' },
    { k: 'Werkzeug statt Vollautomat', d: 'Die wenigsten brauchen ein autonomes System. Meist genügt ein richtig gutes Werkzeug mit Chat.' },
  ];
  return (
    <section style={{ background: 'var(--dark)', color: '#fff', padding: '92px 0' }}>
      <div className="wrap">
        <Reveal>
          <Eyebrow on="dark" style={{ marginBottom: 26 }}>Meine Überzeugung</Eyebrow>
          <h2 style={{ color: '#fff', fontSize: 'clamp(30px, 4.6vw, 52px)', maxWidth: 880, lineHeight: 1.08 }}>
            Die meisten reden über KI.<br />Ich baue die <span style={{ color: 'var(--accent-bright)' }}>Brücke</span> dazu.
          </h2>
        </Reveal>
        <div className="tenet-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, marginTop: 64, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.08)' }}>
          {tenets.map((t, i) => (
            <Reveal key={t.k} delay={i * 90} style={{ background: 'var(--dark)' }}>
              <div style={{ padding: '34px 30px', height: '100%' }}>
                <div className="mono" style={{ color: 'var(--accent-bright)', marginBottom: 18 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ color: '#fff', fontSize: 22, marginBottom: 12 }}>{t.k}</h3>
                <p style={{ color: 'var(--dark-soft)', fontSize: 15.5, lineHeight: 1.6 }}>{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OFFERINGS ---------- */
const OFFERINGS = [
  { n: '01', t: 'Auslegeordnung', tag: 'Einstieg', d: 'Wo schafft KI in Ihrem Betrieb echten Wert? Wir schauen gemeinsam hin — bevor irgendetwas gebaut wird. Konkret, ehrlich, ohne Buzzwords.',
    points: ['Halbtag bei Ihnen vor Ort', 'Klare Prioritäten statt Technik-Show', 'Sie wissen danach, was sich lohnt'] },
  { n: '02', t: 'Integration', tag: 'Umsetzung', d: 'Vom Werkzeug zum Arbeitsalltag. Ich baue Ihnen massgeschneiderte KI-Werkzeuge — verbunden mit Ihren Daten, Maschinen und Sensoren. Sie bleiben in der Schlaufe.',
    points: ['Custom-Tools statt Standard-Abo', 'Hardware, Sensoren & Steuerung integriert', 'Der Mensch entscheidet, die KI arbeitet zu'] },
  { n: '03', t: 'Gedankenpartner', tag: 'Begleitung', d: 'Ihr Draht zu mir — rund um die Uhr. Fixer Monatsbeitrag, Sie rufen an, wann immer Sie etwas besprechen wollen. Für bestehende Kunden, die schon Vertrauen aufgebaut haben.',
    points: ['Fester Monatsbeitrag, keine Stundenzettel', 'Erreichbar 24/7', 'Sparring für Ihre Entscheidungen'] },
];

function OfferingsSection({ nav }) {
  return (
    <section style={{ padding: '96px 0' }}>
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Angebot" title="Drei Wege, wie ich Sie unterstütze"
            intro="Vom ersten ehrlichen Blick über die gebauten Werkzeuge bis zur laufenden Begleitung — eins baut auf dem anderen auf." />
        </Reveal>
        <div className="offer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56 }}>
          {OFFERINGS.map((o, i) => <OfferCard key={o.n} o={o} delay={i * 90} onClick={() => nav('angebot')} />)}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ o, delay, onClick }) {
  const [h, setH] = useStateC(false);
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
        style={{
          background: 'var(--card)', border: '1px solid ' + (h ? 'var(--accent)' : 'var(--line)'), borderRadius: 6,
          padding: '30px 28px 26px', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer',
          transition: 'border-color .22s ease, transform .22s ease, box-shadow .22s ease',
          transform: h ? 'translateY(-3px)' : 'none', boxShadow: h ? '0 18px 40px -24px rgba(14,26,23,.4)' : 'none',
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <span className="mono" style={{ fontSize: 15, color: 'var(--accent-strong)', letterSpacing: '.1em' }}>{o.n}</span>
          <span className="mono" style={{ fontSize: 10.5, padding: '5px 9px', borderRadius: 2, background: 'var(--accent-tint)', color: 'var(--accent-strong)', letterSpacing: '.1em' }}>{o.tag}</span>
        </div>
        <h3 style={{ fontSize: 25, marginBottom: 12 }}>{o.t}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: 15.5, lineHeight: 1.6, marginBottom: 22 }}>{o.d}</p>
        <ul style={{ listStyle: 'none', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {o.points.map((p) => (
            <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--ink-2)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flex: 'none', marginTop: 3 }}><path d="M3 8.5l3 3 7-8" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {p}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-strong)', fontWeight: 600, fontSize: 14.5 }}>
          Mehr erfahren <span style={{ transition: 'transform .22s ease', transform: h ? 'translateX(4px)' : 'none', display: 'inline-flex' }}><Arrow size={14} /></span>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { n: '01', t: 'Sie melden sich', d: 'Schildern Sie mir in ein paar Sätzen, was Sie beschäftigt — eine Aufgabe, ein Engpass, eine Idee. Per Formular oder Anruf.' },
  { n: '02', t: 'Wir reden', d: 'Ein unverbindliches Gespräch. Ich höre zu und stelle die Fragen, die zum Kern führen. Kein Verkaufsgespräch.' },
  { n: '03', t: 'Wir lösen es — gemeinsam', d: 'Wir gehen Ihr Kernproblem an. Schritt für Schritt, mit Werkzeugen, die zu Ihrem Betrieb passen — nicht umgekehrt.' },
];

function ProcessSection() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="So arbeite ich" title="Von der ersten Nachricht zur Lösung — in drei Schritten" max={680} />
        </Reveal>
        <div className="step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 60, position: 'relative' }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid var(--accent)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-strong)', flex: 'none', background: 'var(--paper)' }}>{s.n}</div>
                  {i < STEPS.length - 1 && <div className="step-line" style={{ flex: 1, height: 1, background: 'var(--line-2)' }}></div>}
                </div>
                <h3 style={{ fontSize: 21, marginBottom: 10 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 15.5, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FARMER CASE ---------- */
function FarmerCase() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div className="wrap">
        <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 56, alignItems: 'center' }}>
          <Reveal>
            <Slot id="farmer-case" ratio="4 / 3.4" radius={6} placeholder="Foto: Gewächshaus / Betrieb" caption="Bild ablegen — z. B. Gewächshaus, Werkstatt, Hofladen" />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow style={{ marginBottom: 22 }}>Ein Beispiel</Eyebrow>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1 }}>Kein Tech-Konzern.<br />Ein Landwirt.</h2>
              <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.62, color: 'var(--ink-soft)' }}>
                Ein Süsskartoffel-Bauer steuert sein Gewächshaus mit einem KI-Werkzeug. Vorher: drei Ernten pro Jahr. Dieses Jahr arbeitet er im Juni bereits an der <strong style={{ color: 'var(--ink)' }}>fünften</strong>.
              </p>
              <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.62, color: 'var(--ink-soft)' }}>
                Genau das meine ich: KI gehört nicht nur in Grosskonzerne. Sie gehört in die Hände von Menschen, die ihr Handwerk verstehen.
              </p>
              <div style={{ display: 'flex', gap: 36, marginTop: 36, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>3 → 5</div>
                  <div className="mono" style={{ color: 'var(--ink-soft)', marginTop: 8, letterSpacing: '.06em' }}>Ernten pro Jahr</div>
                </div>
                <div style={{ width: 1, background: 'var(--line-2)' }}></div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>1 Person</div>
                  <div className="mono" style={{ color: 'var(--ink-soft)', marginTop: 8, letterSpacing: '.06em' }}>kein Team nötig</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT TEASER ---------- */
function AboutTeaser({ nav }) {
  return (
    <section style={{ padding: '40px 0 96px' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ background: 'var(--dark)', color: '#fff', borderRadius: 10, padding: 'clamp(34px, 5vw, 60px)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: -60, right: -40, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: .22 }}></div>
            <div className="about-teaser-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center', position: 'relative' }}>
              <div>
                <Eyebrow on="dark" style={{ marginBottom: 22 }}>Wer ich bin</Eyebrow>
                <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.6vw, 38px)', lineHeight: 1.12, maxWidth: 640 }}>
                  Seit Jahren Ingenieur an der Schnittstelle von Hardware, Software und Daten.
                </h2>
                <p style={{ color: 'var(--dark-soft)', fontSize: 17.5, lineHeight: 1.62, marginTop: 20, maxWidth: 600 }}>
                  Ausbildung in Elektronik, danach Software-Engineering mit Fokus auf Legacy-Systeme — über viele Jahre, in vielen Branchen. Genau diese Übersetzungsarbeit zwischen alter und neuer Welt bringe ich jetzt zur KI. Mein Motto: <strong style={{ color: '#fff' }}>«Geht nicht, gibt's nicht.»</strong>
                </p>
                <div style={{ marginTop: 30 }}>
                  <Button variant="light" onClick={() => nav('ueber-mich')}>Mehr über mich <Arrow /></Button>
                </div>
              </div>
              <div className="about-teaser-tags" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Elektronik & Hardware', 'Software-Engineering', 'Legacy-Systeme', 'Wissensgraphen · objeng.ch'].map((x) => (
                  <span key={x} className="mono" style={{ fontSize: 11.5, padding: '10px 14px', border: '1px solid rgba(255,255,255,.16)', borderRadius: 3, color: 'rgba(255,255,255,.85)', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactSection() {
  return (
    <section id="kontakt" style={{ padding: '0 0 100px' }}>
      <div className="wrap">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'start' }}>
          <Reveal>
            <div style={{ position: 'sticky', top: 110 }}>
              <Eyebrow style={{ marginBottom: 22 }}>Kontakt</Eyebrow>
              <h2 style={{ fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.08 }}>Reden wir.</h2>
              <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.62, color: 'var(--ink-soft)', maxWidth: 420 }}>
                Erzählen Sie mir, was Sie beschäftigt. Wir starten mit einem unverbindlichen Gespräch und finden gemeinsam heraus, wo der Hebel liegt.
              </p>
              <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <a href="mailto:hallo@remokoch.com" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)', fontWeight: 500 }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--accent-tint)', display: 'grid', placeItems: 'center', flex: 'none' }}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="var(--accent-strong)" strokeWidth="1.4" /><path d="M3 5.5l7 5 7-5" stroke="var(--accent-strong)" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  </span>
                  hallo@remokoch.com
                </a>
                <a href="https://objeng.ch" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)', fontWeight: 500 }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--accent-tint)', display: 'grid', placeItems: 'center', flex: 'none' }}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.2" stroke="var(--accent-strong)" strokeWidth="1.4" /><path d="M3 10h14M10 3c2 2.2 2 11.8 0 14M10 3c-2 2.2-2 11.8 0 14" stroke="var(--accent-strong)" strokeWidth="1.4" /></svg>
                  </span>
                  objeng.ch — mein Hintergrund
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
