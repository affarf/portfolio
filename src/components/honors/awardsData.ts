export type Award = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: 'scholarship' | 'honor' | 'initiative' | 'government';
};

export const awards: Award[] = [
  {
    id: 'abrams',
    title: 'Ralph B. Abrams Scholarship',
    issuer: 'UW–Madison College of Letters & Science',
    date: 'May 2026',
    description: 'Awarded to a rising senior in recognition of outstanding academic achievement within the College of Letters & Science',
    icon: 'scholarship',
  },
  {
    id: 'deans-list',
    title: "Dean's List",
    issuer: 'UW–Madison College of Letters & Science',
    date: 'Five semesters',
    description: 'Recognized for academic excellence in Fall 2023, Spring 2024, Spring 2025, Fall 2025, and Spring 2026',
    icon: 'honor',
  },
  {
    id: 'innovation',
    title: 'Innovation & Initiative Award',
    issuer: 'University Housing, Residence Hall Facilities',
    date: 'January 2024',
    description: 'Recognized for initiative, creative problem-solving, and contributions to residence hall facilities operations',
    icon: 'initiative',
  },
  {
    id: 'jpa',
    title: 'Malaysian Government Scholarship',
    issuer: 'Public Service Department of Malaysia (JPA)',
    date: 'August 2022',
    description: 'Selected for Malaysian government sponsorship supporting undergraduate studies and academic development at UW–Madison',
    icon: 'government',
  },
];
