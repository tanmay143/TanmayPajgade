"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  id?: string
}

export default function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <motion.h2
      id={id}
      className="text-3xl md:text-4xl font-bold mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-text">
        {title}
      </span>
    </motion.h2>
  )
}
