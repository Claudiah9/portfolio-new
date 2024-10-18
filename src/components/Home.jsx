import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image2 from "../assets/image-2.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Hi, I'm a Software Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          I have 3 years of hands-on experience, and a passion for crafting dynamic and user-friendly web applications.
                     My expertise lies in utilizing cutting-edge technologies such as React, 
                     Tailwind CSS, Typescript, Next.js, MySQL, Angular and PHP to bring innovative ideas to life. 
                     Explore my portfolio to see my latest projects and learn more about my work!</p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-900 to-green-950 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Image2}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
