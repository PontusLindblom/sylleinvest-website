import styles from "./page.module.css"

export default function Page() {
    return (
        <div>
            <h1>Contact Information</h1>
            <p>
                You can reach me at pontus@sylleinvest.com.
            </p>
            <p className={styles.marginToFooter}>
                I read all mails, but I can’t promise to respond to everyone.
            </p>
        </div>
    )
}