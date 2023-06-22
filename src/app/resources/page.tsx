import styles from "./page.module.css"
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Research Resources</h1>

            <Link href="/resources/placeholder" className={styles.resourceContainer}>
                <h2>Under Construction</h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.tickerSymbols}>Ticker: XX, Ticker: XX, Ticker: XX</p>
            </Link>

            <Link href="/resources/placeholder" className={styles.resourceContainer}>
                <h2>Under Construction</h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.tickerSymbols}>Ticker: XX, Ticker: XX, Ticker: XX</p>
            </Link>
        </div>
    )
}