'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Globe, Code, Smartphone, Video, FileText, Search, 
  Menu, X, MessageCircle, Send, ArrowRight, ArrowUpRight,
  Star, Quote, CheckCircle, Mail, Phone, MapPin, 
  Building2, TrendingUp, Users, Shield, Clock, Award,
  ChevronLeft, ChevronRight, Linkedin, Twitter, Facebook
} from 'lucide-react'

// ============================================
// CHATBOT COMPONENT
// ============================================
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome to Synapse Digital.\n\nHow may we assist with your IT needs today?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    
    setMessages(prev => [...prev, { type: 'user', text: input }])
    
    const userMsg = input.toLowerCase()
    let botResponse = ''
    
    if (userMsg.includes('price') || userMsg.includes('cost')) {
      botResponse = 'Our enterprise solutions are tailored to your specific requirements.\n\nPlease contact our team for a customized quote based on your project scope.'
    } else if (userMsg.includes('service')) {
      botResponse = 'We offer:\n• Enterprise Web Solutions\n• Mobile Application Development\n• Video Production\n• Presentation Design\n• SEO & Digital Marketing\n• IT Consulting'
    } else if (userMsg.includes('contact')) {
      botResponse = 'You can reach us:\n• Email: rahulraj.cg@gmail.com\n• Phone: +91 8073008938\n\nOr fill out the contact form on our website.'
    } else {
      botResponse = 'Thank you for your inquiry. Our team will review your message and respond within 24 business hours.'
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
    }, 600)
    
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-navy-900 hover:bg-gold-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white group-hover:text-navy-900" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:text-navy-900" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-navy-100 overflow-hidden">
          <div className="bg-navy-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-navy-900" />
              </div>
              <span className="text-white font-semibold">Synapse Digital</span>
            </div>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-cream-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg text-sm whitespace-pre-line ${
                  msg.type === 'user' 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-white border border-navy-100 text-navy-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSend} className="p-4 border-t border-navy-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-navy-200 rounded-lg text-sm focus:outline-none focus:border-gold-500"
              />
              <button type="submit" className="p-2 bg-navy-900 text-white rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              scrolled ? 'bg-navy-900' : 'bg-navy-900'
            }`}>
              <Globe className="w-5 h-5 text-gold-500" />
            </div>
            <span className="text-xl font-bold text-navy-900">
              Synapse <span className="text-gold-500">Digital</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-navy-600 hover:text-navy-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-navy-900 text-white font-medium rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all"
            >
              Get Started
            </a>
          </div>

          <button 
            className="md:hidden text-navy-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-3 text-navy-700 hover:bg-cream-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-navy-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900/5 skew-x-12 transform origin-top-right" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-navy-700">Trusted by 100+ Enterprises</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight"
            >
              Enterprise IT
              <br />
              <span className="text-gold-500">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-navy-600 mb-8 max-w-lg leading-relaxed"
            >
              We deliver strategic technology solutions that drive business growth 
              and operational excellence for forward-thinking organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-navy-900 text-white font-semibold rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="#portfolio"
                className="px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all"
              >
                View Case Studies
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Corporate Office"
                className="rounded-3xl shadow-2xl w-full"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-navy-900">300%</p>
                    <p className="text-sm text-navy-600">Average ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
  ]

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="deco-line mb-6" />
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
              Driving Digital Transformation
            </h2>
            
            <p className="text-navy-600 text-lg mb-6 leading-relaxed">
              Synapse Digital partners with leading organizations to deliver 
              technology solutions that create lasting competitive advantage. 
              Our team of experts brings together strategic thinking and 
              technical excellence to solve complex business challenges.
            </p>
            
            <ul className="space-y-4">
              {[
                'Strategic Technology Consulting',
                'Enterprise-Grade Solutions',
                'Dedicated Project Management',
                'Ongoing Support & Maintenance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-cream-50 p-6 rounded-2xl text-center">
                <p className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</p>
                <p className="text-navy-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Enterprise-grade websites and web applications built for scale, security, and performance.',
      features: ['Custom Development', 'API Integration', 'Cloud Deployment']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Enterprise Apps']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content for corporate communications, training, and marketing.',
      features: ['Corporate Videos', 'Motion Graphics', 'Live Streaming']
    },
    {
      icon: FileText,
      title: 'Presentation Design',
      description: 'Executive-level presentations that communicate complex ideas with clarity and impact.',
      features: ['Investor Decks', 'Board Presentations', 'Data Visualization']
    },
    {
      icon: Search,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to increase visibility and drive qualified business leads.',
      features: ['SEO Strategy', 'Content Marketing', 'Analytics']
    },
    {
      icon: Building2,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize operations and drive digital transformation.',
      features: ['Tech Strategy', 'Digital Transformation', 'Process Optimization']
    },
  ]

  return (
    <section id="services" className="py-24 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="deco-line mx-auto mb-6"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-4xl font-bold text-navy-900 mb-4"
          >
            Our Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-navy-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to meet the unique needs of your organization
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl card-shadow group"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                <service.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-900 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-navy-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((f, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-navy-500">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
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

  const projects = [
    {
      title: 'Financial Services Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      description: 'Secure banking portal for a leading financial institution'
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      description: 'Patient management and telemedicine platform'
    },
    {
      title: 'Retail E-Commerce Solution',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      description: 'Omnichannel retail platform with AI recommendations'
    },
    {
      title: 'Corporate Brand Video',
      category: 'Video Production',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop',
      description: 'Brand storytelling video for Fortune 500 company'
    },
    {
      title: 'Logistics Mobile App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
      description: 'Real-time tracking and fleet management solution'
    },
    {
      title: 'Investor Relations Website',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      description: 'Public company investor portal with real-time data'
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="deco-line mx-auto mb-6"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-4xl font-bold text-navy-900 mb-4"
          >
            Case Studies
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-navy-600 max-w-2xl mx-auto"
          >
            Selected projects showcasing our expertise across industries
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-navy-900" />
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gold-500 font-medium mb-1">{project.category}</p>
              <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-navy-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
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

  const testimonials = [
    {
      content: 'Synapse Digital delivered exceptional results on our digital transformation initiative. Their strategic approach and technical expertise helped us achieve a 40% improvement in operational efficiency.',
      author: 'Rajesh Kumar',
      role: 'CTO',
      company: 'Fortune Technologies',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      content: 'Working with Synapse was a seamless experience from start to finish. They understood our complex requirements and delivered a solution that exceeded our expectations.',
      author: 'Anita Sharma',
      role: 'VP of Operations',
      company: 'Global Industries Ltd',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'
    },
    {
      content: 'The team at Synapse Digital brings both creativity and technical excellence. Our new platform has received outstanding feedback from clients and stakeholders.',
      author: 'Vikram Patel',
      role: 'CEO',
      company: 'Innovation Corp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-navy-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="w-16 h-1 bg-gold-500 mx-auto mb-6"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-4xl font-bold text-white mb-4"
          >
            Client Testimonials
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-navy-800 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                className="w-24 h-24 rounded-full object-cover border-4 border-gold-500"
              />
              
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-10 h-10 text-gold-500 mb-4" />
                
                <p className="text-xl text-white mb-6 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div>
                  <p className="text-lg font-semibold text-white">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-navy-300">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-navy-700 flex items-center justify-center text-white hover:bg-navy-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-gold-500 w-8' : 'bg-navy-700'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-navy-700 flex items-center justify-center text-white hover:bg-navy-800"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
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
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Consultation Request from ${formData.name} - ${formData.company}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:rahulraj.cg@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="deco-line mb-6" />
            
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
              Start Your Project
            </h2>
            
            <p className="text-navy-600 text-lg mb-8">
              Ready to transform your business with technology? Let's discuss your project.
            </p>

            <div className="space-y-6">
              <a href="mailto:rahulraj.cg@gmail.com" className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Email</p>
                  <p className="text-navy-900 font-medium">rahulraj.cg@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918073008938" className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Phone</p>
                  <p className="text-navy-900 font-medium">+91 8073008938</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Location</p>
                  <p className="text-navy-900 font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl card-shadow">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 corporate-input rounded-lg text-navy-900"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 corporate-input rounded-lg text-navy-900"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 corporate-input rounded-lg text-navy-900"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 corporate-input rounded-lg text-navy-900"
                  >
                    <option value="">Select Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Solutions">Mobile Solutions</option>
                    <option value="Video Production">Video Production</option>
                    <option value="IT Consulting">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-navy-700 mb-2">Project Details *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 corporate-input rounded-lg text-navy-900 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-all"
              >
                Request Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-navy-900" />
              </div>
              <span className="text-xl font-bold">
                Synapse <span className="text-gold-500">Digital</span>
              </span>
            </div>
            
            <p className="text-navy-300 max-w-sm mb-6">
              Delivering enterprise technology solutions that drive growth and 
              operational excellence for forward-thinking organizations.
            </p>
            
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-navy-300">
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Mobile Solutions</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Video Production</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-navy-300">
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-gold-500 transition-colors">Case Studies</a></li>
              <li><a href="#testimonials" className="hover:text-gold-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">© 2026 Synapse Digital. All rights reserved.</p>
          <p className="text-navy-400 text-sm">Professional IT Solutions for Enterprises</p>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
