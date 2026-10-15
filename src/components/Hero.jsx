import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import config from '../config'

export default function Hero() {
  const { profile, theme } = config
  return <section className="hero page-shell" id="top"><div className="hero-copy"><div className="eyebrow hero-eyebrow">{theme.labels.intro}</div><p className="availability"><span />{theme.labels.available}</p><h1>{theme.labels.greeting}<br /><em>{profile.nickname}.</em></h1><p className="hero-tagline">{profile.tagline}</p><div className="hero-actions"><a className="button button-primary" href="#projects">{theme.labels.viewProjects}<ArrowDownRight size={17} /></a><a className="button button-text" href={profile.cv} download="cv.pdf"><Download size={16} />{theme.labels.cvDownload}</a></div><div className="hero-location"><span>{profile.location}</span><span className="hero-line" /><span>{config.education[0].class}</span></div></div><div className="hero-art"><div className="art-stamp">{theme.labels.artStamp.split('\n').map((line) => <span key={line}>{line}</span>)}</div><div className="art-frame"><img src={profile.photo} alt={profile.name} fetchPriority="high" /></div><span className="art-caption">{profile.name}<ArrowUpRight size={14} /></span></div><a className="scroll-cue" href="#about"><span>{theme.labels.scroll}</span><ArrowDownRight size={16} /></a></section>
}
