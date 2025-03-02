import { FaCar, FaMotorcycle, FaBox } from "react-icons/fa";

const services = [
  {
    icon: <FaCar className="text-white text-4xl" />,
    title: "Plaza de Parking de Coche",
    description:
      "Espacios seguros y amplios para estacionar tu coche con comodidad.",
  },
  {
    icon: <FaMotorcycle className="text-white text-4xl" />,
    title: "Plaza de Parking de Moto",
    description:
      "Zonas especialmente diseñadas para motos, garantizando su seguridad.",
  },
  {
    icon: <FaBox className="text-white text-4xl" />,
    title: "Trasteros",
    description:
      "Almacena tus pertenencias de forma segura en nuestros trasteros privados.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 scroll-my-[80px]">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">SERVICIOS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center max-w-sm mx-auto"
            >
              <div className="bg-blue-500 p-4 rounded-full mb-4">
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
