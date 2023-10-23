import React from "react";
import Image from "../assets/gerva6-min.webp";
import { FaGithub, FaLinkedin, FaRegAddressCard } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  const handleDowload = () => {};

  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="containter mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left lg:items-center">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Gervasio <span>Jacob</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4 w-full">Desarrollador</span>
              <TypeAnimation
                sequence={["Frontend", 2000, "Backend", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Soy un desarrollador Web FULL STACK muy apasionado por la
              profesión, llevo 2 años de desarrollo en proyectos
              individuales/grupales. Estoy en busca de mi primera experiencia
              Profesional.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="#contact" className="text-gradient btn-link">
                Contactame
              </a>
              <a href="#work" className="text-gradient btn-link">
                Proyectos destacados
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/gervajac">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/gervasio-jacob/">
                <FaLinkedin />
              </a>
              <a
                onClick={() => handleDowload()}
                href="https://drive.google.com/file/d/1FmlEwrzkgaQinP1iMgbNXQ0dECId-coV/view?usp=sharing"
              >
                <FaRegAddressCard />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:w-[482px]"
          >
            <img src={Image} loading="lazy" alt="" className="rounded-full brightness-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
