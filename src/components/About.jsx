import { BookOpen, Cpu, Gamepad2, Network, Server, Sparkles } from 'lucide-react'
import config from '../config'
import EducationTimeline from './EducationTimeline'
import SectionHeading from './SectionHeading'

const hobbyIcons = { cpu: Cpu, book: BookOpen, layers: Server, gamepad: Gamepad2 }

export default function About() {
  const labels = config.theme.labels

  return <section className="section page-shell" id="about">
    <SectionHeading eyebrow={labels.about} title={labels.aboutHeadline} description={config.profile.bio} />
    <EducationTimeline />
    <div className="about-grid">
      <div className="about-aside"><span className="aside-mark">FM</span><p>{config.profile.interests.join(' · ')}</p></div>
      <div className="about-details"><div className="subsection"><div className="subsection-title"><Sparkles size={16} /><h3>{labels.experience}</h3></div>{config.experience.map((item) => <article className="timeline-row" key={item.organization}><div className="timeline-date">{item.period}</div><div><h4>{item.role}</h4><p>{item.organization}</p><small>{item.description}</small></div></article>)}</div></div>
    </div>
    <div className="hobbies-row"><div className="subsection-title"><BookOpen size={16} /><h3>{labels.hobbies}</h3></div><div className="hobby-list">{config.hobbies.map((hobby) => { const Icon = hobbyIcons[hobby.icon] || Cpu; return <article className="hobby-card" key={hobby.title}><Icon size={19} /><div><h4>{hobby.title}</h4><p>{hobby.description}</p></div></article> })}</div></div>
    <div className="skills-showcase">
      <div className="subsection-title"><Server size={16} /><h3>{labels.skills}</h3></div>
      <div className="skill-showcase-list">{config.skills.map((group) => <article className="skill-showcase-group" key={group.category}>
        <div><h4>{group.category}</h4><div className="skill-words">{group.items.map((item) => <span key={item}>{item}</span>)}</div>{group.detail && <p className="skill-detail">{group.detail}</p>}</div>
      </article>)}</div>
    </div>
  </section>
}
