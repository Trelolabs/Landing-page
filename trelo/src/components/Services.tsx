// components/Services.tsx
import React from 'react';
const Services: React.FC = () => (
    <section className="px-6 md:px-20 py-12 bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Get a complete digital presence with...</h2>
        <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-semibold mb-2">Websites</h3>
                <p className="text-gray-400 text-sm">Marketing sites, landing pages, and CMS-backed content built for speed and SEO.</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-semibold mb-2">Mobile Apps</h3>
                <p className="text-gray-400 text-sm">iOS and Android apps with polished UX and robust infrastructure.</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-semibold mb-2">AI Tools</h3>
                <p className="text-gray-400 text-sm">Custom AI copilots, automations, and internal tooling to scale operations.</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-semibold mb-2">Maintenance</h3>
                <p className="text-gray-400 text-sm">Reliable support, iteration, and analytics to keep shipping post-launch.</p>
            </div>
        </div>
    </section>
);
export default Services;