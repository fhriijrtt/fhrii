import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import config from './config'
import HomePage from './pages/HomePage'
import SweetHeartGallery from './pages/SweetHeartGallery'
import CursorFollower from './components/CursorFollower'
import SkyBackground from './components/SkyBackground'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', dark ? config.theme.accent : config.theme.accentLight)
    document.documentElement.style.setProperty('--accent-soft', dark ? config.theme.accentSoft : config.theme.accentLightSoft)
    document.documentElement.style.setProperty('--font-display', `'${config.theme.fonts.display}', serif`)
    document.documentElement.style.setProperty('--font-body', `'${config.theme.fonts.body}', sans-serif`)
  }, [dark])

  return <><SkyBackground /><CursorFollower /><Routes><Route path="/" element={<HomePage dark={dark} onToggleTheme={() => setDark(!dark)} />} /><Route path="/sweet-heart" element={<SweetHeartGallery />} /></Routes></>
}
