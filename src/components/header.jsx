import { IKImage } from "imagekitio-react";

export const Header = () => {
  return (
    <header
      id="header"
      className="relative h-screen flex items-center justify-center text-[#F9FAFB]"
    >
      <IKImage
        path="parking.jpg"
        className="absolute w-full h-full object-cover"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          ALQUILER TRASTEROS Y <br></br>PLAZAS DE PARKING
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Disponemos de trasteros y plazas de parking en calle Santa Adela,
          Peligros, Granada. Seguridad, accesibilidad y comodidad a tu alcance.
        </p>
        <a
          href="#services"
          className="mt-6 inline-block bg-[#1E3A8A] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
        >
          Más información
        </a>
      </div>
    </header>
  );
};
