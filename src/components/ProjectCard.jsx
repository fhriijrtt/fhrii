import { ArrowUpRight } from 'lucide-react'
import config from '../config'

export default function ProjectCard({ project }) {
  const labels = config.theme.labels
  return <article className="project-link-card"><h4>{project.title}</h4>{project.url ? <a href={project.url} target="_blank" rel="noreferrer">{labels.openProject}<ArrowUpRight size={15} /></a> : <span className="resource-missing">{labels.missingUrl}</span>}</article>
}
