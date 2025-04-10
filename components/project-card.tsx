"use client"

import { motion } from "framer-motion"
import { Calendar, Tag, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

type ProjectCardProps = {
  title: string
  date: string
  description: string
  technologies: string[]
  achievement?: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  date,
  description,
  technologies,
  achievement,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 -mr-16 -mt-16"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {achievement && (
          <div className="mb-4 bg-purple-100 border border-purple-200 rounded-lg p-3">
            <p className="text-purple-700 font-medium">🏆 {achievement}</p>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-center mb-2 text-gray-400">
            <Tag size={14} className="mr-2" />
            <span className="text-sm">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {(githubUrl || liveUrl) && (
          <div className="flex gap-3 mt-2">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
