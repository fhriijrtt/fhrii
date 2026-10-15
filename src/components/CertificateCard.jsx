import { Download } from 'lucide-react'
import config from '../config'

export default function CertificateCard({ certificate }) {
  return <article className="certificate-link-card"><h4>{certificate.title}</h4><a href={certificate.file} download>{config.theme.labels.openCertificate}<Download size={15} /></a></article>
}
