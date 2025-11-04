
import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: 'HEXCENT PVT LTD',
    role: 'Python Full Stack Development Intern',
    type: 'Internship',
    duration: 'Jun 2024 · 1 mo',
    location: 'Kochi, Kerala, India · On-site',
    description: 'Completed a short-term internship focused on Python Full Stack Development, gaining hands-on experience in developing web applications using Python and Django, building responsive front-end interfaces, integrating databases and handling backend operations.',
    skills: ['Django', 'Python', 'Full Stack Development', 'Web Development', 'Database Management'],
  },
  {
    company: 'Ainsoft Solutions',
    role: 'Full Stack Development Intern',
    type: 'Internship',
    duration: 'May 2023 · 1 mo',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description: 'Worked on MERN (MongoDB, Express.js, React.js, Node.js) stack development, developing responsive front-end applications with React.js, implementing backend logic using Node.js and Express.js, and managing MongoDB databases.',
    skills: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
];

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <span className="text-indigo-600 font-bold text-xl">{experience.company.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>
          <p className="text-indigo-600 font-medium">{experience.company} · {experience.type}</p>
          <p className="text-gray-600 text-sm mt-1">{experience.duration}</p>
          <p className="text-gray-500 text-sm">{experience.location}</p>
          <p className="text-gray-700 mt-4 leading-relaxed">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill) => (
              <span key={skill} className="text-xs font-semibold bg-gray-100 text-gray-700 py-1 px-3 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
          <p className="text-lg text-gray-600 mt-2">My professional journey and internships.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
