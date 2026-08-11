import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Hero() {
return ( <section
   id="home"
   className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] text-[#1a1a1a] font-sans"
 >
{/* Structural Grid */} <div className="absolute inset-0 border-x border-dashed border-zinc-200/80 max-w-7xl mx-auto pointer-events-none" /> <div className="absolute inset-y-0 left-1/4 border-r border-dashed border-zinc-200/40 pointer-events-none hidden md:block" /> <div className="absolute inset-y-0 right-1/4 border-l border-dashed border-zinc-200/40 pointer-events-none hidden md:block" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-left w-full">
    {/* Status */}
    <div className="inline-flex items-center gap-2.5 border-b border-zinc-900 pb-1 mb-12">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
      <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-medium">
        Available for Machine Learning / AI Engineering roles
      </span>
    </div>

    {/* Heading */}
<h1 className="max-w-5xl text-2xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 mb-8 leading-[1.15] text-left">
  Saqib builds{" "}
  <strong className="font-semibold text-black">
    machine learning systems
  </strong>{" "}
  and production-grade backend applications that move from experimentation to deployment.
</h1>

{/* Description */}
<p className="max-w-5xl text-base md:text-xl text-zinc-500 font-normal leading-relaxed mb-14 tracking-wide text-left">
  Aspiring Machine Learning Engineer with hands-on experience building end-to-end
  AI and ML applications using Python, FastAPI, Scikit-Learn, FAISS, MLflow,
  Docker, and LLM-based workflows across RAG, semantic search, recommendation,
  and predictive modeling.
</p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-4 mb-20">
      <a
        href="#projects"
        className="flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-medium tracking-wide text-xs uppercase px-8 py-4 transition-all duration-200 rounded-xl"
      >
        View Projects
        <FaArrowRight className="text-xs" />
      </a>

      <a
  href="/Saqib_Bhat_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    // Prevent the default link behavior (opening the tab) from blocking the download
    const link = document.createElement('a');
    link.href = '/Saqib_Bhat_Resume.pdf';
    link.download = 'Saqib_Bhat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="flex items-center justify-center border border-zinc-300 hover:border-zinc-900 text-zinc-700 hover:text-black font-medium tracking-wide text-xs uppercase px-8 py-4 transition-all duration-200 rounded-xl bg-white"
>
  Download Resume
</a>

    </div>

    {/* Metrics */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200">
      <div className="border border-zinc-200 bg-white p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold text-zinc-900">4+</h2>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">
          ML / AI Projects
        </p>
      </div>

      <div className="border border-zinc-200 bg-white p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold text-zinc-900">2+</h2>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">
          Backend / Java Projects
        </p>
      </div>

      <div className="border border-zinc-200 bg-white p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold text-zinc-900">10+</h2>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">
          ML & Engineering Tools
        </p>
      </div>

      <div className="border border-zinc-200 bg-white p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold text-zinc-900">1000+</h2>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-2">
          Learning / Build Hours
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 mt-12 border-t border-zinc-200">
      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
        © 2026 // Saqib Bhat
      </span>

      <div className="flex items-center gap-10">
        <a
          href="https://github.com/saqib-bhat"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/saqib-bhat-ai/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all duration-200"
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
