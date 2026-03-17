/**
 * NotFound Page
 * Modern Minimalist Professional Design
 * - 404 error page with helpful navigation
 */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <div className="container text-center py-20">
          <h1 className="text-6xl md:text-7xl font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been
            moved or deleted. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              Go Home
            </a>
            <a
              href="/projects"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
