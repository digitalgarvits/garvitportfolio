"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import React from "react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-0">
      {/* AI Animation 1 & 2: Ambient Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-[0%] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
        <p className="text-xl text-muted-foreground">
          Ready to take your digital presence to the next level? Get in touch and let's discuss how we can help you grow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="flex items-start gap-4">
              {/* AI Animation 3: Floating Icon */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 rounded-full bg-blue-500/10 text-blue-500"
              >
                <Mail className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:digitalgarvits@gmail.com" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  digitalgarvits@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:9992221576" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  +91 9992221576
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  305/18 Dogran Mohalla,<br />
                  Hisar, Haryana
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 bg-card border border-border rounded-3xl p-8"
        >
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <button onClick={() => setIsSubmitted(false)} className="text-blue-500 font-semibold hover:underline mt-4">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
