"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Dashboard MVP",
    description: "Build an AI Dashboard Using nextJS.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/barry-ai",
    previewUrl: "https://barry-ai-three.vercel.app/",
  },
  {
    id: 2,
    title: "Hand Written Edge Web app",
    description: "Build a web app using nextJS.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/HandWritten_Edge",
    previewUrl: "https://handyedge.vercel.app/",
  },
  {
    id: 3,
    title: "NextJS Ecommerce Website",
    description: "Build an ecommerce website Using nextJS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/Ayurvedic-Herbal-Products",
    previewUrl: "https://www.ayurvedicherbalproducts.com/",
  },
  {
    id: 4,
    title: "GYM Portfolio Website",
    description: "Build a Gym website Using Mern Stack.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/gym-application",
    previewUrl: "https://adnangymapp.netlify.app/",
  },
  {
    id: 5,
    title: "Hospital Management App",
    description: "Build a Hospital Management App Using Mern Stack.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/Hospital-App",
    previewUrl: "https://adnan-hospital-app.vercel.app/",
  },
  {
    id: 6,
    title: "Voice AI Application",
    description: "Convert voice into structured data effortlessly!",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/adnanfrd/voice-ai-app",
    previewUrl: "https://voice-ai-app-rust.vercel.app/",
  },
  {
    id: 7,
    title: "Event Management System",
    description: "Event Booking and Management Platform",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/Event_Project",
    previewUrl: "https://eventbookingandmanage.vercel.app/",
  },
  {
    id: 8,
    title: "Tentloom Transaction System",
    description: "Transaction platform for tenants & property owners",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanfrd/Transaction-system",
    previewUrl: "https://tentloom.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
