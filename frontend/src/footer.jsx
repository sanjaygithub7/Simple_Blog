import React from "react";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Footer Top Section */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo */}
            <div className="mb-4">
              <a href="#" className="text-2xl font-semibold text-white">
                MyBlog
              </a>
              <p className="mt-2 text-sm">Your daily dose of knowledge and stories.</p>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap space-x-8 mb-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Posts
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className="border-t border-gray-700 mt-4 pt-4 flex flex-wrap justify-between items-center text-sm">
            <p>&copy; 2024 MyBlog. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  