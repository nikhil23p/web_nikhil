import React, { useState } from 'react';
import { GraduationCap, Mail, Brain, FlaskRound as Flask, Bone as Drone, Cpu, ExternalLink, MapPin, Building, BookOpen, Award, Calendar, FileText, Menu, X } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch(currentPage) {
      case 'research':
        return <ResearchSection />;
      case 'education':
        return <EducationSection />;
      default:
        return <HomeSection />;
    }
  };
  
  const menuItems = ['Home', 'Research', 'Education', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
	  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Nikhil
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group ${
                    currentPage === item.toLowerCase() ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-200 ${
                    currentPage === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCurrentPage(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.toLowerCase()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      

      {renderContent()}
    </div>
  );
}

const HomeSection = () => (
  <>
    {/* Hero Section */}
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Profile Photo for Mobile */}
          <div className="lg:hidden w-full flex justify-center mb-8">
            <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src="/images/profile.jpg"
                alt="Nikhil Panwar"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="sm:text-center lg:text-left lg:col-span-6">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                <span className="block text-gray-900">Nikhil Panwar</span>
                <span className="block text-blue-600 mt-2">निखिल पँवार</span>
              </h1>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building className="h-5 w-5" />
                  <span>Founder and CEO, Farmicon India</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <GraduationCap className="h-5 w-5" />
                  <span>Ph.D. Research Scholar</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building className="h-5 w-5" />
                  <span>CSE Department, IIT Roorkee</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Roorkee, Uttarakhand, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo for Desktop */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src="/images/profile.jpg"
                alt="Nikhil Panwar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </span>
              About me
            </h2>
            <div className="prose prose-lg max-w-none">
			  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
			  I am passionate about innovation and research in the field of Artificial Intelligence and working on an Agritech startup, 
			  Farmicon for smart farming using AI-based solutions. I'm pursuing my Ph.D. from the Department of Computer Science 
			  and Engineering, Indian Institute of Technology Roorkee under the supervision of 
			  Prof. Partha Pratim Roy (Associate Professor, CSE Dept, IIT Roorkee). My research interests lie in Brain-Computer Interface, 
			  Cognitive State, EEG, Human-Machine Collaboration, etc.
			  </p>
			  <ul className="text-lg text-gray-600 mb-8 leading-relaxed list-disc pl-5">
			  <li>Passionate about learning and building, Innovation, Research, Entrepreneurship Development, Business Strategies, and Startup Development Programs.</li>
			  <li>Skilled in building innovation, entrepreneurship, and technology in multiple domains.</li>
			  <li>Professional with more than five years of experience in strategy planning, managing, and executing programs/boot camps.</li>
			  </ul>

            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Innovation & Research",
                  description: "Passionate about learning, building, and entrepreneurship development"
                },
                {
                  icon: <Flask className="h-6 w-6" />,
                  title: "Technology",
                  description: "Skilled in building innovation and technology across multiple domains"
                },
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  title: "Experience",
                  description: "Over 5 years in strategy planning and execution"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>

    {/* Lab Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Research Labs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The PARIMAL Lab</h3>
                <p className="text-gray-600 mb-4">Department of Computer Science and Engineering<br />IIT Roorkee</p>
                <a href="http://parimal.iitr.ac.in/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn more <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">FARMICON INDIA</h3>
                <p className="text-gray-600 mb-4">I-3, TIDES Business Incubator<br />IIT Roorkee</p>
                <a href="https://farmicon.in/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Visit website <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Expertise across multiple technologies and domains</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-blue-100"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <span className="text-3xl">{skill.icon}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.app.google/zqHig5nRkV5u41Hi6"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
            <a
              href="https://calendar.app.google/zqHig5nRkV5u41Hi6"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Schedule Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ResearchSection = () => (
  <section className="pt-32 pb-20">
    {/* Research Papers Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Publications</h2>
        <p className="text-lg text-gray-600">Recent academic contributions and research papers</p>
      </div>
      <div className="space-y-8">
        {researchPapers.map((paper, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.authors}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {paper.journal}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {paper.year}
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href={paper.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Paper <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Training</h2>
        <p className="text-lg text-gray-600">Academic qualifications and professional development</p>
      </div>

      {/* Academic Education */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <GraduationCap className="h-6 w-6 mr-2" />
          Academic Education
        </h3>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <div className="mt-2 text-gray-600 whitespace-pre-line">
                    {edu.details}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50">
                    <span className="text-sm font-medium text-blue-600">{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training & Certifications */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <Award className="h-6 w-6 mr-2" />
          Training & Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{training.title}</h4>
                  <p className="text-gray-600">{training.organization}</p>
                  <p className="text-sm text-gray-500 mt-2">{training.date}</p>
                  <p className="text-sm text-blue-600 mt-1">{training.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const researchAreas = [
  "Artificial Intelligence",
  "Brain Computer Interface",
  "EEG",
  "Drone",
  "Deep Learning",
  "HMT",
  "Cognitive State Assessment for Human Machine Collaboration"
];

const researchPapers = [
  {
    title: "Enhanced Cross-Task EEG Classification: Domain Adaptation with EEGNet",
    authors: "V Pandey, N Panwar, A Kumbhar, PP Roy, M Iwamura",
    journal: "International Conference on Pattern Recognition, 354-369",
    year: "2024",
    doi: "https://link.springer.com/chapter/10.1007/978-3-031-78195-7_24"
  },
  {
    title: "EEG-CogNet: A deep learning framework for cognitive state assessment using EEG brain connectivity",
    authors: "N Panwar, V Pandey, PP Roy",
    journal: "Biomedical Signal Processing and Control 98, 106770",
    year: "2024",
    doi: "https://www.sciencedirect.com/science/article/pii/S1746809424008280"
  },
  {
    title: "An Automated Fume Control System for Automobile",
    authors: "M Kaur, N Panwar",
    journal: "International Journal of Computer Applications",
    year: "2016",
    doi: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=ca8fd59bb61e0c319394b395c1a8f3416825b7f6"
  },
  {
    title: "Performance analysis of branch prediction unit for pipelined processors",
    authors: "N Panwar, M Kaur, G Singh",
    journal: "International Journal of Computer Applications",
    year: "2015",
    doi: "https://d1wqtxts1xzle7.cloudfront.net/99914449/download-libre.pdf?1678951922=&response-content-disposition=inline%3B+filename%3DSenior_Engineer.pdf&Expires=1738219462&Signature=Q0myiJhXCKNxAqUalaE6tVAljXwdml8R-pjd5D-Bu5ujCX1LaPSJw62UUFTebYoYMrimsXpodxuKMYbB8dTmoAwxfPcENlU3nEIvkZ2W0mmaKE5yQGEQTmypjDH-2JR4r-9iSpo4jsD~5goR68RPtzE4NnQnBI7yKLInqDtCQpJCjVPCKJj~R0vD7I9jLG9BpBf9BxaxdJCirUsPgTPp8LyXXhrYp2wrZDdSdZ9wcoNOB4jJzEvbiH2fDMhTnepTHZIoA~coP5bWaXJ3UpL0fPKmCmHHZXYuDZILgR2urFBC9tw1x-65g7wH2Gxg9-5I5uP~ek5EwlZjx8I~5KfQdw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
  }
];

const education = [
  {
    degree: "Doctor of Philosophy (Ph.D.)",
    institution: "Indian Institute of Technology Roorkee",
    location: "Uttarakhand, India",
    year: "July 2021 - Present",
    details: "Department of Computer Science and Engineering\nThesis: Cognitive State Assessment to Improve Human-Machine Collaborations\nSupervisor: Prof. Partha Pratim Roy"
  },
  {
    degree: "Master of Technology (M.Tech.)",
    institution: "CDAC Mohali",
    location: "Punjab, India",
    year: "August 2013 - July 2015",
    details: "VLSI Design\nThesis: HDL Design Synthesis of Branch Predication Unit\nSupervisor: Dr. Manjit Kaur"
  },
  {
    degree: "Bachelor of Technology (B.Tech.)",
    institution: "Rajasthan Technical University Kota, JNIT Jaipur",
    location: "Rajasthan, India",
    year: "July 2008 - May 2012",
    details: "Electronics and Computer Engineering"
  }
];

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Tensorflow", icon: "🧠" },
  { name: "Raspberry Pi", icon: "🖥️" },
  { name: "Xilinx", icon: "⚡" },
  { name: "Drone Tech", icon: "🚁" },
  { name: "IoT", icon: "📡" },
  { name: "AI/ML", icon: "🤖" },
  { name: "Research", icon: "📚" },
];

const trainings = [
  {
    title: "Digital Design using VHDL",
    organization: "CSIR-CEERI Pilani",
    date: "May 2011 - July 2011",
    type: "Summer Training",
    credential: "#"
  }
];

export default App;