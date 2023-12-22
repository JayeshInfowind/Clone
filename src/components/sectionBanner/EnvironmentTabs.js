import React from "react";
import styles from "../styles/bootTab.module.css";
import Image from "next/image";
export const EnvironmentTabs = () => {
  return (
    <div className={styles.bootTabSection}>
      <div className="mb-[44px] mt-[20px] text-sm font-medium text-center text-/[hsl(0 0% 80%)]/ dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px justify-center">
          <li className="me-2 inline-block text-gray-500  p-4  border-b-2 border-[] rounded-t-lg cursor-pointer">
            Popular
          </li>
          <li className="me-2 inline-block text-gray-500 p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Frontend
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Backend
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Fullstack
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Vite
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Docs, Blogs & Slides
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Creative
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Mobile
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Vanilla
          </li>
          <li className="me-2 inline-block text-gray-500  p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer">
            Native Languages
          </li>
        </ul>
      </div>
      <div className="max-w-[1000px] m-auto">
        <div className={styles.gridSkill}>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>

          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div className={styles.boxSkill}>
            <div>
              <img src="/icons/SVG.svg" alt="" height={28} width={28} />
            </div>
            <div>
              <h6>Astro</h6>
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
