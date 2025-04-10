"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SkillCategory = {
  name: string
  skills: string[]
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Languages")

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C/C++"],
    },
    {
      name: "Web Development",
      skills: [
        "React.js",
        "Next.js",
        "Express.js",
        "Node.js",
        "Angular",
        "Flask",
        "Django",
        "FastAPI",
        "REST APIs",
        "Bootstrap",
        "Three.js",
      ],
    },
    {
      name: "Machine Learning",
      skills: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "OpenCV",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "SciPy",
        "Seaborn",
        "TorchIO",
        "Nibabel",
        "FAISS",
      ],
    },
    {
      name: "Cloud & Tools",
      skills: ["AWS", "GCP", "Firebase", "Docker", "Git", "GitHub", "Postman", "LangChain", "Linux"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "Firebase", "MongoDB", "Pinecone", "PostgreSQL"],
    },
  ]

  const currentSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || []

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl relative">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.name
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
