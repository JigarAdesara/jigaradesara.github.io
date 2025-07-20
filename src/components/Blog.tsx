"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable Mobile Apps with React Native",
    summary:
      "A comprehensive guide on architecting React Native applications for scale, covering state management, performance optimization, and best practices for enterprise-level mobile development.",
    date: "July 15, 2025",
    readTime: "4 min read",
    category: "Mobile Development",
    tags: ["React Native", "Architecture", "Performance", "Scalability"],
    link: "https://medium.com/@jigaradesara1/building-scalable-mobile-apps-with-react-native-cda9b08c810d",
  },
  // {
  //   title: "Implementing Real-time Features with WebSocket and Socket.io",
  //   summary:
  //     "Deep dive into implementing real-time communication features in mobile and web applications using WebSocket and Socket.io, with practical examples and performance considerations.",
  //   date: "February 28, 2024",
  //   readTime: "12 min read",
  //   category: "Backend Development",
  //   tags: ["WebSocket", "Socket.io", "Real-time", "Node.js"],
  //   link: "https://medium.com/@jigaradesara/implementing-real-time-features-with-websocket",
  // },
  // {
  //   title: "Flutter vs React Native: A Developer's Perspective",
  //   summary:
  //     "An in-depth comparison of Flutter and React Native based on real-world experience, covering development speed, performance, ecosystem, and when to choose each framework.",
  //   date: "January 20, 2024",
  //   readTime: "10 min read",
  //   category: "Mobile Development",
  //   tags: ["Flutter", "React Native", "Comparison", "Mobile"],
  //   link: "https://medium.com/@jigaradesara/flutter-vs-react-native-comparison",
  // },
];

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing insights and knowledge from my experience in mobile and
            backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Blog Header */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Read More Link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@jigaradesara1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
