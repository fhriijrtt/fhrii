import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import DailyRoutine from '../components/DailyRoutine'
import SweetHeartCard from '../components/SweetHeartCard'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

export default function HomePage({ dark, onToggleTheme }) {
  return <><Header dark={dark} onToggleTheme={onToggleTheme} /><main><Reveal><Hero /></Reveal><Reveal><About /></Reveal><Reveal><Projects /></Reveal><Reveal><DailyRoutine /></Reveal><Reveal><SweetHeartCard /></Reveal></main><Footer contact /></>
}
