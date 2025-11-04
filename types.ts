
import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  githubLink?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}
