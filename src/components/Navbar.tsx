import styles from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return(
    <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLink}>
            <Image src="/navbar-logo.webp" alt="SylleInvest Logotype" width={150} height={64}/>
        </Link>

        <Link href="/about" className={styles.navbarLink}>
            About
        </Link>

        <Link href="/resources" className={styles.navbarLink}>
            Resources
        </Link>

        <Link href="/contact" className={styles.navbarLink}>
            Contact
        </Link>
    </div>
  )
}

export default Navbar