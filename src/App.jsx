import React, { useState } from 'react';
// Using Lucide icons for a clean look
import { Menu, X, Briefcase, BrainCircuit, Activity, CheckCircle, Users, Code, Phone, FileText } from 'lucide-react';

// Main App Component
function App() {
  // --- State Hooks ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Data Definitions ---
  const companyName = 'regenmedAI';
  const contactEmail = 'info@regenmedAI.com';
  const location = 'Wildomar, CA 92595';
  const experienceBlurb =
    'With over 15 years of combined experience across emergency care, director of nursing leadership in ASCs, aesthetic medicine, and administrative medical operations—including coding and billing—regenmedAI brings both clinical and operational expertise to every AI integration project.';

  const services = [
    { title: 'AI Strategy & Roadmap', description: 'Tailored AI blueprints for operational efficiency and clinical innovation.', icon: Briefcase },
    { title: 'Clinical Workflow Automation', description: 'Integrating intelligent automation into your existing systems seamlessly.', icon: BrainCircuit },
    { title: 'Predictive Analytics & Insights', description: 'Leveraging data to forecast trends, optimize resources, and enhance patient care.', icon: Activity },
  ];

  const mvpIntro = 'We are currently in the Minimum Viable Product (MVP) stage, actively developing and refining AI-powered solutions by leveraging our direct experience with healthcare workflows. This hands-on approach allows us to rigorously test and validate our automations within real-world contexts. Our current MVPs include:';

  const mvpProducts = [
    {
      title: 'Medical Dictation Solution (MVP)',
      description: 'An AI-powered medical dictation tool utilizing Google Cloud Voice-to-Text (medical model) to accurately transcribe clinical notes. We are currently testing this as a web application.',
      benefit: 'Designed to streamline clinical documentation. Our development roadmap includes a dedicated mobile application for enhanced accessibility in production environments. (Currently developed for use with non-PHI data during the MVP phase).'
    },
    {
      title: 'AI-Powered Appointment Scheduling Agent (MVP)',
      description: 'An intelligent phone agent built with HIPAA-compliant technologies (such as RetellAI) to manage inbound patient calls. The agent understands our specific service offerings (initially tested for aesthetic medicine) and can schedule appointments directly onto a Google Calendar.',
      benefit: 'Aims to reduce administrative burden and improve patient access by providing efficient, automated appointment booking.'
    },
    {
      title: 'Medical Coding Assistant (MVP)',
      description: 'An automation tool leveraging Gemini 2.5 to streamline the medical coding process. Users can upload scanned PDF anesthesia reports; the system then extracts patient demographics, suggests appropriate billable codes, and cross-references these with the provider\'s commonly used codes.',
      benefit: 'Designed to improve coding accuracy and efficiency. Future development plans include integration with Electronic Health Record (EHR) systems for seamless workflow.'
    }
  ];

  const mvpConclusion = 'Demos and screenshots for these MVPs are coming soon as we continue to refine our solutions.';

  const teamMembers = [
    {
      name: 'Michele Csonka',
      title: 'Co-founder',
      bio: 'Michele Csonka brings extensive hands-on clinical and leadership experience to regenmedAI. As a Medical Aesthetics Provider, she has a direct understanding of current practice needs. Her background includes serving as the Director of Nursing for an Ambulatory Surgery Center, where she successfully led the facility from its initial development to achieving Joint Commission accreditation. Michele also dedicated four years as an ER nurse, honing her skills in high-pressure medical environments. Her passion lies in rejuvenation medicine and enhancing patient care through innovation.'
    },
    {
      name: 'Zale Zuna',
      title: 'Co-founder',
      bio: 'Zale Zuna combines expertise in healthcare administration with a focused proficiency in AI development. With three years of experience providing end-to-end medical coding and billing services for a CRNA group, Zale has a practical understanding of administrative workflows and pain points. Recognizing the transformative potential of AI, Zale has dedicated significant time to intensive AI development training, including specialized learning with AI software engineering mentorship. Zale has also completed Google\'s \'Generative AI in Healthcare\' and \'Google Cloud Healthcare API\' courses through the Google Cloud Developer Program.',
      linkedIn: 'www.linkedin.com/in/zale-zuna-9044471aa'
    }
  ];

  const teamStory = 'Together, Michele and Zale identified critical pain points within the healthcare industry where AI could make a significant impact. As avid users and believers in AI\'s potential, they are developing solutions designed to empower providers to focus more on patient care and to enhance the capabilities of administrative teams. regenmedAI is their bootstrapped initiative, born from a shared vision to bring intelligent automation to modern healthcare.';

  const whyPoints = [
    'Deep clinical and operational expertise',
    'Custom-built, validated AI solutions',
    'Focus on ethical & responsible AI implementation',
    'Measurable ROI and performance tracking',
    'Collaborative partnership approach',
  ];

  // --- Event Handlers ---
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- JSX Structure ---
  return (
    <div className="bg-brand-bg text-brand-textPrimary">
      {/* === Header === */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50 top-0 transition-colors duration-300 border-b border-gradient-start/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Text */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#hero" aria-label={`${companyName} homepage`} className="text-2xl font-bold text-gradient">
                {companyName}
              </a>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-sm font-medium text-brand-textSecondary hover:text-gradient transition-colors">Services</a>
              <a href="#mvp" className="text-sm font-medium text-brand-textSecondary hover:text-gradient transition-colors">MVP Solutions</a>
              <a href="#why-us" className="text-sm font-medium text-brand-textSecondary hover:text-gradient transition-colors">Why Us</a>
              <a href="#team" className="text-sm font-medium text-brand-textSecondary hover:text-gradient transition-colors">Our Team</a>
              <a href="#contact" className="text-sm font-medium text-brand-textSecondary hover:text-gradient transition-colors">Contact</a>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} type="button" className="p-2 text-brand-textSecondary hover:text-gradient" aria-label="Toggle menu">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg py-2 border-b border-gradient-start/20">
            <nav className="container mx-auto px-4 space-y-1">
              <a href="#services" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-gradient hover:bg-brand-bgSubtle">Services</a>
              <a href="#mvp" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-gradient hover:bg-brand-bgSubtle">MVP Solutions</a>
              <a href="#why-us" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-gradient hover:bg-brand-bgSubtle">Why Us</a>
              <a href="#team" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-gradient hover:bg-brand-bgSubtle">Our Team</a>
              <a href="#contact" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-gradient hover:bg-brand-bgSubtle">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* === Main Content === */}
      <main className="pt-16"> {/* Offset for fixed header */}
        {/* --- Hero Section --- */}
        <section id="hero" className="py-20 md:py-32 bg-gradient-custom">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black mb-4">
              Intelligent Automation for Modern Healthcare
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black max-w-3xl mx-auto mb-8">
              {companyName} provides premium AI solutions, empowering healthcare providers to optimize operations and enhance patient care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-white/90 transition-opacity whitespace-nowrap">
                Request a Consultation
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black bg-transparent hover:bg-white/10 transition-colors whitespace-nowrap">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">Our Core AI Solutions</h2>
              <p className="mt-3 text-lg text-brand-textSecondary max-w-2xl mx-auto">Leveraging AI to solve specific challenges in healthcare operations and clinical workflows.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="bg-white p-6 rounded-lg border-gradient shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-gradient-custom text-white mr-4">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold text-gradient">{service.title}</h3>
                    </div>
                    <p className="text-sm text-brand-textSecondary">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- MVP Solutions Section --- */}
        <section id="mvp" className="py-16 md:py-24 bg-gradient-custom bg-opacity-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">MVP Solutions</h2>
              <p className="mt-3 text-lg text-brand-textSecondary max-w-3xl mx-auto">{mvpIntro}</p>
            </div>

            <div className="space-y-10 max-w-4xl mx-auto">
              {mvpProducts.map((product, index) => {
                // Map icons to different products
                const icons = [FileText, Phone, Code];
                const ProductIcon = icons[index];

                return (
                  <div key={product.title} className="bg-brand-bgSubtle rounded-lg p-6 border border-brand-border shadow-sm">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                          <ProductIcon size={24} aria-hidden="true" />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-primary mb-2">{product.title}</h3>
                        <p className="text-sm text-brand-textSecondary mb-4">{product.description}</p>
                        <div className="bg-white p-3 rounded border border-brand-border">
                          <h4 className="text-sm font-medium text-brand-accent mb-1">Benefits & Future Plans</h4>
                          <p className="text-sm text-brand-textSecondary">{product.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-brand-textSecondary italic">{mvpConclusion}</p>
            </div>
          </div>
        </section>

        {/* --- Why Choose Us Section --- */}
        <section id="why-us" className="py-16 md:py-24 bg-brand-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl mb-4">Why Partner with {companyName}?</h2>
                <p className="text-lg text-brand-textSecondary mb-6">
                  {experienceBlurb}
                </p>
                <ul className="space-y-3">
                  {whyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 h-5 w-5 text-brand-primary mr-2 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-brand-textSecondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block bg-brand-bgSubtle rounded-lg p-8 border border-brand-border">
                 <h3 className="text-lg font-semibold text-brand-primary mb-4">Key Focus Areas</h3>
                 <ul className="list-disc list-inside space-y-2 text-sm text-brand-textSecondary">
                    <li>Clinic Operations Optimization</li>
                    <li>Patient Journey Automation</li>
                    <li>Administrative Task Reduction</li>
                    <li>Data-Driven Decision Support</li>
                    <li>Regulatory Compliance AI</li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Team Section --- */}
        <section id="team" className="py-16 md:py-24 bg-brand-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">Our Team</h2>
              <p className="mt-3 text-lg text-brand-textSecondary max-w-2xl mx-auto">Meet the founders behind {companyName}.</p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-brand-bgSubtle p-6 rounded-lg border border-brand-border shadow-sm">
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-primary text-white mb-4">
                      <Users size={24} aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold text-brand-primary">{member.name}</h3>
                    <p className="text-sm font-medium text-brand-accent mb-2">{member.title}</p>
                    {member.linkedIn && (
                      <p className="text-sm mb-2">
                        <a href={`https://${member.linkedIn}`} className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          LinkedIn Profile
                        </a>
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-brand-textSecondary">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-base text-brand-textSecondary italic">{teamStory}</p>
            </div>
          </div>
        </section>

        {/* --- Contact Section (Simplified) --- */}
        <section id="contact" className="py-16 md:py-24 bg-brand-bgSubtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">Contact Us</h2>
              <p className="mt-3 text-lg text-brand-textSecondary mb-8">Reach out to discuss how AI can transform your practice.</p>
              
              <div className="bg-brand-bg p-6 rounded-lg border border-brand-border shadow-sm inline-block">
                 <p className="text-base text-brand-textSecondary">
                     Email: <a href={`mailto:${contactEmail}`} className="text-brand-primary hover:underline">{contactEmail}</a>
                 </p>
                 <p className="mt-2 text-base text-brand-textSecondary">
                     Location: {location}
                 </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* === Footer (Uncommented) === */}
      <footer className="bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
               <span className="text-lg font-semibold text-black">
                 {companyName}
               </span>
               <p className="text-sm text-black">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
            </div>
            <div className="text-sm text-black text-center md:text-right">
              <p>{location}</p>
              <p><a href={`mailto:${contactEmail}`} className="hover:text-black transition-colors">{contactEmail}</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;