import React from "react";
import SectionWrapper from "./SectionWrapper";

function About() {
return ( <SectionWrapper> <section
     id="about"
     className="relative bg-[#fafafa] text-[#1a1a1a] py-32 font-sans border-t border-zinc-200"
   > <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-zinc-200/60 pointer-events-none hidden lg:block" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 font-medium mb-2">
          01 // About
        </p>

        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900">
          Building intelligent systems with an engineering mindset
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Block 1 */}
        <div className="border border-zinc-200 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <span className="text-xs font-mono text-zinc-400 block mb-4 uppercase tracking-wider">
            Foundation
          </span>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-900 tracking-tight">
            Software engineering first
          </h3>

          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            My background started with software engineering and backend
            development, where I worked with Java, object-oriented design,
            REST APIs, databases, and structured application development.
            That foundation shaped how I approach problem solving today:
            I care about maintainability, clean system design, reproducible
            workflows, and building applications that are useful beyond a notebook.
          </p>
        </div>

        {/* Block 2 */}
        <div className="border border-zinc-200 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <span className="text-xs font-mono text-zinc-400 block mb-4 uppercase tracking-wider">
            Current Direction
          </span>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-900 tracking-tight">
            Machine learning, RAG, and deployable AI systems
          </h3>

          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            I’m now focused on Machine Learning Engineering and AI systems —
            building projects in predictive modeling, semantic search,
            Retrieval-Augmented Generation (RAG), and intelligent backend services.
            My recent work combines Python, Scikit-Learn, FastAPI, FAISS,
            MLflow, Docker, and LLM-based pipelines to move from data processing
            and experimentation to deployable ML applications with measurable outputs.
          </p>
        </div>
      </div>

      {/* Bottom summary strip */}
      <div className="mt-12 border border-zinc-200 bg-white p-8 md:p-10 rounded-2xl shadow-sm">
        <p className="text-zinc-600 leading-relaxed text-sm md:text-base max-w-5xl">
          My goal is to work at the intersection of software engineering and machine learning:
          designing systems that not only train models, but also serve predictions, manage data
          pipelines, expose APIs, support experimentation, and solve real business problems in a
          production-oriented way.
        </p>
      </div>
    </div>
  </section>
</SectionWrapper>

);
}

export default About;
