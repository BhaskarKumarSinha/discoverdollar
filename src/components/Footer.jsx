// Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black p-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center hover:text-blue-500 transition duration-300 hover:cursor-pointer">
            Bhaskar Ecommerce
          </h3>
          <p className="text-lg text-center md:text-left">
            Get Best Product Here
          </p>
        </div>
        <div className="mb-4  sm:mr-28">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-2xl font-bold mb-2">Quick Links</h3>
            <ul className="text-lg">
              <li className="text-gray-800 hover:text-blue-500 hover:border-b-2 transition duration-300">
                <a href="#about">About Us</a>
              </li>
              <li className="text-gray-800 hover:text-blue-500 hover:border-b-2 transition duration-300">
                <a href="#services">Services</a>
              </li>
              <li className="text-gray-800 hover:text-blue-500 hover:border-b-2 transition duration-300">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center md:text-right">
            <h3 className="text-lg md:text-2xl font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#facebook"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="#twitter"
                className="text-gray-500 hover:text-gray-800 transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="#linkedin"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="#instagram"
                className="text-gray-500 hover:text-red-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-center md:text-base">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
