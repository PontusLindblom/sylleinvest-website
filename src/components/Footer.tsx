import styles from './footer.module.css'
import Link from "next/link";
import {FaYoutube, FaTwitter, FaPatreon} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={`${styles.footerItem} ${styles.centerIfNarrow}`}>
                <strong>Sylle Invest</strong>
                <div className={styles.socialIcons}>
                    <Link href={"https://www.youtube.com/sylleinvest"}>
                        <FaYoutube aria-label={"YouTube Logo"}
                                   className={styles.icon}/>
                    </Link>
                    <Link href={"https://twitter.com/sylleinvest"}>
                        <FaTwitter aria-label={"Twitter Logo"}
                                   className={styles.icon}/>
                    </Link>
                    <Link href={"https://www.patreon.com/sylleinvest"}>
                        <FaPatreon aria-label={"Patreon Logo"}
                                   className={styles.iconLast}/>
                    </Link>
                </div>
                <p>Brings knowledge to investing</p>
            </div>

            <div className={`${styles.footerItem} ${styles.hideIfNarrow}`}>
                <strong>Disclaimer</strong>
                <p>I am no financial advisor</p>
                <p>Only spend what you can afford to lose</p>
                <p>The website is for informational purposes only</p>
            </div>
        </div>
    )
}

export default Footer