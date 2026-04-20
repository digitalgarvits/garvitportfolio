"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const skills = [
    { name: "SEO", level: 95 },
    { name: "Google Ads", level: 90 },
    { name: "Meta Ads", level: 85 },
    { name: "Social Media Marketing", level: 92 },
    { name: "Branding", level: 88 },
    { name: "Website Strategy", level: 85 },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground">
          I&apos;m a passionate Digital Marketing Specialist with a track record of driving growth and building impactful online presences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="space-y-6 text-muted-foreground text-lg">
            <p>
              With extensive experience in the ever-evolving digital landscape, I have dedicated my career to helping brands navigate the complexities of online marketing.
            </p>
            <p>
              My approach combines data-driven insights with creative strategy, ensuring that every campaign not only looks great but delivers measurable ROI.
            </p>
            <p>
              Currently based in Hisar, Haryana, I collaborate with businesses worldwide to construct robust digital marketing funnels, optimize search engine visibility, and maximize ad spend efficiency.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-8">Professional Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-blue-500" /> Our Mission
          </h3>
          <p className="text-muted-foreground">To empower businesses with cutting-edge digital marketing strategies that foster sustainable growth, enhance brand loyalty, and drive exceptional return on investment.</p>
        </div>
        <div className="p-8 rounded-3xl bg-purple-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-purple-500" /> Our Vision
          </h3>
          <p className="text-muted-foreground">To be the catalyst for transformative digital success, where innovative marketing meets measurable outcomes, creating market leaders in every industry we touch.</p>
        </div>
      </motion.div>
    </div>
  )
}
