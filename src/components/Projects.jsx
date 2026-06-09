import React from "react";
import { motion } from "framer-motion";

const javaProjects = [
  {
    title: "Healthcare Appointment Platform",
    description:
      "Full-stack healthcare management platform enabling appointment scheduling, patient management, doctor availability tracking, and streamlined healthcare operations.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "HTML", "CSS"],
    github: "https://github.com/Saqibbhat321/Healthcare-Appointment-Platform",
    demo: "#",
  },
  {
    title: "Banking Management System",
    description:
      "Secure banking application supporting account creation, deposits, withdrawals, transaction tracking, and customer account management.",
    tech: ["Java", "OOP", "Collections", "File Handling"],
    github: "https://github.com/Saqibbhat321/Banking-Management-System",
    demo: "#",
  },
];

const mlProjects = [
  {
    title: "Customer Churn Prediction",
    description:
      "End-to-end predictive analytics platform designed to track and mitigate user attrition using feature engineering, classification models, evaluation pipelines, and containerized deployment workflows.",
    tech: ["Python", "Jupyter", "Docker", "Machine Learning"],
    github: "https://github.com/Saqibbhat321/CustomerChurn",
    demo: "#",
  },
  {
    title: "House Price Prediction",
    description:
      "Machine learning application that predicts property values using preprocessing pipelines, categorical encoding techniques, and ensemble regression models integrated into an interactive dashboard.",
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    github: "https://github.com/Saqibbhat321/Project_HousePricePrediction",
    demo: "#",
  },
];

function ProjectCard({ project, index, scope }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
        p-8
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]
      "
    >
      {/* Subtle Glow Overlay adapted for a clean white background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10">
        {/* System Label - Subtle tracking info */}
        <span className="text-[10px] font-mono text-zinc-400 block mb-4 uppercase tracking-[0.25em]">
          {scope} // System_0{index + 1}
        </span>

        {/* Title */}
        <h4 className="text-2xl font-semibold mb-4 text-zinc-900 tracking-tight">
          {project.title}
        </h4>

        {/* Description */}
        <p className="text-zinc-600 mb-8 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Tag Group */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="
                border
                border-zinc-200
                bg-zinc-100/80
                text-zinc-700
                text-[10px]
                font-mono
                px-3
                py-1.5
                rounded-md
                uppercase
                tracking-wider
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons Container */}
        <div className="flex gap-3 pt-4 border-t border-zinc-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-zinc-900
              text-white
              font-medium
              text-[11px]
              tracking-wider
              uppercase
              px-5
              py-3
              rounded-xl
              hover:bg-zinc-800
              transition
            "
          >
            Source Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              border-zinc-200
              text-zinc-600
              hover:text-zinc-900
              hover:border-zinc-400
              font-medium
              text-[11px]
              tracking-wider
              uppercase
              px-5
              py-3
              rounded-xl
              transition
            "
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#f6f6f6] py-32 border-t border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-500 mb-3">
            02 // Featured Work
          </p>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-zinc-900">
            Engineering Case Studies
          </h2>
        </div>

        {/* Two Column Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Java Projects Column */}
          <div>
            <h3 className="text-2xl font-semibold text-zinc-800 border-b border-zinc-200 pb-4 mb-8">
              Java Development
            </h3>

            <div className="space-y-8">
              {javaProjects.map((project, index) => (
                <ProjectCard
                  key={`java-${index}`}
                  project={project}
                  index={index}
                  scope="PRJ_SYS"
                />
              ))}
            </div>
          </div>

          {/* ML Projects Column */}
          <div>
            <h3 className="text-2xl font-semibold text-zinc-800 border-b border-zinc-200 pb-4 mb-8">
              Machine Learning
            </h3>

            <div className="space-y-8">
              {mlProjects.map((project, index) => (
                <ProjectCard
                  key={`ml-${index}`}
                  project={project}
                  index={index}
                  scope="ML_ARCH"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
