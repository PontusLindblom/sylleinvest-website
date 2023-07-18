"use client";

import styles from './navbar.module.css'
import Link from 'next/link';
import {FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div
            className={`${dropdown ? styles.navbarContainerExtended : styles.navbarContainer} ${styles.limitHeightIfWide}`}>
            <div className={styles.navbarMenu}>
                <Link href="/" className={styles.navbarLogo}>
                    <img src="/navbarLogo.webp"
                         alt="Sylle Invest Logotype"
                         width="150"
                         height="64"
                    />
                </Link>

                <Link href="/" className={`${styles.navbarItem} ${styles.hideIfNarrow}`}>
                    Blog
                </Link>

                <Link href="/about" className={`${styles.navbarItem} ${styles.hideIfNarrow}`}>
                    About
                </Link>

                <Link href="/resources" className={`${styles.navbarItem} ${styles.hideIfNarrow}`}>
                    Resources
                </Link>

                <Link href="/contact" className={`${styles.navbarItem} ${styles.hideIfNarrow}`}>
                    Contact
                </Link>

                <button aria-label={"Open the menu"}
                        className={`${styles.dropdownBtn} ${styles.hideIfWide}`}
                        onClick={() => {
                            setDropdown((dropdown: boolean) => !dropdown);
                        }}>
                    {dropdown ? <FaTimes/> : <FaBars/>}
                </button>
            </div>

            <div className={`${dropdown ? styles.navbarDropdown : styles.hide} ${styles.hideIfWide}`}>
                <Link href="/" className={`${styles.navbarItemDropdown}`}>
                    Blog
                </Link>
                
                <Link href="/about" className={`${styles.navbarItemDropdown}`}>
                    About
                </Link>

                <Link href="/resources" className={`${styles.navbarItemDropdown}`}>
                    Resources
                </Link>

                <Link href="/contact" className={`${styles.navbarItemDropdown}`}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Navbar