'use client'

import { useEffect, useState } from 'react'
import { Globe, Code, Smartphone, Video, FileText, Search, Menu, X, ChevronDown } from 'lucide-react'

const translations = {
  en: {
    hero: "Connecting Ideas to Reality",
    subtitle: "Professional IT Solutions for Your Business",
    cta: "Get Started",
    services: "Our Services",
    webDev: "Website Development",
    webDevDesc: "Modern, responsive websites that convert visitors into customers",
    mobileApps: "Mobile Apps",
    mobileAppsDesc: "Native and cross-platform apps for iOS and Android",
    videoEditing: "Video Editing",
    videoEditingDesc: "Professional video production and post-production services",
    pptDesign: "PPT Design",
    pptDesignDesc: "Stunning presentations that make an impact",
    seo: "SEO Services",
    seoDesc: "Rank higher on Google and get more organic traffic",
    itServices: "IT Services",
    itServicesDesc: "Complete IT solutions for your business needs",
    whyUs: "Why Choose Us",
    quality: "Premium Quality",
    qualityDesc: "We deliver excellence in every project",
    support: "24/7 Support",
    supportDesc: "Always here when you need us",
    affordable: "Affordable Pricing",
    affordableDesc: "Best value for your investment",
    contact: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    footer: "© 2024 Synapse Digital. All rights reserved."
  },
  de: {
    hero: "Ideen in Realität umwandeln",
    subtitle: "Professionelle IT-Lösungen für Ihr Unternehmen",
    cta: "Loslegen",
    services: "Unsere Dienstleistungen",
    webDev: "Webentwicklung",
    webDevDesc: "Moderne, responsive Websites, die Besucher in Kunden verwandeln",
    mobileApps: "Mobile Apps",
    mobileAppsDesc: "Native und plattformübergreifende Apps für iOS und Android",
    videoEditing: "Videobearbeitung",
    videoEditingDesc: "Professionelle Videoproduktion und Postproduktion",
    pptDesign: "PPT-Design",
    pptDesignDesc: "Beeindruckende Präsentationen, die Eindruck machen",
    seo: "SEO-Dienstleistungen",
    seoDesc: "Ranken Sie höher auf Google und erhalten Sie mehr organischen Traffic",
    itServices: "IT-Dienstleistungen",
    itServicesDesc: "Komplette IT-Lösungen für Ihre Geschäftsanforderungen",
    whyUs: "Warum wir",
    quality: "Premium-Qualität",
    qualityDesc: "Wir liefern Exzellenz in jedem Projekt",
    support: "24/7 Support",
    supportDesc: "Immer da, wenn Sie uns brauchen",
    affordable: "Erschwingliche Preise",
    affordableDesc: "Bestes Preis-Leistungs-Verhältnis",
    contact: "Kontakt",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Nachricht senden",
    footer: "© 2024 Synapse Digital. Alle Rechte vorbehalten."
  },
  es: {
    hero: "Conectando Ideas con la Realidad",
    subtitle: "Soluciones IT Profesionales para su Negocio",
    cta: "Empezar",
    services: "Nuestros Servicios",
    webDev: "Desarrollo Web",
    webDevDesc: "Sitios web modernos y responsivos que convierten visitantes en clientes",
    mobileApps: "Apps Móviles",
    mobileAppsDesc: "Apps nativas y multiplataforma para iOS y Android",
    videoEditing: "Edición de Video",
    videoEditingDesc: "Servicios profesionales de producción y postproducción de video",
    pptDesign: "Diseño PPT",
    pptDesignDesc: "Presentaciones impresionantes que causan impacto",
    seo: "Servicios SEO",
    seoDesc: "Ranquee más alto en Google y obtenga más tráfico orgánico",
    itServices: "Servicios IT",
    itServicesDesc: "Soluciones IT completas para las necesidades de su negocio",
    whyUs: "Por Qué Elegirnos",
    quality: "Calidad Premium",
    qualityDesc: "Entregamos excelencia en cada proyecto",
    support: "Soporte 24/7",
    supportDesc: "Siempre aquí cuando nos necesite",
    affordable: "Precios Asequibles",
    affordableDesc: "Mejor valor para su inversión",
    contact: "Contáctenos",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    send: "Enviar Mensaje",
    footer: "© 2024 Synapse Digital. Todos los derechos reservados."
  }
}

export default function Home() {
  const [lang, setLang] = useState('en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = translations[lang as keyof typeof translations]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const userLang = navigator.language.split('-')[0]
    if (['en', 'de', 'es'].includes(userLang)) {
      setLang(userLang)
    }
  }, [])

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Synapse Digital</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition">{t.services}</a>
            <a href="#why-us" className="text-gray-300 hover:text-white transition">{t.whyUs}</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">{t.contact}</a>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg border border-gray-600">
                <Globe className="w-4 h-4" />
                {languages.find(l => l.code === lang)?.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg ${lang === l.code ? 'text-blue-400' : 'text-gray-300'}`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-white py-2">{t.services}</a>
              <a href="#why-us" className="block text-gray-300 hover:text-white py-2">{t.whyUs}</a>
              <a href="#contact" className="block text-gray-300 hover:text-white py-2">{t.contact}</a>
              <div className="flex gap-2 pt-2">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setIsMenuOpen(false); }}
                    className={`px-3 py-1 rounded ${lang === l.code ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300'}`}
                  >
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            {t.cta}
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t.services}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: t.webDev, desc: t.webDevDesc },
              { icon: Smartphone, title: t.mobileApps, desc: t.mobileAppsDesc },
              { icon: Video, title: t.videoEditing, desc: t.videoEditingDesc },
              { icon: FileText, title: t.pptDesign, desc: t.pptDesignDesc },
              { icon: Search, title: t.seo, desc: t.seoDesc },
              { icon: Globe, title: t.itServices, desc: t.itServicesDesc },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t.whyUs}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t.quality, desc: t.qualityDesc },
              { title: t.support, desc: t.supportDesc },
              { title: t.affordable, desc: t.affordableDesc },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">{t.contact}</h2>
          {/* Formspree Setup: 1. Go to formspree.io/register 2. Create form 3. Replace YOUR_FORM_ID below */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">{t.name}</label>
              <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t.email}</label>
              <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t.message}</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transition">
              {t.send}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          {t.footer}
        </div>
      </footer>
    </main>
  )
}