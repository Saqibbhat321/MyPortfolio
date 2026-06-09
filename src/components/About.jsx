import React from "react";
import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="relative bg-[#f7f7f7] text-[#1a1a1a] py-32 font-sans border-t border-gray-200"
      >
        {/* Architectural Center Line */}
        <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-gray-200/60 pointer-events-none hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-xs font-mono tracking-widest uppercase text-gray-400 font-medium mb-2">
              01 // Core Specialization
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
              Professional Blueprint
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Software Engineering */}
            <div className="border border-gray-200 bg-white p-8 md:p-12 shadow-sm hover:shadow-lg transition duration-300">
              <span className="text-xs font-mono text-gray-400 block mb-4 uppercase tracking-wider">
                System Infrastructure
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 tracking-tight">
                Software Engineering Foundation
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base font-normal tracking-wide">
                Rooted in enterprise-grade Java development with experience
                in Spring Boot, MySQL, RESTful APIs, object-oriented design,
                and scalable backend architectures. This foundation enables
                the creation of maintainable systems built with performance,
                reliability, and clean software engineering principles.
              </p>
            </div>

            {/* Machine Learning */}
            <div className="border border-gray-200 bg-white p-8 md:p-12 shadow-sm hover:shadow-lg transition duration-300">
              <span className="text-xs font-mono text-gray-400 block mb-4 uppercase tracking-wider">
                Intelligent Architectures
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 tracking-tight">
                Machine Learning Systems
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base font-normal tracking-wide">
                Currently focused on Machine Learning Engineering,
                predictive analytics, NLP applications, FastAPI services,
                Docker containerization, and production-oriented AI systems.
                The goal is to bridge robust software engineering practices
                with modern data-driven intelligence.
              </p>
            </div>

          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;
