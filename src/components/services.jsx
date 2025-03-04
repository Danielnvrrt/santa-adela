import { useState } from "react";
import { FaCar, FaMotorcycle, FaBox } from "react-icons/fa";

const services = [
  {
    icon: <FaMotorcycle className="text-white text-4xl" />,
    title: "Plaza de Parking de Moto",
    name: "moto",
    description:
      "Zonas especialmente diseñadas para motos, garantizando su seguridad.",
  },
  {
    icon: <FaCar className="text-white text-4xl" />,
    title: "Plaza de Parking de Coche",
    name: "coche",
    description:
      "Espacios seguros y amplios para estacionar tu coche con comodidad.",
  },
  {
    icon: <FaBox className="text-white text-4xl" />,
    title: "Trasteros",
    name: "trastero",
    description:
      "Almacena tus pertenencias de forma segura en nuestros trasteros privados.",
  },
];

export const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState("coche");

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">SERVICIOS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-300 p-6 rounded-2xl shadow-lg flex flex-col items-center max-w-sm mx-auto transition-all duration-300 cursor-pointer ${
                selectedPlan === service.name
                  ? "scale-110 border-t-4"
                  : "scale-95"
              }`}
              onClick={() => setSelectedPlan(service.name)}
            >
              <div className="bg-[#1F2937] p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
