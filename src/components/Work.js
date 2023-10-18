import React from "react";
import img1 from "../assets/mymanga.png";
import post from "../assets/post.png";
import rank from "../assets/rank.png";
import tinderinlanding from "../assets/tinderinlanding.png";
import worksection from "../assets/worksection.png";
import gertech from "../assets/gertech.png";
import img3 from "../assets/argentinadevs.png";
import hometinderin from "../assets/hometinderin.png";
import carrito from "../assets/carrito.png";
import stripe from "../assets/stripe.png";
import product from "../assets/product.png";

const Work = () => {
  return (
    <section className="section h-auto" id="work">
      <div className="flex flex-col w-full space-y-6">
        <h6 className="flex justify-center text-6xl underline">
          Proyectos Destacados
        </h6>
        <div className="flex flex-col">
          <div className="flex flex-col w-full space-y-2 my-2">
            <div className="flex justify-center space-x-2 items-center text-accent text-3xl font-semibold">
              <h3 className="text-4xl font-bold">Tinderin - Red Social - </h3>
              <a
                className="text-white underline"
                href="https://gervasio-dev--tndrn.netlify.app/landing"
              >
                visitar
              </a>
            </div>
            <div className="flex justify-center sm:flex-row flex-col">
              <p className="flex justify-center max-w-sm mb-16 items-center">
                Desarrollé una red social con fines de búsqueda de trabajo,
                tomando funciones y aspectos de Tinder y Linkedin.
              </p>
              <div class="relative w-[500px]">
                <div class="overflow-hidden relative w-full h-auto">
                  <img
                    src={tinderinlanding}
                    class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                    alt="Imagen"
                  />
                </div>
                <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                  <h2 class="text-xl font-bold text-accent">Landing Page</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:flex-row flex-col">
              <p className="flex justify-center max-w-sm mb-16 items-center">
                En la sección Home los empleadores pueden matchear con los
                empleados para luego utilizar el chat. Cada carta contiene la
                información respectiva del trabajo en búsqueda activa o del
                empleador.
              </p>
              <div class="relative w-[500px]">
                <div class="overflow-hidden relative w-full h-auto">
                  <img
                    src={hometinderin}
                    class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                    alt="Imagen"
                  />
                </div>
                <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                  <h2 class="text-xl font-bold text-accent">Home Page</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:flex-row flex-col">
              <p className="flex justify-center max-w-sm mb-16 items-center">
                La sección de búsquedas es donde los empleadores pueden
                modificar, eliminar o desactivar las búsquedas interactivamente,
                las cartas se modifican en tiempo real.
              </p>
              <div class="relative w-[500px]">
                <div class="overflow-hidden relative w-full h-auto">
                  <img
                    src={worksection}
                    class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                    alt="Imagen"
                  />
                </div>
                <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                  <h2 class="text-xl font-bold text-accent">Searchs Page</h2>
                </div>
              </div>
            </div>
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
        <div className="flex flex-col w-full space-y-2 ">
          <div className="flex flex-col mt-4">
            <div className="flex justify-center mb-8 space-x-2 items-center text-accent text-3xl font-semibold">
              <h3 className="font-bold text-4xl">
                ArgentinaDevs - Foro Programación Argentino -
              </h3>
              <a
                className="text-white underline"
                href="https://nextfor.vercel.app/"
              >
                visitar
              </a>
            </div>
            <div className="flex justify-center sm:flex-row flex-col">
              <p className="flex justify-center max-w-sm mb-16 items-center">
                Desarrollé y diseñé un foro como herramienta para los
                programadores argentinos con la posibilidad de compartir ideas,
                crear asuntos, comentar, interactuar, despejar dudas y compartir
                empleos.
              </p>
              <div class="relative w-[500px]">
                <div class="overflow-hidden relative w-full h-auto">
                  <img
                    src={img3}
                    class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                    alt="Imagen"
                  />
                </div>
                <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                  <h2 class="text-xl font-bold text-accent">Home Page</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:flex-row flex-col">
            <p className="flex justify-center max-w-sm mb-16 items-center">
              Implementé un sistema de puntuación de usuarios para incentivar la
              actividad de estos mismos, mientras más comenten, creen posts e
              interactúen, mejor puntuación y visibilidad tendrán.
            </p>
            <div class="relative w-[500px]">
              <div class="overflow-hidden relative w-full h-auto">
                <img
                  src={rank}
                  class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                  alt="Imagen"
                />
              </div>
              <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                <h2 class="text-xl font-bold text-accent">Ranking Page</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:flex-row flex-col">
            <p className="flex justify-center max-w-sm mb-16 items-center">
              En cada Post, los usuarios pueden dar like, comentar y agregar
              imágenes, dando la posibilidad de debatir la idea central del
              Post.
            </p>
            <div class="relative w-[500px]">
              <div class="overflow-hidden relative w-full h-auto">
                <img
                  src={post}
                  class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                  alt="Imagen"
                />
              </div>
              <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                <h2 class="text-xl font-bold text-accent">Post Page</h2>
              </div>
            </div>
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
        <div className="flex flex-col w-full space-y-2">
          <div className="flex justify-center mb-8 space-x-2 items-center text-accent text-3xl font-semibold">
            <h3 className="font-bold text-4xl">
              Gertech - E-commerce Teconología -
            </h3>
            <a
              className="text-white underline"
              href="https://gertech.netlify.app/"
            >
              visitar
            </a>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center sm:flex-row flex-col">
              <p className="flex justify-center max-w-sm mb-16 items-center">
                Desarrollé y diseñé un tradicional E-commerce de productos
                informáticos con un Home que contiene un carrusel automático y
                secciones para filtrar y redirigir directamente a la sección de
                productos.
              </p>
              <div class="relative w-[500px]">
                <div class="overflow-hidden relative w-full h-auto">
                  <img
                    src={gertech}
                    class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                    alt="Imagen"
                  />
                </div>
                <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                  <h2 class="text-xl font-bold text-accent">Home Page</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:flex-row flex-col">
            <p className="flex justify-center max-w-sm mb-16 items-center">
              Sección de productos en la cual se pueden filtrar, por precio,
              sección, para agregar al carrito.
            </p>
            <div class="relative w-[500px]">
              <div class="overflow-hidden relative w-full h-auto">
                <img
                  src={product}
                  class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                  alt="Imagen"
                />
              </div>
              <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                <h2 class="text-xl font-bold text-accent">Products Page</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:flex-row flex-col">
            <p className="flex justify-center max-w-sm mb-16 items-center">
              Sección de carrito para agregar, eliminar o aumentar la cantidad
              de productos y calcular el coste total.
            </p>
            <div class="relative w-[500px]">
              <div class="overflow-hidden relative w-full h-auto">
                <img
                  src={carrito}
                  class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                  alt="Imagen"
                />
              </div>
              <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                <h2 class="text-xl font-bold text-accent">Cart Page</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:flex-row flex-col">
            <p className="flex justify-center max-w-sm mb-16 items-center">
              Sistema de pagos para abonar con tarjeta implementado con Stripe.
            </p>
            <div class="relative w-[500px]">
              <div class="overflow-hidden relative w-full h-auto">
                <img
                  src={stripe}
                  class="sm:w-full w-screen h-auto rounded transition-transform duration-300 transform scale-200 hover:scale-125"
                  alt="Imagen"
                />
              </div>
              <div class="absolute bottom-0 left-0 p-4 bg-opacity-75">
                <h2 class="text-xl font-bold text-accent">Payment Page</h2>
              </div>
            </div>
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
