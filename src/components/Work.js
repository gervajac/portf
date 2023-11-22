import React from "react";
import { Carrusel } from "./Carrusel";
import { Tinderin } from "../proyectos";
import { ArgentinaDevs } from "../proyectos";
import { Gertech } from "../proyectos";


const Work = () => {
  return (
    <section className="section h-auto" id="work">
      <div className="flex flex-col justify-center w-full space-y-6">
        <h6 className="flex justify-center text-center items-center text-6xl underline">
          Proyectos Destacados
        </h6>
        <div className="flex flex-col text-center justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center mb-8 space-x-2 items-center text-accent text-3xl font-semibold">
            <h3 className="font-bold text-6xl">
              Tinderin - Red social de Búsqueda de Trabajo -
            </h3>
            <a
              className="text-white underline"
              href="https://gervasio-dev--tndrn.netlify.app/landing"
            >
              visitar
            </a>
          </div>
          <p className="flex max-w-[1000px] text-center justify-center mb-4 items-center">
            Desarrollé una red social con fines de búsqueda de trabajo, tomando
            funciones y aspectos de Tinder y Linkedin. Los usuarios pueden
            personalizar sus perfiles intuitivamente para lograr destacarse y
            matchear.
          </p>
          <div className="flex flex-col w-screen justify-center items-center h-[500px] space-y-2">
            <Carrusel imageArray={Tinderin} />
          </div>
          <div className="flex w-full flex-col justify-center items-center mt-4 space-y-2">
            <h4 className="text-2xl font-semibold">
              Tecnologías/Frameworks/Lenguajes Utilizados:
            </h4>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl ">
                Frontend:
              </h6>
              <ul className="flex  flex-row space-x-1 sm:space-x-4 w-[440px] ">
                <li>Typescript</li>
                <li>React</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl">
                Backend:
              </h6>
              <ul className="flex flex-row  space-x-1 sm:space-x-4 w-[440px]">
                <li>Typescript</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Socket.io</li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl ">
                Database:
              </h6>
              <ul className="flex flex-row space-x-1 sm:space-x-4 w-[440px] ">
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center w-full space-y-2 ">
          <div className="flex flex-col md:flex-row justify-center mb-8 space-x-2 items-center text-accent text-3xl font-semibold">
            <h3 className="font-bold text-6xl">
              ArgentinaDevs - Foro de Programadores
            </h3>
            <a
              className="text-white underline"
              href="https://nextfor.vercel.app/"
            >
              visitar
            </a>
          </div>
          <p className="flex max-w-[1000px] text-center justify-center mb-4 items-center">
            Desarrollé y diseñé un foro como herramienta para los programadores
            argentinos con la posibilidad de compartir ideas, crear asuntos,
            comentar, interactuar, despejar dudas y compartir empleos
          </p>
          <div className="flex flex-col w-screen justify-center items-center h-[500px] space-y-2">
            <Carrusel imageArray={ArgentinaDevs} />
          </div>
          <div className="flex w-full flex-col justify-center items-center mt-4 space-y-2">
            <h4 className="text-2xl font-semibold my-4">
              Tecnologías/Frameworks/Lenguajes Utilizados:
            </h4>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl ">
                Frontend:
              </h6>
              <ul className="flex  flex-row space-x-1 sm:space-x-4 w-[440px] ">
                <li>Typescript</li>
                <li>NextJS</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl">
                Backend:
              </h6>
              <ul className="flex flex-row  space-x-1 sm:space-x-4 w-[440px]">
                <li>NestJS</li>
                <li>JWT</li>
                <li>ExpressJS</li>
                <li>Typeorm</li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl ">
                Database:
              </h6>
              <ul className="flex flex-row space-x-1 sm:space-x-4 w-[440px] ">
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center w-full space-y-2 ">
          <div className="flex flex-col md:flex-row justify-center mb-8 space-x-2 items-center text-accent text-3xl font-semibold">
            <h3 className="font-bold text-6xl">
              Gertech - Ecommerce
            </h3>
            <a
              className="text-white underline"
              href="https://gertech.netlify.app/home"
            >
              visitar
            </a>
          </div>
          <p className="flex max-w-[1000px] w-full text-center justify-center mb-4 items-center">
            Desarrollé y diseñé un tradicional E-commerce de productos
            informáticos con un Home que contiene un carrusel automático y
            secciones para filtrar y redirigir directamente a la sección de
            productos.
          </p>
          <div className="flex flex-col w-screen justify-center items-center h-[500px] space-y-2">
            <Carrusel imageArray={Gertech} />
          </div>
          <div className="flex w-full flex-col justify-center items-center mt-4 space-y-2">
            <h4 className="text-2xl font-semibold my-4">
              Tecnologías/Frameworks/Lenguajes Utilizados:
            </h4>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl ">
                Frontend:
              </h6>
              <ul className="flex  flex-row space-x-1 sm:space-x-4 w-[440px] ">
                <li>Javascript</li>
                <li>React</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl">
                Backend:
              </h6>
              <ul className="flex flex-row  space-x-1 sm:space-x-4 w-[440px]">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>JWT</li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center">
              <h6 className="flex justify-center w-[440px] text-3xl ">
                Database:
              </h6>
              <ul className="flex flex-row space-x-1 sm:space-x-4 w-[440px] ">
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
