import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Modal from './Modal';
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 px-6 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo & Slogan */}
        <div className="flex flex-col items-start space-y-3">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <img
              className="w-12 h-12 object-contain"
              src="/project-logo.png"
              alt="CourseManagement Logo"
              loading="lazy"
            />
            CourseManagement
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Learn, move forward, and build your future.
          </p>
          <div className="flex space-x-5 mt-3 text-gray-700 dark:text-gray-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-2xl hover:text-blue-600 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* Links Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400 text-sm">
            <li>
              <button className='hover:underline'
                onClick={() => document.getElementById('course_modal').showModal()}
                type="button"
              >
                Courses
              </button>
            </li>
            <li>
              <button className='hover:underline'
                onClick={() => document.getElementById('about_modal').showModal()}
                type="button"
              >
                About Us
              </button>
            </li>
            <li>
              <button className='hover:underline'
                onClick={() => document.getElementById('blog_modal').showModal()}
                type="button"
              >
                Blog
              </button>
            </li>
          </ul>
        </div>
        {/* Links Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400 text-sm">
            <li>
              <button className='hover:underline'
                onClick={() => document.getElementById('help_modal').showModal()}
                type="button"
              >
                Help Center
              </button>
            </li>
            <li>
              <button className='hover:underline'
                onClick={() => document.getElementById('privacy_modal').showModal()}
                type="button"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button className='hover:underline'
                onClick={() => document.getElementById('terms_modal').showModal()}
                type="button"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} EduTrack. All rights reserved.
      </div>
      <Modal></Modal>
    </footer>
  );
};
export default Footer;
