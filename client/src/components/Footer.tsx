/**
 * Footer Component
 * Modern Minimalist Professional Design
 * - Deep slate background matching header
 * - Centered content with professional spacing
 * - Social links and copyright
 */

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:romel@example.com"
              className="hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Romel Premacio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
