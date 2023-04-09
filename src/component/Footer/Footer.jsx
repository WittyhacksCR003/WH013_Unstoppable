import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-min opacity-80 bg-grad-shivam absolute left-0 w-screen shadow-xl pt-3 mt-[70px] pb-1 mb-1"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-grad-2 text-3xl fonat-semibold text-blueGray-700">
              {"Hiring Made Easy"}
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              {"Developed by Team Unstoppable"}
            </h5>
            <div className="mt-3 lg:mb-0 mb-1">
              <button
                className="text-lightest-grey hover:bg-mid shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillTwitterCircle
                  style={{ marginLeft: "5px", marginTop: "4px" }}
                  size={30}
                  color="black"
                />
              </button>
              <button
                className="hover:bg-mid  text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillInstagram
                  style={{ marginLeft: "5px", marginTop: "4px" }}
                  size={30}
                  color="black"
                />
              </button>
              <button
                className="hover:bg-mid  text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillLinkedin
                  style={{ marginLeft: "5px", marginTop: "4px" }}
                  size={30}
                  color="black"
                />
              </button>
              <button
                className="hover:bg-mid  text-green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillGithub
                  style={{ marginLeft: "5px", marginTop: "4px" }}
                  size={30}
                  color="black"
                />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex  items-top mb-[0.3]">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase cursor-pointer text-md font-bold mb-2">
                  {"links"}
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className=" font-semibold block pb-2 text-sm" href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold block pb-2 text-sm" href="">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold block pb-2 text-sm" href="">
                      Github
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold block pb-2 text-sm" href="">
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block cursor-pointer text-md font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="font-semibold block pb-2 text-sm" href="">
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold block pb-2 text-sm" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold block pb-2 text-sm" href="">
                      Privacy Policy
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

          <button className="btn-grad  m-2.5 px-[15px] py-[5px]">
            {"contact_us"}
          </button>
        </div>
      </div>

      <div className="text-grad text-center text-lg font-bold pt-4">
        <p>Unstoppable @2023</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
