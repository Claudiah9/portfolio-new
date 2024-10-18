import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hi, I’m Claudia Kyase, a Software developer with a passion for security,
         design, and technology. With expertise in front-end development, 
        i specialize in creating dynamic, user-friendly web applications 
         using HTML, CSS, JavaScript, and frameworks like React, transforming ideas into responsive,
          interactive digital experiences. With a keen eye for detail, 
          I excel in solving complex problems, from designing sleek user 
          interfaces to optimizing performance for seamless user experiences.
        </p>
        
        <br />

        <p className="text-xl">
        My approach ensures that everything aligns with the brand’s 
        vision while delivering efficient and accessible solutions.
         Driven by a love for continuous learning, I stay curious about
        the latest trends in tech and cybersecurity, always excited to
         tackle new challenges and refine my skills. Let’s collaborate 
         and build something that’s not only beautiful but also secure and cutting-edge!
        </p>
      </div>
    </div>
  );
};

export default About;
