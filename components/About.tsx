import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'PHP', 'C++', 'C'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Flutter'],
  },
  {
    category: 'Backend & Frameworks',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'Laravel'],
  },
  {
    category: 'Databases & Tools',
    skills: ['MongoDB Atlas', 'MySQL', 'Git', 'GitHub', 'REST APIs', 'Socket.IO', 'WebRTC', 'Razorpay'],
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Integrated MCA graduate with experience in full-stack web development, backend systems, and enterprise application development. Proficient in JavaScript, Python, PHP, and modern web technologies with hands-on experience building scalable applications, REST APIs, and real-time systems.
          </p>
        </div>

        <div id="skills" className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((group) => (
              <div key={group.category} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/80">
                <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-800 font-medium text-xs py-1.5 px-3 rounded-lg border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
