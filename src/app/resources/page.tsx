import styles from "./page.module.css"
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Research Resources</h1>

            <Link href="/resources/newlox-gold-ventures" className={styles.resourceContainer}>
                <h2>Newlox Gold Ventures</h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.ticker}>CSE:LUX, OTC Pink:NWLXF, Frankfurt:NGO</p>
            </Link>

            <Link href="/resources" className={styles.resourceContainer}>
                <h2>Future Content</h2>
            </Link>
        </div>
    )
}