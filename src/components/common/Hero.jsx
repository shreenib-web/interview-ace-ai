function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold">
          Ace Your Next Interview 🚀
        </h1>

        <p className="text-xl text-gray-300 mt-6">
          Practice React, JavaScript, Node.js and more with quizzes,
          coding challenges, flashcards and AI-powered learning.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Explore Questions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;