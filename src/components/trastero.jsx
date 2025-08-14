import { CustomSlider } from './slider';
import './slider.css';

const images = [
  'trasteros/1.jpg',
  'trasteros/2.jpg',
  'trasteros/3.jpg',
];

export const Trastero = () => {
  return (
    <section id="trastero" className="py-28 bg-gray-200 w-full h-full">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Trasteros</h2>
        <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-800 leading-relaxed md:text-center md:px-16">
          Trasteros privados que disponen de carretillas y seguridad permanente,
          enfocados para un uso particular y profesional. Tienen fácil acceso
          para la carga y descarga incluso con tu propio vehículo.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <CustomSlider images={images} />
      </div>
    </section>
  );
};
