"use client";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="absolute top-0 left-0 w-full z-30 flex justify-between items-center px-6 md:px-10 py-6">

        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          SKOLR India
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">Features</span>
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>

      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen flex items-center justify-center">

        {/* 🌌 Spline Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://my.spline.design/retrofuturismbganimation-TmXkcwH9ReBsDkNt6UV5qVx8/"
            className="w-full h-full scale-125"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* 🔥 Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* 💬 HERO CONTENT */}
        <div className="relative z-20 text-center px-6 max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            SKOLR India
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-4">
            Your school, reimagined.
          </p>

          <p className="text-gray-400 text-sm md:text-base mb-8">
            Coming soon on your mobile.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-xl transition">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-black py-20 px-6 md:px-20 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why SKOLR?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-3">
              Smart Assignments
            </h3>
            <p className="text-gray-400">
              Assign, submit, and track work effortlessly.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Updates
            </h3>
            <p className="text-gray-400">
              Stay updated with instant notifications.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-3">
              Clean Experience
            </h3>
            <p className="text-gray-400">
              Minimal UI built for focus and productivity.
            </p>
          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SKOLR India. All rights reserved.
      </footer>

    </main>
  );
}