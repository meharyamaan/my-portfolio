import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Lahore, Pakistan",
    description:
      "I have worked with Atla GLobal Ltd for my Final Year Project. We Transforming Apparel PLM with web and image Processing for efficient manufacturing. Real-time tracking, image based measurements, and seamless collaboratio",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "MERN Stack Developer",
    location: "Remote, Faisalabad",
    description:
      "This remote internship at Codexcue provides me with valuable hands-on experience in the MERN stack Developer. ",
    icon: React.createElement(CgWorkAlt),
    date: "05-2024 - 07-2024",
  },
  {
    title: "Freelancing Experience",
    location: "Remote, Pakistan",
    description:
      "I have been freelancing since 2022, successfully completing several projects that include web development. My "+
       "freelance work has enhanced my skills in creating robust, user-friendly applications for a diverse range of clients",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Apparel PLM (Industrial FYP)",
    description:
      "I worked as a full-stack developer on this Industrial project for 1 years. We helped transform apparel PLM with web and image processing for efficient manufacturing.",
    tags: ["React.js", "Next.js", "MongoDB", "NodeJs", "Docker", "NginX",],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-Voting Application",
    description:
      "We developed an android application for efficient voting mechanism. A user-friendly platform where admins can manage candidates while voters can easily cast their votes.",
    tags: ["Java", "Android", "XML", "Firebase", "SQLite"],
    imageUrl: rmtdevImg,
  },
  {
    title: "DAIRA Inventory System",
    description:
      "Designed and built a user-friendly inventory management web application for a"+
      "seamless user experience. Leveraged Oracle Database to ensure secure and scalable storage of inventory data.",
    tags: [".NET Framework", "C#", "SQL", "Oracle Database"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "ReactJS",
  "NextJs",
  "NodeJs",
  "JavaScript",
  "MongoDB",
  "ExpressJs",
  "Tailwind",
  "Bootstrap",
  "Android",
  "Python",
  "Git",
  "Docker",
  "Nginx",
  "Redis",
  "White Box Testing",
  "Black Box Testing",
  "Agile Methodology",
  "SDLC",
] as const;
