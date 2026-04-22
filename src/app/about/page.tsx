"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Coffee, Book, Target, Zap, Heart } from "lucide-react"

export default function About() {
  const skills = [
    { name: "SEO Optimization", level: 95 },
    { name: "Google & Meta Ads", level: 90 },
    { name: "Content Strategy", level: 85 },
    { name: "Social Media Marketing", level: 92 },
    { name: "Data Analytics", level: 88 },
    { name: "Email Marketing", level: 85 },
  ]

  const milestones = [
    { year: "2019", title: "Started My Journey", desc: "First steps into the world of digital marketing with a focus on SEO." },
    { year: "2020", title: "Certifications & Mastery", desc: "Became Google Ads and HubSpot certified, managing first $10k ad budget." },
    { year: "2021", title: "D2C Scaling Specialist", desc: "Helped 5+ local brands scale to 7-figure annual revenue." },
    { year: "2023", title: "Digital Garvit Brand Launch", desc: "Established my own consultancy focused on high-performance marketing." },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Meet the person behind the brand</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">The Story of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Garvit</span></h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          I&apos;m not just a marketer; I&apos;m a growth partner. Based in Hisar, I bridge the gap between complex digital data and human-centric brand building.
        </p>
      </motion.div>

      {/* Hero-like Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold">My Digital Journey</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              It all started with a simple question: <span className="text-foreground font-semibold italic">&quot;How do some brands grow so fast while others struggle?&quot;</span> This curiosity led me down the rabbit hole of search algorithms, consumer psychology, and performance data.
            </p>
            <p>
              Over the last few years, I&apos;ve transformed from a curious observer to a strategic executor. I&apos;ve managed millions in ad spend and helped dozens of businesses find their footing in an increasingly competitive digital landscape.
            </p>
            <p>
              My philosophy is rooted in <span className="text-blue-500 font-bold underline decoration-2 underline-offset-4">Radical Transparency</span>. Whether the data is good or bad, it tells a story. My job is to listen to that story and rewrite it for success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-3xl bg-muted/50 border border-border">
              <h4 className="text-3xl font-bold mb-1">5+</h4>
              <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-6 rounded-3xl bg-muted/50 border border-border">
              <h4 className="text-3xl font-bold mb-1">100%</h4>
              <p className="text-sm font-medium text-muted-foreground">Dedication</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-border/50 rounded-[3rem] p-10 shadow-2xl shadow-blue-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Target className="text-blue-500" /> Core Competencies
          </h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-sm tracking-wide uppercase">{skill.name}</span>
                  <span className="text-blue-500 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Milestones & Achievements</h2>
          <p className="text-muted-foreground">A brief timeline of my professional growth</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-blue-500 border-4 border-background z-10" />
                <div className="w-full md:w-1/2 text-center md:text-left space-y-2 group">
                  <span className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors">{m.year}</span>
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <p className="text-muted-foreground">{m.desc}</p>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision (Modified) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div className="p-12 rounded-[3rem] bg-blue-500 text-white shadow-xl shadow-blue-500/20">
          <Zap className="h-12 w-12 mb-6" />
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-blue-100 leading-relaxed">
            To empower businesses with cutting-edge digital marketing strategies that foster sustainable growth, enhance brand loyalty, and drive exceptional return on investment through pure data-driven strategy.
          </p>
        </div>
        <div className="p-12 rounded-[3rem] bg-card border-2 border-border shadow-xl">
          <Heart className="h-12 w-12 mb-6 text-purple-500" />
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To be the catalyst for transformative digital success, where innovative marketing meets measurable outcomes, creating market leaders in every industry we touch.
          </p>
        </div>
      </motion.div>

      {/* Hobbies / Personal Side */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-16">Beyond the Laptop</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Coffee />, label: "Coffee Aficionado" },
            { icon: <Book />, label: "Avid Reader" },
            { icon: <Calendar />, label: "Lifelong Learner" },
            { icon: <Award />, label: "Tech Enthusiast" },
          ].map((hobby, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-muted/30 border border-border group"
            >
              <div className="mb-4 text-blue-500 flex justify-center transform group-hover:scale-125 transition-transform duration-300">
                {hobby.icon}
              </div>
              <p className="font-bold">{hobby.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 pb-32">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Want to start a project?</h2>
        <div className="flex justify-center gap-6">
          <a href="/contact" className="px-10 py-5 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform">
            Let&apos;s Connect
          </a>
        </div>
      </section>
    </div>
  )
}
