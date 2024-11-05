import React from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative text-center space-y-6 px-4">
        <div className="mb-8">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQE1a7MGGkvo4A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729111930047?e=1736380800&v=beta&t=WBErxboozU3qcSgXhJkiGyejfmvyzOI3zfjHuIgHr2Y"
            alt="Profile" 
            className="w-40 h-40 rounded-full mx-auto border-4 border-blue-400 shadow-lg"
          />
        </div>
        <h1 className="text-6xl font-bold">Diego Sánchez</h1>
        <p className="text-2xl text-gray-300">Full Stack Developer</p>
        <div className="flex justify-center gap-4 pt-4">
          <a 
            href="https://www.linkedin.com/in/diegosanchezheredia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-blue-400" />
          </a>
          <a 
            href="https://github.com/DiegoSan13?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-gray-500/10 rounded-full hover:bg-gray-500/20 transition-colors"
          >
            <Github className="w-6 h-6 text-gray-400" />
          </a>
        </div>
        <ChevronDown className="animate-bounce mx-auto mt-20 w-8 h-8" />
      </div>
    </header>
  );
}