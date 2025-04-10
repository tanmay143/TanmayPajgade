"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

type EducationCardProps = {
  institution: string
  degree: string
  period: string
  gpa: string
}

export default function EducationCard({ institution, degree, period, gpa }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-xl relative overflow-hidden"
    >
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <GraduationCap className="text-purple-600" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{institution}</h3>
            <p className="text-gray-600">{degree}</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-400 mt-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{period}</span>
          </div>
          <div>
            <span className="font-medium text-purple-400">{gpa}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
