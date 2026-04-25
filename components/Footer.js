import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>StudentGrade</h4>
          <p>Your partner in academic success.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#benefits">Benefits</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2026 StudentGrade System. All rights reserved.</p>
      </div>
    </footer>
  )
}
