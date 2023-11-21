import React from "react";
import img1 from "./assets/mymanga.png";
import post from "./assets/post.png";
import rank from "./assets/rank.png";
import tinderinlanding from "./assets/tinderinlanding.png";
import worksection from "./assets/worksection.png";
import gertech from "./assets/gertech.png";
import img3 from "./assets/argentinadevs.png";
import hometinderin from "./assets/hometinderin.png";
import carrito from "./assets/carrito.png";
import stripe from "./assets/stripe.png";
import product from "./assets/product.png";

export const Tinderin = [
  {
    image: tinderinlanding,
    title: "Landing",
    text: "Desarrollé una red social con fines de búsqueda de trabajo, tomando funciones y aspectos de Tinder y Linkedin.",
  },
  {
    image: hometinderin,
    title: "Home",
    text: "En la sección Home los empleadores pueden matchear con los empleados para luego utilizar el chat. Cada carta contiene la información respectiva del trabajo en búsqueda activa o del empleador.",
  },
  {
    image: worksection,
    title: "Editar Búsquedas",
    text: "La sección de búsquedas es donde los empleadores pueden modificar, eliminar o desactivar las búsquedas interactivamente, las cartas se modifican en tiempo real.",
  },
];

export const ArgentinaDevs = [
  {
    image: img3,
    title: "Landing",
    text: "Desarrollé y diseñé un foro como herramienta para los programadores argentinos con la posibilidad de compartir ideas, crear asuntos, comentar, interactuar, despejar dudas y compartir empleos.",
  },
  {
    image: post,
    title: "Home",
    text: "Implementé un sistema de puntuación de usuarios para incentivar la actividad de estos mismos, mientras más comenten, creen posts e interactúen, mejor puntuación y visibilidad tendrán.",
  },
  {
    image: rank,
    title: "Editar Búsquedas",
    text: "En cada Post, los usuarios pueden dar like, comentar y agregar imágenes, dando la posibilidad de debatir la idea central del Post.",
  },
];

export const Gertech = [
  {
    image: gertech,
    title: "Landing",
    text: "Desarrollé y diseñé un tradicional E-commerce de productos informáticos con un Home que contiene un carrusel automático y secciones para filtrar y redirigir directamente a la sección de productos.",
  },
  {
    image: product,
    title: "Home",
    text: "Sección de productos en la cual se pueden filtrar, por precio, sección, para agregar al carrito.",
  },
  {
    image: carrito,
    title: "Editar Búsquedas",
    text: "Sección de carrito para agregar, eliminar o aumentar la cantidad de productos y calcular el coste total.",
  },
];
