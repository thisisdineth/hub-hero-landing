
import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ict-blue to-ict-teal flex items-center justify-center text-white font-bold text-xl">
                ICT
              </div>
              <span className="font-bold text-xl text-white">Learning Hub</span>
            </div>
            <p className="mb-6">
              Empowering the next generation of tech professionals with cutting-edge ICT education and training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ict-blue transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ict-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.032 10.032 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.06a4.92 4.92 0 003.946 4.827 4.964 4.964 0 01-2.212.085 4.93 4.93 0 004.604 3.417 9.875 9.875 0 01-6.102 2.105c-.39 0-.779-.023-1.16-.067a13.985 13.985 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209-.005-.418-.014-.626a9.932 9.932 0 002.43-2.548l.011-.013z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ict-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h-.003z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ict-blue transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Courses
                </a>
              </li>
              <li>
                <a href="#features" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Database Management
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Networking
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Mobile Development
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on courses, events, and tech news.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ict-blue"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-ict-blue to-ict-teal text-white rounded-md px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 ICT Learning Hub. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm mr-4 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm mr-4 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
