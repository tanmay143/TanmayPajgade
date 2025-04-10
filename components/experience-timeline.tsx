"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

type Experience = {
  title: string
  company: string
  period: string
  points: string[]
}

export default function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      title: "Research Developer",
      company: "University of North Carolina at Charlotte",
      period: "Jan 2025 – Present",
      points: [
        "Developed an interactive system using BAMM (Bidirectional Autoregressive Motion Model) to generate human motion from text descriptions and visualize it in real time within a Next.js and Three.js platform.",
        "Added a feature to generate customized avatars based on user-provided descriptions, leveraging SMPL-X mesh to create realistic characters that perform the described motion.",
        "Currently building a multi-modal AI that takes audio, video, and images as input to generate a 3D avatar performing the same movements, expanding human-motion synthesis capabilities.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Rethink Ledgers",
      period: "Jan 2025 – Present",
      points: [
        "Developing an AI assistant for hotels, events, and businesses, automating customer interactions via WhatsApp and phone calls using ElizaOS, with a no-code setup for easy configuration.",
        "Using Docker on GCP VMs for easy deployment and consistent library setup.",
      ],
    },
    {
      title: "Research and Development Intern",
      company: "Anytime Anywhere Healthtech",
      period: "Dec 2022 – May 2023",
      points: [
        "Trained a ResNet-50 3D CNN model on chest CT scan dataset of 18,000 patients, achieving a classification accuracy of 92%.",
        "Implemented advanced preprocessing with TorchIO and Skimage for bone tissue segmentation, reducing data size by 75% and boosting model performance.",
        "Developed a pipeline to detect lung regions, assess infection location, and route relevant CT scans to disease-specific models, reducing time complexity by 30%.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of North Carolina at Charlotte",
      period: "Jan 2024 – Dec 2024",
      points: ["Created instructional content for 100+ students, increasing participation by 15%."],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl p-6 shadow-xl border-l-4 border-purple-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full opacity-30 -mr-10 -mt-10"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-purple-400">{exp.company}</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0 text-gray-400">
              <Calendar size={16} className="mr-2" />
              <span>{exp.period}</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-600">
            {exp.points.map((point, i) => (
              <li key={i} className="flex">
                <span className="mr-2 text-purple-600">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
