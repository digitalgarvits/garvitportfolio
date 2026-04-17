"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Users, Target, Smartphone, Lightbulb } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-blue-500" />,
      title: "SEO Optimization",
      description: "Improve your organic rankings and drive high-quality traffic with comprehensive technical, on-page, and off-page SEO strategies."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
      title: "Performance Marketing",
      description: "Data-driven ad campaigns designed to maximize your ROI across various paid channels including Google Ads and Social Media."
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Social Media Management",
      description: "Build an engaging community around your brand with strategic content creation, publishing, and community engagement."
    },
    {
      icon: <Target className="h-10 w-10 text-red-500" />,
      title: "Google Ads Campaigns",
      description: "Highly targeted search, display, and video campaigns crafted to reach users exactly when they are searching for what you offer."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-400" />,
      title: "Meta/Facebook Ads",
      description: "Leverage the power of extreme audience targeting to acquire customers at the lowest possible cost-per-acquisition."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
      title: "Brand Growth Strategy",
      description: "Holistic marketing roadmaps tailored to your long-term vision, ensuring consistent and scalable business growth."
    }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <span className="text-blue-500 font-semibold tracking-wider uppercase mb-2 block">What I Do</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Digital Services</h1>
        <p className="text-xl text-muted-foreground">
          Transforming businesses through data-driven digital marketing solutions that deliver real, measurable results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-muted inline-block rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
