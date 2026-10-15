const stars = Array.from({ length: 72 }, (_, index) => ({
  left: `${(index * 73.13 + 11) % 100}%`,
  top: `${(index * 41.37 + 7) % 100}%`,
  delay: `${-((index * 7) % 29) / 3}s`,
  size: `${index % 11 === 0 ? 3 : index % 4 === 0 ? 2 : 1}px`,
}))

const meteors = Array.from({ length: 6 }, (_, index) => ({
  left: `${18 + ((index * 19) % 82)}%`,
  top: `${-8 + ((index * 17) % 58)}%`,
  delay: `${-index * 2.1}s`,
  duration: `${7 + (index % 4) * 2}s`,
  length: `${100 + (index % 3) * 48}px`,
}))

export default function SkyBackground() {
  return <div className="sky-background" aria-hidden="true"><div className="sky-stars">{stars.map((star, index) => <i key={index} style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size, height: star.size }} />)}</div><div className="sky-meteors">{meteors.map((meteor, index) => <i key={index} style={{ left: meteor.left, top: meteor.top, animationDelay: meteor.delay, animationDuration: meteor.duration, width: meteor.length }} />)}</div><span className="sky-haze" /></div>
}
