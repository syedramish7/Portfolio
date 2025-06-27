import React from 'react';
import { Briefcase, Code, User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know me better and understand my journey in the world of web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. With over 3 years of 
              experience in web development, I've worked on a variety of projects that 
              have helped me develop a deep understanding of both front-end and back-end technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career 
              where I get to solve complex problems and bring creative ideas to life. 
              I believe in writing clean, maintainable code and creating experiences 
              that users love.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Frontend</h4>
                <p className="text-sm text-gray-600">React, JavaScript, TypeScript</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Python</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Database</h4>
                <p className="text-sm text-gray-600">MongoDB, PostgreSQL</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Tools</h4>
                <p className="text-sm text-gray-600">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-semibold">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects:</span>
                  <span className="font-semibold">50+ Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Education:</span>
                  <span className="font-semibold">Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold">Remote / Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}