import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  duration: string;
  location?: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: 'CoreMinds',
    role: 'Junior Software Engineer',
    type: 'Full-time',
    duration: 'Jan 2026 – Jun 2026',
    description: [
      'Developed backend modules using Laravel and PHP.',
      'Built REST APIs and database-driven features.',
      'Contributed to Flutter-based mobile application development.',
      'Worked on enterprise workflow and business management systems.'
    ],
    skills: ['Laravel', 'PHP', 'REST APIs', 'Flutter', 'MySQL', 'Enterprise Systems'],
  },
  {
    company: 'ArchFiend Studio / MetaShot',
    role: 'Game Developer Intern',
    type: 'Internship',
    duration: 'Dec 2025 – Jan 2026',
    description: [
      'Worked on mobile gameplay systems and feature implementation.',
      'Implemented and tested dual BLE (Bluetooth Low Energy) connectivity.',
      'Debugged and resolved issues in upcoming MetaShot titles.'
    ],
    skills: ['Game Development', 'Mobile Gameplay', 'BLE Connectivity', 'Debugging'],
  },
  {
    company: 'Hexcent Pvt Ltd',
    role: 'Software Development Intern',
    type: 'Internship',
    duration: 'Jun 2024 – Jul 2024',
    location: 'Kochi, Kerala, India',
    description: [
      'Developed Django-based modules and REST APIs.',
      'Integrated AI model endpoints into application workflows.'
    ],
    skills: ['Django', 'Python', 'REST APIs', 'AI Model Integration', 'Full Stack Development'],
  },
  {
    company: 'Ainsoft Solutions',
    role: 'Software Development Intern',
    type: 'Internship',
    duration: 'May 2023 – Jun 2023',
    location: 'Thiruvananthapuram, Kerala, India',
    description: [
      'Worked on MERN-based modules and responsive dashboards.'
    ],
    skills: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
];

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <span className="text-indigo-600 font-bold text-xl">{experience.company.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full w-fit">
              {experience.duration}
            </span>
          </div>
          <p className="text-indigo-600 font-medium mt-1">{experience.company} · <span className="text-gray-500 font-normal">{experience.type}</span></p>
          {experience.location && <p className="text-gray-400 text-xs mt-0.5">{experience.location}</p>}
          <ul className="text-gray-700 mt-4 space-y-2 text-sm leading-relaxed list-disc list-inside">
            {experience.description.map((bullet, idx) => (
              <li key={idx} className="leading-snug">{bullet}</li>
            ))}
          </ul>
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
          <p className="text-lg text-gray-600 mt-2">My professional journey, software engineering roles, and internships.</p>
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
