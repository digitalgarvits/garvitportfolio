"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Growth Campaign",
      category: "Performance Marketing",
      description: "Scaled an emerging D2C brand&apos;s revenue by 300% through highly optimized Meta and Google Ads funnels.",
      metrics: ["300% ROAS", "-45% CPA", "2M+ Impressions"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Lead Generation Funnel",
      category: "B2B Marketing",
      description: "Developed a comprehensive LinkedIn and Search strategy that generated high-quality MQLs for a SaaS company.",
      metrics: ["500+ Leads", "25% Conversion", "-30% CPL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media Brand Launch",
      category: "Social Media Strategy",
      description: "Orchestrated a viral social media launch campaign that established immediate brand authority and community.",
      metrics: ["50k Followers", "10% Engagement", "Viral Reach"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Local SEO Dominance",
      category: "SEO Optimization",
      description: "Helped a local service business rank #1 for all high-intent keywords in their target geographic area.",
      metrics: ["#1 Rankings", "+200% Traffic", "4x Calls"],
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <span className="text-blue-500 font-semibold tracking-wider uppercase mb-2 block">Featured Work</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
        <p className="text-xl text-muted-foreground">
          Explore how I&apos;ve helped businesses achieve unprecedented growth through strategic digital marketing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-card border border-border flex flex-col h-full"
          >
            <div className={`h-48 w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative flex items-center justify-center`}>
              <div className="text-white/20 text-9xl font-bold absolute -bottom-10 -right-10">
                0{index + 1}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <span className="text-sm font-medium text-muted-foreground mb-3 block">{project.category}</span>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{project.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-border">
                {project.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="text-center">
                    <span className="block text-sm font-bold text-foreground">{metric}</span>
                  </div>
                ))}
              </div>

              <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors mt-auto">
                View Case Study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
