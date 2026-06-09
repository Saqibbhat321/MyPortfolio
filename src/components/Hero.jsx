import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] text-[#1a1a1a] font-sans"
    >
      {/* Subtle Structural Architectural Layout Grid */}
      <div className="absolute inset-0 border-x border-dashed border-zinc-200/80 max-w-7xl mx-auto pointer-events-none" />
      <div className="absolute inset-y-0 left-1/4 border-r border-dashed border-zinc-200/40 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-1/4 border-l border-dashed border-zinc-200/40 pointer-events-none hidden md:block" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-left w-full">
        
        {/* Minimalist Professional Status Indicator */}
        <div className="inline-flex items-center gap-2.5 border-b border-zinc-900 pb-1 mb-12">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-medium">
            Available for engineering roles
          </span>
        </div>

        {/* Premium Corporate Editorial Header */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-zinc-900 mb-8 leading-[1.1]">
          Saqib is a{" "}
          <strong className="font-semibold text-black">Software Engineer</strong>{" "}
          crafting robust full-stack systems & intelligent data architectures.
        </h1>

        {/* Muted Executive Subtext */}
        <p className="max-w-3xl text-base md:text-lg text-zinc-500 font-normal leading-relaxed mb-14 tracking-wide">
          Building scalable backend applications, enterprise-ready software solutions, and machine learning pipelines that solve complex, real-world problems.
        </p>

        {/* Tailored High-Contrast Minimal CTA Interface */}
        <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-4 mb-20">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-medium tracking-wide text-xs uppercase px-8 py-4 transition-all duration-200 rounded-xl"
          >
            View Case Studies
            <FaArrowRight className="text-xs" />
          </a>
            <a
            href="/Saqib_Java_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
            const downloadBridge = document.createElement("a");
            downloadBridge.href = "/Saqib_Java_Developer_Resume.pdf";
            downloadBridge.download = "Saqib_Java_Developer_Resume.pdf";
            document.body.appendChild(downloadBridge);
            downloadBridge.click();
            document.body.removeChild(downloadBridge);
            }}
            className="flex items-center justify-center border border-zinc-300 hover:border-zinc-900 text-zinc-700 hover:text-black font-medium tracking-wide text-xs uppercase px-8 py-4 transition-all duration-200 rounded-xl bg-white"
            >
                Download Resume
            </a>
        </div>

        {/* Metrics Inventory Block
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200">
          <div className="border border-zinc-200 bg-white p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-300">
            <h2 className="text-3xl font-semibold text-zinc-900">2+</h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">Java Platforms</p>
          </div>

          <div className="border border-zinc-200 bg-white p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-300">
            <h2 className="text-3xl font-semibold text-zinc-900">2+</h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">ML Deployments</p>
          </div>

          <div className="border border-zinc-200 bg-white p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-300">
            <h2 className="text-3xl font-semibold text-zinc-900">10+</h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">Core Tools</p>
          </div>

          <div className="border border-zinc-200 bg-white p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-300">
            <h2 className="text-3xl font-semibold text-zinc-900">1000+</h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">Dev Hours</p>
          </div>
        </div> */}

        {/* Refined Architectural Footer with Social Routing */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 mt-12 border-t border-zinc-200">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            © 2026 // Portfolio Core
          </span>

          <div className="flex items-center gap-10">
            <a
              href="https://github.com/Saqibbhat321"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all duration-200 block"
              aria-label="GitHub Profile"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all duration-200 block"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
