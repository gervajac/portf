import React from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img from "../assets/services.png";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
            {/* text */}
            <div className="flex-1">
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Full Stack developer with more than 800 hours in a
              boothcamp and creating proyects.
            </h3>
            <p className="mb-6">
              I am from argentina and i have 25 years old. I'am so apassionated
              for the development i started 2 years ago and this changed my life
              because before the start in programmation i couldn't discover my
              vocation.
            </p>
            {/* stats */}
          <div className="flex gap-x-6 lg:pag-x-10 mb-12">
            <div className="text-[40px] font-tertiary text-gradient mb-2">
              <CountUp start={0} end={2} duration={3} />
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Years of <br />
              Experience
            </div>
          </div>
          <div className="flex">
            <div className="text-[40px] font-tertiary text-gradient mb-2">
              <CountUp start={0} end={5} duration={3} />
            </div>
            <div className="font-primary text-sm tracking-[2px]">Proyects</div>
          </div>
          <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg">Contact me</button>
            <a href="#" className="text-gradient btn-link">
              My Portfolio
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
