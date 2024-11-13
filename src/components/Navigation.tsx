import React from 'react';
import { Code2, Briefcase, GraduationCap, Languages, FolderGit2, MessageSquare } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'languages', icon: <Code2 className="w-5 h-5" />, label: 'Programming' },
  { id: 'spoken-languages', icon: <Languages className="w-5 h-5" />, label: 'Languages' },
  { id: 'experience', icon: <Briefcase className="w-5 h-5" />, label: 'Experience' },
  { id: 'education', icon: <GraduationCap className="w-5 h-5" />, label: 'Education' },
  { id: 'projects', icon: <FolderGit2 className="w-5 h-5" />, label: 'Projects' },
  { id: 'contact', icon: <MessageSquare className="w-5 h-5" />, label: 'Contact' },
];

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 gap-4 md:gap-8">
          <a href='https://diegosanchez3dportfolio.netlify.app/' target='_blank' className='p-2'><button>3D Portfolio</button></a>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}