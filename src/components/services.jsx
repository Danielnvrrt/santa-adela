import { useState, useEffect } from 'react';
import { FaCar, FaMotorcycle, FaBox } from 'react-icons/fa';

const services = [
  {
    icon: <FaMotorcycle className="text-white text-4xl" />, 
    title: 'Plaza de Parking de Moto',
    name: 'moto',
    description:
      'Plazas exclusivas para motos de fácil acceso y ubicaciones estratégicas para mayor comodidad.',
  },
  {
    icon: <FaCar className="text-white text-4xl" />,
    title: 'Plaza de Parking de Coche',
    name: 'coche',
    description:
      'Amplias plazas diseñadas para todo tipo de vehículos que permiten maniobras seguras así como estacionar tu coche con comodidad.',
  },
  {
    icon: <FaBox className="text-white text-4xl" />,
    title: 'Trasteros',
    name: 'trastero',
    description:
      'Trasteros privados con seguridad enfocados para uso profesional y particular. Disponibilidad de carretillas y fácil acceso.',
  },
];

export const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">SERVICIOS</h2>
        <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-800 leading-relaxed md:text-center md:px-16">
          Seguridad incluida ante robos, incendios y/o desperfectos.
          <br />
          Fácil acceso gracias a su puerta automática de 4.5x6 metros.
          <br />
          Salida de emergencia peatonal.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-300 p-6 rounded-2xl shadow-lg flex flex-col items-center max-w-sm mx-auto transition-transform duration-300 cursor-pointer 
              ${isMobile ? (activeIndex === index ? 'scale-110' : '') : 'hover:scale-110'}`}
              onClick={() => handleClick(index)}
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
