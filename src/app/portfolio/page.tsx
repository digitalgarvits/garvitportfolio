"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "E-commerce Growth Campaign",
      category: "Performance Marketing",
      description: "Scaled an emerging D2C brand's revenue by 300% through highly optimized Meta and Google Ads funnels.",
      problem: "The client had a great product but high customer acquisition costs and stagnant revenue.",
      solution: "Implemented a full-funnel strategy with granular retargeting and dynamic creative optimization.",
      outcome: "Achieved 3x ROAS within 90 days and reduced CPA by 45%.",
      metrics: ["300% ROAS", "-45% CPA", "2M+ Impressions"],
      image: "/images/project1.png",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Lead Generation Funnel",
      category: "B2B Marketing",
      description: "Developed a comprehensive LinkedIn and Search strategy that generated high-quality MQLs for a SaaS company.",
      problem: "Low-quality leads were wasting the sales team's time and marketing budget was being drained.",
      solution: "Created a Lead Magnet based funnel with LinkedIn conversational ads and Google Search intent targeting.",
      outcome: "500+ high-intent leads generated with a 25% demo booking rate.",
      metrics: ["500+ Leads", "25% Conversion", "-30% CPL"],
      image: "/images/project1.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media Brand Launch",
      category: "Social Media",
      description: "Orchestrated a viral social media launch campaign that established immediate brand authority and community.",
      problem: "New brand entering a saturated lifestyle market with zero online presence.",
      solution: "Influencer partnership combined with a viral giveaway loop and aesthetic content strategy.",
      outcome: "50k followers in 30 days and 10% average engagement rate.",
      metrics: ["50k Followers", "10% Engagement", "Viral Reach"],
      image: "/images/project1.png",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Local SEO Dominance",
      category: "SEO",
      description: "Helped a local service business rank #1 for all high-intent keywords in their target geographic area.",
      problem: "Client was invisible on Google Maps and organic search for their core services.",
      solution: "Hyper-local content strategy and GMB optimization along with technical SEO fixes.",
      outcome: "#1 ranking for 15+ high-volume keywords and 4x increase in phone calls.",
      metrics: ["#1 Rankings", "+200% Traffic", "4x Calls"],
      image: "/images/project1.png",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const categories = ["All", "Performance Marketing", "B2B Marketing", "Social Media", "SEO"]

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Proven Results</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Success Stories</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Detailed case studies of how I have helped various brands navigate and conquer the digital landscape.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              filter === cat 
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" 
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group bg-card border-2 border-border/50 rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-xl hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden min-h-[300px]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity`} />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
                <div>
                  <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">{project.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-tighter mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-tighter mb-2">The Solution</h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 rounded-3xl bg-muted/50 border border-border">
                    {project.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-center">
                        <span className="block text-lg font-black text-blue-500">{metric.split(' ')[0]}</span>
                        <span className="block text-[10px] uppercase font-bold text-muted-foreground">{metric.split(' ').slice(1).join(' ') || 'Growth'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                   <div className="flex items-center gap-2 text-green-500 font-bold">
                     <TrendingUp className="h-4 w-4" /> Outcome: {project.outcome.split('.')[0]}
                   </div>
                   <Link href="#" className="p-4 rounded-full bg-foreground text-background hover:scale-110 transition-transform">
                     <ArrowUpRight className="h-5 w-5" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Trust Quote */}
      <section className="py-20 text-center bg-blue-500 rounded-[3rem] text-white p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">&quot;I don&apos;t just deliver reports, I deliver growth.&quot;</h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Every project is a partnership. I immerse myself in your business to find the untapped potential that typical agencies overlook.
        </p>
      </section>
    </div>
  )
}
