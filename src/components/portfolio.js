import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code, Database, Server, Wrench, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'jQuery'],
    backend: ['Python', 'Node.js', 'Express.js', 'Spring Boot', 'Java','sequelize'],
    database: ['SQLite', 'MySQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Vercel', 'PowerBI', 'AWS', 'Postman']
  };

  const projects = [
    {
      title: 'Blood Bank Automation System',
      description: 'Full-stack web application for managing blood donations and requests with role-based access control.',
      tech: ['React.js', 'Node.js', 'Express.js', 'SQLite', 'REST API'],
      github: 'https://github.com/Kavipriya-123/BloodBankAutomationSystem',
      features: ['Admin/User roles', 'Donor management', 'React Context for state', 'RESTful APIs']
    },
    {
      title: 'Migrant Workers Support System',
      description: 'Web-based application for migrant workers in Tamil Nadu with smart ID-based registration and resource allocation.',
      tech: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'Bootstrap'],
      github: 'https://github.com/Kavipriya-123/Migrant-workers-support-system-tamilnadu',
      features: ['Smart ID registration', 'Real-time updates', 'User dashboards', 'Resource tracking']
    },
    {
      title: 'Car Management System',
      description: 'Spring Boot application performing CRUD operations on Car entities using RESTful APIs.',
      tech: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'SQL'],
      github: 'https://github.com/Kavipriya-123/SpringBootCRUD',
      features: ['CRUD operations', 'RESTful APIs', 'JPA integration', 'SQL database']
    },
    {
      title: 'E-Commerce Website',
      description: 'Responsive e-commerce platform with mobile-first approach and seamless navigation.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      live: 'kavi3nxttrendz.ccbp.tech',
      features: ['Mobile-first design', 'Product carousel', 'Bootstrap components', 'Video integration']
    },
    {
      title: 'Wikipedia Search Application',
      description: 'Custom Wikipedia search with simplified and intuitive interface for accessing information.',
      tech: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Bootstrap'],
      live: 'wikikk.ccbp.tech',
      features: ['REST API integration', 'Search functionality', 'Responsive design', 'Curated results']
    }
  ];

  const experience = [
    {
      company: 'Velankani Information System Private Limited',
      role: 'Software Development Intern',
      location: 'Bangalore',
      duration: 'Jul 2025 - Ongoing',
      description: 'Working on product and software development for real-world product tracking system. Contributing to building efficient tracking modules to enhance visibility and operational accuracy.'
    },
    {
      company: 'AWERUM',
      role: 'Software Development Intern',
      location: 'Pollachi',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Worked with real-world projects considering client requirements. Completed detailed programming and development tasks for frontend public and internal websites as well as challenging backend server code.'
    }
  ];

  const education = [
    {
      institution: 'Dr. Mahalingam College of Engineering and Technology',
      degree: 'BE Computer Science Engineering',
      duration: '2022 - 2026',
      grade: '9.2 CGPA',
      location: 'Pollachi, Coimbatore'
    },
    {
      institution: 'Nxtwave Disruptive Technologies',
      degree: 'Industry Ready Certification in Full-stack Development',
      duration: 'Jul 2022 - Ongoing',
      grade: '',
      location: ''
    }
  ];

  const certificates = [
    { name: 'Node.js', date: 'Dec 2024', id: 'OTJVKVDJZH' },
    { name: 'JavaScript Essentials', date: 'Feb 2024', id: 'QHIAOEGXCX' },
    { name: 'Build your own Dynamic Web Application', date: 'Nov 2023', id: 'ZOKXMCAPAC' },
    { name: 'Programming Foundation with Python', date: 'Aug 2023', id: 'NPBZVVTTOK' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kavipriya K
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kavipriya K
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer & Computer Science Engineer
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with modern technologies. 
              Currently pursuing BE in CSE with 9.2 CGPA and hands-on industry experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-500 hover:bg-blue-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Full-Stack Developer & Engineer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am a passionate and detail-oriented Computer Science Engineering student with a strong interest in Full Stack Development, Problem Solving, and Modern Web Technologies. Skilled in React, JavaScript, HTML, CSS, and Bootstrap, I enjoy building clean, efficient, and user-friendly applications. With hands-on experience in developing interactive web solutions, integrating frontend and backend systems, and working with databases, I aim to create impactful digital experiences. I am also continuously enhancing my knowledge in areas like Java, AWS, DevOps, and algorithmic problem-solving to stay ahead in the evolving tech landscape.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Currently maintaining a 9.2 CGPA while actively working on real-world projects and contributing to 
                innovative solutions. My journey includes developing systems for blood bank automation, migrant worker 
                support, and various e-commerce platforms.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Pollachi, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>BE CSE - 9.2 CGPA</span>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Code className="h-8 w-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-3 text-blue-300">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Server className="h-8 w-8 text-green-400 mb-4" />
                <h4 className="font-semibold mb-3 text-green-300">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Database className="h-8 w-8 text-purple-400 mb-4" />
                <h4 className="font-semibold mb-3 text-purple-300">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <span key={skill} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Wrench className="h-8 w-8 text-orange-400 mb-4" />
                <h4 className="font-semibold mb-3 text-orange-300">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a href={`https://${project.live}`} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-3">
                <Briefcase className="h-6 w-6" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-blue-400">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3">
                <GraduationCap className="h-6 w-6" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="text-purple-400 font-medium mb-2">{edu.institution}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400">
                      <span>{edu.duration}</span>
                      {edu.grade && <span className="font-medium text-green-400">{edu.grade}</span>}
                    </div>
                    {edu.location && <div className="text-sm text-gray-500 mt-1">{edu.location}</div>}
                  </div>
                ))}
              </div>

              {/* Certificates */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Recent Certifications
                </h4>
                <div className="grid gap-3">
                  {certificates.map((cert, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white">{cert.name}</span>
                        <span className="text-sm text-gray-400">{cert.date}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">ID: {cert.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="mailto:kavipriyak920@gmail.com" 
                 className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">kavipriyak920@gmail.com</p>
              </a>
              
              <a href="tel:6380240671" 
                 className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">+91 6380240671</p>
              </a>
              
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
                <MapPin className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">Pollachi, Tamil Nadu</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 mt-12">
              <a href="http://www.linkedin.com/in/vkavi" target="_blank" rel="noopener noreferrer"
                 className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/Kavipriya-123" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors duration-300 transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Kavipriya K. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;