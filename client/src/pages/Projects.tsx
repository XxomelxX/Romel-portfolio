/**
 * Projects Page
 * Modern Minimalist Professional Design
 * - Comprehensive project showcase
 * - Grid layout with varied card sizes
 * - Detailed project descriptions
 */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Small Inventory System',
      description:
        'This system allows small store owners to monitor inventory and update stock records digitally. Features include real-time stock tracking, low-stock alerts, and comprehensive reporting.',
      tags: ['React', 'Node.js', 'Database', 'Business'],
    },
    {
      title: 'Student Task Manager',
      description:
        'A web application that helps students organize assignments and track deadlines. Includes calendar integration, priority levels, and progress tracking.',
      tags: ['React', 'Web App', 'Productivity'],
    },
    {
      title: 'E-commerce Layout',
      description:
        'A simple online store interface that allows users to browse and view products. Demonstrates responsive design and modern UI patterns.',
      tags: ['React', 'UI/UX', 'E-commerce'],
    },
    {
      title: 'Personal Blog Platform',
      description:
        'A blogging platform built with modern web technologies. Features include markdown support, categories, and search functionality.',
      tags: ['Next.js', 'Blog', 'CMS'],
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather application with location-based forecasts. Integrates with weather APIs and provides detailed meteorological data.',
      tags: ['API', 'React', 'Real-time'],
    },
    {
      title: 'Expense Tracker',
      description:
        'Personal finance management tool for tracking expenses and budgets. Includes charts, categories, and monthly reports.',
      tags: ['React', 'Finance', 'Charts'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-background to-secondary/30 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of web applications and systems I've built to solve
              real-world problems for businesses and individuals.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
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

        {/* Additional Info */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              More Projects Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm constantly working on new projects and improving existing
              ones. Check back regularly for updates and new additions to my
              portfolio.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
