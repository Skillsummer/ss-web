import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";

const App = () => {
  const openLinkInNewTab = () => {
    return;
  };
  return (
    <>
      <Header> </Header>

      <div className="main-content-box d-flex align-items-center">
        <div className="main-text-box d-flex flex-column">
          <div className="line1 mt"> Looking For an Internship?</div>
          <div className="line2 mt">
            {" "}
            We Transform Students Into Industry Professionals
          </div>
          <div className="line3 mt"> Elevate your skills with us</div>
          <div className="line4 mt">
            {" "}
            <button className="apply-now" onClick={openLinkInNewTab}>
              Apply Now
            </button>
          </div>
        </div>

        <div className="d-flex ">
          <div className="info-card">
            <div className="card-points">
              <div>• Full Stack Web Development</div>
              <div>• Product Management</div>
              <div>• Data Analyst</div>
              <div>• Marketing </div>
              <div>• Finance </div>
              <div>• HR </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default App;
