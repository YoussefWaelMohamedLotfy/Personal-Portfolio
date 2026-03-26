/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Terminal,
  Menu,
  X,
  Download,
  Briefcase,
  GraduationCap,
  Layers
} from 'lucide-react';
import { CV_DATA } from './constants';

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-12">
    {Icon && <Icon className="w-8 h-8 text-blue-500" />}
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
      {children}
    </h2>
    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent ml-4" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          YW<span className="text-blue-500">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">future</span> of software.
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            I'm <span className="text-white font-semibold">{CV_DATA.name}</span>, a {CV_DATA.title} based in {CV_DATA.location}. 
            Specializing in high-performance .NET systems and distributed architectures.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
              View Projects <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-zinc-900 text-white font-bold border border-white/10 hover:bg-zinc-800 transition-all flex items-center gap-2">
              Download CV <Download className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <a href={CV_DATA.github} className="text-gray-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href={CV_DATA.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${CV_DATA.email}`} className="text-gray-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">Years Exp</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="text-2xl font-bold text-blue-400">.NET</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">Specialist</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle icon={Briefcase}>Experience</SectionTitle>
        
        <div className="space-y-12">
          {CV_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l border-zinc-800 group"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 text-xs font-semibold text-gray-400 border border-white/5">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mt-2 justify-end">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex gap-3 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle icon={Layers}>Featured Projects</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {CV_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{project.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-zinc-800 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                View Details <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    { title: 'Frameworks & Languages', icon: Code2, items: CV_DATA.skills.frameworks },
    { title: 'Distributed Systems', icon: Globe, items: CV_DATA.skills.distributed },
    { title: 'DevOps & Infrastructure', icon: Cpu, items: CV_DATA.skills.devops },
    { title: 'AI & Machine Learning', icon: Terminal, items: CV_DATA.skills.ai },
    { title: 'Databases', icon: Database, items: CV_DATA.skills.database },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle icon={Cpu}>Technical Arsenal</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-zinc-900 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="px-3 py-1.5 rounded-xl bg-black/40 text-xs text-gray-300 border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {CV_DATA.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-gray-500 hover:text-white text-sm transition-colors">About</a>
          <a href="#experience" className="text-gray-500 hover:text-white text-sm transition-colors">Experience</a>
          <a href="#projects" className="text-gray-500 hover:text-white text-sm transition-colors">Projects</a>
          <a href="#skills" className="text-gray-500 hover:text-white text-sm transition-colors">Skills</a>
        </div>
        <div className="flex items-center gap-4">
          <a href={CV_DATA.github} className="p-2 rounded-full bg-zinc-900 text-gray-400 hover:text-white transition-all"><Github className="w-5 h-5" /></a>
          <a href={CV_DATA.linkedin} className="p-2 rounded-full bg-zinc-900 text-gray-400 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <GraduationCap className="w-24 h-24" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{CV_DATA.education.school}</h3>
                  <p className="text-blue-400 font-medium mb-4">{CV_DATA.education.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {CV_DATA.education.location}</span>
                    <span className="flex items-center gap-1"><ChevronRight className="w-4 h-4" /> {CV_DATA.education.period}</span>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    Grade: {CV_DATA.education.grade}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">A bit about me</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {CV_DATA.summary}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I'm passionate about building scalable, maintainable, and high-performance software. 
                  My journey has taken me from intensive training at ITI to leading critical projects at 
                  global companies like Schneider Electric and GET Group.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
