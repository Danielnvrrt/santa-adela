import SmoothScroll from 'smooth-scroll';
import { Header } from './components/header';
import './App.css';
import { Navigation } from './components/navigation';
import { IKContext } from 'imagekitio-react';
import { Services } from './components/services';
import { Location } from './components/location';
import { ContactForm } from './components/contact';
import { Gallery } from './components/gallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactModal from 'react-modal';

const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/jlms4iyhtv/';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  header: '[data-scroll-header]',
});

ReactModal.setAppElement('#root');

const App = () => {
  return (
    <IKContext urlEndpoint={IMAGEKIT_ENDPOINT}>
      <Navigation />
      <Header />
      <Services />
      <Gallery />
      <Location />
      <ContactForm />
    </IKContext>
  );
};

export default App;
