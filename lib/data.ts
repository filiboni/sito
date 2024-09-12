import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { LuBadgeCheck } from "react-icons/lu";
import tesiPic from "@/public/tesi.png";
import FarmPic from "@/public/multithread1.png";
import WordlePic from "@/public/Wordle-logo-01.png";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Masters Degree in Computer Science",
    location: "University of Pisa, Italy",
    date: "Sept 2023 - Sept 2025",
    icon: React.createElement(LuGraduationCap),
    description:
      "Completed my Masters in Computer Science with a focus on Vulnerability Assessment and Management of Risks.",
    skills: [
      "Gestione del rischio",
      "Valutazione dei rischi",
    ],
  },
  {
    title: "Connected Leadership",
    location: "Yale University",
    date: "Dec 2023",
    icon: React.createElement(LuBadgeCheck),
    credentialID: "dcdec357800ee108a76f72e44014ce6c",
    description:"",
    skills: [
      "Leadership",
      "Team leadership",
    ],
  },
  {
    title: "ISC2 Certified Training in CyberSecurity",
    location: "",
    date: "Dec 2023",
    description:"",
    icon: React.createElement(LuBadgeCheck),
    credentialID: "dcdec357800ee108a76f72e44014ce6c",
    skills: [
      "Vulnerability Assessment",
      "Gestione del rischio",
    ],
  },
  {
    title: "Cybersecurity and the Internet of Things",
    location: "Kennesaw State University",
    date: "Nov 2023",
    icon: React.createElement(LuBadgeCheck),
    description:"",
    credentialID: "5a18bd259d79da5888b9f27b406e35a4",
    skills: [
      "Vulnerability Assessment",
      "Valutazione dei rischi",
    ],
  },
  {
    title: "Google: Fundation of Cybersecurity",
    location: "",
    date: "Oct 2023",
    description:"",
    icon: React.createElement(LuBadgeCheck),
    credentialID: "d7951965c4aa32d5e256cf06969a7f0c",
    skills: [
      "Sicurezza informatica",
    ],
  },
  {
    title: "Google: Manage Security Risks",
    location: "",
    date: "Sept 2023",
    description:"",
    icon: React.createElement(LuBadgeCheck),
    credentialID: "250136cdce17ff4912ac81abf189bc4d",
    skills: [
      "Valutazione dei rischi",
      "Gestione del rischio",
      "Sicurezza informatica",
    ],
  },
  {
    title: "Bachelor's degree in Computer Science",
    location: "Università of Pisa, Italy",
    date: "Gen 2020 - Sept 2023",
    icon: React.createElement(LuGraduationCap),
    description:
      "Completed my Bachelor's degree in Computer Science with excellent grades.",
    skills: [
      "Server Linux",
      "Java",
      "Sicurezza informatica",
      "C",
      "Logical Data Modeling",
      "Algoritmi",
      "Linear Algebra",
      "Data base relazionali",
      "JavaScript",
      "C (Programming Language)",
      "Typescript",
      "Networking",
      "Data Structures",
      "Mathematical Analysis",
      "SQL",
    ],
  },
  {
    title: "Co-Founder",
    location: "Summerly.it, Tuscany, Italy",
    description:
      "Co-founded and operated Summerly.it, a platform for online booking for bathing facilities.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2020 - Lug 2020",
  },
  {
    title: "Modern operating systems",
    location: "Università degli Studi di Napoli Federico II",
    date: "May 2020",
    icon: React.createElement(LuBadgeCheck),
    description:"",
    Credential: "697052dab18d48fb86fae983502f203c",
    skills: [
      "OS",
    ],
  },
  {
    title: "Frontend Developer",
    location: "marinashop.it, Tuscany, Italy",
    description:
      "Developed frontend components for marinashop.it during a stage.",
    icon: React.createElement(FaReact),
    date: "Gen 2018 - Gen 2019",
  },
] as const;



export const certificationsData = [
 
] as const;

export const projectsData = [
  {
    title: "Decoding the Cyber Threat Landscape: A Honeypot Data Analysis Across Cloud Providers",
    description:
      "Bachelor’s Thesis analyzing cyber threats across cloud providers using Dionaea, Python, Pandas, Grafana, MongoDB, Prometheus, and Prophet.",
    tags: ["Dionaea", "Python", "Pandas", "Grafana", "MongoDB", "Prometheus", "Prophet"],
    link: "Download Link",
    imageUrl: tesiPic
  },
  {
    title: "Farm in C",
    description:
      "A distributed multi-threading program written in C, implementing a product farm with concurrency management through a custom-made concurrent queue.University Project for the Laboratory II course",
    tags: ["C", "Bash"],
    imageUrl: FarmPic,
    link: " ",
  },
  {
    title: "The Wordle Game",
    description:
      "Implementation of the Wordle game using Java with multi-threading, thread pools, sockets, and multicast for the Laboratory III networking course.",
    tags: ["Java", "Java.NET", "Java NIO"],
    imageUrl: WordlePic,
    link: "Passed with maximum grade",
  },
  /*{
    title: "Summerly",
    description:
      "A platform for online booking for bathing facilities, developed for the municipality.",
    tags: ["JavaScript", "Wordpess", "HTML"],
    link: null,
  },*/
] as const;

export const skillsData = [
  "Node.js",
  "Docker",
  "K8s",
  "Debian based OS",
  "Windows Server 2019",
  "Pandas",
  "Burp Suite",
  "Virtual Machines",
  "Containers",
  "AWS",
  "Azure Cloud",
  "Oracle Cloud",
  "Firewalls",
  "MITRE ATT&CK Matrix",
  "NIST CVSS",
  "IDS",
  "Honeypots",
  "Time Series",
  "Anomaly Detection",
  "Oracle Cloud Platform",
  "Google Cloud Platform",
  "AWS",
  "VSCode",
  "Scrum",
  "Agile",
  "Cybersecurity",
  "Network Security",
  "Security Engineering",
  "Security Design",
  "Attackers Classification",
  "Threat Assessment",
  "Zero Trust",
  "VPN",
  "Network Protocols",
  "Data structures",
  "Design Patterns",
  "Multithreading",
  "Sorting & Searching Algorithms",
  "Computational costs",
  "Statistical Analysis",
  "ARM microarchitecture",
  "Operating Systems",
] as const;
