import styles from "./page.module.css"
import {FaBook, FaBullseye} from 'react-icons/fa';

export default function Page() {
    return (
        <div>
            <h1>About Sylle Invest</h1>
            <div className={styles.paragraphContainer}>
                <FaBook className={styles.icon}/>
                <div className={styles.aboutText}>
                    <h2>
                        My Story
                    </h2>
                    <p>
                        My story began at Chalmers University of Technology,
                        where I was introduced to finance by a friend. I’ve been
                        hooked ever since. I’m an analytic person that loves
                        simplifying complex things so that everyone can
                        understand, and I found that the finance world lacks
                        this skill. I mainly focus on the North American markets
                        as most of my investor contacts reside in that area.
                    </p>
                </div>
            </div>

            <div className={styles.paragraphContainer}>
                <FaBullseye className={styles.icon}/>
                <div className={styles.aboutText}>
                    <h2>
                        My Mission
                    </h2>
                    <p>
                        Communication is complicated, which is evident
                        when investors worldwide have trouble grasping what
                        public companies do. I try to bridge that gap by
                        researching the companies and simplify what they do so
                        that investors can understand their business and make
                        more informed investing decisions. Simply put, my
                        mission is to “Bring knowledge to investing“.
                    </p>
                </div>
            </div>
        </div>
    )
}