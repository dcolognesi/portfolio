import type { EducationItem } from '~/types';

/**
 * Education and certifications, newest first.
 *
 * Each entry is rendered as a timeline row on the About page. Leave the array
 * empty and the section is not rendered.
 */
export const education: EducationItem[] = [
  {
    qualification: 'Master in Big Data e Business Intelligence',
    institution: 'Università degli Studi di Milano-Bicocca',
    location: 'Milano',
    start: '2015',
    end: '2016',
    summary: 'Business Intelligence and Big Data Analytics.',
  },
  {
    qualification: 'Lingue e letterature straniere — Inglese e Spagnolo',
    institution: 'Università degli Studi di Milano',
    location: 'Milano',
    start: '2005',
    end: '2010',
  },
  {
    qualification: 'Perito in Informatica',
    institution: 'ITIS',
    location: 'Sesto San Giovanni',
    start: '1995',
    end: '2000',
    summary: 'Computational Science.',
  },
  {
    qualification: 'Corso di Text Mining',
    institution: 'Università degli Studi di Milano-Bicocca',
    location: 'Milano',
    start: '2017',
    end: '2017',
  },
  {
    qualification: 'Data Mining — Clustering and Association',
    institution: 'Università degli Studi di Milano-Bicocca',
    location: 'Milano',
    start: '2017',
    end: '2017',
  },
  {
    qualification: 'HubSpot Inbound & CRM Certification',
    institution: 'HubSpot Academy',
    start: '2018',
    end: '2018',
  },
];

export const educationHeading = {
  eyebrow: 'Education',
  title: 'The formal part of the training.',
  intro: 'Degrees, masters and certifications, newest first.',
};
