import React from "react";
import CountUp from "react-countup";


const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top rounded-full brightness-80"></div>
            {/* text */}
            <div className="flex-1">
            <h2 className="h2 text-accent">Sobre Mí</h2>
            <h3 className="h3 mb-4">
              Soy Desarrollador web Full Stack con más de 1000 horas en Bootcamp y en creación de más de 10 proyectos.
            </h3>
            <p className="mb-6">
            Actualmente vivo en Crespo, Entre Ríos, Argentina. Tengo 25 años y siempre fui muy apasionado por la industria tecnológica. 
            Hace dos años me introduzque en el mundo de la programación y el desarrollo Web.
            </p>
            {/* stats */}
          <div className="flex gap-x-6 lg:pag-x-10 mb-12">
            <div className="text-[40px] font-tertiary text-gradient mb-2">
              <CountUp start={0} end={2} duration={3} />
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Años de <br />
              Experiencia
            </div>
          </div>
          <div className="flex gap-x-6 lg:pag-x-10 mb-12">
            <div className="text-[40px] font-tertiary text-gradient mb-2">
              +<CountUp start={0} end={10} duration={3} />
            </div>
            <div className="font-primary text-sm tracking-[2px]">Proyectos</div>
          </div>
          <div className="flex gap-x-8 items-center">
            <a href="#contact">
            <button className="btn btn-lg">Contactame</button>
            </a>
            <a href="#" className="text-gradient btn-link">
              Mi Portafolio
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
