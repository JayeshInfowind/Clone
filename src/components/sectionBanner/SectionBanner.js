import styles from '../styles/sectionBanner.module.css'
import {EnvironmentTabs} from './EnvironmentTabs'
import DynamicTextContent from '../dynamicTextContent/DynamicText'
export function SectionBanner(){
    return (
        <div className={styles.sectionOne}>
            <div className={styles.infoContainer}>
                <div className={styles.bannerPillContainer}>
                    <div className={styles.pillInner}>
                        {'Introducing StackBlitz Team'}
                    </div>
                    <div className={styles.pillOuter}>
                        <span>
                        {'Learn More'}
                        </span>
                        <span>
                            {'>'}
                        </span>
                    </div>
                </div>
                <div className={styles.titleContentContainer}>
                    <p>
                        {'Click.'}
                    </p>
                    <DynamicTextContent/>
                    <p className={styles.doneContentText}>
                        {'Done.'}
                    </p>
                </div>
                <div className={styles.subtitleContentContainer}>
                    <p>
                        {"Stay in the flow with instant dev experiences. No more hours"}
                    </p>
                    <p>
                        {"stashing/pulling/installing locally — just click, and start coding"}
                    </p>
                </div>
            </div>
            <div className={styles.environmentContainer}>
                <div className={styles.environmentTitle}>
                    <p>
                    {`Boot a fresh environment in`}
                    &nbsp;
                    <b>{'milliseconds.'}</b>
                    </p>
                </div>
                <div>
                    {/* <EnvironmentTabs/> */}
                </div>
            </div>
        </div>
    )
}