import callInImage from '../../assets/call_in.png';
import portfolioImage from '../../assets/portfolio.png';
import festifyImage from '../../assets/festify.jpg';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  actionUrl?: string;
  actionLabel?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'call-in-sick',
    title: 'UW–Housing Call in Sick App',
    description:
      'A full-stack leave notification platform built to simplify how student employees report absences, with request storage, automated email confirmations, and a streamlined interface for submitting sick leave',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
    image: callInImage,
    actionUrl: 'https://mediaspace.wisc.edu/media/Leave+Request+Demo/1_kx6ll9ml',
    actionLabel: 'WATCH DEMO',
    githubUrl: 'https://github.com/affarf/call_in_sick',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'A personal website designed and developed with React, TypeScript, and Tailwind CSS, featuring responsive layouts, animated details, and a distinct editorial visual style',
    techStack: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
    image: portfolioImage,
    actionUrl: 'https://affarf.github.io/portfolio/',
    actionLabel: 'VIEW LIVE',
    githubUrl: 'https://github.com/affarf/portfolio',
  },
  {
    id: 'festify',
    title: 'Festify',
    description:
      'An Android campus-events app that helps students discover, create, and manage activities, with event RSVPs, status updates, and community-driven event discovery',
    techStack: ['Kotlin', 'Firebase', 'QR Code API'],
    image: festifyImage,
    actionUrl: 'https://drive.google.com/file/d/1ThF1y1mo6VM7RaeGLkcgR-STT6ZoobHF/view',
    actionLabel: 'WATCH DEMO',
    githubUrl: 'https://github.com/ipanropi/festify',
  },
];
