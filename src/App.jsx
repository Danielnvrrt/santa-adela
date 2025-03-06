import React, { useState, useEffect, useRef } from "react";
import SmoothScroll from "smooth-scroll";
import { Header } from "./components/header";
import "./App.css";
import { Navigation } from "./components/navigation";
import { IKContext } from "imagekitio-react";
import { Services } from "./components/services";
import { Location } from "./components/location";
import { ContactForm } from "./components/contact";

const IMAGEKIT_ENDPOINT =
  "https://ik.imagekit.io/jlms4iyhtv/";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  header: "[data-scroll-header]",
});

const App = () => {

  return (
    <IKContext urlEndpoint={IMAGEKIT_ENDPOINT}>
      <Navigation />
      <Header />
      <Services />
      <Location />
      <ContactForm />
    </IKContext>
  );
};

export default App;
