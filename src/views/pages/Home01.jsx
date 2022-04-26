import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import heroSliderData from "../../assets/fake-data/data-slider";
import Slider from "../../components/slider/Slider";
import Subscribe from "../../components/layouts/Subscribe";
import FAQ from "./FAQ";
import Team from "./Team";
import RoadMap from "./RoadMap";
import AboutUs from "./AboutUs";

const Home01 = () => {
  return (
    <div className="home-1">
      <Header />
      <div style={{ top: "90%", left: "30%" }} className="shape item-w-16" />
      <div style={{ top: "110%", left: "10%" }} className="shape item-w-22" />
      <div style={{ top: "120%", left: "88%" }} className="shape item-w-32" />
      <div style={{ top: "120%", left: "67%" }} className="shape item-w-48" />
      <Slider data={heroSliderData} />
      <div style={{ top: "130%", left: "30%" }} className="shape item-w-16" />
      <div style={{ top: "190%", left: "90%" }} className="shape item-w-22" />
      <div style={{ top: "120%", left: "88%" }} className="shape item-w-32" />
      <div style={{ top: "180%", left: "15%" }} className="shape item-w-48" />
      {/* <Subscribe /> */}
      <AboutUs />
      <div style={{ top: "280%", left: "88%" }} className="shape item-w-16" />
      <div style={{ top: "185%", left: "58%" }} className="shape item-w-22" />
      <div style={{ top: "270%", left: "17%" }} className="shape item-w-32" />
      <div style={{ top: "195%", left: "78%" }} className="shape item-w-48" />
      <RoadMap />
      <div style={{ top: "300%", left: "2%" }} className="shape item-w-16" />
      <div style={{ top: "320%", left: "90%" }} className="shape item-w-22" />
      <div style={{ top: "290%", left: "88%" }} className="shape item-w-32" />
      <div style={{ top: "305%", left: "15%" }} className="shape item-w-48" />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home01;
