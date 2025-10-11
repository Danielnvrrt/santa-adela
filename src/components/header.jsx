import { useState, useEffect } from 'react';
import { Video, buildSrc } from '@imagekit/react';

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

  const videoSrc = !isPortrait
    ? '/horizontal_compressed.mp4'
    : '/vertical_compressed.mp4';
  const posterSrc = buildSrc({
    urlEndpoint: 'https://ik.imagekit.io/jlms4iyhtv',
    src: !isPortrait
      ? 'horizontal_compressed.mp4/ik-thumbnail.jpg'
      : 'vertical_compressed.mp4/ik-thumbnail.jpg',
  });

  return (
    <header id="header" className="relative w-screen h-screen">
      <div className="fixed inset-0 -z-10">
        <Video
          urlEndpoint="https://ik.imagekit.io/jlms4iyhtv"
          src={videoSrc}
          autoPlay
          muted
          poster={posterSrc}
          playsInline
        />
      </div>
    </header>
  );
};
