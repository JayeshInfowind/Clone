import Image from 'next/image';
import styles from '../styles/sectionReview.module.css'
export function SectionReview(){
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.review}>
                <p>
                    {'"Being able to instantly open and share environments'}
                    <br/>
                    {"has"}&nbsp;<b>{"significantly reduced our team's support burden"}</b>
                    <br/>
                    {'for bug reproductions and enabled rapid innovation."'}
                </p>
            </div>
            <div className={styles.reviewerContainer}>
                <Image src="/icons/reviewer.png" width="47" height="47" alt="Google logo" />
                <Image src="/icons/googleLogo.png" width="47" height="47" alt="Google logo" />
                <div className={styles.reviewBy}>
                    <p>
                        <b>
                            {'Stephen Lung'}
                        </b>
                    </p>
                    <p>
                        {'Developer Relations Lead at Google'}
                    </p>
                </div>
            </div>
        </div>
    )
}