import {  FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, LocateIcon, LocationEditIcon, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-slate-700 border-t-3 border-dashed border-[#e7e7e7] py-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Student Community</h3>
            <p className="text-gray-100 mb-4">
              A vibrant community of students supporting each other through education and growth.
            </p>
            <div className="flex gap-4">
              <button variant="outline" className="rounded-full h-10 w-10 p-0 border-[#118AB2]">
                <FacebookIcon className='text-white hover:text-[#EF476F]' />
              </button>
              <button variant="outline" className="rounded-full h-10 w-10 p-0 border-[#118AB2]">
                <InstagramIcon className='text-white hover:text-[#EF476F]' />
              </button>
              <button variant="outline" className="rounded-full h-10 w-10 p-0 border-[#118AB2]">
                <GithubIcon className='text-white hover:text-[#EF476F]' />
              </button>
              <button variant="outline" className="rounded-full h-10 w-10 p-0 border-[#118AB2]">
                <LinkedinIcon className='text-white hover:text-[#EF476F]' />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-100 hover:text-[#EF476F] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-100 hover:text-[#EF476F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/societies" className="text-gray-100 hover:text-[#EF476F] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-100 hover:text-[#EF476F] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-100 hover:text-[#EF476F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className='text-white' />
                <span className="text-gray-100">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className='text-white' />
                <span className="text-gray-100">info@studentcommunity.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className='text-white'/>
                <span className="text-gray-100">123 Campus Drive, College Town</span>
              </li>
            </ul>

            <div className="mt-4">
              <Link to="/contact">
              <button className="w-50 h-10 bg-[#EF476F] hover:bg-[#EF476F]/90 rounded-full">Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dashed border-gray-300 text-center">
          <p className="text-gray-100">© {new Date().getFullYear()} Student Community. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;