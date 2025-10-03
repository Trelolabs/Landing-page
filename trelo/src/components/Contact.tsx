import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    window.location.href = 'https://calendly.com/shyambalanagu724/30min';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-16 bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Let's Talk About Your Project</h3>
            <p className="text-gray-400">
              Ready to start your next project? Schedule a free consultation call or send us a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:shyambalanagu724@gmail.com" className="hover:text-green-500 transition-colors">
                  shyambalanagu724@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9502731467</span>
              </div>
              <a
                href="https://calendly.com/shyambalanagu724/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-colors mt-4"
              >
                Schedule a Call
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-green-500 transition-all"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-green-500 transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-green-500 transition-all"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;