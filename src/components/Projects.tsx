"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PVADeals",
    description:
      "Deals and offers platform with real-time notifications and state management for optimal user experience.",
    technologies: ["React Native", "GraphQL", "Zustand", "OneSignal"],
    image: "/pva_ss1.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.pvadeals",
    //githubUrl: "#",
    category: "Deals",
  },
  {
    title: "Gymfans App",
    description:
      "Fitness tracking and gym management application with subscription management and workout planning features.",
    technologies: ["Flutter", "Dart", "AWS Amplify", "Stripe"],
    image: "/gymfans_ss1.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.gymfans",
    //githubUrl: "#",
    category: "Fitness",
  },
  {
    title: "Shopido",
    description:
      "E-commerce mobile application with real-time communication features including VoIP and video calling capabilities.",
    technologies: [
      "React Native",
      "TypeScript",
      "Agora",
      "VoIP",
      "Firebase",
      "RazorPay",
      "Socket.io",
    ],
    image: "/shopido_ss1.png",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.liveshopping.buyer&hl=en",
    //githubUrl: "#",
    category: "E-commerce",
  },

  // {
  //   title: "Mochi Matrimony",
  //   description:
  //     "Matrimonial application with payment integration and in-app purchase features for premium services.",
  //   technologies: ["Flutter", "Razorpay", "In-App Purchase"],
  //   image: "/mm_ss1.png",
  //   liveUrl:
  //     "https://play.google.com/store/apps/details?id=com.techwebsoft.mochimatrimony",
  //   githubUrl: "#",
  //   category: "Matrimony",
  // },
  // {
  //   title: "NoTab",
  //   description:
  //     "Restaurant management application with payment processing and analytics integration for business insights.",
  //   technologies: ["React Native", "Stripe", "Mixpanel", "Seats.io"],
  //   image: "Restaurant",
  //   liveUrl: "https://apkpure.com/notab",
  //   githubUrl: "#",
  //   category: "Restaurant",
  // },
  // {
  //   title: "Foody Savior",
  //   description:
  //     "Food delivery and restaurant discovery app with real-time tracking and payment processing capabilities.",
  //   technologies: ["React Native", "Redux", "Firebase", "Stripe"],
  //   image: "Food",
  //   liveUrl: "https://apkcombo.com/foody-savior",
  //   githubUrl: "#",
  //   category: "Food Delivery",
  // },
  // {
  //   title: "Hatke Fashion",
  //   description:
  //     "Fashion e-commerce platform with GraphQL API integration for efficient data management and user experience.",
  //   technologies: ["React Native", "GraphQL"],
  //   image: "Fashion",
  //   liveUrl: "https://apkcombo.com/hatke-fashion",
  //   githubUrl: "#",
  //   category: "Fashion",
  // },
  // {
  //   title: "Hallo Dealer",
  //   description:
  //     "Dealer management application with customer support integration and real-time communication features.",
  //   technologies: ["React Native", "Freshchat", "Firebase"],
  //   image: "Dealer",
  //   liveUrl: "https://apkcombo.com/hallo-dealer",
  //   githubUrl: "#",
  //   category: "Business",
  // },
  // {
  //   title: "Pexit App",
  //   description:
  //     "Android native application with custom UI/UX design and local database management.",
  //   technologies: ["Android", "Java"],
  //   image: "Android",
  //   liveUrl: "https://apkcombo.com/pexit-app",
  //   githubUrl: "#",
  //   category: "Android",
  // },
  // {
  //   title: "Leen-Alkhair",
  //   description:
  //     "Islamic finance application with SQLite database and native Android development.",
  //   technologies: ["Android", "Java", "SQLite"],
  //   image: "Finance",
  //   liveUrl: "https://play.google.com/store/apps/details?id=com.leenalkhair",
  //   githubUrl: "#",
  //   category: "Finance",
  // },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in mobile development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-96 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt="TEST"
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {/* <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a> */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
