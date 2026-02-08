'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { 
  Globe, Code, Smartphone, Video, FileText, Search, 
  Menu, X, ChevronDown, MessageCircle, Send, ArrowRight,
  Star, Quote, Sparkles, Zap, Shield, Clock, TrendingUp,
  CheckCircle, Mail, Phone, MapPin, ExternalLink, Github,
  Twitter, Linkedin, Instagram, Play, Pause, ChevronLeft,
  ChevronRight, Layers, Cpu, Palette, BarChart3, Users
} from 'lucide-react'

// ============================================
// TYPES & INTERFACES
// ============================================
interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  color: string
}

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tech: string[]
  link: string
}

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

// ============================================
// CHATBOT COMPONENT
// ============================================
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome to Synapse Digital! 🚀\n\nI\'m here to help you transform your digital presence. What can I assist you with today?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    
    setMessages(prev => [...prev, { type: 'user', text: input }])
    
    const userMsg = input.toLowerCase()
    let botResponse = ''
    
    if (userMsg.includes('price') || userMsg.includes('cost') || userMsg.includes('₹') || userMsg.includes('pricing')) {
      botResponse = '💼 Our Pricing:\n\n• Website Development: ₹15,000 onwards\n• Mobile Apps: ₹50,000 onwards\n• Video Editing: ₹5,000/project\n• SEO Services: ₹10,000/month\n• PPT Design: ₹3,000 onwards\n\nGet a custom quote by filling our contact form!'
    } else if (userMsg.includes('service') || userMsg.includes('offer') || userMsg.includes('provide')) {
      botResponse = '🎯 Our Services:\n\n• Website Development\n• Mobile App Development\n• Video Production \u0026 Editing\n• PPT \u0026 Presentation Design\n• SEO \u0026 Digital Marketing\n• Complete IT Solutions\n\nWhich service interests you?'
    } else if (userMsg.includes('contact') || userMsg.includes('email') || userMsg.includes('phone') || userMsg.includes('reach')) {
      botResponse = '📞 Contact Us:\n\n• Email: rahulraj.cg@gmail.com\n• WhatsApp: +91 8073008938\n• Location: India\n\nOr fill the contact form below. We respond within 24 hours!'
    } else if (userMsg.includes('portfolio') || userMsg.includes('work') || userMsg.includes('project')) {
      botResponse = '🌟 Check out our portfolio! We\'ve delivered 100+ projects including:\n\n• E-commerce platforms\n• Mobile applications\n• Corporate websites\n• Brand videos\n\nScroll down to see our featured work!'
    } else if (userMsg.includes('hello') || userMsg.includes('hi') || userMsg.includes('hey')) {
      botResponse = 'Hello! 👋 Great to meet you!\n\nI can help you with:\n• Service information\n• Pricing details\n• Portfolio examples\n• Contact information\n\nWhat would you like to know?'
    } else if (userMsg.includes('time') || userMsg.includes('long') || userMsg.includes('duration')) {
      botResponse = '⏱️ Project Timelines:\n\n• Simple Website: 1-2 weeks\n• Complex Website: 3-6 weeks\n• Mobile App: 6-12 weeks\n• Video Editing: 3-7 days\n\nWe always deliver on time!'
    } else {
      botResponse = 'Thanks for reaching out! 💫\n\nFor detailed inquiries, please fill out our contact form or email us directly at rahulraj.cg@gmail.com\n\nOur team will get back to you within 24 hours with a customized solution!'
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
    }, 600)
    
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="relative w-14 h-14 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full flex items-center justify-center shadow-2xl">
          {isOpen ? (
            <X className="w-6 h-6 text-dark-900" />
          ) : (
            <MessageCircle className="w-6 h-6 text-dark-900" />
          )}
        </div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-rose rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
        className={`absolute bottom-20 right-0 w-96 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="glass rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-dark-900" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Synapse Assistant</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                  Online now
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line text-sm ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-cyan/80 text-dark-900 font-medium' 
                    : 'bg-dark-600 text-gray-200 border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-dark-800/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
              />
              <button 
                type="submit" 
                className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5 text-dark-900" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

// ============================================
// NAVIGATION COMPONENT
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'portfolio', 'testimonials', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-dark-900" />
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-white">Synapse</span>
              <span className="gradient-text"> Digital</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900 font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-accent-cyan/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                  activeSection === link.id
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900 font-semibold rounded-xl text-sm"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-900">
        {/* Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-cyan/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [180, 360, 180]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-violet/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-magenta/10 rounded-full blur-[80px]" 
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-cyan/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Available for new projects</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          We Build
          <br />
          <span className="gradient-text">Digital Excellence</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transform your vision into reality with cutting-edge technology solutions. 
          We craft premium digital experiences that drive growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900 font-bold rounded-full text-lg overflow-hidden shimmer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="group px-8 py-4 border border-white/20 text-white font-medium rounded-full text-lg hover:bg-white/5 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '100+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'API Integration', 'Performance Optimization'],
      color: 'from-accent-cyan to-accent-cyan/50'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on any device.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Publishing'],
      color: 'from-accent-violet to-accent-violet/50'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video editing and production services to elevate your brand storytelling.',
      features: ['Corporate Videos', 'Motion Graphics', 'Color Grading', 'Sound Design'],
      color: 'from-accent-magenta to-accent-magenta/50'
    },
    {
      icon: FileText,
      title: 'PPT Design',
      description: 'Stunning presentations that captivate audiences and communicate your message effectively.',
      features: ['Custom Templates', 'Data Visualization', 'Animation', 'Brand Consistency'],
      color: 'from-accent-amber to-accent-amber/50'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Data-driven digital marketing strategies to increase visibility and drive qualified traffic.',
      features: ['Technical SEO', 'Content Strategy', 'Analytics', 'PPC Campaigns'],
      color: 'from-accent-emerald to-accent-emerald/50'
    },
    {
      icon: Layers,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize operations.',
      features: ['Tech Strategy', 'Cloud Migration', 'Security Audit', 'Process Optimization'],
      color: 'from-accent-rose to-accent-rose/50'
    },
  ]

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <Zap className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm text-accent-cyan font-medium">What We Offer</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique business needs. 
            From concept to launch, we\'ve got you covered.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 to-accent-violet/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full glass rounded-3xl p-8 card-hover border border-white/5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-accent-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-accent-cyan" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// PORTFOLIO SECTION
// ============================================
function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured online store with advanced filtering, cart management, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and personal goals.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop',
      tech: ['React Native', 'Firebase', 'HealthKit'],
      link: '#'
    },
    {
      id: 3,
      title: 'Brand Video Campaign',
      category: 'video',
      description: 'Cinematic brand video for a luxury real estate company\'s new development.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      tech: ['After Effects', 'Premiere Pro', 'Color Grading'],
      link: '#'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard with real-time data visualization and comprehensive reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['React', 'D3.js', 'Node.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Corporate Rebrand',
      category: 'design',
      description: 'Complete visual identity redesign including logo, brand guidelines, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tech: ['Figma', 'Illustrator', 'Brand Strategy'],
      link: '#'
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient management system with appointment scheduling and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tech: ['Next.js', 'Prisma', 'WebRTC'],
      link: '#'
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'video', label: 'Video' },
    { id: 'design', label: 'Design' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.03)_0%,transparent_70%)]" />
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/20 mb-6">
            <Palette className="w-4 h-4 text-accent-violet" />
            <span className="text-sm text-accent-violet font-medium">Our Work</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-dark-700 border border-white/5">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent z-10 opacity-60" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  
                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-dark-900 font-semibold rounded-full flex items-center gap-2"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.tech.map((t, tidx) => (
                      <span key={tidx} className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'CEO',
      company: 'TechStart India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      content: 'Synapse Digital transformed our entire digital presence. Their attention to detail and technical expertise exceeded all expectations. The website they built has increased our leads by 300%.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Marketing Director',
      company: 'GrowthHive Solutions',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      content: 'Working with Synapse was an absolute pleasure. They understood our vision perfectly and delivered a stunning mobile app that our users love. Highly recommended for any digital project!',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'Founder',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      content: 'The video production quality from Synapse Digital is world-class. They created our brand video that perfectly captured our company\'s essence. Professional, creative, and timely delivery.',
      rating: 5
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-violet/10 rounded-full blur-[150px]" />
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-amber/10 border border-accent-amber/20 mb-6">
            <Users className="w-4 h-4 text-accent-amber" />
            <span className="text-sm text-accent-amber font-medium">Testimonials</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Client <span className="gradient-text">Stories</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don\'t just take our word for it. Here\'s what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-8 -left-4 w-20 h-20 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-2xl flex items-center justify-center opacity-20">
              <Quote className="w-10 h-10 text-white" />
            </div>

            {/* Main Testimonial */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full blur-xl opacity-50" />
                  <img 
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-dark-800"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-amber text-accent-amber" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-500">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeIndex 
                        ? 'bg-gradient-to-r from-accent-cyan to-accent-violet w-8' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>

          {/* All Testimonials Grid */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                  idx === activeIndex
                    ? 'bg-white/10 border-accent-cyan/30'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Create mailto link
    const subject = `New Project Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:rahulraj.cg@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitStatus('idle')
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rahulraj.cg@gmail.com', href: 'mailto:rahulraj.cg@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8073008938', href: 'tel:+918073008938' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
  ]

  const services = [
    'Website Development',
    'Mobile App Development',
    'Video Production',
    'PPT Design',
    'SEO & Marketing',
    'IT Consulting',
    'Other'
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px]" />
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-6">
            <MessageCircle className="w-4 h-4 text-accent-emerald" />
            <span className="text-sm text-accent-emerald font-medium">Get In Touch</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Let\'s Build <span className="gradient-text">Together</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? We\'d love to hear about your project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-cyan/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 flex items-center justify-center group-hover:from-accent-cyan/30 group-hover:to-accent-violet/30 transition-all">
                    <info.icon className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-cyan/20 hover:border-accent-cyan/30 transition-all"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-accent-cyan" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900 font-bold rounded-xl hover:shadow-lg hover:shadow-accent-cyan/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We\'ll get back to you within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER SECTION
// ============================================
function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Video Production', href: '#services' },
      { label: 'SEO & Marketing', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Work', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-dark-900" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Synapse</span>
                <span className="gradient-text"> Digital</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming ideas into digital reality. We craft premium web experiences that drive growth and innovation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-cyan/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-cyan transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-cyan transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-cyan transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Synapse Digital. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <span className="text-accent-rose">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-900">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Chatbot */}
      <Chatbot />
    </main>
  )
}
