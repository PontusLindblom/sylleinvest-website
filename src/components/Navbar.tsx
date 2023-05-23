import styles from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Link href="/" className={styles.navbarLogo}>
                <Image src="/navbar-logo.webp" alt="Sylle Invest Logotype" width={150} height={64} priority={true}/>
            </Link>

            <Link href="/about" className={styles.navbarItem}>
                About
            </Link>

            <Link href="/resources" className={styles.navbarItem}>
                Resources
            </Link>

            <Link href="/contact" className={styles.navbarItem}>
                Contact
            </Link>
        </div>
    )
}

export default Navbar