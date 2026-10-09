import blonde from '../../assets/blonde.jpg';
import dune from '../../assets/dune.png';
import gtav from '../../assets/gtav.jpg';
import leadership from '../../assets/leadership.jpg';
import sports from '../../assets/sports.jpg';
import travel from '../../assets/travel.jpg';
import career from '../../assets/career.jpg';
import research from '../../assets/research.jpg';

export type NowCard = {
  id: string;
  label: string;
  content: string;
  image: string;
};

export const carouselCards: NowCard[] = [
  {
    id: '01',
    label: 'Career',
    content: 'Building dashboards, improving data workflows, and working on facilities analytics at UW–Madison FP&M',
    image: career,
  },
  {
    id: '02',
    label: 'Research',
    content: 'Experimenting with the Temi robot and exploring human–robot interaction at the People and Robots Lab',
    image: research,
  },
  {
    id: '03',
    label: 'Leadership & Campus Life',
    content: 'Co-leading the ISS Advisory Board and organizing events with the Malaysian Student Association',
    image: leadership,
  },
  {
    id: '04',
    label: 'Sports & Life',
    content: 'Getting on the soccer pitch, playing field hockey, and finding time to stay active between classes',
    image: sports,
  },
  {
    id: '05',
    label: 'Currently Planning',
    content: 'Planning my next budget-friendly trip, from routes and timing to the little details',
    image: travel,
  },
];

export const interests: NowCard[] = [
  {
    id: '01',
    label: 'Currently Listening',
    content: 'Returning to Frank Ocean, early indie favorites, and vintage Alex Turner',
    image: blonde,
  },
  {
    id: '02',
    label: 'Deep-Diving',
    content: 'Getting lost in the politics, rivalries, and worldbuilding of the Dune universe',
    image: dune,
  },
  {
    id: '03',
    label: 'Currently Playing',
    content: 'Driving around Los Santos and causing a little chaos in Grand Theft Auto V',
    image: gtav,
  },
];
