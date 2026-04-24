const features = [
  {
    icon: "⚡",
    title: "Blazing Fast",
    description:
      "Optimized from the ground up for performance. Your users get sub-second load times, every time.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption. Your data is always safe with us.",
  },
  {
    icon: "🧩",
    title: "Modular by Design",
    description:
      "Pick only the components you need. Mix, match, and extend with a rich ecosystem of integrations.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description:
      "Deep insights into how your product is performing — dashboards that update as events happen.",
  },
  {
    icon: "🤝",
    title: "Collaboration First",
    description:
      "Built for teams. Leave comments, assign tasks, and ship together with built-in review flows.",
  },
  {
    icon: "🌍",
    title: "Global Scale",
    description:
      "Edge-deployed infrastructure in 35+ regions ensures low latency no matter where your users are.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to ship
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A complete platform — from design tokens to deployment pipelines. Stop stitching tools
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
