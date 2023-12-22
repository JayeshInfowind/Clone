import Image from 'next/image';
import styles from './styles/sectionReviewDark.module.css'
export function SectionReviewSvelte(){
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.review}>
                <p>
                 {'“It\'s surely only a matter of time before locally installed IDEs'}
                 &nbsp;
                 <br/>
                    <b>
                        {'go the way of the Walkman.”'}
                    </b>
                </p>
            </div>
            <div className={styles.reviewerContainer}>
                <Image src="/icons/founderSvelte.png" width="47" height="47" alt="Google logo" />
                <Image src="/icons/svelteLogo.png" width="47" height="47" alt="Google logo" />
                <div className={styles.reviewBy}>
                    <p>
                        <b>
                            {'Rich Harris'}
                        </b>
                    </p>
                    <p>
                        {'Svelte & SvelteKit creator'}
                    </p>
                </div>
            </div>
        </div>
    )
}
