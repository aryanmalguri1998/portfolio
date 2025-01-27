import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import student_connect from "@/public/student_connect.png";
import linkedin_post from "@/public/linkedin_post.png";
import mira_chatbot from "@/public/mira_chatbot.png";

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
    title: "Graduate Research Assistant at Pennsylvania State University",
    location: "Malvern, Pennsylvania",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Senior Associate at PwC",
    location: "Bengaluru, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Software Developer at MuSigma",
    location: "Bengaluru, India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(FaReact),
    date: "2021 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "StudentConnect",
    description:
      "Student Connect is an application that enables students to connect with professors via video calls featuring a collaborative whiteboard for sharing ideas or by booking in-person meetings in the college library. ",
    tags: ["React", "TypeScript", "MongoDB", "Chakra UI", "Prisma"],
    imageUrl: student_connect,
  },
  {
    title: "LinkedIn Post Generator Tool",
    description:
      "Developed an end-to-end GenAI tool using Llama 3.2, LangChain, Streamlit, and Groq to analyze LinkedIn influencers posts and generate new content matching their writing style.",
    tags: ["Llama 3.2", "LangChain", "Streamlit", "Groq"],
    imageUrl: linkedin_post,
  },
  {
    title: "Mira Chatbot",
    description:
      "Developed an end-to-end food delivery chatbot using Dialogflow, Python, and FastAPI, handling intents, entities, and contexts. Implemented backend with FastAPI and integrated MySQL for managing user data and orders.",
    tags: ["Dialogflow", "Python", "FastAPI", "MySQL"],
    imageUrl: mira_chatbot,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "FASTAPI",
  "Streamlit",
  "LangChain",
  "GenAI",
  "Machine Learning",
] as const;
