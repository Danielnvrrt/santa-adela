import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { IKImage } from "imagekitio-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "pricing", "location", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (
            rect.top <= viewportHeight * 0.4 &&
            rect.bottom >= viewportHeight * 0.4
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navigation"
      data-scroll-header
      className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <IKImage path="logo_dg.svg" />
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {[
            { id: "services", label: "SERVICIOS" },
            { id: "pricing", label: "PRECIOS" },
            { id: "location", label: "DONDE ESTAMOS" },
            { id: "contact", label: "CONTACTO" },
          ].map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`hover:text-blue-500 ${
                  activeSection === id ? "underline-animation" : ""
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
        <ul className="md:hidden bg-white shadow-md rounded-lg mt-2 p-4 space-y-4">
          {[
            { id: "services", label: "SERVICIOS" },
            { id: "pricing", label: "PRECIOS" },
            { id: "location", label: "DONDE ESTAMOS" },
            { id: "contact", label: "CONTACTO" },
          ].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block text-gray-700 hover:text-blue-500 relative after:block after:h-[3px] after:bg-blue-500 after:w-0 after:transition-all after:duration-300"
                style={{
                  color: activeSection === id ? "black" : "",
                }}
                onClick={() => setIsOpen(false)}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute left-0 bottom-[-3px] w-full h-[3px] bg-blue-500 animate-underline"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
