"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/JigarAdesara",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "www.linkedin.com/in/jigaradesara1",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/jigaradesara",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:jigaradesara1@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Jigar Adesara</h3>
            <p className="text-gray-400 mb-4">
              Mobile Application Engineer with 7+ years of experience in React
              Native, Flutter, and Android development. Passionate about
              creating innovative mobile solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Ahmedabad, Gujarat, India</p>
              <p>
                <a
                  href="mailto:jigaradesara1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  jigaradesara1@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 96647 51818
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Jigar Adesara. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-sm mt-2">
            Built with React, Next.js, and Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
}
