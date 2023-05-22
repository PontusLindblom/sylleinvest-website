import styles from "./page.module.css"
import {FaBook, FaChartLine, FaBullseye} from 'react-icons/fa';

export default function Page() {
    return (
        <div>
            <h1>About Sylle Invest</h1>
            <div className={styles.paragraphContainer}>
                <FaBook className={styles.icon}/>
                <div>
                    <h3>
                        My Story
                    </h3>
                    <p>
                        Lorem ipsum!
                    </p>
                </div>
            </div>

            <div className={styles.paragraphContainer}>
                <FaBullseye className={styles.icon}/>
                <div>
                    <h3>
                        My Mission
                    </h3>
                    <p>
                        Spread knowledge!
                    </p>
                </div>
            </div>

            <div className={styles.paragraphContainer}>
                <FaChartLine className={styles.icon}/>
                <div>
                    <h3>
                        Track Record
                    </h3>
                    <p>
                        Such success, much wow!
                    </p>
                </div>
            </div>
        </div>
    )
}