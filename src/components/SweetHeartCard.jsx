import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config'

export default function SweetHeartCard() {
  const { sweetHeart, theme } = config
  return <section className="sweet-section page-shell"><span className="eyebrow">{theme.labels.sweetLabel}</span><Link to="/sweet-heart" className="sweet-card"><div className="sweet-cover"><img src={sweetHeart.cover} alt="" loading="lazy" /></div><div className="sweet-copy"><span>{theme.labels.sweetTitle}</span><h2>{sweetHeart.name}</h2><p>{sweetHeart.description}</p><span className="sweet-link">{theme.labels.galleryHint}<ArrowUpRight size={16} /></span></div></Link></section>
}
