
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      company: 'Graphic Era Hill University',
      period: '2022 - 2026',
      description: 'Graduation is ongoing. Focused on software engineering, algorithms, and web development. Built strong foundation in computer science fundamentals and modern development practices.',
      technologies: ['Java', 'Python', 'C++', 'JavaScript', 'React', 'Database Design'],
      achievements: [
        'Hand on Projects experience',
        'Member of Coding Club',
        'Won a hackathon competitions',
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Full Stack Web Development Bootcamp',
      company: 'Graphic Era Hill University',
      period: '2023',
      description: 'Intensive 3-month program focused on modern web development technologies and best practices. Completed multiple real-world projects and collaborated with industry professionals.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'AWS'],
      achievements: [
        'Top 10% of graduating class',
        'Mentored junior students'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Education</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My educational journey and academic achievements
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
                              variant="secondary"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            >
                              Education
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
                            Technologies Studied:
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
