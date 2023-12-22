import Image from 'next/image';
import styles from './styles/sectionIDEGallery.module.css'

export function SectionIDEGallery(){
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryHeading}>
                <p>
                    {'Use the web'}
                    <span className={styles.aqua}>
                        {'to build the web.'}
                    </span>
                </p>
            </div>
            <div className={styles.galleryContentWrapper}>
                <div className={styles.gallerContentContainer}>
                    <div className={styles.galleryTextContentWrapper}>
                        <div className={styles.galleryContentTitle}>
                        <p>
                            {'Seamless Node.js debugging with Chrome Dev Tools'}
                        </p>
                        </div>
                        <div className={styles.galleryContent}>
                            <p>
                                {'Debug backend applications just as easily as frontend, using the powerful tools'}&nbsp;<b>{'already shipped in your browser.'}</b>
                            </p>
                        </div>
                    </div>
                    <Image width="495" height="710" className={styles.ideImages} src="/IDEGallery/One.webp"/>
                </div>   

                <div className={styles.gallerContentContainer}>
                    <Image width="495" height="710" className={styles.ideImages} src="/IDEGallery/Two.webp"/>
                    <div className={styles.galleryTextContentWrapper}>
                        <div className={styles.galleryContentTitle}>
                        <p>
                            {'Run the backend in the frontend'}
                        </p>
                        </div>
                        <div className={styles.galleryContent}>
                            <p>
                                {'If it can run on Node.js, it can run on StackBlitz WebContainers, including backend functionality and libraries, meaning you can'}&nbsp;<b>{'run servers. In your browser.'}</b>
                            </p>
                        </div>
                    </div>
                </div>   

                <div className={styles.gallerContentContainer}>
                    <div className={styles.galleryTextContentWrapper}>
                        <div className={styles.galleryContentTitle}>
                        <p>
                            {'Fresh, fast environments on every page load.'}
                        </p>
                        </div>
                        <div className={styles.galleryContent}>
                            <p>
                                {'Reinstalling   node_modules   is as simple as refreshing the page, and since StackBlitz package installations are orders of magnitude faster than local,'}&nbsp;<b>{'installing packages is now a trivial endeavour.'}</b>
                            </p>
                        </div>
                    </div>
                    <Image width="710" height="369" src="/IDEGallery/Three.webp"/>
                </div>   
            </div>
        </div>
    );
}