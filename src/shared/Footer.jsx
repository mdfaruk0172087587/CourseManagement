import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo & Slogan */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">📘 CourseManagement</h2>
                    <p className="text-sm text-gray-400">Learn, move forward, and build your future.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-xl hover:text-blue-500"><FaFacebook /></a>
                        <a href="#" className="text-xl hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="text-xl hover:text-blue-300"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Explore</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Courses</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Support</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} EduTrack. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;