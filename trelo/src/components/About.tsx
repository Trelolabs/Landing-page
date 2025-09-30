import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left - Why choose us */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Why partners choose us</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">⏱ Ship in weeks, not months</li>
            <li className="flex items-start gap-3">🤝 Flexible engagement: fixed-scope or monthly</li>
            <li className="flex items-start gap-3">🎨 Design + engineering under one roof</li>
            <li className="flex items-start gap-3">⚡ Modern stack: Next.js, React Native, Supabase, OpenAI</li>
            <li className="flex items-start gap-3">📊 Continuous iteration & analytics baked in</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <button className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
              Start Your Project
            </button>
            <button className="px-5 py-2 rounded-xl bg-gray-700 text-gray-100 font-semibold hover:bg-gray-600 transition">
              See Our Work
            </button>
          </div>
        </div>

        {/* Right - Consultation Form */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Get a free 30-min consultation</h2>
          <form
            action="https://formspree.io/f/xwpronwp"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg bg-gray-900 p-3 text-gray-100 focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full rounded-lg bg-gray-900 p-3 text-gray-100 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              className="w-full rounded-lg bg-gray-900 p-3 text-gray-100 focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              name="message"
              placeholder="Project goals or challenges"
              rows={4}
              required
              className="w-full rounded-lg bg-gray-900 p-3 text-gray-100 focus:ring-2 focus:ring-emerald-500"
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
              >
                Request Consultation
              </button>
              <a
                href="#contact"
                className="px-5 py-2 rounded-xl bg-gray-700 text-gray-100 font-semibold hover:bg-gray-600 transition inline-block text-center"
              >
                Book a time
              </a>
            </div>
            <p className="text-sm text-gray-400">
              We'll reply within 24 hours. No obligation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
