/* offer.jsx — Angebot detail + Kontakt page */
const { useContext: useCtxO, useState: useStateO } = React;

const OFFER_DETAIL = [
  {
    n: '01', t: 'Auslegeordnung', tag: 'Einstieg',
    lead: 'Wo schafft KI in Ihrem Betrieb echten Wert?',
    body: 'Bevor irgendetwas gebaut wird, schauen wir gemeinsam hin. Ich komme zu Ihnen, höre zu und durchleuchte Ihre Abläufe — ohne Technik-Show, ohne Buzzwords. Am Ende haben Sie eine klare, ehrliche Einschätzung: was sich lohnt, was warten kann, und was Sie besser sein lassen.',
    list: ['Halbtag bei Ihnen vor Ort', 'Konkrete Prioritäten statt Wunschlisten', 'Ehrliche Einschätzung — auch wenn die Antwort «noch nicht» lautet', 'Sie entscheiden danach in Ruhe'],
    price: 'Fixpreis pro Halbtag',
  },
  {
    n: '02', t: 'Integration', tag: 'Umsetzung',
    lead: 'Vom Werkzeug zum Arbeitsalltag.',
    body: 'Ich baue Ihnen massgeschneiderte KI-Werkzeuge — keine Standard-Abos, sondern Lösungen, die zu Ihrem Betrieb passen. Verbunden mit Ihren Daten, und wo nötig auch mit Maschinen, Sensoren und Steuerungen. Meine Überzeugung: Die wenigsten brauchen ein vollautonomes System. Meist genügt ein richtig gutes Werkzeug mit Chat — der Mensch bleibt in der Schlaufe und entscheidet.',
    list: ['Custom-Tools statt Standard-Abo', 'Hardware, Sensoren & Steuerung integriert', 'Anbindung an Ihre bestehenden Systeme', 'Der Mensch entscheidet, die KI arbeitet zu'],
    price: 'Nach Aufwand · transparent',
  },
  {
    n: '03', t: 'Gedankenpartner', tag: 'Begleitung',
    lead: 'Ihr Draht zu mir — rund um die Uhr.',
    body: 'Wenn das Vertrauen einmal da ist, will man nicht für jede Frage ein Projekt aufsetzen. Der Gedankenpartner ist die Antwort: ein fester Monatsbeitrag, und Sie rufen an, wann immer Sie etwas besprechen wollen. Eine Entscheidung, eine Idee, ein Problem um 22 Uhr — ich bin Ihr Sparringpartner. Für bestehende Kunden.',
    list: ['Fester Monatsbeitrag, keine Stundenzettel', 'Erreichbar rund um die Uhr', 'Sparring für Ihre Entscheidungen', 'Kündbar Monat für Monat'],
    price: 'Fixer Monatsbeitrag',
  },
];

const FAQ = [
  { q: 'Ist mein Betrieb zu klein für KI?', a: 'Im Gegenteil. Gerade kleine und mittlere Betriebe profitieren am meisten, weil ein einzelnes gutes Werkzeug spürbar entlastet. Der Süsskartoffel-Bauer ist kein Konzern.' },
  { q: 'Ersetzt die KI dann meine Leute?', a: 'Nein — das ist der ganze Punkt. KI ist ein Hebel, kein Ersatz. Ihre Leute behalten Urteil und Kontrolle und werden von Fleissarbeit befreit. Mensch + KI = 3.' },
  { q: 'Ich kenne mich mit Technik kaum aus.', a: 'Müssen Sie nicht. Genau dafür bin ich da. Ich übersetze zwischen Ihrer Welt und der Technik — Sie bringen das Wissen über Ihren Betrieb mit, ich den Rest.' },
  { q: 'Brauche ich teure neue Systeme?', a: 'Selten. Meist lässt sich KI an das anbinden, was Sie schon haben. Wir bauen auf Ihrem Bestand auf, nicht daneben.' },
];

