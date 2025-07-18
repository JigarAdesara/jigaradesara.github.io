"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Server, Database, Zap, Users } from "lucide-react";

const expertiseAreas = [
  {
    icon: Smartphone,
    title: "Cross-platform Development",
    description: "React Native, Flutter, Android native development",
  },
  {
    icon: Code,
    title: "Real-time Communication",
    description: "VoIP, Agora, Socket.io integration",
  },
  {
    icon: Server,
    title: "Third-party Integrations",
    description: "Stripe, Razorpay, OneSignal, Mixpanel",
  },
  {
    icon: Database,
    title: "Cloud & Backend",
    description: "Firebase, AWS Amplify, REST & GraphQL APIs",
  },
  {
    icon: Zap,
    title: "UI/UX Improvement",
    description: "Responsive design, user experience optimization",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "SDLC management, cross-functional teamwork",
  },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate mobile application engineer with over 7 years of
            experience in building innovative cross-platform mobile
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I started my career as an Android developer, working on native
                applications and gradually expanded my expertise to include
                React Native and Flutter development. Over the years, I&apos;ve
                developed strong skills in cross-platform mobile development.
              </p>
              <p>
                I&apos;ve had the privilege of working with diverse teams and
                companies, helping them build scalable and maintainable mobile
                applications. My passion lies in creating user-centric solutions
                that solve real-world problems through innovative technology.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new mobile
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  7+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Technologies
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <area.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
