import housing from '../../assets/experiences/housing.jpg';
import education from '../../assets/experiences/uw-madison.png';
import iss from '../../assets/experiences/iss.jpg';
import fp_m from '../../assets/experiences/fp&m.png';
import mysa from '../../assets/experiences/mysa.png';
import issabAndrea from '../../assets/experiences/issab_andrea.jpg';
import mysaNight from '../../assets/experiences/mysa_night.jpeg';
import lab from '../../assets/experiences/lab.jpeg'

import fieldHockey from '../../assets/experiences/field_hockey.jpg';
import festifyTeam from '../../assets/festify_team.jpg';
import campRandall from '../../assets/experiences/camp_randall.jpg';
import ipmMentors from '../../assets/experiences/ipm_mentors.jpg';
import peopleRobotsLab from '../../assets/experiences/people_robots_lab.jpg';
import fpmDesk from '../../assets/experiences/fp_m_desk.jpg';
import housingSupervisor from '../../assets/experiences/housing_supervisor.jpeg';

export type ExperiencePhoto = {
  src: string;
  caption: string;
  alt: string;
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  logo: string;
  description?: string;
  highlights: string[];
  photos?: ExperiencePhoto[];
};

export const experiences: Experience[] = [
  {
    id: 'education',
    title: 'Bachelor of Science in Computer Science and Data Science',
    organization: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    date: 'Expected May 2027',
    logo: education,
    description: 'CGPA: 3.92/4.0',
    highlights: [
      'Coursework in algorithms, artificial intelligence, big data systems, data modeling, machine organization, statistics, and user interface design',
      'Built full-stack applications, projects, and machine learning models using Java, Python, JavaScript, R, and Kotlin',
      'Goalkeeper for the Wisconsin Club Field Hockey Team, including a national tournament in Virginia',
    ],
    photos: [
      { src: fieldHockey, caption: 'Between classes and the field hockey pitch', alt: 'Field hockey goalkeeper portrait wearing a Wisconsin jersey and equipment' },
      { src: festifyTeam, caption: 'Presenting Festify with the project team', alt: 'Student project team standing beside their Festify presentation' },
      { src: campRandall, caption: 'A night at Camp Randall', alt: 'Wisconsin football game at Camp Randall Stadium at night' },
    ],
  },
  {
    id: 'fp-m',
    title: 'Business Analytics Assistant',
    organization: 'UW–Madison, Facilities Planning & Management Division',
    location: 'Madison, WI',
    date: 'March 2026 – Present',
    logo: fp_m,
    highlights: [
      'Develop Power BI dashboards with ArcGIS spatial data for workforce planning, maintenance forecasting, and analysis',
      'Manage asset data in AiM AssetWorks and help develop a Custodial Services database to track labor hours, cleaning standards, and resources',
      'Explore a secure RAG-powered knowledge base on Google Cloud Platform to improve access to departmental documents',
      'Benchmark custodial and maintenance performance using APPA standards to inform staffing and operational decisions',
      "Lead the ongoing UI/UX modernization of FP&M's KnowledgeBase, redesigning resource navigation, document layouts, and mobile interfaces to improve accessibility and information discovery",
    ],
    photos: [
      { src: fpmDesk, caption: 'A little corner of my FP&M workspace', alt: 'Personal desk and monitor at the Facilities Planning and Management office' },
    ],
  },
  {
    id: 'pair-lab',
    title: 'Undergraduate Research Assistant',
    organization: 'People and Robots Laboratory, UW–Madison',
    location: 'Madison, WI',
    date: 'March 2026 – Present',
    logo: lab,
    highlights: [
      'Contribute to human–robot interaction research using the Temi robot under Dr. Bilge Mutlu and Jungeun Lim',
      'Help develop, configure, and test robot behavior for research prototypes and experimental workflows',
      'Collaborate in an interdisciplinary lab studying how people interact with robotic systems',
    ],
    photos: [
      { src: peopleRobotsLab, caption: 'Inside the People and Robots Lab', alt: 'Robotics research laboratory workspace with monitors and equipment' },
    ],
  },
  {
    id: 'housing',
    title: 'Facilities Student Supervisor',
    organization: 'University Housing, Residence Hall Facilities',
    location: 'Madison, WI',
    date: 'September 2024 – Present',
    logo: housing,
    highlights: [
      'Supervise and train approximately 10 student custodians across Cole, Sullivan, and Aldo Leopold residence halls',
      'Manage shift schedules, coverage, task assignments, and records to keep daily operations running smoothly',
      'Coordinate maintenance requests and event preparations while supporting staff through training and problem-solving',
    ],
    photos: [
      { src: housingSupervisor, caption: 'On duty with University Housing Residence Hall Facilities', alt: 'A student supervisor working with custodians in a residence hall' },
    ],
  },
  {
    id: 'iss',
    title: 'Co-Leader, International Student Services Advisory Board',
    organization: 'UW–Madison International Student Services',
    location: 'Madison, WI',
    date: 'April 2026 – Present',
    logo: iss,
    highlights: [
      'Co-lead advisory board meetings, set agendas, and work with ISS staff on student-focused initiatives',
      'Represent international students in university forums, including the Immigration & International Issues Committee',
      'Advocate for clearer information on CPT, OPT, internships, and campus support for F-1 students',
      'Help recruit new board members and coordinate outreach, building on service as a board member since May 2025',
    ],
    photos: [
      { src: issabAndrea, caption: 'A moment from my ISSAB journey', alt: 'ISSAB recognition and student leadership memory' },
    ],
  },
  {
    id: 'ipm',
    title: 'International Peer Mentor',
    organization: 'UW–Madison International Student Services',
    location: 'Madison, WI',
    date: 'January 2026 – Present',
    logo: iss,
    highlights: [
      'Mentor a cohort of 10 incoming international students as they adjust to academics and life at UW–Madison',
      'Offer one-on-one guidance on campus resources, student organizations, and academic expectations',
      'Help mentees navigate cultural transitions and connect with support services and campus communities',
    ],
    photos: [
      { src: ipmMentors, caption: 'Good company with fellow international mentors', alt: 'A group of four friends and student mentors by the lakeshore at sunset' },
    ],
  },
  {
    id: 'mysa',
    title: 'Logistics Director',
    organization: 'Malaysian Student Association',
    location: 'UW–Madison',
    date: 'August 2023 – Present',
    logo: mysa,
    highlights: [
      'Led venue, technical, and event logistics for Malaysian Cultural Night Theatre 2025',
      'Coordinated vendors, lighting, sound, stage equipment, and scheduling for cultural events',
      'Directed approximately 15 volunteers and worked with student leaders to resolve event-day challenges',
    ],
    photos: [
      { src: mysaNight, caption: 'Behind the scenes at Malaysian Cultural Night', alt: 'Event organizer at Malaysian Cultural Night during backstage operations' },
    ],
  },
];
