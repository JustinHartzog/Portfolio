import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Award, ChevronDown } from 'lucide-react';
import frndlyImage from './assets/images/frndlytv.jpg';
import fbapiImage from './assets/images/fbapi.png';
import biReportImage from './assets/images/bireportqr.png';
import giftyImage from './assets/images/gifty.png';
import blogImage from './assets/images/blog.png';
import luckyundersImage from './assets/images/luckyunders.png';
import justinImage from './assets/images/justin.png';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'HTML', level: 95, icon: <Code className="w-6 h-6" /> },
    { name: 'JavaScript', level: 90, icon: <Zap className="w-6 h-6" /> },
    { name: 'CSS/Tailwind', level: 92, icon: <Palette className="w-6 h-6" /> },
    { name: 'React', level: 88, icon: <Code className="w-6 h-6" /> },
    { name: 'TypeScript', level: 85, icon: <Zap className="w-6 h-6" /> },
    { name: 'UI/UX Design', level: 87, icon: <Palette className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'Fishbowl Rest API Docs',
      description: 'Helped contribute to the development of a comprehensive REST API documentation site for Fishbowl.',
      tech: ['React', 'Node.js', 'CSS', 'Javascript'],
      image: fbapiImage
    },
    {
      title: 'Drap-n-Drop Label Editor',
      description: 'Built and deployed an interactive Drag-n-Drop BI Report in Fishbowl for customizing part labels with QR barcodes.',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: biReportImage
    },
    {
      title: 'Frndly TV Help Center',
      description: 'Designed and fully built Frndly TVs Help Center to provide users with easy access to support resources and information.',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: frndlyImage,
      liveUrl: 'https://help.frndlytv.com/support/home'
    }
  ];

  const additionalProjects = [
    {
      title: 'Gifty Friends Moble App',
      description: 'Solo Android Developer for a social gift app where users can create and organize wishlists to then share with friends',
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      image: giftyImage
    },
    {
      title: 'Blog Website',
      description: 'A simple blog website challenge to practice HTML, CSS, and JavaScript skills as well as practice responsive layout techniques.',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: blogImage,
      liveUrl: 'https://justinhartzog.github.io/Blog/',
      codeUrl: 'https://github.com/JustinHartzog/Blog'
    },
    {
      title: 'Lucky Unders Mobile Game',
      description: 'A little card game that I\'m working on using Godot. Not quite finished yet but it will include multiplayer gameplay.',
      tech: ['Godot', 'GDScript'],
      image: luckyundersImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {'Justin Hartzog'}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400' : 'text-gray-300'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold pb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Crafting beautiful, responsive, and user-centric web experiences with modern technologies
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-[175px] py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-[175px] py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 text-center"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl">
                <img
                  src={justinImage}
                  alt="Developer workspace"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Software Developer with over three years of hands-on experience building dynamic, user-centric web applications at companies like Fishbowl and Frndly TV. I specialize in crafting seamless digital experiences by bridging the gap between elegant front-end interfaces and robust back-end systems.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I enjoy working on exciting new projects ranging from web applications to mobile apps and games, always eager to explore the latest tools and implement innovative solutions to bring to life creative new ideas.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-3 rounded-lg">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-3 rounded-lg">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span>20+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold pb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <button
                        type="button"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    )}

                    {project.codeUrl && (
                      <button
                        type="button"
                        onClick={() => window.open(project.codeUrl, '_blank', 'noopener,noreferrer')}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20">
          <h2 className="text-5xl font-bold pb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Side Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <button
                        type="button"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    )}

                    {project.codeUrl && (
                      <button
                        type="button"
                        onClick={() => window.open(project.codeUrl, '_blank', 'noopener,noreferrer')}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold pb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/JustinHartzog" className="p-4 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/justin-hartzog-2ba6a517b/" className="p-4 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:justin.hartzog01@gmail.com" className="p-4 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a 
            href="mailto:justin.hartzog01@gmail.com"
            className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Justin Hartzog. Crafted with React & Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}