import { CustomSlider } from './slider';

const images = ['inicio/1.jpg', 'inicio/2.jpg', 'inicio/3.jpg', 'inicio/4.jpg', 'inicio/5.jpg', 'inicio/1.mp4', 'inicio/6.jpg'];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">GALERÍA</h2>
      <CustomSlider images={images} />
    </section>
  );
};
