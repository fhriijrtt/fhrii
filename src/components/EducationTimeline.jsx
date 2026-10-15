import { GraduationCap } from 'lucide-react'
import config from '../config'

export default function EducationTimeline() {
  return <section className="education-journey" aria-labelledby="education-title">
    <div className="journey-heading">
      <span className="eyebrow"><GraduationCap size={15} />{config.theme.labels.education}</span>
      <h3 id="education-title">{config.theme.labels.educationHeadline}</h3>
    </div>
    <div className="journey-art">
      <img src="/assets/education-sky.svg" alt="" loading="lazy" />
      <ol className="journey-list">{config.education.map((item) => <li className={item.stage === 'NOW' ? 'journey-item current' : 'journey-item'} key={item.school}>
        <span className="journey-node" aria-hidden="true" />
        <div className="journey-copy"><span className="journey-stage">{item.stage}</span><h4>{item.school}</h4><p>{item.description}</p></div>
      </li>)}</ol>
    </div>
  </section>
}
