import React from 'react';
import { LinkIcon } from './icons/LinkIcon';

interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  description?: string;
  skills?: string[];
  link?: string;
}

const certificationsData: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    date: '2025',
    skills: ['Data Science', 'Machine Learning', 'Oracle Cloud Infrastructure'],
  },
  {
    title: 'Generative AI Certified Professional',
    issuer: 'Oracle Cloud Infrastructure',
    date: 'Jul 2024 · Expires Jul 2026',
    credentialId: '100754619OCI2024GAIOCP',
    skills: ['Generative AI', 'Oracle Cloud Infrastructure', 'Cloud Computing'],
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google Cybersecurity Program',
    date: 'Mar 2025',
    credentialId: 'ZYEP6KFTLPEB',
    skills: ['Cybersecurity', 'Risk Management', 'Security Foundations'],
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: '2025',
    skills: ['Model Context Protocol (MCP)', 'AI Agents', 'Context Engineering'],
  },
  {
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    date: '2025',
    skills: ['Advanced MCP', 'System Architecture', 'AI Tooling'],
  },
  {
    title: 'Google Developer Student Clubs Solution Challenge - Certificate of Participation',
    issuer: 'Google Developer Groups on Campus (GDG-AJCE)',
    date: 'Aug 2025',
    credentialId: '2025H2S01GSC-P41990',
    skills: ['Problem Solving', 'Community Development', 'Innovation'],
  },
];

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
          <p className="text-indigo-600 font-medium mb-1">{cert.issuer}</p>
          {cert.date && <p className="text-gray-500 text-sm mb-2">{cert.date}</p>}
          {cert.credentialId && (
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium">Credential ID:</span> {cert.credentialId}
            </p>
          )}
          {cert.description && (
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">{cert.description}</p>
          )}
          {cert.skills && cert.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {cert.skills.map((skill) => (
                <span key={skill} className="text-xs font-semibold bg-indigo-50 text-indigo-700 py-1 px-3 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-indigo-600 hover:text-indigo-800 transition-colors"
            title="View credential"
          >
            <LinkIcon className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Certifications</h2>
          <p className="text-lg text-gray-600 mt-2">Professional certifications and credentials.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
