"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Bacancy Services Pvt Ltd",
    location: "Ahmedabad, India",
    duration: "March 2025 – Present",
    description:
      "Driving innovation and delivering high-quality cross-platform mobile solutions by leading development efforts, optimizing processes, and ensuring technical excellence.",
    achievements: [
      "Planning and task tracking using Jira, improving project transparency and delivery timelines",
      "Collaborated with cross-functional teams including QA, design, and backend to ensure smooth feature rollouts",
      "Defined and enforced mobile development best practices, enhancing code maintainability and team productivity",
      "Coordinated UAT testing and gathered feedback to continuously refine mobile user experience",
      "Analyzed crash reports and performance metrics via Firebase and other tools to proactively resolve issues",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "REST APIs",
      "Git",
      "CI/CD",
      "AWS Amplify",
    ],
    awards: [],
  },
  {
    title: "Senior Software Engineer",
    company: "Solution Analysts Pvt Ltd",
    location: "Ahmedabad, India",
    duration: "Feb 2021 – March 2025",
    description:
      "Leading mobile development initiatives and driving technical excellence across cross-platform applications.",
    achievements: [
      "Improved deployment processes and reduced roadblocks by 40%",
      "Managed mobile tech issues increasing user satisfaction by 35%",
      "Built PoCs for innovative solutions and new features",
      "Integrated third-party tools and collaborated across SDLC",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "REST APIs",
      "Git",
      "CI/CD",
      "AWS Amplify",
    ],
    awards: [
      "Productivity Power Award (Sep 2023)",
      "Rising Stars (Feb 2023)",
      "Ace of Spades (Feb 2022)",
    ],
  },
  {
    title: "React Native Developer",
    company: "Inficube Technolabs Pvt Ltd",
    location: "Ahmedabad, India",
    duration: "Jun 2020 – Feb 2021",
    description:
      "Developed cross-platform mobile applications using React Native and modern JavaScript frameworks.",
    achievements: [
      "Built cross-platform mobile applications for iOS and Android",
      "Integrated REST APIs and third-party services",
      "Created modular UI components in React Native",
      "Collaborated with design and backend teams",
      "Implemented responsive and intuitive user interfaces",
    ],
    technologies: ["React Native", "JavaScript", "Redux", "REST APIs", "Git"],
  },
  {
    title: "Android Developer",
    company: "iView Labs Pvt Ltd",
    location: "Ahmedabad, India",
    duration: "Sep 2018 – May 2020",
    description:
      "Developed native Android applications using Java and modern Android development practices.",
    achievements: [
      "Built native Android applications using Java",
      "Integrated REST APIs and push notification services",
      "Implemented responsive and intuitive UI/UX designs",
      "Optimized app performance and user experience",
      "Collaborated with cross-functional teams",
    ],
    technologies: [
      "Android",
      "Java",
      "REST APIs",
      "Push Notifications",
      "SQLite",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering (Computer Engineering)",
    institution: "Ahmedabad Institute of Technology",
    duration: "2015 – 2018",
    location: "Ahmedabad, India",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "RK University, Rajkot",
    duration: "2012 – 2015",
    location: "Rajkot, India",
  },
];

const certifications = [
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    year: "2024",
  },
  {
    name: "Introduction to Cloud Computing on AWS for Beginners",
    issuer: "AWS",
    year: "2023",
  },
  {
    name: "Flutter Dev Bootcamp with Dart",
    issuer: "Udemy",
    year: "2022",
  },
  {
    name: "React Native - The Practical Guide",
    issuer: "Udemy",
    year: "2020",
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background in mobile
            development and computer engineering.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="text-sm">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {experience.awards && (
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Awards & Recognition:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {experience.awards.map((award, idx) => (
                        <li key={idx}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-500 dark:text-gray-500 text-sm">
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-4 mt-1 text-gray-600 dark:text-gray-400 text-sm">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
