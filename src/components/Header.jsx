import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import config from '../config'

export default function Header({ dark, onToggleTheme }) {
  const labels = config.theme.labels
  return <header className="site-header"><a className="brand" href="#top" aria-label={labels.home}>FM<span>.</span></a><nav className="main-nav" aria-label={labels.primaryNavigation}><a href="#about">{labels.navAbout}</a><a href="#projects">{labels.navWork}</a><a href="#contact">{labels.navContact}</a></nav><div className="header-actions"><button className="theme-toggle" onClick={onToggleTheme} aria-label={dark ? labels.lightMode : labels.darkMode}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a className="header-link" href="#contact">{labels.contact}<ArrowUpRight size={15} /></a></div></header>
}
