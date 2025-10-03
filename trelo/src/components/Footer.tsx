import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-2">Trelo Labs</h3>
          <p className="text-sm">
            Design & build partner for modern startups and teams.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <span>🔒 Secure</span>
            <span>✔ Verified business</span>
            <span>👍 Satisfaction-first</span>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@trelolabs.com" className="hover:text-white">shyambalanagu724@gmail.com</a></li>
            <li><a href="#" className="hover:text-white">WhatsApp : +91 9502731467</a></li>
            <li><a href="https://calendly.com/shyambalanagu724/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white">Book a call</a></li>
          </ul>
        </div>

        {/* Quick Message */}
        <div>
          <h4 className="font-semibold mb-3">Quick message</h4>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-gray-900 p-3 text-gray-100 focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              placeholder="How can we help?"
              rows={3}
              className="w-full rounded-lg bg-gray-900 p-3 text-gray-100 focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-full px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            By sending, you agree to our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 Trelo Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
