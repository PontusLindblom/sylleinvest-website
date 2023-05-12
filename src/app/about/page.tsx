import styles from "./page.module.css"
import {FaBook, FaChartLine, FaBullseye} from 'react-icons/fa';

export default function About() {
    return (
        <div>
            <h1>About Sylle Invest</h1>
            <div className={styles.paragraphContainer}>
                <FaBook className={styles.icon}/>
                <p>
                    <strong>My Story</strong><br/>
                    Lorem ipsum!
                </p>
            </div>

            <div className={styles.paragraphContainer}>
                <FaBullseye className={styles.icon}/>
                <p>
                    <strong>My Mission</strong><br/>
                    Spread knowledge!
                </p>
            </div>

            <div className={styles.paragraphContainer}>
                <FaChartLine className={styles.icon}/>
                <p>
                    <strong>Track Record</strong><br/>
                    Very success, much wow!
                </p>
            </div>
        </div>
    )
}