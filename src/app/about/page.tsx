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
                At the core, I’m a Software Engineer with a Master’s degree in
                Computer Science from Chalmers University of Technology. My
                daily life consists of creating smart IT solutions, like this
                website. Another strong passion is as an investor, where I’ve
                accumulated many years of experience in the North American
                market.
            </p>
            <p>
                I’m analytical and love simplifying complex subjects so anyone
                can understand them. When starting my investor journey in the
                micro-cap space, it quickly became apparent it was hard to find
                simple and comprehensive due diligence. I wanted to change that,
                and that’s why I started Sylle Invest.
            </p>

            <h2 className={styles.h2FlexMargin}>
                My Mission <TbTargetArrow className={styles.icon}/>
            </h2>
            <p className={styles.marginToFooter}>
                Communication is complicated, which is evident when investors
                worldwide have trouble grasping what public micro-cap companies
                do. I bridge that gap by researching and simplifying companies
                so investors can understand their business and make informed
                investing decisions. Simply put, my mission is to <em>Bring
                Knowledge To Investing</em>.
            </p>
        </div>
    )
}