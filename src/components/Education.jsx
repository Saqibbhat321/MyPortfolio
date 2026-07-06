import SectionWrapper from "./SectionWrapper";

function Education() {
return ( <SectionWrapper> <section
     id="education"
     className="bg-[#fafafa] py-32 border-t border-zinc-200"
   > <div className="max-w-6xl mx-auto px-6">
{/* Section Label */} <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
05 // Education & Training </p>

      {/* Heading */}
      <h2 className="text-5xl font-light mb-16 text-zinc-900">
        Academic Background
      </h2>

      <div className="space-y-8">
        {/* Degree */}
        <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <span className="text-xs font-mono font-medium text-zinc-500 block mb-1">
                2020 — 2024
              </span>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-1">
                Bachelor of Engineering in Computer Science
              </h3>
              <p className="text-sm font-medium text-zinc-500">
                Cambridge Institute of Technology, Bangalore
              </p>
            </div>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-4 max-w-4xl">
            Built core foundations in programming, data structures, object-oriented design,
            databases, and software engineering principles.
          </p>
        </div>

        

        {/* Java Training */}
        <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <span className="text-xs font-mono font-medium text-zinc-500 block mb-1">
                2024 — 2025
              </span>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-1">
                Full Stack Java Development
              </h3>
              <p className="text-sm font-medium text-zinc-500">
                XWorkz ODC
              </p>
            </div>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-4 max-w-4xl">
            Trained in Core Java, Spring Boot, REST APIs, Hibernate/JPA, MySQL,
            and backend application development fundamentals.
          </p>
        </div>
        {/* AI / DS Minor */}
        <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <span className="text-xs font-mono font-medium text-zinc-500 block mb-1">
                2025 — 2026
              </span>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-1">
                Minor in Artificial Intelligence & Data Science
              </h3>
              <p className="text-sm font-medium text-zinc-500">
                IIT Mandi × Masai School
              </p>
            </div>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-4 max-w-4xl">
            Studied Machine Learning, NLP, Deep Learning, Probability & Statistics,
            Linear Algebra, and practical AI/ML workflows.
          </p>
        </div>
      </div>
    </div>
  </section>
</SectionWrapper>

);
}

export default Education;
