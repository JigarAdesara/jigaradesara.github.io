"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Smartphone,
  Code,
  Server,
  Database,
  Settings,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      { name: "React Native", proficiency: 90 },
      { name: "Flutter / Dart", proficiency: 80 },
      { name: "Android / Java", proficiency: 80 },
      { name: "iOS Development", proficiency: 70 },
      { name: "Mobile UI/UX", proficiency: 85 },
    ],
  },
  {
    icon: Code,
    title: "Frontend & State",
    skills: [
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Redux", proficiency: 85 },
      { name: "Zustand", proficiency: 85 },
      { name: "React Hooks", proficiency: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: [
      { name: "REST APIs", proficiency: 85 },
      { name: "GraphQL", proficiency: 80 },
      { name: "Firebase", proficiency: 85 },
      { name: "AWS Amplify", proficiency: 70 },
      { name: "Socket.io", proficiency: 80 },
    ],
  },
  {
    icon: Database,
    title: "Integrations & Services",
    skills: [
      { name: "Stripe", proficiency: 75 },
      { name: "Razorpay", proficiency: 80 },
      { name: "OneSignal", proficiency: 80 },
      { name: "Mixpanel", proficiency: 75 },
      { name: "VoIP / Agora", proficiency: 80 },
    ],
  },
  {
    icon: Settings,
    title: "DevOps & Tools",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "CI/CD", proficiency: 75 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS Services", proficiency: 70 },
      { name: "Firebase Console", proficiency: 85 },
    ],
  },
  {
    icon: Zap,
    title: "Performance & Testing",
    skills: [
      { name: "App Performance", proficiency: 80 },
      { name: "Code Optimization", proficiency: 85 },
      { name: "Unit Testing", proficiency: 75 },
      { name: "Integration Testing", proficiency: 70 },
      { name: "Debugging", proficiency: 90 },
    ],
  },
];

const additionalSkills = [
  "SQLite",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "WebRTC",
  "MobX",
  "Apollo Client",
  "JWT",
  "OAuth",
  "Webpack",
  "Babel",
  "ESLint",
  "Prettier",
  "Storybook",
  "Figma",
  "Postman",
  "MongoDB Compass",
  "pgAdmin",
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across
            different domains of mobile development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.6,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.proficiency}%` } : {}
                        }
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Additional Skills & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.02, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
