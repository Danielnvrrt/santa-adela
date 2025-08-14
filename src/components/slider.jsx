import { useState, useRef } from 'react';
import Slider from 'react-slick';
import './slider.css';
import { Modal } from './modal';
import { IKImage, IKVideo } from 'imagekitio-react';

export const CustomSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const openModal = (index) => {
    setSelectedSlide(index);
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
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <>
      <div className="relative w-[90%]">
        <Slider ref={sliderRef} {...settings} className="gallery-slider">
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div
                className={`transition-transform duration-300 ${
                  index === currentSlide ? 'scale-100' : 'scale-85'
                }`}
              >
                {image.endsWith('.jpg') ? (
                  <IKImage
                    path={image}
                    className="rounded-lg shadow-lg w-full h-auto"
                    onClick={() => openModal(index)}
                  />
                ) : (
                  <IKVideo
                    path={image}
                    muted
                    autoPlay
                    loop
                    className="rounded-lg shadow-lg w-full h-auto"
                    onClick={() => openModal(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} fullScreen={true}>
        <div className="w-full">
          {images[selectedSlide].endsWith('.jpg') ? (
            <IKImage
              path={images[selectedSlide]}
              className="rounded-lg shadow-lg max-w-full max-h-full"
            />
          ) : (
            <IKVideo
              path={images[selectedSlide]}
              muted
              autoPlay
              loop
              className="rounded-lg shadow-lg max-w-full max-h-full"
            />
          )}
        </div>
      </Modal>
    </>
  );
};
