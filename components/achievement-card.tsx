"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

type AchievementCardProps = {
  title: string
  description: string
  link?: string
}

export default function AchievementCard({ title, description, link }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Award className="text-purple-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 flex-grow">{description}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 mt-4 transition-colors"
          >
            <span className="mr-1">View Publication</span>
            <ExternalLink size={14} />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
