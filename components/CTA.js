import styles from '@/styles/CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2>Ready to Take Control of Your Grades?</h2>
      <p>Join thousands of students already using StudentGrade to improve their academic performance.</p>
      <button className={styles.btnCta}>Start Your Free Trial Today</button>
    </section>
  )
}
