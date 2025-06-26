
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS'
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <img 
                    src="https://raw.githubusercontent.com/GLCRealm/My-Portfolio/main/public/photo/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                Passionate Full Stack Developer
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Hello! I'm Adarsh, a computer science student with a passion for building clean and responsive user interfaces. I'm skilled in JavaScript, HTML, and CSS, and I enjoy bringing ideas to life in the browser. While I have a strong understanding of backend API integration, my focus is on creating exceptional user experiences. I'm currently diving deep into React and Next.js to build modern, fast, and dynamic web applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and talks.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-800 dark:text-purple-200 border-0 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            Tech Stack
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <Card 
                key={tech.name} 
                className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {tech.category}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
