import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { IKImage } from 'imagekitio-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'services', label: 'SERVICIOS' },
    { id: 'gallery', label: 'GALERÍA' },
    { id: 'location', label: 'DONDE ESTAMOS' },
    { id: 'contact', label: 'CONTACTO' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // const sects = ['services', 'gallery', 'location', 'contact'];
      let currentSection = '';

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (
            rect.top < viewportHeight * 0.5 &&
            rect.bottom > viewportHeight * 0.2
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navigation"
      data-scroll-header
      className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-[10000]"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#header" className="cursor-pointer">
          <IKImage path="logo.png" width={60} height={55} />
        </a>

        <ul className="hidden md:flex space-x-6 font-medium">
          {sections.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`navbar-nav hover:text-blue-500 ${
                  activeSection === id ? 'underline-animation' : ''
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white mt-2 p-4 space-y-4">
          {[
            { id: 'services', label: 'SERVICIOS' },
            { id: 'location', label: 'DONDE ESTAMOS' },
            { id: 'contact', label: 'CONTACTO' },
          ].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block text-gray-700 hover:text-blue-500 relative after:block after:h-[3px] after:bg-blue-500 after:w-0 after:transition-all after:duration-300"
                style={{
                  color: activeSection === id ? 'black' : '',
                }}
                onClick={() => setIsOpen(false)}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute left-0 bottom-[-3px] w-[10%] h-[3px] bg-[#1F2937] animate-underline"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
