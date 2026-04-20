import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="text-3xl font-black tracking-tight flex items-center gap-2">
              Digital<span className="text-blue-500">Garvit</span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
              Transforming businesses through data-driven digital marketing and strategic growth engineering. Based in India, serving globally.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin />, name: "LinkedIn" },
                { icon: <Twitter />, name: "Twitter" },
                { icon: <Instagram />, name: "Instagram" },
                { icon: <Github />, name: "GitHub" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-3 rounded-full bg-muted hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="sr-only">{social.name}</span>
                  {React.cloneElement(social.icon as React.ReactElement, { className: "h-5 w-5" })}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Me", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase">Email</span>
                  <a href="mailto:digitalgarvits@gmail.com" className="font-medium hover:text-blue-500 transition-colors">digitalgarvits@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase">Phone</span>
                  <a href="tel:+919992221576" className="font-medium">+91 9992221576</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Digital Garvit.</p>
            <span className="w-1 h-1 rounded-full bg-border md:block hidden" />
            <p>Made with passion for growth.</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from "react"
