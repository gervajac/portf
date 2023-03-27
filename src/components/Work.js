import React from "react";
import img1 from "../assets/mymanga.png";
import img2 from "../assets/pasteleryscreen.png";


const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
              This they are my latest proyects in im worked recently. In both i worked on the front and backend. My-manga was worked in a team and the proyect of pastelery is only my.
              </p>
              {/*<button className="btn btn-sm">projets</button>*/}
            </div>
            {/* image */}
            <a href="https://mymangastore.netlify.app/home">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}              
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />              
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a href="https://github.com/PF-FT30B-18/frontend">
                <span className="text-gradient">View repository</span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">My-Manga</span>
              </div>
            </div>
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
          <a href="https://carimipasteleria.netlify.app/">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a href="https://github.com/gervajac/CarimiPastelery">
                <span className="text-gradient">View Repository</span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Carimi's Pastelery'</span>
              </div>
            </div>
            </a> 
          </div>               
        </div>
      </div>
    </section>
  );
};

export default Work;
