import styles from '../page.module.css'

export default function Page() {
    return (
        <div>
            <h1>Summary of Newlox’s Strategy Call</h1>
            <div className={styles.publishDate}>Published 2023-03-31</div>

            <h2 className={styles.h2Padding}>Plant 1 - Oro Roca, Costa Rica</h2>
            <p>
                Productivity increased quarter over quarter last year, and productivity rose again in the fourth
                quarter. They’ve implemented several technical improvements over the fall and are starting to see
                productivity increase more quickly. They expect these results to be reflected in their Q1 financials.
                The plan for 2023 is to continue production increases and accelerate the growth rate, and the goal is to
                get the Plant to full scale. They were producing ~8.2 kg per quarter at the beginning of the year, and
                they got that to ~12 kg in the third quarter, the most recently reported quarter. The Plant is still
                expected to reach 80 tpd with an annual production of ~6,500 oz/year. Royalty levels will soon drop.
            </p>

            <h2 className={styles.h2Padding}>Plant 2 - Boston, Costa Rica</h2>
            <p>
                It is now in the final stages of testing & commissioning, and they expect to announce starting
                production very soon. The Plant will run with low throughput for the first 1-2 months and then increase
                rapidly for the remainder of the year. The plan for 2023 is to be in operation and ramping up. The Plant
                will probably not be full-scale by the end of the calendar year. They expect to scale quicker than the
                speed at which the partnered artisanal miners can scale. The partnered artisanal miners will have the
                first rights to sell their material to Newlox, and Newlox can buy the remaining material from other
                mining cooperatives in the area. The budgeted CAPEX was US$2M, but it rose by 35-40% (~US$2.75M) due to
                inflation and the extra time it took. The Plant is still expected to reach 150 tpd with an annual
                production of ~20,000 oz/year.
            </p>

            <h2 className={styles.h2Padding}>Plant 3 - Antioquia, Columbia</h2>
            <ul>
                <li>
                    <strong>Summer:</strong> They expect to have their permits granted.
                </li>
                <li>
                    <strong>Fall:</strong> Construction will probably start if they get the permits in the summer.
                </li>
                <li>
                    <strong>Late Fall:</strong> They expect to do procurement and final engineering.
                </li>
                <li>
                    <strong>2024:</strong> They should be completing the project and start processing.
                </li>
            </ul>
            <p>
                Plant 3 will be a standard toll milling model where they buy raw ore from artisanal miners. Supply
                agreements are starting to come together, just like in Costa Rica. The estimated CAPEX is between $3.5M
                to $5M, depending on choices in construction. They can spend more to allow for a ramp-up with less
                disruption. They believe that half of Plant 3 can be financed internally and are looking at equipment
                financing for the other half. The Plant will start at 250 tpd and eventually scale to 1,000 tpd. The
                expected gold grade is 15 g/ton, and margins should be around the same as Plant 1.
            </p>

            <h2 className={styles.h2Padding}>Misc.</h2>
            <ul>
                <li>
                    They are pretty much hitting that profitability spot now.
                </li>
                <li>
                    They’re still in the talks for a Plant in Brazil.
                </li>
                <li>
                    OAR is a bonus of the company. They did not go ahead with the OAR testing during the summer or fall
                    of last year as the focus was on the metallurgical work at Plant 1. They expect to have testing
                    results from the OAR this fiscal year.
                </li>
            </ul>

            <h2 className={styles.h2Padding}>Personal Comment</h2>
            <p>
                I’m pleased that Newlox hosted a Strategy Call to provide us with a welcome update on their progress and
                to answer investors’ questions. It was a well-organized call, and I recommend you look at it when it
                becomes available.
            </p>
            <p>
                The update was positive overall, and a lot of transparency was provided. Investors will be heavily
                rewarded if they follow the path they painted for us in the strategy call. But as investors, we must be
                aware that reality is not always kind, and we should always be prepared for any outcome.
            </p>
            <p className={styles.marginToFooter}>
                The Q1 financials will show us if Plant 1 ramped up as they anticipate it will, and the Q2 financials
                will give some light on the Plant 2 production numbers. Plant 3 sounds almost too good to be true, but
                if Q1 and Q2 end up close to what the company projects, it may be as good as it sounds.
            </p>
        </div>
    )
}