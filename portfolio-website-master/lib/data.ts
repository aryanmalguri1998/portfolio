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
      "Engineered a Django app on Azure Cloud for real-time data analysis, reducing processing time by 40%, while also developing an innovative X-path-based web scraping solution that streamlined data collection by 60%. Leveraged ETL processes and data analytics to create interactive dashboards, boosting operational efficiency by 25% in a dynamic research environment",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Senior Associate at PwC",
    location: "Bengaluru, India",
    description:
      "Engineered a robust Azure solution leveraging Azure Durable Functions, Azure Storage, and Azure Web Apps to achieve a 40% reduction in workflow processing time and 50% faster data retrieval, while ensuring 99.9% uptime. Additionally, developed a CI/CD pipeline with Azure DevOps and integrated Azure SQL using Entity Framework, reducing deployment time by 60%, enhancing query performance by 45%, and boosting overall application efficiency by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Software Developer at MuSigma",
    location: "Bengaluru, India",
    description:
      "Designed and implemented user-friendly, responsive frontend components using React for an internal application, while contributing to RESTful API development, optimizing backend performance by 20%, and streamlining deployment through CI/CD pipeline integration.",
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
