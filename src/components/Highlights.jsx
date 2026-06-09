function Highlights() {
  const stats = [
    { value: "4+", label: "Major Projects" },
    { value: "10+", label: "Technologies" },
    { value: "1000+", label: "Hours Learning" },
    { value: "2", label: "Domains (Java + ML)" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Highlights;