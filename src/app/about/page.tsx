import styles from "./page.module.css"
import {TbBook, TbTargetArrow} from "react-icons/tb";

export default function Page() {
    return (
        <div>
            <h1>About Sylle Invest</h1>

            <h2 className={styles.h2FlexMargin}>
                My Story <TbBook className={styles.icon}/>
            </h2>
            <p>
                I’m a Software Engineer with a Master’s degree in Computer Science from Chalmers University of
                Technology. While my work mainly involves understanding customer needs, my investing journey primarily
                focuses on analyzing small public companies in the North American market.
            </p>
            <p>
                I’m analytical and love simplifying complex subjects so anyone can understand them. When I started
                investing in the nano-cap space, it quickly became apparent it was hard to find simple and
                comprehensive due diligence. I wanted to change that, and that’s why I started Sylle Invest.
            </p>

            <h2 className={styles.h2FlexMargin}>
                My Mission <TbTargetArrow className={styles.icon}/>
            </h2>
            <p className={styles.marginToFooter}>
                Communication is complicated, which is evident when investors worldwide have trouble grasping what a
                public company does. I bridge that gap by researching and simplifying companies so investors can
                understand their business and make informed investing decisions. Simply put, my mission is to <em>Bring
                Knowledge To Investing</em>.
            </p>
        </div>
    )
}