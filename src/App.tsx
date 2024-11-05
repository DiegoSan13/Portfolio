import React from 'react';
import { Code2, Languages, FolderGit2, MessageSquare } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionTitle } from './components/SectionTitle';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      <Hero />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-20 space-y-32">
        {/* Programming Languages */}
        <section id="languages" className="space-y-8 scroll-mt-16">
          <SectionTitle icon={<Code2 />} title="Programming Languages" color="text-blue-400" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'React', level: 90 },
              { name: 'JavaScript', level: 80 },
              { name: 'PHP', level: 90 },
              { name: 'Laravel', level: 75 },
              { name: 'Three.js', level: 75 },
              { name: 'Python', level: 75 },
              { name: 'React Three Fiber', level: 75 },
              { name: 'Git', level: 85 },
              { name: 'MySQL', level: 90 },
              { name: 'CSS', level: 85 },
              { name: 'BootsTrap', level: 75 },
              { name: 'Tailwind', level: 75 },
            ].map((lang) => (
              <div key={lang.name} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{lang.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-400 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Languages */}
        <section id="spoken-languages" className="space-y-8 scroll-mt-16">
          <SectionTitle icon={<Languages />} title="Languages" color="text-yellow-400" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Spanish', level: 'Native' },
              { name: 'English', level: 'Professional' },
            ].map((lang) => (
              <div key={lang.name} className="bg-gray-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-2">{lang.name}</h3>
                <p className="text-yellow-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8 scroll-mt-16">
          <SectionTitle icon={<FolderGit2 />} title="Projects" color="text-red-400" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: '3D Portfolio',
                tech: ['React Three Fiber'],
                description: 'A personal 3D portfolio.',
                image: 'https://media.licdn.com/dms/image/v2/D4D22AQElhRU0LIenYQ/feedshare-shrink_800/feedshare-shrink_800/0/1730727546219?e=1733356800&v=beta&t=RfHpK-BmcYEd7GldpGx-jXp7_5KPYFFlCnvMpB8kO0A'
              },
              {
                name: 'Molaria',
                tech: ['PHP', 'HTML'],
                description: 'A small webpage to help young children learn how to brush their teeth.',
                image: 'https://st3.depositphotos.com/1967477/14553/v/450/depositphotos_145533465-stock-illustration-cartoon-tooth-holding-a-tooth.jpg'
              },
              {
                name: 'DOERS HUB',
                tech: ['REACT', 'INERTIA', 'PHP'],
                description: 'Dashboard that connects Trello, Holded, and Clockify.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_KakYLRgpxnvDJMU4AophdNJJLCQewAw2w&s'
              },
              {
                name: 'Panaderias Paco',
                tech: ['WordPress', 'PHP', 'TailWind'],
                description: 'A website for a physical store with user registration, shopping carts, stock management.',
                image: 'https://hips.hearstapps.com/hmg-prod/images/fans-coffee-bakery-elle-1634459850.jpg'
              },
            ].map((project) => (
              <div key={project.name} className="group bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-red-400/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="space-y-8 scroll-mt-16">
          <SectionTitle icon={<MessageSquare />} title="Contact Me" color="text-indigo-400" />
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                Send Message
                <MessageSquare className="w-5 h-5 transform transition-transform group-hover:scale-110" />
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>© 2024 Diego Sanchez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
