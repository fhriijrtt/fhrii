import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpLeft, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config'
import Footer from '../components/Footer'

export default function SweetHeartGallery() {
  const { sweetHeart, theme } = config
  const [selected, setSelected] = useState(null)
  const close = () => setSelected(null)
  const move = (step) => setSelected((current) => (current + step + sweetHeart.photos.length) % sweetHeart.photos.length)

  useEffect(() => {
    if (selected === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') move(1)
      if (event.key === 'ArrowLeft') move(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.classList.add('modal-open')
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.classList.remove('modal-open') }
  }, [selected])

  return <><main className="gallery-page page-shell"><Link className="back-link" to="/"><ArrowUpLeft size={16} />{theme.labels.back}</Link><div className="gallery-heading"><span className="eyebrow">{theme.labels.sweetTitle} · {sweetHeart.name}</span><h1>{theme.labels.pageTitle}<em>.</em></h1><p>{sweetHeart.description}</p></div><div className="gallery-grid">{sweetHeart.photos.map((photo, index) => <button className="gallery-photo" key={photo.file} onClick={() => setSelected(index)}><img src={photo.file} alt={photo.caption} loading="lazy" /><span className="photo-meta"><span>{photo.caption}</span><small>{photo.date}</small></span></button>)}</div></main><Footer />{selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={theme.labels.pageTitle} onMouseDown={(event) => { if (event.target === event.currentTarget) close() }}><button className="lightbox-close" onClick={close} aria-label={theme.labels.close}><X /></button><button className="lightbox-arrow previous" onClick={() => move(-1)} aria-label={theme.labels.previousPhoto}><ArrowLeft /></button><figure><img src={sweetHeart.photos[selected].file} alt={sweetHeart.photos[selected].caption} /><figcaption><span>{sweetHeart.photos[selected].caption}</span><small>{sweetHeart.photos[selected].date} · {selected + 1} / {sweetHeart.photos.length}</small></figcaption></figure><button className="lightbox-arrow next" onClick={() => move(1)} aria-label={theme.labels.nextPhoto}><ArrowRight /></button></div>}</>
}
