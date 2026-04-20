"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BarChart, Target, TrendingUp } from "lucide-react"

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <div className="overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[100px] animate-blob animation-delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-sm font-medium">
            Welcome to my creative space
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Helping Brands Grow with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Data-Driven
            </span> Digital Marketing
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I&apos;m Garvit, a Digital Marketing Specialist dedicated to scaling businesses through innovative strategies, SEO, and performance marketing.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2">
              View Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full border border-border hover:bg-muted font-medium transition-colors">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Clients Powered", value: "50+" },
              { label: "Ad Spend Managed", value: "$1M+" },
              { label: "Campaigns Run", value: "200+" },
              { label: "Revenue Generated", value: "$5M+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise That Drives Results</h2>
          <p className="text-xl text-muted-foreground">Comprehensive digital solutions tailored to elevate your brand&apos;s online presence and maximize ROI.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="h-8 w-8 text-blue-500" />,
              title: "SEO Optimization",
              description: "Dominate search results and drive organic traffic with proven SEO strategies."
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
              title: "Performance Marketing",
              description: "Data-driven ad campaigns designed to maximize ROI across platforms."
            },
            {
              icon: <BarChart className="h-8 w-8 text-pink-500" />,
              title: "Brand Strategy",
              description: "Build a compelling brand narrative that resonates with your target audience."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-muted">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Link href="/services" className="text-sm font-semibold flex items-center gap-1 hover:text-blue-500 transition-colors">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to scale your business?</h2>
          <p className="text-xl text-blue-100 mb-10">Let&apos;s discuss how we can work together to achieve your growth objectives.</p>
          <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:scale-105 transition-transform flex items-center gap-2">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
