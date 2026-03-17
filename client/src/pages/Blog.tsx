/**
 * Blog Page
 * Modern Minimalist Professional Design
 * - Blog post cards with metadata
 * - Timeline-style layout
 * - Category and date filtering
 */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      title: 'My Journey Learning Web Development',
      excerpt:
        'This article shares my experience learning HTML, CSS, and JavaScript from scratch. Discover the resources, challenges, and breakthroughs that shaped my web development journey.',
      date: 'March 10, 2026',
      author: 'Romel Premacio',
      category: 'Learning',
      readTime: 5,
    },
    {
      title: 'Why Small Businesses Need Inventory Systems',
      excerpt:
        'This blog explains how inventory systems help store owners manage products efficiently. Learn about the benefits and how technology can streamline operations.',
      date: 'March 5, 2026',
      author: 'Romel Premacio',
      category: 'Business',
      readTime: 4,
    },
    {
      title: 'Tips for Beginner Programmers',
      excerpt:
        'A comprehensive guide with practical tips for students starting their programming journey. From choosing languages to building projects, here\'s what I wish I knew.',
      date: 'February 28, 2026',
      author: 'Romel Premacio',
      category: 'Programming',
      readTime: 6,
    },
    {
      title: 'Building Responsive Web Design',
      excerpt:
        'Learn the principles and practices of responsive web design. This guide covers mobile-first approaches, media queries, and modern CSS techniques.',
      date: 'February 20, 2026',
      author: 'Romel Premacio',
      category: 'Design',
      readTime: 7,
    },
    {
      title: 'React Hooks: A Practical Guide',
      excerpt:
        'Dive deep into React Hooks and understand how to use useState, useEffect, and custom hooks effectively in your projects.',
      date: 'February 15, 2026',
      author: 'Romel Premacio',
      category: 'React',
      readTime: 8,
    },
    {
      title: 'Web Performance Optimization Tips',
      excerpt:
        'Discover practical techniques to improve your website\'s performance. From lazy loading to code splitting, optimize for speed and user experience.',
      date: 'February 10, 2026',
      author: 'Romel Premacio',
      category: 'Performance',
      readTime: 6,
    },
  ];

  const categories = ['All', 'Learning', 'Business', 'Programming', 'Design', 'React', 'Performance'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-background to-secondary/30 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Posts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts, tutorials, and insights about web development, programming,
              and building solutions for small businesses.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="border-b border-border pb-8 last:border-b-0 hover:translate-x-2 transition-transform duration-300"
                  style={{
                    animation: `slideUp 0.3s ease-out ${index * 50}ms both`,
                  }}
                >
                  <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={16} />
                      {post.author}
                    </span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-accent transition-colors">
                    <a href="#" className="no-underline">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-block text-accent font-semibold hover:text-accent/80 transition-colors"
                  >
                    Read More →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to my newsletter for the latest articles and insights
              about web development.
            </p>
            <form className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
