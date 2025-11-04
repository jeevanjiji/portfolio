
import React from 'react';
import type { SocialLink } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ItchIoIcon } from './icons/ItchIoIcon';
import { LinkIcon } from './icons/LinkIcon';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/jeevanjiji', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jeevan-jiji', icon: LinkedInIcon },
  { name: 'Itch.io', url: 'https://jeevn.itch.io/', icon: ItchIoIcon },
  { name: 'Portfolio', url: 'https://websphere-six.vercel.app/', icon: LinkIcon },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Jeevan Jiji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
