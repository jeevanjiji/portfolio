
import React from 'react';

const skills = [
  'React', 'Next.js', 'Node.js', 'MongoDB', 'Three.js', 'Python', 'HTML', 'CSS', 'Git'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Passionate developer with experience in full-stack development, Three.js experimentation, Python game dev, and learning AI. I enjoy working on innovative and visually engaging tech, constantly exploring new ways to bring ideas to life.
          </p>
        </div>
        
        <div id="skills" className="max-w-4xl mx-auto text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white text-gray-700 font-medium py-2 px-5 rounded-full shadow-sm border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
