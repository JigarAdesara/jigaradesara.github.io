"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Code, Zap, Users } from "lucide-react";

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
    icon: Zap,
    title: "Third-party Integrations",
    description: "Stripe, Razorpay, OneSignal, Mixpanel",
  },
  {
    icon: Users,
    title: "Cloud & Backend",
    description: "Firebase, AWS Amplify, REST & GraphQL APIs",
  },
];

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Jigar Adesara
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Mobile Application Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Passionate mobile developer with 7+ years of experience building
              cross-platform applications. Specialized in React Native, Flutter,
              and Android development with expertise in real-time communication,
              third-party integrations, and cloud services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <area.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
