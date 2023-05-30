import styles from '../page.module.css'

export default function Page() {
    return (
        <div>
            <h1>Exam, new job, video release!</h1>
            <div className={styles.publishDate}>Published 2022-08-28</div>

            <h2>
                Exam - I&#39;ve become a civil engineer with a Master&#39;s in
                Computer Science!
            </h2>
            <p>
                After six years of school, I&#39;ve finally become a civil
                engineer! As a person who loves working, this is a huge
                achievement for me! I can finally go back to having work
                colleagues, and most of all, I can relax during my spare time
                (which is almost impossible as a student).
            </p>

            <h2>
                New job - I will start working as an IT-consultant starting
                tomorrow!
            </h2>
            <p>
                Things move fast. Become a civil engineer on Tuesday, and start
                working as an IT consultant the following Monday. I still
                don&#39;t know all the details of my next assignment, but
                I&#39;ll tackle it when I get there! I can already smell the
                scent of adventure!
            </p>

            <h2>
                Video release - My mid-year review of Quantum eMotion is
                published!
            </h2>
            <p>
                Before running away (and being overwhelmed) by the new job, I
                managed to release my mid-year review of Quantum eMotion.
                It&#39;s been a great year so far for the company, and I look
                forward to seeing how the rest of 2022 turns out!
            </p>
        </div>
    )
}