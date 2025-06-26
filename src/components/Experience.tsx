
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise applications serving 100k+ users. Implemented modern React patterns and improved performance by 40%.',
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
      achievements: [
        'Led a team of 4 developers',
        'Reduced load times by 40%',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built and maintained multiple web applications from scratch. Worked closely with design and product teams to deliver user-centric solutions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      achievements: [
        'Developed 5+ production applications',
        'Reduced server costs by 30%',
        'Mentored junior developers'
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Frontend Developer Intern',
      company: 'WebStudio Inc',
      period: '2019 - 2020',
      description: 'Contributed to various client projects, focusing on responsive design and user experience optimization.',
      technologies: ['JavaScript', 'React', 'SASS', 'WordPress'],
      achievements: [
        'Completed 10+ client projects',
        'Improved mobile responsiveness',
        'Learned modern development practices'
      ]
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2016 - 2020',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web development.',
      technologies: ['Java', 'Python', 'C++', 'Database Design'],
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Coding Club',
        'Won hackathon competition'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative flex items-start animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

                  {/* Content */}
                  <div className="ml-20 w-full">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-white/5 backdrop-blur-sm border-white/10">
                      <CardHeader className="pb-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-slate-600 dark:text-slate-400">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={exp.type === 'work' ? 'default' : 'secondary'}
                              className={exp.type === 'work' 
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              }
                            >
                              {exp.type === 'work' ? 'Work' : 'Education'}
                            </Badge>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li 
                                key={i} 
                                className="text-sm text-slate-600 dark:text-slate-400 flex items-center"
                              >
                                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
