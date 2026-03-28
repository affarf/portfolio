import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card } from './ui/card';
import SkillBadge from './SkillBadge';
import housing from '../assets/housing.jpg';
import education from '../assets/uw-madison.png';
import iss from '../assets/iss.jpg';
import fp_m from '../assets/fp&m.png';
import mysa from '../assets/mysa.png';

export default function About() {
  const skills = {
    languages: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'R', 'Kotlin'],
    web: ['React.js', 'React Native', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    tools: ['Figma', 'Canva', 'Microsoft Suite', 'Git', 'MongoDB'],
  };

  const timeline = [
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science and Data Science',
      organization: 'University of Wisconsin-Madison',
      location: 'Madison, WI',
      date: 'Expected May 2027',
      description: 'CGPA: 3.92/4.0',
      highlights: [
        'Dean\'s List for 3 consecutive semesters: Fall 2023, Spring 2024, Spring 2025',
        'Recipient of the Malaysia Government Scholarship covering full tuition and living expenses',
        'Completed 30+ credit hours of advanced CS courses, including Data Structures, Algorithms, and Machine Learning',
        'Maintained top 10% of class academically while actively participating in campus leadership roles',
        'Member of the UW-Madison Club Field Hockey Team, traveled to Virginia for national tournament, playing as goalkeeper'
      ],
    },

    {
      type: 'fp_m',
      title: 'Business Analytics Assistant',
      organization: 'UW-Madison, Facilities Planning & Management Division',
      location: 'Madison, WI',
      date: 'March 2026 – Present',
      highlights: [
        'Analyze operational data to support business decisions and improve workflows across UW-Madison\'s Physical Plant department',
        'Clean, process, and organize large datasets to ensure accurate tracking of campus facility metrics',
        'Develop reports and data visualizations to help management monitor key performance indicators and operational efficiency',
      ],
    },
    
    {
      type: 'work',
      title: 'Facilities Student Supervisor',
      organization: 'University Housing, Residence Hall Facilities',
      location: 'Madison, WI',
      date: 'September 2024 – Present',
      highlights: [
        'Supervised and coordinated a team of 10 student custodians, improving task completion rate by 35%',
        'Implemented new scheduling system, reducing missed duties by 20%',
        'Recognized for initiative and teamwork through the Innovation & Initiative Award (Spring & Summer 2024)',
      ],
    },

    {
      type: 'iss',
      title: 'Chair of International Student Services Advisory Board',
      organization: 'International Student Services',
      location: 'UW-Madison',
      date: 'May 2025 – Present',
      highlights: [
        'Advocated for cultural inclusion and improved student support for over 6000 international students',
        'Collected feedback and implemented changes that increased participation in ISS events by 30%',
        'Collaborated with 5+ campus organizations to enhance programming and outreach',
        'Provided mentorship and guidance to new students, improving onboarding experience by 25%',
      ],
    },
    {
      type: 'mysa',
      title: 'Logistics Director',
      organization: 'Malaysian Student Association',
      location: 'UW-Madison',
      date: 'August 2023 – Present',
      highlights: [
        'Planned and executed Malaysian Cultural Night Theatre 2025, increasing attendance by 40%',
        'Managed vendor contracts and logistics for lighting, sound, and stage equipment',
        'Streamlined event setup, reducing setup time by 25%',
        'Coordinated a team of 15 volunteers, improving efficiency and communication',
      ],
    },
    
    
  ];

  const getIcon = (type: string) => {
  const iconMap = {
    education: education,
    work: housing,
    fp_m: fp_m,
    iss: iss,
    mysa: mysa
  };
  
  return (
    <img 
      src={iconMap[type]} 
      alt={type} 
      className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-none"
    />
  );
};

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pb-8">
          <h2 className="mb-4 font-black text-5xl tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}>
            About
          </h2>
          <p className="font-mono text-sm tracking-widest" style={{ color: '#8b4545' }}>▬ MY STORY & EXPERIENCE</p>
        </div>

        {/* Bio Card */}
        <div className="p-8 mb-12 border-2 transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: '#fdfcf9',
            borderColor: '#e8e4dd',
            boxShadow: '6px 8px 16px rgba(42, 37, 32, 0.08)'
          }}>
          <p className="leading-relaxed font-mono text-lg" style={{ color: '#5a5047', lineHeight: 1.8 }}>
            I'm a passionate Computer Science and Data Science student at the University of Wisconsin-Madison with a strong foundation in 
            full-stack web development. With a CGPA of 3.92/4.0, I've been recognized on the Dean's List and awarded the 
            Malaysia Government Scholarship. I enjoy building user-centric applications using modern technologies like 
            React.js, Node.js, and Express.js. Beyond coding, I'm actively involved in campus leadership roles, including 
            serving as Logistics Director for the Malaysian Student Association and as a Student Representative on the 
            International Student Services Advisory Board.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="mb-8 font-black text-3xl" style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}>
            Technical Skills
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 font-mono text-xs tracking-widest font-semibold" style={{ color: '#8b4545' }}>PROGRAMMING LANGUAGES</h4>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="crimson" />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-mono text-xs tracking-widest font-semibold" style={{ color: '#8b4545' }}> <br /> WEB DEVELOPMENT</h4>
              <div className="flex flex-wrap gap-3">
                {skills.web.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="mustard" />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-mono text-xs tracking-widest font-semibold" style={{ color: '#8b4545' }}> <br /> TOOLS & TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="blue" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="mb-8 font-black text-3xl" style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}>
            Education & Experience
          </h3>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="p-8 border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#fdfcf9',
                  borderColor: '#e8e4dd',
                  boxShadow: `${4 + index}px ${6 + index}px 12px rgba(42, 37, 32, 0.06)`
                }}
              >
                <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 bg-transparent">
                  {getIcon(item.type)}
                </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-serif font-bold text-lg" style={{ color: '#2a2520' }}>{item.title}</h4>
                      <span className="font-mono text-xs font-medium tracking-wider" style={{ color: '#8b4545' }}>{item.date}</span>
                    </div>
                    
                    <p className="font-mono text-sm mb-1" style={{ color: '#5a5047' }}>
                      {item.organization} • {item.location}
                    </p>
                    
                    {item.description && (
                      <p className="font-mono text-sm font-semibold mb-2" style={{ color: '#8b4545' }}>{item.description}</p>
                    )}
                    
                    <ul className="space-y-2 mt-3">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm flex items-start font-mono" style={{ color: '#5a5047' }}>
                          <span className="mr-2" style={{ color: '#c4a856' }}>▪</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
