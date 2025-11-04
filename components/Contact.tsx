
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = 'jeevanjiji2003@gmail.com';

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <div className="mt-8 relative inline-block">
          <a
            href={`mailto:${email}`}
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Say Hello
          </a>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 whitespace-nowrap transition-all duration-300 ${
              showEmail ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
          >
            <p className="text-sm text-gray-700 font-medium">{email}</p>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
