import React from 'react';
import {BsArrowUpRight} from "react-icons/bs";
import motion from "framer-motion";
import fadeIn from "../variants"

const services = [
  {
    name: "Frontend",
    description: "Development with many technologies like React, JS, TypeScript, Redux, Tailwind, CSS, HTML and more.",
    link: "Learn more"
  },
  {
    name: "Backend",
    description: "Development with technologies like Express, NodeJS",
    link: "Learn more"
  },
  {
    name: "Databases",
    description: "MongoDB, postreSQL and MySQL.",
    link: "Learn more"
  }
]

const Services = () => {
  return( 
              <section id="services" className='section'>
                  <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row'>
                      {/* text & image */}
                      <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>What i Do.</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>
                            I am a full stack developer with 2 years of experience.
                        </h3>
                        <button className='btn btn-sm'>See my works</button>
                      </div>
                      <div className='flex-1'>
                          { /* services list */}
                          <div>
                            {services.map((service, index) => {
                              const {name, description, link} = service;
                              return(
                                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                  <div className='max-w-[476px]'>
                                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                    <p className='font-secondary leading-tight'>{description}</p>
                                  </div>
                                  <div className='flex flex-col flex-1 items-end'>
                                    <a 
                                    href="#" 
                                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                                      <BsArrowUpRight />
                                    </a>
                                      <a 
                                        href="#"
                                        className='text-gradient text-sm'>
                                        {link}
                                      </a>
                                    
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                      </div>
                    </div>
                  </div>
              </section>
)};

export default Services;
