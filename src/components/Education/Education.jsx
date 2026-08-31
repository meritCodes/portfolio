import resumeSteps from '../../assets/resumeSteps'
import useInView from '../useInView'
import './education.css'
import { BookOpen } from 'lucide-react';

const TimelineStep = ({ step, isLast }) => {
  const [ref, isInView] = useInView()

  return (
    <div className={`timeline-step ${isInView ? "fade-in" : ""}`} ref={ref}>
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <span className="timeline-date">{step.title}</span>
        <h3>{step.date}</h3>
        <p>{step.desc}</p>
      </div>
    </div>
  )
}

const Resume = () => {
  return (
    <div className="resume-section">
      <div className="section-header">
        <BookOpen size={28} />
        <h2>Education</h2>
      </div>

      <div className="timeline">
        {resumeSteps.map((step, index) => (
          <TimelineStep
            key={step.id}
            step={step}
            isLast={index === resumeSteps.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Resume