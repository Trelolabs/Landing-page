import React from 'react';


const Hero: React.FC = () => {
    return (
        <section id="hero" className="px-6 md:px-20 py-12 min-h-screen flex flex-col justify-center">
            <div className="text-sm uppercase text-gray-400 opacity-0 animate-fade-in">Digital Experiences. Delivered End-to-End.</div>


            <h1
                className="text-4xl md:text-5xl font-extrabold mt-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '120ms' }}
            >
                Websites, mobile apps, and AI tools — design to launch and beyond.
            </h1>


            <p
                className="mt-4 text-gray-300 max-w-2xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: '260ms' }}
            >
                We help startups and growing brands ship high-impact digital products fast: design, development, AI automation, and ongoing maintenance — all in one partner.
            </p>


            <div
                className="mt-6 flex space-x-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '420ms' }}
            >
                <a 
                  href="https://calendly.com/shyambalanagu724/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black px-6 py-2 rounded-md active:scale-95 transition-transform hover:bg-green-400"
                >
                  Start Your Project
                </a>
                <a 
                  href="https://github.com/Trelolabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-6 py-2 rounded-md border border-gray-700 active:scale-95 transition-transform hover:bg-gray-700"
                >
                  See Our Work
                </a>
            </div>


            <div
                className="mt-8 flex flex-wrap space-x-6 text-gray-400 text-sm opacity-0 animate-fade-in-up"
                style={{ animationDelay: '600ms' }}
            >
                <div>Trusted by founders and operators</div>
                <div>Fast delivery</div>
                <div>Modern stack</div>
            </div>
        </section>
    );
};


export default Hero;