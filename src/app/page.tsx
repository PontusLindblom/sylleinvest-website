import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Blog Updates</h1>

            <Link href="/blog/summary-of-lux-strategy-call/" className={styles.blogPost}>
                <h2>
                    Summary of Newlox’s Strategy Call
                </h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.summary}>
                    A call where the company discuss their strategy for the 2023 fiscal year.
                </p>
            </Link>

            <Link href="/blog/exam-and-new-job/" className={styles.blogPost}>
                <h2>
                    Exam, New Job, Video Release
                </h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.summary}>
                    An update on what is going on in my life right now.
                </p>
            </Link>

            <Link href="/blog/summary-of-lux-zoom-call/" className={styles.blogPost}>
                <h2>
                    Summary of Newlox’s Zoom Call
                </h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.summary}>
                    A call on July 19th, 2022, where the company provide updates for their shareholders.
                </p>
            </Link>

            <Link href="/blog/interview-with-lux-ceo/" className={styles.blogPost}>
                <h2>
                    Interview With CEO of Newlox Gold
                </h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.summary}>
                    A detailed interview where we discuss the company’s progress and take a deep dive into their ramp-up
                    process.
                </p>
            </Link>

            <Link href="/blog/website-launched/" className={`${styles.blogPost} ${styles.marginToFooter}`}>
                <h2>
                    Sylleinvest.com Website Launched
                </h2>
                <div className={styles.lineSeparator}/>
                <p className={styles.summary}>
                    After some dedicated work creating this website from scratch, it is finally live!
                </p>
            </Link>
        </div>
    )
}