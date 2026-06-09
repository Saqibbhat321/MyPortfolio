import React from "react";

function Footer() {
  return (
   <footer className="bg-black border-t border-white/10 py-10">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col md:flex-row justify-between items-center">

      <div>
        <h3 className="font-semibold text-white">
          Saqib Bhat
        </h3>

        <p className="text-gray-500 text-sm">
          Software Engineer • Machine Learning Engineer
        </p>
      </div>

      <p className="text-gray-600 text-sm mt-4 md:mt-0">
        Built with React + Tailwind CSS
      </p>

    </div>

  </div>
</footer>
  );
}

export default Footer;
