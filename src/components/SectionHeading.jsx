export default function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>
}
