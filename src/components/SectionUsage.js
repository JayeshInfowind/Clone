import Image from 'next/image';
import styles from './styles/sectionUsage.module.css'
export function SectionUsage(){
    return(
        <div className={styles.sectionUsage}>
            <div className={styles.userTitle}>
                <p>
                    {'Loved by millions of developers every month'}
                </p>
                <p>
                    <b>
                    {"at the world's largest companies"}
                    </b>
                </p>
            </div>
            <div className={styles.globalUsageUsers}>
            <Image width="100" height="88" alt="Google logo" src="https://c.staticblitz.com/assets/vite/google-SoTepagF.svg"/>
            <Image width="100" height="88" alt="Meta logo" src="https://c.staticblitz.com/assets/vite/meta-WWD01PTq.svg"/>
            <Image width="100" height="88" alt="Shopify logo" src="https://c.staticblitz.com/assets/vite/shopify-ch7bpIk5.svg"/>
            <Image width="100" height="88" alt="Salesforce logo" src="https://c.staticblitz.com/assets/vite/salesforce-v8Lm0S_7.svg"/>
            <Image width="100" height="88" alt="Intel logo" src="https://c.staticblitz.com/assets/vite/intel-UxdgsNV0.svg"/>
            <Image width="100" height="88" alt="Mozilla logo" src="https://c.staticblitz.com/assets/vite/mozilla-gZ50AedX.svg"/>
            <Image width="100" height="88" alt="Cloudflare logo" src="https://c.staticblitz.com/assets/vite/cloudflare-D8dIlFQq.svg"/>
            <Image width="100" height="88" alt="Stripe logo" src="https://c.staticblitz.com/assets/vite/stripe-hSQrL72T.svg"/>
            </div>
        </div>
    );
}