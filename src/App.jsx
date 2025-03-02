import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import "./App.css";
import { Navigation } from "./components/navigation";
import { IKContext } from "imagekitio-react";

const IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/2ljl3qha5/santa-adela/SantaAdela";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
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
        <Header data={landingPageData.Header} />
        <Header data={landingPageData.Header} />
        <Header data={landingPageData.Header} />
        <Header data={landingPageData.Header} />
      </div>
    </IKContext>
  );
};

export default App;
