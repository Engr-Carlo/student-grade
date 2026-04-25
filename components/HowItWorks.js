import styles from '@/styles/HowItWorks.module.css'

const steps = [
  {
    number: '1',
    title: 'Create Account',
    description: 'Sign up with your email and create your student profile in seconds.'
  },
  {
    number: '2',
    title: 'Add Courses',
    description: 'Add all your courses and subjects to start tracking your grades.'
  },
  {
    number: '3',
    title: 'Log Grades',
    description: 'Input your grades as you receive them from your instructors.'
  },
  {
    number: '4',
    title: 'Analyze & Improve',
    description: 'Review insights and work on improving your overall academic performance.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <h2>How It Works</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
