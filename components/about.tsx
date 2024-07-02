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
      <p style={{ fontSize: "20px", textAlign: "justify" }} className="mb-3">
        I am Usama Yamaan, a Software Engineering graduate from FAST University,
        with a solid foundation in web development and software quality
        assurance. Throughout my academic journey, I have gained proficiency in
        various tools and technologies essential for modern software I am
        passionate about creating robust and user-friendly web applications. My
        academic background and hands-on experience have equipped me with skills
        in front-end and back-end development, as well as a strong understanding
        of software testing methodologies.
      </p>
    </motion.section>
  );
}
