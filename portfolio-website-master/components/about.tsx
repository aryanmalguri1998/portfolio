"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Graduated with a degree in{" "}
        <span className="font-medium">
          Software Engineering from Pennsylvania State University
        </span>
        , I love to code and learn new ways of doing things better. Better code
        means less problems down the road for maintainability and bug finding.
        Always willing to share gleamed bits of useful and not so useful items
        of interest.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, TypeScript Next.js, Node.js, MongoDB, MySQL, Prisma, DevOps
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy trekking,
        watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
