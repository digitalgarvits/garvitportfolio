"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Plus, Minus, Globe, MessageSquare, Briefcase, CheckCircle2, Search } from "lucide-react"
import React, { useState } from "react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const faqs = [
    {
      q: "How soon can we start?",
      a: "Depending on my current workload, I can usually kick off new projects within 1-2 weeks of the initial strategy call."
    },
    {
      q: "What is your pricing model?",
      a: "I work on both project-based and monthly retainer models. Every business's needs are different, so I provide custom quotes after our first call."
    },
    {
      q: "Do you guarantee results?",
      a: "While I can't guarantee specific numbers (no one can in digital marketing), I guarantee complete transparency, high-end strategy, and a relentless focus on ROI."
    },
    {
      q: "Which industries do you specialize in?",
      a: "I have extensive experience in D2C E-commerce, B2B SaaS, and Local Service businesses."
    }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-0 space-y-32">
      {/* Ambient Backgrounds */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] -z-10 pointer-events-none"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Legendary</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Whether you have a specific project in mind or just want to explore possibilities, I am all ears.
        </p>
      </motion.div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-12"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Contact Info</h2>
            
            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "Email Me", detail: "digitalgarvits@gmail.com", link: "mailto:digitalgarvits@gmail.com" },
                { icon: <Phone />, title: "Call Me", detail: "+91 9992221576", link: "tel:9992221576" },
                { icon: <MapPin />, title: "Office Location", detail: "Hisar, Haryana, India", link: null }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="p-4 rounded-2xl bg-muted text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-blue-500 transition-colors">{item.detail}</a>
                    ) : (
                      <p className="text-muted-foreground">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-blue-500 text-white space-y-6">
            <Globe className="h-10 w-10 mb-4" />
            <h3 className="text-2xl font-bold">Global Presence</h3>
            <p className="text-blue-100 text-lg">
              Operating out of Hisar, but serving clients across USA, Europe, and India. Remote-first, results-driven.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 bg-card border-2 border-border/50 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold">Message Received!</h3>
              <p className="text-muted-foreground text-lg max-w-sm">I have received your message and will get back to you within 24 hours. Hang tight!</p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="px-8 py-3 rounded-full border border-border font-bold hover:bg-muted transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 ml-2">Name</label>
                  <input required className="w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:border-blue-500 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 ml-2">Email</label>
                  <input type="email" required className="w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:border-blue-500 outline-none transition-all" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 ml-2">Interested In</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:border-blue-500 outline-none transition-all appearance-none">
                  <option>SEO Optimization</option>
                  <option>Performance Marketing</option>
                  <option>Brand Strategy</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-foreground/70 ml-2">Message</label>
                <textarea required rows={5} className="w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:border-blue-500 outline-none transition-all resize-none" placeholder="Tell me about your project & goals..." />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-foreground text-background font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-blue-500/10"
              >
                {isSubmitting ? "Processing..." : <>Send Message <Send className="h-5 w-5" /></>}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know before we get started</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-2 border-border rounded-[2rem] overflow-hidden bg-card hover:border-blue-500/30 transition-colors"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-8 text-left flex items-center justify-between font-bold text-lg"
              >
                {faq.q}
                {activeFaq === i ? <Minus className="text-blue-500" /> : <Plus className="text-blue-500" />}
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-muted-foreground text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Working Style */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-20 pb-32">
        {[
          { icon: <MessageSquare />, title: "1. Strategy Call", desc: "We discuss your goals, current blockers, and vision." },
          { icon: <Search />, title: "2. Deep Audit", desc: "I analyze your data, competitors, and market gap." },
          { icon: <Briefcase />, title: "3. Execution", desc: "Launch campaigns and optimize relentlessly for growth." },
        ].map((step, i) => (
          <div key={i} className="text-center space-y-6 p-8">
            <div className="inline-flex p-6 rounded-full bg-blue-500/10 text-blue-500 mb-2">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
