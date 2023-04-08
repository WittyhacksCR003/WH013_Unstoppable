import React from "react";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.1,
        }}
        className="relative isolate px-6 pt-14 lg:px-8 mx-auto max-w-2xl py-10 sm:py-20 lg:py-30"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-grad-2 sm:text-6xl">
            Select Topic And Upload Your Video
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Type who you want to search
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md  bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Upload your Video
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Here <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
