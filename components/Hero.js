import styles from '@/styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>Manage Your Grades with Ease</h2>
        <p>Track, analyze, and improve your academic performance with our intuitive Student Grade System.</p>
        <div className={styles.heroButtons}>
          <button className={styles.btnPrimary}>Get Started Now</button>
          <button className={styles.btnSecondary}>Learn More</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.gradientBox}>
          <span></span>
        </div>
      </div>
    </section>
  )
}
