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
        As a <span className="font-medium"><strong>Cybersecurity enthusiast and researcher</strong></span>, I specialize in security research focusing on the <strong>first line of defense and security engineering</strong>. With a solid foundation in Computer Science and expertise in security theories such as <strong>Mitre Attack matrix</strong>, <strong>Security Architecture</strong>, and <strong>Security forensics</strong>, I am dedicated to developing and implementing robust security solutions. My experience spans across various technologies specifically <strong>Honeypots</strong>, <strong>Pandas</strong>, <strong>Docker</strong>, and <strong>Azure Cloud</strong>. Currently pursuing my Master's in Computer Science, I'm committed to staying at the forefront of cybersecurity advancements to provide innovative solutions through research.
      </p>

      <p>
        Outside of my academic endeavors, I am also passionate about continuous learning and am currently honing my skills in areas such as <strong>Security by design</strong>, <strong>IoT security</strong>, and <strong>Datacenter design</strong>. Additionally, I'm proficient in developer tools such as <strong>Oracle Cloud Platform</strong>, <strong>Google Cloud Platform</strong>, <strong>AWS</strong>, and working in <strong>Agile environments</strong>.
      </p>
    </motion.section>
  );
}
