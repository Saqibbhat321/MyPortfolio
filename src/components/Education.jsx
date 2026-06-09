import SectionWrapper from "./SectionWrapper";

function Education() {
  return (
    <SectionWrapper>
      <section
        id="education"
        className="bg-[#fafafa] py-32 border-t border-zinc-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Tracker Marker */}
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            04 // Education & Credentials
          </p>

          {/* Crisp, Highly Visible Heading */}
          <h2 className="text-5xl font-light mb-16 text-zinc-900">
            Academic Background
          </h2>

          <div className="space-y-8">
            
            {/* 1. PRIMARY DEGREE / GRADUATION CARD */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <span className="text-xs font-mono font-medium text-zinc-500 block mb-1">
                    Graduation // 2022 — 2026
                  </span>
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-sm font-medium text-zinc-500">
                    Computer Science & Engineering Fundamentals
                  </p>
                </div>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mt-4 max-w-4xl">
                Core academic foundation focused on discrete algorithmic structures, standard data structures, object-oriented systems design, software delivery methodologies, and foundational computer networking protocols.
              </p>
            </div>

            {/* 3. XWORKZ ODC PROFESSIONAL INDUSTRIAL TRAINING */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <span className="text-xs font-mono font-medium text-zinc-500 block mb-1">
                    Professional Training // 2024 — 2025
                  </span>
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-1">
                    Full Stack Java Development
                  </h3>
                  <p className="text-sm font-medium text-zinc-500">
                    XWorkz ODC
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm text-zinc-600 leading-relaxed pt-6 border-t border-zinc-100">
                <div>
                  <p className="mb-3">
                    <strong className="text-zinc-800 font-medium">Enterprise Java Architecture:</strong> Completed 400+ hours of dedicated technical implementation covering object-oriented patterns, runtime collections, exception structures, multi-threading, and core J2EE mechanics.
                  </p>
                  <p>
                    <strong className="text-zinc-800 font-medium">Backend Engineering:</strong> Constructed decoupled RESTful endpoints utilizing Spring Boot, configured Object-Relational Mappings via JPA/Hibernate specifications, and integrated resilient service logic layers.
                  </p>
                </div>
                <div>
                  <p className="mb-3">
                    <strong className="text-zinc-800 font-medium">Database Tuning & SQL:</strong> Minimized relational execution latency by refactoring complex join routines, organizing database schemas, and applying indexing strategies on MySQL.
                  </p>
                  <p>
                    <strong className="text-zinc-800 font-medium">Functional Paradigms:</strong> Applied Java 8 functional abstractions seamlessly including declarative Stream processing, Lambda interfaces, Optional containers, and strict collection mappings.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. SPECIFIC IIT MANDI AI/DS MINOR CARD */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <span className="text-xs font-mono font-medium text-zinc-500 block mb-1">
                    Specialization // 2025 — 2026
                  </span>
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-1">
                    Minor in Artificial Intelligence & Data Science
                  </h3>
                  <p className="text-sm font-medium text-zinc-500">
                    Centre for Continuing Education (CCE), IIT Mandi
                  </p>
                </div>
              </div>

              {/* Richly populated technical subcategories */}
              <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm text-zinc-600 leading-relaxed pt-6 border-t border-zinc-100">
                <div>
                  <p className="mb-3">
                    <strong className="text-zinc-800 font-medium">Mathematical Foundations:</strong> Engineered a solid computational grounding utilizing Linear Algebra, Matrix Computations, Applied Calculus, Optimization Techniques, and Probability & Random Processes.
                  </p>
                  <p>
                    <strong className="text-zinc-800 font-medium">Data Engineering Pipelines:</strong> Handled deep data processing, exploratory analysis (EDA), dimensional compression (PCA), clustering models (K-Means, GMMs), and visual pipeline tracking using Pandas and NumPy.
                  </p>
                </div>
                <div>
                  <p className="mb-3">
                    <strong className="text-zinc-800 font-medium">Predictive & Deep Learning:</strong> Developed robust training routines using supervised regression classifiers, neural net frameworks, and tree-based ensembles (Random Forest Regressor) with custom ColumnTransformers.
                  </p>
                  <p>
                    <strong className="text-zinc-800 font-medium">Applied Systems & GenAI:</strong> Practiced modern end-to-end model workflows including evaluation matrices (R² scoring), deployment integrations via interactive Streamlit interfaces, FastAPI endpoints, and containerized Docker layers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Education;
