import { useState, useEffect } from 'react';
import { FaCar, FaMotorcycle, FaBox } from 'react-icons/fa';
import { Modal } from './modal';
import { Moto } from './moto';
import { Coche } from './coche';
import { Trastero } from './trastero';

const services = [
  {
    icon: <FaMotorcycle className="text-white text-4xl" />,
    title: 'Plaza de Parking de Moto',
    name: 'moto',
  },
  {
    icon: <FaCar className="text-white text-4xl" />,
    title: 'Plaza de Parking de Coche',
    name: 'coche',
  },
  {
    icon: <FaBox className="text-white text-4xl" />,
    title: 'Trasteros',
    name: 'trastero',
  },
];

export const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeService, setActiveService] = useState(null);

  const openModal = (name) => {
    setActiveService(name);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1000);
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
    <section id="services" className="py-16 bg-gray-100 z-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">SERVICIOS</h2>
        <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-800 leading-relaxed md:text-center md:px-16">
          Abierto las 24 horas del día los 365 días del año.
          <br />
          Fácil acceso gracias a su puerta automática de 3.5x6 metros.
          <br />
          Videovigilancia permanente que asegura la seguridad del cliente y sus
          pertenencias ante robos, incendios y/o desperfectos.
          <br />
          Salida de emergencia peatonal.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-300 p-6 rounded-2xl shadow-lg flex flex-col items-center w-full transition-transform duration-300 cursor-pointer
      ${
        isMobile
          ? activeIndex === index
            ? 'scale-110'
            : ''
          : 'hover:scale-110'
      }`}
              onClick={() => openModal(service.name)}
            >
              <div className="bg-[#1F2937] p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!activeService}
        onRequestClose={closeModal}
        fullScreen={false}
      >
        {activeService === 'moto' && <Moto />}
        {activeService === 'coche' && <Coche />}
        {activeService === 'trastero' && <Trastero />}
      </Modal>
    </section>
  );
};
