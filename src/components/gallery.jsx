import { useState, useRef } from 'react';
import Slider from 'react-slick';
import './slider.css';
import { Modal } from './modal';

const images = [
];

export const Gallery = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <section id="gallery" className="py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">GALERÍA</h2>
      <div className="relative w-[90%]">
        <Slider ref={sliderRef} {...settings} className="gallery-slider">
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div
                className={`transition-transform duration-300 ${
                  index === currentSlide ? 'scale-100' : 'scale-85'
                }`}
              >
                <img
                  src='comida.jpg'
                  className="rounded-lg shadow-lg w-full h-auto"
                  onClick={() => openModal()}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} fullScreen={false}>
        <img src={images[currentSlide]} />
      </Modal>
    </section>
  );
};
