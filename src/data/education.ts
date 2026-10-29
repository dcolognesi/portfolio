import type { EducationItem } from '~/types';

/**
 * Education and certifications, newest first.
 *
 * Each entry is rendered as a timeline row on the About page. Leave the array
 * empty and the section is not rendered.
 */
export const education: EducationItem[] = [
  {
    qualification: 'Master in Big Data and Business Intelligence',
    institution: 'University of Milan-Bicocca',
    location: 'Milan, Italy',
    start: '2015',
    end: '2016',
    summary: 'Business Intelligence and Big Data Analytics.',
  },
  {
    qualification: 'Bachelor in Foreign Languages and Literatures',
    institution: 'University of Milan',
    location: 'Milan, Italy',
    start: '2005',
    end: '2010',
  },
  {
    qualification: 'Computer Science Technician High School Diploma',
    institution: 'ITIS',
    location: 'Sesto San Giovanni, Italy',
    start: '1995',
    end: '2000',
    summary: 'Computational Science.',
  },
];

export const certifications: EducationItem[] = [
  {
    qualification: 'HubSpot Inbound & CRM Certification',
    institution: 'HubSpot Academy',
    start: '2018',
    end: '2018',
  },
  {
    qualification: 'Text Mining Course',
    institution: 'University of Milan-Bicocca',
    location: 'Milan, Italy',
    start: '2017',
    end: '2017',
  },
  {
    qualification: 'Data Mining — Clustering and Association',
    institution: 'University of Milan-Bicocca',
    location: 'Milan, Italy',
    start: '2017',
    end: '2017',
  },
];

export const educationHeading = {
  eyebrow: 'Education',
  title: 'The formal part of the training.',
  intro: 'Degrees and masters, newest first.',
};

export const certificationsHeading = {
  title: 'Certifications',
};
