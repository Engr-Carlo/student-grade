import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <h1>StudentGrade</h1>
        </div>
        <nav className={styles.navMenu}>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className={styles.navButtons}>
          <button className={styles.btnLogin}>Login</button>
          <button className={styles.btnSignup}>Sign Up</button>
        </div>
      </div>
    </header>
  )
}
