export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-100 rounded-full">
          Now in public beta
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Build something <span className="text-indigo-600">great</span>,<br />ship it fast.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Acme gives your team the tools to design, build, and launch products in record time —
          without sacrificing quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Start for free
          </a>
          <a
            href="#features"
            className="bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            See features →
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">No credit card required · Free plan available</p>
      </div>
    </section>
  );
}
