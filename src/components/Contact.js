import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form
            action="https://formsubmit.co/gerva.jacob.tropini@gmail.com"
            method="POST"
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              className="bg-transparent border-b py-3 outline w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your e-mail"
              name="email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
