import { BookOpen, Clock3, Gamepad2, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'
import config from '../config'
import SectionHeading from './SectionHeading'

const jakartaClock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Jakarta',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

const dayNames = { Mon: 'Senin', Tue: 'Selasa', Wed: 'Rabu', Thu: 'Kamis', Fri: 'Jumat', Sat: 'Sabtu', Sun: 'Minggu' }

export default function DailyRoutine() {
  const { routine, theme } = config
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(timer)
  }, [])

  const timeParts = Object.fromEntries(jakartaClock.formatToParts(now).map(({ type, value }) => [type, value]))
  const hour = Number(timeParts.hour)
  const isWeekend = timeParts.weekday === 'Sat' || timeParts.weekday === 'Sun'
  const isSchoolTime = !isWeekend && hour >= 6 && hour < 17
  const currentActivity = isSchoolTime ? routine.school : routine.freeTime
  const currentPeriod = isWeekend ? 'Akhir pekan' : isSchoolTime ? 'Jam sekolah' : routine.freePeriod
  const clockLabel = `${dayNames[timeParts.weekday]} · ${timeParts.hour}.${timeParts.minute} WIB`

  return <section className="section routine-section page-shell" aria-label={theme.labels.routine}>
    <SectionHeading eyebrow={theme.labels.routine} title={theme.labels.routineHeadline} description={theme.labels.routineIntro} />
    <div className="routine-current"><span className="routine-live-dot" /><div><span>{clockLabel} · {currentPeriod}</span><strong>{currentActivity}</strong></div></div>
    <div className="routine-grid">
      <article className={isWeekend ? 'routine-card weekday-card' : 'routine-card weekday-card is-current'}>
        <div className="routine-card-head"><span>{routine.weekdays}</span><Clock3 size={17} /></div>
        <div className="routine-schedule">
          <div className={isSchoolTime ? 'routine-slot is-current' : 'routine-slot'} aria-current={isSchoolTime ? 'time' : undefined}><span>{routine.schoolHours}</span><strong><GraduationCap size={16} />{routine.school}</strong></div>
          <span className="schedule-line"><i /><i /></span>
          <div className={!isWeekend && !isSchoolTime ? 'routine-slot is-current' : 'routine-slot'} aria-current={!isWeekend && !isSchoolTime ? 'time' : undefined}><span>{routine.afterSchool}</span><strong><BookOpen size={16} /><Gamepad2 size={16} />{routine.freeTime}</strong></div>
        </div>
      </article>
      <article className={isWeekend ? 'routine-card weekend-card is-current' : 'routine-card weekend-card'}>
        <div className="routine-card-head"><span>{routine.weekends}</span><span className="weekend-orbit" aria-hidden="true" /></div>
        <div className="weekend-content"><div className="weekend-icons"><BookOpen size={21} /><Gamepad2 size={21} /></div><h3>Waktu luang</h3><p>{routine.weekendDetail}</p></div>
      </article>
    </div>
  </section>
}
