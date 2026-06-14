/* contact.jsx — working contact form + Kontakt page */
const { useState: useStateC } = React;

function ContactForm({ compact }) {
  const [data, setData] = useStateC({ name: '', firma: '', email: '', topic: 'Auslegeordnung', msg: '' });
  const [errors, setErrors] = useStateC({});
  const [sent, setSent] = useStateC(false);

  const set = (k) => (e) => { setData({ ...data, [k]: e.target.value }); setErrors({ ...errors, [k]: undefined }); };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!data.name.trim()) er.name = 'Bitte Ihren Namen angeben.';
    if (!data.email.trim()) er.email = 'Bitte E-Mail angeben.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) er.email = 'Diese E-Mail sieht nicht gültig aus.';
    if (!data.msg.trim()) er.msg = 'Erzählen Sie mir kurz, worum es geht.';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const field = {
    width: '100%', padding: '13px 15px', fontSize: 16, fontFamily: 'var(--font-body)',
    background: 'var(--card)', border: '1px solid var(--line-2)', borderRadius: 3,
    color: 'var(--ink)', outline: 'none', transition: 'border-color .18s ease',
  };
  const label = { display: 'block', fontSize: 13.5, fontWeight: 600, marginBottom: 7, color: 'var(--ink-2)' };
  const errStyle = { color: '#B4452F', fontSize: 12.5, marginTop: 6, fontFamily: 'var(--font-mono)', letterSpacing: '.02em' };

  if (sent) {
    return (
      <div style={{
        background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6,
        padding: '44px 36px', textAlign: 'center',
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-tint)',
          display: 'grid', placeItems: 'center', margin: '0 auto 20px',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke="var(--accent-strong)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 style={{ fontSize: 23 }}>Danke, {data.name.split(' ')[0] || 'gern'}.</h3>
        <p style={{ marginTop: 12, color: 'var(--ink-soft)', maxWidth: 380, margin: '12px auto 0' }}>
          Ihre Nachricht ist angekommen. Ich melde mich innert <strong style={{ color: 'var(--ink)' }}>24&nbsp;Stunden</strong> — dann finden wir einen Termin für ein unverbindliches Gespräch.
        </p>
        <button onClick={() => { setSent(false); setData({ name: '', firma: '', email: '', topic: 'Auslegeordnung', msg: '' }); }}
          className="mono" style={{ marginTop: 26, background: 'none', border: 'none', color: 'var(--accent-strong)', letterSpacing: '.1em' }}>
          ← Weitere Nachricht
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{
      background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: compact ? '26px' : '34px 32px',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div>
          <label style={label}>Name *</label>
          <input style={{ ...field, borderColor: errors.name ? '#C8694F' : 'var(--line-2)' }} value={data.name} onChange={set('name')} placeholder="Vor- und Nachname" />
          {errors.name && <div style={errStyle}>{errors.name}</div>}
        </div>
        <div>
          <label style={label}>Firma</label>
          <input style={field} value={data.firma} onChange={set('firma')} placeholder="Optional" />
        </div>
      </div>
      <div style={{ marginTop: 18 }}>
        <label style={label}>E-Mail *</label>
        <input style={{ ...field, borderColor: errors.email ? '#C8694F' : 'var(--line-2)' }} value={data.email} onChange={set('email')} placeholder="sie@firma.ch" />
        {errors.email && <div style={errStyle}>{errors.email}</div>}
      </div>
      <div style={{ marginTop: 18 }}>
        <label style={label}>Worum geht es?</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['Auslegeordnung', 'Integration', 'Gedankenpartner', 'Etwas anderes'].map((o) => (
            <button type="button" key={o} onClick={() => setData({ ...data, topic: o })}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase',
                padding: '9px 13px', borderRadius: 2, transition: 'all .18s ease',
                border: '1px solid ' + (data.topic === o ? 'var(--accent)' : 'var(--line-2)'),
                background: data.topic === o ? 'var(--accent-tint)' : 'transparent',
                color: data.topic === o ? 'var(--accent-strong)' : 'var(--ink-soft)', fontWeight: 600,
              }}>{o}</button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 18 }}>
        <label style={label}>Was beschäftigt Sie? *</label>
        <textarea rows={compact ? 3 : 4} style={{ ...field, resize: 'vertical', borderColor: errors.msg ? '#C8694F' : 'var(--line-2)' }}
          value={data.msg} onChange={set('msg')} placeholder="Eine Aufgabe, ein Engpass, eine Idee — ein paar Sätze genügen." />
        {errors.msg && <div style={errStyle}>{errors.msg}</div>}
      </div>
      <div style={{ marginTop: 24 }}>
        <Button variant="primary" full>Nachricht senden</Button>
      </div>
      <p className="mono" style={{ marginTop: 16, color: 'var(--ink-soft)', letterSpacing: '.04em', textAlign: 'center', fontSize: 11 }}>
        Unverbindlich · Vertraulich · Antwort innert 24&nbsp;h
      </p>
    </form>
  );
}
window.ContactForm = ContactForm;
