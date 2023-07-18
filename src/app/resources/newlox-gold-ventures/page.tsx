import styles from '../page.module.css'
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <div className={styles.title}>
                <h1>Newlox Gold Ventures</h1>
                <img
                    className={styles.logoLeftMargin}
                    src="/newloxLogo.webp"
                    alt="Newlox Gold Ventures Logotype"
                    height="68"
                />
            </div>
            <div className={styles.updatedDate}>Updated 2023-09-06</div>


            {/* Table of Contents */}
            <div className={styles.tocContainer}>
                <h2>Table of Contents</h2>
                <Link className={styles.tocText} href={"#company-overview"}>1. Company Overview</Link>
                <Link className={styles.tocText} href={"#business-models"}>2. Business Models</Link>
                <Link className={styles.tocText} href={"#the-plants"}>3. The Plants</Link>
                <Link className={styles.tocText} href={"#oar"}>4. Organic Aqua Regia (OAR)</Link>
                <Link className={styles.tocText} href={"#moat-competition"}>5. Moat & Competition</Link>
                <Link className={styles.tocText} href={"#production-financial-numbers"}>6. Production & Financial Numbers</Link>
                <Link className={styles.tocText} href={"#management"}>7. Management</Link>
                <Link className={styles.tocText} href={"#catalyst-list"}>8. Catalyst List</Link>
                <Link className={styles.tocText} href={"#my-analysis"}>9. My Analysis of Newlox Gold</Link>
                <Link className={styles.tocText} href={"#sources"}>10. Sources</Link>
            </div>


            {/* Company Overview */}
            <h2 id="company-overview" className={styles.h2Padding}>Company Overview</h2>
            <p>
                Newlox Gold is a clean gold producer that recovers gold by reprocessing contaminated artisanal tailings and processing artisanally mined ore.
                The company provides environmental benefits by removing mercury from contaminated tailings and ensuring that mercury is not used by processing the artisanally mined ore themselves.
                And they do this while having exceptional gross margins.
                They operate in Costa Rica and are in the middle of expanding to Columbia.
            </p>

            <h4>Company Website</h4>
            <p>
                <Link href={"https://www.newloxgold.com/"}>
                    https://www.newloxgold.com/
                </Link>
            </p>

            <h4>Ticker Symbols</h4>
            <p>CSE:LUX, OTC Pink:NWLXF, Frankfurt:NGO</p>

            <h4>Outstanding Shares</h4>
            <p>147,696,457</p>

            <h4>Market Cap</h4>
            <p>C$20,677,504 (with the share price at C$0.14)</p>

            <h4>Insider Ownership</h4>
            <p>~20%</p>
            <div className={styles.lineSeparatorLight}/>


            {/* Business model */}
            <h2 id="business-models" className={styles.h2Padding}>Business Models</h2>
            <p>
                Newlox currently has three business models: the 1) buy tailings model, 2) 50/50 model, and 3) toll milling model.
                One of the greatest differences between Newlox’s models and the artisanal mining model is that Newlox uses proven cyanide practices, whereas the artisanal miners typically use mercury.
            </p>
            <p>
                Cyanide causes no harm if handled correctly, but it does if spilled into nature.
                On the other hand, mercury causes significant problems with how it’s handled in artisanal mining today.
                Mercury remains in the tailings after the gold has been extracted, and the tailings are then left in piles on the ground, contaminating nearby land and aquatic ecosystems.
                Mercury vapor is also created when heating the mercury to extract the gold.
                This vapor is directly inhaled by artisanal miners, and it can also travel long distances before ending up in land and water.
            </p>

            <h3 className={styles.h3Padding}>Artisanal Mining Model</h3>
            <p>
                This is the typical way artisanal miners extract gold.
                It’s a manual and labor-intensive process that uses the neurotoxin mercury that harms nature and the miners.
            </p>
            <p className={styles.noMarginBottom}>
                <strong>Model stages:</strong>
            </p>
            <ol>
                <li>Artisanal miners mine the ore.</li>
                <li>Artisanal miners crush the ore.</li>
                <li>Artisanal miners process the ore with mercury, extracting 40% of the gold and leaving mercury in the tailings.</li>
                <li>The extracted gold is sold, and the contaminated tailings containing mercury are left in piles on the ground.</li>
            </ol>

            <h3 className={styles.h3Padding}>Buy Tailings Model</h3>
            <p>
                The contaminated tailings left on the ground from the artisanal mining model are bought and processed by Newlox.
                There is plenty of supply as tailings are readily available.
                One downside with this model is that it incentivizes artisanal miners to continue their mercury practice, as they gain an additional income if Newlox buys their contaminated tailings.
            </p>
            <p className={styles.noMarginBottom}>
                <strong>Model stages:</strong>
            </p>
            <ol>
                <li>Newlox buys tailings containing mercury.</li>
                <li>Newlox extracts 95% of that mercury.</li>
                <li>Newlox processes the tailings with cyanide, extracting 90% of the gold.</li>
                <li>The extracted gold is sold, the tailings, containing 5% of the original mercury, are placed into a tailings pond, and the extracted mercury is handed over to the ministry in Costa Rica for free.</li>
            </ol>

            <h3 className={styles.h3Padding}>50/50 Model</h3>
            <p>
                In this partnership model, the artisanal miners mine the ore, and Newlox processes it.
                The <strong>profit</strong> is then split 50/50.
            </p>
            <p className={styles.noMarginBottom}>
                <strong>Model stages:</strong>
            </p>
            <ol>
                <li>Artisanal miners mine the ore.</li>
                <li>Newlox crushes the ore.</li>
                <li>Newlox processes the ore with cyanide, extracting 90% of the gold.</li>
                <li>The extracted gold is sold, and the tailings are placed into a tailings pond.</li>
                <li>The profit is split 50/50 between Newlox and the artisanal miners.</li>
            </ol>

            <h3 className={styles.h3Padding}>Toll Milling Model</h3>
            <p>
                This is the standard toll milling model where Newlox buys raw ore from the artisanal miners and processes it.
            </p>
            <p className={styles.noMarginBottom}>
                <strong>Model stages:</strong>
            </p>
            <ol>
                <li>Artisanal miners mine the ore.</li>
                <li>Newlox buys the raw ore.</li>
                <li>Newlox crushes the ore.</li>
                <li>Newlox processes the ore with cyanide, extracting 90% of the gold.</li>
                <li>The extracted gold is sold, and the tailings are placed into a tailings pond.</li>
            </ol>
            <div className={styles.lineSeparatorLight}/>


            {/* The Plants */}
            <h2 id="the-plants" className={styles.h2Padding}>The Plants</h2>
            <h3 className={styles.h3Padding}>Plant 1 - Oro Roca, Costa Rica</h3>
            <ul>
                <li><strong>Business model:</strong> buy tailings model</li>
                <li><strong>Current phase:</strong> in production, ramping up</li>
                <li><strong>Next phase:</strong> full-scale production</li>
                <li><strong>Current production/qtr:</strong> 450 t oz, fiscal Q4’23 (27.6% of max production)</li>
                <li><strong>Max production/qtr:</strong> 1,625 t oz</li>
                <li><strong>Gold content:</strong> minimum 9 g/tonne</li>
                <li><strong>Max throughput:</strong> 80 tonnes/day</li>
                <li><strong>Cash cost:</strong> US$535/t oz of gold produced</li>
                <li><strong>Royalty fee:</strong> 12.5%</li>
                <li><strong>CAPEX:</strong> $1,025,000</li>
                <li><strong>Latest update (2023-05-24):</strong> it recently had its largest month-over-month productivity increase of 20%</li>
            </ul>
            <p>
                Plant 1, based on the buy tailings model, has been operational since June 2019 and is currently Newlox’s only plant in production.
                The gold production has increased quarter-over-quarter for at least two years, and it’s close to single-handedly making Newlox profitable.
                Even if this sounds great, the ramp-up has proceeded much slower than the timelines provided by the company.
            </p>
            <p>
                The royalty for this plant is 21% until the CAPEX has been paid off, then the royalty decreases to 12.5%.
                It was confirmed at the strategy call on March 31st, 2023, that the CAPEX had almost been paid off.
                My estimations indicate it now has, but it has yet to be confirmed officially.
            </p>

            <h3 className={styles.h3Padding}>Plant 2 - Boston, Costa Rica</h3>
            <ul>
                <li><strong>Business model:</strong> 50/50 model</li>
                <li><strong>Current phase:</strong> in commissioning</li>
                <li><strong>Next phase:</strong> in production</li>
                <li><strong>Max production/qtr:</strong> 5,000 t oz</li>
                <li><strong>Gold content:</strong> ~15 g/tonne</li>
                <li><strong>Max throughput:</strong> 150 tonnes/day</li>
                <li><strong>Royalty fee:</strong> 6%</li>
                <li><strong>CAPEX:</strong> ~US$2,750,000</li>
                <li><strong>Latest update (2023-06-01):</strong> is currently waiting on final electrical upgrades by the local utility</li>
            </ul>
            <p>
                Plant 2, based on the 50/50 model, started construction on March 25th, 2021, and was completed in January 2023.
                Commissioning started shortly after and is still ongoing today.
                The commissioning was supposed to take 1.5 to 2 months, but electrical upgrades by the local utility are necessary to complete it.
                The power system installed by the provider was sufficient during testing but failed under full load with all the equipment running, according to mail conversations with investors.
                There is currently no timeline for when the issue will be resolved.
            </p>

            <h3 className={styles.h3Padding}>Plant 3 - Antioquia, Columbia</h3>
            <ul>
                <li><strong>Business model:</strong> toll milling model</li>
                <li><strong>Current phase:</strong> in permitting</li>
                <li><strong>Next phase:</strong> in construction</li>
                <li><strong>Max production/qtr:</strong> ~20,000 t oz</li>
                <li><strong>Gold content:</strong> ~15 g/tonne</li>
                <li><strong>Max throughput:</strong> 1,000 tonnes/day</li>
                <li><strong>Royalty fee:</strong> 6%</li>
                <li><strong>CAPEX:</strong> estimated $3.5 to $5 million</li>
                <li><strong>Latest update (2023-03-31):</strong> they expect to have their permits granted this summer</li>
            </ul>
            <p>
                Plant 3, based on the toll milling model, will start at 250 tpd and eventually scale to 1,000 tpd.
                Construction is estimated to begin this fall (2023) if the permits arrive in the summer.
                They expect to be completing the project and start processing in 2024.
                But considering their track record with timelines, I’d say 2025 at the earliest.
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* Organic Aqua Regia (OAR) */}
            <h2 id="oar" className={styles.h2Padding}>Organic Aqua Regia (OAR)</h2>
            <p>
                OAR is Newlox’s gold leaching technology under R&D designed to replace cyanide and mercury.
                It has numerous advantages compared to sodium cyanide, the conventional gold mining industry reagent:
            </p>
            <ul>
                <li>Higher gold recovery rates</li>
                <li>Faster gold extraction</li>
                <li>Uses no water</li>
                <li>Non-toxic reagent</li>
                <li>Produces no effluent</li>
                <li>Requires neither carbon nor electrowinning</li>
                <li>Recyclable</li>
            </ul>
            <p>
                OAR achieves ~100% gold recovery at 80 degrees Celcius in four hours and 95% at ambient Costa Rica temperatures in eight hours.
                This is much faster and at a higher recovery rate than sodium cyanide.
                Despite these advantages and all other items on the list, its price is still comparable to sodium cyanide. But...
            </p>
            <p>
                The gold mining industry is not keen on testing new technologies themselves.
                Newlox’s plants have been designed so that the backend of the plant can be removed, and the OAR can be slotted in without changing the frontend.
                Once/if it’s used in multiple projects in multiple jurisdictions, it becomes a proven technology without depending on finding another partner company to do the deployment.
                This is the key for OAR to succeed.
                And if it succeeds, they plan to use OAR in their own plants and license the technology in places where they can’t expand themselves.
            </p>
            <p>
                The R&D of OAR appears to be on hold right now, and there is no information on when it will be resumed.
                My theory is that they’ve done so because of the company’s current situation.
                They need cash for the construction of Plant 3 and also want the warrants at C$0.25 to be exercised before expiry.
                And for that to happen, they need to produce and sell gold, not focus on R&D that <strong>might</strong> benefit them in the future.
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* Moat & Competition */}
            <h2 id="moat-competition" className={styles.h2Padding}>Moat & Competition</h2>
            <h3 className={styles.h3Padding}>Moat</h3>
            <p>
                Newlox has no IP or technical moat, but they plan to patent the OAR technology if it’s successful.
                One potential moat is the high barriers to entry in the artisanal mining industry.
                Trust is essential when working with artisanal miners, and Marcello Veiga, chairman of Newlox R&D, opens those doors for Newlox.
            </p>

            <h3 className={styles.h3Padding}>Competition</h3>
            <p>
                There appears to be no real competition when working with artisanal miners.
                There is plenty of opportunity, and the barriers to entry are high.
                This might change in the future, but there are currently more available projects than Newlox can handle.
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* Production & Financial Numbers */}
            <h2 id="production-financial-numbers" className={styles.h2Padding}>Production & Financial Numbers</h2>
            <img
                className={styles.graphPadding}
                src="/newloxQuarterlyGoldProduction.webp"
                alt="Quarterly gold production graph"
            />
            <p>
                Gold production has increased quarter-over-quarter since (and including) fiscal Q1’22.
                Fiscal Q1’24 should be no exception, as gold production is anticipated to increase by more than 20% compared to fiscal Q4’23.
                And there are no indications that the quarter-over-quarter increases will stop.
            </p>
            <img
                className={styles.graphPadding}
                src="/newloxYearlyGoldProduction.webp"
                alt="Yearly gold production graph"
            />
            <p>
                Looking at the fiscal years, we see that gold production increased by 55.2% in fiscal 2023 compared to fiscal 2022.
                All of the gold production comes from Plant 1.
                And while those increases are expected to continue, there should be a more significant increase once Plant 2 operates.
            </p>
            <img
                className={styles.graphPadding}
                src="/newloxQuarterlyRevenueGrossProfit.webp"
                alt="Quarterly revenue and gross profit graph"
            />
            <p>
                Even if the gold production increased quarter-over-quarter, the revenue did not.
                There are two main reasons for this: 1) the gold price and 2) the currency exchange rate.
                The currency exchange rate is tricky as it includes three currencies.
                The selling price is based on the spot price, defined in US Dollars, but is paid in Costa Rican Colones, which is translated to Canadian Dollars for the financial statement.
                This makes the reported figures highly sensitive to exchange rate changes, which can significantly impact the financial statements.
            </p>
            <img
                className={styles.graphPadding}
                src="/newloxYearlyRevenueGrossProfit.webp"
                alt="Yearly revenue and gross profit graph"
            />
            <p>
                (TODO: Compare fiscal 2022 and fiscal 2023 once Q4 is released.)
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* Management */}
            <h2 id="management" className={styles.h2Padding}>Management</h2>
            <h3 className={styles.h3Padding}>Ryan Jackson - President, CEO, Director</h3>
            <p>
                Holds degrees from McGill University in environmental science, with an emphasis on human health and political science.
                He has worked in the mining industry both in the field and in the boardroom and spent three years as the Canadian editor of an international mining industry magazine.
                Mr. Jackson’s experience in the industry includes fieldwork, primarily in Latin America, as well as business development in North America, Europe, and East Asia.
            </p>

            <h3 className={styles.h3Padding}>Jeffrey Benavides - CFO, Director</h3>
            <p>
                Resides in Costa Rica and manages the accounts payables, receivables, payroll, cost controls, purchasing systems, and inventory control. He is an experienced chartered accountant and computer engineer with extensive managerial experience and a background in mining.
                Mr. Benavides has over a decade of experience in mining in Latin America and manages a capable team of engineers, geologists, and technical personnel.
            </p>

            <h3 className={styles.h3Padding}>Marcello Veiga - Chairman of Newlox R&D</h3>
            <p>
                Has over 40 years of experience in the resource field, including degrees in Metallurgical Engineering, Environmental Geochemistry, and a doctorate in Mining and Mineral Process Engineering.
                Dr. Veiga is a professor at the Norman B. Keevil Institute of Mining Engineering at the University of British Columbia and was the Chief Technical Advisor of the GEF/UNDP/UNIDO Global Mercury Project based in Vienna.
                Marcello is the global academic leader in artisanal mining and is well-versed in the technical, environmental, and social challenges of working with artisanal mining.
            </p>

            <h3 className={styles.h3Padding}>Wilmer Ñiquen - VP of Operations</h3>
            <p>
                Brings over 24 years of experience as a metallurgical engineer who has successfully built, optimized, and operated numerous precious metals production facilities in Peru, Ecuador, Colombia, and Brazil.
                His specialties include gravimetric ore concentration, flotation, chemical leaching, carbon elution, Merrill–Crowe recovery, smelting, refining, as well as wastewater and tailings management.
                Mr. Ñiquen has been recognized by the United Nations Industrial Development Organization (UNIDO) as an International Expert in Mineral Beneficiation following work undertaken in Colombia and Peru in collaboration with the United Nations and US State Department.
                He is also familiar with Brazilian mining, having served as the Technical Manager of the MULTIFLOTACAO Project, a 1,000 tonne per day facility in Mato Grosso State, Brazil.
            </p>

            <h3 className={styles.h3Padding}>Frances Petryshen - Corporate Secretary</h3>
            <p>
                Ms. Petryshen provides compliance and corporate secretarial and compliance consulting services to several companies, private, CSE, TSX, and TSX-V issuers.
                Most recently, she was Corporate Secretary for Balmoral Resources Ltd. until acquired by Wallbridge Mining Limited in May 2020.
                Ms. Petryshen is a Chartered Secretary, Accredited Director (Acc.Dir.), and a Fellow with the Chartered Governance Institute of Canada (FCG), where she had served as a Director of the British Columbia Branch of the Institute for over 10 years.
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* Catalyst List */}
            <h2 id="catalyst-list" className={styles.h2Padding}>Catalyst List</h2>
            <ul>
                <li>Aug’23 - Q1 financials</li>
                <li>Summer’23 - Plant 3 permits granted</li>
                <li>Fall’23 - Plant 3 construction starts</li>
                <li>Nov’23 - Q2 financials</li>
                <li>Feb’24 - Q3 financials</li>
                <li>2023 - Plant 2 production starts</li>
                <li>2024 - Plant 3 construction finished</li>
                <li>2024 - Plant 3 commissioning starts</li>
                <li>2024 - Plant 3 production starts</li>
            </ul>
            <p>
                This timeline is expressed in calendar years and is based on official communication from the company.
                Just be aware that Newlox’s reputation for missing deadlines is legendary, and I’d take all timelines (except Q1-Q3 financials) with a truckload of salt.
                I expect Plant 2 to start production in 2023, but the Plant 3 timelines seem optimistic.
            </p>
            <p>
                I’m confident there will be press releases when Plant 1 and Plant 2 reach certain productivity levels, but those are hard to add to a catalyst list.
                There is also no mention of any plant running at full scale, as Newlox has yet to prove that they can reach full scale on any Plant.
                Their crippling ramp-up speed for the last few years shows that it’s easier said than done.
            </p>
            <p>
                The most important catalyst is Plant 2 going into production.
                At full scale, if reached, it can produce 5,000 t oz of gold every quarter.
                This translates to yearly revenues above C$50 million, with the gold price at US$1,950.
                Once Plant 2 starts operating, we should see sharply increased revenues and Newlox becoming profitable, if they aren’t already.
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* My Analysis of Newlox Gold */}
            <h2 id="my-analysis" className={styles.h2Padding}>My Analysis of Newlox Gold</h2>
            <p>
                With the company facts on the table, what’s my take on Newlox?
                That’s a complicated question, and many factors must be accounted for.
                Have they made progress over the last years? Absolutely.
                Have they met my (or their own) expectations? Not even close.
                They’ve made the mistake of selling a dream they could not deliver.
                This has led to many investors becoming bag holders, and shareholder trust is almost nonexistent.
            </p>

            <h3 className={styles.h3Padding}>The Good</h3>
            <p>
                Let’s start by talking about the good things with Newlox.
                Firstly, they’ve proven that they can produce significant amounts of gold.
                This is no pre-revenue company about to test their technology.
                They’ve been producing gold for many years.
                And not only that, they’ve also increased production quarter-over-quarter for at least two years.
                It has definitely not gone fast, but it’s moving forward at a steady pace.
            </p>
            <p>
                Secondly, the margins. They achieved gross margins of over 68% in their 2023 fiscal year (TODO: Check margins once Q4 is released).
                These are exceptional margins and show that Newlox has the potential to become very profitable.
                The gross margin of Plant 3 is expected to be around the same level.
                And that plant has the potential to grow into a 1,000 tpd plant, compared to Plant 1 with its 80 tpd.
            </p>
            <p>
                Thirdly, they are near profitability, with only their pilot plant (Plant 1) operational!
                It’s strange to see a micro-cap company that’s almost profitable with only their pilot plant running, but here we are.
                Once Plant 2 starts producing gold, I expect profits and share price to soar.
                And especially once solid production numbers are confirmed officially.
            </p>

            <h3 className={styles.h3Padding}>The Bad</h3>
            <p>
                Newlox has two great shortcomings: 1) their communication (and inability to provide realistic timelines) and 2) their execution.
                I’ll demonstrate with an example where Newlox’s CEO was interviewed by The Deep Dive on July 19th, 2021.
            </p>
            <p className={styles.noMarginBottom}>
                <strong>What was said:</strong>
            </p>
            <ol>
                <li>Plant 1 is ramping up and will soon hit full scale.</li>
                <li>The construction of Plant 2 is at an advanced stage, with almost all equipment on site being installed.</li>
                <li>Expecting to commence operations at Plant 2 within 1-2 months.</li>
                <li>Expecting Plant 2 to reach full scale in Q1 2022.</li>
            </ol>
            <p className={styles.noMarginBottom}>
                <strong>Reality:</strong>
            </p>
            <ol>
                <li>Plant 1 ran at 27.6% of max capacity between January-March 2023.</li>
                <li>The construction was not at an advanced stage, and it finished in January 2023.</li>
                <li>More than two years later, Plant 2 is still not operational.</li>
                <li>You can only ramp up what’s running.</li>
            </ol>
            <p>
                And execution is not much better than their communication.
                They’ve failed to file their financials on time for the last three years (!!).
                And they are still not trading on the OTCQB, even though they began the listing process on March 9th, 2021, and have made several statements that the listing would happen soon.
                But the most frustrating part is the inability to get Plant 2 operational and get Plant 1 running at a higher capacity.
            </p>
            <p>
                Communication has become more realistic, and they’ve started providing gold production numbers for every quarter, giving some transparency into their business.
                But they keep failing to meet their timelines, eroding whatever shareholder trust is left.
                Newlox needs to rebuild trust with its investors, and in the next section, I’ll share what I’d personally want to see from the company.
            </p>

            <h3 className={styles.h3Padding}>What I’d Like To See From Newlox</h3>
            <p>
                This is a highly subjective section where I’ve written down what I want to see from Newlox to feel more comfortable as a shareholder.
                You might have other items that feel more important to you, but I believe the items in this list are a good start to rebuilding shareholder trust.
            </p>
            <ul>
                <li>
                    <strong>Get Plant 2 operational.</strong>
                </li>
                <ul>
                    <li>
                        Getting Plant 2 operational is one of the most critical milestones in the company’s history.
                        Yet there appears to be no rush to get it running.
                        Construction began on March 25th, 2021, but it took them around one year to pour the foundation when construction was expected to take only three months.
                        Now the commissioning is waiting on electrical upgrades by the local utility, and what is Newlox doing to resolve the situation?
                        We don’t know. But hopefully, they are doing something and not just waiting for the local utility to solve the problem.
                    </li>
                </ul>

                <li>
                    <strong>File the next two fiscal year financials on time.</strong>
                </li>
                <ul>
                    <li>
                        Missing the filing deadline for three fiscal year financials in a row is simply unacceptable.
                        This needs to be fixed, no matter what it takes.
                        If this means you need to pay your auditors extra to have them review your accounting a few more times during the year, then do it.
                        Or perhaps the current CFO is better suited for another position at the company.
                        Whatever it takes, get it done.
                    </li>
                </ul>

                <li>
                    <strong>File the financials earlier than the last day.</strong>
                </li>
                <ul>
                    <li>
                        This wouldn’t be a problem if all financials were filed on time.
                        But with the current situation it creates unnecessary stress among investors to have the financials filed on the last day after the market closes.
                    </li>
                </ul>

                <li>
                    <strong>Provide more realistic timelines.</strong>
                </li>
                <ul>
                    <li>
                        There is a gap between what Newlox say they can do and what they do.
                        It has become better.
                        But we’re still not there, and they rarely hit a single deadline.
                        Either the timelines have to be more conservative, or the execution has to improve.
                        Nothing more, nothing less.
                    </li>
                </ul>

                <li>
                    <strong>List shares on the OTCQB.</strong>
                </li>
                <ul>
                    <li>
                        This is honestly more of a thorn in my eye than a real issue.
                        If they get Plant 2 operational and turn profitable, OTCQB is the least of my concern.
                        But for me, the OTCQB listing is a constant reminder of broken promises and their inability to do some of the most basic things, like filing financials on time.
                    </li>
                </ul>

                <li>
                    <strong>Clear separation of gold production in different plants.</strong>
                </li>
                <ul>
                    <li>
                        Newlox stepped up their game when they started providing quarterly production numbers.
                        There is less room for speculation when there is high transparency.
                        And to keep this level of transparency, Newlox needs to provide separate production numbers for the different plants once Plant 2 is operational.
                    </li>
                </ul>
            </ul>

            <h3 className={styles.h3Padding}>Why I’m Invested</h3>
            <p>
                It’s true that this company is far from perfect.
                But all of my investments come down to two things, risk vs reward.
                Newlox’s communication could be (much) better, and shareholder trust is at all-time lows.
                But despite this, they’ve shown that their business is solid, and they have the margins to prove it.
                They are, after all, almost profitable on their pilot plant alone. That’s just insane.
                As long as they rinse and repeat what they’ve done so far, I find it hard for them to fail at this point.
            </p>
            <p>
                That said, I’d like them to hire one or two heavy hitters to the management team.
                They have all the pieces, but they need a management team that can execute on them.
                With their current speed of progress, my investment should grow, if ever so slowly.
                But with a tad better execution, I’m confident that the investment will not just grow slowly.
                It will thrive.
            </p>
            <div className={styles.lineSeparatorLight}/>


            {/* Sources */}
            <h2 id="sources" className={styles.h2Padding}>Sources</h2>
            <ol>
                <li>
                    <Link href={"https://www.newloxgold.com/investors/#presentation"}>Newlox investor slide deck</Link>
                </li>
                <li>
                    <Link href={"https://webfiles.thecse.com/Newlox_Form_7_-_July_2023_4_Aug_2023.pdf?8eJ_fQT2Lnw.RlB0p7f.uay21q7R6Y31"}>Form 7 - Monthly progress report, July 2023</Link>
                </li>
                <li>
                    <Link href={"https://sylleinvest.com/blog/summary-of-lux-zoom-call"}>Summary of Newlox’s Zoom call, 2022-07-23</Link>
                </li>
                <li>
                    <Link href={"https://youtu.be/oaJftOa8hnc"}>Newlox’s strategy call, 2023-03-31</Link>
                </li>
                <li>
                    <Link href={"https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/chem.201704840"}>The Mercury Problem in Artisanal and Small-Scale Gold Mining, 2018-01-03</Link>
                </li>
                <li>
                    <Link href={"https://theconversation.com/amp/gold-rush-mercury-legacy-small-scale-mining-for-gold-has-produced-long-lasting-toxic-pollution-from-1860s-california-to-modern-peru-133324"}>Gold rush, mercury legacy: Small-scale mining for gold has produced long-lasting toxic pollution, 2020-05-28</Link>
                </li>
                <li>
                    <Link href={"https://youtu.be/sNj98ytr8hs"}>Artisanal gold mining In Migori, 2018-10-05</Link>
                </li>
                <li>
                    <Link href={"https://www.thenewswire.com/press-releases/1Bz4Fmde8-newlox-gold-continues-monthly-productivity-increases.html"}>Newlox gold continues monthly productivity increases, 2021-08-10</Link>
                </li>
                <li>
                    <Link href={"https://sedar-filings-backup.thecse.com/00032095/2303011654510487.pdf"}>Newlox’s fiscal Q3’23 financials</Link>
                </li>
                <li>
                    <Link href={"https://www.thenewswire.com/press-releases/1A8vFqVag-newlox-gold-extends-its-record-of-quarter-over-quarter-production-growth-in-fiscal-2023.html"}>Newlox Gold extends its record of quarter-over-quarter production growth in fiscal 2023, 2023-05-24</Link>
                </li>
                <li>
                    <Link href={"https://www.thenewswire.com/press-releases/1A8vFqVag-newlox-gold-extends-its-record-of-quarter-over-quarter-production-growth-in-fiscal-2023.html"}>Newlox Gold ends fiscal year by extending its record of unbroken quarterly production gains, 2023-06-01</Link>
                </li>
                <li>
                    <Link href={"https://youtu.be/ybsSwxCG6GE?t=509"}>The Deep Dive interviews Ryan Jackson, 2021-07-19</Link>
                </li>
                <li>
                    <Link href={"https://sylleinvest.com/blog/interview-with-lux-ceo"}>Sylle Invest interviews Ryan Jackson, 2022-05-12</Link>
                </li>
                <li>
                    <Link href={"https://www.thenewswire.com/press-releases/1BNMFz9Z4-newlox-gold-starts-construction-at-plant-2.html"}>Newlox starts construction at Plant 2, 2021-03-25</Link>
                </li>
                <li>
                    <Link href={"https://www.youtube.com/watch?v=O2ctl87l_ZM"}>Foundation being poured at Plant 2, 2022-04-21</Link>
                </li>
                <li>
                    <Link href={"https://ceo.ca/@thenewswire/newlox-rd-achieves-up-to-100-gold-recovery-using"}>Newlox R&D Achieves Up To 100% Gold Recovery</Link>
                </li>
                <li>
                    <Link href={"https://ceo.ca/@thenewswire/newlox-gold-organic-aqua-regia-testing-delivers-excellent"}>OAR Testing Delivers Excellent Results</Link>
                </li>
            </ol>
        </div>
    )
}