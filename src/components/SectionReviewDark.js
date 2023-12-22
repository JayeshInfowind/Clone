import Image from 'next/image';
import styles from './styles/sectionReviewDark.module.css'
export function SectionReviewDark(){
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.review}>
                <p>
                 {'“StackBlitz is the first online IDE'}
                <br/>
                    <b>
                        {'whose compute model makes sense to me.”'}
                    </b>
                </p>
            </div>
            <div className={styles.reviewerContainer}>
                <Image src="/icons/githubFounder.png" width="47" height="47" alt="Google logo" />
                <Image src="/icons/githubLogo.png" width="47" height="47" alt="Google logo" />
                <div className={styles.reviewBy}>
                    <p>
                        <b>
                            {'Tom Preston-Werner'}
                        </b>
                    </p>
                    <p>
                        {'founder of GitHub & Investor in StackBlitz'}
                    </p>
                </div>
            </div>
        </div>
    )
}