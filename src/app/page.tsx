"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart, Target, TrendingUp, CheckCircle2, Star, Quote } from "lucide-react"

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
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
            Helping Brands Grow with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Data-Driven
            </span> Digital Marketing
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I&apos;m Garvit, a Digital Marketing Specialist dedicated to scaling businesses through innovative strategies, SEO, and performance marketing.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="w-full sm:w-auto px-10 py-5 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
              View My Work <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-full border-2 border-border hover:bg-muted font-bold transition-all">
              Work With Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 min-h-[400px]">
              <Image 
                src="/images/portrait.png" 
                alt="Garvit" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-3xl -z-0 blur-2xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-3xl -z-0 blur-2xl opacity-50" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">A Little About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold">Why I do what I do</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Hisar, Haryana, I&apos;ve spent years honing the art of digital growth. I don&apos;t just run ads; I build sustainable systems that turn strangers into loyal customers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My methodology is simple: Data doesn&apos;t lie. By combining hard analytics with creative storytelling, I help brands find their voice in a crowded digital landscape.
            </p>
            <div className="pt-4 space-y-3">
              {[
                "Data-driven marketing strategies",
                "Conversion-led SEO and SEM",
                "High-performance ad management",
                "Branding that resonates"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link href="/about" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                The Full Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50 border-y border-border/50">
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
                <motion.h3 
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-500 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">Services That Drive Real Impact</h2>
          <p className="text-xl text-muted-foreground">Comprehensive digital solutions tailored to elevate your brand&apos;s online presence and maximize ROI through data-backed strategies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="h-10 w-10 text-blue-500" />,
              title: "SEO Optimization",
              description: "Dominate search results and drive high-intent organic traffic with proven, ethical SEO strategies tailored to your niche.",
              features: ["On-page Audit", "Keyword Strategy", "Authority Building"]
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
              title: "Performance Marketing",
              description: "Data-driven ad campaigns (Meta, Google, LinkedIn) designed to maximize every dollar of your ad spend.",
              features: ["A/B Testing", "Retargeting", "Conversion Tracking"]
            },
            {
              icon: <BarChart className="h-10 w-10 text-pink-500" />,
              title: "Digital Strategy",
              description: "Holistic marketing funnels that guide prospects from awareness to conversion through strategic touchpoints.",
              features: ["Funnel Design", "Audience Research", "Growth Roadmap"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-10 rounded-[3rem] border border-border bg-card hover:bg-muted/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="mb-8 inline-block p-5 rounded-3xl bg-muted group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Work Spotlight</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">Crafting Growth Stories</h2>
          </div>
          <Link href="/portfolio" className="px-8 py-4 rounded-full border border-border font-bold hover:bg-muted transition-colors flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "E-commerce Giant",
              category: "Performance Marketing",
              image: "/images/project1.png",
              result: "300% Growth",
              description: "Scaling a fashion brand from 0 to $100k/month in ad revenue using granular audience targeting."
            },
            {
              title: "SaaS Innovation",
              category: "Lead Generation",
              image: "/images/project1.png", 
              result: "500+ MQLs",
              description: "Implementing a multi-channel LinkedIn and Google Search funnel for a B2B tech startup."
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 p-1.5 rounded-full glass px-4 text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-lg mb-4">{project.description}</p>
              <div className="flex items-center gap-2 text-blue-500 font-bold">
                <CheckCircle2 className="h-5 w-5" /> {project.result}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Client Love</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Trusted by Forward-Thinking Brands</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "CEO, Nexo Digital",
                content: "Garvit transformed our digital approach. His focus on data rather than just 'feeling' led to our best quarter in 5 years.",
                rating: 5
              },
              {
                name: "Sarah Chen",
                role: "Marketing Director at Flow",
                content: "The level of transparency and technical skill Garvit brings is rare. Our cost per lead dropped by 40% in just two months.",
                rating: 5
              },
              {
                name: "James Wilson",
                role: "Founder, Peak Performance",
                content: "Expertise that actually translates to profit. If you want growth that is measurable, Garvit is your person.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-card border border-border flex flex-col items-start"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-500/20 mb-6" />
                <p className="text-xl font-medium mb-10 italic leading-relaxed text-card-foreground/90">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[4rem] overflow-hidden bg-foreground p-12 md:p-24 text-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-500 blur-[120px]" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-purple-500 blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-background mb-8 leading-tight">Ready to take your brand to the next level?</h2>
            <p className="text-xl text-background/70 mb-12 max-w-2xl mx-auto">
              Whether you&apos;re a startup or an established enterprise, let&apos;s build a digital presence that actually converts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto px-12 py-6 rounded-full bg-background text-foreground font-bold hover:scale-105 transition-transform shadow-xl shadow-white/10">
                Book a Strategy Call
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto px-12 py-6 rounded-full border-2 border-background/20 text-background font-bold hover:bg-background/10 transition-colors">
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
