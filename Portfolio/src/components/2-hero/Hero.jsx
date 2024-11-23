import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as Unicons from '@iconscout/react-unicons';

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer, Frontend Developer ReactJS
        </motion.h1>

        <p className="sub-title">
        I am Rodina Ibrahim , I am a computer engineering graduate (class-2024).
        I am passionate about creating seamless, engaging interfaces, impressive Designs with a background in React
        and am always eager to learn and apply new technologies.
        </p>

        <div className="all-icons flex">
      <div className="icon">
        <a href="https://github.com/rodina77" target="_blank" rel="noopener noreferrer">
          <Unicons.UilGithub size="30" />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com/in/rodina-ibrahim-240634222/" target="_blank" rel="noopener noreferrer">
          <Unicons.UilLinkedin size="30" />
        </a>
      </div>
      <div className="icon">
        <a href="mailto:rodinaibrahim434@gmail.com" target="_blank" rel="noopener noreferrer">
          <Unicons.UilEnvelope size="30" />
        </a>
      </div>
    </div>



      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
