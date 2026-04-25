import styles from '@/styles/Benefits.module.css'

const benefitsList = [
  'Easy-to-use interface',
  'Real-time grade tracking',
  'Automatic GPA calculation',
  'Customizable dashboards',
  'Export reports to PDF',
  '24/7 customer support'
]

const stats = [
  { number: '10K+', label: 'Active Students' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '50+', label: 'Schools Connected' }
]

export default function Benefits() {
  return (
    <section id="benefits" className={styles.benefits}>
      <h2>Why Choose StudentGrade?</h2>
      <div className={styles.benefitsContent}>
        <div className={styles.benefitsText}>
          <ul className={styles.benefitsList}>
            {benefitsList.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className={styles.benefitsStats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
