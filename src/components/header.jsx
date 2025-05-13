import { IKImage } from 'imagekitio-react';

export const Header = () => {
  return (
    <header
      id="header"
      className="relative h-screen flex items-center justify-center text-[#F9FAFB] bg-white my-10"
    >
      <IKImage
        path="logo_fondo.png"
        className="absolute z-1 object-cover"
        alt="Background"
      />
    </header>
  );
};
