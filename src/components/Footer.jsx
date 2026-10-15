import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import config from '../config'

export default function Footer({ contact = false }) {
  const { profile, social, theme } = config

  if (!contact) return <footer className="site-footer page-shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>{theme.labels.footer}</span><a href="#top" aria-label={theme.labels.top}><ArrowUp size={15} /></a></footer>

  return <footer className="portfolio-footer" id="contact">
    <section className="footer-contact page-shell" aria-labelledby="footer-title">
      <div className="footer-intro">
        <span className="eyebrow">{theme.labels.contact}</span>
        <h2 id="footer-title">{theme.labels.contactHeadline}</h2>
        <p>{theme.labels.contactIntro}</p>
      </div>
      <div className="footer-connect">
        <a className="footer-email" href={`mailto:${profile.email}`}><Mail size={19} />{profile.email}<ArrowUpRight size={17} /></a>
        <div className="footer-socials" aria-label="Media sosial">{social.filter((item) => item.url).map((item) => <a href={item.url} key={item.name} target="_blank" rel="noreferrer">{item.name}<ArrowUpRight size={13} /></a>)}</div>
      </div>
    </section>
    <div className="footer-meta"><div className="footer-meta-inner page-shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>{theme.labels.footer}</span><a href="#top" aria-label={theme.labels.top}><ArrowUp size={15} /></a></div></div>
  </footer>
}
