import SectionWrapper from "./SectionWrapper";

const journey = [
  {
    year: "Jun 2025 – Jul 2026",
    title: "Operations Manager – Data, Reporting & Process Optimization",
    company: "Herway Coffee",
    description:
      "Managed inventory, billing, vendor coordination, and operational reporting using structured sales and stock data. Prepared recurring reports, analyzed stock movement trends, and improved day-to-day operational visibility through data-backed reporting workflows.",
  },
  {
    year: "2025 – Present",
    title: "Machine Learning & AI Projects",
    company: "Independent Projects",
    description:
      "Built end-to-end AI and ML systems across Retrieval-Augmented Generation (RAG), semantic search, job-matching, churn prediction, and predictive modeling using Python, FastAPI, FAISS, MLflow, Docker, and Scikit-Learn.",
  },
];
function Experience() {
  return (
    <SectionWrapper>
      <section
        id="experience"
        className="bg-[#f1f1f1] py-32 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Metadata tracking tag */}
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            03 // Career Progression
          </p>

          {/* Main heading matches other light sections */}
          <h2 className="text-5xl font-light mb-20 text-zinc-900">
            Professional Journey
          </h2>

          <div className="space-y-12">
            {journey.map((item, index) => (
              <div
                key={index}
                className="border-l-2 border-zinc-300 pl-8 relative group hover:border-zinc-900 transition-colors duration-300"
              >
                {/* Timeline Node Highlight - subtle detail */}
                <div className="absolute w-2.5 h-2.5 bg-zinc-300 rounded-full -left-[6px] top-1.5 group-hover:bg-zinc-900 transition-colors duration-300" />

                {/* Timeline Year */}
                <span className="text-sm font-mono font-medium text-zinc-500">
                  {item.year}
                </span>

                {/* Timeline Step Title */}
                <h3 className="text-2xl font-semibold mt-1 text-zinc-900">
                  {item.title}
                </h3>

                {/* Timeline Body Paragraph */}
                <p className="text-zinc-600 mt-3 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Experience;
