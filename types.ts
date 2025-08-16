import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  logoUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
