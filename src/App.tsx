import React from 'react';
import { Code2, Briefcase, GraduationCap, Languages, FolderGit2, ExternalLink } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionTitle } from './components/SectionTitle';

function App() {
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
              { name: 'JavaScript', level: 75 },
              { name: 'PHP', level: 90 },
              { name: 'Three.js', level: 70 },
              { name: 'Python', level: 75 },
              { name: 'React Three Fiber', level: 75 },
              { name: 'CSS', level: 85 },
              { name: 'TailWind', level: 70 },
              { name: 'BootsTrap', level: 75 },
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
                description: 'Dashboard that connects Trello, Holded, and Clockify. Its function is to keep everything organized and have everything in one place.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_KakYLRgpxnvDJMU4AophdNJJLCQewAw2w&s'
              },
              {
                name: 'Panaderias Paco',
                tech: ['WordPress', 'PHP', 'TailWind'],
                description: 'A website for a physical store that uses plugins, user registration, shopping carts, stock management...',
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

        {/* Work Experience */}
        <section id="experience" className="space-y-8 scroll-mt-16">
          <SectionTitle icon={<Briefcase />} title="Work Experience" color="text-green-400" />
          <div className="space-y-6">
            {[
              {
                role: 'Senior Full Stack Developer',
                company: 'Doers Digital Factory',
                period: '2024 - Present',
                description: 'Create various projects within the company and maintain websites on WordPress.',
              },
            ].map((exp) => (
              <div key={exp.role} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-green-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-8 scroll-mt-16">
          <SectionTitle icon={<GraduationCap />} title="Education" color="text-purple-400" />
          <div className="space-y-6">
            {[
              {
                degree: 'Three.js Course',
                school: 'Bruno Simon',
                period: '2024',
              },
              {
                degree: 'Web Application Developer',
                school: 'CEAC FP',
                period: '2022 - 2024',
              },
              {
                degree: 'Technological Bachelor',
                school: 'Joyfe',
                period: '2020 - 2022',
              },
            ].map((edu) => (
              <div key={edu.degree} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-purple-400 mb-2">{edu.school}</p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </div>
            ))}
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