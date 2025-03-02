import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar-default fixed-top w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <a className="navbar-brand" href="#page-top">
            <img
              src="/img/logo.png"
              alt="logo"
              style={{ height: "60px", width: "auto" }}
            />
          </a>
          <button
            type="button"
            className="navbar-toggle block lg:hidden ml-3"
            aria-label="Toggle navigation"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar block w-6 h-0.5 bg-black mb-1"></span>
            <span className="icon-bar block w-6 h-0.5 bg-black mb-1"></span>
            <span className="icon-bar block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        <div className="lg:flex hidden">
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="text-black hover:text-gray-500 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="text-black hover:text-gray-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-black hover:text-gray-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-black hover:text-gray-500 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-black hover:text-gray-500 transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="text-black hover:text-gray-500 transition-colors">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black hover:text-gray-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
