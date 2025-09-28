import { useState, useEffect } from 'react';
import { Image } from '@imagekit/react';

export const Header = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // comprobar al inicio
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" className="relative w-screen h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          urlEndpoint="https://ik.imagekit.io/jlms4iyhtv/"
          src={isPortrait ? 'movil.jpg' : 'inicio/2.jpg'}
          className="z-1 object-cover w-full h-full"
          alt="Imagen de cabecera"
        />
      </div>
    </header>
  );
};
