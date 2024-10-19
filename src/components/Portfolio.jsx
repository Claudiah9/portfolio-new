import React from "react";
import moviesAPI from "../assets/portfolio/movie.Img.png";
import reactPlanner from "../assets/portfolio/appointment.Img.jpeg";
import natureWeb from "../assets/portfolio/nature.Img.jpeg";
import calculator from "../assets/portfolio/calculator.Img.png";
import reactWeather from "../assets/portfolio/reactWeather.img.jpeg";
import watchDark from "../assets/portfolio/watch.Img.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: moviesAPI,
    },
    {
      id: 2,
      src: reactPlanner,
    },
    {
      id: 3,
      src: natureWeb,
    },
    {
      id: 4,
      src: calculator,
    },
    {
      id: 5,
      src: reactWeather,
    },
    {
      id: 6,
      src: watchDark,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold mt-6 inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Explore some of my work below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 md:mb-9 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
