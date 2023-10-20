import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { TypeAnimation } from 'react-type-animation';
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ImageCard = () => (
  <Tilt className='xs:w-[330px] w-full mt-12'>
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-0.5 px-0.5 min-h-[150px] md:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={"src/assets/profilepic/mumo.jpeg"}
          alt='web-development'
          className='object-contain rounded-2xl'
        />

      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {

  const words = [
    'Blockchain Developer', 1000,
    'Frontend Developer', 1000,
    'Product Manager', 1000,
    'Web Developer', 1000,
    'Full Stack Developer', 1000,
    'Automation Engineer', 1000,
  ];

  return (
    <section className='relative w-full h-screen mx-auto' id="hero">
       <div className={`absolute inset-0 max-w-7xl mx-auto flex md:flex-row items-center -mt-28 px-12 justify-center flex-col text-center md:text-left`}>
          <div className="md:flex-grow">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className='bg-clip-text text-transparent bg-gradient-to-r  from-pink-500 to-violet-500'>Jason Aw</span>
            </h1>
            <br/>
            <span className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a <TypeAnimation
                sequence={words}
                speed={50}
                repeat={Infinity}
                deletionSpeed={70}
                cursor={true}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#60efff] to-[#00ff87] font-bold"
                // className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold"
                />
            </span>
           </div>
              <ImageCard/>
        </div>


        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero