import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Shield, Code, Network } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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

  const projects = [
    {
      title: "Keylogger",
      description: "Capture keystrokes in real-time for testing and research purposes.",
      link: "https://github.com/Devourdbaba/Keylogger"
    },
    {
      title: "Pixel Manipulation Tool",
      description: "Tool for image processing and pixel-level manipulation.",
      link: "https://github.com/Devourdbaba/PIXEL-MP"
    },
    {
      title: "Encryption Tool (Caesar Cipher)",
      description: "Encrypts and decrypts messages using the classic Caesar cipher technique.",
      link: "https://github.com/Devourdbaba/Cs-cipher-tool"
    },
    {
      title: "Web Vulnerability Assessment",
      description: "Conducts automated web security scanning to identify common vulnerabilities."
    },
    {
      title: "Voice Cloning Detection Tool",
      description: "Detects spoofed or cloned voice recordings to protect authentication systems."
    },
    {
      title: "LOCA TRACE",
      description: "Tool for locating devices or tracking simulated locations in controlled scenarios."
    }
  ];

  const experiences = [
    {
      role: "Freelance Cybersecurity Analyst",
      org: "Self-employed / Clients",
      duration: "Ongoing",
      points: [
        "Conducts web application penetration tests and security audits for clients",
        "Develops Python-based tools for automating cybersecurity tasks and monitoring",
        "Provides actionable recommendations to strengthen organizational defenses"
      ]
    },
    {
      role: "Cybersecurity Instructor",
      org: "School of AI and Robotics",
      duration: "June 2025 - November 2025",
      points: [
        "Delivered practical cybersecurity training on network defense, penetration testing, and vulnerability assessment",
        "Conducted hands-on labs using Kali Linux, Nessus, and web security tools to simulate real-world attack scenarios",
        "Mentored students on incident response, risk mitigation, and ethical hacking practices",
        "Designed training modules aligned with industry cybersecurity standards"
      ]
    },
    {
      role: "Intern - Cyber Security",
      org: "SOAIRAFRICA",
      duration: "March 2025 - May 2025",
      points: [
        "Designed and configured network topologies using Cisco Packet Tracer",
        "Implemented VLANs, ACLs, and traffic management for secure network operation",
        "Conducted network scanning and security assessment using Nmap",
        "Developed tools to enhance cybersecurity protection and monitoring"
      ]
    },
    {
      role: "Cybersecurity Researcher",
      org: "Cybersecurity Research Society",
      duration: "2024",
      points: [
        "Conducted research on cybersecurity threats, AI emerging threats, and the impact of AI on current defense mechanisms",
        "Simulated attack scenarios to test existing defense mechanisms",
        "Contributed to publications and technical reports on emerging cybersecurity trends"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">FB</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-black"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/portfolio.jpeg" 
              alt="Fagbenle Babatunde" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-gray-100"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Fagbenle Babatunde
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
            Cybersecurity Analyst & Penetration Tester
          </p>
          <p className="text-lg text-gray-500 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Web App Pentesting & Cybersecurity Tools Building with Python
          </p>
          <div className="flex justify-center space-x-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <a href="https://github.com/Devourdbaba" target="_blank" rel="noopener noreferrer" 
               className="text-gray-700 hover:text-black transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/fagbenl-babatunde-926086308" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-black transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I am a Cybersecurity Analyst and Penetration Tester with hands-on experience in web application security, 
              vulnerability assessment, and cybersecurity tool building. I enjoy breaking systems apart, understanding how 
              they work, and developing solutions that make them stronger.
            </p>
            <p>
              My work spans across web application pentesting, Python-based security tool development, OSINT, API testing, 
              and network analysis. I combine analytical thinking with practical techniques to identify security gaps, 
              automate repetitive tasks, and help organizations improve their defense posture. I approach cybersecurity 
              with curiosity and precision, while maintaining a friendly, collaborative mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C', 'Bash'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Cybersecurity</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Web App Pentesting', 'Vulnerability Assessment', 'Network Security', 'Cryptography', 
                  'Threat Modeling', 'OSINT / Recon', 'API Testing'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center text-sm font-medium hover:underline">
                    View on GitHub <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-gray-900 pl-6 pb-8">
                <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-gray-600 mb-2">{exp.org}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-700 flex">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Certified Cybersecurity Educator Professional (CCEP)</h3>
            <p className="text-gray-600 mb-3">Red Team Leaders</p>
            <p className="text-gray-700 text-sm">
              Demonstrates expertise in cybersecurity education, training delivery, and practical lab execution.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p className="mb-4">Let's connect and build something secure together.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Devourdbaba" target="_blank" rel="noopener noreferrer" 
               className="hover:text-black transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/fagbenl-babatunde-926086308" target="_blank" rel="noopener noreferrer"
               className="hover:text-black transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm">© 2025 Fagbenle Babatunde. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out backwards;
        }
      `}</style>
    </div>
  );
}