/**
 * About Page
 * Modern Minimalist Professional Design
 * - Personal bio and background
 * - Skills and expertise
 * - Education and experience
 */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, Briefcase, Award } from 'lucide-react';

export default function About() {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'Database Design', 'REST APIs', 'Authentication'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'npm/pnpm', 'Vite'],
  };

  const experience = [
    {
      title: 'Web Development Student',
      company: 'BSIT Program',
      period: '2024 - Present',
      description:
        'Pursuing a degree in Bachelor of Science in Information Technology with focus on web development and software engineering.',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2023 - Present',
      description:
        'Building custom web applications and systems for small businesses. Specializing in inventory management and productivity tools.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-secondary/30 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about building web solutions that make a difference
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="section-heading">Who I Am</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Romel Premacio, a BSIT student and aspiring web developer
                  from the Philippines. I have a passion for creating clean,
                  efficient web applications that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey in web development started with a curiosity about
                  how websites work. Since then, I've been learning and building
                  projects that help small businesses manage their operations
                  more efficiently.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating
                  user-friendly interfaces. When I'm not coding, I enjoy
                  learning new technologies and contributing to open-source
                  projects.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="flex justify-center">
                <div className="w-72 h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-8xl mb-2">🎓</div>
                    <p className="text-sm">About Me Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container">
            <h2 className="section-heading">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="project-card">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="text-accent" size={28} />
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                </div>
                <ul className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="project-card">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-accent" size={28} />
                  <h3 className="text-xl font-bold">Backend Development</h3>
                </div>
                <ul className="space-y-2">
                  {skills.backend.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div className="project-card">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-accent" size={28} />
                  <h3 className="text-xl font-bold">Tools & Technologies</h3>
                </div>
                <ul className="space-y-2">
                  {skills.tools.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="section-heading">Experience</h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-accent pl-6 py-2"
                  style={{
                    animation: `slideUp 0.3s ease-out ${index * 100}ms both`,
                  }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent font-semibold mb-1">{item.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.period}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or just
              having a chat about web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:romel@example.com"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
              >
                Send Me an Email
              </a>
              <a
                href="/"
                className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
