import styles from '@/styles/Features.module.css'

const features = [
  {
    icon: '',
    title: 'Track Progress',
    description: 'Monitor your grades across all subjects and track your academic progress in real-time.'
  },
  {
    icon: '',
    title: 'Detailed Reports',
    description: 'Generate comprehensive reports to understand your strengths and areas for improvement.'
  },
  {
    icon: '',
    title: 'Schedule Assignments',
    description: 'Organize your assignments and deadlines to stay on top of your coursework.'
  },
  {
    icon: '',
    title: 'Set Goals',
    description: 'Set academic goals and receive personalized recommendations to achieve them.'
  },
  {
    icon: '',
    title: 'Mobile Friendly',
    description: 'Access your grades anytime, anywhere from any device with internet connection.'
  },
  {
    icon: '',
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected with the highest security standards.'
  }
]

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
