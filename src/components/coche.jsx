import { CustomSlider } from './slider';
import './slider.css';

const images = ['coches/1.jpg', 'coches/2.jpg', 'coches/1.mp4', 'coches/3.jpg'];

export const Coche = () => {
  return (
    <section id="coche" className="py-28 bg-gray-200 w-full h-full">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Plaza de Parking de Coche
        </h2>
        <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-800 leading-relaxed md:text-center md:px-16">
          Amplias plazas diseñadas para automóviles de todo tipo de medidas que
          permiten realizar maniobras seguras, así como estacionar el vehículo
          sin grandes dificultades.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <CustomSlider images={images} />
      </div>
    </section>
  );
};
