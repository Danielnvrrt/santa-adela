import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import "./App.css";
import { Navigation } from "./components/navigation";
import { IKContext } from "imagekitio-react";
import { Services } from "./components/services";
import { Location } from "./components/location";

const IMAGEKIT_ENDPOINT =
  "https://ik.imagekit.io/2ljl3qha5/santa-adela/SantaAdela";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  header: "[data-scroll-header]",
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <IKContext urlEndpoint={IMAGEKIT_ENDPOINT}>
      <div>
        <Navigation />
        <Header />
        <Services />
        <Location />
      </div>
    </IKContext>
  );
};

export default App;
