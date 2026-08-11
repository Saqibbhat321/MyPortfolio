import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <SectionWrapper>
      <section
        id="contact"
        className="bg-[#ececec] py-32 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Number - Muted gray for small metadata */}
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            05 // Contact
          </p>

          {/* Main Heading - Highly visible deep dark tone */}
          <h2 className="text-5xl font-light mb-12 text-zinc-900">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Email Card */}
            <a
              href="mailto:saqib.bhat.x@gmail.com"
              className="bg-white border border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              {/* Icon is styled with a subtle dark gray */}
              <FaEnvelope size={30} className="text-zinc-700" />
              <h3 className="mt-4 font-semibold text-zinc-900">
                Email
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                saqib.bhat.x@gmail.com
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/saqib-bhat"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <FaGithub size={30} className="text-zinc-700" />
              <h3 className="mt-4 font-semibold text-zinc-900">
                GitHub
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                @saqib-bhat
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/saqib-bhat-ai/"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <FaLinkedin size={30} className="text-zinc-700" />
              <h3 className="mt-4 font-semibold text-zinc-900">
                LinkedIn
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                in/saqib-bhat-ai
              </p>
            </a>

          </div>
   
        </div>
        
      </section>
    </SectionWrapper>
  );
}

export default Contact;
