/**
 * Home Page
 * Modern Minimalist Professional Design
 * - Asymmetric hero section with profile image
 * - Featured projects grid
 * - Call-to-action sections
 */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = [
    {
      title: 'Small Inventory System',
      description:
        'A web system that helps small businesses track product stock and manage inventory efficiently. Built with modern web technologies for optimal performance.',
      tags: ['Web App', 'Inventory', 'Business'],
    },
    {
      title: 'Task Manager App',
      description:
        'A productivity web app that allows users to organize tasks and manage daily schedules with an intuitive interface.',
      tags: ['Productivity', 'React', 'Web App'],
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio that showcases projects, skills, and experiences with a modern, professional design.',
      tags: ['Portfolio', 'Design', 'Responsive'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-secondary/30 py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="slide-up">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Hello, I'm{' '}
                  <span className="text-accent">Romel Premacio</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I am a BSIT student and aspiring web developer who enjoys
                  building useful web applications and systems for small
                  businesses. I focus on creating clean, efficient solutions
                  that solve real problems.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/projects"
                    className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
                  >
                    View My Work
                  </a>
                  <a
                    href="/about"
                    className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center md:justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-sm">Profile Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-heading">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    animation: `slideUp 0.3s ease-out ${index * 50}ms both`,
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
            <a
              href="mailto:romel@example.com"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
