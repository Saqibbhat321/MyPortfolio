import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "Java"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Feature Engineering",
      "Model Evaluation",
      "ROC-AUC",
      "Cross-Validation",
    ],
  },
  {
    title: "NLP / GenAI / RAG",
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Sentence Transformers",
      "Semantic Search",
      "Dense Embeddings",
      "FAISS",
      "Information Retrieval",
    ],
  },
  {
    title: "Backend / MLOps / Tools",
    skills: [
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "MLflow",
      "Docker",
      "Streamlit",
      "Git",
      "pytest",
    ],
  },
];

function Skills() {
  return (
    <SectionWrapper>
      <section
        id="skills"
        className="bg-[#f4f4f4] py-32 border-t border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Tracker Marker updated for order */}
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            03 // Technical Expertise
          </p>

          {/* Crisp, Highly Visible Heading */}
          <h2 className="text-5xl font-light mb-16 text-zinc-900">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 p-8 rounded-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <h3 className="text-xl font-semibold mb-6 text-zinc-800 tracking-tight">
                    {group.title}
                  </h3>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="
                          border 
                          border-zinc-200 
                          bg-zinc-50/50 
                          text-zinc-700 
                          text-xs 
                          font-medium 
                          px-3.5 
                          py-2 
                          rounded-xl
                          hover:border-zinc-400
                          hover:bg-zinc-100
                          transition-colors
                          duration-200
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;
