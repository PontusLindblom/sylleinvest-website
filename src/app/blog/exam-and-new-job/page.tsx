import styles from '../page.module.css'

export default function Page() {
    return (
        <div>
            <h1>Exam, New Job, Video Release</h1>
            <div className={styles.publishDate}>Published 2022-08-28</div>

            <h2 className={styles.h2Padding}>
                Got my MSC!
            </h2>
            <p>
                After six years of school, I’ve finally got my Master’s degree
                in Computer Science! As a person who loves working, this is a
                huge achievement for me! I can finally go back to having work
                colleagues, and most of all, I can relax during my spare time
                (which is almost impossible as a student).
            </p>

            <h2 className={styles.h2Padding}>
                Becoming an IT-consultant
            </h2>
            <p>
                Things move fast. Getting my MSC on Tuesday, and start working
                as an IT-consultant the following Monday. I still don’t know all
                the details of my next assignment, but I’ll tackle it when I get
                there! I can already smell the scent of adventure!
            </p>

            <h2 className={styles.h2Padding}>
                Mid-year Review of QNC
            </h2>
            <p>
                Before running away (and being overwhelmed) by the new job, I
                managed to release my mid-year review of Quantum eMotion. It’s
                been a great year so far for the company, and I look forward to
                seeing how the rest of 2022 turns out!
            </p>
        </div>
    )
}