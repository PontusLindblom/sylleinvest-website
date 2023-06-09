import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Blog Updates</h1>

            <Link href="/blog/summary-of-lux-strategy-call/"
                  className={styles.blogPost}>
                <div className={styles.publishDate}>Mar 31<br/>2023</div>
                <div className={styles.lineSeparator}></div>
                <div className={styles.headline}>
                    Summary of Newlox’s Strategy Call
                </div>
            </Link>

            <Link href="/blog/exam-and-new-job/" className={styles.blogPost}>
                <div className={styles.publishDate}>Aug 28<br/>2022</div>
                <div className={styles.lineSeparator}></div>
                <div className={styles.headline}>
                    Exam, New Job, Video Release
                </div>
            </Link>

            <Link href="/blog/summary-of-lux-zoom-call/"
                  className={styles.blogPost}>
                <div className={styles.publishDate}>July 23<br/>2022</div>
                <div className={styles.lineSeparator}></div>
                <div className={styles.headline}>
                    Summary of Newlox’s Zoom Call
                </div>
            </Link>

            <Link href="/blog/interview-with-lux-ceo/"
                  className={styles.blogPost}>
                <div className={styles.publishDate}>May 12<br/>2022</div>
                <div className={styles.lineSeparator}></div>
                <div className={styles.headline}>
                    Interview With CEO of Newlox Gold
                </div>
            </Link>

            <Link href="/blog/website-launched/" className={styles.blogPost}>
                <div className={styles.publishDate}>Apr 19<br/>2022</div>
                <div className={styles.lineSeparator}></div>
                <div className={styles.headline}>
                    Sylleinvest.com Website Launched
                </div>
            </Link>
        </div>
    )
}