import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/claudiah9",
    },
    {
      id: 3,
      child: (
        <>
          Mail <MdEmail size={25} />
        </>
      ),
      href: "mailto:claudiakay247@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      style: "rounded-br-md",
      href: "/claudia.resume(1).pdf",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 sm:w-40 sm:h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 sm:bg-gray-500 bg-transparent" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
