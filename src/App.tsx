import React, { useState } from 'react';
import { GraduationCap, Mail, Brain, FlaskRound as Flask, Bone as Drone, Cpu, ExternalLink, MapPin, Building, BookOpen, Award, Calendar, FileText } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
            <div className="hidden md:flex space-x-8">
              {['Home', 'Research', 'Education', 'Contact'].map((item) => (
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
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
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
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Working on research"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                I am passionate about innovation and research in the field of Artificial Intelligence and working on an
                Agritech startup, Farmicon for smart farming using AI-based solutions. I'm pursuing my Ph.D. from the
                Department of Computer Science and Engineering Indian Institute of Technology Roorkee (IIT Roorkee)
                under the supervision of Prof Partha Pratim Roy (Associate Professor, CSE Dept, IITR).
              </p>
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
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
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
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
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
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View Resume
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
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50">
                    <span className="text-sm font-medium text-blue-600">{edu.year}</span>
                  </div>
                  {edu.grade && (
                    <p className="text-gray-600 mt-2">Grade: {edu.grade}</p>
                  )}
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
                  {training.credential && (
                    <a
                      href={training.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-2"
                    >
                      View Credential <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
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
    title: "Deep Learning-Based Approach for Cognitive State Assessment using EEG Data",
    authors: "Nikhil Panwar, Partha Pratim Roy",
    journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    year: "2023",
    doi: "#"
  },
  {
    title: "Human-Machine Teaming: A Novel Framework for Collaborative Intelligence",
    authors: "Nikhil Panwar, Partha Pratim Roy, et al.",
    journal: "International Journal of Human-Computer Studies",
    year: "2022",
    doi: "#"
  },
  {
    title: "Smart Farming: AI-Driven Solutions for Agricultural Optimization",
    authors: "Nikhil Panwar, et al.",
    journal: "Computers and Electronics in Agriculture",
    year: "2021",
    doi: "#"
  }
];

const education = [
  {
    degree: "Ph.D. in Computer Science and Engineering",
    institution: "Indian Institute of Technology Roorkee",
    location: "Roorkee, Uttarakhand",
    year: "2020 - Present",
    grade: "Research Ongoing"
  },
  {
    degree: "M.Tech in Computer Science",
    institution: "Indian Institute of Technology",
    location: "Roorkee, Uttarakhand",
    year: "2018 - 2020",
    grade: "9.2 CGPA"
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "Engineering College",
    location: "Rajasthan",
    year: "2014 - 2018",
    grade: "8.8 CGPA"
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
    title: "Advanced Deep Learning Specialization",
    organization: "DeepLearning.AI",
    date: "2022",
    credential: "#"
  },
  {
    title: "Brain-Computer Interface Workshop",
    organization: "IEEE Brain Initiative",
    date: "2021",
    credential: "#"
  },
  {
    title: "Drone Technology and Applications",
    organization: "DJI Enterprise",
    date: "2021",
    credential: "#"
  },
  {
    title: "IoT for Smart Agriculture",
    organization: "Microsoft Research",
    date: "2020",
    credential: "#"
  }
];

export default App;