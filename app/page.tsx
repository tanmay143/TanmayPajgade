"use client"

import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import HeroAnimation from "@/components/hero-animation"
import SkillsSection from "@/components/skills-section"
import ExperienceTimeline from "@/components/experience-timeline"
import ProjectCard from "@/components/project-card"
import EducationCard from "@/components/education-card"
import AchievementCard from "@/components/achievement-card"
import ScrollProgress from "@/components/scroll-progress"
import SectionHeading from "@/components/section-heading"
import AnimatedBackground from "@/components/animated-background"
import { motion } from "framer-motion"

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <motion.div
          className="z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-teal-500 to-blue-600 animate-gradient-text">
            Tanmay Pajgade
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-700 relative inline-block">
            <span className="relative z-10">AI Engineer & Full Stack Developer</span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-200 opacity-50 rounded"></span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="mailto:tanmaypajgade@gmail.com"
              className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all"
            >
              <Mail size={16} className="text-purple-600" />
              <span>Email</span>
            </Link>
            <Link
              href="https://linkedin.com/in/tanmaypajgade"
              target="_blank"
              className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all"
            >
              <Linkedin size={16} className="text-purple-600" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/tanmay143"
              target="_blank"
              className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all"
            >
              <Github size={16} className="text-purple-600" />
              <span>GitHub</span>
            </Link>
            <Link
              href="tel:+17043635587"
              className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-full transition-all"
            >
              <Phone size={16} className="text-purple-600" />
              <span>+1 704-363-5587</span>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              href="#about"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-medium transition-all text-white shadow-lg hover:shadow-xl"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="About Me" id="about" />
          <motion.div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl" {...fadeInUp}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science graduate student at the University of North Carolina at Charlotte with a passion
              for AI, machine learning, and web development. With experience in research and development, I specialize
              in creating intelligent applications that solve real-world problems. My expertise spans from training
              complex neural networks to building interactive web applications with modern frameworks.
            </p>
            <div className="mt-6 flex items-center text-gray-400">
              <MapPin size={18} className="mr-2" />
              <span>Charlotte, North Carolina</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Education" />
          <div className="grid md:grid-cols-2 gap-6">
            <EducationCard
              institution="University of North Carolina at Charlotte"
              degree="M.S. in Computer Science"
              period="Aug 2023 – May 2025"
              gpa="GPA: 3.88/4.0"
            />
            <EducationCard
              institution="MIT ADT University, Pune, India"
              degree="B.Tech. in Computer Science"
              period="Aug 2019 – May 2023"
              gpa="CGPA: 8.19/10.0"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Technical Skills" />
          <SkillsSection />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Experience" />
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Projects" />
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Med-Memory"
              date="Sept 2024"
              description="A real-time healthcare dashboard for patient data using Next.js, Tailwind, Express.js, and Firebase. Integrated Qwen 2.5 LLM via Ollama for natural language queries and built an interactive analytics dashboard."
              achievement="Best First-Time Hackers award at ShellHacks"
              technologies={["Next.js", "Tailwind", "Express.js", "Firebase", "Ollama", "Qwen 2.5 LLM"]}
              githubUrl="https://github.com/tanmay143/med-memory"
            />
            <ProjectCard
              title="FlowGenie"
              date="Oct 2024"
              description="A tool that takes audio and text inputs to generate diagrams, streamlining flowchart creation with automated, real-time updates using Next.js, Excalidraw, and ChatGPT-4 mini API."
              technologies={["Next.js", "Excalidraw", "OpenAI API", "ChatGPT-4 mini", "Mermaid"]}
              githubUrl="https://github.com/tanmay143/flowgenie"
              liveUrl="https://flowgenie.vercel.app"
            />
            <ProjectCard
              title="DocHelp"
              date="Jan 2023 - May 2023"
              description="A MERN stack project that processes and categorizes medical images (lung abnormality and chest X-ray scans) to help doctors prioritize patients. The system preprocesses data and classifies images as normal, abnormal, or severely abnormal using VGG19 pretrained model with TensorFlow, NumPy, and image processing libraries."
              technologies={["MERN Stack", "TensorFlow", "VGG19", "NumPy", "Image Processing", "Kaggle Dataset"]}
              githubUrl="https://github.com/tanmay143/dochelp"
            />
            <ProjectCard
              title="Tuberculosis Detection Analysis"
              date="Sep 2022 - Jan 2023"
              description="Conducted a comprehensive Tuberculosis detection study using the Tbx11k dataset from 11,000 patients, resulting in a publication in IEEE. Trained and tested approximately 20 models, including DenseNet201, VGG19, and ResNet50, on both raw and preprocessed data."
              achievement="IEEE Paper Publication"
              technologies={["DenseNet201", "VGG19", "ResNet50", "TensorFlow", "PyTorch", "Data Preprocessing"]}
              githubUrl="https://github.com/tanmay143/tb-detection"
              liveUrl="https://ieeexplore.ieee.org/document/10112352"
            />
            <ProjectCard
              title="Social Distancing Monitor"
              date="Aug 2021 - Dec 2022"
              description="Implemented real-time person detection using YOLOv4 and COCO dataset, extracting spatial coordinates to monitor social distancing compliance in public spaces. Utilized OpenCV to calculate Euclidean distances between detected individuals, ensuring adherence to social distancing protocols."
              technologies={["YOLOv4", "OpenCV", "COCO Dataset", "Python", "Computer Vision"]}
              githubUrl="https://github.com/tanmay143/Monitoring-social-distancing-using-yolov4"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Achievements" />
          <div className="grid md:grid-cols-3 gap-6">
            <AchievementCard title="ShellHacks Winner" description="Best First-Time Hackers award" />
            <AchievementCard title="Lucid Programming Competition" description="2nd place" />
            <AchievementCard
              title="IEEE Paper Publication"
              description="Comparative Analysis of Tuberculosis Detection"
              link="https://ieeexplore.ieee.org/document/10112352"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-70 float"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-70 float-delay-1"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-teal-200 rounded-full opacity-70 float-delay-2"></div>

        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Get In Touch" />
          <motion.div className="bg-white rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden" {...fadeInUp}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-40"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-3 text-purple-600" size={20} />
                      <a
                        href="mailto:tanmaypajgade@gmail.com"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        tanmaypajgade@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 text-purple-600" size={20} />
                      <a href="tel:+17043635587" className="text-gray-600 hover:text-purple-600 transition-colors">
                        +1 704-363-5587
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="mr-3 text-purple-600" size={20} />
                      <a
                        href="https://linkedin.com/in/tanmaypajgade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        linkedin.com/in/tanmaypajgade
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="mr-3 text-purple-600" size={20} />
                      <a
                        href="https://github.com/tanmay143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        github.com/tanmay143
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Tanmay Pajgade. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
