import styles from '../page.module.css'

export default function Page() {
    return (
        <div>
            <h1>Sylleinvest.com Website Launched</h1>
            <div className={styles.publishDate}>Published 2022-04-19</div>
            
            <h2 className={styles.h2Padding}>Sylleinvest.com v1.0 Is Live!</h2>
            <p>
                More features will be added to the website as time passes by,
                and if you find any bugs, please email them to
                pontus@sylleinvest.com. The website was created from scratch by
                me, and since this is my first attempt at web design, I expect
                there to be some flaws at the start.
            </p>
        </div>
    )
}