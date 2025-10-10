import { useState, useEffect } from 'react';

export const Header = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" className="relative w-screen h-screen">
      <div className="fixed inset-0 -z-10">
        <video
          src={
            !isPortrait
              ? '/videos/horizontal.mp4'
              : '/videos/vertical.mp4'
          }
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          preload="auto"
        />
      </div>
    </header>
  );
};
