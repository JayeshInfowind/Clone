import Image from "next/image";
import styles from "../styles/sectionInstantDevExp.module.css";

export function SectionInstantDevExp() {
  return (
    <div className={styles.galleryContainer}>
      <div
        style={{ textAlign: "start", padding: "30px" }}
        className={styles.galleryHeading}
      >
      <div style={{ textAlign: "start", color : '#1b82bc'}}>
        <img src="/IDEGallery/wand.svg" style={{ fill: '#1b82bc'}} alt="" height={40} width={40} />
        <p style={{fontSize : '16px', fontWeight : 'bold'}}>
        Instant dev experiences
        </p>
      </div>
        <p className={styles.waitText}>
          {"Wait, I can enjoy web dev again?"}
        </p>
      <div style={{marginTop : "30px"}} className={styles.galleryContent}>
        <p>
          Significantly reduce time to market with
          <b>
          {' '}
            matchlessly secure, instantly reproducible,  <br/>   fullstack dev
            environments
          </b>
           {' '}which <b>boot in milliseconds.</b>
        </p>
      </div>
      </div>
      <div className={styles.galleryContentWrapper}>
        <div className={styles.gallerContentContainer}>
          <div className={styles.galleryTextContentWrapper}>
            <div className={`${styles.galleryContentTitle}`} >
              <p>{"Instant Bug Reports"}</p>
            </div>
            <div className={styles.galleryContent}>
              <span>
                Create <b>zero-overhead, live templates</b> for your users to
                reliably submit bugs against, <b>filtering out true issues</b>{" "}
                from everything else.
              </span>
              <br />
            </div>
            <span>
              <span style={{ color: "#00a3cc" }}>
                {" "}
                Share complete environments with only a url,
              </span>{" "}
              and never spin up heavy local installations for a simple bug
              report ever again.
            </span>
          </div>
          <Image
            width="495"
            height="750"
            style={{objectFit : 'cover'}}
            className={styles.ideImages}
            src="/IDEGallery/bug_reports.png"
          />
        </div>

        <div className={styles.gallerContentContainer}>
          <Image
            width="495"
            height="710"
            style={{objectFit : 'cover'}}
            className={styles.ideImages}
            src="/IDEGallery/interactive_documentation.png"
          />
          <div className={styles.galleryTextContentWrapper}>
            <div className={styles.galleryContentTitle}>
              <p>{"Interactive Documentation"}</p>
            </div>
            <div className={styles.galleryContent}>
              <span>
                <span style={{ color: "#00a3cc" }}>
                  {" "}
                  Use the StackBlitz SDK
                </span>{" "}
                to embed and interact with <b>actual code</b> in your{" "}
                <b>actual docs,</b> blog or website.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.gallerContentContainer}>
          <div className={styles.galleryTextContentWrapper}>
            <div className={styles.galleryContentTitle}>
              <p>{"Rapid Prototyping"}</p>
            </div>
            <div className={styles.galleryContent}>
              <span>
                Speed up your entire development process with{" "}
                <b>real time hot-reloading in the</b>
                <b style={{ color: "#00a3cc" }}>
                  {" "}
                  fastest dev environment ever made.
                </b>
              </span>
            </div>
            <span>
              Collaborate remotely on different devices, send and receive
              instant feedback, and <b>get to market faster.</b>
            </span>
          </div>
          <Image
            width="710"
            height="600"
            style={{objectFit:'none'}}
            src="/IDEGallery/rapid_prototyping.png"
          />
        </div>
      </div>
    </div>
  );
}
