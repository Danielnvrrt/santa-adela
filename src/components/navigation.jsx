import { useState } from "react";
import { Menu } from "lucide-react";
import { IKImage } from "imagekitio-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <IKImage path="logo_dg.svg" />
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#services" className="hover:text-blue-500">
              Servicios
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-500">
              Precios
            </a>
          </li>
          <li>
            <a href="#location" className="hover:text-blue-500">
              Donde Estamos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contacto
            </a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white shadow-md rounded-lg mt-2 p-4 space-y-4">
          <li>
            <a
              href="#services"
              className="block text-gray-700 hover:text-blue-500"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="block text-gray-700 hover:text-blue-500"
            >
              Precios
            </a>
          </li>
          <li>
            <a href="#location" className="block text-gray-700 hover:text-blue-500">
              Donde Estamos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-500"
            >
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
