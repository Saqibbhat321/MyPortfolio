import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    title: "Core Languages & Databases",
    skills: ["Java 8+", "SQL", "JavaScript", "HTML5", "CSS3", "MySQL"],
  },
  {
    title: "Frameworks & Backend Engineering",
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate ORM", "JDBC", "Servlets"],
  },
  {
    title: "Web & API Development",
    skills: ["RESTful APIs", "JSON", "AJAX", "Fetch API", "Bootstrap 5", "Responsive Design", "Postman"],
  },
  {
    title: "Security Engineering",
    skills: ["Spring Security", "BCrypt Encryption", "Authentication", "Authorization"],
  },
  {
    title: "Architecture & Computational Logic",
    skills: ["OOP", "Data Structures & Algorithms (DSA)", "SOLID Principles", "MVC Architecture", "Singleton Pattern"],
  },
  {
    title: "DevOps & Build Automation",
    skills: ["Git", "GitHub", "Maven", "Docker"],
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
