import { CustomSlider } from './slider';
import './slider.css';

const images = [
  'motos/1.jpg',
  'motos/2.jpg',
  'motos/3.jpg',
  'motos/4.jpg',
  'motos/5.jpg',
  'motos/6.jpg',
  'motos/7.jpg',
];

export const Moto = () => {
  return (
    <section id="moto" className="py-28 bg-gray-200 w-full h-full">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Plaza de Parking de Moto
        </h2>
        <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-800 leading-relaxed md:text-center md:px-16">
          Plazas exclusivas para motos de fácil acceso y ubicacion estratégica
          en el espacio. Cada una dispone de una taquilla individual con
          cerradura para garantizar una mayor comidad al cliente.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <CustomSlider images={images} />
      </div>
    </section>
  );
};
