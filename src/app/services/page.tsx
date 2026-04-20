"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Users, Target, Smartphone, Lightbulb, CheckCircle2, Zap, BarChart3, ShieldCheck } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Services() {
  const services = [
    {
      icon: <Search />,
      title: "SEO Optimization",
      description: "Improve your organic rankings and drive high-quality traffic with comprehensive technical, on-page, and off-page SEO strategies.",
      list: ["Technical SEO Audit", "Keyword Research", "Link Building"]
    },
    {
      icon: <TrendingUp />,
      title: "Performance Marketing",
      description: "Data-driven ad campaigns designed to maximize your ROI across various paid channels including Google Ads and Social Media.",
      list: ["Conversion Tracking", "Budget Management", "A/B Testing"]
    },
    {
      icon: <Users />,
      title: "Social Media Strategy",
      description: "Build an engaging community around your brand with strategic content creation, publishing, and community engagement.",
      list: ["Content Calendar", "Community Growth", "Influencer Collabs"]
    },
    {
      icon: <Target />,
      title: "Google Ads Campaigns",
      description: "Highly targeted search, display, and video campaigns crafted to reach users exactly when they are searching.",
      list: ["Search & Display", "Shopping Ads", "Video Campaigns"]
    },
    {
      icon: <Smartphone />,
      title: "Meta/Facebook Ads",
      description: "Leverage the power of extreme audience targeting to acquire customers at the lowest possible cost-per-acquisition.",
      list: ["High-CTR Creatives", "Lookalike Audiences", "Funnel Design"]
    },
    {
      icon: <Lightbulb />,
      title: "Brand Strategy",
      description: "Holistic marketing roadmaps tailored to your long-term vision, ensuring consistent and scalable business growth.",
      list: ["Brand Identity", "Growth Mapping", "Competitor Analysis"]
    }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Scalable Growth</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Marketing Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Digital Age</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I don&apos;t just provide services; I provide solutions. Every campaign is a precision-engineered growth engine designed to deliver measurable ROI.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 rounded-[3rem] bg-card border-2 border-border/50 hover:border-blue-500 transition-all duration-500 relative"
          >
            <div className="mb-8 p-5 bg-muted text-blue-500 inline-block rounded-[2rem] group-hover:bg-blue-500 group-hover:text-white transition-all">
               {React.cloneElement(service.icon as React.ReactElement, { className: "h-8 w-8" })}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-8 line-clamp-3 group-hover:line-clamp-none transition-all">
              {service.description}
            </p>
            <ul className="space-y-4 pt-4 border-t border-border">
              {service.list.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Section */}
      <section className="py-24 p-12 md:p-24 rounded-[4rem] bg-muted/50 border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Why Brands Choose <br />Digital Garvit</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In a world full of &quot;guru-style&quot; marketing, I bring back the discipline of data science and creative logic to your campaigns.
            </p>
            <div className="space-y-6 pt-4">
              {[
                { icon: <Zap />, title: "Precision Execution", desc: "No guesswork. Every move is backed by historical data." },
                { icon: <BarChart3 />, title: "Transparent ROI", desc: "Real-time dashboards that show exactly where your money goes." },
                { icon: <ShieldCheck />, title: "Brand Safety", desc: "Scalable growth without compromising your brand integrity." },
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-12 rounded-[2.5rem] bg-card border border-border shadow-xl text-center flex flex-col items-center">
              <span className="text-5xl font-black text-blue-500 mb-2">95%</span>
              <span className="text-sm font-bold text-muted-foreground">Client Retention</span>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-foreground text-background shadow-xl text-center flex flex-col items-center mt-12">
              <span className="text-5xl font-black mb-2">3x</span>
              <span className="text-sm font-bold text-muted-foreground">Avg. ROAS</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 pb-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-10">Found your roadmap? <br />Let&apos;s execute.</h2>
        <Link href="/contact" className="px-12 py-6 rounded-full bg-blue-500 text-white font-black text-xl hover:scale-105 transition-transform inline-block shadow-2xl shadow-blue-500/30">
          Book Your Free Audit
        </Link>
      </section>
    </div>
  )
}
