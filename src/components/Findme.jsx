import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Findme = () => {
  return (
    <div className={`mt-8 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[400px]`}>
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={`${styles.sectionHeadText} text-center`}>Find me at</h2>
          <div className="flex mt-16 justify-around">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jason-aw-han-wei/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-gray-400">
              <svg className={`${styles.contactIcon}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
              LinkedIn
            </a>
            {/* GitHub */}
            <a href="https://github.com/jasonaw98" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-gray-400">
              <svg className={`${styles.contactIcon}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
              Github
            </a>
            {/* Email */}
            <a href="mailto:jason_aw1998@hotmail.com" className="flex flex-col items-center hover:text-gray-400">
              <svg className={`${styles.contactIcon}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m9.978 13.233 9.392-6.668a1.945 1.945 0 0 0-.186-.177L11.2.65A2 2 0 0 0 8.815.638L.8 6.4a1.928 1.928 0 0 0-.207.2l9.385 6.633Z" />
                <path d="M11.181 14.864a2.007 2.007 0 0 1-2.382-.014L0 8.627V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.573l-8.819 6.29Z" />
              </svg>
              Email
            </a>
            {/* OpenSea */}
            <a href="https://opensea.io/Jasonaw" target="_blank" className="flex flex-col items-center hover:text-gray-400">
              <svg className={`${styles.contactIcon}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
              </svg>
              OpenSea
            </a>
            {/* LinkTree */}
            <a href="https://linktr.ee/jasonaw" target="_blank" className="flex flex-col items-center hover:text-gray-400">
              <svg className={`${styles.contactIcon}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
              </svg>
              LinkTree
            </a>
          </div>
          <div className="flex justify-center mt-16 mr-5">
            <a href="#hero">
              <svg className="w-[25px] h-[25px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default SectionWrapper(Findme, "");