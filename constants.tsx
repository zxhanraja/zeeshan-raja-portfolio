import React from 'react';
import { NavLink, Skill, Certification, ExperienceItem, Testimonial } from './types.ts';

// --- HEADER & NAVIGATION ---
export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

// --- SKILLS ---
const skillIconStyle = "w-12 h-12 mx-auto mb-4 text-[#A68A68]";

export const skills: Skill[] = [
  {
    name: 'Real Estate Sales',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={skillIconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3-1m-3.75 9.75V4.5m0 13.5L6 18m0 0l6-6m-6 6l6 6" />
      </svg>
    ),
  },
  {
    name: 'Lead Generation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={skillIconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Digital Marketing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={skillIconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: 'CRM Proficiency',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={skillIconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.513-.96 1.487-1.591 2.571-1.82m-2.571 1.82a9.094 9.094 0 00-3.741.479 3 3 0 004.682 2.72m-8.318-2.962a9.092 9.092 0 013.741-.479 3 3 0 014.682 2.72m-8.318-2.962c-.513.96-1.487 1.591-2.571 1.82m10.888-7.464c.253.387.48.804.655 1.26m-1.31 0V4.5a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v7.5-7.5a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 0010.5 4.5v7.5m-3-1.26c-.253-.387-.48-.804-.655-1.26m1.31 0V4.5a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 00-2.25-2.25v7.5-7.5a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v7.5" />
      </svg>
    ),
  },
  {
    name: 'Sales Closing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={skillIconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Multilingual Communication',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={skillIconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.306 3 12s4.03 8.25 9 8.25zM9 9.75c.398 0 .788.064 1.162.181a4.5 4.5 0 011.684 1.162c.31.31.574.658.788.98M15 9.75c-.398 0-.788.064-1.162.181a4.501 4.501 0 00-1.684 1.162c-.31.31-.574.658-.788.98m-3.75 3.75c.398 0 .788.064 1.162.181a4.5 4.5 0 011.684 1.162c.31.31.574.658.788.98" />
      </svg>
    ),
  },
];


// --- CERTIFICATIONS ---
export const certifications: Certification[] = [
  {
    title: 'Introduction to Real Estate Sales',
    issuer: 'Udemy',
    date: '09/2024',
    logoUrl: 'https://ik.imagekit.io/zgmzllqewo/download%20(1).png?updatedAt=1755193967343',
  },
  {
    title: 'Basics of Digital Marketing',
    issuer: 'Google Digital Garage',
    date: '08/2024',
    logoUrl: 'https://ik.imagekit.io/zgmzllqewo/download%20(2).png?updatedAt=1755194389355',
  },
  {
    title: 'Sales Closing Techniques',
    issuer: 'Coursera',
    date: '01/2024',
    logoUrl: 'https://ik.imagekit.io/zgmzllqewo/download%20(3).png?updatedAt=1755227366780',
  },
];

// --- EXPERIENCE ---
export const experience: ExperienceItem[] = [
  {
    role: 'Sales & Marketing Volunteer',
    company: 'Community Outreach',
    period: '2020 - 2021',
    description: [
      'Promoted local services via social media, increasing client inquiries by 40%.',
      'Conducted 100+ cold calls per week to potential customers, improving lead conversion rate.',
      'Created short property-style promotional videos, enhancing online reach and brand visibility.',
    ]
  },
];

// --- TESTIMONIALS ---
export const testimonials: Testimonial[] = [
    {
      quote: "Zeeshan's dedication during his volunteer work was exceptional. He approached marketing challenges with creativity and a proactive mindset, significantly boosting our outreach. His passion is evident in everything he does.",
      name: 'Aisha Ahmed',
      role: 'Volunteer Coordinator, Community Outreach',
    },
    {
      quote: "I've watched Zeeshan grow and have always been impressed by his ambition and deep interest in the real estate world. He is a trustworthy, articulate, and driven individual who is destined for success in this industry.",
      name: 'Farhan Khan',
      role: 'Mentor & Family Friend',
    },
];
