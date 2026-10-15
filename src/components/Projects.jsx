import { Award, FolderGit2 } from 'lucide-react'
import config from '../config'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import CertificateCard from './CertificateCard'

export default function Projects() {
  const labels = config.theme.labels
  return <section className="section projects-section page-shell" id="projects"><SectionHeading eyebrow={labels.projects} title={labels.projectHeadline} description={labels.projectIntro} /><div className="resource-columns"><section className="resource-group"><div className="subsection-title"><FolderGit2 size={17} /><h3>{labels.projectLinks}</h3></div><div className="project-card-grid">{config.projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></section><section className="resource-group"><div className="subsection-title"><Award size={17} /><h3>{labels.certificates}</h3></div>{config.certificates.length ? <div className="certificate-card-grid">{config.certificates.map((certificate) => <CertificateCard certificate={certificate} key={certificate.title} />)}</div> : <p className="resource-empty">{labels.emptyCertificates}</p>}</section></div></section>
}