function OfferPage() {
  const { nav } = useContext(window.NavContext);
  return (
    <div className="page-enter">
      <section style={{ padding: '64px 0 30px' }}>
        <div className="wrap">
          <Reveal>
            <Eyebrow style={{ marginBottom: 24 }}>Angebot</Eyebrow>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, maxWidth: 760 }}>
              Drei Wege, wie ich Sie unterstütze.
            </h1>
            <p style={{ marginTop: 22, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 600 }}>
              Vom ersten ehrlichen Blick über die gebauten Werkzeuge bis zur laufenden Begleitung. Eins baut auf dem anderen auf — beginnen können Sie überall.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '30px 0 70px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {OFFER_DETAIL.map((o, i) => (
            <Reveal key={o.n} delay={i * 60}>
              <div className="offer-row" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 44, alignItems: 'center', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8, padding: 'clamp(28px, 4vw, 44px)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,64px)', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>{o.n}</span>
                    <span className="mono" style={{ fontSize: 10.5, padding: '6px 10px', borderRadius: 2, background: 'var(--accent-tint)', color: 'var(--accent-strong)', letterSpacing: '.1em' }}>{o.tag}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(26px,3.4vw,34px)', marginBottom: 12 }}>{o.t}</h2>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.35, marginBottom: 16 }}>{o.lead}</p>
                  <div className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent-strong)', letterSpacing: '.06em', padding: '8px 12px', border: '1px dashed var(--line-2)', borderRadius: 3 }}>
                    {o.price}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 16.5, lineHeight: 1.64, color: 'var(--ink-soft)', marginBottom: 22 }}>{o.body}</p>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
                    {o.list.map((p) => (
                      <li key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15.5, color: 'var(--ink-2)' }}>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" style={{ flex: 'none', marginTop: 2 }}><path d="M3 8.5l3 3 7-8" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '70px 0', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Reveal><SectionHead eyebrow="Häufige Fragen" title="Was Betriebe oft fragen" max={620} /></Reveal>
          <div style={{ marginTop: 44, maxWidth: 820 }}>
            {FAQ.map((f, i) => <FaqRow key={f.q} f={f} i={i} />)}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: 96 }}></div>
      <CtaBand nav={nav}
        title="Welcher Weg passt zu Ihnen?"
        text="Wenn Sie unsicher sind, fangen wir bei der Auslegeordnung an. Schreiben Sie mir — wir finden es gemeinsam heraus."
      />
    </div>
  );
}
window.OfferPage = OfferPage;

function FaqRow({ f, i }) {
  const [open, setOpen] = useStateO(i === 0);
  return (
    <Reveal delay={i * 50}>
      <div style={{ borderTop: '1px solid var(--line-2)' }}>
        <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '22px 0', background: 'none', border: 'none', textAlign: 'left' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--ink)' }}>{f.q}</span>
          <span style={{ flex: 'none', width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--line-2)', display: 'grid', placeItems: 'center', transition: 'transform .25s ease, background .2s', transform: open ? 'rotate(45deg)' : 'none', background: open ? 'var(--accent-tint)' : 'transparent' }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="var(--accent-strong)" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </span>
        </button>
        <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height .35s ease, opacity .3s ease', opacity: open ? 1 : 0 }}>
          <p style={{ fontSize: 16, lineHeight: 1.62, color: 'var(--ink-soft)', paddingBottom: 24, maxWidth: 640 }}>{f.a}</p>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- KONTAKT PAGE ---------- */
function KontaktPage() {
  return (
    <div className="page-enter">
      <section style={{ padding: '64px 0 100px' }}>
        <div className="wrap">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'start' }}>
            <Reveal>
              <div>
                <Eyebrow style={{ marginBottom: 24 }}>Kontakt</Eyebrow>
                <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.05 }}>Reden wir.</h1>
                <p style={{ marginTop: 22, fontSize: 18.5, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 440 }}>
                  Erzählen Sie mir in ein paar Sätzen, was Sie beschäftigt. Wir starten unverbindlich und finden gemeinsam heraus, wo der Hebel liegt.
                </p>
                <div className="step-mini" style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[['01', 'Sie schreiben mir'], ['02', 'Wir reden — unverbindlich'], ['03', 'Wir lösen Ihr Kernproblem']].map(([n, t], i) => (
                    <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--line-2)' }}>
                      <span className="mono" style={{ color: 'var(--accent-strong)', fontSize: 14, letterSpacing: '.1em' }}>{n}</span>
                      <span style={{ fontWeight: 500, color: 'var(--ink-2)' }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                  <a href="mailto:hallo@remokoch.com" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)', fontWeight: 500, marginBottom: 12 }}>
                    <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--accent-tint)', display: 'grid', placeItems: 'center', flex: 'none' }}>
                      <svg width="17" height="17" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="var(--accent-strong)" strokeWidth="1.4" /><path d="M3 5.5l7 5 7-5" stroke="var(--accent-strong)" strokeWidth="1.4" strokeLinecap="round" /></svg>
                    </span>
                    hallo@remokoch.com
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
    </div>
  );
}
window.KontaktPage = KontaktPage;
