import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card } from './ui/card';
import SkillBadge from './SkillBadge';

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
      description: 'CGPA: 3.89/4.0',
      highlights: [
        'Dean\'s List for 3 consecutive semesters: Fall 2023, Spring 2024, Spring 2025',
        'Recipient of the Malaysia Government Scholarship covering full tuition and living expenses',
        'Completed 30+ credit hours of advanced CS courses, including Data Structures, Algorithms, and Machine Learning',
        'Maintained top 10% of class academically while actively participating in campus leadership roles',
        'Member of the UW-Madison Club Field Hockey Team, traveled to Virginia for national tournament, playing as goalkeeper'
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
      type: 'leadership',
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
    {
      type: 'leadership',
      title: 'ISS Advisor',
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
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      case 'work':
        return <Briefcase className="h-5 w-5" />;
      case 'leadership':
        return <Award className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-lavender)] mx-auto rounded-full"></div>
        </div>

        {/* Bio */}
        <Card className="p-8 mb-12 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate Computer Science and Data Science student at the University of Wisconsin-Madison with a strong foundation in 
            full-stack web development. With a CGPA of 3.89/4.0, I've been recognized on the Dean's List and awarded the 
            Malaysia Government Scholarship. I enjoy building user-centric applications using modern technologies like 
            React.js, Node.js, and Express.js. Beyond coding, I'm actively involved in campus leadership roles, including 
            serving as Logistics Director for the Malaysian Student Association and as a Student Representative on the 
            International Student Services Advisory Board.
          </p>
        </Card>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="mb-8 text-center">Technical Skills</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="mb-4 text-muted-foreground">Programming Languages</h4>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="blue" />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-muted-foreground">Web Development</h4>
              <div className="flex flex-wrap gap-3">
                {skills.web.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="lavender" />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-muted-foreground">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="mint" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="mb-8 text-center">Education & Experience</h3>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card 
                key={index}
                className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4"
                style={{
                  borderLeftColor: 
                    item.type === 'education' ? 'var(--pastel-blue)' :
                    item.type === 'work' ? 'var(--pastel-lavender)' :
                    'var(--pastel-mint)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{
                      backgroundColor: 
                        item.type === 'education' ? 'var(--pastel-blue)' :
                        item.type === 'work' ? 'var(--pastel-lavender)' :
                        'var(--pastel-mint)'
                    }}
                  >
                    {getIcon(item.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4>{item.title}</h4>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-1">
                      {item.organization} • {item.location}
                    </p>
                    
                    {item.description && (
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                    )}
                    
                    <ul className="space-y-1 mt-3">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
